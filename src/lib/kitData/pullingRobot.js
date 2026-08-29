export const pullingRobotKit = {
  id: "pulling",
  name: "LEGO Education WeDo 2.0 · Set 45300",
  model: { en: "Pulling Robot", es: "Robot de Tracción" },
  color: "#16A34A",
  pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/a44ba99f6_Pulling.pdf",
  category: "wedo",
  steps: [
    {
      icon: "Box",
      pdfPage: 3,
      caption: { en: "Stack a green beam with holes on top of an orange 2×4 brick, a little shelf on a box!", es: "Apila una viga verde con agujeros sobre un ladrillo naranja 2×4, ¡un estante sobre una caja!" },
      parts: [
        { emoji: "🟠", count: 1, en: "Orange brick 2×4", es: "Ladrillo naranja 2×4" },
        { emoji: "🟢", count: 1, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }
      ],
      attach: [{ x: 50, y: 50, en: "Green beam on top of orange brick", es: "Viga verde encima del ladrillo naranja", detail: { en: "Lay the orange brick flat, then press the green beam on top of it. The round holes in the green beam face the sides.", es: "Pon el ladrillo naranja plano, luego presiona la viga verde encima. Los agujeros redondos en la viga verde miran hacia los lados." } }],
      help: { en: "Find the orange 2×4 brick (2 rows of 4 bumps). Press the green beam (4 bumps long with round holes on the side) on top of it. The holes face sideways, axles will go through them later. This little stack is the start of the motor base!", es: "Busca el ladrillo naranja 2×4 (2 filas de 4 botones). Presiona la viga verde (4 botones de largo con agujeros redondos al costado) encima. Los agujeros miran de lado, más tarde pasarán ejes por ellos. ¡Esta pequeña pila es el comienzo de la base del motor!" }
    },
    {
      icon: "Minus",
      pdfPage: 5,
      caption: { en: "Push 2 black connector pins through the side holes, they hold the axle in place!", es: "Empuja 2 pasadores negros por los agujeros laterales, ¡sujetan el eje en su lugar!" },
      parts: [{ emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" }],
      attach: [
        { x: 20, y: 50, en: "Left side hole", es: "Agujero del lado izquierdo", detail: { en: "Push one black pin through the left side hole of the green beam.", es: "Empuja un pasador negro por el agujero del lado izquierdo de la viga verde." } },
        { x: 80, y: 50, en: "Right side hole", es: "Agujero del lado derecho", detail: { en: "Push the second black pin through the right side hole.", es: "Empuja el segundo pasador negro por el agujero del lado derecho." } }
      ],
      help: { en: "Find the 2 black connector pins. Push one into each side hole of the green beam, one on the left side and one on the right side. They should click in and poke out both sides a little. These will support the spinning gear axle.", es: "Busca los 2 pasadores conectores negros. Empuja uno en cada agujero lateral de la viga verde, uno del lado izquierdo y uno del lado derecho. Deben hacer clic y sobresalir un poco por ambos lados. Estos sostendrán el eje del engranaje giratorio." }
    },
    {
      icon: "Cpu",
      pdfPage: 6,
      caption: { en: "Add the motor and a small green brick beside it, the motor is the power source!", es: "Agrega el motor y un ladrillo verde pequeño junto a él, ¡el motor es la fuente de energía!" },
      parts: [
        { emoji: "⚙️", count: 1, en: "Motor (with cable)", es: "Motor (con cable)" },
        { emoji: "🟢", count: 1, en: "Small green brick 1×2", es: "Ladrillo verde pequeño 1×2" }
      ],
      attach: [{ x: 60, y: 45, en: "Motor snaps onto the green beam", es: "El motor encaja en la viga verde", detail: { en: "Press the motor onto the back of the green beam so it sits firmly. Press the small green brick beside it in the remaining gap.", es: "Presiona el motor en la parte trasera de la viga verde para que quede firmemente. Presiona el ladrillo verde pequeño junto a él en el espacio restante." } }],
      help: { en: "Take the gray motor with its cable. Press it onto the back portion of the green beam so it clicks in. The cable hangs off to one side. Then press the small green brick into the remaining gap beside the motor on the beam.", es: "Toma el motor gris con su cable. Presiónalo en la parte trasera de la viga verde para que encaje. El cable cuelga a un lado. Luego presiona el ladrillo verde pequeño en el espacio restante junto al motor en la viga." }
    },
    {
      icon: "Circle",
      pdfPage: 7,
      caption: { en: "Slide a gray gear onto a size-4 axle rod, this gear transfers the motor spin!", es: "Desliza un engranaje gris en una varilla tamaño 4, ¡este engranaje transfiere el giro del motor!" },
      parts: [
        { emoji: "⚙️", count: 1, en: "Small gray gear", es: "Engranaje gris pequeño" },
        { emoji: "⬜", count: 1, en: "Gray axle rod, size 4", es: "Varilla eje gris, tamaño 4" }
      ],
      attach: [{ x: 50, y: 55, en: "Gear onto the axle, then insert into side holes", es: "Engranaje en el eje, luego insertar en los agujeros laterales", detail: { en: "First slide the small gear onto the size-4 axle. Then push the axle through the side holes in the green beam so the gear meshes with the motor's gear.", es: "Primero desliza el engranaje pequeño en el eje tamaño 4. Luego empuja el eje por los agujeros laterales de la viga verde para que el engranaje se engrane con el del motor." } }],
      help: { en: "Slide the small gray gear onto the short size-4 axle. Then push that axle through both side holes in the green beam. The gear's teeth should line up with the motor's output gear so they mesh. When the motor spins, this gear will spin too!", es: "Desliza el engranaje gris pequeño en el eje corto tamaño 4. Luego empuja ese eje por ambos agujeros laterales de la viga verde. Los dientes del engranaje deben alinearse con el engranaje de salida del motor para que se engranen. ¡Cuando el motor gire, este engranaje también girará!" }
    },
    {
      icon: "Box",
      pdfPage: 8,
      caption: { en: "Press a black 2×2 brick and a green beam on top, building the frame higher!", es: "Presiona un ladrillo negro 2×2 y una viga verde encima, ¡levantando el armazón más alto!" },
      parts: [
        { emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" },
        { emoji: "🟢", count: 1, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }
      ],
      attach: [{ x: 50, y: 40, en: "On top of the motor assembly", es: "Encima del ensamblaje del motor", detail: { en: "Press the black 2×2 brick on top near the motor, then the green beam beside it on top of the stack.", es: "Presiona el ladrillo negro 2×2 encima cerca del motor, luego la viga verde junto a él encima de la pila." } }],
      help: { en: "Press the black 2×2 brick on top of the motor assembly and then the green beam with holes on top. This raises the frame and creates more structure for the chain mechanism above.", es: "Presiona el ladrillo negro 2×2 encima del ensamblaje del motor y luego la viga verde con agujeros encima. Esto eleva el armazón y crea más estructura para el mecanismo de cadena arriba." }
    },
    {
      icon: "Minus",
      pdfPage: 9,
      caption: { en: "Slide a size-6 axle through the top holes, add a large tan gear and a blue connector, the chain reel axle!", es: "Desliza un eje tamaño 6 por los agujeros de arriba, agrega un engranaje canela grande y un conector azul, ¡el eje del carrete de cadena!" },
      parts: [
        { emoji: "⬜", count: 1, en: "Gray axle rod, size 6", es: "Varilla eje gris, tamaño 6" },
        { emoji: "🟤", count: 1, en: "Large tan gear (worm gear)", es: "Engranaje canela grande (sin fin)" },
        { emoji: "🔵", count: 1, en: "Blue axle connector", es: "Conector de eje azul" }
      ],
      attach: [{ x: 40, y: 45, en: "Through the top holes of the frame", es: "Por los agujeros superiores del armazón", detail: { en: "First snap the blue connector onto one end of the size-6 axle, slide the tan gear on, then push the axle through the holes of the frame. The gear meshes with the small gear below.", es: "Primero encaja el conector azul en un extremo del eje tamaño 6, desliza el engranaje canela, luego empuja el eje por los agujeros del armazón. El engranaje se engrana con el pequeño engranaje debajo." } }],
      help: { en: "Push the blue connector onto one end of the size-6 axle. Slide the large tan gear (with many teeth around the edge) onto the axle. Then push the whole axle through the holes in the top of the frame. The big tan gear should mesh with the small gray gear below. This is the chain reel axle!", es: "Empuja el conector azul en un extremo del eje tamaño 6. Desliza el engranaje canela grande (con muchos dientes alrededor del borde) en el eje. Luego empuja todo el eje por los agujeros en la parte superior del armazón. ¡El engranaje canela grande debe engranarse con el pequeño gris de abajo. Este es el eje del carrete de cadena!" }
    },
    {
      icon: "Circle",
      pdfPage: 10,
      caption: { en: "Add a gray bushing and a yellow bushing to lock the axle in place!", es: "Agrega un buje gris y un buje amarillo para fijar el eje en su lugar." },
      parts: [
        { emoji: "⬜", count: 1, en: "Gray bushing / cap", es: "Buje gris / tapa" },
        { emoji: "🟡", count: 1, en: "Yellow bushing / cap", es: "Buje amarillo / tapa" }
      ],
      attach: [
        { x: 30, y: 55, en: "Onto the axle on one side", es: "En el eje en un lado", detail: { en: "Push the gray bushing onto the axle on one side and the yellow bushing on the other side to stop the axle from sliding out.", es: "Empuja el buje gris en el eje en un lado y el buje amarillo en el otro para evitar que el eje se salga." } }
      ],
      help: { en: "Find the gray and yellow small ring caps (bushings). Push the gray one onto the axle on one side and the yellow one on the other side, right against the frame. They stop the axle from sliding out, like putting stoppers on each end of a rolling pin.", es: "Busca las tapas de anillo grises y amarillas pequeñas (bujes). Empuja la gris en el eje en un lado y la amarilla en el otro lado, justo contra el armazón. Evitan que el eje se salga, como poner topes en cada extremo de un rodillo." }
    },
    {
      icon: "Minus",
      pdfPage: 11,
      caption: { en: "Add another green beam on top to strengthen the frame.", es: "Agrega otra viga verde encima para fortalecer el armazón." },
      parts: [{ emoji: "🟢", count: 1, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }],
      attach: [{ x: 50, y: 35, en: "On top of the assembly", es: "Encima del ensamblaje", detail: { en: "Press the green beam on top of the existing stack to add another layer of structure.", es: "Presiona la viga verde encima de la pila existente para agregar otra capa de estructura." } }],
      help: { en: "Press the green beam with holes on top of the existing assembly. This locks the axle in place and strengthens the frame so nothing wobbles when the motor runs.", es: "Presiona la viga verde con agujeros encima del ensamblaje existente. Esto fija el eje en su lugar y fortalece el armazón para que nada se mueva cuando el motor funcione." }
    },
    {
      icon: "Box",
      pdfPage: 12,
      caption: { en: "Add a black 2×2 brick and a blue clip connector, building the chain attachment point!", es: "Agrega un ladrillo negro 2×2 y un conector de clip azul, ¡construyendo el punto de unión de la cadena!" },
      parts: [
        { emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" },
        { emoji: "🔵", count: 1, en: "Blue clip connector", es: "Conector de clip azul" }
      ],
      attach: [{ x: 50, y: 45, en: "On the side of the frame", es: "En el costado del armazón", detail: { en: "Press the black brick and the blue clip connector onto the side of the frame near the gear axle.", es: "Presiona el ladrillo negro y el conector de clip azul en el costado del armazón cerca del eje del engranaje." } }],
      help: { en: "Press the black 2×2 brick onto the frame, then attach the blue clip connector. This clip will hold one end of the chain that pulls the cart.", es: "Presiona el ladrillo negro 2×2 en el armazón, luego conecta el clip azul. Este clip sostendrá un extremo de la cadena que jala el carrito." }
    },
    {
      icon: "Minus",
      pdfPage: 13,
      caption: { en: "Push 2 short size-3 axles into the blue clip connectors, one on each clip!", es: "Empuja 2 varillas cortas tamaño 3 en los conectores de clip azules, ¡una en cada clip!" },
      parts: [{ emoji: "⬜", count: 2, en: "Gray axle rod, size 3", es: "Varilla eje gris, tamaño 3" }],
      attach: [
        { x: 30, y: 45, en: "Into the top blue clip", es: "En el clip azul de arriba", detail: { en: "Push one short axle into the top blue clip connector.", es: "Empuja una varilla corta en el conector de clip azul de arriba." } },
        { x: 30, y: 65, en: "Into the bottom blue clip", es: "En el clip azul de abajo", detail: { en: "Push the second short axle into the bottom blue clip connector.", es: "Empuja la segunda varilla corta en el conector de clip azul de abajo." } }
      ],
      help: { en: "Push one short size-3 axle into each of the blue clip connectors on the side of the frame (one into the top clip, one into the bottom). These axles are the pegs the chains will hook onto.", es: "Empuja una varilla corta tamaño 3 en cada uno de los conectores de clip azules en el costado del armazón (uno en el clip de arriba, uno en el de abajo). Estos ejes son los clavos donde se engancharán las cadenas." }
    },
    {
      icon: "Cpu",
      pdfPage: 14,
      caption: { en: "Add the Smart Hub, the brain! Connect the motor cable to it.", es: "Agrega el Smart Hub, ¡el cerebro! Conecta el cable del motor." },
      parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white brick)", es: "Smart Hub (bloque blanco grande)" }],
      attach: [{ x: 60, y: 40, en: "On top of the frame, green button up", es: "Encima del armazón, botón verde arriba", detail: { en: "Press the Smart Hub on top of the motor-gear assembly. Then plug the motor cable into one of its ports.", es: "Presiona el Smart Hub encima del ensamblaje del motor y engranaje. Luego conecta el cable del motor en uno de sus puertos." } }],
      help: { en: "Press the large white Smart Hub on top of the motor assembly. The green button faces up. Then take the motor's cable and plug it into any port on the side of the Smart Hub. It clicks in one way only!", es: "Presiona el Smart Hub blanco grande encima del ensamblaje del motor. El botón verde queda hacia arriba. Luego toma el cable del motor y conéctalo en cualquier puerto del Smart Hub. ¡Solo entra de una manera!" }
    },
    {
      icon: "Box",
      pdfPage: 15,
      caption: { en: "Add 4 lime-green slope pieces, shaping the sides of the motor unit!", es: "Agrega 4 piezas inclinadas verde lima, ¡dando forma a los lados de la unidad del motor!" },
      parts: [{ emoji: "🟢", count: 4, en: "Lime-green slope brick 1×2", es: "Ladrillo verde lima inclinado 1×2" }],
      attach: [{ x: 50, y: 50, en: "Around the sides of the motor unit", es: "Alrededor de los lados de la unidad del motor", detail: { en: "Press the 4 lime slope bricks around the sides of the motor-hub unit to give it a clean, finished shape.", es: "Presiona los 4 ladrillos inclinados verde lima alrededor de los lados de la unidad motor-hub para darle una forma limpia y terminada." } }],
      help: { en: "Press the 4 lime-green slope bricks (each 1 bump wide, 2 long, slanted on top) around the sides of the motor and Smart Hub unit. They smooth out the shape and make the motor unit look neat!", es: "Presiona los 4 ladrillos inclinados verde lima (cada uno 1 botón de ancho, 2 de largo, inclinado en la parte de arriba) alrededor de los lados de la unidad del motor y Smart Hub. ¡Suavizan la forma y hacen que la unidad del motor se vea ordenada!" }
    },
    {
      icon: "Cpu",
      pdfPage: 16,
      caption: { en: "Place the Smart Hub flat on top, no new pieces, just position it properly!", es: "Coloca el Smart Hub plano encima, ¡sin piezas nuevas, solo colócalo correctamente!" },
      parts: [],
      attach: [{ x: 50, y: 35, en: "Flat on top of the motor unit", es: "Plano encima de la unidad del motor", detail: { en: "Reposition the Smart Hub so it lies flat on top of the motor unit with the green button facing up and the cable port facing outward.", es: "Reposiciona el Smart Hub para que quede plano encima de la unidad del motor con el botón verde hacia arriba y el puerto del cable hacia afuera." } }],
      help: { en: "No new pieces, just make sure the Smart Hub is flat on top of the motor unit with the green button facing up. The cable should run neatly off to one side.", es: "Sin piezas nuevas, solo asegúrate de que el Smart Hub esté plano encima de la unidad del motor con el botón verde hacia arriba. El cable debe correr ordenadamente hacia un lado." }
    },
    {
      icon: "Box",
      pdfPage: 17,
      caption: { en: "Add 2 turquoise bricks, 2×2 each, on the sides of the Hub to hold the chain arms!", es: "Agrega 2 ladrillos turquesa, 2×2 cada uno, en los lados del Hub para sostener los brazos de cadena." },
      parts: [{ emoji: "🔵", count: 2, en: "Turquoise brick 2×2", es: "Ladrillo turquesa 2×2" }],
      attach: [
        { x: 25, y: 50, en: "Left side of the Hub", es: "Lado izquierdo del Hub", detail: { en: "Press one turquoise 2×2 brick on the left side of the Smart Hub.", es: "Presiona un ladrillo turquesa 2×2 en el lado izquierdo del Smart Hub." } },
        { x: 75, y: 50, en: "Right side of the Hub", es: "Lado derecho del Hub", detail: { en: "Press the second turquoise 2×2 brick on the right side.", es: "Presiona el segundo ladrillo turquesa 2×2 en el lado derecho." } }
      ],
      help: { en: "Press the 2 turquoise (blue-green) bricks on either side of the Smart Hub. They add width to the motor unit and give the chain arms somewhere to attach.", es: "Presiona los 2 ladrillos turquesa (azul-verde) en ambos lados del Smart Hub. Añaden anchura a la unidad del motor y dan un lugar donde conectar los brazos de cadena." }
    },
    {
      icon: "Circle",
      pdfPage: 18,
      caption: { en: "Add 2 lime-green curved pieces on top of the Hub, making a smooth rounded roof!", es: "Agrega 2 piezas verde lima curvas encima del Hub, ¡haciendo un techo redondeado suave!" },
      parts: [{ emoji: "🟢", count: 2, en: "Lime-green curved slope 1×4", es: "Pieza curva verde lima 1×4" }],
      attach: [{ x: 50, y: 30, en: "On top of the Smart Hub", es: "Encima del Smart Hub", detail: { en: "Press both lime curved pieces side by side on top of the Smart Hub to make a smooth rounded roof.", es: "Presiona las dos piezas curvas verde lima una al lado de la otra encima del Smart Hub para hacer un techo redondeado suave." } }],
      help: { en: "Press the 2 lime-green curved pieces side by side on top of the Smart Hub. They curve over like a little dome roof and give the motor unit a nice finished look.", es: "Presiona las 2 piezas curvas verde lima una al lado de la otra encima del Smart Hub. Se curvan como un techito en forma de cúpula y dan a la unidad del motor un aspecto bonito y terminado." }
    },
    {
      icon: "Circle",
      pdfPage: 19,
      caption: { en: "Add 2 round black eye pieces and 1 small curved blue tile, the robot is getting a face!", es: "Agrega 2 piezas de ojos negras redondas y 1 azulejo curvo azul pequeño, ¡el robot está consiguiendo una cara!" },
      parts: [
        { emoji: "⬛", count: 2, en: "Black round eye piece 2×2", es: "Pieza de ojo negra redonda 2×2" },
        { emoji: "🔵", count: 1, en: "Small curved blue tile", es: "Azulejo curvo azul pequeño" }
      ],
      attach: [{ x: 50, y: 35, en: "Front of the motor unit", es: "Frente de la unidad del motor", detail: { en: "Press the 2 round black eye pieces on the front of the Smart Hub and the small blue tile between them.", es: "Presiona las 2 piezas de ojos negras redondas en el frente del Smart Hub y el azulejo azul pequeño entre ellas." } }],
      help: { en: "Press the 2 round black eye pieces (they look like big googly eyes!) on the front of the Smart Hub. Add the small curved blue tile between them for a nose. The robot motor unit now has a face!", es: "Presiona las 2 piezas de ojos negras redondas (¡parecen grandes ojos saltones!) en el frente del Smart Hub. Agrega el azulejo curvo azul pequeño entre ellas como nariz. ¡La unidad del motor robot ahora tiene cara!" }
    },
    {
      icon: "Box",
      pdfPage: 20,
      caption: { en: "Add 2 green L-shaped bracket pieces, the arms that guide the chains!", es: "Agrega 2 piezas soporte verdes en forma de L, ¡los brazos que guían las cadenas!" },
      parts: [{ emoji: "🟢", count: 2, en: "Green L-shaped bracket piece", es: "Pieza soporte verde en forma de L" }],
      attach: [
        { x: 30, y: 55, en: "Left side of the motor unit", es: "Lado izquierdo de la unidad del motor", detail: { en: "Snap one green L-bracket onto the left side where the turquoise brick is.", es: "Encaja un soporte verde L en el lado izquierdo donde está el ladrillo turquesa." } },
        { x: 70, y: 55, en: "Right side of the motor unit", es: "Lado derecho de la unidad del motor", detail: { en: "Snap the second green L-bracket onto the right side.", es: "Encaja el segundo soporte verde L en el lado derecho." } }
      ],
      help: { en: "Find the 2 green L-shaped bracket pieces (they look like little bent arms). Snap one onto each side of the motor unit, they point forward and downward. These arms will guide the chains down to the cart below.", es: "Busca las 2 piezas soporte verdes en forma de L (parecen bracitos doblados). Encaja una en cada lado de la unidad del motor, apuntan hacia adelante y hacia abajo. Estos brazos guiarán las cadenas hacia el carrito abajo." }
    },
    {
      icon: "Circle",
      pdfPage: 21,
      caption: { en: "Build 2 turquoise wheel-and-hub units, they roll the motor unit forward!", es: "Arma 2 unidades de rueda y cubo turquesa, ¡hacen rodar la unidad del motor hacia adelante!" },
      parts: [
        { emoji: "⬜", count: 2, en: "Small gray cap / center stud", es: "Tapita gris pequeña / botón central" },
        { emoji: "🔵", count: 2, en: "Turquoise round plate 4×4", es: "Placa redonda turquesa 4×4" },
        { emoji: "🟢", count: 2, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" }
      ],
      attach: [
        { x: 25, y: 55, en: "Left side, wheel hub unit", es: "Lado izquierdo, unidad de cubo de rueda", detail: { en: "Build one wheel: press the gray cap into the center of a turquoise round plate, then snap a green round plate on top. Attach to the left axle stub.", es: "Arma una rueda: presiona la tapita gris en el centro de la placa redonda turquesa, luego encaja la placa redonda verde encima. Conecta al eje izquierdo." } },
        { x: 75, y: 55, en: "Right side, wheel hub unit", es: "Lado derecho, unidad de cubo de rueda", detail: { en: "Build the second wheel the same way and attach to the right axle stub.", es: "Arma la segunda rueda de la misma manera y conéctala al eje derecho." } }
      ],
      help: { en: "Make 2 wheel units: for each one, press a gray cap into the center of a turquoise round plate (4×4), then snap a green round plate (2×2) on top as a hubcap. Attach one to each side of the motor unit's axle stubs. These are the wheels that let the motor unit roll!", es: "Haz 2 unidades de rueda: para cada una, presiona una tapita gris en el centro de una placa redonda turquesa (4×4), luego encaja una placa redonda verde (2×2) encima como tapacubo. Conecta una a cada eje de la unidad del motor. ¡Estas son las ruedas que permiten que la unidad del motor ruede!" }
    },
    {
      icon: "LayoutGrid",
      pdfPage: 25,
      caption: { en: "Start the cart: press an orange 2×4 brick onto a long green plate, the cart base!", es: "Empieza el carrito: presiona un ladrillo naranja 2×4 sobre una placa verde larga, ¡la base del carrito!" },
      parts: [
        { emoji: "🟠", count: 1, en: "Orange brick 2×4", es: "Ladrillo naranja 2×4" },
        { emoji: "🟢", count: 1, en: "Green plate 2×10", es: "Placa verde 2×10" }
      ],
      attach: [{ x: 60, y: 50, en: "Orange brick on one end of the green plate", es: "Ladrillo naranja en un extremo de la placa verde", detail: { en: "Press the orange brick near one end of the long green plate, leaving the other end open for the chain connection.", es: "Presiona el ladrillo naranja cerca de un extremo de la placa verde larga, dejando el otro extremo abierto para la conexión de la cadena." } }],
      help: { en: "Start building the cart separately! Take the long green plate (2×10 studs) and press the orange 2×4 brick near one end of it. The other end stays open, the chains will connect there later.", es: "¡Empieza a armar el carrito por separado! Toma la placa verde larga (2×10 botones) y presiona el ladrillo naranja 2×4 cerca de un extremo. El otro extremo queda abierto, las cadenas se conectarán allí más tarde." }
    },
    {
      icon: "Minus",
      pdfPage: 26,
      caption: { en: "Add 2 small green beams with holes at the cart's open end, the chain attachment spots!", es: "Agrega 2 vigas verdes pequeñas con agujeros en el extremo abierto del carrito, ¡los puntos de unión de la cadena!" },
      parts: [{ emoji: "🟢", count: 2, en: "Small green brick with hole 1×1", es: "Ladrillo verde pequeño con agujero 1×1" }],
      attach: [
        { x: 25, y: 50, en: "Left side of the open end", es: "Lado izquierdo del extremo abierto", detail: { en: "Press one small green brick at the left corner of the open end.", es: "Presiona un ladrillo verde pequeño en la esquina izquierda del extremo abierto." } },
        { x: 75, y: 50, en: "Right side of the open end", es: "Lado derecho del extremo abierto", detail: { en: "Press the second small green brick at the right corner.", es: "Presiona el segundo ladrillo verde pequeño en la esquina derecha." } }
      ],
      help: { en: "Press the 2 small green bricks with side holes at the open end of the cart, one on each side. The chain ends will hook into these holes, so the motor can pull the cart!", es: "Presiona los 2 ladrillos verdes pequeños con agujeros laterales en el extremo abierto del carrito, uno a cada lado. Los extremos de la cadena se engancharán en estos agujeros, ¡para que el motor pueda jalar el carrito!" }
    },
    {
      icon: "Minus",
      pdfPage: 27,
      caption: { en: "Add 2 long green beams to the sides, making the cart frame longer and stronger!", es: "Agrega 2 vigas verdes largas a los lados, ¡haciendo el armazón del carrito más largo y fuerte!" },
      parts: [{ emoji: "🟢", count: 2, en: "Long green beam with holes 1×16", es: "Viga verde larga con agujeros 1×16" }],
      attach: [
        { x: 50, y: 30, en: "Along the top side of the cart", es: "A lo largo del lado superior del carrito", detail: { en: "Press one long green beam along the top edge of the cart running the full length.", es: "Presiona una viga verde larga a lo largo del borde superior del carrito por toda su longitud." } },
        { x: 50, y: 70, en: "Along the bottom side of the cart", es: "A lo largo del lado inferior del carrito", detail: { en: "Press the second long beam along the bottom edge.", es: "Presiona la segunda viga larga a lo largo del borde inferior." } }
      ],
      help: { en: "Take the 2 very long green beams (1×16, the longest beams!). Press one along each side of the cart base running the full length. They make the cart frame long, strong, and straight like two parallel rails.", es: "Toma las 2 vigas verdes muy largas (1×16, ¡las vigas más largas!). Presiona una a lo largo de cada lado de la base del carrito por toda la longitud. Hacen el armazón del carrito largo, fuerte y recto como dos rieles paralelos." }
    },
    {
      icon: "LayoutGrid",
      pdfPage: 28,
      caption: { en: "Close the far end of the cart with a green plate, completing the rectangular frame!", es: "Cierra el extremo lejano del carrito con una placa verde, ¡completando el armazón rectangular!" },
      parts: [{ emoji: "🟢", count: 1, en: "Green plate 2×8", es: "Placa verde 2×8" }],
      attach: [{ x: 20, y: 50, en: "Far open end of the cart", es: "Extremo abierto lejano del carrito", detail: { en: "Press the green plate across the far end to close the rectangle.", es: "Presiona la placa verde en el extremo lejano para cerrar el rectángulo." } }],
      help: { en: "Press the green plate across the far open end of the cart, the end away from the orange brick. This closes the rectangle and makes the cart frame complete!", es: "Presiona la placa verde en el extremo abierto lejano del carrito, el extremo lejos del ladrillo naranja. ¡Esto cierra el rectángulo y completa el armazón del carrito!" }
    },
    {
      icon: "Minus",
      pdfPage: 29,
      caption: { en: "Add a small green beam with holes at the far end, a connector for the wheels!", es: "Agrega una viga verde pequeña con agujeros en el extremo lejano, ¡un conector para las ruedas!" },
      parts: [{ emoji: "🟢", count: 1, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }],
      attach: [{ x: 20, y: 50, en: "At the far end of the cart", es: "En el extremo lejano del carrito", detail: { en: "Press the green beam at the far end of the cart so its holes face sideways, the wheels will go through those holes.", es: "Presiona la viga verde en el extremo lejano del carrito para que sus agujeros miren de lado, las ruedas pasarán por esos agujeros." } }],
      help: { en: "Press the small green beam with side holes at the far end of the cart frame. Make sure the holes face outward to the sides, axles for the wheels will go through them.", es: "Presiona la viga verde pequeña con agujeros laterales en el extremo lejano del armazón del carrito. Asegúrate de que los agujeros miren hacia los lados, los ejes para las ruedas pasarán por ellos." }
    },
    {
      icon: "RectangleHorizontal",
      pdfPage: 30,
      caption: { en: "Add 2 white plates and 1 long gray flat bar along the cart sides, making the cart look sleek!", es: "Agrega 2 placas blancas y 1 barra gris plana larga a los lados del carrito, ¡haciendo que el carrito se vea elegante!" },
      parts: [
        { emoji: "⬜", count: 2, en: "White plate 1×6", es: "Placa blanca 1×6" },
        { emoji: "⬜", count: 1, en: "Long gray flat bar ~1×8", es: "Barra gris plana larga ~1×8" }
      ],
      attach: [{ x: 50, y: 50, en: "Along the side rails of the cart", es: "A lo largo de los rieles del carrito", detail: { en: "Press the white plates along the inner sides of the cart rails and the gray bar across one end.", es: "Presiona las placas blancas a lo largo de los lados interiores de los rieles del carrito y la barra gris a través de un extremo." } }],
      help: { en: "Press the 2 white plates (1×6 each) along the inside of the cart rails, and lay the long gray flat bar across one end. They smooth out the cart surface and make it look finished!", es: "Presiona las 2 placas blancas (1×6 cada una) a lo largo del interior de los rieles del carrito, y coloca la barra gris plana larga a través de un extremo. ¡Suavizan la superficie del carrito y lo hacen ver terminado!" }
    },
    {
      icon: "Circle",
      pdfPage: 31,
      caption: { en: "Add 4 small round black plates, the cart's wheel hubs!", es: "Agrega 4 placas redondas negras pequeñas, ¡los cubos de las ruedas del carrito!" },
      parts: [{ emoji: "⬛", count: 4, en: "Small black round plate 2×2", es: "Placa redonda negra pequeña 2×2" }],
      attach: [
        { x: 20, y: 30, en: "Front-left corner", es: "Esquina delantera izquierda", detail: { en: "Press one black round plate at the front-left corner of the cart.", es: "Presiona una placa redonda negra en la esquina delantera izquierda del carrito." } },
        { x: 80, y: 30, en: "Front-right corner", es: "Esquina delantera derecha", detail: { en: "Press one at the front-right corner.", es: "Presiona una en la esquina delantera derecha." } },
        { x: 20, y: 70, en: "Back-left corner", es: "Esquina trasera izquierda", detail: { en: "Press one at the back-left corner.", es: "Presiona una en la esquina trasera izquierda." } },
        { x: 80, y: 70, en: "Back-right corner", es: "Esquina trasera derecha", detail: { en: "Press one at the back-right corner.", es: "Presiona una en la esquina trasera derecha." } }
      ],
      help: { en: "Press the 4 small black round plates (2×2 round) at all four corners of the cart. They become the wheel mounting hubs, the wheels will attach at these spots.", es: "Presiona las 4 placas redondas negras pequeñas (2×2 redondas) en las cuatro esquinas del carrito. Se convierten en los cubos de montaje de las ruedas, las ruedas se unirán en estos puntos." }
    },
    {
      icon: "Zap",
      pdfPage: 32,
      caption: { en: "Hook 2 chains onto the cart's front connectors, the chains that the motor will reel in!", es: "Engancha 2 cadenas en los conectores del frente del carrito, ¡las cadenas que el motor enrollará!" },
      parts: [{ emoji: "⛓️", count: 2, en: "Chain", es: "Cadena" }],
      attach: [
        { x: 25, y: 50, en: "Left chain hook on the cart", es: "Gancho de cadena izquierdo del carrito", detail: { en: "Hook one end of the first chain to the left green brick at the front of the cart.", es: "Engancha un extremo de la primera cadena en el ladrillo verde izquierdo al frente del carrito." } },
        { x: 75, y: 50, en: "Right chain hook on the cart", es: "Gancho de cadena derecho del carrito", detail: { en: "Hook one end of the second chain to the right green brick at the front of the cart.", es: "Engancha un extremo de la segunda cadena en el ladrillo verde derecho al frente del carrito." } }
      ],
      help: { en: "Hook one end of each chain onto the two green bricks at the front of the cart (the ones with side holes). The other ends of the chains will connect to the motor unit in the next step. When the motor runs, it reels in the chains and pulls the cart toward it!", es: "Engancha un extremo de cada cadena en los dos ladrillos verdes al frente del carrito (los que tienen agujeros laterales). Los otros extremos de las cadenas se conectarán a la unidad del motor en el próximo paso. ¡Cuando el motor funcione, enrollará las cadenas y jalará el carrito hacia él!" }
    },
    {
      icon: "Sparkles",
      pdfPage: 33,
      caption: { en: "Connect the chain ends to the motor unit, press the green button and watch the cart roll in! 🎉", es: "Conecta los extremos de la cadena a la unidad del motor, ¡presiona el botón verde y mira el carrito rodar hacia adentro! 🎉" },
      parts: [],
      attach: [{ x: 50, y: 45, en: "Chain ends into the motor unit hooks", es: "Extremos de la cadena en los ganchos de la unidad del motor", detail: { en: "Hook the free ends of the 2 chains into the axle pegs on the motor unit. Place the cart on the floor in front. Press the green button and watch the motor reel in the chains, pulling the cart!", es: "Engancha los extremos libres de las 2 cadenas en los clavos del eje de la unidad del motor. Coloca el carrito en el piso al frente. ¡Presiona el botón verde y mira el motor enrollar las cadenas, jalando el carrito!" } }],
      help: { en: "Hook the free ends of both chains into the pegs on the motor unit arms. Set the cart on the floor in front of the motor unit with the chains lying between them. Press the green button on the Smart Hub, the motor will spin, reel in the chains, and the cart will roll toward the motor! Amazing STEM engineering!", es: "Engancha los extremos libres de ambas cadenas en los clavos de los brazos de la unidad del motor. Coloca el carrito en el piso frente a la unidad del motor con las cadenas entre ellos. ¡Presiona el botón verde en el Smart Hub, el motor girará, enrollará las cadenas y el carrito rodará hacia el motor! ¡Increíble ingeniería STEM!" }
    }
  ]
};