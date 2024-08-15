(() => {
    window["VENTANA_FLOTANTE"] ??= {
        init: () => {
            const sistemaDOM = document.createElement("div");
            sistemaDOM.classList.add(
                "vftwv1-mini",
                "sistema-vftwv1"
            );
            document.body.appendChild(sistemaDOM);

            const SISTEMA = new SistemaVentanasFlotantes({
                sistema: sistemaDOM
            });

            Object.assign(VENTANA_FLOTANTE, {
                SISTEMA,
                PROPS_GEN: {
                    medianPercentWidth: 0.8,
                    medianPercentHeight: 0.8,
                    minWidth: 300,
                    minHeight: 300,
                    respectLimitsWindow: true,
                    isMovible: true,
                    isResize: true,

                    marco: {
                        buttonMaximizeVisible: true,
                        buttonMinimizeVisible: true,
                        buttonCloseVisible: true,
                    }
                },
            });

            delete VENTANA_FLOTANTE.init;
        }
    };


})();