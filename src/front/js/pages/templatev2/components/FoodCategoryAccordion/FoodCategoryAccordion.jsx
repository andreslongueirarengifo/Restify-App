import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import { englishToSpanish } from "./translations";

export const FoodCategoryAccordion = (props) => {
	const { category, dishList } = props;
	const { store, actions } = useContext(Context);

	const { colorback1, colorback2, color1, color2, font, image_link, food_categories } = store.templateData;

	const containerStyle = {
		backgroundColor: colorback2,
	};

	const bodyTextStyle = {
		color: color1,
		fontFamily: font,
	};

	const accordionItemStyle = {
		fontFamily: font,
		color: color1,
		margin: "0",
	};

	const accordionTitleStyle = {
		fontFamily: font,
		color: colorback1,
		fontWeight: "bold",
		padding: "1rem",
		margin: "0",
	};

	const allergenItemStyle = {
		backgroundColor: `${colorback1}26`,
		color: colorback1,
		marginRight: "0.15rem",
		padding: "0.15rem 0.4rem",
		borderRadius: "0.25rem",
		font: font,
	};

	const trueKeys = (obj) => {
		return Object.entries(obj)
			.filter(([key, value]) => value === true)
			.map(([key, value]) => englishToSpanish[key]);
	};

	return (
		<div className="col-md-8 mx-auto" style={containerStyle}>
			<p style={accordionTitleStyle}>{category}</p>
			<div className="accordion accordion-flush mb-4" id={`${category}-accordion`}>
				{dishList &&
					dishList.map((dish, index) => {
						return (
							<div key={index} className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#${category}-${index}`}
										aria-expanded="false"
										aria-controls={`${category}-${index}`}
									>
										<div
											style={{
												width: "100%",
												display: "flex",
												justifyContent: "space-between",
												padding: "0rem 2rem 0rem 1rem",
											}}
										>
											<p style={accordionItemStyle}>{dish.name}</p>
											<p style={accordionItemStyle}>{`${dish.price}€`}</p>
										</div>
									</button>
								</h2>
								<div
									id={`${category}-${index}`}
									class="accordion-collapse collapse"
									data-bs-parent={`#${category}-accordion`}
								>
									<div class="accordion-body">
										<div className="row">
											<div className="col-md-4">
												<img
													src={dish.photo_url}
													alt="photo"
													style={{
														width: "100%",
														height: "15rem",
														objectFit: "cover",
														borderRadius: "0.25rem",
														marginBottom: "0.5rem",
														paddingRight: "0.5rem"
													}}
												/>
											</div>
											<div className="col-md-4">
												<p style={{ ...bodyTextStyle, fontWeight: "bold" }}>Descripción:</p>
												<p style={bodyTextStyle}>{dish.description}</p>
											</div>
											<div className="col-md-4">
												<p style={{ ...bodyTextStyle, fontWeight: "bold" }}>Listado de alergenos:</p>
												<ul style={{ listStyle: "none", padding: "0" }}>
													{trueKeys(dish.allergens).map((allergen, index) => {
														return (
															<li key={index} style={{ ...allergenItemStyle, display: "inline-block" }}>
																{allergen}
															</li>
														);
													})}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};
