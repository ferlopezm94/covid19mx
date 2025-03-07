// const parseOrigen = (input) => {
//   let output;

//   switch (input) {
//     default:
//       output = 'DESCONOCIDO';
//       break;
//   }

//   return output;
// };

const expectedColumnsAndOrder = [
  'FECHA_ACTUALIZACION',
  'ID_REGISTRO',
  'ORIGEN',
  'SECTOR',
  'ENTIDAD_UM',
  'SEXO',
  'ENTIDAD_NAC',
  'ENTIDAD_RES',
  'MUNICIPIO_RES',
  'TIPO_PACIENTE',
  'FECHA_INGRESO',
  'FECHA_SINTOMAS',
  'FECHA_DEF',
  'INTUBADO',
  'NEUMONIA',
  'EDAD',
  'NACIONALIDAD',
  'EMBARAZO',
  'HABLA_LENGUA_INDIG',
  'INDIGENA',
  'DIABETES',
  'EPOC',
  'ASMA',
  'INMUSUPR',
  'HIPERTENSION',
  'OTRA_COM',
  'CARDIOVASCULAR',
  'OBESIDAD',
  'RENAL_CRONICA',
  'TABAQUISMO',
  'OTRO_CASO',
  'TOMA_MUESTRA_LAB',
  'RESULTADO_LAB',
  'TOMA_MUESTRA_ANTIGENO',
  'RESULTADO_ANTIGENO',
  'CLASIFICACION_FINAL',
  'MIGRANTE',
  'PAIS_NACIONALIDAD',
  'PAIS_ORIGEN',
  'UCI',
];

const caseStateName = stateName => {
  let casedStateName;

  switch (stateName) {
    case 'COAHUILA DE ZARAGOZA':
      return 'Coahuila';
    case 'CIUDAD DE MÉXICO':
      return 'Ciudad de México';
    case 'MICHOACÁN DE OCAMPO':
      return 'Michoacán';
    case 'VERACRUZ DE IGNACIO DE LA LLAVE':
      return 'Veracruz';
    default:
      casedStateName = stateName.toLowerCase().split(' ');
      break;
  }

  for (let i = 0; i < casedStateName.length; i++) {
    casedStateName[i] = casedStateName[i].charAt(0).toUpperCase() + casedStateName[i].substring(1);
  }

  return casedStateName.join(' ');
};

const parseResultado = input => {
  let output;

  switch (input) {
    case 1:
      output = 'POSITIVO';
      break;
    case 2:
      output = 'NEGATIVO';
      break;
    case 3:
      output = 'PENDIENTE';
      break;
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

const parseMunicipio = input => {
  let output;

  switch (input) {
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

const parseSexo = input => {
  let output;

  switch (input) {
    case '1':
      output = 'HOMBRE';
      break;
    case '2':
      output = 'MUJER';
      break;
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

const parseEntidades = input => {
  let output;

  switch (input) {
    case 1:
      output = 'AGUASCALIENTES';
      break;
    case 2:
      output = 'BAJA CALIFORNIA';
      break;
    case 3:
      output = 'BAJA CALIFORNIA SUR';
      break;
    case 4:
      output = 'CAMPECHE';
      break;
    case 5:
      output = 'COAHUILA DE ZARAGOZA';
      break;
    case 6:
      output = 'COLIMA';
      break;
    case 7:
      output = 'CHIAPAS';
      break;
    case 8:
      output = 'CHIHUAHUA';
      break;
    case 9:
      output = 'CIUDAD DE MÉXICO';
      break;
    case 10:
      output = 'DURANGO';
      break;
    case 11:
      output = 'GUANAJUATO';
      break;
    case 12:
      output = 'GUERRERO';
      break;
    case 13:
      output = 'HIDALGO';
      break;
    case 14:
      output = 'JALISCO';
      break;
    case 15:
      output = 'MÉXICO';
      break;
    case 16:
      output = 'MICHOACÁN DE OCAMPO';
      break;
    case 17:
      output = 'MORELOS';
      break;
    case 18:
      output = 'NAYARIT';
      break;
    case 19:
      output = 'NUEVO LEÓN';
      break;
    case 20:
      output = 'OAXACA';
      break;
    case 21:
      output = 'PUEBLA';
      break;
    case 22:
      output = 'QUERÉTARO';
      break;
    case 23:
      output = 'QUINTANA ROO';
      break;
    case 24:
      output = 'SAN LUIS POTOSÍ';
      break;
    case 25:
      output = 'SINALOA';
      break;
    case 26:
      output = 'SONORA';
      break;
    case 27:
      output = 'TABASCO';
      break;
    case 28:
      output = 'TAMAULIPAS';
      break;
    case 29:
      output = 'TLAXCALA';
      break;
    case 30:
      output = 'VERACRUZ DE IGNACIO DE LA LLAVE';
      break;
    case 31:
      output = 'YUCATÁN';
      break;
    case 32:
      output = 'ZACATECAS';
      break;
    case 36:
      output = 'ESTADOS UNIDOS MEXICANOS';
      break;
    case 97:
      output = 'NO APLICA';
      break;
    case 98:
      output = 'SE IGNORA';
      break;
    case 99:
      output = 'NO ESPECIFICADO';
      break;
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

const parseSector = input => {
  let output;

  switch (input) {
    case '1':
      output = 'CRUZ ROJA';
      break;
    case '2':
      output = 'DIF';
      break;
    case '3':
      output = 'ESTATAL';
      break;
    case '4':
      output = 'IMSS';
      break;
    case '5':
      output = 'IMSS-BIENESTAR';
      break;
    case '6':
      output = 'ISSSTE';
      break;
    case '7':
      output = 'MUNICIPAL';
      break;
    case '8':
      output = 'PEMEX';
      break;
    case '9':
      output = 'PRIVADA';
      break;
    case '10':
      output = 'SEDENA';
      break;
    case '11':
      output = 'SEMAR';
      break;
    case '12':
      output = 'SSA';
      break;
    case '13':
      output = 'UNIVERSITARIO';
      break;
    case '99':
      output = 'NO ESPECIFICADO';
      break;
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

const parseOrigen = input => {
  let output;

  switch (input) {
    case '1':
      output = 'USMER';
      break;
    case '2':
      output = 'FUERA DE USMER';
      break;
    case '99':
      output = 'NO ESPECIFICADO';
      break;
    default:
      output = 'DESCONOCIDO';
      break;
  }

  return output;
};

module.exports = {
  caseStateName,
  expectedColumnsAndOrder,
  parseOrigen,
  parseSector,
  parseEntidades,
  parseSexo,
  parseMunicipio,
  parseResultado,
};
