(() => {
    const ID_ROOT_CSS = "vftwv1";
    const ROOT_STYLE = document.createElement("style");
    ROOT_STYLE.classList.add("ventana-flotante-variables-root");
    document.head.appendChild(ROOT_STYLE);

    ROOT_PROPIEDADES({ theme: "glassdark" });

    Object.assign(VENTANA_FLOTANTE, {
        ID_ROOT_CSS,
        ROOT_STYLE,
        ROOT_PROPIEDADES,
    });

    function ROOT_PROPIEDADES(props = {}) {
        if (typeof props.theme == "object") {
            props = props.theme;
        } else {
            switch (props.theme.toLowerCase()) {
                case "dark":
                    props = themeDark();
                    break;
                case "light":
                default:
                    props = themeLight();
                    break;
                case "w98":
                    props = themeW98();
                    break;
                case "glassdark":
                    props = themeGlassDark();
                    break;
                case "glasslight":
                    props = themeGlassLight();
                    break;
            }
        }
        const {
            transitionSeconds,
            boxShadow,
            frame,
            minimizado,
            contenido,
            borderRadius,
            bordeColor,
            bordeGrosor,
            buttons,
        } = props;

        crearEstilo({
            ":root": {
                //-----------------------------
                // Botones marco superior
                //-----------------------------
                [`--${ID_ROOT_CSS}-button-color`]: buttons.color,
                [`--${ID_ROOT_CSS}-button-minimize-background-color`]: buttons.minimize.backgroundColor,
                [`--${ID_ROOT_CSS}-button-minimize-border-radius`]: buttons.minimize.borderRadius,
                [`--${ID_ROOT_CSS}-button-maximize-background-color`]: buttons.maximize.backgroundColor,
                [`--${ID_ROOT_CSS}-button-maximize-border-radius`]: buttons.maximize.borderRadius,
                [`--${ID_ROOT_CSS}-button-close-background-color`]: buttons.close.backgroundColor,
                [`--${ID_ROOT_CSS}-button-close-border-radius`]: buttons.close.borderRadius,
                [`--${ID_ROOT_CSS}-button-minimize-box-shadow`]: buttons.minimize.boxShadow,
                [`--${ID_ROOT_CSS}-button-maximize-box-shadow`]: buttons.maximize.boxShadow,
                [`--${ID_ROOT_CSS}-button-close-box-shadow`]: buttons.close.boxShadow,
                [`--${ID_ROOT_CSS}-button-minimize-scale`]: buttons.close.scale.toString(),
                [`--${ID_ROOT_CSS}-button-maximize-scale`]: buttons.close.scale.toString(),
                [`--${ID_ROOT_CSS}-button-close-scale`]: buttons.close.scale.toString(),
                //-----------------------------
                // contenido
                //-----------------------------
                [`--${ID_ROOT_CSS}-contenido-background-color`]: contenido.backgroundColor,
                [`--${ID_ROOT_CSS}-contenido-color`]: contenido.color,
                [`--${ID_ROOT_CSS}-contenido-box-shadow`]: contenido.boxShadow,
                [`--${ID_ROOT_CSS}-contenido-padding`]: contenido.padding,
                //-----------------------------
                // margenes minimización
                //-----------------------------
                [`--${ID_ROOT_CSS}-mini-top`]: `${minimizado.top}px`,
                [`--${ID_ROOT_CSS}-mini-right`]: `${minimizado.right}px`,
                [`--${ID_ROOT_CSS}-mini-bottom`]: `${minimizado.bottom}px`,
                [`--${ID_ROOT_CSS}-mini-left`]: `${minimizado.left}px`,
                //-----------------------------
                // Redondeado de la ventana flotante
                //-----------------------------
                [`--${ID_ROOT_CSS}-border-radius`]: borderRadius,
                [`--${ID_ROOT_CSS}-box-shadow`]: boxShadow,
                [`--${ID_ROOT_CSS}-backdrop-filter`]: props.backdropFilter,

                //-----------------------------
                // Anchura de la ventana flotante cuando está minimizada
                //-----------------------------
                [`--${ID_ROOT_CSS}-width-minimize`]: `calc(var(--${ID_ROOT_CSS}-height-top) * 2 + 150px) !important`,

                //-----------------------------
                // Duración de las transiciones
                //-----------------------------
                [`--${ID_ROOT_CSS}-transition`]: `all ${transitionSeconds}s`,

                //-----------------------------
                // Dimensiones del marco de la ventana flotante
                //-----------------------------
                [`--${ID_ROOT_CSS}-width-right`]: frame.wRight, //Ancho del borde del marco a la derecha de la ventana flotante
                [`--${ID_ROOT_CSS}-width-left`]: frame.wLeft, //Ancho del borde del marco a la izquierda de la ventana flotante
                [`--${ID_ROOT_CSS}-height-bottom`]: frame.hBottom, //Alto del borde del marco en la parte inferior de la ventana flotante
                [`--${ID_ROOT_CSS}-height-top`]: frame.hTop, //Alto del borde del marco en la parte superior de la ventana flotante

                //-----------------------------
                // Colores del marco de la ventana flotante
                //-----------------------------
                [`--${ID_ROOT_CSS}-marco-background-color-arriba`]: frame.backgroundColorTop,
                [`--${ID_ROOT_CSS}-marco-background-color-abajo`]: frame.backgroundColorBottom,
                [`--${ID_ROOT_CSS}-marco-background-color-izquierda`]: frame.backgroundColorLeft,
                [`--${ID_ROOT_CSS}-marco-background-color-derecha`]: frame.backgroundColorRight,
                [`--${ID_ROOT_CSS}-marco-background-color-abajo-izquierda`]: frame.backgroundColorBottomLeft,
                [`--${ID_ROOT_CSS}-marco-background-color-abajo-derecha`]: frame.backgroundColorBottomRight,

                [`--${ID_ROOT_CSS}-marco-color-titulo`]: frame.colorTitulo,
                [`--${ID_ROOT_CSS}-marco-tono`]: `${frame.hue}`,

                [`--${ID_ROOT_CSS}-borde-grosor`]: bordeGrosor,
                [`--${ID_ROOT_CSS}-marco-borde-color`]: bordeColor,
                [`--${ID_ROOT_CSS}-marco-background-color`]: frame.backgroundColor,
            }
        }, ROOT_STYLE);
    }

    function themeW98() {
        return {
            transitionSeconds: 0.5,

            boxShadow: "inset -2px -2px 0px 0px rgba(0, 0, 0, 0.5), inset 2px 2px 0px 0px rgba(255, 255, 255, 0.7)",

            //-----------------------------
            //Borde de la ventana flotante
            //-----------------------------
            borderRadius: 0,

            bordeColor: "#252525",
            bordeGrosor: 2,

            backdropFilter: "",

            frame: {
                wRight: 10,
                wLeft: 10,
                hBottom: 10,
                hTop: 30,

                backgroundColor: "#D4D0C9",
                backgroundColorLeft: "#D4D0C9",
                backgroundColorRight: "#D4D0C9",
                backgroundColorBottom: "#D4D0C9",
                backgroundColorBottomLeft: "#D4D0C9",
                backgroundColorBottomRight: "#D4D0C9",
                backgroundColorTop: "darkblue",
                colorTitulo: "white",
            },

            buttons: {
                color: "black",

                minimize: {
                    backgroundColor: "#D4D0C9",
                    borderRadius: 0,
                    boxShadow: "inset -3px -3px 3px 0px rgba(0, 0, 0, 0.3), inset 3px 3px 3px 0px rgba(255, 255, 255, 0.5)",
                    scale: 0.8,
                },

                maximize: {
                    backgroundColor: "#D4D0C9",
                    borderRadius: 0,
                    boxShadow: "inset -3px -3px 3px 0px rgba(0, 0, 0, 0.3), inset 3px 3px 3px 0px rgba(255, 255, 255, 0.5)",
                    scale: 0.8,
                },

                close: {
                    backgroundColor: "#D4D0C9",
                    borderRadius: 0,
                    boxShadow: "inset -3px -3px 3px 0px rgba(0, 0, 0, 0.3), inset 3px 3px 3px 0px rgba(255, 255, 255, 0.5)",
                    scale: 0.8,
                },
            },

            minimizado: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },

            contenido: {
                padding: 10,
                backgroundColor: "transparent",
                color: "black",

                boxShadow: "-4px 0px 3px rgba(0, 0, 0, 0.2), 3px 3px 0px rgba(255, 355, 355, 0.4)",
            },
        };
    }

    function themeDark() {
        return {
            transitionSeconds: 0.5,
            boxShadow: "none",

            borderRadius: 15,
            bordeColor: "#333",
            bordeGrosor: 2,

            backdropFilter: "",

            frame: {
                wRight: 5,
                wLeft: 5,
                hBottom: 5,
                hTop: 30,

                backgroundColor: "#252525",
                backgroundColorLeft: "transparent",
                backgroundColorRight: "transparent",
                backgroundColorBottom: "transparent",
                backgroundColorBottomLeft: "transparent",
                backgroundColorBottomRight: "transparent",
                backgroundColorTop: "transparent",

                colorTitulo: "white",
            },

            buttons: {
                color: "white",

                minimize: {
                    backgroundColor: "Green",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                maximize: {
                    backgroundColor: "Goldenrod",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                close: {
                    backgroundColor: "darkred",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },
            },

            minimizado: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },

            contenido: {
                padding: 10,
                backgroundColor: "#131313",
                color: "white",

                boxShadow: "none",
            },
        };
    }

    function themeLight() {
        return {
            transitionSeconds: 0.5,
            boxShadow: "none",

            borderRadius: 15,
            bordeColor: "deepskyblue",
            bordeGrosor: 2,

            backdropFilter: "",

            frame: {
                wRight: 5,
                wLeft: 5,
                hBottom: 5,
                hTop: 30,

                backgroundColor: "DodgerBlue",
                backgroundColorLeft: "transparent",
                backgroundColorRight: "transparent",
                backgroundColorBottom: "transparent",
                backgroundColorBottomLeft: "transparent",
                backgroundColorBottomRight: "transparent",
                backgroundColorTop: "transparent",
                colorTitulo: "black",
            },

            buttons: {
                color: "black",

                minimize: {
                    backgroundColor: "limegreen",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                maximize: {
                    backgroundColor: "gold",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                close: {
                    backgroundColor: "red",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },
            },

            minimizado: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },

            contenido: {
                padding: 10,
                backgroundColor: "white",
                color: "black",

                boxShadow: "none",
            },
        };
    }

    function themeGlassDark() {
        return {
            transitionSeconds: 0.5,
            boxShadow: "none",

            borderRadius: 15,
            bordeColor: "rgba(255, 255, 255, 0.2)",
            bordeGrosor: 2,

            backdropFilter: "brightness(0.7) blur(6px)",

            frame: {
                wRight: 5,
                wLeft: 5,
                hBottom: 5,
                hTop: 30,

                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backgroundColorLeft: "transparent",
                backgroundColorRight: "transparent",
                backgroundColorBottom: "transparent",
                backgroundColorBottomLeft: "transparent",
                backgroundColorBottomRight: "transparent",
                backgroundColorTop: "transparent",

                colorTitulo: "rgba(200, 255, 255, 0.7)",
            },

            buttons: {
                color: "white",

                minimize: {
                    backgroundColor: "Green",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                maximize: {
                    backgroundColor: "Goldenrod",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                close: {
                    backgroundColor: "darkred",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },
            },

            minimizado: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },

            contenido: {
                padding: 10,
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                color: "white",

                boxShadow: "none",
            },
        };
    }

    function themeGlassLight() {
        return {
            transitionSeconds: 0.5,
            boxShadow: "none",

            borderRadius: 15,
            bordeColor: "rgba(0, 0, 0, 0.3)",
            bordeGrosor: 2,

            backdropFilter: "brightness(1.3) blur(6px)",

            frame: {
                wRight: 5,
                wLeft: 5,
                hBottom: 5,
                hTop: 30,

                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backgroundColorLeft: "transparent",
                backgroundColorRight: "transparent",
                backgroundColorBottom: "transparent",
                backgroundColorBottomLeft: "transparent",
                backgroundColorBottomRight: "transparent",
                backgroundColorTop: "transparent",

                colorTitulo: "rgba(0, 0, 0, 0.7)",
            },

            buttons: {
                color: "white",

                minimize: {
                    backgroundColor: "Green",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                maximize: {
                    backgroundColor: "Goldenrod",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },

                close: {
                    backgroundColor: "darkred",
                    borderRadius: "50%",
                    boxShadow: "none",
                    scale: 1,
                },
            },

            minimizado: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },

            contenido: {
                padding: 10,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "black",

                boxShadow: "none",
            },
        };
    }
})();