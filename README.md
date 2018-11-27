# Trabajo Práctico N° 5 - Entrega Final

## Interfaz de Usuario y Visualizacion

#### **Correcciones pedidas para la página:**

- La interfaz es regular.
- En general la propuesta es buena pero esta todo desalineado.
- Menu de hamburguesa no cubre todo el alto.
- Los juegos algunas veces tienen descripcion, y otras veces no.
- Buena navegacion. aunque cambia mucho es estilo de scrolls.
- Agregar breadcrumbs para saber "qué filtre".

#### **Correcciones pedidas para el juego a incluir:**

Ninguna.

###

#### **Decisiones de diseño en las correciones:**



- ***Menu de hamburguesa***: 


    Para la corrección de este punto sencillamente cubrimos todo el alto de la página con el menú vertical. 
    Otra observacion durante la defensa anterior fue que se podía aprovechar mejor el ancho de la página, por 
    lo que ahora el menu vertical en vez de desplazar el cuerpo del home, sencillamente aparece sobre el mismo.
    
- **Descripción de juegos**:


    Para la corrección de este punto vale la aclaración que se trataba del caso entre la descripcion de los juegos en el home y la descripcion
    de los juegos en la visualizacion del usuario logueado. Se determinó incluir dos visualizaciones, la primera es sencilla con un efecto 3D de flip
    que lo que hace es invitar al usuario a que vea la previsualizacion del juego , sin incluir más información, pero siempre presentandose en una categoria
    como es el caso de las ofertas y los juegos destacados. Por el otro lado esta la visualización de todos los juegos, que incluye fotos más grandes, más información y 
    un efecto sobre el evento "hover" el cual despliega una breve descripcion, para que el usuario pueda tener una primera mirada sin tener que entrar en la previsualizacion del juego.
    Cabe aclarar también que todos los juegos que se encuentran en la primera visualizacion se encuentran en la segunda, puesto que en esta última se encuentran TODOS los juegos.
    La decision se fundó en la comodidad del usuario y brindarle una descripcion breve para no hacerlo entrar en la previsualizacion del juego en cuestión, ayudando al dinamismo en la navegacion
    de nuestra página.


- **Breadcrumbs**: 


    Para la corrección de este punto sencillamente incorporamos breadcrumbs en los resultados de las búsquedas filtradas, como esta funcionalidad
    no se pidió en esta entrega no la hemos implementado. Pero si el concepto fué adquirido y será usado en un futuro prototipado o desarrollo de la web.


- **Estilo de scrolls**:

    Para este punto consultamos con el cliente (fabricio en este caso) sobre la mejor manera de abordar ambas visualizaciones nombradas anteriormente.
    Luego del consejo del cliente sobre una posible implementación decidimos usar el scroll horizontal del perfil de usuario logueado también en la home, de esta 
    manera conseguimos dos cosas: primero que no cambie mucho el estilo de scrolls asi no generamos confusión en el usuario, segundo la manera de implementar este scroll horizontal
    vino bien para mostrar ofertas y juegos destacados, es una visualizacion que no requiere mucha descripcion (de desearse se puede clickear en un juego) y se ajustaba al nuevo pedido
    del efecto 3d en la home, por lo que amalgamamos estos dos requerimientos e incluimos el scroll horizontal en la home y especificamente uno para ofertas y otro para juegos destacados.

- **Interfaz regular y desalineamiento**:

    Este punto aunque subjetivo era para prestarle mucha atención y trabajar intensamente con él. Las correcciones que aplicamos se orientaron a mejorar la estética general de la pagina
    es decir, mejorar los lineamientos de los elementos de la página, incorporar efectos 3d, efectos de hover, efectos para el click, manejamos mejor los espacios, etc.
    En el caso del home, incorporamos íconos representativos a cada una de las opciones. Para el search input corrimos de lugar la lupa para evitar una búsqueda no deseada apretando la lupa de buscar al intentar escribir, 
    tambien incorporamos un efecto en el hover de la misma.
