import React, { useEffect, useState } from "react";
import { createUser, getUsers } from "../../../service/user_service.js";
import { getRandomAvatar } from "../../../service/external_service.js";

import toast, { Toaster } from "react-hot-toast";

const RegisterModal = () => {
	const [registerForm, setRegisterForm] = useState({});

	const [showButton, setShowButton] = useState(false);

	const [usersList, setUsersList] = useState([]);

	const [emailExist, setEmailExist] = useState(false);

	const [passValidation, setPassValidation] = useState(true);

	useEffect(() => {
		const test = async () => {
			const data = await getUsers();
			setUsersList([...data.result]);
		};
		test();
		setRegisterForm({ ...registerForm, avatar: getRandomAvatar() });
	}, []);

	useEffect(() => {
		if (Object.keys(registerForm).length == 5) {
			if (
				!(
					registerForm.name === "" ||
					registerForm.lastname === "" ||
					registerForm.password === "" ||
					registerForm.passwordRepeat === "" ||
					registerForm.email === ""
				) &&
				emailExist == false
			) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		}
	}, [registerForm]);

	useEffect(() => {
		setPassValidation(registerForm.password === registerForm.passwordRepeat);
	}, [registerForm]);

	const handleChange = (event) => {
		setRegisterForm({ ...registerForm, [event.target.id]: event.target.value });
	};

	const handleChangeEmail = (e) => {
		setRegisterForm({ ...registerForm, [e.target.id]: e.target.value });
		let arrayEmails = [];
		usersList.map((el) => {
			arrayEmails.push(el.email);
		});
		setEmailExist(arrayEmails.includes(e.target.value));
	};

	const handleClick = async (event) => {
		event.preventDefault();
		createUser(registerForm);
		toast.success("Registro exitoso😎");
	};

	return (
		<>
			{/* <!-- Button trigger modal --> */}
			<button
				type="button"
				className="btn btn-secondary btn-restify-primary btn-rounded"
				data-bs-toggle="modal"
				data-bs-target="#registerModal"
				style={{ fontSize: "1.25rem" }}
			>
				Regístrate
			</button>

			{/* <!-- Modal --> */}
			<div
				className="modal fade modal-fade-blur"
				id="registerModal"
				tabIndex="-1"
				aria-labelledby="registerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<div className="modal-content modal-rounded-corners">
						<label className="modal-title text-center h3" id="registerModalLabel">
							Crea tu cuenta de <span style={{ color: "#352970" }}>Restify</span>
						</label>
						<div className="modal-body p-0 py-3">
							<div className="row">
								<div className="col">
									<label htmlFor="name" className="form-label">
										Nombre *
									</label>
									<input type="text" onKeyUp={handleChange} id="name" className="form-control" aria-label="Nombre" />
								</div>

								<div className="col">
									<label htmlFor="lastname" className="form-label">
										Apellidos *
									</label>
									<input
										type="text"
										onKeyUp={handleChange}
										id="lastname"
										className="form-control"
										aria-label="Apellidos"
									/>
								</div>
							</div>
							<div className="row py-3">
								<div className="col">
									<label htmlFor="email" className="form-label">
										Email *
									</label>
									<input
										type="text"
										onKeyUp={handleChangeEmail}
										id="email"
										className="form-control"
										aria-label="Email"
									/>
									{emailExist ? (
										<label style={{ color: "#A81409" }}>El email ya ha sido registrado anteriormente</label>
									) : null}
								</div>
							</div>
							<div className="row">
								<div className="col">
									<label htmlFor="password" className="form-label">
										Contraseña *
									</label>
									<input
										type="password"
										onKeyUp={handleChange}
										id="password"
										className="form-control"
										aria-label="Contraseña"
									/>
								</div>
								<div className="col">
									<label htmlFor="passwordRepeat" className="form-label">
										Confirmar contraseña *
									</label>
									<input
										type="password"
										onKeyUp={handleChange}
										id="passwordRepeat"
										className="form-control"
										aria-label="Confirmar contraseña"
									/>
									{!passValidation ? <label style={{ color: "#A81409" }}>Las contraseñas deben coincidir</label> : null}
								</div>
							</div>
							<label style={{ color: "#9f9f9f" }}>Los campos con * son obligatorios</label>
						</div>
						{!showButton ? (
							<button
								onClick={handleClick}
								type="button"
								className="btn btn-restify btn-restify-primary btn-form"
								disabled
							>
								Registrar usuario
							</button>
						) : (
							<button
								onClick={handleClick}
								type="button"
								className="btn btn-restify btn-restify-primary btn-form"
								data-bs-dismiss="modal"
							>
								Registrar usuario
							</button>
						)}
					</div>
				</div>
			</div>

			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default RegisterModal;
