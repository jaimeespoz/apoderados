// modulos
import { useState } from 'react';

// imagenes
import Imagen from '../../../components/assets/images/contactenos.jpg';

const initialForm = {
	mail_subjet: '',
	mail_nombre: '',
	mail_telefono: '',
	mail_destino: '',
	mail_mensaje: '',
	Terminos: false,
};

const ContactoForm = () => {
	const [form, setForm] = useState(initialForm);

	const handleSubmit = (e) => {
		e.preventDefault();

		// if (!form.Nombre || !form.Correo || !form.Telefono) {
		// 	alert('Datos Incompletos');
		// 	return;
		// }
		alert('enviado');
		console.log(form);
		// EmailContacto(form);
		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChecked = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		});
	};

	return (
		<main>
			<div className="container-row jc-center mh">
				<section className="flex-auto">
					<p className="titulo-xl fc-grey my-4">Contactenos</p>
					<div className="container-row jc-center gap-8">
						<section className="flex-auto2 wd-30">
							<div className="container-row jc-center">
								<article className="flex-auto">
									<div className="container-row">
										<section className="flex-auto">
											<p className="texto-md fc-grey-light mt-12 mx-10">
												Si desea ponerse en contacto con nosotros puede hacerlo
												al teléfono (569) 9999 9999 o desde el siguiente
												formulario.
											</p>
											<img src={Imagen} alt="Contactenos" className="mt-12" />
										</section>
									</div>
								</article>
							</div>
						</section>
						<section className="flex-auto wd-60">
							<div className="container-row jc-center">
								<section className="flex-auto">
									<div className="container-row jc-center wd-60">
										<div className="flex-auto">
											<p className="titulo-lg fc-grey my-6">
												Ingrese sus Datos
											</p>
										</div>
									</div>
									<div className="container-row jc-center wd-60">
										<div className="flex-auto">
											<form onSubmit={handleSubmit}>
												<div className="container-row bd-1 py-8 px-12">
													<div className="flex-auto">
														<label
															htmlFor="mail_nombre"
															className="form-label-sm"
														>
															Nombre
														</label>
														<input
															type="text"
															className="form-control-sm"
															id="mail_nombre"
															name="mail_nombre"
															value={form.mail_nombre}
															placeholder="Nombre Completo"
															onChange={handleChange}
														/>
														<label
															htmlFor="mail_telefono"
															className="form-label-sm"
														>
															Telefono
														</label>
														<input
															type="text"
															className="form-control-sm"
															id="mail_telefono"
															name="mail_telefono"
															value={form.mail_telefono}
															placeholder="numero de Telefono"
															onChange={handleChange}
														/>
														<label
															htmlFor="mail_destino"
															className="form-label-sm"
														>
															Casilla EMail
														</label>
														<input
															type="text"
															className="form-control-sm"
															id="mail_destino"
															name="mail_destino"
															value={form.mail_destino}
															placeholder="Casilla de Correo"
															onChange={handleChange}
														/>
														{/* </div>
												<div className="flex-auto"> */}
														<label
															htmlFor="mail_mensaje"
															className="form-label-sm"
														>
															Mensajes
														</label>
														<textarea
															id="mail_mensaje"
															name="mail_mensaje"
															cols={72}
															rows={4}
															value={form.mail_mensaje}
															placeholder="Comentarios"
															onChange={handleChange}
															className="text-sm fc-grey"
														/>
														{/* </div>
												<div className="flex-auto"> */}
														<input
															type="checkbox"
															className=""
															id="Terminos"
															name="Terminos"
															onChange={handleChecked}
														/>
														<label htmlFor="Terminos" className="form-label-sm">
															Acepto los Terminos y Condiciones
														</label>
													</div>
												</div>
												<button
													onClick={handleSubmit}
													className="btn-primary mt-4"
												>
													Enviar
												</button>
												<button
													onClick={handleReset}
													className="btn-primary mt-4"
												>
													Limpiar
												</button>
											</form>
										</div>
									</div>
								</section>
							</div>
						</section>
					</div>
				</section>
			</div>
		</main>
	);
};

export default ContactoForm;
