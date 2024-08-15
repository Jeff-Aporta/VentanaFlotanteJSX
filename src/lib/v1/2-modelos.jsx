(() => {
    if (!VENTANA_FLOTANTE) {
        return;
    }
    const { SISTEMA } = VENTANA_FLOTANTE;
    if (!SISTEMA) {
        return;
    }
    Iframe = ({ url, titulo, props }) => {
        SISTEMA.nuevaVentana({
            titulo,
            JSX: (
                <iframe
                    allow="accelerometer; magnetometer; gyroscope;"
                    frameBorder="0"
                    src={url}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                />
            ),
            ...props
        })
    };

    Object.assign(VENTANA_FLOTANTE, {
        Iframe,
    });
})();