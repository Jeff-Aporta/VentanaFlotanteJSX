class SistemaVentanasFlotantes {

    constructor(props) {
        this.elementDOM = props.sistema;
        this.ventanas = [];
        const { horizontal = "right", vertical = "bottom" } = props;
        this.align(horizontal, vertical);
    }

    align(horizontal, vertical) {
        this.elementDOM.classList.remove("top", "bottom", "left", "right");
        this.elementDOM.classList.add(horizontal, vertical);
    }

    remove() {
        this.elementDOM.remove();
        this.elementDOM = null;
    }

    removeFirst() {
        this.ventanas.forEach(v => v.elementDOM.classList.remove("is-firt-child"));
    }

    gridSystem(columnas, filas) {
        let ventanas = this.ventanasDOM;

        let ancho = 100 / columnas;
        let alto = 100 / filas;

        for (let fila = 0; fila < filas; fila++) {
            for (let columna = 0; columna < columnas; columna++) {
                let ventana = ventanas.shift();
                if (ventana) {
                    Object.assign(ventana.style, {
                        width: `${ancho}%`,
                        height: `${alto}%`,
                        left: `${ancho * columna}%`,
                        top: `${alto * fila}%`,
                    });
                }
            }
        }
    }

    nuevaVentana(props = {}) {
        const div = document.createElement("div");

        props = {
            ...props,
            ...VENTANA_FLOTANTE.PROPS_GEN,
            marco: {
                ...VENTANA_FLOTANTE.PROPS_GEN.marco,
                ...(props?.marco || {}),
                titulo: props.titulo
            },
        };

        let ventana = new VentanaFlotante({
            ...props,
            parentRenderDOM: div,
            sistema: this,
        });

        this.elementDOM.appendChild(div);

        ventana.maximizeMedium();
        ventana.putFirst();

        setTimeout(() => {
            ventana.elementDOM.classList.remove("animacion-de-inicio");
        }, 1000);

        this.ventanas.push(ventana);
    }

    get ventanasDOM() {
        return this.ventanas.map(v => v.elementDOM);
    }
}