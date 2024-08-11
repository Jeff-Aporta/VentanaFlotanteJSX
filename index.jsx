ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <EnvolventePagina>
                {esquemaGeneralLibreria(_CONTENIDO_VENTANA_FLOTANTE_V1_)}
            </EnvolventePagina>
            <BotonLinkPortafolio />
        </div>
    </div>,
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);