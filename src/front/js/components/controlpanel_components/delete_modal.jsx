import React from "react";

export const ConfirmDeleteModal = () => {
	return (
		<div
			className="modal fade modal-fade-blur"
			id="confirmDeleteModal"
			tabIndex="-1"
			aria-labelledby="confirmDeleteModal"
			aria-hidden="false"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content modal-rounded-corners">
					<h2 className="modal-title text-center" id="confirmDeleteModal">
						Advertencia
					</h2>
					<div className="modal-body p-0 py-3 col-12">
						<p className="text-center">Estas por eliminar el restaurante. ¿Deseas continuar?</p>
					</div>
					<button type="button" className="btn btn-primary btn-form btn-restify-primary col-12" data-bs-dismiss="modal">
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
};
