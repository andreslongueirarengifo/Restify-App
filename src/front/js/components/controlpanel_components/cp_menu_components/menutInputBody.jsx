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
					<Menu_categories_table/>
					<Category_tables webName={webName}/>
				</div>
			</div>
		</div>
	);
};
