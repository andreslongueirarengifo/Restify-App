import React from "react";

export const LoadingSpinner = () => {
	return (
		<div className="position-absolute top-50 start-50 translate-middle">
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};
