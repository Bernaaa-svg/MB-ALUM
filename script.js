// ==========================================
// MB ALUM
// CALCULADORA DE PESO, COSTO Y PRESUPUESTO
// ==========================================

let ultimoDespiece = [];
let ultimoPresupuesto = null;
let aberturasPresupuesto = [];


// ==========================================
// PERFILES
// kg por metro
// ==========================================

const perfiles = {

  marcoHorizontal: {
    nombre: "Umbral y dintel",
    pesoMetro: 1.30
  },

  marcoVertical: {
    nombre: "Jambas",
    pesoMetro: 0.70
  },

  hojaHorizontal: {
    nombre: "Zócalo y cabezal de hoja",
    pesoMetro: 0.64
  },

  paranteLateral: {
    nombre: "Parante lateral",
    pesoMetro: 0.64
  },

  paranteCentral: {
    nombre: "Parante central",
    pesoMetro: 0.60
  },

  marcoHorizontal3: {
    nombre: "Marco horizontal 691",
    pesoMetro: 1.80
  },

  jambaLateral3: {
    nombre: "Jamba lateral 692",
    pesoMetro: 1.00
  },

  paranteLateral3: {
    nombre: "Parante lateral 653",
    pesoMetro: 0.65
  },

  paranteCentral3: {
    nombre: "Parante central 654",
    pesoMetro: 0.65
  },

  travesano3: {
    nombre: "Travesaño 652",
    pesoMetro: 0.65
  },

  marcoHorizontal4: {
    nombre: "Marco horizontal 651",
    pesoMetro: 1.35
  },

  jambaLateral4: {
    nombre: "Jamba lateral 655",
    pesoMetro: 0.65
  },

  paranteLateral4: {
    nombre: "Parante lateral 653",
    pesoMetro: 0.65
  },

  paranteCentral4: {
    nombre: "Parante central 654",
    pesoMetro: 0.65
  },

  travesano4: {
    nombre: "Travesaño 652",
    pesoMetro: 0.65
  },

  encuentro4: {
    nombre: "Encuentro de hojas 642",
    pesoMetro: 0.30
  },

  hojaBanderola: {
    nombre: "Hoja banderola 637",
    pesoMetro: 0.90
  },

  hojaRebatir: {
    nombre: "Hoja rebatir 696",
    pesoMetro: 0.90
  },

  marco668: {
    nombre: "Marco 668",
    pesoMetro: 0.70
  },

  contravidrio680: {
    nombre: "Contravidrio 680",
    pesoMetro: 0.30
  },

  encuentro694: {
    nombre: "Encuentro 694",
    pesoMetro: 0.85
  },

  marco676: {
    nombre: "Marco 676",
    pesoMetro: 0.75
  },

  hoja675: {
    nombre: "Hoja 675",
    pesoMetro: 1.10
  },

  marco643: {
    nombre: "Marco 643",
    pesoMetro: 1.10
  },

  hoja506: {
    nombre: "Hoja 506",
    pesoMetro: 0.70
  },

  hoja507: {
    nombre: "Hoja 507",
    pesoMetro: 0.60
  },

  umbral651Balcon: {
    nombre: "Umbral 651",
    pesoMetro: 1.30
  },

  jamba655Balcon: {
    nombre: "Jamba lateral 655",
    pesoMetro: 0.60
  },

  parante653Balcon: {
    nombre: "Parante lateral 653",
    pesoMetro: 0.65
  },

  parante654Balcon: {
    nombre: "Parante central 654",
    pesoMetro: 0.65
  },

  zocalo660: {
    nombre: "Zócalo 660",
    pesoMetro: 1.30
  },

  mosquitera685: {
    nombre: "Mosquitera 685",
    pesoMetro: 0.40
  },

  tapaJunta657: {
    nombre: "Tapa junta 657",
    pesoMetro: 0.10
  },

  jambaHoja356: {
    nombre: "Jamba hoja 356",
    pesoMetro: 1.10
  },

  cabezalHoja396: {
    nombre: "Cabezal hoja 396",
    pesoMetro: 1.10
  },

  zocaloPuerta669: {
    nombre: "Zócalo 669",
    pesoMetro: 1.70
  },

  travesanoPuerta670: {
    nombre: "Travesaño puerta 670",
    pesoMetro: 1.10
  },

  premarco: {
    nombre: "Premarco",
    pesoMetro: 0.70
  },

  mosquitero: {
    nombre: "Mosquitero",
    pesoMetro: 0.45
  },


  // ========================================
  // PERFILES PUERTA DOBLE / PORTÓN 3 HOJAS
  // ========================================

  marco668PuertaDoble: {
    nombre: "Marco 668",
    pesoMetro: 0.75
  },

  perfil356PuertaDoble: {
    nombre: "Perfil hoja 356",
    pesoMetro: 1.10
  },

  zocalo669PuertaDoble: {
    nombre: "Zócalo 669",
    pesoMetro: 1.70
  },

  encuentro694PuertaDoble: {
    nombre: "Encuentro de hoja 694",
    pesoMetro: 0.90
  },

  contravidrioExterior672: {
    nombre: "Contravidrio exterior 672",
    pesoMetro: 0.20
  },

  contravidrioInterior646: {
    nombre: "Contravidrio interior 646",
    pesoMetro: 0.30
  }

};


// ==========================================
// NOMBRES DE LOS TIPOS DE ABERTURA
// ==========================================

const nombresTipos = {

  corrediza2:
    "Ventana corrediza 2 hojas",

  corrediza3:
    "Ventana corrediza 3 hojas",

  corrediza4:
    "Ventana corrediza 4 hojas",

  banderola:
    "Banderola",

  rebatir1:
    "Ventana de rebatir 1 hoja",

  rebatir2:
    "Ventana de rebatir 2 hojas",

  panioFijo:
    "Paño fijo",

  desplazable:
    "Ventana desplazable",

  guillotina:
    "Ventana guillotina",

  puertaBalcon2:
    "Puerta balcón 2 hojas",

  puertaBalcon3:
    "Puerta balcón 3 hojas",

  puerta1:
    "Puerta de 1 hoja",

  puertaDoble:
    "Puerta doble",

  porton3:
    "Portón 3 hojas"

};


// ==========================================
// NOMBRES DE LOS VIDRIOS
// ==========================================

const nombresVidrios = {

  "4mm":
    "4 mm",

  "5mm":
    "5 mm",

  "6mm":
    "6 mm",

  "3+3_laminado":
    "3+3 laminado",

  "4+4_laminado":
    "4+4 laminado",

  "5+5_laminado":
    "5+5 laminado",

  "4-9-4_dvh":
    "4-9-4 DVH",

  "4-12-4_dvh":
    "4-12-4 DVH",

  "4-9-5_dvh":
    "4-9-5 DVH",

  "3+3-9-4_dvh":
    "3+3-9-4 DVH",

  "3+3-12-4_dvh":
    "3+3-12-4 DVH",

  "3+3-9-6_dvh":
    "3+3-9-6 DVH",

  "3+3-9-3+3_dvh":
    "3+3-9-3+3 DVH",

  "4+4-9-5_dvh":
    "4+4-9-5 DVH",

  "4+4-12-4+4_dvh":
    "4+4-12-4+4 DVH"

};


// ==========================================
// TRATAMIENTOS
// ==========================================

const nombresTratamientos = {

  blanco:
    "Aluminio blanco",

  negro:
    "Aluminio negro",

  color:
    "Aluminio color",

  anodizadoNatural:
    "Aluminio anodizado natural",

  anodizadoNegro:
    "Aluminio anodizado negro",

  anodizadoColor:
    "Aluminio anodizado color"

};


// ==========================================
// FUNCIÓN PRINCIPAL
// ==========================================

function calcularPeso() {

  const tipo =
    document
      .getElementById("tipo")
      .value;


  const cantidad =
    Number(
      document
        .getElementById("cantidad")
        .value
    );


  const A =
    Number(
      document
        .getElementById("ancho")
        .value
    );


  const H =
    Number(
      document
        .getElementById("alto")
        .value
    );


  const tipoVidrio =
    document
      .getElementById("tipoVidrio")
      .value;


  const tratamientoPerfil =
    document
      .getElementById("tratamientoPerfil")
      .value;


  const precioKg =
    Number(
      document
        .getElementById("precioKg")
        .value
    );


  const costoAccesorios =
    Number(
      document
        .getElementById("costoAccesorios")
        .value
    ) || 0;


  const costoVidrios =
    Number(
      document
        .getElementById("costoVidrios")
        .value
    ) || 0;


  if (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
  ) {

    alert(
      "Ingresá una cantidad válida."
    );

    return;
  }


  if (
    A <= 0 ||
    H <= 0
  ) {

    alert(
      "Ingresá un ancho y alto válidos."
    );

    return;
  }


  if (precioKg < 0) {

    alert(
      "Ingresá un precio válido para el aluminio."
    );

    return;
  }


  const incluirPremarco =
    document
      .getElementById("incluirPremarco")
      .checked;


  const incluirMosquitero =
    document
      .getElementById("incluirMosquitero")
      .checked;


  if (
    incluirMosquitero &&
    tipo !== "corrediza2"
  ) {

    alert(
      "El mosquitero adicional está configurado solamente para la ventana corrediza de 2 hojas."
    );

    return;
  }


  ultimoDespiece = [];


  // ========================================
  // SELECCIÓN DE ABERTURA
  // ========================================

  if (tipo === "corrediza2") {

    calcularCorrediza2(A, H);

  } else if (tipo === "corrediza3") {

    calcularCorrediza3(A, H);

  } else if (tipo === "corrediza4") {

    calcularCorrediza4(A, H);

  } else if (tipo === "banderola") {

    calcularBanderola(A, H);

  } else if (tipo === "rebatir1") {

    calcularRebatir1(A, H);

  } else if (tipo === "rebatir2") {

    calcularRebatir2(A, H);

  } else if (tipo === "panioFijo") {

    calcularPanioFijo(A, H);

  } else if (tipo === "desplazable") {

    calcularDesplazable(A, H);

  } else if (tipo === "guillotina") {

    calcularGuillotina(A, H);

  } else if (tipo === "puertaBalcon2") {

    calcularPuertaBalcon2(A, H);

  } else if (tipo === "puertaBalcon3") {

    calcularPuertaBalcon3(A, H);

  } else if (tipo === "puerta1") {

    calcularPuerta1(A, H);

  } else if (tipo === "puertaDoble") {

    calcularPuertaDoble(A, H);

  } else if (tipo === "porton3") {

    calcularPorton3(A, H);

  }


  // ========================================
  // PREMARCO + TAPA JUNTA 657
  // ========================================

  if (incluirPremarco) {

    agregarPieza(
      {
        nombre:
          "Premarco horizontal",

        pesoMetro:
          perfiles.premarco.pesoMetro
      },
      2,
      A + 30,
      "Premarco"
    );


    agregarPieza(
      {
        nombre:
          "Premarco vertical",

        pesoMetro:
          perfiles.premarco.pesoMetro
      },
      2,
      H + 30,
      "Premarco"
    );


    // TAPA JUNTA AUTOMÁTICO

    agregarPieza(
      {
        nombre:
          "Tapa junta 657 horizontal",

        pesoMetro:
          perfiles.tapaJunta657.pesoMetro
      },
      2,
      A + 54,
      "Tapa junta"
    );


    agregarPieza(
      {
        nombre:
          "Tapa junta 657 vertical",

        pesoMetro:
          perfiles.tapaJunta657.pesoMetro
      },
      2,
      H + 54,
      "Tapa junta"
    );

  }


  // ========================================
  // MOSQUITERO
  // ========================================

  if (incluirMosquitero) {

    agregarPieza(
      {
        nombre:
          "Mosquitero horizontal",

        pesoMetro:
          perfiles.mosquitero.pesoMetro
      },
      2,
      (A / 2) - 7,
      "Mosquitero"
    );


    agregarPieza(
      {
        nombre:
          "Mosquitero vertical",

        pesoMetro:
          perfiles.mosquitero.pesoMetro
      },
      2,
      H - 90,
      "Mosquitero"
    );

  }


  // ========================================
  // PESO TOTAL
  // ========================================

  let pesoTotal = 0;


  ultimoDespiece.forEach(
    pieza => {

      pesoTotal +=
        pieza.pesoTotal;

    }
  );


  const pesoTotalPedido =
    pesoTotal *
    cantidad;


  // ========================================
  // COSTOS
  // ========================================

  const costoAluminio =
    pesoTotal *
    precioKg;


  const costoUnitario =
    costoAluminio +

        costoAccesorios +
    costoVidrios;


  const costoTotal =
    costoUnitario *
    cantidad;


  // ========================================
  // MOSTRAR RESULTADOS
  // ========================================

  document
    .getElementById("pesoTotal")
    .textContent =
      pesoTotal.toFixed(2) +
      " kg";


  document
    .getElementById("costoAluminio")
    .textContent =
      formatearDinero(
        costoAluminio
      );


  document
    .getElementById("resultadoAccesorios")
    .textContent =
      formatearDinero(
        costoAccesorios
      );


  document
    .getElementById("resultadoVidrios")
    .textContent =
      formatearDinero(
        costoVidrios
      );


  document
    .getElementById("costoUnitario")
    .textContent =
      formatearDinero(
        costoUnitario
      );


  document
    .getElementById("resultadoCantidad")
    .textContent =
      cantidad;


  document
    .getElementById("costoTotal")
    .textContent =
      formatearDinero(
        costoTotal
      );


  actualizarDibujo(
    A,
    H,
    cantidad,
    tipo
  );


  document
    .getElementById("resultado")
    .classList
    .remove("oculto");


  document
    .getElementById("despiece")
    .classList
    .add("oculto");


  // ========================================
  // GUARDAR ÚLTIMO PRESUPUESTO
  // ========================================

  ultimoPresupuesto = {

    tipoCodigo:
      tipo,

    tipo:
      nombresTipos[tipo],

    cantidad:
      cantidad,

    ancho:
      A,

    alto:
      H,

    tipoVidrioCodigo:
      tipoVidrio,

    tipoVidrio:
      nombresVidrios[tipoVidrio],

    tratamientoPerfilCodigo:
      tratamientoPerfil,

    tratamientoPerfil:
      nombresTratamientos[
        tratamientoPerfil
      ],

    incluirPremarco:
      incluirPremarco,

    incluirMosquitero:
      incluirMosquitero,

    pesoUnitario:
      pesoTotal,

    pesoTotalPedido:
      pesoTotalPedido,

    costoUnitario:
      costoUnitario,

    costoTotal:
      costoTotal

  };

}
// ==========================================
// CÁLCULOS DE ABERTURAS
// ==========================================


// ==========================================
// CORREDIZA 2 HOJAS
// ==========================================

function calcularCorrediza2(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.marcoVertical,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaHorizontal,
    4,
    (A / 2) - 24,
    "Abertura"
  );

}


// ==========================================
// CORREDIZA 3 HOJAS
// ==========================================

function calcularCorrediza3(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal3,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaLateral3,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral3,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral3,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.travesano3,
    6,
    (A / 3) - 14,
    "Abertura"
  );

}


// ==========================================
// CORREDIZA 4 HOJAS
// ==========================================

function calcularCorrediza4(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal4,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaLateral4,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral4,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral4,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.travesano4,
    8,
    (A / 4) - 13,
    "Abertura"
  );


  agregarPieza(
    perfiles.encuentro4,
    1,
    H - 79,
    "Abertura"
  );

}


// ==========================================
// BANDEROLA
// ==========================================

function calcularBanderola(A, H) {

  agregarPieza(
    perfiles.hojaBanderola,
    2,
    A - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaBanderola,
    2,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 123,
    "Abertura"
  );

}


// ==========================================
// REBATIR 1 HOJA
// ==========================================

function calcularRebatir1(A, H) {

  agregarPieza(
    perfiles.hojaRebatir,
    2,
    A - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaRebatir,
    2,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 123,
    "Abertura"
  );

}


// ==========================================
// REBATIR 2 HOJAS
// ==========================================

function calcularRebatir2(A, H) {

  agregarPieza(
    perfiles.hojaRebatir,
    4,
    (A / 2) - 23,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaRebatir,
    4,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    4,
    (A / 2) - 107,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    4,
    H - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.encuentro694,
    1,
    H - 94,
    "Abertura"
  );

}


// ==========================================
// PAÑO FIJO
// ==========================================

function calcularPanioFijo(A, H) {

  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 50,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 50,
    "Abertura"
  );

}


// ==========================================
// DESPLAZABLE
// ==========================================

function calcularDesplazable(A, H) {

  agregarPieza(
    perfiles.marco676,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco676,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja675,
    2,
    A - 32,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja675,
    2,
    H - 32,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 157,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 157,
    "Abertura"
  );

}


// ==========================================
// GUILLOTINA
// ==========================================

function calcularGuillotina(A, H) {

  agregarPieza(
    perfiles.marco643,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco643,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja506,
    1,
    A - 82,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja506,
    1,
    A - 100,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    1,
    A - 82,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    1,
    A - 100,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    4,
    (H / 2) - 25,
    "Abertura"
  );

}


// ==========================================
// PUERTA BALCÓN 2 HOJAS
// ==========================================

function calcularPuertaBalcon2(A, H) {

  agregarPieza(
    perfiles.umbral651Balcon,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jamba655Balcon,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante653Balcon,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante654Balcon,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.zocalo660,
    4,
    (A / 2) - 24,
    "Abertura"
  );


  agregarPieza(
    perfiles.mosquitera685,
    2,
    H - 90,
    "Abertura"
  );


  agregarPieza(
    perfiles.mosquitera685,
    2,
    (A / 2) - 7,
    "Abertura"
  );


  agregarPieza(
    perfiles.tapaJunta657,
    1,
    A + 54,
    "Abertura"
  );

}


// ==========================================
// PUERTA BALCÓN 3 HOJAS
// ==========================================

function calcularPuertaBalcon3(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal3,
    2,
    A - 42,
    "Abertura"
  );

  agregarPieza(
    perfiles.jambaLateral3,
    2,
    H,
    "Abertura"
  );

  agregarPieza(
    perfiles.parante653Balcon,
    2,
    H - 79,
    "Abertura"
  );

  agregarPieza(
    perfiles.parante654Balcon,
    4,
    H - 79,
    "Abertura"
  );

  agregarPieza(
    perfiles.zocalo660,
    6,
    (A / 3) - 14,
    "Abertura"
  );

  agregarPieza(
    perfiles.tapaJunta657,
    1,
    A + 54,
    "Abertura"
  );

  agregarPieza(
    perfiles.tapaJunta657,
    2,
    H + 27,
    "Abertura"
  );

}

        costoAccesorios +
    costoVidrios;


  const costoTotal =
    costoUnitario *
    cantidad;


  // ========================================
  // MOSTRAR RESULTADOS
  // ========================================

  document
    .getElementById("pesoTotal")
    .textContent =
      pesoTotal.toFixed(2) +
      " kg";


  document
    .getElementById("costoAluminio")
    .textContent =
      formatearDinero(
        costoAluminio
      );


  document
    .getElementById("resultadoAccesorios")
    .textContent =
      formatearDinero(
        costoAccesorios
      );


  document
    .getElementById("resultadoVidrios")
    .textContent =
      formatearDinero(
        costoVidrios
      );


  document
    .getElementById("costoUnitario")
    .textContent =
      formatearDinero(
        costoUnitario
      );


  document
    .getElementById("resultadoCantidad")
    .textContent =
      cantidad;


  document
    .getElementById("costoTotal")
    .textContent =
      formatearDinero(
        costoTotal
      );


  actualizarDibujo(
    A,
    H,
    cantidad,
    tipo
  );


  document
    .getElementById("resultado")
    .classList
    .remove("oculto");


  document
    .getElementById("despiece")
    .classList
    .add("oculto");


  // ========================================
  // GUARDAR ÚLTIMO PRESUPUESTO
  // ========================================

  ultimoPresupuesto = {

    tipoCodigo:
      tipo,

    tipo:
      nombresTipos[tipo],

    cantidad:
      cantidad,

    ancho:
      A,

    alto:
      H,

    tipoVidrioCodigo:
      tipoVidrio,

    tipoVidrio:
      nombresVidrios[tipoVidrio],

    tratamientoPerfilCodigo:
      tratamientoPerfil,

    tratamientoPerfil:
      nombresTratamientos[
        tratamientoPerfil
      ],

    incluirPremarco:
      incluirPremarco,

    incluirMosquitero:
      incluirMosquitero,

    pesoUnitario:
      pesoTotal,

    pesoTotalPedido:
      pesoTotalPedido,

    costoUnitario:
      costoUnitario,

    costoTotal:
      costoTotal

  };
  // ==========================================
  // CÁLCULOS DE ABERTURAS
  // ==========================================


// ==========================================
// CORREDIZA 2 HOJAS
// ==========================================

function calcularCorrediza2(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.marcoVertical,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaHorizontal,
    4,
    (A / 2) - 24,
    "Abertura"
  );

}


// ==========================================
// CORREDIZA 3 HOJAS
// ==========================================

function calcularCorrediza3(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal3,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaLateral3,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral3,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral3,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.travesano3,
    6,
    (A / 3) - 14,
    "Abertura"
  );

}


// ==========================================
// CORREDIZA 4 HOJAS
// ==========================================

function calcularCorrediza4(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal4,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaLateral4,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteLateral4,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.paranteCentral4,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.travesano4,
    8,
    (A / 4) - 13,
    "Abertura"
  );


  agregarPieza(
    perfiles.encuentro4,
    1,
    H - 79,
    "Abertura"
  );

}


// ==========================================
// BANDEROLA
// ==========================================

function calcularBanderola(A, H) {

  agregarPieza(
    perfiles.hojaBanderola,
    2,
    A - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaBanderola,
    2,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 123,
    "Abertura"
  );

}


// ==========================================
// REBATIR 1 HOJA
// ==========================================

function calcularRebatir1(A, H) {

  agregarPieza(
    perfiles.hojaRebatir,
    2,
    A - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaRebatir,
    2,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 123,
    "Abertura"
  );

}


// ==========================================
// REBATIR 2 HOJAS
// ==========================================

function calcularRebatir2(A, H) {

  agregarPieza(
    perfiles.hojaRebatir,
    4,
    (A / 2) - 23,
    "Abertura"
  );


  agregarPieza(
    perfiles.hojaRebatir,
    4,
    H - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    4,
    (A / 2) - 107,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    4,
    H - 123,
    "Abertura"
  );


  agregarPieza(
    perfiles.encuentro694,
    1,
    H - 94,
    "Abertura"
  );

}


// ==========================================
// PAÑO FIJO
// ==========================================

function calcularPanioFijo(A, H) {

  agregarPieza(
    perfiles.marco668,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco668,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 50,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 50,
    "Abertura"
  );

}


// ==========================================
// DESPLAZABLE
// ==========================================

function calcularDesplazable(A, H) {

  agregarPieza(
    perfiles.marco676,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco676,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja675,
    2,
    A - 32,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja675,
    2,
    H - 32,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    A - 157,
    "Abertura"
  );


  agregarPieza(
    perfiles.contravidrio680,
    2,
    H - 157,
    "Abertura"
  );

}


// ==========================================
// GUILLOTINA
// ==========================================

function calcularGuillotina(A, H) {

  agregarPieza(
    perfiles.marco643,
    2,
    A,
    "Abertura"
  );


  agregarPieza(
    perfiles.marco643,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja506,
    1,
    A - 82,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja506,
    1,
    A - 100,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    1,
    A - 82,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    1,
    A - 100,
    "Abertura"
  );


  agregarPieza(
    perfiles.hoja507,
    4,
    (H / 2) - 25,
    "Abertura"
  );

}


// ==========================================
// PUERTA BALCÓN 2 HOJAS
// ==========================================

function calcularPuertaBalcon2(A, H) {

  agregarPieza(
    perfiles.umbral651Balcon,
    2,
    A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jamba655Balcon,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante653Balcon,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante654Balcon,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.zocalo660,
    4,
    (A / 2) - 24,
    "Abertura"
  );


  agregarPieza(
    perfiles.mosquitera685,
    2,
    H - 90,
    "Abertura"
  );


  agregarPieza(
    perfiles.mosquitera685,
    2,
    (A / 2) - 7,
    "Abertura"
  );


  agregarPieza(
    perfiles.tapaJunta657,
    1,
    A + 54,
    "Abertura"
  );

}


// ==========================================
// PUERTA BALCÓN 3 HOJAS
// ==========================================

function calcularPuertaBalcon3(A, H) {

  agregarPieza(
    perfiles.marcoHorizontal3,
    2,

        A - 42,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaLateral3,
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante653Balcon,
    2,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.parante654Balcon,
    4,
    H - 79,
    "Abertura"
  );


  agregarPieza(
    perfiles.zocalo660,
    6,
    (A / 3) - 14,
    "Abertura"
  );


  agregarPieza(
    perfiles.tapaJunta657,
    1,
    A + 54,
    "Abertura"
  );


  agregarPieza(
    perfiles.tapaJunta657,
    2,
    H + 27,
    "Abertura"
  );

}


// ==========================================
// PUERTA 1 HOJA
// ==========================================

function calcularPuerta1(A, H) {

  agregarPieza(
    {
      nombre:
        "Marco dintel 668",

      pesoMetro:
        perfiles.marco668.pesoMetro
    },
    1,
    A,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Marco jamba 668",

      pesoMetro:
        perfiles.marco668.pesoMetro
    },
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    perfiles.jambaHoja356,
    2,
    H - 24,
    "Abertura"
  );


  agregarPieza(
    perfiles.cabezalHoja396,
    1,
    A - 39,
    "Abertura"
  );


  agregarPieza(
    perfiles.zocaloPuerta669,
    1,
    A - 192,
    "Abertura"
  );


  agregarPieza(
    perfiles.travesanoPuerta670,
    1,
    A - 192,
    "Abertura"
  );

}


// ==========================================
// PUERTA DOBLE
// ==========================================

function calcularPuertaDoble(A, H) {

  agregarPieza(
    {
      nombre:
        "Marco horizontal 668",

      pesoMetro:
        perfiles.marco668PuertaDoble.pesoMetro
    },
    1,
    A,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Marco vertical 668",

      pesoMetro:
        perfiles.marco668PuertaDoble.pesoMetro
    },
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Cabeza de hoja 356",

      pesoMetro:
        perfiles.perfil356PuertaDoble.pesoMetro
    },
    2,
    (A / 2) - 23,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Patas de hojas 356",

      pesoMetro:
        perfiles.perfil356PuertaDoble.pesoMetro
    },
    4,
    H - 24,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Zócalo 669",

      pesoMetro:
        perfiles.zocalo669PuertaDoble.pesoMetro
    },
    2,
    (A / 2) - 175,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Encuentro de hoja 694",

      pesoMetro:
        perfiles.encuentro694PuertaDoble.pesoMetro
    },
    1,
    H - 52,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio exterior 672 horizontal",

      pesoMetro:
        perfiles.contravidrioExterior672.pesoMetro
    },
    4,
    (A / 2) - 175,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio exterior 672 vertical",

      pesoMetro:
        perfiles.contravidrioExterior672.pesoMetro
    },
    4,
    H - 223,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio interior 646 horizontal",

      pesoMetro:
        perfiles.contravidrioInterior646.pesoMetro
    },
    4,
    (A / 2) - 175,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio interior 646 vertical",

      pesoMetro:
        perfiles.contravidrioInterior646.pesoMetro
    },
    4,
    H - 223,
    "Abertura"
  );

}


// ==========================================
// PORTÓN 3 HOJAS
// ==========================================

function calcularPorton3(A, H) {

  agregarPieza(
    {
      nombre:
        "Marco horizontal 668",

      pesoMetro:
        perfiles.marco668PuertaDoble.pesoMetro
    },
    1,
    A,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Marco vertical 668",

      pesoMetro:
        perfiles.marco668PuertaDoble.pesoMetro
    },
    2,
    H,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Cabezal de hoja 356",

      pesoMetro:
        perfiles.perfil356PuertaDoble.pesoMetro
    },
    3,
    (A - 52) / 3,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Patas de hojas 356",

      pesoMetro:
        perfiles.perfil356PuertaDoble.pesoMetro
    },
    6,
    H - 24,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Encuentro de hoja 694",

      pesoMetro:
        perfiles.encuentro694PuertaDoble.pesoMetro
    },
    2,
    H - 52,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Zócalo 669",

      pesoMetro:
        perfiles.zocalo669PuertaDoble.pesoMetro
    },
    3,
    (A - 508) / 3,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio exterior 672 vertical",

      pesoMetro:
        perfiles.contravidrioExterior672.pesoMetro
    },
    6,
    H - 223,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio exterior 672 horizontal",

      pesoMetro:
        perfiles.contravidrioExterior672.pesoMetro
    },
    6,
    (A - 508) / 3,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio interior 646 vertical",

      pesoMetro:
        perfiles.contravidrioInterior646.pesoMetro
    },
    6,
    H - 223,
    "Abertura"
  );


  agregarPieza(
    {
      nombre:
        "Contravidrio interior 646 horizontal",

      pesoMetro:
        perfiles.contravidrioInterior646.pesoMetro
    },
    6,
    (A - 508) / 3,
    "Abertura"
  );

}


// ==========================================
// AGREGAR UNA PIEZA AL DESPIECE
// ==========================================

function agregarPieza(
  perfil,
  cantidad,
  largoMm,
  grupo
) {

  if (largoMm <= 0) {

    console.error(
      "Medida incorrecta:",
      perfil.nombre,
      largoMm
    );

    return;
  }


  const largoMetros =
    largoMm / 1000;


  const metrosTotales =
    largoMetros *
    cantidad;


  const pesoTotal =
    metrosTotales *
    perfil.pesoMetro;


  ultimoDespiece.push({

    grupo:
      grupo,

    nombre:
      perfil.nombre,

    cantidad:
      cantidad,

    largoMm:
      largoMm,

    largoMetros:
      largoMetros,

    metrosTotales:
      metrosTotales,

    pesoMetro:
      perfil.pesoMetro,

    pesoTotal:
      pesoTotal

  });

}


// ==========================================
// MOSTRAR DESPIECE
// ==========================================

function mostrarDespiece() {

  const contenedor =
    document.getElementById("despiece");


  const cantidadAberturas =
    Number(
      document
        .getElementById("cantidad")
        .value
    );


  contenedor.innerHTML = "";


  let pesoAberturaUnitario = 0;

  let pesoPremarcoUnitario = 0;

  let pesoTapaJuntaUnitario = 0;

  let pesoMosquiteroUnitario = 0;


  ultimoDespiece.forEach(
    pieza => {

      if (
        pieza.grupo === "Abertura"
      ) {

        pesoAberturaUnitario +=
          pieza.pesoTotal;

      }


      if (
        pieza.grupo === "Premarco"
      ) {

        pesoPremarcoUnitario +=
          pieza.pesoTotal;

      }


      if (
        pieza.grupo === "Tapa junta"
      ) {

        pesoTapaJuntaUnitario +=
          pieza.pesoTotal;

      }


      if (
        pieza.grupo === "Mosquitero"
      ) {

        pesoMosquiteroUnitario +=
          pieza.pesoTotal;

      }

    }
  );


  const pesoAberturaTotal =
    pesoAberturaUnitario *
    cantidadAberturas;


  const pesoPremarcoTotal =
    pesoPremarcoUnitario *
    cantidadAberturas;


  const pesoTapaJuntaTotal =
    pesoTapaJuntaUnitario *
    cantidadAberturas;


  const pesoMosquiteroTotal =
    pesoMosquiteroUnitario *
    cantidadAberturas;


  const pesoGeneralTotal =
    pesoAberturaTotal +
    pesoPremarcoTotal +
    pesoTapaJuntaTotal +
    pesoMosquiteroTotal;


  const resumen =
    document.createElement("div");

      resumen.innerHTML = `

    <h3>
      Resumen del pedido
    </h3>


    <p>

      <strong>
        Cantidad de aberturas:
      </strong>

      ${cantidadAberturas}

    </p>


    <p>

      <strong>
        Peso de aluminio de las aberturas:
      </strong>

      ${pesoAberturaTotal.toFixed(2)}
      kg

    </p>


    ${
      pesoPremarcoTotal > 0

        ? `

          <p>

            <strong>
              Peso total de premarcos:
            </strong>

            ${pesoPremarcoTotal.toFixed(2)}
            kg

          </p>

        `

        : ""
    }


    ${
      pesoTapaJuntaTotal > 0

        ? `

          <p>

            <strong>
              Peso total de tapa juntas:
            </strong>

            ${pesoTapaJuntaTotal.toFixed(2)}
            kg

          </p>

        `

        : ""
    }


    ${
      pesoMosquiteroTotal > 0

        ? `

          <p>

            <strong>
              Peso total de mosquiteros:
            </strong>

            ${pesoMosquiteroTotal.toFixed(2)}
            kg

          </p>

        `

        : ""
    }


    <p>

      <strong>
        PESO TOTAL DEL PEDIDO:
      </strong>

      ${pesoGeneralTotal.toFixed(2)}
      kg

    </p>

  `;


  contenedor.appendChild(
    resumen
  );


  ultimoDespiece.forEach(
    pieza => {


      const cantidadTotalPiezas =
        pieza.cantidad *
        cantidadAberturas;


      const metrosTotalesPedido =
        pieza.metrosTotales *
        cantidadAberturas;


      const pesoTotalPedido =
        pieza.pesoTotal *
        cantidadAberturas;


      const fila =
        document.createElement("div");


      fila.classList.add(
        "fila"
      );


      fila.innerHTML = `

        <strong>
          ${pieza.nombre}
        </strong>

        <br>

        Grupo:
        ${pieza.grupo}

        <br>

        Cantidad por abertura:
        ${pieza.cantidad}

        <br>

        <strong>
          Cantidad total:
          ${cantidadTotalPiezas}
        </strong>

        <br>

        Corte por pieza:
        ${pieza.largoMm.toFixed(0)}
        mm

        <br>

        Metros totales:
        ${metrosTotalesPedido.toFixed(3)}
        m

        <br>

        Peso del perfil:
        ${pieza.pesoMetro.toFixed(2)}
        kg/m

        <br>

        <strong>
          Peso total:
          ${pesoTotalPedido.toFixed(2)}
          kg
        </strong>

      `;


      contenedor.appendChild(
        fila
      );

    }
  );


  contenedor
    .classList
    .toggle("oculto");

}


// ==========================================
// FORMATEAR DINERO
// ==========================================

function formatearDinero(numero) {

  return numero.toLocaleString(
    "es-AR",
    {

      style:
        "currency",

      currency:
        "ARS",

      maximumFractionDigits:
        0

    }
  );

}


// ==========================================
// AGREGAR ABERTURA AL PRESUPUESTO
// ==========================================

function agregarAberturaAlPresupuesto() {

  if (!ultimoPresupuesto) {

    alert(
      "Primero calculá la abertura."
    );

    return;

  }


  const descripcion =
    document
      .getElementById("descripcion")
      .value;


  const aberturaGuardada = {

    ...ultimoPresupuesto,

    descripcion:
      descripcion,

    despiece:
      ultimoDespiece.map(
        pieza => ({
          ...pieza
        })
      )

  };


  aberturasPresupuesto.push(
    aberturaGuardada
  );


  mostrarListaPresupuesto();


  const mensaje =
    document.getElementById(
      "mensajeAgregado"
    );


  mensaje.textContent =
    `${aberturaGuardada.tipo} agregada al presupuesto.`;


  mensaje.classList.remove(
    "oculto"
  );


  setTimeout(
    () => {

      mensaje.classList.add(
        "oculto"
      );

    },
    2500
  );

}


// ==========================================
// ELIMINAR ABERTURA DEL PRESUPUESTO
// ==========================================

function eliminarAberturaPresupuesto(
  indice
) {

  if (
    indice < 0 ||
    indice >=
      aberturasPresupuesto.length
  ) {

    return;

  }


  aberturasPresupuesto.splice(
    indice,
    1
  );


  mostrarListaPresupuesto();

}


// ==========================================
// MOSTRAR LISTA DE ABERTURAS
// ==========================================

function mostrarListaPresupuesto() {

  const contenedor =
    document.getElementById(
      "presupuestoMultiple"
    );


  const lista =
    document.getElementById(
      "listaAberturas"
    );


  const totalElemento =
    document.getElementById(
      "totalGeneralPresupuesto"
    );


  if (
    aberturasPresupuesto.length === 0
  ) {

    lista.innerHTML = "";


    totalElemento.textContent =
      formatearDinero(0);


    contenedor.classList.add(
      "oculto"
    );


    return;

  }


  lista.innerHTML = "";


  aberturasPresupuesto.forEach(
    (abertura, indice) => {


      const item =
        document.createElement(
          "div"
        );


      item.classList.add(
        "item-presupuesto"
      );


      item.innerHTML = `

        <div
          class="item-presupuesto-cabecera"
        >

          <div>


            <div
              class="item-presupuesto-titulo"
            >

              ${indice + 1}.
              ${escaparHTML(
                abertura.tipo
              )}

            </div>


            <div
              class="item-presupuesto-datos"
            >

              Medidas:
              ${abertura.ancho}
              ×
              ${abertura.alto}
              mm

              <br>

              Cantidad:
              ${abertura.cantidad}

              <br>

              Vidrio:
              ${escaparHTML(
                abertura.tipoVidrio
              )}

              <br>

              Tratamiento:
              ${escaparHTML(
                abertura.tratamientoPerfil
              )}


              ${
                abertura.incluirPremarco

                  ? `

                    <br>

                    Premarco:
                    Sí

                    <br>

                    Tapa junta 657:
                    Sí

                  `

                  : ""
              }


              ${
                abertura.incluirMosquitero

                  ? `

                    <br>

                    Mosquitero:
                    Sí

                  `

                  : ""
              }

            </div>


            <div
              class="item-presupuesto-subtotal"
            >

              Precio por unidad:
              ${formatearDinero(
                abertura.costoUnitario
              )}

              <br>

              Subtotal:
              ${formatearDinero(
                abertura.costoTotal
              )}

            </div>

          </div>


          <button
            type="button"
            class="boton-eliminar-abertura"
            onclick="eliminarAberturaPresupuesto(${indice})"
          >

            ELIMINAR

          </button>


        </div>

      `;


      lista.appendChild(
        item
      );

    }
  );


  const totalGeneral =
    aberturasPresupuesto.reduce(

      (
        total,
        abertura
      ) =>

        total +
        abertura.costoTotal,

      0

    );


  totalElemento.textContent =
    formatearDinero(
      totalGeneral
    );


  contenedor.classList.remove(
    "oculto"
  );

}


// ==========================================
// CREAR DIBUJO EN LA PÁGINA
// ==========================================

function crearDibujo(tipo) {


  if (
    tipo === "corrediza2"
  ) {

    return `

      <div class="hoja">

        <div class="flecha">
          →
        </div>

      </div>


      <div class="hoja">

        <div class="flecha">
          ←
        </div>

      </div>

    `;

  }


  if (
    tipo === "corrediza3"
  ) {

    return `

      <div
        class="hoja hoja-tres"
      >

        <div class="flecha">
          →
        </div>

      </div>


      <div
        class="hoja hoja-tres"
      >

        <div class="flecha">
          ←
        </div>

      </div>


      <div
        class="hoja hoja-tres"
      >

        <div class="flecha">
          →
        </div>

      </div>

    `;

  }


  if (
    tipo === "corrediza4"
  ) {

    return `

      <div
        class="hoja hoja-cuatro"
      >

        <div class="flecha">
          →
        </div>

      </div>


      <div
        class="hoja hoja-cuatro"
      >

        <div class="flecha">
          ←
        </div>

      </div>


      <div
        class="hoja hoja-cuatro"
      >

        <div class="flecha">          →
        </div>

      </div>


      <div
        class="hoja hoja-cuatro"
      >

        <div class="flecha">
          ←
        </div>

      </div>

    `;

  }


  if (
    tipo === "banderola"
  ) {

    return `

      <div
        class="panel-unico banderola"
      >

        <span
          class="simbolo-abertura"
        >
          ▽
        </span>

      </div>

    `;

  }


  if (
    tipo === "rebatir1"
  ) {

    return `

      <div
        class="panel-unico rebatir"
      >

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>

    `;

  }


  if (
    tipo === "rebatir2"
  ) {

    return `

      <div
        class="rebatir-doble"
      >

        <span
          class="simbolo-abertura"
        >
          ▷
        </span>

      </div>


      <div
        class="rebatir-doble"
      >

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>

    `;

  }


  if (
    tipo === "panioFijo"
  ) {

    return `

      <div
        class="panel-unico panio-fijo"
      >

        <span
          class="simbolo-abertura"
        >
          +
        </span>

      </div>

    `;

  }


  if (
    tipo === "desplazable"
  ) {

    return `

      <div
        class="desplazable-panel"
      >

        <div
          class="rombo"
        ></div>

      </div>

    `;

  }


  if (
    tipo === "guillotina"
  ) {

    return `

      <div
        class="guillotina"
      >

        <div
          class="guillotina-hoja"
        >
          ↑
        </div>

        <div
          class="guillotina-hoja"
        >
          ↓
        </div>

      </div>

    `;

  }


  if (
    tipo === "puertaBalcon2"
  ) {

    return `

      <div
        class="balcon-hoja balcon-dos"
      ></div>

      <div
        class="balcon-hoja balcon-dos"
      ></div>

    `;

  }


  if (
    tipo === "puertaBalcon3"
  ) {

    return `

      <div
        class="balcon-hoja balcon-tres"
      ></div>

      <div
        class="balcon-hoja balcon-tres"
      ></div>

      <div
        class="balcon-hoja balcon-tres"
      ></div>

    `;

  }


  if (
    tipo === "puerta1"
  ) {

    return `

      <div
        class="panel-unico puerta-una-hoja"
      >

        <div
          class="puerta-travesano"
        ></div>

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>

    `;

  }


  if (
    tipo === "puertaDoble"
  ) {

    return `

      <div
        class="rebatir-doble"
      >

        <span
          class="simbolo-abertura"
        >
          ▷
        </span>

      </div>


      <div
        class="rebatir-doble"
      >

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>

    `;

  }


  if (
    tipo === "porton3"
  ) {

    return `

      <div
        class="balcon-hoja balcon-tres"
      >

        <span
          class="simbolo-abertura"
        >
          ▷
        </span>

      </div>


      <div
        class="balcon-hoja balcon-tres"
      >

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>


      <div
        class="balcon-hoja balcon-tres"
      >

        <span
          class="simbolo-abertura"
        >
          ◁
        </span>

      </div>

    `;

  }


  return "";

}


// ==========================================
// ACTUALIZAR DIBUJO
// ==========================================

function actualizarDibujo(
  A,
  H,
  cantidad,
  tipo
) {

  const ventana =
    document.getElementById(
      "dibujoVentana"
    );


  const tipoVisual =
    document.getElementById(
      "tipoVisual"
    );


  const medidaAncho =
    document.getElementById(
      "medidaAncho"
    );


  const medidaAlto =
    document.getElementById(
      "medidaAlto"
    );


  const medidaCompleta =
    document.getElementById(
      "medidaCompleta"
    );


  const cantidadVisual =
    document.getElementById(
      "cantidadVisual"
    );


  ventana.innerHTML =
    crearDibujo(tipo);


  tipoVisual.textContent =
    nombresTipos[tipo];


  medidaAncho.textContent =
    A + " mm";


  medidaAlto.textContent =
    H + " mm";


  medidaCompleta.textContent =
    A +
    " × " +
    H +
    " mm";


  cantidadVisual.textContent =
    cantidad;


  let anchoVisual = 450;

  let altoVisual =
    anchoVisual *
    (H / A);


  if (
    altoVisual > 260
  ) {

    altoVisual = 260;

    anchoVisual =
      altoVisual *
      (A / H);

  }


  if (
    anchoVisual < 150
  ) {

    anchoVisual = 150;

  }


  ventana.style.width =
    anchoVisual + "px";


  ventana.style.height =
    altoVisual + "px";


  const elementoMedidaAlto =
    document.querySelector(
      ".medida-alto"
    );


  if (
    elementoMedidaAlto
  ) {

    elementoMedidaAlto.style.height =
      altoVisual + "px";

  }

}


// ==========================================
// ESCAPAR HTML
// ==========================================

function escaparHTML(texto) {

  if (
    texto === undefined ||
    texto === null
  ) {

    return "";

  }


  return String(texto)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


// ==========================================
// CREAR DIBUJO PARA PDF
// ==========================================

function crearDibujoPDF(tipo) {


  if (
    tipo === "corrediza2"
  ) {

    return `

      <div class="pdf-panel mitad">
        <span>→</span>
      </div>

      <div class="pdf-panel mitad">
        <span>←</span>
      </div>

    `;

  }


  if (
    tipo === "corrediza3"
  ) {

    return `

      <div class="pdf-panel tercio">
        <span>→</span>
      </div>

      <div class="pdf-panel tercio">
        <span>←</span>
      </div>

      <div class="pdf-panel tercio">
        <span>→</span>
      </div>

    `;

  }


  if (
    tipo === "corrediza4"
  ) {

    return `

      <div class="pdf-panel cuarto">
        <span>→</span>
      </div>

      <div class="pdf-panel cuarto">
        <span>←</span>
      </div>

      <div class="pdf-panel cuarto">
        <span>→</span>
      </div>

      <div class="pdf-panel cuarto">
        <span>←</span>
      </div>

    `;

  }


  if (
    tipo === "banderola"
  ) {

    return `

      <div class="pdf-panel completo">
        <span>▽</span>
      </div>

    `;

  }


  if (
    tipo === "rebatir1"
  ) {

    return `

      <div class="pdf-panel completo">
        <span>◁</span>
      </div>

    `;

  }


  if (
    tipo === "rebatir2"
  ) {

    return `

      <div class="pdf-panel mitad">
        <span>▷</span>
      </div>

      <div class="pdf-panel mitad">
        <span>◁</span>
      </div>

    `;

  }


  if (
    tipo === "panioFijo"
  ) {

    return `

      <div class="pdf-panel completo">
        <span>+</span>
      </div>

    `;
      }


  if (
    tipo === "desplazable"
  ) {

    return `

      <div class="pdf-panel completo">
        <span>◇</span>
      </div>

    `;

  }


  if (
    tipo === "guillotina"
  ) {

    return `

      <div class="pdf-guillotina">

        <div class="pdf-guillotina-hoja">
          ↑
        </div>

        <div class="pdf-guillotina-hoja">
          ↓
        </div>

      </div>

    `;

  }


  if (
    tipo === "puertaBalcon2"
  ) {

    return `

      <div class="pdf-panel mitad"></div>

      <div class="pdf-panel mitad"></div>

    `;

  }


  if (
    tipo === "puertaBalcon3"
  ) {

    return `

      <div class="pdf-panel tercio"></div>

      <div class="pdf-panel tercio"></div>

      <div class="pdf-panel tercio"></div>

    `;

  }


  if (
  tipo === "puerta1"
) {

  return `

    <div class="pdf-panel completo pdf-puerta-una">

      <div class="pdf-puerta-hoja">

        <div class="pdf-puerta-vidrio">
          <span class="pdf-apertura-puerta">◁</span>
        </div>

        <div class="pdf-puerta-travesano"></div>

        <div class="pdf-puerta-panel-inferior"></div>

        <div class="pdf-puerta-zocalo"></div>

      </div>

    </div>

  `;
}

  if (
    tipo === "puertaDoble"
  ) {

    return `

      <div class="pdf-panel mitad">
        <span>▷</span>
      </div>

      <div class="pdf-panel mitad">
        <span>◁</span>
      </div>

    `;

  }


  if (
    tipo === "porton3"
  ) {

    return `

      <div class="pdf-panel tercio">
        <span>▷</span>
      </div>

      <div class="pdf-panel tercio">
        <span>◁</span>
      </div>

      <div class="pdf-panel tercio">
        <span>◁</span>
      </div>

    `;

  }


  return "";

}


// ==========================================
// OBTENER DATOS DEL CLIENTE
// ==========================================

function obtenerDatosCliente() {

  const nombre =
    document.getElementById(
      "nombreCliente"
    );


  const domicilio =
    document.getElementById(
      "domicilioCliente"
    );


  const telefono =
    document.getElementById(
      "telefonoCliente"
    );


  const observaciones =
    document.getElementById(
      "observaciones"
    );


  return {

    nombre:
      nombre
        ? nombre.value.trim()
        : "",

    domicilio:
      domicilio
        ? domicilio.value.trim()
        : "",

    telefono:
      telefono
        ? telefono.value.trim()
        : "",

    observaciones:
      observaciones
        ? observaciones.value.trim()
        : ""

  };

}


// ==========================================
// GENERAR PDF / PRESUPUESTO IMPRIMIBLE
// ==========================================

// ==========================================
// PROPORCIÓN REAL DEL DIBUJO EN EL PDF
// ==========================================

function obtenerEstiloProporcionPDF(anchoMm, altoMm) {

  const A = Number(anchoMm);
  const H = Number(altoMm);

  if (A <= 0 || H <= 0) {
    return "width:320px; height:210px;";
  }

  const maxAncho = 320;
  const maxAlto = 260;

  let anchoVisual = maxAncho;
  let altoVisual = anchoVisual * (H / A);

  if (altoVisual > maxAlto) {
    altoVisual = maxAlto;
    anchoVisual = altoVisual * (A / H);
  }

  return `
    width:${anchoVisual.toFixed(1)}px;
    height:${altoVisual.toFixed(1)}px;
  `;
}

function generarPDF() {

  const cliente =
    obtenerDatosCliente();


  let aberturas = [];


  if (
    aberturasPresupuesto.length > 0
  ) {

    aberturas =
      aberturasPresupuesto.map(
        abertura => ({
          ...abertura
        })
      );

  } else {

    if (!ultimoPresupuesto) {

      alert(
        "Primero calculá una abertura."
      );

      return;

    }


    const descripcionActual =
      document.getElementById(
        "descripcion"
      );


    aberturas = [

      {

        ...ultimoPresupuesto,

        descripcion:
          descripcionActual
            ? descripcionActual.value.trim()
            : "",

        despiece:
          ultimoDespiece.map(
            pieza => ({
              ...pieza
            })
          )

      }

    ];

  }


  const totalGeneral =
    aberturas.reduce(

      (
        acumulado,
        abertura
      ) =>

        acumulado +
        abertura.costoTotal,

      0

    );


  const logoURL =
    new URL(
      "logo-berardo.png",
      window.location.href
    ).href;


  const ventanaPDF =
    window.open(
      "",
      "_blank"
    );


  if (!ventanaPDF) {

    alert(
      "El navegador bloqueó la ventana del presupuesto. Permití las ventanas emergentes e intentá nuevamente."
    );

    return;

  }


  let contenidoAberturas = "";


  aberturas.forEach(
    (abertura, indice) => {


      const caracteristicas = [];


      caracteristicas.push(
        abertura.tipoVidrio
      );


      caracteristicas.push(
        abertura.tratamientoPerfil
      );


      if (
        abertura.incluirPremarco
      ) {

        caracteristicas.push(
          "Con premarco"
        );


        caracteristicas.push(
          "Con tapa junta 657"
        );

      }


      if (
        abertura.incluirMosquitero
      ) {

        caracteristicas.push(
          "Con mosquitero"
        );

      }


      contenidoAberturas += `

        <section
          class="abertura-presupuesto"
        >

          <div
            class="numero-abertura"
          >
            ABERTURA ${indice + 1}
          </div>


          <div
            class="titulo-abertura"
          >
            ${escaparHTML(
              abertura.tipo
            )}
          </div>


          ${
            abertura.descripcion

              ? `

                <div
                  class="descripcion-abertura"
                >

                  ${escaparHTML(
                    abertura.descripcion
                  )}

                </div>

              `

              : ""
          }


          <div
            class="contenido-abertura"
          >


            <div
              class="lado-dibujo"
            >


             <div
  class="dibujo-pdf"
  style="${obtenerEstiloProporcionPDF(
    abertura.ancho,
    abertura.alto
  )}"
>

  ${abertura.esAcoplado
    ? crearDibujoAcoplePDF(abertura)
    : crearDibujoPDF(abertura.tipoCodigo)
  }

</div>

              <div
                class="medidas-pdf"
              >

                ${abertura.ancho}
                ×
                ${abertura.alto}
                mm

              </div>


              <div
                class="caracteristicas"
              >

                ${caracteristicas
                  .map(
                    item =>
                      `<div>${escaparHTML(item)}</div>`
                  )
                  .join("")
                }

              </div>


            </div>


            <div
              class="lado-precio"
            >


              <div
                class="precio-linea"
              >

                <span>
                  Precio por unidad:
                </span>

                <strong>
                  ${formatearDinero(
                    abertura.costoUnitario
                  )}
                </strong>

              </div>


              <div
                class="precio-linea"
              >

                <span>
                  Cantidad:
                </span>

                <strong>
                  ${abertura.cantidad}
                </strong>

              </div>


              <div
                class="precio-linea total-item"
              >

                <span>
                  TOTAL:
                </span>

                <strong>
                  ${formatearDinero(
                    abertura.costoTotal
                  )}
                </strong>

              </div>


            </div>


          </div>

        </section>

      `;

    }
  );


  const documentoHTML = `

    <!DOCTYPE html>

    <html lang="es">

    <head>

      <meta charset="UTF-8">

      <title>
        Presupuesto - Berardo Aluminio
      </title>


      <style>

        * {
          box-sizing: border-box;
        }


        body {
          margin: 0;
          padding: 30px;
          font-family: Arial, Helvetica, sans-serif;
          color: #111;
          background: #fff;
        }


        .presupuesto {
          max-width: 900px;
          margin: 0 auto;
        }


        .encabezado {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          border-bottom: 2px solid #111;
          padding-bottom: 18px;
          margin-bottom: 25px;
        }


        .marca {
          display: flex;
          align-items: center;
        }


        .logo-presupuesto {
          display: block;
          max-width: 250px;
          max-height: 100px;
          object-fit: contain;
        }


        .datos-presupuesto {
          text-align: right;
          font-size: 13px;
          line-height: 1.6;
        }


        .titulo-principal {
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 5px;
        }


        .datos-cliente {
          border: 1px solid #bbb;
          padding: 15px;
          margin-bottom: 25px;
        }


        .datos-cliente h2 {
          font-size: 17px;
          margin: 0 0 10px;
        }


        .datos-cliente p {
          margin: 5px 0;
          font-size: 14px;
        }


        .abertura-presupuesto {
          border: 1px solid #aaa;
          padding: 18px;
          margin-bottom: 24px;
          break-inside: avoid;
          page-break-inside: avoid;
        }


        .numero-abertura {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 5px;
        }


        .titulo-abertura {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }


        .descripcion-abertura {
          font-size: 14px;
          margin-bottom: 18px;
          line-height: 1.5;
          white-space: pre-wrap;
        }


        .contenido-abertura {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: center;
        }


        .lado-dibujo {
          flex: 1;
        }


        .lado-precio {
          width: 300px;
        }


        .dibujo-pdf {
          max-width: 100%;
          border: 4px solid #333;
          display: flex;
          position: relative;
          overflow: hidden;
          background: white;
          margin-left: auto;
          margin-right: auto;
        }


        .pdf-panel {
          border-right: 2px solid #555;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          font-weight: normal;
          position: relative;
        }


        .pdf-panel:last-child {
          border-right: none;
        }


        .pdf-panel.mitad {
          width: 50%;
          height: 100%;
        }


        .pdf-panel.tercio {
          width: 33.333%;
          height: 100%;
        }


        .pdf-panel.cuarto {
          width: 25%;
          height: 100%;
        }


        .pdf-panel.completo {
          width: 100%;
          height: 100%;
          border-right: none;
        }


        .pdf-guillotina {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }


        .pdf-guillotina-hoja {
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 35px;
          border-bottom: 2px solid #555;
        }


        .pdf-guillotina-hoja:last-child {
          border-bottom: none;
        }


       .pdf-puerta-una {
  position: relative;
  padding: 6px;
  box-sizing: border-box;
  background: #f4f4f4;
}

/* HOJA INTERIOR */
.pdf-puerta-hoja {
  position: relative;
  width: 100%;
  height: 100%;
  border: 4px solid #555;
  box-sizing: border-box;
  background: white;
}

/* VIDRIO SUPERIOR */
.pdf-puerta-vidrio {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 31%;
  border: 2px solid #777;
  box-sizing: border-box;
  background: #eef7fa;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* INDICADOR DE APERTURA */
.pdf-apertura-puerta {
  font-size: 25px;
  font-weight: normal;
  color: #444;
}

/* TRAVESAÑO */
.pdf-puerta-travesano {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 29%;
  height: 7px;
  background: #555;
}

/* PANEL INFERIOR */
.pdf-puerta-panel-inferior {
  position: absolute;
  left: 5px;
  right: 5px;
  bottom: 7px;
  height: 24%;
  border: 2px solid #777;
  box-sizing: border-box;
  background: #f5f5f5;
}

/* ZÓCALO INFERIOR */
.pdf-puerta-zocalo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8px;
  background: #555;
}


        .medidas-pdf {
          text-align: center;
          font-weight: bold;
          font-size: 15px;
          margin-top: 10px;
        }


        .caracteristicas {
          margin-top: 12px;
          font-size: 13px;
          line-height: 1.6;
        }


        .precio-linea {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding: 9px 0;
          border-bottom: 1px solid #ddd;
          font-size: 14px;
        }


        .precio-linea strong {
          white-space: nowrap;
        }


        .total-item {
          font-size: 18px;
          border-bottom: none;
          border-top: 2px solid #111;
          margin-top: 10px;
          padding-top: 14px;
        }


        .total-general {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 3px solid #111;
          border-bottom: 3px solid #111;
          padding: 18px 5px;
          font-size: 23px;
          font-weight: bold;
          margin-top: 30px;
        }


        .observaciones {
          margin-top: 25px;
          padding: 15px;
          border: 1px solid #bbb;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
        }


        .observaciones-titulo {
          font-weight: bold;
          margin-bottom: 8px;
        }


        .pie {
          text-align: center;
          font-size: 11px;
          margin-top: 35px;
          padding-top: 15px;
          border-top: 1px solid #ccc;
        }


        @media print {

          body {
            padding: 10px;
          }


          .presupuesto {
            max-width: none;
          }


          .abertura-presupuesto {
            break-inside: avoid;
            page-break-inside: avoid;
          }

        }

      </style>

    </head>


    <body>


      <div class="presupuesto">


        <header class="encabezado">


          <div class="marca">

            <img
              src="${logoURL}"
              class="logo-presupuesto"
              alt="Berardo Aluminio"
            >

          </div>


          <div class="datos-presupuesto">

            <div class="titulo-principal">
              PRESUPUESTO
            </div>

            <div>
              Fecha:
              ${new Date().toLocaleDateString("es-AR")}
            </div>

          </div>


        </header>


        <section class="datos-cliente">

          <h2>
            Datos del cliente
          </h2>


          <p>

            <strong>
              Nombre:
            </strong>

            ${
              cliente.nombre
                ? escaparHTML(cliente.nombre)
                : "-"
            }

          </p>


          <p>

            <strong>
              Domicilio:
            </strong>

            ${
              cliente.domicilio
                ? escaparHTML(cliente.domicilio)
                : "-"
            }

          </p>


          <p>

            <strong>
              Teléfono:
            </strong>

            ${
              cliente.telefono
                ? escaparHTML(cliente.telefono)
                : "-"
            }

          </p>

        </section>


        ${contenidoAberturas}


        <div class="total-general">

          <span>
            TOTAL GENERAL
          </span>

          <span>
            ${formatearDinero(totalGeneral)}
          </span>

        </div>


        ${
          cliente.observaciones

            ? `

              <section class="observaciones">

                <div class="observaciones-titulo">
                  Observaciones
                </div>

                ${escaparHTML(
                  cliente.observaciones
                )}

              </section>

            `

            : ""
        }


        <div class="pie">

          BERARDO ALUMINIO -
          Aberturas de aluminio

        </div>


      </div>


    </body>

    </html>

  `;


  ventanaPDF.document.open();

  ventanaPDF.document.write(
    documentoHTML
  );

  ventanaPDF.document.close();


  ventanaPDF.focus();


  setTimeout(
    () => {

      ventanaPDF.print();

    },
    700
  );

}


// ==========================================
// PESTAÑAS PRINCIPALES
// ==========================================

function mostrarPestanaPrincipal(pestana) {

  const presupuestar =
    document.getElementById("pestanaPresupuestar");

  const acoplar =
    document.getElementById("pestanaAcoplar");

  const btnPresupuesto =
    document.getElementById("btnPestanaPresupuesto");

  const btnAcople =
    document.getElementById("btnPestanaAcople");

  if (!presupuestar || !acoplar) {
    return;
  }

  const mostrarPresupuesto =
    pestana === "presupuestar";

  presupuestar.style.display =
    mostrarPresupuesto ? "block" : "none";

  acoplar.style.display =
    mostrarPresupuesto ? "none" : "block";

  btnPresupuesto?.classList.toggle(
    "activa",
    mostrarPresupuesto
  );

  btnAcople?.classList.toggle(
    "activa",
    !mostrarPresupuesto
  );

}


// ==========================================
// ARMADOR DE ACOPLES
// ==========================================

let acopleModulos = [];


function acopleAgregarAbertura() {

  const tipo =
    document.getElementById("acopleTipo")?.value;

  const ancho = Number(
    document.getElementById("acopleAncho")?.value
  );

  const alto = Number(
    document.getElementById("acopleAlto")?.value
  );

  const posicion =
    document.getElementById("acoplePosicion")?.value ||
    "derecha";

  if (!tipo || ancho <= 0 || alto <= 0) {
    alert("Ingresá un tipo, ancho y alto válidos.");
    return;
  }

  let x = 0;
  let y = 0;
  let posicionGuardada = "Primera abertura";

  if (acopleModulos.length > 0) {

    const anterior =
      acopleModulos[acopleModulos.length - 1];

    posicionGuardada = posicion;

    if (posicion === "derecha") {
      x = anterior.x + anterior.ancho;
      y = anterior.y;
    } else if (posicion === "izquierda") {
      x = anterior.x - ancho;
      y = anterior.y;
    } else if (posicion === "arriba") {
      x = anterior.x;
      y = anterior.y - alto;
    } else if (posicion === "abajo") {
      x = anterior.x;
      y = anterior.y + anterior.alto;
    }

  }

  acopleModulos.push({
    id: Date.now() + Math.random(),
    tipo,
    ancho,
    alto,
    posicion: posicionGuardada,
    x,
    y
  });

  document.getElementById("acopleAncho").value = "";
  document.getElementById("acopleAlto").value = "";

  acopleActualizarInterfaz();

}


function acopleEliminarAbertura(index) {

  if (index < 0 || index >= acopleModulos.length) {
    return;
  }

  acopleModulos.splice(index, 1);

  acopleRecalcularPosiciones();

  acopleActualizarInterfaz();

}


function acopleVaciarConjunto() {
  acopleModulos = [];
  acopleActualizarInterfaz();
}


function acopleRecalcularPosiciones() {

  if (acopleModulos.length === 0) {
    return;
  }

  acopleModulos[0].x = 0;
  acopleModulos[0].y = 0;
  acopleModulos[0].posicion = "Primera abertura";

  for (let i = 1; i < acopleModulos.length; i++) {

    const actual = acopleModulos[i];
    const anterior = acopleModulos[i - 1];

    const posicion =
      ["derecha", "izquierda", "arriba", "abajo"]
        .includes(actual.posicion)
        ? actual.posicion
        : "derecha";

    if (posicion === "derecha") {
      actual.x = anterior.x + anterior.ancho;
      actual.y = anterior.y;
    } else if (posicion === "izquierda") {
      actual.x = anterior.x - actual.ancho;
      actual.y = anterior.y;
    } else if (posicion === "arriba") {
      actual.x = anterior.x;
      actual.y = anterior.y - actual.alto;
    } else {
      actual.x = anterior.x;
      actual.y = anterior.y + anterior.alto;
    }

  }

}


function acopleActualizarInterfaz() {
  acopleActualizarLista();
  acopleActualizarVista();
}


function acopleActualizarLista() {

  const seccion =
    document.getElementById("acopleSeccionConjunto");

  const lista =
    document.getElementById("acopleListaModulos");

  const bloquePosicion =
    document.getElementById("acopleBloquePosicion");

  if (!seccion || !lista) {
    return;
  }

  if (bloquePosicion) {
    bloquePosicion.style.display =
      acopleModulos.length === 0 ? "none" : "block";
  }

  if (acopleModulos.length === 0) {
    seccion.classList.add("oculto");
    lista.innerHTML = "";
    return;
  }

  seccion.classList.remove("oculto");

  lista.innerHTML = acopleModulos
    .map((modulo, index) => {

      const posicionTexto =
        index === 0
          ? "Primera abertura"
          : `Ubicación: ${acopleNombrePosicion(modulo.posicion)} de la anterior`;

      return `
        <div class="acople-item">

          <div class="acople-item-cabecera">

            <div>
              <strong>
                ${index + 1}. ${escaparHTML(nombresTipos[modulo.tipo] || modulo.tipo)}
              </strong>

              <div class="acople-item-datos">
                Medida: <strong>${modulo.ancho} × ${modulo.alto} mm</strong><br>
                ${escaparHTML(posicionTexto)}
              </div>
            </div>

            <button
              type="button"
              class="boton-eliminar-abertura"
              onclick="acopleEliminarAbertura(${index})"
            >
              ELIMINAR
            </button>

          </div>

        </div>
      `;

    })
    .join("");

}


function acopleNombrePosicion(posicion) {

  const nombres = {
    derecha: "a la derecha",
    izquierda: "a la izquierda",
    arriba: "arriba",
    abajo: "abajo"
  };

  return nombres[posicion] || posicion;

}


function acopleObtenerLimites() {

  if (acopleModulos.length === 0) {
    return null;
  }

  const minX = Math.min(
    ...acopleModulos.map(modulo => modulo.x)
  );

  const minY = Math.min(
    ...acopleModulos.map(modulo => modulo.y)
  );

  const maxX = Math.max(
    ...acopleModulos.map(modulo => modulo.x + modulo.ancho)
  );

  const maxY = Math.max(
    ...acopleModulos.map(modulo => modulo.y + modulo.alto)
  );

  return {
    minX,
    minY,
    maxX,
    maxY,
    anchoTotal: maxX - minX,
    altoTotal: maxY - minY
  };

}


function acopleActualizarVista() {

  const contenedor =
    document.getElementById("acopleVistaContenedor");

  const vista =
    document.getElementById("acopleVista");

  const medida =
    document.getElementById("acopleMedidaGeneral");

  if (!contenedor || !vista || !medida) {
    return;
  }

  if (acopleModulos.length === 0) {
    contenedor.classList.add("oculto");
    vista.innerHTML = "";
    medida.textContent = "";
    return;
  }

  contenedor.classList.remove("oculto");

  const limites = acopleObtenerLimites();

  const anchoDisponible = 560;
  const altoDisponible = 360;

  const escala = Math.min(
    anchoDisponible / limites.anchoTotal,
    altoDisponible / limites.altoTotal,
    0.35
  );

  const padding = 20;

  const anchoVista =
    Math.max(300, limites.anchoTotal * escala + padding * 2);

      const altoVista =
    Math.max(260, limites.altoTotal * escala + padding * 2);

  vista.style.width = `${anchoVista}px`;
  vista.style.height = `${altoVista}px`;

  vista.innerHTML = acopleModulos
    .map((modulo, index) => {

      const left =
        (modulo.x - limites.minX) * escala + padding;

      const top =
        (modulo.y - limites.minY) * escala + padding;

      const width =
        Math.max(45, modulo.ancho * escala);

      const height =
        Math.max(45, modulo.alto * escala);

      return `
        <div
          class="acople-modulo-visual"
          title="${escaparHTML(nombresTipos[modulo.tipo] || modulo.tipo)} - ${modulo.ancho} × ${modulo.alto} mm"
          style="
            left:${left}px;
            top:${top}px;
            width:${width}px;
            height:${height}px;
          "
        >
          <span class="acople-numero">${index + 1}</span>
          ${crearDibujo(modulo.tipo)}
        </div>
      `;

    })
    .join("");

  medida.textContent =
    `Medida envolvente del conjunto: ${limites.anchoTotal} × ${limites.altoTotal} mm`;

}


document.addEventListener("DOMContentLoaded", function() {
  acopleActualizarInterfaz();
});


// ============================================================
// ACOPLADOS - CÁLCULO, PERFIL 720, PRESUPUESTO Y PDF
// ============================================================

const PERFIL_ACOPLE_720 = {
  codigo: "1020720",
  nombre: "Acople Recto 720",
  pesoMetro: 0.26,
  largoBarra: 6150
};

let ultimoPresupuestoAcople = null;
let ultimoDespieceAcople = [];


// ------------------------------------------------------------
// CALCULAR DESPIECE DE CADA MÓDULO
// ------------------------------------------------------------

function calcularDespieceModuloAcople(tipo, A, H) {

  const respaldoDespiece = ultimoDespiece;

  ultimoDespiece = [];

  if (tipo === "corrediza2") {
    calcularCorrediza2(A, H);
  } else if (tipo === "corrediza3") {
    calcularCorrediza3(A, H);
  } else if (tipo === "corrediza4") {
    calcularCorrediza4(A, H);
  } else if (tipo === "banderola") {
    calcularBanderola(A, H);
  } else if (tipo === "rebatir1") {
    calcularRebatir1(A, H);
  } else if (tipo === "rebatir2") {
    calcularRebatir2(A, H);
  } else if (tipo === "panioFijo") {
    calcularPanioFijo(A, H);
  } else if (tipo === "desplazable") {
    calcularDesplazable(A, H);
  } else if (tipo === "guillotina") {
    calcularGuillotina(A, H);
  } else if (tipo === "puertaBalcon2") {
    calcularPuertaBalcon2(A, H);
  } else if (tipo === "puertaBalcon3") {
    calcularPuertaBalcon3(A, H);
  } else if (tipo === "puerta1") {
    calcularPuerta1(A, H);
  } else if (tipo === "puertaDoble") {
    calcularPuertaDoble(A, H);
  } else if (tipo === "porton3") {
    calcularPorton3(A, H);
  }

  let resultado = ultimoDespiece.map(pieza => ({
    ...pieza,
    moduloTipo: tipo
  }));


  if (
    tipo === "puertaBalcon2" ||
    tipo === "puertaBalcon3"
  ) {

    resultado = resultado.filter(
      pieza => pieza.nombre !== perfiles.tapaJunta657.nombre
    );

  }


  ultimoDespiece = respaldoDespiece;

  return resultado;
}


// ------------------------------------------------------------
// AGREGAR PIEZA AL DESPIECE ACOPLADO
// ------------------------------------------------------------

function acopleAgregarPiezaDespiece(
  perfil,
  cantidad,
  largoMm,
  grupo
) {

  if (largoMm <= 0) {

    console.error(
      `Largo inválido para ${perfil.nombre}: ${largoMm} mm`
    );

    return;
  }

  const largoMetros =
    largoMm / 1000;

  const metrosTotales =
    largoMetros * cantidad;

  const pesoTotal =
    metrosTotales * perfil.pesoMetro;


  ultimoDespieceAcople.push({

    grupo,
    nombre: perfil.nombre,
    cantidad,
    largoMm,
    largoMetros,
    metrosTotales,
    pesoMetro: perfil.pesoMetro,
    pesoTotal

  });

}


// ------------------------------------------------------------
// PERFIL 720
// ------------------------------------------------------------

function acopleAgregarPerfiles720() {

  for (
    let i = 1;
    i < acopleModulos.length;
    i++
  ) {

    const anterior =
      acopleModulos[i - 1];

    const actual =
      acopleModulos[i];


    const unionVertical =
      actual.posicion === "derecha" ||
      actual.posicion === "izquierda";


    const largo720 =
      unionVertical

        ? Math.min(
            anterior.alto,
            actual.alto
          )

        : Math.min(
            anterior.ancho,
            actual.ancho
          );


    acopleAgregarPiezaDespiece(

      {
        nombre:
          `${PERFIL_ACOPLE_720.nombre} (${unionVertical ? "vertical" : "horizontal"})`,

        pesoMetro:
          PERFIL_ACOPLE_720.pesoMetro
      },

      1,

      largo720,

      "Acople 720"

    );

  }

}


// ------------------------------------------------------------
// PREMARCO + TAPA JUNTA GENERAL
// ------------------------------------------------------------

function acopleAgregarPremarcoGeneral(
  anchoTotal,
  altoTotal
) {

  acopleAgregarPiezaDespiece(
    {
      nombre:
        "Premarco horizontal",

      pesoMetro:
        perfiles.premarco.pesoMetro
    },
    2,
    anchoTotal + 30,
    "Premarco"
  );


  acopleAgregarPiezaDespiece(
    {
      nombre:
        "Premarco vertical",

      pesoMetro:
        perfiles.premarco.pesoMetro
    },
    2,
    altoTotal + 30,
    "Premarco"
  );


  acopleAgregarPiezaDespiece(
    {
      nombre:
        "Tapa junta 657 horizontal",

      pesoMetro:
        perfiles.tapaJunta657.pesoMetro
    },
    2,
    anchoTotal + 54,
    "Tapa junta"
  );


  acopleAgregarPiezaDespiece(
    {
      nombre:
        "Tapa junta 657 vertical",

      pesoMetro:
        perfiles.tapaJunta657.pesoMetro
    },
    2,
    altoTotal + 54,
    "Tapa junta"
  );

}


// ------------------------------------------------------------
// CALCULAR CONJUNTO ACOPLADO
// ------------------------------------------------------------

function acopleCalcular() {

  if (
    acopleModulos.length === 0
  ) {

    alert(
      "Primero agregá al menos una abertura al conjunto."
    );

    return;

  }


  const cantidad =
    Number(
      document.getElementById(
        "acopleCantidad"
      )?.value
    );


  const precioKg =
    Number(
      document.getElementById(
        "acoplePrecioKg"
      )?.value
    ) || 0;


  const costoAccesorios =
    Number(
      document.getElementById(
        "acopleCostoAccesorios"
      )?.value
    ) || 0;


  const costoVidrios =
    Number(
      document.getElementById(
        "acopleCostoVidrios"
      )?.value
    ) || 0;


  const incluirPremarco =
    document.getElementById(
      "acopleIncluirPremarco"
    )?.checked || false;


  const tipoVidrioCodigo =
    document.getElementById(
      "acopleTipoVidrio"
    )?.value || "4mm";


  const tratamientoCodigo =
    document.getElementById(
      "acopleTratamientoPerfil"
    )?.value || "blanco";


  const descripcion =
    document.getElementById(
      "acopleDescripcion"
    )?.value.trim() || "";


  if (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
  ) {

    alert(
      "Ingresá una cantidad válida de conjuntos."
    );

    return;
  }


  if (
    precioKg < 0 ||
    costoAccesorios < 0 ||
    costoVidrios < 0
  ) {

    alert(
      "Los costos no pueden ser negativos."
    );

    return;
  }


  const limites =
    acopleObtenerLimites();


  if (!limites) {

    alert(
      "No se pudo obtener la medida del conjunto."
    );

    return;
  }


  ultimoDespieceAcople = [];


  acopleModulos.forEach(
    (modulo, indice) => {


      const piezasModulo =
        calcularDespieceModuloAcople(

          modulo.tipo,

          modulo.ancho,

          modulo.alto

        );


      piezasModulo.forEach(
        pieza => {

          ultimoDespieceAcople.push({

            ...pieza,

            grupo:
              `Abertura ${indice + 1}`

          });

        }
      );

    }
  );


  acopleAgregarPerfiles720();


  if (incluirPremarco) {

    acopleAgregarPremarcoGeneral(

      limites.anchoTotal,

      limites.altoTotal

    );

  }


  const pesoTotal =
    ultimoDespieceAcople.reduce(

      (
        total,
        pieza
      ) =>

        total +
        pieza.pesoTotal,

      0

    );


  const costoAluminio =
    pesoTotal *
    precioKg;


  const costoUnitario =
    costoAluminio +
    costoAccesorios +
    costoVidrios;


  const costoTotal =
    costoUnitario *
    cantidad;


  const modulosGuardados =
    acopleModulos.map(
      modulo => ({
        ...modulo
      })
    );


  ultimoPresupuestoAcople = {

    esAcoplado:
      true,

    tipo:
      "Conjunto acoplado",

    tipoCodigo:
      "acoplado",

    ancho:
      limites.anchoTotal,

    alto:
      limites.altoTotal,

    cantidad:
      cantidad,

    pesoTotal:
      pesoTotal,

    precioKg:
      precioKg,

    costoAluminio:
      costoAluminio,

    costoAccesorios:
      costoAccesorios,

    costoVidrios:
      costoVidrios,

    costoUnitario:
      costoUnitario,

    costoTotal:
      costoTotal,

    incluirPremarco:
      incluirPremarco,

    incluirMosquitero:
      false,

    tipoVidrio:
      nombresVidrios[
        tipoVidrioCodigo
      ] || tipoVidrioCodigo,

    tipoVidrioCodigo:
      tipoVidrioCodigo,

    tratamientoPerfil:
      nombresTratamientos[
        tratamientoCodigo
      ] || tratamientoCodigo,

    tratamientoCodigo:
      tratamientoCodigo,

    descripcion:
      descripcion,

    modulos:
      modulosGuardados,

    limites:
      {
        ...limites
      },

    uniones720:
      acopleObtenerUniones720(
        modulosGuardados
      ),

    despiece:
      ultimoDespieceAcople.map(
        pieza => ({
          ...pieza
        })
      )

  };


  document
    .getElementById(
      "acoplePesoTotal"
    )
    .textContent =
      `${pesoTotal.toFixed(2)} kg`;


  document
    .getElementById(
      "acopleCostoAluminio"
    )
    .textContent =
      formatearDinero(
        costoAluminio
      );


  document
    .getElementById(
      "acopleResultadoAccesorios"
    )
    .textContent =
      formatearDinero(
        costoAccesorios
      );


  document
    .getElementById(
      "acopleResultadoVidrios"
    )
    .textContent =
      formatearDinero(
        costoVidrios
      );


  document
    .getElementById(
      "acopleCostoUnitario"
    )
    .textContent =
      formatearDinero(
        costoUnitario
      );


  document
    .getElementById(
      "acopleResultadoCantidad"
    )
    .textContent =
      cantidad;


  document
    .getElementById(
      "acopleCostoTotal"
    )
    .textContent =
      formatearDinero(
        costoTotal
      );


  document
    .getElementById(
      "acopleResultado"
    )
    .classList
    .remove("oculto");

}


// ------------------------------------------------------------
// UNIONES 720 PARA DIBUJO/PDF
// ------------------------------------------------------------

function acopleObtenerUniones720(
  modulos
) {

  const uniones = [];


  for (
    let i = 1;
    i < modulos.length;
    i++
  ) {

    const anterior =
      modulos[i - 1];

    const actual =
      modulos[i];


    const vertical =
      actual.posicion === "derecha" ||
      actual.posicion === "izquierda";


    uniones.push({

      desde:
        i - 1,

      hasta:
        i,

      orientacion:
        vertical
          ? "vertical"
          : "horizontal",

      largoMm:
        vertical

          ? Math.min(
              anterior.alto,
              actual.alto
            )

          : Math.min(
              anterior.ancho,
              actual.ancho
            )

    });

  }


  return uniones;

}


// ------------------------------------------------------------
// AGREGAR CONJUNTO AL PRESUPUESTO GENERAL
// ------------------------------------------------------------

function acopleAgregarConjuntoAlPresupuesto() {

  if (!ultimoPresupuestoAcople) {

    alert(
      "Primero calculá el conjunto acoplado."
    );

    return;

  }


  const conjuntoGuardado = {

    ...ultimoPresupuestoAcople,

    modulos:
      ultimoPresupuestoAcople
        .modulos
        .map(
          modulo => ({
            ...modulo
          })
        ),

    uniones720:
      ultimoPresupuestoAcople
        .uniones720
        .map(
          union => ({
            ...union
          })
        ),

    despiece:
      ultimoPresupuestoAcople
        .despiece
        .map(
          pieza => ({
            ...pieza
          })
        )

  };


  aberturasPresupuesto.push(
    conjuntoGuardado
  );


  mostrarListaPresupuesto();


  const mensaje =
    document.getElementById(
      "acopleMensajeAgregado"
    );


  if (mensaje) {

    mensaje.textContent =
      "Conjunto acoplado agregado al presupuesto.";


    mensaje.classList.remove(
      "oculto"
    );


    setTimeout(
      () => {

        mensaje.classList.add(
          "oculto"
        );

      },
      2500
    );

  }

}


// ------------------------------------------------------------
// DESPIECE DEL CONJUNTO
// ------------------------------------------------------------

function acopleMostrarDespiece() {

  const contenedor =
    document.getElementById(
      "acopleDespiece"
    );


  if (!contenedor) {
    return;
  }


  if (!ultimoPresupuestoAcople) {

    alert(
      "Primero calculá el conjunto acoplado."
    );

    return;
  }


  if (
    !contenedor
      .classList
      .contains("oculto")
  ) {

    contenedor
      .classList
      .add("oculto");

    return;
  }


  const cantidad =
    ultimoPresupuestoAcople
      .cantidad;


  let html = `

    <h3>
      Despiece del conjunto acoplado
    </h3>


    <div class="resumen-desglose">

      <p>

        <strong>
          Medida envolvente:
        </strong>

        ${ultimoPresupuestoAcople.ancho}
        ×
        ${ultimoPresupuestoAcople.alto}
        mm

      </p>


      <p>

        <strong>
          Cantidad de conjuntos:
        </strong>

        ${cantidad}

      </p>


      <p>

        <strong>
          Perfil de acople:
        </strong>

        720 -
        ${PERFIL_ACOPLE_720.pesoMetro.toFixed(2)}
        kg/m

      </p>

    </div>

  `;


  ultimoPresupuestoAcople
    .despiece
    .forEach(
      pieza => {


        const cantidadTotal =
          pieza.cantidad *
          cantidad;


        const metrosTotales =
          pieza.metrosTotales *
          cantidad;


        const pesoTotal =
          pieza.pesoTotal *
          cantidad;


        html += `

          <div class="pieza">

            <strong>
              ${escaparHTML(
                pieza.nombre
              )}
            </strong>

            <br>

            Grupo:
            ${escaparHTML(
              pieza.grupo
            )}

            <br>

            Cantidad por conjunto:
            ${pieza.cantidad}

            <br>

            Cantidad total:
            ${cantidadTotal}

            <br>

            Corte por pieza:
            ${pieza.largoMm.toFixed(1)}
            mm

            <br>

            Metros totales:
            ${metrosTotales.toFixed(3)}
            m

            <br>

            Peso del perfil:
            ${pieza.pesoMetro.toFixed(2)}
            kg/m

            <br>

            Peso total:
            ${pesoTotal.toFixed(3)}
            kg

          </div>

        `;

      }
    );


  contenedor.innerHTML =
    html;


  contenedor
    .classList
    .remove("oculto");

}


// ------------------------------------------------------------
// DIBUJO DEL CONJUNTO PARA EL PDF
// ------------------------------------------------------------

function crearDibujoAcoplePDF(
  abertura
) {

  if (
    !abertura ||
    !Array.isArray(
      abertura.modulos
    ) ||
    abertura.modulos.length === 0
  ) {

    return "";

  }


  const limites =
    abertura.limites || {

      minX:
        Math.min(
          ...abertura.modulos.map(
            m => m.x
          )
        ),

      minY:
        Math.min(
          ...abertura.modulos.map(
            m => m.y
          )
        ),

      maxX:
        Math.max(
          ...abertura.modulos.map(
            m =>
              m.x +
              m.ancho
          )
        ),

      maxY:
        Math.max(
          ...abertura.modulos.map(
            m =>
              m.y +
              m.alto
          )
        ),

      anchoTotal:
        abertura.ancho,

      altoTotal:
        abertura.alto

    };


  const anchoBase =
    Math.max(
      1,
      limites.anchoTotal
    );


  const altoBase =
    Math.max(
      1,
      limites.altoTotal
    );


  const modulosHTML =
    abertura.modulos
      .map(
        (
          modulo,
          index
        ) => {


          const left =
            (
              (
                modulo.x -
                limites.minX
              ) /
              anchoBase
            ) *
            100;


          const top =
            (
              (
                modulo.y -
                limites.minY
              ) /
              altoBase
            ) *
            100;


          const width =
            (
              modulo.ancho /
              anchoBase
            ) *
            100;


          const height =
            (
              modulo.alto /
              altoBase
            ) *
            100;


          return `

            <div

              style="
                position:absolute;
                left:${left}%;
                top:${top}%;
                width:${width}%;
                height:${height}%;
                border:2px solid #333;
                display:flex;
                overflow:hidden;
                background:#fff;
              "

              title="${escaparHTML(
                nombresTipos[
                  modulo.tipo
                ] ||
                modulo.tipo
              )}"

            >

              ${crearDibujoPDF(
                modulo.tipo
              )}


              <span

                style="
                  position:absolute;
                  top:2px;
                  left:4px;
                  font-size:9px;
                  font-weight:bold;
                  background:#fff;
                  padding:1px 3px;
                "

              >

                ${index + 1}

              </span>

            </div>

          `;

        }
      )
      .join("");


  const unionesHTML =
    (
      abertura.uniones720 ||
      []
    )
      .map(
        union => {


          const anterior =
            abertura.modulos[
              union.desde
            ];


          const actual =
            abertura.modulos[
              union.hasta
            ];


          if (
            !anterior ||
            !actual
          ) {

            return "";

          }


          if (
            union.orientacion ===
            "vertical"
          ) {


            const xMm =
              actual.posicion ===
              "derecha"

                ? actual.x

                : anterior.x;


            const yMm =
              Math.max(
                anterior.y,
                actual.y
              );


            const left =
              (
                (
                  xMm -
                  limites.minX
                ) /
                anchoBase
              ) *
              100;


            const top =
              (
                (
                  yMm -
                  limites.minY
                ) /
                altoBase
              ) *
              100;


            const height =
              (
                union.largoMm /
                altoBase
              ) *
              100;


            return `

              <div

                style="
                  position:absolute;
                  left:calc(${left}% - 2px);
                  top:${top}%;
                  width:4px;
                  height:${height}%;
                  background:#111;
                  z-index:20;
                "

              ></div>

            `;

          }


          const yMm =
            actual.posicion ===
            "abajo"

              ? actual.y

              : anterior.y;


          const xMm =
            Math.max(
              anterior.x,
              actual.x
            );


          const left =
            (
              (
                xMm -
                limites.minX
              ) /
              anchoBase
            ) *
            100;


          const top =
            (
              (
                yMm -
                limites.minY
              ) /
              altoBase
            ) *
            100;


          const width =
            (
              union.largoMm /
              anchoBase
            ) *
            100;


          return `

            <div

              style="
                position:absolute;
                left:${left}%;
                top:calc(${top}% - 2px);
                width:${width}%;
                height:4px;
                background:#111;
                z-index:20;
              "

            ></div>

          `;

        }
      )
      .join("");


  return `

    <div

      style="
        position:absolute;
        inset:0;
        background:#fff;
      "

    >

      ${modulosHTML}

      ${unionesHTML}

    </div>

  `;

}