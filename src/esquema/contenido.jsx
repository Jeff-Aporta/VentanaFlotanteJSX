const _CONTENIDO_VENTANA_FLOTANTE_V1_ = new GenerarContenidoLibreria({
    nombre: 'Ventana Flotante v1 JSX',
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
                *Integración Directa con el DOM:* Se integra directamente con el Document Object Model (DOM) de la página web, creando 
                y manipulando los elementos necesarios sin necesidad de dependencias externas.
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
            nombre: "Uso con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        <h2>
                            ASCII Map Loader
                        </h2>
                        Para cargar los módulos necesarios, se puede usar *ASCIIMapLoader JS*.
                        <a href="https://jeff-aporta.github.io/ASCIIMapLoader">
                            https://jeff-aporta.github.io/ASCIIMapLoader
                        </a>
                        <h2>
                            Dependencia JSX
                        </h2>
                        Para usar la biblioteca con un CDN, se necesita un proyecto React con JSX y MUI.
                        Está biblioteca fue programada usando React y MUI en la parte del cliente.
                        <Code linenumbers={false} className="simple">{`
                            https://unpkg.com/react@latest/umd/react.production.min.js
                            https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js
                            https://unpkg.com/@babel/standalone/babel.min.js
                            https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js
                        `}</Code>
                        <h2>
                            Dependencias extra
                        </h2>
                        Este elemento utiliza también iconos de font-awesome, así que también es necesario importar la librería
                        para que funcione correctamente.
                        <Code linenumbers={false} className="simple">{`
                            https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css
                        `}</Code>
                        <h2>
                            ASCII Map Loader de las dependencias
                        </h2>
                        <Code linenumbers={false} className="simple">{`
                            🔗 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css

                            ➤🌐 https://unpkg.com
                            │
                            ├──🔗 react@latest/umd/react.production.min.js
                            ├──🔗 react-dom@latest/umd/react-dom.production.min.js
                            ├──🔗 @babel/standalone/babel.min.js
                            └──🔗 @mui/material@latest/umd/material-ui.production.min.js
                        `}</Code>
                        <hr />
                        <h2>
                            Componente
                        </h2>
                        Este elemento contiene varios módulos que hay que importar en orden para que funcione correctamente.
                        <Code nocode className="link">{`
                            ${thisObj.githubPage}/src/lib/v1/1-main.jsx
                            ${thisObj.githubPage}/src/lib/v1/2-css-root-control.jsx
                            ${thisObj.githubPage}/src/lib/v1/2-globales.jsx
                            ${thisObj.githubPage}/src/lib/v1/2-modelos.jsx
                            ${thisObj.githubPage}/src/lib/v1/estructura/3-control.jsx
                            ${thisObj.githubPage}/src/lib/v1/estructura/3-crear.jsx
                            ${thisObj.githubPage}/src/lib/v1/estructura/3-marco.jsx
                        `}</Code>
                        Código para quemar el CDN en el HTML:
                        <Code>{`
                            <script src="${thisObj.githubPage}/src/lib/v1/1-main.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-css-root-control.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-globales.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/2-modelos.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/estructura/3-control.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/estructura/3-crear.jsx"></script>
                            <script src="${thisObj.githubPage}/src/lib/v1/estructura/3-marco.jsx"></script>
                        `}</Code>
                        <h2>
                            ASCII Map Loader del componente
                        </h2>
                        <Code linenumbers={false} className="simple">{`
                            ➤📁 ${thisObj.githubPage}/src
                            │
                            ├──📁 lib
                            │   ├──📁 v1
                            │   │   ├──📄 1-main
                            │   │   ├──📄 2-css-root-control
                            │   │   ├──📄 2-globales
                            │   │   ├──📄 2-modelos
                            │   │   │
                            │   │   ├──📁 estructura
                            │   │   │   ├──📁 estructura
                            │   │   │   │   ├──📄 3-control
                            │   │   │   │   ├──📄 3-crear
                            ╧   ╧   ╧   ╧   └──📄 3-marco
                        `}</Code>
                    </FormatoDoc>
                );
            }
        }
    ]
});