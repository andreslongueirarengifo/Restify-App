import React from "react";

//import components
import { RegisterBodyInputSide } from "./register_body_inputside.jsx";
import { RegisterBodyPreviewSide } from "./register_body_previewside.jsx";

export const RegisterBody = () => {
    return(
        <div className="container-sm mt-4 m-auto">
            <div className="container-fluid p-0 d-flex justify-content-center shadow">
                <RegisterBodyPreviewSide />
                <RegisterBodyInputSide />
            </div>
        </div>
    )
}