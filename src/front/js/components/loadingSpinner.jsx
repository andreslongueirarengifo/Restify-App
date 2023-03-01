import React from "react";

export const LoadingSpinner = () => {
	return (
		<div class="position-absolute top-50 start-50 translate-middle">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};
