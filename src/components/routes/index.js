import { Routes, Route } from 'react-router-dom';

// paginas
import Home from '../../views/home/Home';

// paginas
import Contacto from '../../views/home/contacto/Contacto';
import RegistroApoderados from '../../views/apoderados/RegistroApoderados';
import Seleccion from '../../views/mantencion/Seleccion';
import NominaApoderados from '../../views/mantencion/NominaApoderados';
import Mantencion from '../../views/mantencion/Mantencion';
import MantencionPersonales from '../../views/mantencion/MantencionPersonales';
import MantencionLocal from '../../views/mantencion/MantencionLocal';
import MantencionSeleccionados from '../../views/mantencion/MantencionSeleccionado';
import Contactados from '../../views/mantencion/Contactados';
import NoPuede from '../../views/mantencion/NoPuede';
import Nomina from '../../views/mnt/Nomina';
import Ricardo from '../../views/mnt/Ricardo';

import PrivacidadMain from '../../views/terminoscondiciones/PrivacidadMain';
import SeguridadClaveMain from '../../views/terminoscondiciones/SeguridadClaveMain';
import TerminosUsoMain from '../../views/terminoscondiciones/TerminosUsoMain';

import PrivacidadConfidencialidad from '../../views/terminoscondiciones/PrivacidadConfidencialidad';
import PrivacidadPrivacidad from '../../views/terminoscondiciones/PrivacidadPrivacidad';
import SeguridadCompromiso from '../../views/terminoscondiciones/SeguridadCompromiso';
import SeguridadResguardo from '../../views/terminoscondiciones/SeguridadResguardo';
import TerminosDerechosPropiedad from '../../views/terminoscondiciones/TerminosDerechosPropiedad';
import TerminosLicenciaLimitada from '../../views/terminoscondiciones/TerminosLicenciaLimitada';
import TerminosProhibicionUso from '../../views/terminoscondiciones/TerminosProhibicionUso';
import TerminosAceptacionTerminos from '../../views/terminoscondiciones/TerminosAceptacionTerminos';
import TerminosObligacionesUsuarios from '../../views/terminoscondiciones/TerminosObligacionesUsuarios';
import TerminosModificacionesSitio from '../../views/terminoscondiciones/TerminosModificacionesSitio';
import TerminosResponsabilidadPortal from '../../views/terminoscondiciones/TerminosResponsabilidadPortal';
import TerminosPropiedadIndustrial from '../../views/terminoscondiciones/TerminosPropiedadIndustrial';
import TerminosCodigoConducta from '../../views/terminoscondiciones/TerminosCodigoConducta';
import TerminosVinculosSitios from '../../views/terminoscondiciones/TerminosVinculosSitios';
import TerminosForosPublicos from '../../views/terminoscondiciones/TerminosForosPublicos';
import TerminosInformacionPrivada from '../../views/terminoscondiciones/TerminosInformacionPrivada';
import TerminosDerechoMonitoreo from '../../views/terminoscondiciones/TerminosDerechoMonitoreo';
import TerminosPoliticaIdeas from '../../views/terminoscondiciones/TerminosPoliticaIdeas';
import TerminosRenunciaGarantia from '../../views/terminoscondiciones/TerminosRenunciaGarantia';
import TerminosLimitacionResponsabilidad from '../../views/terminoscondiciones/TerminosLimitacionResponsabilidad';
import TerminosMarcasComerciales from '../../views/terminoscondiciones/TerminosMarcasComerciales';
import TerminosLegislacionAplicable from '../../views/terminoscondiciones/TerminosLegislacionAplicable';
import TerminosContratacionServicios from '../../views/terminoscondiciones/TerminosContratacionServicios';
import TerminosTerminos from '../../views/terminoscondiciones/TerminosTerminos';

export const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registroapoderados" element={<RegistroApoderados />} />
				<Route path="/seleccion" element={<Seleccion />} />
				{/* <Route path="/nomina" element={<NominaApoderados />} /> */}
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/mantencion" element={<Mantencion />} />
				<Route path="/personales" element={<MantencionPersonales />} />
				<Route path="/local" element={<MantencionLocal />} />
				<Route path="/seleccionados" element={<MantencionSeleccionados />} />
				<Route path="/contactados" element={<Contactados />} />
				<Route path="/nopuede" element={<NoPuede />} />
				<Route path="/nomina" element={<Nomina />} />
				<Route path="/ricardo" element={<Ricardo />} />

				<Route path="/terminos" element={<TerminosUsoMain />} />
				<Route path="/seguridad" element={<SeguridadClaveMain />} />
				<Route path="privacidad" element={<PrivacidadMain />} />
				<Route path="privacidad2" element={<PrivacidadPrivacidad />} />
				<Route
					path="privacidad/confidencialidad"
					element={<PrivacidadConfidencialidad />}
				/>
				<Route
					path="confidencionalidad"
					element={<PrivacidadConfidencialidad />}
				/>
				<Route path="seguridadclave" element={<SeguridadClaveMain />} />
				<Route path="compromiso" element={<SeguridadCompromiso />} />
				<Route path="resguardo" element={<SeguridadResguardo />} />

				<Route path="terminosuso" element={<TerminosUsoMain />} />
				<Route
					path="terminosderechos"
					element={<TerminosDerechosPropiedad />}
				/>
				<Route path="terminoslicencia" element={<TerminosLicenciaLimitada />} />
				<Route
					path="terminosprohibiciones"
					element={<TerminosProhibicionUso />}
				/>
				<Route
					path="terminosaceptaciones"
					element={<TerminosAceptacionTerminos />}
				/>
				<Route
					path="terminosobligaciones"
					element={<TerminosObligacionesUsuarios />}
				/>
				<Route
					path="terminosmodificaciones"
					element={<TerminosModificacionesSitio />}
				/>
				<Route
					path="terminosresponsabilidad"
					element={<TerminosResponsabilidadPortal />}
				/>
				<Route
					path="terminospropiedad"
					element={<TerminosPropiedadIndustrial />}
				/>
				<Route
					path="terminoscontratacion"
					element={<TerminosContratacionServicios />}
				/>
				<Route path="terminosconducta" element={<TerminosCodigoConducta />} />
				<Route path="terminosvinculos" element={<TerminosVinculosSitios />} />
				<Route path="terminosforos" element={<TerminosForosPublicos />} />
				<Route
					path="terminosinformacion"
					element={<TerminosInformacionPrivada />}
				/>
				<Route
					path="terminosmonitoreo"
					element={<TerminosDerechoMonitoreo />}
				/>
				<Route path="terminosideas" element={<TerminosPoliticaIdeas />} />
				<Route
					path="terminosgarantias"
					element={<TerminosRenunciaGarantia />}
				/>
				<Route
					path="terminoslimitacion"
					element={<TerminosLimitacionResponsabilidad />}
				/>
				<Route path="terminosmarcas" element={<TerminosMarcasComerciales />} />
				<Route
					path="terminoslegislacion"
					element={<TerminosLegislacionAplicable />}
				/>
				<Route path="terminosterminos" element={<TerminosTerminos />} />
			</Routes>
		</>
	);
};
