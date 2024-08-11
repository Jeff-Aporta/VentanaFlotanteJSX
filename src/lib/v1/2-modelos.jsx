
VENTANA_FLOTANTE_V1.AGRUPAMIENTO.Iframe = ({ url, titulo, props }) => {/**
    * Abre una ventana flotante con un iframe de forma rápida
*/
    VENTANA_FLOTANTE_V1.AGRUPAMIENTO.nuevaVentana({
        titulo,
        JSX: <iframe src={url} style={{
            width: '100%',
            height: '100%',
            border: 'none',
        }}
        ></iframe>,
        ...props
    })
}