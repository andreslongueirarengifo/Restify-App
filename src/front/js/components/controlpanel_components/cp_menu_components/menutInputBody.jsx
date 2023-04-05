import React, { useContext, useEffect } from "react";
import { Menu_categories_table } from "./menu_categories_table.jsx";

import { Category_tables } from "./category_tables.jsx";
export const MenuInputBody = (props) => {
	const webName = props.webName

	return (
		<div className="container p-4">
			<div className="container-fluid p-0">
				<h2 className="mb-4">Actualiza el contenido de tu menu</h2>
			</div>
			<div className="container-fluid cpbody-container shadow-sm p-3">
				<div className="row px-5">
					<h2 className="caption-text mb-2">Categorías</h2>
					<p className="mb-4">
						¡Agrega cuantas categorías quieras! 🤩
					</p>
					<Menu_categories_table/>
					<h2 className="caption-text mb-2 mt-5">Platos</h2>
					<p className="mb-4">
						Dentro de las categorías podrás añadir tus platos 😋
					</p>
					<Category_tables webName={webName} className="dishes-table"/>
				</div>
			</div>
		</div>
	);
};
