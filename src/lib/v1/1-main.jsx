//Objeto que agrupa todas las funciones y variables globales de las ventanas flotantes tipo Windows
const VENTANA_FLOTANTE_V1 = {};

//Elemento DOM que agrupa todas las ventanas flotantes tipo Windows
VENTANA_FLOTANTE_V1.AGRUPAMIENTO = document.createElement("div");
VENTANA_FLOTANTE_V1.AGRUPAMIENTO.classList.add(
    "minimizacion-ventana-flotante-tipo-windows",
    "frames-tipo-windows"
);

VENTANA_FLOTANTE_V1.PROPS_GEN = {
    ancho_porcentaje_mediano: 0.6, //Ancho de la ventana en porcentaje de la ventana principal
    alto_porcentaje_mediano: 0.6, //Alto de la ventana en porcentaje de la ventana principal
    ancho_minimo: 300, //Ancho mínimo en pixeles de la ventana
    alto_minimo: 200, //Alto mínimo en pixeles de la ventana
    respetarLimitesVentana: true, /**
        - Si es verdadero, la ventana no se podrá mover o redimensionar fuera de los límites de la ventana principal del navegador
        - Si es falso, la ventana se podrá mover o redimensionar fuera de los límites de la ventana principal del navegador
    */
    esMovible: true,/**
        - Si es verdadero, la ventana se podrá mover
        - Si es falso, la ventana no se podrá mover
    */
    esRedimensionable: true, /**
        - Si es verdadero, la ventana se podrá redimensionar
        - Si es falso, la ventana no se podrá redimensionar
    */
};

//Añadir el elemento DOM al body
document.body.appendChild(VENTANA_FLOTANTE_V1.AGRUPAMIENTO);