const _CONTENIDO_VENTANA_FLOTANTE_ = new GenerarContenidoLibreria({
    nombre: 'Ventana Flotante JSX',
    slogan: 'Ventana flotante con contenido personalizado',
    img: 'src/img/logo.png',

    github: "https://github.com/Jeff-Aporta/VentanaFlotanteJSX",

    resumen: {
        desc: `
            Biblioteca de JavaScript que te permite crear ventanas flotantes personalizables, movibles y redimensionables con un 
            estilo similar al del sistema operativo Windows. La biblioteca está diseñada para integrarse fácilmente en tus 
            proyectos web, proporcionando un sistema de gestión de ventanas flexible y visualmente atractivo.
        `,
        descImg: [
            `
                *Alto Grado de Personalización:* Permite ajustar una amplia gama de propiedades, como el tamaño, el radio de los bordes, 
                los colores de los marcos, y la configuración de la capacidad de mover y redimensionar las ventanas.
            `,
            `
                *Estilos Dinámicos con Variables CSS:* Utiliza variables CSS (:root) para aplicar estilos dinámicos a las ventanas, 
                permitiendo un cambio rápido y flexible de temas y configuraciones visuales.
            `,
            `
                *Diseño Similar al de Windows OS:* Imita el diseño y la funcionalidad de las ventanas del sistema operativo Windows, 
                incluyendo la capacidad de minimizar, mover y redimensionar las ventanas de forma intuitiva.
            `,
        ]
    },
    secciones: [
        {
            nombre: "Dependencias",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        <SubEnvolventeSeccion style={{ textTransform: "uppercase", textAlign: "center" }}>
                            <b>
                                Estas dependencias se deben cargar primero que la librería de Ventana Flotante JSX para que funcione
                                correctamente.
                            </b>
                        </SubEnvolventeSeccion>
                        <br />
                        <h2>
                            ASCII Map Loader (Opcional)
                        </h2>
                        Para cargar los módulos necesarios, se puede usar *ASCIIMapLoader JS.* para tener todo más organizado.
                        <br /><br />
                        <b>Documentación: </b>
                        <Link
                            href="https://jeff-aporta.github.io/ASCIIMapLoader"
                            target="_blank"
                        >
                            https://jeff-aporta.github.io/ASCIIMapLoader
                        </Link>
                        <Code nocode className="link">{`
                            https://jeff-aporta.github.io/ASCIIMapLoader/index.js
                        `}</Code>
                        <br />
                        <h2>
                            Dependencia JSX
                        </h2>
                        Para usar la biblioteca con un CDN, se necesita un proyecto React con JSX y MUI.
                        Está biblioteca fue programada usando React y MUI en la parte del cliente.
                        <Code nocode className="link">{`
                            https://unpkg.com/react@latest/umd/react.production.min.js
                            https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js
                            https://unpkg.com/@babel/standalone/babel.min.js
                            https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js
                        `}</Code>
                        <br />
                        <h2>
                            Dependencias extra
                        </h2>
                        Este elemento utiliza animaciones CSS de la biblioteca Animate.css.
                        <br /><br />
                        <b>Documentación: </b>
                        <Link
                            href="https://animate.style/"
                            target="_blank"
                        >
                            https://animate.style/
                        </Link>
                        <Code nocode className="link">{`
                            https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
                        `}</Code>
                        Tengo librerías personales que uso en mis proyectos.
                        <Code nocode className="link">{`
                            https://jeff-aporta.github.io/portafolio/src/JS2CSS.js
                        `}</Code>
                        El archivo JS2CSS.js es un archivo que se usa para generar desde JavaScript las variables CSS que se usan
                        para la personalización del tema de las ventanas flotantes.
                        <br />
                        <br />
                        <br />
                        <SubEnvolventeSeccion>
                            <h2>
                                ASCII Map Loader de las dependencias
                            </h2>
                            1) Cargar ASCII Map Loader en el head del HTML.
                            <Code>{`
                                <script src="https://jeff-aporta.github.io/ASCIIMapLoader/index.js"></script>
                            `}</Code>
                            2) Cargar las dependencias en el head del HTML después de cargar ASCII Map Loader.
                            <Code linenumbers={false} className="simple">{`
                                <script>
                                    runASCIIMapLoader_inLine(\`
                                        🔗 https://jeff-aporta.github.io/portafolio/src/JS2CSS.js
                                        🎨 https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
                                        
                                        ➤🌐 https://unpkg.com
                                        │
                                        ├──🔗 react@latest/umd/react.production.min.js
                                        ├──🔗 react-dom@latest/umd/react-dom.production.min.js
                                        ├──🔗 @babel/standalone/babel.min.js
                                        └──🔗 @mui/material@latest/umd/material-ui.production.min.js
                                    \`);
                                </script>
                            `}</Code>
                        </SubEnvolventeSeccion>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "Uso con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Este elemento contiene varios módulos que hay que importar en orden para que funcione correctamente.
                        <br /><br />
                        Código para quemar el CDN en el HTML:
                        <Code>{`
                            <script src="${thisObj.githubPage}/src/lib/v1/clases/Marco.jsx" type="text/babel"></script>
                            <link rel="stylesheet" href="${thisObj.githubPage}/src/lib/v1/clases/Marco.css">
                            
                            <script src="${thisObj.githubPage}/src/lib/v1/clases/SistemaVentanasFlotantes.jsx" type="text/babel"></script>

                            <script src="${thisObj.githubPage}/src/lib/v1/clases/VentanaFlotante.jsx" type="text/babel"></script>
                            <link rel="stylesheet" href="${thisObj.githubPage}/src/lib/v1/clases/VentanaFlotante.css">

                            <script src="${thisObj.githubPage}/src/lib/v1/1-main.jsx" type="text/babel"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-css-root-control.jsx" type="text/babel"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-modelos.jsx" type="text/babel"></script>
                        `}</Code>
                        <h2>
                            ASCII Map Loader del componente
                        </h2>
                        <Code linenumbers={false} className="simple">{`
                            ➤📁 ${thisObj.githubPage}/src
                            │
                            ├──📁 lib
                            │   ├──🎨 index
                            │   │
                            │   ├──📁 v1
                            │   │   ├──📄 1-main
                            │   │   ├──📄 2-css-root-control
                            │   │   ├──📄 2-globales
                            │   │   ├──📄 2-modelos
                            │   │   │
                            │   │   ├──📁 estructura
                            │   │   │   │
                            │   │   │   ├──📁 estructura
                            │   │   │   │   ├──📄 3-control
                            │   │   │   │   ├──📄 3-crear
                            ╧   ╧   ╧   ╧   └──📄 3-marco
                        `}</Code>
                    </FormatoDoc>
                );
            }
        },
    ]
});