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
                        <SubEnvolventeSeccion style={{ textTransform: "uppercase" }}>
                            <b>
                                Estas dependencias se deben cargar primero que la librería de Ventana Flotante JSX para que funcione
                                correctamente.
                            </b>
                        </SubEnvolventeSeccion>
                        <h1>
                            Dependencia JSX
                        </h1>
                        Para usar la biblioteca con un CDN, necesitas importar babel y react.
                        <Code nocode className="link">{`
                            https://unpkg.com/react@latest/umd/react.production.min.js
                            https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js
                            https://unpkg.com/@babel/standalone/babel.min.js
                        `}</Code>
                        <Code>{`
                            <script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
                            <script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
                            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                        `}</Code>
                        <br />
                        <h1>
                            Dependencias extra
                        </h1>
                        Este elemento utiliza animaciones CSS de la biblioteca animate.css
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
                        <Code>{`
                            <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
                        `}</Code>
                        Librerías personales que uso normalmente en mis proyectos.
                        <br /><br />
                        <b>Documentación: </b>
                        <Link
                            href="https://jeff-aporta.github.io/JS2CSS/"
                            target="_blank"
                        >
                            https://jeff-aporta.github.io/JS2CSS/
                        </Link>
                        <Code nocode className="link">{`
                            https://jeff-aporta.github.io/JS2CSS/index.js
                        `}</Code>
                        <Code>{`
                                <script src="https://jeff-aporta.github.io/JS2CSS/index.js"></script>
                        `}</Code>
                        <br />
                        <SubEnvolventeSeccion>
                            <h1>
                                ASCII Map Loader (Opcional)
                            </h1>
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
                            <Code>{`
                                <script src="https://jeff-aporta.github.io/ASCIIMapLoader/index.js"></script>
                            `}</Code>
                            Después de cargar *ASCII Map Loader,* se pueden cargar los módulos necesarios con el siguiente código:
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
                            <script src="${thisObj.githubPage}/src/lib/v1/clases/SistemaVentanasFlotantes.jsx" type="text/babel"></script>

                            <script src="${thisObj.githubPage}/src/lib/v1/clases/Marco.jsx" type="text/babel"></script>
                            <link href="${thisObj.githubPage}/src/lib/v1/clases/Marco.css" rel="stylesheet" />

                            <script src="${thisObj.githubPage}/src/lib/v1/clases/VentanaFlotante.jsx" type="text/babel"></script>
                            <link href="${thisObj.githubPage}/src/lib/v1/clases/VentanaFlotante.css" rel="stylesheet" />

                            <script src="${thisObj.githubPage}/src/lib/v1/1-main.jsx" type="text/babel"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-css-root-control.jsx" type="text/babel"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-modelos.jsx" type="text/babel"></script>
                        `}</Code>
                        <SubEnvolventeSeccion>
                            <h2>
                                ASCII Map Loader del componente
                            </h2>
                            <Code linenumbers={false} className="simple">{`
                                🤖 REACT (JSX)

                                ➤🌐 https://jeff-aporta.github.io/VentanaFlotanteJSX/src/lib
                                │
                                ├──📁 v1
                                │   │
                                │   ├──📁 clases
                                │   │   ├──🖼️ Marco
                                │   │   ├──🖼️ VentanaFlotante
                                │   │   └──📄 SistemaVentanasFlotantes
                                │   │
                                │   ├──📄 1-main
                                │   ├──📄 2-css-root-control
                                ╧   └──📄 2-modelos
                            `}</Code>
                        </SubEnvolventeSeccion>
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "VENTANA_FLOTANTE",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Esta es la variable principal de control de la biblioteca.
                        <br /><br />
                        Con esta variable se pueden crear ventanas y controlarlas.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "VENTANA_FLOTANTE.init()",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Para inicializar la biblioteca, se debe llamar a la función *init()* de la variable *VENTANA_FLOTANTE*.
                        <br /><br />
                        Esta función se encarga de crear el sistema de ventanas flotantes y añadirlo al DOM.
                        <br /><br />
                        Crea un objeto de la clase *SistemaVentanasFlotantes* y lo vincula a un elemento del DOM.
                        Luego, asigna las propiedades de generación a la variable *VENTANA_FLOTANTE*, se llama PROPS_GEN, esta variable
                        puede ser modificada en cualquier momento para cambiar la generación por defecto de las ventanas.
                        <br /><br />
                        Esta función se llama una sola vez al inicio del programa, si se llama más de una vez, generará un error por
                        variable indefinida.
                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "VENTANA_FLOTANTE.ROOT_PROPIEDADES(props)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Esta función se encarga de cambiar las propiedades visuales en CSS de las ventanas flotantes.
                        <br /><br />
                        Se le debe pasar un objeto con las propiedades que se quieren cambiar.
                        <h1>
                            Personalización de tema para las ventanas
                        </h1>
                        <Code>{`
                            VENTANA_FLOTANTE.ROOT_PROPIEDADES({
                                theme: {
                                    transitionSeconds: number-value, // Segundos de duración de las transiciones ej: 0.5
                                    boxShadow: string-value, // Sombra de las ventanas ej: "0px 0px 10px 0px rgba(0,0,0,0.75)"

                                    borderRadius: string-value, // Radio de redondeo para las esquinas ej: "10px"
                                    bordeColor: string-value, // Color del borde del perímetro ej: "black"
                                    bordeGrosor: string-value, // Grosor del borde del perímetro ej: "2px"

                                    backdropFilter: string-value, // Filtro para modificar lo que se ve detrás de la ventana ej: "blur(5px)"

                                    frame: { // Propiedades del marco de la ventana
                                        wRight: string-value, // Ancho del marco derecho ej: "5px"
                                        wLeft: string-value, // Ancho del marco izquierdo ej: "5px"
                                        hBottom: string-value, // Alto del marco inferior ej: "5px"
                                        hTop: string-value, // Alto del marco superior ej: "30px"

                                        backgroundColor: string-value, // Color de fondo del marco ej: "black"
                                        backgroundColorLeft: string-value, // Color de fondo del marco izquierdo ej: "black"
                                        backgroundColorRight: string-value, // Color de fondo del marco derecho ej: "black"
                                        backgroundColorBottom: string-value, // Color de fondo del marco inferior ej: "black"
                                        backgroundColorBottomLeft: string-value, // Color de fondo del marco inferior izquierdo ej: "black"
                                        backgroundColorBottomRight: string-value, // Color de fondo del marco inferior derecho ej: "black"
                                        backgroundColorTop: string-value, // Color de fondo del marco superior ej: "black"

                                        colorTitulo: string-value, // Color del título de la ventana ej: "white"
                                    },

                                    buttons: { // Propiedades de los botones de la ventana
                                        color: string-value, // Color del texto de los botones ej: "white"

                                        minimize: { // Propiedades del botón de minimizar
                                            backgroundColor: string-value, // Color de fondo del botón ej: "black"
                                            borderRadius: string-value, // Radio de redondeo del botón ej: "50%"
                                            boxShadow: string-value, // Sombra del botón ej: "none"
                                            scale: string-value, // Escala del botón ej: "1"
                                        },

                                        maximize: { // Propiedades del botón de maximizar
                                            backgroundColor: string-value, // Color de fondo del botón ej: "black"
                                            borderRadius: string-value, // Radio de redondeo del botón ej: "50%"
                                            boxShadow: string-value, // Sombra del botón ej: "none"
                                            scale: string-value, // Escala del botón ej: "1"
                                        },

                                        close: { // Propiedades del botón de cerrar
                                            backgroundColor: string-value, // Color de fondo del botón ej: "black"
                                            borderRadius: string-value, // Radio de redondeo del botón ej: "50%"
                                            boxShadow: string-value, // Sombra del botón ej: "none"
                                            scale: string-value, // Escala del botón ej: "1"
                                        },
                                    },

                                    minimizado: { // Propiedades del contenedor de las ventanas minimizadas
                                        top: string-value, // Posición superior del contenedor ej: "15px"
                                        right: string-value, // Posición derecha del contenedor ej: "15px"
                                        bottom: string-value, // Posición inferior del contenedor ej: "15px"
                                        left: string-value, // Posición izquierda del contenedor ej: "15px"
                                    },

                                    contenido: {
                                        padding: string-value, // Relleno del contenido de la ventana ej: "10px"
                                        backgroundColor: string-value, // Color de fondo del contenido de la ventana ej: "black"
                                        color: string-value, // Color del texto del contenido de la ventana ej: "white"

                                        boxShadow: string-value, // Sombra del contenido de la ventana ej: "0px 0px 10px 0px rgba(0,0,0,0.75)"
                                    },
                                }
                            });
                        `}</Code>

                    </FormatoDoc>
                );
            }
        },
        {
            nombre: "VENTANA_FLOTANTE.ROOT_PROPIEDADES(): temas por defecto",
            nombre_render_as: "CodeInlineParcial",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Ya que la función *VENTANA_FLOTANTE.ROOT_PROPIEDADES()* es una función de personalización, y
                        la personalización es un proceso largo y extenso, he creado algunos temas por defecto que se pueden
                        aplicar de forma rápida.
                        {["light", "dark", "glasslight", "glassdark", "w98"].map((tema) => {
                            return (
                                <React.Fragment>
                                    <SubEnvolventeSeccion>
                                        <h1>
                                            theme {tema}.
                                        </h1>
                                        <Code>{`
                                            VENTANA_FLOTANTE.ROOT_PROPIEDADES({ theme: "${tema}" });
                                        `}</Code>
                                        <div
                                            style={{
                                                padding: "60px",

                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexWrap: "wrap",
                                                gap: "20px",

                                                ...(() => {
                                                    const retorno = {};

                                                    switch (tema) {
                                                        case "light":
                                                        case "glasslight":
                                                            retorno.backgroundColor = "white";
                                                            break;
                                                    }

                                                    return retorno;
                                                })()
                                            }}
                                        >
                                            <img src={`${thisObj.githubPage}/src/img/temas/${tema}.png`} alt={tema} />
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    VENTANA_FLOTANTE.SISTEMA.maximoDeVentanas = 1;
                                                    VENTANA_FLOTANTE.ROOT_PROPIEDADES({ theme: tema });
                                                    VENTANA_FLOTANTE.SISTEMA.nuevaVentana({
                                                        titulo: "Ventana flotante",
                                                        contenido: (
                                                            <div>
                                                                <h2>¡Hola mundo!</h2>
                                                                <p>Este es un ejemplo de una ventana flotante.</p>
                                                            </div>
                                                        )
                                                    });
                                                }}
                                            >
                                                Probar tema {tema}
                                            </Button>
                                        </div>
                                    </SubEnvolventeSeccion>
                                    <br />
                                </React.Fragment>
                            );
                        })}
                    </FormatoDoc>
                );
            }
        },
    ]
});