const url_srv = 'https://zkt7kkizv4.execute-api.us-east-1.amazonaws.com/prod/';

export const url_regiones = url_srv + 'getregiones/'; //
export const url_comunas = url_srv + 'getcomunas/'; //  /idregion
export const url_locales = url_srv + 'getlocales/'; //  /idregion/idcomuna
export const url_mesas = url_srv + 'getmesas/'; //  /idregion/idcomuna/idlocal
export const url_mesas_put = url_srv + 'getlocales'; //
export const url_mesas_get = url_srv + 'getlocales'; //  /idmesa

export const url_apoderados_put = url_srv + 'putmodificaapoderado/';
export const url_apoderados_putxrut = url_srv + 'putmodificaapoderadoxrut/';
export const url_apoderados_get = url_srv + 'getapoderadorut/';
export const url_apoderados_nuevo = url_srv + 'putnuevoapoderado';

// CREATE TABLE `AUDITDB`.`APODERADOS` (
//   `Id` INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del registro, generado automáticamente',
//   `RUT` INT NOT NULL COMMENT 'Rol Único Tributario',
//   `DV` CHAR(1) NOT NULL COMMENT 'Dígito verificador: ‘0’…’9’ ‘K’',
//   `NOMBRES` VARCHAR(100) NOT NULL COMMENT 'Nombres',
//   `APELLIDO_PATERNO` VARCHAR(50) NOT NULL COMMENT 'Apellido Paterno',
//   `APELLIDO_MATERNO` VARCHAR(50) NOT NULL COMMENT 'Apellido Materno',
//   `TELEFONO_MOVIL` INT NOT NULL COMMENT 'Teléfono móvil 9 dígitos',
//   `EMAIL` VARCHAR(100) NOT NULL COMMENT 'Correo electrónico',
//   `TIPO_LOCAL_MESA` VARCHAR(1) NOT NULL COMMENT 'Tipo de Apoderado:\n‘L’: Local\n‘M’: Mesa',
//   `CODIGO_REGION_VOTA` VARCHAR(2) NOT NULL COMMENT 'Código de Región donde la persona Vota',
//   `CODIGO_COMUNA_VOTA` VARCHAR(5) NOT NULL COMMENT 'Código de Comuna donde la persona Vota',
//   `CODIGO_LOCAL_VOTA` INT NOT NULL COMMENT 'Código de Local donde la persona Vota.',
//   `MESA_VOTA` VARCHAR(45) NOT NULL COMMENT 'Mesa donde la persona Vota.',
//   `PREFERENCIA_APODERADO` INT(1) NOT NULL COMMENT 'Código de Preferencia de la persona para ejercer de apoderado:\n\n1- Mismo Local Y Misma Mesa (a la suya registrada)\n2- Mismo Local Y Cualquier Mesa del Local\n3- Misma Comuna Y Cualquier Local (y cualquier Mesa)\n4- Otra Comuna (especificar) Y Otro Local (especificar) (y cualquier Mesa)\n5- Otra Comuna (especificar)  Y Cualquier Local (y cualquier Mesa)\n\n\n',
//   `VALIDADO` BINARY(1) NOT NULL DEFAULT 0 COMMENT 'Los datos entregados están validados y es confiable',
//   `VALIDADO_CUANDO` DATETIME NULL COMMENT 'Cuando se terminó el proceso de validación',
//   `CONTACTADO` BINARY(1) NOT NULL DEFAULT 0 COMMENT 'Indica si el el Apoderado fue contactado o no',
//   `CONTACTADO_CUANDO` DATETIME NULL COMMENT 'Indica fecha y hora cuando fue contactado el apoderado',
//   `ASIGNADO` BINARY(1) NOT NULL DEFAULT 0 COMMENT 'Indica si el apoderado fue asignado',
//   `ASIGNADO_CUANDO` DATETIME NULL COMMENT 'Fecha y hora cuando se hizo la asignación',
//   `ASIGNACION_COMUNICADA` BINARY(1) NOT NULL DEFAULT 0 COMMENT 'Indica si se comunicó la asignación al apoderado',
//   `ASIGNACION_COMUNICADA_CUANDO` DATETIME NULL COMMENT 'Fecha y hora cuando se comunicó la asignación definitiva al apoderado',
//   `CODIGO_COMUNA_ASIGNADA` VARCHAR(5) NULL COMMENT 'Código de la comuna asignada al apoderado',
//   `CODIGO_LOCAL_ASIGNADO` INT NULL COMMENT 'Código de Local Asignado al apoderado',
//   `CODIGO_MESA_ASIGNADA` VARCHAR(45) NULL COMMENT 'Código de mesa Asignado al Apoderado ‘*’ para todas las mesas en caso de apoderado de local',
//   PRIMARY KEY (`Id`),
//   UNIQUE INDEX `RUT_UNIQUE` (`RUT` ASC) VISIBLE);

// {
//     "RUT": "8259563",
//     "DV": "5",
//     "NOMBRES": "CARLOS",
//     "APELLIDO_PATERNO": "THOMAS",
//     "APELLIDO_MATERNO": "SUHR",
//     "TELEFONO_MOVIL": "992319554",
//     "EMAIL": "C_THOMAS_S@HOTMAIL.COM",
//     "TIPO_LOCAL_MESA": "M",
//     "CODIGO_REGION_VOTA": "13",
//     "CODIGO_COMUNA_VOTA": "13403",
//     "CODIGO_LOCAL_VOTA": "1000",
//     "MESA_VOTA": "38V",
//     "PREFERENCIA_APODERADO": "1",
//     "VALIDADO": "0",
//     "VALIDADO_CUANDO": "None",
//     "RECHAZADO": "0",
//     "RECHAZADO_CUANDO": "None",
//     "RECHAZADO_MOTIVO": "None",
//     "CONTACTADO": "1",
//     "CONTACTADO_CUANDO": "2022-08-12 11:09:00",
//     "ASIGNADO": "1",
//     "ASIGNADO_CUANDO": "2022-08-12 12:30:00",
//     "ASIGNACION_COMUNICADA": "1",
//     "ASIGNACION_COMUNICADA_CUANDO": "2022-08-12 13:25:00",
//     "CODIGO_COMUNA_ASIGNADA": "13403",
//     "CODIGO_LOCAL_ASIGNADO": "1000",
//     "CODIGO_MESA_ASIGNADA": "38V",
//     "SE_PRESENTO_DIA_DE_VOTACION": "0"
// }
