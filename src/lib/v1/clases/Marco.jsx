class Marco {

    constructor(props) {
        this.ref = React.createRef();
        this.refMarco = React.createRef();
        this.refMarcoArriba = React.createRef();
        this.refMarcoAbajo = React.createRef();
        this.refMarcoDerecha = React.createRef();
        this.refMarcoIzquierda = React.createRef();
        this.refMarcoIzquierdaArriba = React.createRef();
        this.refMarcoIzquierdaAbajo = React.createRef();
        this.refMarcoDerechaArriba = React.createRef();
        this.refMarcoDerechaAbajo = React.createRef();
        this.refBotones = React.createRef();
        this.refBotonCerrar = React.createRef();
        this.refBotonMaximizar = React.createRef();
        this.refBotonDemaximizar = React.createRef();
        this.refBotonMinimizar = React.createRef();

        this.ventanaFlotante = props.ventana;

        this.buttonCloseVisible = props.buttonCloseVisible;
        this.buttonMinimizeVisible = props.buttonMinimizeVisible;
        this.buttonMaximizeVisible = props.buttonMaximizeVisible;

        this.titulo = props.titulo;

        this.JSX = this.#renderJSX.call(this);
    }

    #renderJSX() {
        const controlMarco = "control";
        const controlMarcoDiagonal = "control diagonal";

        const ventanaFlotante = this.ventanaFlotante;

        return (
            <div
                ref={this.refMarco}
                className="marco"
            >
                {ControlMarcoArriba.call(this)}

                <div
                    ref={this.refMarcoAbajo}
                    className={[controlMarco, "abajo"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ abajo: true })}
                />

                <div
                    ref={this.refMarcoDerecha}
                    className={[controlMarco, "derecha"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ derecha: true })}
                />

                <div
                    ref={this.refMarcoIzquierda}
                    className={[controlMarco, "izquierda"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ izquierda: true })}
                />

                <div
                    ref={this.refMarcoIzquierdaArriba}
                    className={[controlMarcoDiagonal, "izquierda arriba"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ izquierda: true, arriba: true })}
                />

                <div
                    ref={this.refMarcoIzquierdaAbajo}
                    className={[controlMarcoDiagonal, "izquierda abajo"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ izquierda: true, abajo: true })}
                />

                <div
                    ref={this.refMarcoDerechaArriba}
                    className={[controlMarcoDiagonal, "derecha arriba"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ derecha: true, arriba: true })}
                />

                <div
                    ref={this.refMarcoDerechaAbajo}
                    className={[controlMarcoDiagonal, "derecha abajo"].join(" ")}
                    onMouseDown={marcoEvento.bind(this)({ derecha: true, abajo: true })}
                />

            </div>
        );

        function marcoEvento({ arriba, derecha, abajo, izquierda }) {

            return (eventMarco) => {
                document.onmousemove = generateEventDocument.bind(this)({ eventMarco, arriba, derecha, abajo, izquierda });
                document.onmouseup = removeEventMarco.bind(this);
            };

            function generateEventDocument({ eventMarco, arriba, derecha, abajo, izquierda }) {
                let {
                    offsetLeft: initX,
                    offsetTop: initY,
                    offsetWidth: initW,
                    offsetHeight: initH
                } = ventanaFlotante.elementDOM;

                const currentX = Math.max(eventMarco.clientX, 0);
                const currentY = Math.max(eventMarco.clientY, 0);

                this.ventanaFlotante.contenido.classList.add("sin-interaccion");
                document.body.style.userSelect = "none";

                return (e) => {
                    if (!e.buttons) {
                        removeEventMarco.call(this);
                    }
                    const c = calcFrameMovementValues({
                        eX: currentX,
                        eY: currentY,
                        e2: e,
                        xi: initX,
                        yi: initY,
                        wi: initW,
                        hi: initH,
                        derecha,
                        abajo
                    });
                    const [xi, yi, wi, hi] = [initX, initY, initW, initH];
                    let { x, y, w, h } = c;

                    const transitive = false;

                    if (derecha) {
                        if (arriba) {
                            ventanaFlotante.setShape({ y, w, h, yi, hi, transitive });
                        }
                        if (abajo) {
                            ventanaFlotante.setShape({ w, h, wi, hi, transitive });
                        }
                        ventanaFlotante.setShape({ w, wi, transitive });
                    }
                    if (izquierda) {
                        if (arriba) {
                            ventanaFlotante.setShape({ x, y, w, h, xi, yi, wi, hi, transitive });
                        }
                        if (abajo) {
                            ventanaFlotante.setShape({ x, w, h, xi, wi, hi, transitive });
                        }
                        ventanaFlotante.setShape({ x, w, xi, wi, transitive });
                    }
                    if (arriba) {
                        ventanaFlotante.setShape({ y, h, yi, hi, transitive });
                    }
                    if (abajo) {
                        ventanaFlotante.setShape({ h, hi, transitive });
                    }
                };

                function calcFrameMovementValues({ eX, eY, e2, xi, yi, wi, hi, abajo, derecha }) {
                    const e2X = Math.max(e2.clientX, 0);
                    const e2Y = Math.max(e2.clientY, 0);
                    const x = xi + (e2X - eX);
                    const y = yi + (e2Y - eY);
                    const w = wi + (e2X - eX) * (derecha ? 1 : -1);
                    const h = hi + (e2Y - eY) * (abajo ? 1 : -1);
                    return { x, y, w, h };
                }
            }
        }

        function ControlMarcoArriba() {
            return (
                <div
                    ref={this.refMarcoArriba}
                    className={[controlMarco, "arriba"].join(" ")}
                    onDrag={() => {
                        document.body.style.userSelect = "none";
                        this.ventanaFlotante.contenido.classList.add("sin-interaccion");
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        if (e.button != 0) {
                            return;
                        }

                        if (ventanaFlotante.isMaximized || ventanaFlotante.isMinimized) {
                            return;
                        }

                        let { clientX: initX, clientY: initY } = e;
                        let { offsetTop: Yventana, offsetLeft: Xventana } = ventanaFlotante.elementDOM;

                        document.onmousemove = (e) => {
                            if (!e.buttons) {
                                removeEventMarco.call(this);
                            }
                            let { clientX: currentX, clientY: currentY } = e;
                            let [x, y] = [
                                Xventana + (currentX - initX),
                                Yventana + (currentY - initY)
                            ];
                            ventanaFlotante.setPosition({ x, y, transitive: false });
                        };

                        document.onmouseup = removeEventMarco.bind(this);
                    }}
                >
                    <div className="titulo">
                        {this.titulo}
                    </div>
                    {AgrupadorBotonesDeControlMarco.call(this)}
                </div>
            );

            function AgrupadorBotonesDeControlMarco() {
                return (
                    <div
                        ref={this.refBotones}
                        className="control btns"
                    >
                        {filtrarBotones.call(this)}
                    </div>
                );

                function filtrarBotones() {
                    return botones.call(this)
                        .filter(({ visibilidad }) => visibilidad)
                        .map(({ componente }) => componente)
                }

                function botones() {
                    return [
                        {
                            visibilidad: this.buttonMinimizeVisible,
                            componente: BotonMinimizar.call(this)
                        },
                        {
                            visibilidad: this.buttonMaximizeVisible,
                            componente: (
                                <React.Fragment>
                                    {BotonMaximizar.call(this)}
                                    {BotonDemaximizar.call(this)}
                                </React.Fragment>
                            )
                        },
                        {
                            visibilidad: this.buttonCloseVisible,
                            componente: BotonCerrar.call(this)
                        }
                    ]
                }


                function BotonCerrar() {
                    return <div
                        ref={this.refBotonCerrar}
                        className="btn cerrar"
                        title="Cerrar"
                        onMouseUp={(e) => {
                            e.stopPropagation();
                            if (e.button != 0) {
                                return;
                            }
                            ventanaFlotante.close();
                            removeEventMarco.call(this);
                        }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>;
                }

                function BotonMaximizar() {
                    return <div
                        ref={this.refBotonMaximizar}
                        className="btn maximizar"
                        title="Maximizar"
                        onMouseUp={(e) => {
                            e.stopPropagation();
                            if (e.button != 0) {
                                return;
                            }
                            ventanaFlotante.maximize()
                            removeEventMarco.call(this);
                        }}
                    >
                        &#9974;
                    </div>
                }

                function BotonDemaximizar() {
                    return <div
                        ref={this.refBotonDemaximizar}
                        className="btn maximizar2"
                        title="Restaurar"
                        onMouseUp={(e) => {
                            e.stopPropagation();
                            if (e.button != 0) {
                                return;
                            }
                            ventanaFlotante.demaximize()
                            removeEventMarco.call(this);
                        }}
                    >
                        &#9950;
                    </div>;
                }

                function BotonMinimizar() {
                    return (
                        <label
                            ref={this.refBotonMinimizar}
                            className={`
                                btn
                                minimizar
                            `}
                            title="Minimizar"
                            onMouseUp={(e) => {
                                e.stopPropagation();
                                if (e.button != 0) {
                                    return;
                                }
                                ventanaFlotante.minimize()
                                removeEventMarco.call(this);
                            }}
                        >
                            <span className="false">
                                &minus;
                            </span>
                            <span className="true">
                                &#9634;
                            </span>
                            <input
                                type="checkbox"
                                style={{ display: "none" }}
                                defaultChecked={false}
                            />
                        </label>
                    );
                }
            }
        }

        function removeEventMarco() {
            document.onmousemove = null;
            document.onmouseup = null;
            document.body.style.userSelect = "auto";
            this.ventanaFlotante.contenido.classList.remove("sin-interaccion");
        }
    }
}