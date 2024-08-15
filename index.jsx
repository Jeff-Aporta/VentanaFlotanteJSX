ReactDOM.render(
    <div className="esquema-principal">
        <div className="contenedor-pagina">
            <EnvolventePagina>
                {esquemaGeneralLibreria(_CONTENIDO_VENTANA_FLOTANTE_)}
            </EnvolventePagina>
            <BotonLinkPortafolio />
        </div>
    </div>,
    document.querySelector('body')
);

setTimeout(() => {
    PR.prettyPrint();
}, 0);

VENTANA_FLOTANTE.init();
// VENTANA_FLOTANTE.SISTEMA.nuevaVentana({
//     titulo: "Ventana flotante",
//     contenido: (
//         <div>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//             <h2>¡Hola mundo!</h2>
//             <p>Este es un ejemplo de una ventana flotante.</p>
//         </div>
//     )
// });
