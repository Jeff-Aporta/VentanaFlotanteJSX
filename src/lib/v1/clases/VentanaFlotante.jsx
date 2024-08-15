class VentanaFlotante {

    constructor(props) {
        this.props = props;

        this.resize = props.resize ?? true;
        this.movible = props.movible ?? true;
        this.lastShape = {};

        this.parentRenderDOM = props.parentRenderDOM;
        this.sistema = props.sistema;

        this.ref = React.createRef();

        const marco = new Marco({
            ...props.marco,
            ventana: this
        });

        ReactDOM.render(
            (
                <div
                    ref={this.ref}
                    className="vftwv1 animacion-de-inicio"
                    tabIndex="1"
                    onClick={() => {
                        if (this.isMinimized) {
                            return;
                        }
                        this.putFirst();
                    }}
                    onKeyUp={e => {
                        if (e.key == "Escape" && this.isMaximized) {
                            this.demaximize();
                        }
                    }}
                >
                    <div className="capa-fondo" />
                    {marco.JSX}
                    <div className="contenido">
                        {props.contenido}
                    </div>
                    <div className="capa-marco" />
                    <div className="capa-contenido" />
                </div>
            ),
            this.parentRenderDOM
        );

        this.animateAsFirstTime();
    }

    get elementDOM() {
        return this.ref.current;
    }

    get style() {
        return this.elementDOM.style;
    }

    querySelector(query) {
        return this.elementDOM.querySelector(query);
    }

    hasClass(clase) {
        return this.elementDOM.classList.contains(clase);
    }

    addClass(clase) {
        this.elementDOM.classList.add(clase);
    }

    removeClass(clase) {
        this.elementDOM.classList.remove(clase);
    }

    get contenido() {
        return this.querySelector(".contenido");
    }

    get btnMinimizar() {
        return this.querySelector(".control.btns .btn.minimizar input[type=checkbox]");
    }

    get isMaximized() {
        return this.hasClass("maximizado");
    };

    get isMinimized() {
        return this.querySelector(`.control.btns .btn.minimizar input[type="checkbox`).checked;
    };

    get isInAnimation() {
        [
            "animacion-de-cierre",
            "animacion-de-apertura",
            "transitivo"
        ].some(clase => this.hasClass(clase));
    };

    set title(txt) {
        this.querySelector(".control.arriba .titulo").innerHTML = txt;
    };

    close() {
        if (this.isInAnimation) {
            return;
        }

        const ventana = this.elementDOM;

        this.removeClass("maximizado");
        this.#showItemsByUnmaximize();
        this.addClass("animacion-de-cierre");
        this.querySelector(".control.arriba").classList.add("animacion-de-cierre");

        setTimeout(() => {
            ventana.remove();
            this.#showItemsByUnmaximize();
        }, 1000);

        (this.props.whenClosing ?? (() => 0))();
    };

    minimize() {
        if (this.isInAnimation) {
            return;
        }
        this.removeClass("maximizado");
        this.putFirst();

        setTimeout(() => {
            let chk = this.btnMinimizar;

            if (!chk.checked) {
                this.animateAsFirstTime();
                this.addClass("is-firt-child");
                this.#enableTransitiveCSS();
            } else {
                this.removeClass("is-firt-child");
            }
            this.putFirst();
        }, 0);

        this.#showItemsByUnmaximize();
    };

    maximize() {
        if (this.isInAnimation) {
            return;
        }

        const ventana = this.elementDOM;

        this.#captureLastShape();
        this.#enableTransitiveCSS();
        this.setShape({
            x: 0,
            y: 0,
            w: window.innerWidth,
            h: window.innerHeight
        })
        this.addClass("maximizado");
        ventana.parentNode.classList.add("maximizado");

        [...ventana.querySelectorAll("*")].forEach(elemento => {
            elemento.classList.add("maximizado");
        });

        this.putFirst();

        this.#hideItemsByMaximize();

        setTimeout(() => {
            document.activeElement.blur();
            ventana.focus({ focusVisible: false });
        }, 100);
    };

    demaximize() {
        if (this.isInAnimation) {
            return;
        }
        this.#enableTransitiveCSS();

        this.removeClass("maximizado");

        const { width, height, top, left } = this.lastShape;

        if (!width || !height || !top || !left) {
            this.maximizeMedium();
            return;
        }
        this.setShape({
            x: left,
            y: top,
            w: width,
            h: height,
        });

        this.putFirst();

        this.#showItemsByUnmaximize();
    };

    maximizeMedium() {
        const style = this.style;

        const { medianPercentWidth, medianPercentHeight } = this.props;

        const top_percent = (1 - medianPercentHeight) / 2;
        const left_percent = (1 - medianPercentWidth) / 2;

        Object.assign(style, {
            width: medianPercentWidth * window.innerWidth + "px",
            height: medianPercentHeight * window.innerHeight + "px",
            top: top_percent * window.innerHeight + "px",
            left: left_percent * window.innerWidth + "px",
        });
        this.removeClass("maximizado");
    };

    animateAsFirstTime() {
        let contenido = this.contenido;

        contenido.classList.add("animacion-de-opacidad");
        setTimeout(() => {
            contenido.classList.remove("animacion-de-opacidad");
        }, 1000);
    }

    #enableTransitiveCSS() {
        this.addClass("transitivo");
        setTimeout(() => {
            this.removeClass("transitivo");
        }, 1000);
    }

    putFirst() {
        const ventana = this.elementDOM;
        const style = this.style;

        if (this.hasClass("is-firt-child")) {
            return;
        }

        firstZindex.call(this);

        AddElementToDOM.call(this);

        function AddElementToDOM() {
            if (!this.sistema.elementDOM.contains(ventana)) {
                this.sistema.elementDOM.prepend(ventana);
            }
        }

        function firstZindex() {
            this.sistema.removeFirst();

            this.addClass("is-firt-child");

            let hermanos = [...this.sistema.elementDOM.querySelectorAll(".vftwv1")].filter(hermano => hermano != ventana);

            hermanos.sort((a, b) => {
                return a.style.zIndex - b.style.zIndex;
            });
            hermanos.reverse();

            let cantidad_ventanas = hermanos.length + 1;
            style.zIndex = cantidad_ventanas;

            hermanos.forEach((hermano, i) => {
                hermano.style.zIndex = cantidad_ventanas - i - 1;
            });
        };
    }

    centralize() {
        const ventana = this.elementDOM;
        const style = this.style;

        this.#enableTransitiveCSS();
        Object.assign(style, {
            top: (window.innerHeight - ventana.offsetHeight) / 2 + "px",
            left: (window.innerWidth - ventana.offsetWidth) / 2 + "px",
        });
    };

    setShape(props) {
        if (props.transitive != false) {
            this.#enableTransitiveCSS();
        }
        this.#setShapeBasic(props);
    };

    setPosition(props) {
        const { x, y } = props;
        if (props.transitive != false) {
            this.#enableTransitiveCSS();
        }
        this.#setPositionBasic(x, y);
    };

    setSize(props) {
        const { w, h } = props;
        if (props.transitive != false) {
            this.#enableTransitiveCSS();
        }
        this.#setSizeBasic(w, h);
    };

    #setShapeBasic(propsShape) {

        const ventana = this.elementDOM;
        const style = this.style;

        let { x, y, w, h, xi, yi, wi, hi } = propsShape;

        const { respectLimitsWindow, minWidth, minHeight } = this.props;

        let widthCalc;
        let heightCalc;

        /**---------------------------------------------------------
         * Calculo de la dimensión de la ventana W y H
         * ---------------------------------------------------------
         */
        (() => {
            if (!this.resize) {
                return;
            }
            if (w != undefined) {
                if (respectLimitsWindow) {
                    widthCalc = Math.min(w, window.innerWidth - (x ?? ventana.offsetLeft));
                    w = widthCalc;
                    if (w < minWidth) {
                        w = minWidth;
                    }
                }
                style.width = w + "px";
            }
            if (h != undefined) {
                if (respectLimitsWindow) {
                    heightCalc = Math.min(h, window.innerHeight - (y ?? ventana.offsetTop));
                    h = heightCalc;
                    if (h < minHeight) {
                        h = minHeight;
                    }
                }
                if (h >= minHeight) {
                    style.height = h + "px";
                }
            }
        })();
        /**
         * ---------------------------------------------------------
         * Calculo de la posición de la ventana X e Y
         * ---------------------------------------------------------
         */
        (() => {
            if (!this.movible) {
                return;
            }
            if (x != undefined) {
                if (respectLimitsWindow) {
                    let izq = 0;
                    let der = window.innerWidth - (w ?? ventana.offsetWidth);
                    if (x < izq) {
                        x = izq;
                    }
                    if (x > der) {
                        x = der;
                    }
                }

                if (xi && wi && widthCalc < minWidth) {
                    let limit_x = xi + wi - minWidth;
                    if (x > limit_x) {
                        x = limit_x;
                    }
                }
                style.left = x + "px";
            }
            if (y != undefined) {
                if (respectLimitsWindow) {
                    let sup = 0;
                    let inf = window.innerHeight - (h ?? ventana.offsetHeight);
                    if (y < sup) {
                        y = sup;
                    }
                    if (y > inf) {
                        y = inf;
                    }
                }
                if (yi && hi && heightCalc < minHeight) {
                    let limit_y = yi + hi - minHeight;
                    if (y > limit_y) {
                        y = limit_y;
                    }
                }
                style.top = y + "px";
            }
        })();
    };

    #setPositionBasic(x, y) {

        checkPositionChange.call(this);

        this.#setShapeBasic({ x, y });

        function checkPositionChange() {
            const style = this.style;

            let { left: xi, top: yi } = style;

            xi = parseFloat(xi.replace("px", ""));
            yi = parseFloat(yi.replace("px", ""));
            if (xi != x || yi != y) {
                document.body.style.userSelect = "none";

                this.putFirst();

                (this.props.whenChangePosition ?? (() => 0))(xi, yi, x, y);
            }
        }
    };

    #setSizeBasic(w, h) {
        this.#setShapeBasic({ w, h });
    };

    #captureLastShape() {
        const style = this.style;

        if (this.isMaximized || this.isMinimized) {
            return;
        }
        ["left", "top", "width", "height"].forEach(propiedad => {
            this.lastShape[propiedad] = parseInt(style[propiedad]);
        });
    };

    #hideItemsByMaximize() {
        this.sistema.elementDOM.querySelectorAll(".vftwv1").forEach(elemento => {
            if (!elemento.classList.contains("maximizado")) {
                elemento.classList.add("ocultar-por-maximizacion");
            }
        });
    };

    #showItemsByUnmaximize() {
        this.sistema.elementDOM.querySelectorAll(".ocultar-por-maximizacion").forEach(elemento => {
            elemento.classList.remove("ocultar-por-maximizacion");
        });
    };
}