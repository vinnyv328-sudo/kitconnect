// Kit content, LEGO Education WeDo 2.0 Set 45300
const availableKitModules = Object.values(
  import.meta.glob('@/lib/kitData/*.js', { eager: true })
).flatMap((module) =>
  Object.values(module).filter(
    (candidate) =>
      candidate &&
      typeof candidate === 'object' &&
      'id' in candidate &&
      Array.isArray(candidate.steps)
  )
);

export const kits = [
  {
    id: "frog",
    name: "LEGO Education WeDo 2.0 · Set 45300",
    model: { en: "Young Frog", es: "La Rana Saltarina" },
    color: "#4CAF50",
    pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/84a6796fa_FROG.pdf",
    category: "wedo",
    steps: [
      {
        icon: "LayoutGrid",
        pdfPage: 3,
        caption: { en: "Lay the orange plate flat. Put 2 slope bricks on top, the frog's base!", es: "Pon la placa naranja plana. Coloca 2 ladrillos inclinados encima, ¡la base de la rana!" },
        parts: [
          { emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" },
          { emoji: "🟠", count: 2, en: "Orange slope brick 1×2", es: "Ladrillo naranja inclinado 1×2" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the long orange plate flat on the table with studs up. Press one orange slope brick near each end, they make the front and back of the frog's body.", es: "Pon la placa naranja larga plana en la mesa con los botones hacia arriba. Presiona un ladrillo inclinado naranja cerca de cada extremo." } }],
        help: { en: "Find the long orange plate, it has 2 rows of 6 bumps. Lay it flat on the table with all the bumps pointing up. Now find 2 small orange slope bricks that are slanted on one side. Press one near each end of the orange plate. This is the very beginning of the frog's body!", es: "Busca la placa naranja larga, tiene 2 filas de 6 botones. Ponla plana con los botones hacia arriba. Ahora busca 2 ladrillos naranjas inclinados. Presiona uno cerca de cada extremo de la placa. ¡Este es el comienzo del cuerpo de la rana!" }
      },
      {
        icon: "Minus",
        pdfPage: 4,
        caption: { en: "Add 2 long green beams along the sides, the holes are for rods later!", es: "Agrega 2 vigas verdes largas a los lados, ¡los agujeros son para varillas!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green beam with holes 1×8", es: "Viga verde con agujeros 1×8" }],
        attach: [
          { x: 20, y: 45, en: "Left side, long way", es: "Lado izquierdo, a lo largo", detail: { en: "Press one green beam along the left side of the orange plate, running the full length.", es: "Presiona una viga verde a lo largo del lado izquierdo de la placa naranja." } },
          { x: 80, y: 45, en: "Right side, long way", es: "Lado derecho, a lo largo", detail: { en: "Press the second green beam along the right side, mirroring the first.", es: "Presiona la segunda viga verde a lo largo del lado derecho, igual que la primera." } }
        ],
        help: { en: "Find the 2 long lime-green pieces with round holes along them, they are 8 bumps long. Press one along the left edge of the orange plate and one along the right edge, running the full length. The round holes face sideways and will hold axles later.", es: "Busca las 2 piezas verde lima largas con agujeros redondos, miden 8 botones de largo. Presiona una a lo largo del borde izquierdo y otra a lo largo del borde derecho. Los agujeros redondos mirarán hacia el costado y sostendrán ejes más adelante." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Snap the second orange plate across the open end, now it's a closed frame!", es: "Encaja la segunda placa naranja en el extremo abierto, ¡ahora es un marco cerrado!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{ x: 50, y: 75, en: "Open end of the frame", es: "Extremo abierto del marco", detail: { en: "Press the second orange plate across the open end so the frame becomes a closed rectangle.", es: "Presiona la segunda placa naranja en el extremo abierto para que el marco quede cerrado como un rectángulo." } }],
        help: { en: "Take the second long orange plate (same as the one in Step 1). Press it flat across the open end of the frame, the end that does not have a plate yet. Now the shape looks like a picture frame, closed on all four sides!", es: "Toma la segunda placa naranja larga (igual a la del Paso 1). Presiónala en el extremo abierto del marco. ¡Ahora la forma parece el marco de un cuadro, cerrado por los cuatro lados!" }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Stack 2 short green bricks in the middle of one side, they build up the wall!", es: "Apila 2 ladrillos verdes cortos en el centro de un lado, ¡levantan la pared!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 35, y: 50, en: "Middle of the left side", es: "Centro del lado izquierdo", detail: { en: "Press both green bricks stacked on top of each other, nearer the middle of the side, not at the corner.", es: "Presiona ambos ladrillos verdes apilados uno encima del otro, más cerca del centro del lado, no en la esquina." } }],
        help: { en: "Take 2 short green bricks with holes, each is 4 bumps long. Press one on top of the other to stack them, then press the stack onto one side of the orange frame. Put them closer to the center of the side, not in the corner. They make a little green wall.", es: "Toma 2 ladrillos verdes cortos con agujeros, cada uno mide 4 botones de largo. Presiona uno encima del otro para apilarlos, luego presiona el conjunto sobre un lado del marco naranja. Ponlos más cerca del centro del lado, no en la esquina. Forman una pequeña pared verde." }
      },
      {
        icon: "Cpu",
        pdfPage: 7,
        caption: { en: "Press the Smart Hub onto the green beams, this is the frog's brain!", es: "Presiona el Smart Hub sobre las vigas verdes, ¡este es el cerebro de la rana!" },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white brick)", es: "Smart Hub (bloque blanco grande)" }],
        attach: [{ x: 60, y: 40, en: "On top of the green beams", es: "Encima de las vigas verdes", detail: { en: "Lower the Smart Hub down onto the green beams so it sits in the right side of the frame. The green button faces up.", es: "Baja el Smart Hub sobre las vigas verdes para que quede en el lado derecho del marco. El botón verde queda hacia arriba." } }],
        help: { en: "Find the big white-and-gray brick, it has a green button on top. This is the Smart Hub, the frog's brain! Press it firmly down onto the right side of the green beams, inside the frame. The green button should face up so you can press it later.", es: "Busca el ladrillo blanco y gris grande, tiene un botón verde encima. ¡Este es el Smart Hub, el cerebro de la rana! Presiónalo firmemente sobre el lado derecho de las vigas verdes, dentro del marco. El botón verde debe quedar hacia arriba." }
      },
      {
        icon: "Box",
        pdfPage: 8,
        caption: { en: "Add 2 blue bricks along the side of the Smart Hub.", es: "Agrega 2 ladrillos azules al costado del Smart Hub." },
        parts: [{ emoji: "🔵", count: 2, en: "Blue brick 1×2", es: "Ladrillo azul 1×2" }],
        attach: [{ x: 40, y: 55, en: "Side of the Smart Hub", es: "Costado del Smart Hub", detail: { en: "Press both blue bricks side by side along the side of the Smart Hub, filling the gap.", es: "Presiona ambos ladrillos azules uno al lado del otro a lo largo del costado del Smart Hub." } }],
        help: { en: "Find the 2 small blue bricks, each is 1 bump wide and 2 bumps long. Press them side by side along the left side of the Smart Hub. They fill in the gap between the Hub and the green wall and add a pop of blue color!", es: "Busca los 2 ladrillos azules pequeños, cada uno mide 1 botón de ancho y 2 de largo. Presiónados uno al lado del otro a lo largo del costado izquierdo del Smart Hub. ¡Llenan el espacio entre el Hub y la pared verde!" }
      },
      {
        icon: "Circle",
        pdfPage: 9,
        caption: { en: "Put 2 curved green pieces on the sides of the Hub, the frog gets a shape!", es: "Pon 2 piezas verdes curvas a los lados del Hub, ¡la rana toma forma!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green curved slope 1×4", es: "Pieza verde curva 1×4" }],
        attach: [
          { x: 35, y: 35, en: "Left side of the Hub", es: "Lado izquierdo del Hub", detail: { en: "Press one green curved slope on the left side of the Smart Hub, curving upward.", es: "Presiona una pieza verde curva en el lado izquierdo del Smart Hub, curvándose hacia arriba." } },
          { x: 70, y: 35, en: "Right side of the Hub", es: "Lado derecho del Hub", detail: { en: "Press the second green curved slope on the right side, mirroring the first.", es: "Presiona la segunda pieza verde curva en el lado derecho, igual que la primera." } }
        ],
        help: { en: "Find the 2 lime-green pieces with a long smooth curve on top, they are 4 bumps long. Press one on each side of the Smart Hub (NOT the front or back, the sides). They curve upward like the frog's rounded back and make the body look smooth.", es: "Busca las 2 piezas verde lima con una curva suave, miden 4 botones de largo. Presiona una a cada lado del Smart Hub (NO al frente ni atrás, los lados). Se curvan hacia arriba como la espalda redondeada de la rana." }
      },
      {
        icon: "Cpu",
        pdfPage: 10,
        caption: { en: "Meet the motor! Plug its black cable into the Smart Hub, it makes the frog hop!", es: "¡Conoce el motor! Conecta su cable negro al Smart Hub, ¡hace saltar a la rana!" },
        parts: [{ emoji: "⚙️", count: 1, en: "Motor with cable", es: "Motor con cable" }],
        attach: [{ x: 30, y: 55, en: "Front of the model, cable into Hub", es: "Frente del modelo, cable al Hub", detail: { en: "Press the motor onto the front of the model, then push the cable's connector into any port on the Smart Hub.", es: "Presiona el motor en la parte delantera del modelo, luego empuja el conector del cable en cualquier puerto del Smart Hub." } }],
        help: { en: "Find the gray motor, it has a round spinning end and a long black cable coiled around it. Push the motor onto the front of the frame. Then take the cable and push its connector firmly into one of the ports on the side of the Smart Hub until it clicks. The motor is what will make the frog jump!", es: "Busca el motor gris, tiene un extremo redondo que gira y un cable negro largo enroscado. Empuja el motor en la parte delantera del marco. Luego toma el cable y empuja su conector en uno de los puertos del Smart Hub hasta que haga clic. ¡El motor hará saltar a la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 11,
        caption: { en: "Press 2 blue curved pieces over the top to hold the cable in place.", es: "Presiona 2 piezas azules curvas por arriba para sujetar el cable en su lugar." },
        parts: [{ emoji: "🩵", count: 2, en: "Blue curved slope 1×4", es: "Pieza azul curva 1×4" }],
        attach: [{ x: 50, y: 30, en: "Over the top of the Hub", es: "Sobre la parte de arriba del Hub", detail: { en: "Lay both blue curved slopes over the top of the Smart Hub, side by side, so they hold the motor cable neatly in a curve.", es: "Coloca ambas piezas azules curvas sobre la parte de arriba del Smart Hub, una al lado de la otra, para que sujeten el cable del motor en forma de curva." } }],
        help: { en: "Find the 2 light-blue curved pieces. Press them side by side over the top of the Smart Hub, curving over it like a bridge. They hold the motor's black cable in a neat arch, the cable should curve up and over, not dangle loose.", es: "Busca las 2 piezas azules curvas. Presiónadas una al lado de la otra sobre la parte de arriba del Smart Hub, curvándose como un puente. Sujetan el cable negro del motor en un arco ordenado." }
      },
      {
        icon: "Minus",
        pdfPage: 12,
        caption: { en: "Slide the short black rod into the motor, then push a black connector on the end.", es: "Desliza la varilla negra corta en el motor, luego pon un conector negro en la punta." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle rod, length 3", es: "Varilla eje negra, tamaño 3" },
          { emoji: "⬛", count: 1, en: "Black connector", es: "Conector negro" }
        ],
        attach: [{ x: 35, y: 60, en: "Center hole of the motor", es: "Agujero central del motor", detail: { en: "Slide the short black axle rod into the round hole at the center of the motor's spinning face. Push a small black connector onto the end sticking out.", es: "Desliza la varilla eje negra corta en el agujero redondo del centro de la cara giratoria del motor. Empuja un conector negro pequeño en la punta que sobresale." } }],
        help: { en: "Find the short black rod (it is only about 3 units long). Slide it all the way into the round hole in the center of the motor's face, the spinning end. Then take the small black connector and push it firmly onto the end of the rod that sticks out. It stops the rod from sliding out.", es: "Busca la varilla negra corta (mide solo unas 3 unidades de largo). Deslízala por el agujero redondo en el centro de la cara del motor, el extremo que gira. Luego toma el conector negro pequeño y empújalo firmemente en la punta de la varilla que sobresale." }
      },
      {
        icon: "Box",
        pdfPage: 13,
        caption: { en: "Snap the short green brick onto the side of the motor, like a little wall.", es: "Encaja el ladrillo verde corto en el costado del motor, como una paredita." },
        parts: [{ emoji: "🟢", count: 1, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 40, y: 55, en: "Side of the motor", es: "Costado del motor", detail: { en: "Press the green 1×4 brick onto the side of the motor, standing upright. Its holes face sideways.", es: "Presiona el ladrillo verde 1×4 en el costado del motor, parado verticalmente. Sus agujeros miran de lado." } }],
        help: { en: "Take the short green brick with holes (4 bumps long). Press it onto the side of the motor so it stands upright like a little wall. The round holes in the brick should face out to the side, an axle will go through them later.", es: "Toma el ladrillo verde corto con agujeros (4 botones de largo). Presiónalo en el costado del motor para que quede parado como una paredita. Los agujeros redondos deben mirar hacia afuera, pronto pasará un eje por ellos." }
      },
      {
        icon: "Minus",
        pdfPage: 14,
        caption: { en: "Slide the long black rod through the model. Pop a gray tube and red pin on it.", es: "Desliza la varilla negra larga por el modelo. Ponle un tubo gris y un pasador rojo." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle rod, length 10", es: "Varilla eje negra, tamaño 10" },
          { emoji: "⬜", count: 1, en: "Gray connector / tube", es: "Conector gris / tubo" },
          { emoji: "🔴", count: 1, en: "Red pin", es: "Pasador rojo" }
        ],
        attach: [{ x: 50, y: 50, en: "Through the holes in the frame", es: "Por los agujeros del marco", detail: { en: "First slide the gray tube onto the long rod and push the red pin in, then push the whole rod through the holes in the green beams from front to back.", es: "Primero desliza el tubo gris en la varilla larga y empuja el pasador rojo, luego pasa toda la varilla por los agujeros de las vigas verdes de adelante hacia atrás." } }],
        help: { en: "Take the longest black rod (size 10, the longest one in the set). First slide the gray tube onto it, then push the red pin into the end. Now push the whole rod through the round holes in the green beams, going from the front all the way to the back. It should stick out both sides a little.", es: "Toma la varilla negra más larga (tamaño 10, la más larga del set). Primero desliza el tubo gris y luego empuja el pasador rojo. Ahora pasa toda la varilla por los agujeros redondos de las vigas verdes, de adelante hacia atrás. Debe sobresalir un poco por ambos lados." }
      },
      {
        icon: "Circle",
        pdfPage: 15,
        caption: { en: "Put the small gear on the motor rod and the big gear on the long rod, they lock teeth!", es: "Pon el engranaje pequeño en la varilla del motor y el grande en la larga, ¡encajan!" },
        parts: [
          { emoji: "⚙️", count: 1, en: "Small gear", es: "Engranaje pequeño" },
          { emoji: "⚙️", count: 1, en: "Large gear", es: "Engranaje grande" }
        ],
        attach: [
          { x: 38, y: 60, en: "Small gear on motor rod", es: "Engranaje pequeño en varilla del motor", detail: { en: "Push the small gear onto the short rod sticking out of the motor.", es: "Empuja el engranaje pequeño en la varilla corta que sobresale del motor." } },
          { x: 55, y: 60, en: "Big gear on long rod", es: "Engranaje grande en varilla larga", detail: { en: "Push the large gear onto the long rod so its teeth mesh with the small gear's teeth.", es: "Empuja el engranaje grande en la varilla larga para que sus dientes encajen con los del engranaje pequeño." } }
        ],
        help: { en: "Find the 2 gears, one small (fewer teeth) and one large (more teeth). Push the small gear onto the short rod sticking out of the motor. Push the large gear onto the long rod. Make sure the teeth of both gears line up and touch each other. When the motor spins the small gear, it will make the big gear spin too!", es: "Busca los 2 engranajes, uno pequeño (menos dientes) y uno grande (más dientes). Empuja el engranaje pequeño en la varilla corta del motor. Empuja el engranaje grande en la varilla larga. Asegúrate de que los dientes de ambos engranajes se toquen. ¡Cuando el motor gire el engranaje pequeño, también hará girar el grande!" }
      },
      {
        icon: "Circle",
        pdfPage: 16,
        caption: { en: "Flip the frog over! Press 4 black round dots onto the orange plates.", es: "¡Voltea la rana! Presiona 4 puntos negros redondos sobre las placas naranjas." },
        parts: [{ emoji: "⚫", count: 4, en: "Black round plate 2×2", es: "Placa redonda negra 2×2" }],
        attach: [
          { x: 25, y: 35, en: "Front-left corner", es: "Esquina delantera izquierda", detail: { en: "Press one black round plate onto the front-left orange area.", es: "Presiona una placa redonda negra en el área naranja delantera izquierda." } },
          { x: 75, y: 35, en: "Front-right corner", es: "Esquina delantera derecha", detail: { en: "Press one black round plate onto the front-right orange area.", es: "Presiona una placa redonda negra en el área naranja delantera derecha." } },
          { x: 25, y: 70, en: "Back-left corner", es: "Esquina trasera izquierda", detail: { en: "Press one black round plate onto the back-left orange area.", es: "Presiona una placa redonda negra en el área naranja trasera izquierda." } },
          { x: 75, y: 70, en: "Back-right corner", es: "Esquina trasera derecha", detail: { en: "Press one black round plate onto the back-right orange area.", es: "Presiona una placa redonda negra en el área naranja trasera derecha." } }
        ],
        help: { en: "Carefully flip the whole model upside down so the bottom is facing up. Find 4 black round flat pieces (2×2 round). Press one onto each orange plate area, two at the front and two at the back. These will become part of the frog's feet!", es: "Voltea cuidadosamente todo el modelo boca abajo. Busca 4 piezas planas negras redondas (2×2 redondas). Presiona una en cada área naranja, dos adelante y dos atrás. ¡Estas se convertirán en parte de las patas de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 17,
        caption: { en: "Snap a black round dot onto an orange plate, press this pair onto the model.", es: "Encaja un punto negro en una placa naranja, presiona este par en el modelo." },
        parts: [
          { emoji: "⚫", count: 1, en: "Black round plate 2×2", es: "Placa redonda negra 2×2" },
          { emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 50, en: "Where the arrow points", es: "Donde señala la flecha", detail: { en: "First snap the black round plate onto the center of the orange 2×4 plate, then press the combined piece onto the top of the model where the diagram arrow points.", es: "Primero encaja la placa redonda negra en el centro de la placa naranja 2×4, luego presiona la pieza combinada en la parte de arriba del modelo donde señala la flecha." } }],
        help: { en: "Take the orange 2×4 plate and snap one black round plate onto the center of it. Now press the whole combined piece onto the model where the instruction arrow is pointing. It should click firmly into place.", es: "Toma la placa naranja 2×4 y encaja una placa redonda negra en el centro. Ahora presiona la pieza combinada en el modelo donde señala la flecha. Debe encajar firmemente." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 18,
        caption: { en: "Build a separate piece: press an orange plate onto a black round dot.", es: "Arma una pieza aparte: presiona una placa naranja sobre un punto negro redondo." },
        parts: [
          { emoji: "⚫", count: 1, en: "Black round plate 2×2", es: "Placa redonda negra 2×2" },
          { emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table, separate build", es: "Plana en la mesa, pieza aparte", detail: { en: "Set this aside from the main model. Press the orange plate on top of the black round plate to make a small sub-assembly.", es: "Ponla aparte del modelo principal. Presiona la placa naranja encima de la placa negra redonda para hacer un sub-ensamblaje." } }],
        help: { en: "This step builds a small separate piece, not on the main model yet! Take the black round plate and press the orange 2×4 plate on top of it. Set it aside. This little piece will become the top of the frog's head in the next steps.", es: "¡Este paso arma una pieza aparte, todavía no va en el modelo! Toma la placa negra redonda y presiona la placa naranja 2×4 encima. Ponla aparte. Esta pequeña pieza se convertirá en la parte de arriba de la cabeza de la rana." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 19,
        caption: { en: "Add 2 orange slope pieces to that separate piece, the head is taking shape!", es: "Agrega 2 piezas naranjas inclinadas a la pieza aparte, ¡la cabeza toma forma!" },
        parts: [{ emoji: "🟠", count: 2, en: "Orange slope brick 1×2", es: "Ladrillo naranja inclinado 1×2" }],
        attach: [{ x: 50, y: 55, en: "On the separate piece", es: "En la pieza aparte", detail: { en: "Press both orange slope bricks onto the separate orange plate, one near each end, with the slope pointing outward.", es: "Presiona ambos ladrillos naranjas inclinados sobre la placa naranja aparte, uno cerca de cada extremo, con la inclinación hacia afuera." } }],
        help: { en: "Take the separate piece you just built. Press both orange slope bricks on top of it, one near each end. The slanted side should face outward. This makes the sloped sides of the frog's head. It is starting to look like a frog!", es: "Toma la pieza aparte que acabas de armar. Presiona ambos ladrillos naranjas inclinados encima, uno cerca de cada extremo. El lado inclinado debe mirar hacia afuera. ¡Esto hace los lados inclinados de la cabeza de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 20,
        caption: { en: "Put a green round dot on top of the head piece, the frog's forehead!", es: "Pon un punto verde redondo encima de la pieza de la cabeza, ¡la frente de la rana!" },
        parts: [{ emoji: "🟢", count: 1, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" }],
        attach: [{ x: 30, y: 40, en: "Left top of the head piece", es: "Parte superior izquierda de la cabeza", detail: { en: "Press the green round plate onto the top-left area of the head sub-assembly.", es: "Presiona la placa redonda verde en el área superior izquierda del sub-ensamblaje de la cabeza." } }],
        help: { en: "Find the small green round plate (2×2 round, same size as the black ones). Press it on top of the head sub-assembly on the left side. The green circle peeks out and becomes the frog's forehead. Make sure it is pressed firmly down.", es: "Busca la placa redonda verde pequeña (2×2 redonda, del mismo tamaño que las negras). Presiónala encima del sub-ensamblaje de la cabeza en el lado izquierdo. El círculo verde sobresale y se convierte en la frente de la rana." }
      },
      {
        icon: "Circle",
        pdfPage: 21,
        caption: { en: "Add 2 green slope pieces on top, the head is complete!", es: "Agrega 2 piezas verdes inclinadas encima, ¡la cabeza está completa!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green slope brick 1×2", es: "Ladrillo verde inclinado 1×2" }],
        attach: [{ x: 50, y: 40, en: "Top of the head piece", es: "Parte de arriba de la pieza cabeza", detail: { en: "Press both green slope bricks on top of the head piece, side by side, sloping toward the front to make a pointed snout.", es: "Presiona ambos ladrillos verdes inclinados encima de la pieza cabeza, uno al lado del otro, inclinándose hacia el frente para hacer el hocico." } }],
        help: { en: "Take the 2 green slope bricks. Press them side by side on top of the head piece, with the sloped side pointing toward the front. This makes the frog's snout! Now press this whole head piece onto the front of the main model where the arrow is pointing.", es: "Toma los 2 ladrillos verdes inclinados. Presiónados uno al lado del otro encima de la pieza cabeza, con el lado inclinado apuntando al frente. ¡Esto hace el hocico de la rana! Ahora presiona toda la pieza cabeza en la parte delantera del modelo principal." }
      },
      {
        icon: "Zap",
        pdfPage: 22,
        caption: { en: "Press the head piece onto the model, the frog has a face now!", es: "Presiona la pieza cabeza en el modelo, ¡la rana ya tiene cara!" },
        parts: [],
        attach: [{ x: 20, y: 50, en: "Front-left of the model", es: "Parte delantera izquierda del modelo", detail: { en: "Press the head sub-assembly onto the front-left of the model where the arrow points. The snout faces forward.", es: "Presiona el sub-ensamblaje de la cabeza en la parte delantera izquierda del modelo donde señala la flecha. El hocico apunta hacia adelante." } }],
        help: { en: "Take the head piece you built. Press it firmly onto the front-left of the main model where the arrow points in the diagram. The frog's snout (the sloped green part) should point forward. The frog is really starting to look like a frog now!", es: "Toma la pieza cabeza que armaste. Presiónala firmemente en la parte delantera izquierda del modelo principal donde señala la flecha. El hocico de la rana (la parte verde inclinada) debe apuntar hacia adelante. ¡La rana ya se parece mucho a una rana!" }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 23,
        caption: { en: "Add 2 orange slopes on top of the blue back-leg pieces.", es: "Agrega 2 piezas naranjas inclinadas encima de las piezas azules traseras." },
        parts: [{ emoji: "🟠", count: 2, en: "Orange slope brick 1×3", es: "Ladrillo naranja inclinado 1×3" }],
        attach: [
          { x: 20, y: 70, en: "Left back-leg area", es: "Área de la pata trasera izquierda", detail: { en: "Press one orange slope on top of the left blue curved piece at the back.", es: "Presiona un ladrillo naranja inclinado encima de la pieza azul curva izquierda de atrás." } },
          { x: 80, y: 70, en: "Right back-leg area", es: "Área de la pata trasera derecha", detail: { en: "Press the second orange slope on top of the right blue curved piece at the back.", es: "Presiona el segundo ladrillo naranja inclinado encima de la pieza azul curva derecha de atrás." } }
        ],
        help: { en: "Find the 2 orange slope bricks, they are slightly longer this time (1×3). Press one on top of each of the 2 clear blue curved pieces at the back of the model. The orange slope should cover the blue piece and slope downward toward the back. These are the frog's back leg joints!", es: "Busca los 2 ladrillos naranjas inclinados, son un poco más largos esta vez (1×3). Presiona uno encima de cada una de las 2 piezas azules curvas transparentes en la parte trasera del modelo. ¡Estas son las articulaciones de las patas traseras de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 24,
        caption: { en: "Time for eyes! Press white eye pieces onto white brackets, attach one on each side.", es: "¡Hora de los ojos! Presiona piezas blancas en soportes, coloca uno a cada lado." },
        parts: [
          { emoji: "⚪", count: 2, en: "White round eye piece", es: "Pieza de ojo blanca redonda" },
          { emoji: "⬜", count: 2, en: "White bracket 1×2 with holes", es: "Soporte blanco 1×2 con agujeros" }
        ],
        attach: [
          { x: 20, y: 45, en: "Left front side", es: "Lado izquierdo delantero", detail: { en: "Press a white round piece onto a white bracket, then attach the pair to the left side of the front of the model.", es: "Presiona una pieza blanca redonda en un soporte blanco, luego coloca el par en el lado izquierdo del frente del modelo." } },
          { x: 80, y: 45, en: "Right front side", es: "Lado derecho delantero", detail: { en: "Press the second white round piece onto the second bracket, then attach to the right side of the front.", es: "Presiona la segunda pieza blanca redonda en el segundo soporte, luego coloca en el lado derecho del frente." } }
        ],
        help: { en: "Take a white round piece and press it onto one of the white bracket pieces (it looks like a little holder). Make 2 of these. Then attach one eye assembly onto the left side of the front of the model and one on the right side. The big round white parts are the eyeballs!", es: "Toma una pieza blanca redonda y presiónala en uno de los soportes blancos (parece un pequeño sostén). Haz 2 de estos. Luego coloca un ojo en el lado izquierdo del frente y uno en el lado derecho. ¡Las partes blancas redondas grandes son los ojos!" }
      },
      {
        icon: "Circle",
        pdfPage: 25,
        caption: { en: "Add 2 small green curved pieces above the eyes, they're the eyebrows!", es: "Agrega 2 pequeñas piezas verdes curvas sobre los ojos, ¡son las cejas!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green curved slope 1×2", es: "Pieza verde curva 1×2" }],
        attach: [
          { x: 22, y: 32, en: "Just above the left eye", es: "Justo encima del ojo izquierdo", detail: { en: "Press one small green curved piece just above the left eye.", es: "Presiona una pequeña pieza verde curva justo encima del ojo izquierdo." } },
          { x: 78, y: 32, en: "Just above the right eye", es: "Justo encima del ojo derecho", detail: { en: "Press the second green curved piece just above the right eye.", es: "Presiona la segunda pieza verde curva justo encima del ojo derecho." } }
        ],
        help: { en: "Find the 2 small green curved pieces, shorter than the ones used earlier. Press one just above each white eye piece. They curve upward like little eyebrows, giving the frog a friendly expression. The frog can now 'look' at you!", es: "Busca las 2 pequeñas piezas verdes curvas, más cortas que las usadas antes. Presiona una justo encima de cada ojo blanco. Se curvan hacia arriba como pequeñas cejas, dándole a la rana una expresión amigable. ¡La rana ahora puede 'mirarte'!" }
      },
      {
        icon: "Circle",
        pdfPage: 26,
        caption: { en: "Push small black dots into the white eyes, now the frog can look at you!", es: "Empuja puntos negros pequeños en los ojos blancos, ¡ahora la rana puede mirarte!" },
        parts: [{ emoji: "⚫", count: 2, en: "Black round piece 1×1", es: "Pieza negra redonda 1×1" }],
        attach: [
          { x: 22, y: 48, en: "Center of the left eye", es: "Centro del ojo izquierdo", detail: { en: "Push one small black round piece into the center of the left white eye.", es: "Empuja una pequeña pieza negra redonda en el centro del ojo blanco izquierdo." } },
          { x: 78, y: 48, en: "Center of the right eye", es: "Centro del ojo derecho", detail: { en: "Push one small black round piece into the center of the right white eye.", es: "Empuja una pequeña pieza negra redonda en el centro del ojo blanco derecho." } }
        ],
        help: { en: "Find the 2 tiny black round pieces (1×1 size, the smallest round pieces). Push one into the center of each white eyeball. They are the frog's pupils and make the eyes look alive! Press firmly until they sit snugly in the center.", es: "Busca las 2 pequeñas piezas negras redondas (tamaño 1×1, las piezas redondas más pequeñas). Empuja una en el centro de cada ojo blanco. ¡Son las pupilas de la rana y hacen que los ojos parezcan vivos! Presiona firmemente hasta que queden en el centro." }
      },
      {
        icon: "Box",
        pdfPage: 27,
        caption: { en: "Build a separate sensor piece: 2 gray bricks onto a white plate.", es: "Arma una pieza sensor aparte: 2 ladrillos grises sobre una placa blanca." },
        parts: [
          { emoji: "⬜", count: 1, en: "White plate 1×4", es: "Placa blanca 1×4" },
          { emoji: "⬛", count: 2, en: "Gray brick with cross hole 1×2", es: "Ladrillo gris con agujero de cruz 1×2" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table, separate build", es: "Plana en la mesa, pieza aparte", detail: { en: "Press both gray bricks side by side on top of the white plate. Build this separately from the main model.", es: "Presiona ambos ladrillos grises uno al lado del otro encima de la placa blanca. Arma esto aparte del modelo principal." } }],
        help: { en: "Set aside from the main model for now. Take the white plate (1×4, 4 bumps long) and press the 2 gray bricks side by side on top of it. The gray bricks have a special cross-shaped hole on the side, that is where the connector goes next.", es: "Aparta del modelo principal por ahora. Toma la placa blanca (1×4, 4 botones de largo) y presiona los 2 ladrillos grises uno al lado del otro encima. Los ladrillos grises tienen un agujero en forma de cruz en el costado, ahí va el conector en el próximo paso." }
      },
      {
        icon: "Zap",
        pdfPage: 28,
        caption: { en: "Push the red connector into the cross hole, then add a black connector on top.", es: "Empuja el conector rojo en el agujero de cruz, luego agrega un conector negro encima." },
        parts: [
          { emoji: "🔴", count: 1, en: "Red connector pin", es: "Pasador conector rojo" },
          { emoji: "⬛", count: 1, en: "Black connector", es: "Conector negro" }
        ],
        attach: [{ x: 70, y: 50, en: "Side cross hole of the gray bricks", es: "Agujero de cruz lateral de los ladrillos grises", detail: { en: "Push the red connector into the cross-shaped hole on the side of the gray bricks, then press the black connector onto the red one. Build a second identical piece, you need two total.", es: "Empuja el conector rojo en el agujero en forma de cruz del costado de los ladrillos grises, luego presiona el conector negro sobre el rojo. Arma una segunda pieza idéntica, necesitas dos en total." } }],
        help: { en: "Push the red connector into the cross-shaped hole on the side of the gray bricks, it only fits one way. Then press the black connector onto the red one. Now build a second identical piece exactly the same way so you have 2 total.", es: "Empuja el conector rojo en el agujero en forma de cruz del costado de los ladrillos grises, solo entra de una manera. Luego presiona el conector negro sobre el rojo. Ahora arma una segunda pieza idéntica para tener 2 en total." }
      },
      {
        icon: "Zap",
        pdfPage: 29,
        caption: { en: "Attach one sensor piece to the top of the model near the gears. Keep one aside.", es: "Coloca una pieza sensor encima del modelo cerca de los engranajes. Guarda la otra." },
        parts: [],
        attach: [{ x: 55, y: 35, en: "Near the gears on top", es: "Cerca de los engranajes arriba", detail: { en: "Press one of the two sensor pieces onto the top of the model, close to where the gears are. Keep the second piece set aside, it connects later.", es: "Presiona una de las dos piezas sensor encima del modelo, cerca de donde están los engranajes. Guarda la segunda pieza aparte, se conecta más adelante." } }],
        help: { en: "Take ONE of the 2 sensor pieces you built. Press it onto the top of the main model near the gears, the diagram shows exactly where with an arrow. Leave the second sensor piece to the side. It will connect when you turn on the Smart Hub.", es: "Toma UNA de las 2 piezas sensor que armaste. Presiónala encima del modelo principal cerca de los engranajes, el diagrama muestra exactamente dónde con una flecha. Deja la segunda pieza sensor a un lado. Se conectará cuando enciendas el Smart Hub." }
      },
      {
        icon: "Sparkles",
        pdfPage: 30,
        caption: { en: "Last step! Your frog is done! Press the green button and watch it hop! 🐸🎉", es: "¡Último paso! ¡Tu rana está lista! Presiona el botón verde y mírala saltar! 🐸🎉" },
        parts: [],
        attach: [{ x: 50, y: 35, en: "Green button on the Smart Hub", es: "Botón verde del Smart Hub", detail: { en: "Press the green button on top of the Smart Hub to turn on the frog. Connect your tablet and watch it jump!", es: "Presiona el botón verde encima del Smart Hub para encender la rana. ¡Conecta tu tablet y mírala saltar!" } }],
        help: { en: "Your frog is complete! Press the green button on top of the Smart Hub to turn it on. Connect the Hub to the WeDo 2.0 app on your tablet. Run a program to make the motor spin, and the frog will hop! Great job, you built the whole thing yourself!", es: "¡Tu rana está completa! Presiona el botón verde encima del Smart Hub para encenderla. Conecta el Hub a la app WeDo 2.0 en tu tablet. Ejecuta un programa para que el motor gire, ¡y la rana saltará! ¡Buen trabajo, la construiste tú mismo!" }
      }
    ]
  },
  {
    id: "flower",
    name: "LEGO Education WeDo 2.0 · Set 45300",
    model: { en: "Flower Robot", es: "Robot Flor" },
    color: "#4CAF50",
    pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/0a5c538e7_Flower.pdf",
    category: "wedo",
    steps: [
      {
        icon: "Minus",
        pdfPage: 3,
        caption: { en: "Snap 2 green blocks onto one end of the long green beam, the start of the frame!", es: "Encaja 2 bloques verdes en una punta de la viga verde larga, ¡el comienzo del armazón!" },
        parts: [
          { emoji: "🟢", count: 2, en: "Green brick with holes 1×2", es: "Ladrillo verde con agujeros 1×2" },
          { emoji: "🟢", count: 1, en: "Long green beam with holes 1×8", es: "Viga verde larga con agujeros 1×8" }
        ],
        attach: [{ x: 75, y: 55, en: "One end of the long beam", es: "Una punta de la viga larga", detail: { en: "Lay the long green beam flat. Stand two small green bricks with holes upright on one end like little feet.", es: "Pon la viga verde larga plana. Para dos pequeños ladrillos verdes con agujeros de pie en una punta como piecitos." } }],
        help: { en: "Find the long green beam with round holes along it, it is 8 bumps long. Lay it flat. Now find the 2 small green bricks with a round hole on the side. Stand them upright on one end of the beam, side by side. These are the very first feet of the robot's frame!", es: "Busca la viga verde larga con agujeros redondos, mide 8 botones de largo. Ponla plana. Ahora busca los 2 ladrillos verdes pequeños con un agujero redondo al lado. Páralos de pie en una punta de la viga, uno al lado del otro. ¡Son los primeros pies del armazón del robot!" }
      },
      {
        icon: "Minus",
        pdfPage: 4,
        caption: { en: "Add a turquoise ring, then snap a second long green beam next to the first, two prongs of a fork!", es: "Agrega un anillo turquesa y encaja una segunda viga verde junto a la primera, ¡dos dientes de un tenedor!" },
        parts: [
          { emoji: "🔵", count: 1, en: "Turquoise round connector", es: "Conector redondo turquesa" },
          { emoji: "🟢", count: 2, en: "Long green beam with holes 1×8", es: "Viga verde larga con agujeros 1×8" }
        ],
        attach: [{ x: 50, y: 40, en: "Between the two beams at the top", es: "Entre las dos vigas arriba", detail: { en: "Place the turquoise ring connector between the two beams, then snap the second beam parallel to the first.", es: "Coloca el conector turquesa entre las dos vigas, luego encaja la segunda viga paralela a la primera." } }],
        help: { en: "Snap the turquoise round ring connector between the beams. Then take the second long green beam and press it next to the first one, running parallel. Now you have two beams side by side like a fork's prongs, the basic frame is taking shape!", es: "Encaja el conector turquesa entre las vigas. Luego toma la segunda viga verde larga y presiónala junto a la primera, paralela. ¡Ahora tienes dos vigas una al lado de la otra como los dientes de un tenedor!" }
      },
      {
        icon: "Minus",
        pdfPage: 5,
        caption: { en: "Lay a third green beam across the far end, closing the frame into a rectangle!", es: "Coloca una tercera viga verde al final, ¡cerrando el armazón en un rectángulo!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green beam with holes 1×8", es: "Viga verde con agujeros 1×8" }
        ],
        attach: [{ x: 80, y: 50, en: "Far open end of the frame", es: "Extremo abierto del armazón", detail: { en: "Lay the third beam across the open far end, connecting both prongs to form a closed rectangle.", es: "Coloca la tercera viga en el extremo abierto, conectando los dos dientes para formar un rectángulo cerrado." } }],
        help: { en: "Take the third green beam. Press it flat across the open far end of the two-prong shape. It bridges the two prongs together so the frame is now a closed rectangle, long and sturdy!", es: "Toma la tercera viga verde. Presiónala en el extremo abierto de la forma de dos dientes. Une los dos dientes para que el armazón sea ahora un rectángulo cerrado, largo y firme." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 6,
        caption: { en: "Snap 2 long thin white plates along the beams, the frame's backbone!", es: "Encaja 2 placas blancas largas a lo largo de las vigas, ¡la columna del armazón!" },
        parts: [
          { emoji: "⬜", count: 2, en: "Long thin white plate 1×8", es: "Placa blanca larga y delgada 1×8" }
        ],
        attach: [{ x: 50, y: 50, en: "Along the inside of both beams", es: "A lo largo del interior de las vigas", detail: { en: "Press one white plate along the inside edge of each green beam, running the full length of the frame.", es: "Presiona una placa blanca a lo largo del borde interior de cada viga verde, de punta a punta del armazón." } }],
        help: { en: "Find the 2 long, thin white plates (1 bump wide, 8 bumps long). Press one along the inside of each green beam, running lengthwise. They lock the frame together and make it extra strong, like a backbone!", es: "Busca las 2 placas blancas largas y delgadas (1 botón de ancho, 8 de largo). Presiona una a lo largo del interior de cada viga verde. ¡Bloquean el armazón y lo hacen más fuerte, como una columna vertebral!" }
      },
      {
        icon: "Box",
        pdfPage: 7,
        caption: { en: "Push a black pin into a green block, pop a turquoise ring on the other end, then snap it on the frame.", es: "Empuja un pasador negro en un bloque verde, pon un anillo turquesa al otro extremo y encájalo en el armazón." },
        parts: [
          { emoji: "🔵", count: 1, en: "Turquoise round connector", es: "Conector redondo turquesa" },
          { emoji: "⬛", count: 1, en: "Black pin", es: "Pasador negro" },
          { emoji: "🟢", count: 2, en: "Small green brick with holes 1×2", es: "Ladrillo verde pequeño con agujeros 1×2" }
        ],
        attach: [{ x: 80, y: 60, en: "End of the frame, between the beams", es: "Extremo del armazón, entre las vigas", detail: { en: "Push the black pin into the side hole of one green block, then press the turquoise ring onto the exposed end. Snap this assembled piece onto the end of the frame between the beams.", es: "Empuja el pasador negro en el agujero lateral del bloque verde, luego presiona el anillo turquesa en el extremo que sobresale. Encaja esta pieza ensamblada en el extremo del armazón entre las vigas." } }],
        help: { en: "Take a small green block with a side hole. Push the black pin into that hole from one side. Then press the turquoise round ring onto the other end of the pin, it clicks in. Now snap this whole little assembly onto the end of the frame between the two green beams. This piece will help hold a spinning part later!", es: "Toma un bloque verde pequeño con agujero lateral. Empuja el pasador negro en ese agujero por un lado. Luego presiona el anillo turquesa en el otro extremo del pasador, hace clic. Ahora encaja toda esta pieza en el extremo del armazón entre las dos vigas verdes. ¡Esta pieza ayudará a sostener una parte giratoria más adelante!" }
      },
      {
        icon: "Box",
        pdfPage: 8,
        caption: { en: "Add 2 small blue blocks and 2 bright orange plates near the ends, colorful feet!", es: "Agrega 2 bloques azules pequeños y 2 placas naranjas brillantes cerca de las puntas, ¡piecitos de colores!" },
        parts: [
          { emoji: "🔵", count: 2, en: "Small blue brick 1×1", es: "Ladrillo azul pequeño 1×1" },
          { emoji: "🟠", count: 2, en: "Orange plate 2×2", es: "Placa naranja 2×2" }
        ],
        attach: [{ x: 80, y: 65, en: "Near the ends of the beams", es: "Cerca de las puntas de las vigas", detail: { en: "Press a blue brick and an orange plate together to make each foot, then snap one foot near each end of the frame.", es: "Presiona un ladrillo azul y una placa naranja juntos para hacer cada pie, luego encaja un pie cerca de cada extremo del armazón." } }],
        help: { en: "Take the 2 small blue bricks (1×1 size) and the 2 orange plates (2×2 size). Press a blue brick onto each orange plate, those become the colorful feet. Snap one foot near each of the two ends of the frame. They look like little boots!", es: "Toma los 2 ladrillos azules pequeños (tamaño 1×1) y las 2 placas naranjas (tamaño 2×2). Presiona un ladrillo azul sobre cada placa naranja, esos se convierten en los piecitos de colores. Encaja un pie cerca de cada extremo del armazón. ¡Parecen botitas!" }
      },
      {
        icon: "Circle",
        pdfPage: 9,
        caption: { en: "Snap 2 more turquoise ring connectors onto those colorful feet!", es: "Encaja 2 anillos turquesa más sobre esos piecitos de colores." },
        parts: [
          { emoji: "🔵", count: 2, en: "Turquoise round connector", es: "Conector redondo turquesa" }
        ],
        attach: [{ x: 80, y: 65, en: "On top of each colorful foot", es: "Encima de cada pie de colores", detail: { en: "Press one turquoise round connector on top of each colorful foot assembly at both ends of the frame.", es: "Presiona un conector turquesa redondo encima de cada pie de colores en los dos extremos del armazón." } }],
        help: { en: "Find the 2 turquoise round ring connectors. Press one firmly on top of each colorful foot you built in the last step, one at each end of the frame. They sit right on top of the orange-and-blue pieces.", es: "Busca los 2 conectores turquesa redondos. Presiona uno firmemente encima de cada piecito de colores que armaste en el paso anterior, uno en cada extremo del armazón. Quedan justo encima de las piezas naranja y azul." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 10,
        caption: { en: "Add 2 long white plates and 2 orange plates, a flat deck connecting both feet!", es: "Agrega 2 placas blancas largas y 2 naranjas, ¡un piso plano que conecta ambos pies!" },
        parts: [
          { emoji: "⬜", count: 2, en: "Long thin white plate 1×6", es: "Placa blanca larga y delgada 1×6" },
          { emoji: "🟠", count: 2, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 60, en: "Across the frame connecting the feet", es: "A través del armazón conectando los pies", detail: { en: "Press the white and orange plates spanning across the frame between the two colorful feet sections.", es: "Presiona las placas blancas y naranjas a través del armazón entre las dos secciones de pies." } }],
        help: { en: "Take the 2 long white plates (1×6) and the 2 orange plates (2×4). Press them across the frame, spanning from foot to foot. They create a solid flat deck between the two feet. Now the frame has a real floor to stand things on!", es: "Toma las 2 placas blancas largas (1×6) y las 2 placas naranjas (2×4). Presiónelas a través del armazón de pie a pie. Crean un piso plano sólido entre los dos pies. ¡Ahora el armazón tiene un piso real donde poner cosas!" }
      },
      {
        icon: "Circle",
        pdfPage: 11,
        caption: { en: "Press 2 small green round buttons and 2 blue tiles on top, a splash of color!", es: "Presiona 2 botoncitos verdes redondos y 2 azulejos azules encima, ¡un toque de color!" },
        parts: [
          { emoji: "🟢", count: 2, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" },
          { emoji: "🔵", count: 2, en: "Blue tile 1×2", es: "Azulejo azul 1×2" }
        ],
        attach: [{ x: 50, y: 50, en: "On the flat deck", es: "Sobre el piso plano", detail: { en: "Press the 2 green round plates and 2 blue flat tiles onto the deck surface for decoration.", es: "Presiona las 2 placas redondas verdes y los 2 azulejos azules planos sobre la superficie del piso." } }],
        help: { en: "Find the 2 small round green plates (2×2 round) and the 2 flat blue tiles (1×2). Press them onto the flat deck for decoration. The green rounds look like little buttons and the blue tiles add a cool stripe of color!", es: "Busca las 2 placas redondas verdes pequeñas (2×2 redondas) y los 2 azulejos azules planos (1×2). Presiónelos sobre el piso plano como decoración. ¡Los círculos verdes parecen botoncitos y los azulejos azules agregan una franja de color genial!" }
      },
      {
        icon: "Cpu",
        pdfPage: 12,
        caption: { en: "Add the big white Smart Hub, the robot's brain with the green button!", es: "Agrega el Smart Hub blanco grande, ¡el cerebro del robot con el botón verde!" },
        parts: [
          { emoji: "🧠", count: 1, en: "Smart Hub (the large white brick)", es: "Smart Hub (el bloque blanco grande)" }
        ],
        attach: [{ x: 50, y: 40, en: "On top of the frame", es: "Encima del armazón", detail: { en: "Press the Smart Hub flat onto the green beams spanning the middle of the frame. The green button faces up.", es: "Presiona el Smart Hub sobre las vigas verdes que cruzan el centro del armazón. El botón verde queda hacia arriba." } }],
        help: { en: "Find the large white-and-gray brick with a green button on top, that is the Smart Hub, the robot's brain! Press it firmly onto the top of the green beams in the middle of the frame. The green button should face up so you can press it to turn the robot on.", es: "Busca el ladrillo blanco y gris grande con un botón verde encima, ¡ese es el Smart Hub, el cerebro del robot! Presiónalo firmemente sobre la parte de arriba de las vigas verdes en el centro del armazón. El botón verde debe quedar hacia arriba para que puedas presionarlo." }
      },
      {
        icon: "Box",
        pdfPage: 13,
        caption: { en: "Snap a black block with a hole onto an orange plate, the start of a little arm!", es: "Encaja un bloque negro con agujero sobre una placa naranja, ¡el comienzo de un bracito!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Small black brick with hole 1×2", es: "Ladrillo negro pequeño con agujero 1×2" },
          { emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table, separate build", es: "Plana en la mesa, pieza aparte", detail: { en: "Build this separately: snap the black block onto the orange plate. The round hole in the black block faces sideways.", es: "Arma esto aparte: encaja el bloque negro sobre la placa naranja. El agujero redondo del bloque negro mira de lado." } }],
        help: { en: "Build this separately from the main frame! Take the orange plate (2×4) and snap the small black block (with a round hole on its side) onto one end of it. The hole in the black block should face out to the side. This starts a little arm that will stick out from the side of the robot.", es: "¡Arma esto aparte del armazón principal! Toma la placa naranja (2×4) y encaja el bloque negro pequeño (con agujero redondo al costado) en un extremo. El agujero del bloque negro debe mirar hacia afuera. Esto comienza un bracito que sobresaldrá del costado del robot." }
      },
      {
        icon: "Box",
        pdfPage: 14,
        caption: { en: "Stack a blue block and a green block on top, a colorful little tower!", es: "Apila un bloque azul y uno verde encima, ¡una torrecita de colores!" },
        parts: [
          { emoji: "🔵", count: 1, en: "Small blue brick 1×2", es: "Ladrillo azul pequeño 1×2" },
          { emoji: "🟢", count: 1, en: "Small green brick with hole 1×2", es: "Ladrillo verde pequeño con agujero 1×2" }
        ],
        attach: [{ x: 50, y: 45, en: "On top of the black block", es: "Encima del bloque negro", detail: { en: "Press the blue brick on top of the black block, then press the green brick with a hole on top of the blue one. The green hole faces sideways.", es: "Presiona el ladrillo azul encima del bloque negro, luego el ladrillo verde con agujero encima del azul. El agujero verde mira de lado." } }],
        help: { en: "Still working on the separate piece! Press the small blue brick on top of the black block. Then press the small green brick (with a side hole) on top of the blue one. Now you have a little colorful tower. The holes in the black and green bricks line up on the side for a rod to go through.", es: "¡Sigue trabajando en la pieza aparte! Presiona el ladrillo azul pequeño encima del bloque negro. Luego el ladrillo verde (con agujero lateral) encima del azul. Ahora tienes una torrecita de colores. Los agujeros del ladrillo negro y verde se alinean de lado para que pase una varilla." }
      },
      {
        icon: "Minus",
        pdfPage: 15,
        caption: { en: "Push a long gray rod through the tower's holes, cap the end with a turquoise connector, like a handle!", es: "Empuja una varilla gris larga por los agujeros de la torre y tápala con un conector turquesa, ¡como una manija!" },
        parts: [
          { emoji: "🔵", count: 1, en: "Turquoise round connector", es: "Conector turquesa redondo" },
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 7", es: "Varilla gris (eje) tamaño 7" },
          { emoji: "🟢", count: 1, en: "Small green brick with hole 1×2", es: "Ladrillo verde pequeño con agujero 1×2" }
        ],
        attach: [{ x: 55, y: 55, en: "Through the side holes of the tower", es: "Por los agujeros laterales de la torre", detail: { en: "Slide the gray rod all the way through the aligned holes in the black and green bricks, then press the turquoise connector firmly onto the exposed end.", es: "Desliza la varilla gris completamente por los agujeros alineados de los ladrillos negro y verde, luego presiona el conector turquesa firmemente en el extremo que sobresale." } }],
        help: { en: "Take the gray rod (size 7, a longer one). Slide it all the way through the side holes in the small tower you built (through the black block first, then the green one). The rod should stick out on both sides. Now press the turquoise round connector firmly onto one end of the rod. The rod is now like a handle poking out sideways.", es: "Toma la varilla gris (tamaño 7, una más larga). Deslízala por los agujeros laterales en la torrecita que armaste (primero por el bloque negro, luego el verde). La varilla debe sobresalir por ambos lados. Ahora presiona el conector turquesa firmemente en un extremo. La varilla es ahora como una manija que sobresale de lado." }
      },
      {
        icon: "Minus",
        pdfPage: 16,
        caption: { en: "Push the rod in a little further so it sits snugly, no new pieces, just a nudge!", es: "Empuja la varilla un poco más para que quede bien encajada, ¡sin piezas nuevas, solo un empujoncito!" },
        parts: [],
        attach: [{ x: 50, y: 55, en: "Push rod flush from the exposed end", es: "Empuja la varilla desde el extremo que sobresale", detail: { en: "Simply push the rod from the turquoise-capped end so the opposite end sits flush and snug inside the tower.", es: "Simplemente empuja la varilla desde el extremo del conector turquesa para que el otro extremo quede firme dentro de la torre." } }],
        help: { en: "No new pieces this step! Just push the rod in a little more from the turquoise side so it seats snugly and does not wobble. The rod should be secure in the tower. That is it, you are just fine-tuning!", es: "¡No hay piezas nuevas en este paso! Solo empuja la varilla un poco más desde el lado turquesa para que quede firme y no se mueva. La varilla debe estar segura en la torre. ¡Eso es todo, solo estás ajustando!" }
      },
      {
        icon: "Box",
        pdfPage: 17,
        caption: { en: "Snap 2 turquoise clip pieces onto the tower, a little fork to hold the motor!", es: "Encaja 2 piezas de gancho turquesa en la torre, ¡un tenedorcito para sostener el motor!" },
        parts: [
          { emoji: "🔵", count: 2, en: "Turquoise clip piece", es: "Pieza de gancho turquesa" }
        ],
        attach: [{ x: 40, y: 45, en: "On the sides of the tower", es: "A los lados de la torre", detail: { en: "Snap both turquoise clip pieces onto the sides of the colorful tower. Their openings face the same direction to cradle the motor.", es: "Encaja ambas piezas de gancho turquesa en los lados de la torrecita de colores. Sus aberturas miran en la misma dirección para sostener el motor." } }],
        help: { en: "Find the 2 turquoise clip pieces, they look like little hooks or clips. Snap one onto each side of the colorful tower. Their openings should face the same direction like a little fork, so they can cradle and hold the motor steady in the next step.", es: "Busca las 2 piezas de gancho turquesa, parecen pequeños ganchos o clips. Encaja uno en cada lado de la torrecita de colores. Sus aberturas deben mirar en la misma dirección como un tenedorcito, para sostener el motor firme en el próximo paso." }
      },
      {
        icon: "Cpu",
        pdfPage: 18,
        caption: { en: "Set the motor down into the turquoise clips, the motor makes the robot move!", es: "Coloca el motor dentro de los ganchos turquesa, ¡el motor hace mover al robot!" },
        parts: [
          { emoji: "⚙️", count: 1, en: "Motor with cable", es: "Motor con cable" }
        ],
        attach: [{ x: 45, y: 45, en: "Into the turquoise clips", es: "Dentro de los ganchos turquesa", detail: { en: "Press the motor down into the two turquoise clips so it sits firmly gripped. The motor shaft faces sideways toward the gears.", es: "Presiona el motor dentro de los dos ganchos turquesa para que quede bien sujeto. El eje del motor mira de lado hacia los engranajes." } }],
        help: { en: "Take the gray motor with its coiled cable. Lower it into the two turquoise clips, it should snap in and be held firmly in place. The cable hangs to the side. The round spinning shaft of the motor should point toward where the gears will go in the next steps.", es: "Toma el motor gris con su cable enrollado. Bájalo dentro de los dos ganchos turquesa, debe encajar y quedar bien sujeto. El cable cuelga a un lado. El eje giratorio redondo del motor debe apuntar hacia donde irán los engranajes en los próximos pasos." }
      },
      {
        icon: "Minus",
        pdfPage: 19,
        caption: { en: "Push a short gray rod into the motor shaft, then add a black connector on the tip.", es: "Empuja una varilla gris corta en el eje del motor y agrega un conector negro en la punta." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black connector", es: "Conector negro" },
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 3", es: "Varilla gris (eje) tamaño 3" }
        ],
        attach: [{ x: 60, y: 50, en: "Into the motor's spinning shaft", es: "En el eje giratorio del motor", detail: { en: "Push the short gray rod all the way into the round hole at the center of the motor's shaft face, then push the black connector onto the tip sticking out.", es: "Empuja la varilla gris corta hasta el fondo en el agujero redondo del centro del eje del motor, luego empuja el conector negro en la punta que sobresale." } }],
        help: { en: "Find the short gray rod (size 3, short one). Push it all the way into the round spinning hole at the front of the motor. Then take the small black connector and push it firmly onto the tip of the rod sticking out. This carries the motor's spinning power outward to the gears!", es: "Busca la varilla gris corta (tamaño 3, corta). Empújala hasta el fondo en el agujero giratorio redondo en la parte frontal del motor. Luego toma el conector negro pequeño y empújalo en la punta de la varilla. ¡Esto lleva la fuerza giratoria del motor hacia afuera a los engranajes!" }
      },
      {
        icon: "Box",
        pdfPage: 20,
        caption: { en: "Snap a long green block with holes underneath the motor, bracing it to the frame!", es: "Encaja un bloque verde largo con agujeros debajo del motor, ¡sujetándolo al armazón!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }
        ],
        attach: [{ x: 50, y: 70, en: "Underneath the motor tower", es: "Debajo de la torre del motor", detail: { en: "Snap the green 1×4 brick under the motor tower, connecting the tower arm to the main frame for support.", es: "Encaja el ladrillo verde 1×4 debajo de la torre del motor, conectando el bracito de la torre al armazón principal para darle soporte." } }],
        help: { en: "Take the green brick with holes (1×4, 4 bumps long). Snap it underneath the motor tower, bridging between the tower and the main frame. This braces the whole motor assembly firmly to the frame so it does not wobble.", es: "Toma el ladrillo verde con agujeros (1×4, 4 botones de largo). Encájalo debajo de la torre del motor, entre la torre y el armazón principal. Esto sujeta firmemente todo el ensamblaje del motor al armazón para que no se mueva." }
      },
      {
        icon: "Circle",
        pdfPage: 21,
        caption: { en: "Add a small black gear and a big gray gear, they mesh like bicycle gears!", es: "Agrega un engranaje negro pequeño y uno gris grande, ¡encajan como engranajes de bicicleta!" },
        parts: [
          { emoji: "⚙️", count: 1, en: "Small black gear", es: "Engranaje negro pequeño" },
          { emoji: "⚙️", count: 1, en: "Large gray gear", es: "Engranaje gris grande" }
        ],
        attach: [
          { x: 38, y: 60, en: "Small gear on motor rod", es: "Engranaje pequeño en varilla del motor", detail: { en: "Push the small black gear onto the short rod sticking out of the motor.", es: "Empuja el engranaje negro pequeño en la varilla corta que sobresale del motor." } },
          { x: 55, y: 60, en: "Big gear on the frame rod", es: "Engranaje grande en la varilla del armazón", detail: { en: "Push the large gray gear onto the long rod in the frame so its teeth mesh with the small gear.", es: "Empuja el engranaje gris grande en la varilla larga del armazón para que sus dientes encajen con el pequeño." } }
        ],
        help: { en: "Find the 2 gears, one small black and one large gray. Push the small black gear onto the short rod sticking out of the motor's shaft. Then push the large gray gear onto the long rod in the frame. Make sure their teeth touch and mesh together, when the motor spins the small gear, the big gear spins too!", es: "Busca los 2 engranajes, uno negro pequeño y uno gris grande. Empuja el engranaje negro pequeño en la varilla corta del eje del motor. Luego empuja el engranaje gris grande en la varilla larga del armazón. Asegúrate que sus dientes se toquen y enganen, ¡cuando el motor gire el pequeño, el grande también girará!" }
      },
      {
        icon: "Zap",
        pdfPage: 22,
        caption: { en: "Attach the whole motor-and-gear unit onto the main frame next to the colorful foot, no new pieces!", es: "Une toda la pieza del motor y engranaje al armazón principal junto al pie de colores, ¡sin piezas nuevas!" },
        parts: [],
        attach: [{ x: 60, y: 55, en: "Right side of the main frame", es: "Lado derecho del armazón principal", detail: { en: "Press the motor-and-tower arm assembly into the right side of the main frame, clicking it into place next to the colorful foot.", es: "Presiona el ensamblaje de la torre del motor en el lado derecho del armazón principal, encajándolo junto al pie de colores." } }],
        help: { en: "No new pieces, just combine! Take the motor-and-tower arm you built separately. Press it firmly into the right side of the main green frame, right next to the colorful foot (orange and blue pieces). It should click into place securely. Now the motor is part of the main frame!", es: "Sin piezas nuevas, ¡solo combinar! Toma el bracito del motor que armaste por separado. Presiónalo firmemente en el lado derecho del armazón verde principal, justo junto al pie de colores (piezas naranja y azul). Debe encajar de forma segura. ¡Ahora el motor es parte del armazón principal!" }
      },
      {
        icon: "Minus",
        pdfPage: 23,
        caption: { en: "Push 2 short gray rods through the sides near the motor, cap each with a yellow ring!", es: "Empuja 2 varillas grises cortas por los costados cerca del motor, tapa cada una con un anillo amarillo." },
        parts: [
          { emoji: "🟡", count: 2, en: "Yellow bushing (ring)", es: "Buje amarillo (anillo)" },
          { emoji: "⬜", count: 2, en: "Gray rod (axle) length 4", es: "Varilla gris (eje) tamaño 4" }
        ],
        attach: [{ x: 65, y: 50, en: "Side holes near the motor", es: "Agujeros laterales cerca del motor", detail: { en: "Slide each short gray rod through a side hole near the motor unit and press a yellow ring firmly onto the end.", es: "Desliza cada varilla gris corta por un agujero lateral cerca del motor y presiona un anillo amarillo firmemente en el extremo." } }],
        help: { en: "Find the 2 short gray rods (size 4) and 2 yellow rings (bushings). Push one gray rod through each of the side holes near the motor. Then press one yellow ring firmly onto each exposed end. The yellow rings act as caps to keep the gears from sliding off the rods.", es: "Busca las 2 varillas grises cortas (tamaño 4) y 2 anillos amarillos (bujes). Empuja una varilla gris por cada uno de los agujeros laterales cerca del motor. Luego presiona un anillo amarillo firmemente en cada extremo que sobresale. Los anillos amarillos actúan como tapas para evitar que los engranajes se salgan." }
      },
      {
        icon: "Box",
        pdfPage: 24,
        caption: { en: "Snap a light-blue curved tile over the top of the Smart Hub, like a little roof!", es: "Encaja un azulejo curvo azul claro sobre la parte de arriba del Smart Hub, ¡como un techito!" },
        parts: [
          { emoji: "🩵", count: 1, en: "Light-blue curved tile", es: "Azulejo curvo azul claro" }
        ],
        attach: [{ x: 50, y: 30, en: "Over the top of the Smart Hub", es: "Sobre la parte de arriba del Smart Hub", detail: { en: "Snap the curved light-blue tile over the top of the Smart Hub brick, covering the cable area.", es: "Encaja el azulejo curvo azul claro sobre la parte de arriba del bloque Smart Hub, cubriendo el área del cable." } }],
        help: { en: "Find the curved light-blue tile, it has a smooth arc shape. Snap it over the top of the Smart Hub so it curves over like a little roof or arch. This covers the cables neatly and makes the robot look more finished.", es: "Busca el azulejo curvo azul claro, tiene una forma de arco suave. Encájalo sobre la parte de arriba del Smart Hub para que se curve como un techito. Esto cubre los cables ordenadamente y hace que el robot parezca más terminado." }
      },
      {
        icon: "Circle",
        pdfPage: 25,
        caption: { en: "Build the spinning joint: green pin → red gear → green cross connector, then snap to the front post!", es: "Arma la articulación giratoria: pasador verde → engranaje rojo → conector verde en cruz, ¡luego encájala al poste delantero!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green pin", es: "Pasador verde" },
          { emoji: "🟢", count: 1, en: "Green cross connector", es: "Conector verde en cruz" },
          { emoji: "🔴", count: 1, en: "Red gear", es: "Engranaje rojo" }
        ],
        attach: [{ x: 25, y: 65, en: "Onto the front post of the frame", es: "En el poste delantero del armazón", detail: { en: "Build: push the green pin into the red gear's center, then push that into the green cross connector underneath. Snap this spinning stack onto the front post (green stud column) of the frame.", es: "Arma: empuja el pasador verde en el centro del engranaje rojo, luego empuja eso en el conector verde en cruz debajo. Encaja esta pila giratoria en el poste delantero (columna de botones verdes) del armazón." } }],
        help: { en: "Build this small stack: push the green pin into the top of the red gear (flower-shaped), then push the bottom of the pin into the green cross-shaped connector underneath. This little stack can spin freely! Now snap the whole thing onto the front post of the green frame, that column of green studs at the front. It will let the leaf assembly spin around later.", es: "Arma esta pequeña pila: empuja el pasador verde en la parte de arriba del engranaje rojo (con forma de flor), luego empuja la parte inferior del pasador en el conector verde en forma de cruz debajo. ¡Esta pequeña pila puede girar libremente! Encaja todo en el poste delantero del armazón verde, esa columna de botones verdes al frente. Dejará que el ensamblaje de las hojas gire más adelante." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 26,
        caption: { en: "Start the flower's leaves: snap a black block with a hole onto a long white plate.", es: "Empieza las hojas de la flor: encaja un bloque negro con agujero sobre una placa blanca larga." },
        parts: [
          { emoji: "⬜", count: 1, en: "Long white plate 1×6", es: "Placa blanca larga 1×6" },
          { emoji: "⬛", count: 1, en: "Small black brick with hole 1×2", es: "Ladrillo negro pequeño con agujero 1×2" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table, separate leaf build", es: "Plana en la mesa, pieza hoja aparte", detail: { en: "Build this separately: press the small black block with a side hole onto the center of the white plate.", es: "Arma esto aparte: presiona el bloque negro pequeño con agujero lateral sobre el centro de la placa blanca." } }],
        help: { en: "Start building the leaf piece separately! Take the long white plate (1×6) and press the small black block (with a round side hole) onto it near the center. This is the base that will grow into the flower's spinning leaves.", es: "¡Empieza a armar la pieza de hojas por separado! Toma la placa blanca larga (1×6) y presiona el bloque negro pequeño (con agujero lateral redondo) sobre ella cerca del centro. Esta es la base que se convertirá en las hojas giratorias de la flor." }
      },
      {
        icon: "Circle",
        pdfPage: 27,
        caption: { en: "Snap 2 curved green slope pieces on, angled outward, two leaves opening up!", es: "Encaja 2 piezas verdes curvas hacia afuera, ¡dos hojas que se abren!" },
        parts: [
          { emoji: "🟢", count: 2, en: "Curved green slope piece", es: "Pieza verde curva" }
        ],
        attach: [{ x: 50, y: 50, en: "On the black block, angled outward", es: "En el bloque negro, abiertas hacia afuera", detail: { en: "Snap one curved green slope on each side of the black block, angling them outward like leaves spreading open.", es: "Encaja una pieza verde curva en cada lado del bloque negro, inclinándolas hacia afuera como hojas que se abren." } }],
        help: { en: "Find the 2 curved green pieces. Snap one on each side of the small black block on the white plate. Angle them outward so they spread like two leaves opening up. The curved sides should arc away from the center.", es: "Busca las 2 piezas verdes curvas. Encaja una en cada lado del bloque negro pequeño sobre la placa blanca. Inclínalas hacia afuera para que se abran como dos hojas. Los lados curvos deben arquearse alejándose del centro." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 28,
        caption: { en: "Add another long white plate underneath to hold both leaves together as one piece.", es: "Agrega otra placa blanca larga debajo para mantener las dos hojas unidas en una sola pieza." },
        parts: [
          { emoji: "⬜", count: 1, en: "Long white plate 1×6", es: "Placa blanca larga 1×6" }
        ],
        attach: [{ x: 50, y: 70, en: "Underneath the leaf assembly", es: "Debajo del ensamblaje de hojas", detail: { en: "Press the second white plate along the underside of the leaf assembly, locking both green leaves and the black block together as one solid piece.", es: "Presiona la segunda placa blanca a lo largo de la parte inferior del ensamblaje de hojas, uniendo las hojas verdes y el bloque negro como una sola pieza sólida." } }],
        help: { en: "Take the second long white plate (1×6). Press it along the underside of the whole leaf assembly, the bottom of the green leaves and the black block. This locks everything together into one solid piece that will not fall apart.", es: "Toma la segunda placa blanca larga (1×6). Presiónala a lo largo de la parte inferior de todo el ensamblaje de hojas, el fondo de las hojas verdes y el bloque negro. Esto une todo en una sola pieza sólida que no se caerá." }
      },
      {
        icon: "Minus",
        pdfPage: 29,
        caption: { en: "Push a long gray rod through the leaf piece and cap it with a gray connector.", es: "Empuja una varilla gris larga por la pieza de hojas y tápala con un conector gris." },
        parts: [
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 6", es: "Varilla gris (eje) tamaño 6" },
          { emoji: "⬜", count: 1, en: "Gray connector / bushing", es: "Conector gris / buje" }
        ],
        attach: [{ x: 50, y: 55, en: "Through the black block's side hole", es: "Por el agujero lateral del bloque negro", detail: { en: "Push the length-6 gray rod through the side hole in the black block on the leaf piece, then press the gray connector firmly onto one exposed end.", es: "Empuja la varilla gris tamaño 6 por el agujero lateral del bloque negro en la pieza de hojas, luego presiona el conector gris firmemente en el extremo que sobresale." } }],
        help: { en: "Take the gray rod (size 6). Push it all the way through the round side hole in the black block on your leaf piece. The rod should stick out on both sides. Then press the gray connector (bushing) onto one end of the rod to keep it from sliding out. This rod lets the leaf piece plug into the spinning joint.", es: "Toma la varilla gris (tamaño 6). Empújala completamente por el agujero lateral redondo del bloque negro en tu pieza de hojas. La varilla debe sobresalir por ambos lados. Luego presiona el conector gris (buje) en un extremo para que no se deslice. Esta varilla deja que la pieza de hojas se conecte a la articulación giratoria." }
      },
      {
        icon: "Minus",
        pdfPage: 30,
        caption: { en: "Add one more gray connector onto the other end of the rod, finishing the leaf axle.", es: "Agrega un conector gris más en el otro extremo de la varilla, terminando el eje de las hojas." },
        parts: [
          { emoji: "⬜", count: 1, en: "Gray connector / bushing", es: "Conector gris / buje" }
        ],
        attach: [{ x: 20, y: 55, en: "Other end of the rod", es: "El otro extremo de la varilla", detail: { en: "Press the second gray connector onto the other exposed end of the rod to cap it.", es: "Presiona el segundo conector gris en el otro extremo expuesto de la varilla para taparlo." } }],
        help: { en: "Take the second gray connector/bushing. Press it firmly onto the other exposed end of the gray rod sticking out from the leaf piece. Now both ends are capped and the rod is locked in place, the leaf piece is fully prepared!", es: "Toma el segundo conector/buje gris. Presiónalo firmemente en el otro extremo expuesto de la varilla gris que sobresale de la pieza de hojas. Ahora ambos extremos están tapados y la varilla está bloqueada, ¡la pieza de hojas está totalmente preparada!" }
      },
      {
        icon: "Zap",
        pdfPage: 31,
        caption: { en: "Push a small red connector and a short gray rod onto the other end of the leaf piece.", es: "Empuja un conector rojo pequeño y una varilla gris corta en el otro extremo de la pieza de hojas." },
        parts: [
          { emoji: "🔴", count: 1, en: "Red connector pin", es: "Pasador conector rojo" },
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 3", es: "Varilla gris (eje) tamaño 3" }
        ],
        attach: [{ x: 75, y: 55, en: "Other end of the leaf assembly", es: "Otro extremo del ensamblaje de hojas", detail: { en: "Push the red connector into the hole at the far end of the leaf piece, then push the short gray rod into the red connector.", es: "Empuja el conector rojo en el agujero al otro extremo de la pieza de hojas, luego empuja la varilla gris corta en el conector rojo." } }],
        help: { en: "Take the small red connector pin. Push it into the round hole at the other (far) end of the leaf piece. Then push the short gray rod (size 3) into the red connector. This prepares the connection point for the spinning joint on the frame.", es: "Toma el conector rojo pequeño. Empújalo en el agujero redondo al otro extremo de la pieza de hojas. Luego empuja la varilla gris corta (tamaño 3) en el conector rojo. Esto prepara el punto de conexión para la articulación giratoria del armazón." }
      },
      {
        icon: "Zap",
        pdfPage: 32,
        caption: { en: "Plug the whole leaf piece into the spinning joint on the frame's front post, leaves can now twirl!", es: "Conecta toda la pieza de hojas en la articulación giratoria del poste delantero, ¡las hojas ya pueden girar!" },
        parts: [],
        attach: [{ x: 25, y: 60, en: "Into the spinning joint on the front post", es: "En la articulación giratoria del poste delantero", detail: { en: "Slide the rod end of the leaf piece into the spinning joint (green cross connector) on the front post of the main frame.", es: "Desliza el extremo de la varilla de la pieza de hojas en la articulación giratoria (conector verde en cruz) en el poste delantero del armazón principal." } }],
        help: { en: "Take the finished leaf piece. Plug its rod end into the spinning joint (the red gear and green cross connector) on the front post of the main frame. The leaves should now be able to spin and twirl freely when pushed! No new pieces, just connect them.", es: "Toma la pieza de hojas terminada. Enchufa su extremo de varilla en la articulación giratoria (el engranaje rojo y conector verde en cruz) en el poste delantero del armazón principal. ¡Las hojas deben ahora poder girar libremente cuando se empujen! Sin piezas nuevas, solo conéctalas." }
      },
      {
        icon: "Box",
        pdfPage: 33,
        caption: { en: "Start the flower's face: stack 2 blue blocks onto an orange L-shaped plate!", es: "Empieza la carita de la flor: apila 2 bloques azules sobre una placa naranja en forma de L." },
        parts: [
          { emoji: "🔵", count: 2, en: "Blue brick 1×4", es: "Ladrillo azul 1×4" },
          { emoji: "🟠", count: 1, en: "Orange L-shaped plate", es: "Placa naranja en forma de L" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table, separate face build", es: "Plana en la mesa, pieza carita aparte", detail: { en: "Build separately: stack both blue bricks on top of the orange L-shaped plate to form the start of the flower's face.", es: "Arma aparte: apila los dos ladrillos azules sobre la placa naranja en forma de L para comenzar la carita de la flor." } }],
        help: { en: "Build this separately! Take the orange L-shaped plate and stack both blue bricks (1×4) on top of it. The blue bricks form the colorful front face of the flower character. Set this aside, we will add eyes and more to it next.", es: "¡Arma esto por separado! Toma la placa naranja en forma de L y apila los dos ladrillos azules (1×4) encima. Los ladrillos azules forman la cara colorida del personaje flor. Ponlo aparte, agregaremos ojos y más en los próximos pasos." }
      },
      {
        icon: "Circle",
        pdfPage: 34,
        caption: { en: "Snap 2 see-through yellow lenses onto 2 small white blocks, glowing eyes!", es: "Encaja 2 lentes amarillos transparentes en 2 bloques blancos pequeños, ¡ojitos brillantes!" },
        parts: [
          { emoji: "🟡", count: 2, en: "Yellow round lens", es: "Lente amarillo redondo" },
          { emoji: "⬜", count: 2, en: "Small white brick with hole 1×1", es: "Ladrillo blanco pequeño con agujero 1×1" }
        ],
        attach: [{ x: 50, y: 50, en: "On the blue face piece", es: "En la pieza azul de la cara", detail: { en: "First push each yellow lens into a white 1×1 brick to make 2 eye units, then press both eyes onto the blue face piece.", es: "Primero empuja cada lente amarillo en un ladrillo blanco 1×1 para hacer 2 unidades de ojo, luego presiona los dos ojos en la pieza azul de la cara." } }],
        help: { en: "Take the 2 small white bricks (1×1 with a side hole). Push a see-through yellow lens piece into each one, they become the glowing eyes. Now press both eye assemblies onto the blue face piece. The yellow lenses look like big bright eyes!", es: "Toma los 2 ladrillos blancos pequeños (1×1 con agujero lateral). Empuja una lente amarilla transparente en cada uno, se convierten en los ojitos brillantes. Ahora presiona los dos ensamblajes de ojos en la pieza azul de la cara. ¡Las lentes amarillas parecen ojos grandes y brillantes!" }
      },
      {
        icon: "Circle",
        pdfPage: 35,
        caption: { en: "Attach the blue face piece onto a wide green wedge-shaped plate, the flower's big petal!", es: "Une la pieza azul de la cara sobre una placa verde ancha en forma de cuña, ¡el pétalo grande de la flor!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green wedge plate", es: "Placa verde en cuña" }
        ],
        attach: [{ x: 50, y: 55, en: "Center of the green wedge plate", es: "Centro de la placa verde en cuña", detail: { en: "Press the blue face-and-eyes piece onto the center of the wide green wedge plate. The wedge becomes the flower's main petal.", es: "Presiona la pieza azul con cara y ojos sobre el centro de la placa verde ancha en cuña. La cuña se convierte en el pétalo principal de la flor." } }],
        help: { en: "Take the wide green wedge-shaped plate. Press the blue face piece (with the glowing eyes) onto the center of the wedge. The wedge plate spreads out wide like a big petal. This sub-assembly will become the flower's face panel!", es: "Toma la placa verde ancha en forma de cuña. Presiona la pieza azul de la cara (con los ojitos brillantes) sobre el centro de la cuña. La placa en cuña se extiende como un pétalo grande. ¡Este sub-ensamblaje se convertirá en el panel de la cara de la flor!" }
      },
      {
        icon: "Box",
        pdfPage: 36,
        caption: { en: "Add a small dark gray block and 2 more blue blocks to build up the petal's side.", es: "Agrega un bloque gris oscuro pequeño y 2 bloques azules más para hacer más grande el costado del pétalo." },
        parts: [
          { emoji: "⬛", count: 1, en: "Small dark gray brick with hole 1×1", es: "Ladrillo gris oscuro pequeño con agujero 1×1" },
          { emoji: "🔵", count: 2, en: "Blue brick 1×2", es: "Ladrillo azul 1×2" }
        ],
        attach: [{ x: 25, y: 60, en: "Side of the petal assembly", es: "Costado del ensamblaje del pétalo", detail: { en: "Press the small dark gray brick and the 2 blue bricks onto the side of the petal panel to build it up.", es: "Presiona el ladrillo gris oscuro pequeño y los 2 ladrillos azules en el costado del panel del pétalo para hacerlo más grande." } }],
        help: { en: "Take the small dark gray brick (1×1, with a side hole) and the 2 small blue bricks (1×2 each). Press the gray brick and the blue bricks onto the side of the petal panel, building it up a bit more. The gray brick's hole will be used to connect to the frame later.", es: "Toma el ladrillo gris oscuro pequeño (1×1 con agujero lateral) y los 2 ladrillos azules pequeños (1×2 cada uno). Presiona el ladrillo gris y los azules en el costado del panel del pétalo, haciéndolo un poco más grande. El agujero del ladrillo gris se usará para conectarse al armazón más adelante." }
      },
      {
        icon: "Cpu",
        pdfPage: 37,
        caption: { en: "Snap in the sensor, the little piece with the coiled cable, like a nose or feeler!", es: "Encaja el sensor, la piecita con el cable enrollado, ¡como una naricita o sensor de tacto!" },
        parts: [
          { emoji: "📡", count: 1, en: "Sensor unit with cable", es: "Unidad sensor con cable" }
        ],
        attach: [{ x: 30, y: 60, en: "On the petal panel side", es: "En el costado del panel del pétalo", detail: { en: "Press the sensor unit onto the petal panel. Its cable connects later to the Smart Hub.", es: "Presiona la unidad sensor en el panel del pétalo. Su cable se conectará después al Smart Hub." } }],
        help: { en: "Find the sensor, it is a small brick with a coiled cable attached. Snap it onto the side of the petal panel. This sensor lets the robot detect things happening around it, like a nose! The cable will connect to the Smart Hub later.", es: "Busca el sensor, es un ladrillo pequeño con un cable enrollado. Encájalo en el costado del panel del pétalo. ¡Este sensor deja que el robot detecte lo que pasa a su alrededor, como una naricita! El cable se conectará al Smart Hub más adelante." }
      },
      {
        icon: "Circle",
        pdfPage: 38,
        caption: { en: "Add a second green wedge plate and an orange technic plate, the petal grows into a big panel!", es: "Agrega una segunda placa verde en cuña y una naranja con textura, ¡el pétalo crece en un panel grande!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green wedge plate", es: "Placa verde en cuña" },
          { emoji: "🟠", count: 1, en: "Orange technic plate", es: "Placa naranja con textura technic" }
        ],
        attach: [{ x: 50, y: 55, en: "Extending the petal panel", es: "Extendiendo el panel del pétalo", detail: { en: "Press the second green wedge plate and the orange technic plate onto the existing petal panel to make it larger.", es: "Presiona la segunda placa verde en cuña y la placa naranja technic sobre el panel del pétalo existente para hacerlo más grande." } }],
        help: { en: "Take the second green wedge plate and the orange technic plate (the bumpy orange one). Press both onto the existing petal panel, extending it to make a bigger panel. This is the flower's main large petal face, it is getting big!", es: "Toma la segunda placa verde en cuña y la placa naranja technic (la naranja con textura). Presiona ambas sobre el panel del pétalo existente, extendiéndolo para hacer un panel más grande. ¡Este es el gran pétalo principal de la flor, ¡se está poniendo grande!" }
      },
      {
        icon: "Zap",
        pdfPage: 39,
        caption: { en: "Stand the whole petal panel up on the frame's tall post, like a big leaf standing tall!", es: "Para el panel completo del pétalo en el poste alto del armazón, ¡parece una hoja grande de pie!" },
        parts: [],
        attach: [{ x: 22, y: 45, en: "The tall post on the left side of the frame", es: "El poste alto en el lado izquierdo del armazón", detail: { en: "Press the petal panel's connector onto the tall post (column of green bricks) on the left side of the main frame, standing it upright.", es: "Presiona el conector del panel del pétalo en el poste alto (columna de ladrillos verdes) del lado izquierdo del armazón principal, parándolo de pie." } }],
        help: { en: "Take the whole big petal panel. Stand it upright and press its connector side onto the tall post on the left side of the main frame. It should stand up tall like a big leaf or flower petal rising from the base. No new pieces, just attach it!", es: "Toma todo el panel del pétalo grande. Páralo de pie y presiona su lado conector en el poste alto del lado izquierdo del armazón principal. Debe quedar de pie como una hoja grande o pétalo de flor que sube de la base. ¡Sin piezas nuevas, solo conéctalo!" }
      },
      {
        icon: "Minus",
        pdfPage: 40,
        caption: { en: "Take a long gray rod and snap a green angled joint onto one end, start of a bendy arm!", es: "Toma una varilla gris larga y encaja una articulación verde angulada en una punta, ¡comienzo de un bracito flexible!" },
        parts: [
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 10", es: "Varilla gris (eje) tamaño 10" },
          { emoji: "🟢", count: 1, en: "Green angled joint", es: "Articulación verde angulada" }
        ],
        attach: [{ x: 80, y: 60, en: "One end of the long rod", es: "Una punta de la varilla larga", detail: { en: "Snap the green angled joint onto one end of the long gray rod (size 10).", es: "Encaja la articulación verde angulada en una punta de la varilla gris larga (tamaño 10)." } }],
        help: { en: "Take the long gray rod (size 10, the longest). Snap the green angled joint firmly onto one end. This is the beginning of the robot's bendy arm. Set it aside, we will add another joint to the other end next.", es: "Toma la varilla gris larga (tamaño 10, la más larga). Encaja la articulación verde angulada firmemente en una punta. Este es el comienzo del bracito flexible del robot. Ponlo aparte, agregaremos otra articulación al otro extremo a continuación." }
      },
      {
        icon: "Minus",
        pdfPage: 41,
        caption: { en: "Add a shorter gray rod and another green angled joint to the other end, the arm can bend in the middle!", es: "Agrega una varilla gris más corta y otra articulación verde al otro extremo, ¡el brazo se puede doblar en el medio!" },
        parts: [
          { emoji: "⬜", count: 1, en: "Gray rod (axle) length 6", es: "Varilla gris (eje) tamaño 6" },
          { emoji: "🟢", count: 1, en: "Green angled joint", es: "Articulación verde angulada" }
        ],
        attach: [{ x: 20, y: 55, en: "Other end of the arm assembly", es: "El otro extremo del ensamblaje del brazo", detail: { en: "Snap the second green angled joint onto the other end of the long rod, then push the shorter gray rod (size 6) into that second joint.", es: "Encaja la segunda articulación verde angulada en el otro extremo de la varilla larga, luego empuja la varilla gris más corta (tamaño 6) en esa segunda articulación." } }],
        help: { en: "Take the second green angled joint and the shorter gray rod (size 6). Snap the second joint onto the other end of the long rod. Then push the shorter rod into that second joint. Now the arm has two joints and a shorter rod, it can bend in the middle like an elbow!", es: "Toma la segunda articulación verde angulada y la varilla gris más corta (tamaño 6). Encaja la segunda articulación en el otro extremo de la varilla larga. Luego empuja la varilla más corta en esa segunda articulación. ¡Ahora el brazo tiene dos articulaciones y puede doblarse en el medio como un codo!" }
      },
      {
        icon: "Zap",
        pdfPage: 42,
        caption: { en: "Attach the bendy arm onto the big gear next to the motor, now it swings when the motor spins!", es: "Une el brazo flexible al engranaje grande junto al motor, ¡ahora se mueve cuando el motor gira!" },
        parts: [],
        attach: [{ x: 65, y: 45, en: "Into the big gear next to the motor", es: "En el engranaje grande junto al motor", detail: { en: "Connect the end of the bendy arm into the hole in the large gray gear on the motor side. As the gear turns, the arm will swing.", es: "Conecta el extremo del brazo flexible en el agujero del engranaje gris grande del lado del motor. Al girar el engranaje, el brazo oscilará." } }],
        help: { en: "Take the bendy arm you built. Connect one end of it into the hole in the large gray gear on the motor side of the frame. No new pieces, just click it in. When the motor runs and the gear spins, the arm will swing around in a big arc!", es: "Toma el brazo flexible que armaste. Conecta un extremo en el agujero del engranaje gris grande del lado del motor del armazón. Sin piezas nuevas, solo encájalo. ¡Cuando el motor funcione y el engranaje gire, el brazo oscilará en un gran arco!" }
      },
      {
        icon: "Box",
        pdfPage: 43,
        caption: { en: "Start the little friend: snap 2 black slope pieces onto a bumpy orange plate!", es: "Empieza el amiguito: encaja 2 piezas negras inclinadas sobre una placa naranja con textura." },
        parts: [
          { emoji: "⬛", count: 2, en: "Black slope piece 1×1", es: "Pieza negra inclinada 1×1" },
          { emoji: "🟠", count: 1, en: "Orange technic plate", es: "Placa naranja technic" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table, separate friend build", es: "Plana en la mesa, pieza amiguito aparte", detail: { en: "Build separately: snap both black slope pieces onto one end of the orange technic plate, side by side.", es: "Arma aparte: encaja las dos piezas negras inclinadas en un extremo de la placa naranja technic, una al lado de la otra." } }],
        help: { en: "Start building the little friend (the bug character) separately! Take the bumpy orange technic plate and snap both black slope pieces onto one end, side by side. The slanted sides create a wedge shape that becomes the bottom of the little friend.", es: "¡Empieza a armar el amiguito (el personaje insecto) por separado! Toma la placa naranja technic con textura y encaja las dos piezas negras inclinadas en un extremo, una al lado de la otra. Los lados inclinados crean una forma de cuña que se convierte en la parte inferior del amiguito." }
      },
      {
        icon: "Box",
        pdfPage: 44,
        caption: { en: "Add a black 2×2 block and a turquoise 2×2 block, building the little body!", es: "Agrega un bloque negro 2×2 y uno turquesa 2×2, ¡construyendo el cuerpecito!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" },
          { emoji: "🔵", count: 1, en: "Turquoise brick 2×2", es: "Ladrillo turquesa 2×2" }
        ],
        attach: [{ x: 50, y: 45, en: "On top of the slope pieces", es: "Encima de las piezas inclinadas", detail: { en: "Stack the black 2×2 brick, then the turquoise 2×2 brick on top, building up the little body.", es: "Apila el ladrillo negro 2×2, luego el turquesa 2×2 encima, construyendo el cuerpecito." } }],
        help: { en: "Take the black 2×2 brick and press it on top of the slope pieces. Then press the turquoise (blue-green) 2×2 brick on top of the black one. Now you have a colorful little stacked body for the friend character!", es: "Toma el ladrillo negro 2×2 y presiónalo encima de las piezas inclinadas. Luego presiona el ladrillo turquesa (azul-verde) 2×2 encima del negro. ¡Ahora tienes un cuerpecito apilado y colorido para el personaje amiguito!" }
      },
      {
        icon: "Box",
        pdfPage: 45,
        caption: { en: "Snap on 2 white bracket pieces with holes, these will hold the antennas!", es: "Encaja 2 piezas blancas con agujeros, ¡estas sostendrán las antenas!" },
        parts: [
          { emoji: "⬜", count: 2, en: "White bracket piece with holes", es: "Pieza blanca soporte con agujeros" }
        ],
        attach: [{ x: 50, y: 40, en: "On the sides of the turquoise body", es: "En los lados del cuerpo turquesa", detail: { en: "Press one white bracket piece onto each side of the turquoise 2×2 brick. The holes in the brackets face upward.", es: "Presiona una pieza blanca soporte en cada lado del ladrillo turquesa 2×2. Los agujeros de los soportes miran hacia arriba." } }],
        help: { en: "Find the 2 white bracket pieces, they look like little holders with side holes. Press one onto each side of the turquoise brick on top. The holes should face up or outward, the antennas will go into those holes in a later step!", es: "Busca las 2 piezas blancas soporte, parecen pequeños sostenes con agujeros laterales. Presiona una en cada lado del ladrillo turquesa encima. ¡Los agujeros deben mirar hacia arriba o afuera, las antenas irán en esos agujeros en un paso posterior!" }
      },
      {
        icon: "Circle",
        pdfPage: 46,
        caption: { en: "Press on 2 round white eye pieces, so your little friend can see!", es: "Presiona 2 ojitos blancos redondos, ¡para que tu amiguito pueda ver!" },
        parts: [
          { emoji: "⚪", count: 2, en: "Round white eye piece", es: "Pieza de ojo blanca redonda" }
        ],
        attach: [{ x: 50, y: 55, en: "Front of the little friend", es: "Frente del amiguito", detail: { en: "Press both round white eye pieces onto the front face of the little friend body.", es: "Presiona los dos ojitos blancos redondos en la cara frontal del cuerpo del amiguito." } }],
        help: { en: "Find the 2 round white eye pieces. Press one onto each side of the front of the little friend so it looks like a face with two big eyes. Now the little character can 'see'!", es: "Busca las 2 piezas de ojo blancas redondas. Presiona una en cada lado del frente del amiguito para que parezca una cara con dos ojos grandes. ¡Ahora el personajito puede 'ver'!" }
      },
      {
        icon: "Box",
        pdfPage: 47,
        caption: { en: "Add a small white plate and a curved turquoise piece for its back.", es: "Agrega una placita blanca y una pieza turquesa curva para su espalda." },
        parts: [
          { emoji: "⬜", count: 1, en: "White plate 1×2", es: "Placa blanca 1×2" },
          { emoji: "🔵", count: 1, en: "Curved turquoise piece", es: "Pieza turquesa curva" }
        ],
        attach: [{ x: 50, y: 35, en: "Top/back of the little friend", es: "Parte de arriba/espalda del amiguito", detail: { en: "Press the white plate onto the top of the body, then snap the curved turquoise piece onto the back for a smooth, rounded look.", es: "Presiona la placa blanca sobre la parte de arriba del cuerpo, luego encaja la pieza turquesa curva en la espalda para un aspecto redondeado." } }],
        help: { en: "Take the small white plate (1×2) and press it onto the top of the body. Then snap the curved turquoise piece onto the back/top of the little friend. It gives the character a smooth rounded back, like a little shell!", es: "Toma la placa blanca pequeña (1×2) y presiónala sobre la parte de arriba del cuerpo. Luego encaja la pieza turquesa curva en la espalda/parte de arriba del amiguito. ¡Le da al personaje una espalda redondeada suave, como un pequeño caparazón!" }
      },
      {
        icon: "Box",
        pdfPage: 48,
        caption: { en: "Flip your little friend over and snap on a small dark gray block underneath.", es: "Voltea a tu amiguito y encájale un bloque gris oscuro pequeño debajo." },
        parts: [
          { emoji: "⬛", count: 1, en: "Small dark gray brick with hole 1×2", es: "Ladrillo gris oscuro pequeño con agujero 1×2" }
        ],
        attach: [{ x: 50, y: 65, en: "Underside of the little friend", es: "Parte de abajo del amiguito", detail: { en: "Flip the little friend upside down and press the dark gray brick (with a side hole) onto the underside.", es: "Voltea el amiguito boca abajo y presiona el ladrillo gris oscuro (con agujero lateral) en la parte de abajo." } }],
        help: { en: "Carefully flip the little friend upside down so the bottom is facing up. Press the small dark gray brick (with a round side hole) onto the underside. This connection point is how the little friend will attach to the arm later. Then flip it right side up again.", es: "Voltea cuidadosamente al amiguito boca abajo para que el fondo quede hacia arriba. Presiona el ladrillo gris oscuro pequeño (con agujero lateral redondo) en la parte de abajo. Este punto de conexión es como el amiguito se unirá al brazo más adelante. Luego vuélvelo a poner de pie." }
      },
      {
        icon: "Box",
        pdfPage: 49,
        caption: { en: "Push in 2 little antennas, one on each side of the little friend!", es: "Empuja 2 antenitas, ¡una de cada lado del amiguito!" },
        parts: [
          { emoji: "📡", count: 2, en: "Antenna piece", es: "Pieza de antena" }
        ],
        attach: [
          { x: 25, y: 35, en: "Left side hole", es: "Agujero del lado izquierdo", detail: { en: "Push one antenna firmly into the round hole on the left white bracket piece.", es: "Empuja una antena firmemente en el agujero redondo de la pieza soporte blanca izquierda." } },
          { x: 75, y: 35, en: "Right side hole", es: "Agujero del lado derecho", detail: { en: "Push the second antenna into the right white bracket piece.", es: "Empuja la segunda antena en la pieza soporte blanca derecha." } }
        ],
        help: { en: "Find the 2 small antenna pieces (tiny sticks with a ball end). Push one into each of the white bracket holes on the sides of the little friend. They stick up like bug antennae! Now snap your little friend onto the end of the bendy arm above the frame, the Flower robot is complete! 🌸🎉", es: "Busca las 2 antenas pequeñas (palitos pequeños con bola al extremo). Empuja una en cada agujero de los soportes blancos en los lados del amiguito. ¡Sobresalen como antenas de insecto! Ahora encaja al amiguito en el extremo del brazo flexible sobre el armazón, ¡el robot Flor está completo! 🌸🎉" }
      }
    ]
  },
  {
    id: "helicopter",
    name: "LEGO Education WeDo 2.0 · Set 45300",
    model: { en: "Helicopter", es: "El Helicóptero" },
    color: "#2563EB",
    pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/3494b9c36_Helicopter_compressed.pdf",
    category: "wedo",
    steps: [
      {
        icon: "LayoutGrid",
        pdfPage: 3,
        caption: { en: "Snap 2 lime-green slopes onto a dark-gray 4×4 frame plate, the body base!", es: "Encaja 2 piezas inclinadas verde lima en una placa gris de 4×4 con centro abierto, ¡la base del cuerpo!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Dark-gray frame plate 4×4 (open middle)", es: "Placa gris 4×4 con centro abierto" },
          { emoji: "🟢", count: 2, en: "Lime-green slope brick", es: "Ladrillo verde lima inclinado" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the gray frame plate flat. Press one lime slope near each end of the frame, they look like two little ramps on a window frame.", es: "Pon la placa gris plana. Presiona una rampa verde cerca de cada extremo, parecen dos rampitas en el marco de una ventana." } }],
        help: { en: "Find the dark-gray frame plate (it has a hollow open center like a picture frame). Lay it flat. Find 2 small lime-green slope bricks, slanted on one side. Press one near each end of the frame. This is the very start of your helicopter's body!", es: "Busca la placa gris con el centro hueco como un marco de cuadro. Ponla plana. Busca 2 ladrillos verde lima inclinados. Presiona uno cerca de cada extremo. ¡Este es el comienzo del cuerpo del helicóptero!" }
      },
      {
        icon: "Minus",
        pdfPage: 4,
        caption: { en: "Add 2 green beams with holes, the holes are for rods later!", es: "Agrega 2 vigas verdes con agujeros, ¡los agujeros son para varillas más tarde!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }],
        attach: [{ x: 50, y: 50, en: "Along both sides", es: "A lo largo de ambos lados", detail: { en: "Press one green beam along each side of the base. The round holes face outward.", es: "Presiona una viga verde a lo largo de cada lado de la base. Los agujeros redondos miran hacia afuera." } }],
        help: { en: "Find the 2 green beams with round holes along them (4 bumps long). Press one along each long side of the base you made. The holes face out sideways, axles will go through them later.", es: "Busca las 2 vigas verdes con agujeros redondos (4 botones de largo). Presiona una a lo largo de cada lado largo de la base. Los agujeros miran de lado, más tarde pasarán ejes por ellos." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Press 2 green plates on top, making the floor bigger and stronger!", es: "Presiona 2 placas verdes encima, ¡haciendo el piso más grande y fuerte!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green plate 2×8", es: "Placa verde 2×8" }],
        attach: [{ x: 50, y: 55, en: "On top of the base", es: "Encima de la base", detail: { en: "Press both green plates flat on top of the base, like laying two floor tiles.", es: "Presiona las dos placas verdes planas encima de la base, como poner dos losetas." } }],
        help: { en: "Take the 2 green plates (2 bumps wide, 8 bumps long). Press them on top of the base pieces side by side to form a solid floor. Push firmly until they click.", es: "Toma las 2 placas verdes (2 botones de ancho, 8 de largo). Presiónelas encima de las piezas de la base una al lado de la otra para formar un piso sólido. Empuja firmemente hasta que encajen." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 6,
        caption: { en: "Add 2 lime-green slopes and 1 orange plate, the orange plate ties the middle together!", es: "Agrega 2 rampas verde lima y 1 placa naranja, ¡la placa naranja une el centro!" },
        parts: [
          { emoji: "🟢", count: 2, en: "Lime-green slope brick 1×2", es: "Ladrillo verde lima inclinado 1×2" },
          { emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 50, en: "Slopes at ends, orange plate in center", es: "Rampas en los extremos, placa naranja en el centro", detail: { en: "Press 2 lime slopes at the ends of the base and the flat orange plate in the middle like a belt.", es: "Presiona 2 rampas verdes en los extremos y la placa naranja plana en el medio como un cinturón." } }],
        help: { en: "Add 2 more lime-green slope bricks (same as Step 1) at the ends of the base. Then press the flat orange 2×4 plate in the middle, it ties everything together like a belt!", es: "Agrega 2 ladrillos inclinados verde lima más (igual que el Paso 1) en los extremos de la base. Luego presiona la placa naranja plana 2×4 en el medio, ¡une todo como un cinturón!" }
      },
      {
        icon: "Circle",
        pdfPage: 7,
        caption: { en: "Add 4 more lime slopes to round off the front and back, smoothing the body shape!", es: "Agrega 4 rampas verde lima más para redondear el frente y la parte de atrás, ¡suavizando la forma!" },
        parts: [
          { emoji: "🟢", count: 2, en: "Lime-green slope 1×2", es: "Rampa verde lima 1×2" },
          { emoji: "🟢", count: 2, en: "Lime-green slope 1×3 (wedge)", es: "Rampa verde lima 1×3 (cuña)" }
        ],
        attach: [{ x: 50, y: 50, en: "All four corners of the body", es: "Las cuatro esquinas del cuerpo", detail: { en: "Press slope pieces at the front and back corners to smooth the nose and tail of the helicopter body.", es: "Presiona piezas inclinadas en las esquinas del frente y de atrás para suavizar la nariz y la cola del cuerpo del helicóptero." } }],
        help: { en: "Press 2 lime-green slope bricks and 2 longer lime wedge pieces at the front and back of the body to give it a smooth, rounded helicopter shape.", es: "Presiona 2 ladrillos inclinados verde lima y 2 piezas en cuña verde lima más largas en el frente y en la parte de atrás del cuerpo para darle una forma suave y redondeada de helicóptero." }
      },
      {
        icon: "Cpu",
        pdfPage: 8,
        caption: { en: "Press the Smart Hub onto the body, the green button faces up!", es: "Presiona el Smart Hub sobre el cuerpo, ¡el botón verde queda hacia arriba!" },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white brick)", es: "Smart Hub (bloque blanco grande)" }],
        attach: [{ x: 50, y: 40, en: "On top of the body", es: "Encima del cuerpo", detail: { en: "Lower the Smart Hub down onto the body with the green button facing up.", es: "Baja el Smart Hub sobre el cuerpo con el botón verde hacia arriba." } }],
        help: { en: "Find the big white-gray brick with a green button on top, that is the Smart Hub, the helicopter's brain! Press it firmly onto the body. The green button faces up so you can press it later.", es: "Busca el ladrillo blanco y gris grande con botón verde encima, ¡ese es el Smart Hub, el cerebro del helicóptero! Presiónalo firmemente sobre el cuerpo. El botón verde queda hacia arriba." }
      },
      {
        icon: "Cpu",
        pdfPage: 9,
        caption: { en: "Add the motor next to the Hub and plug its black cable in, the motor spins everything!", es: "Agrega el motor junto al Hub y conecta su cable negro, ¡el motor hace girar todo!" },
        parts: [{ emoji: "⚙️", count: 1, en: "Motor (with cable)", es: "Motor (con cable)" }],
        attach: [{ x: 40, y: 55, en: "Next to the Smart Hub", es: "Junto al Smart Hub", detail: { en: "Press the motor onto the body beside the Smart Hub, then push the cable connector into a port on the Hub.", es: "Presiona el motor sobre el cuerpo junto al Smart Hub, luego empuja el conector del cable en un puerto del Hub." } }],
        help: { en: "Find the gray motor with the coiled black cable. Press it onto the body beside the Smart Hub. Then push the cable's connector into any port on the side of the Smart Hub, it only fits one way!", es: "Busca el motor gris con el cable negro enrollado. Presiónalo sobre el cuerpo junto al Smart Hub. Luego empuja el conector del cable en cualquier puerto del Smart Hub, ¡solo entra de una manera!" }
      },
      {
        icon: "Circle",
        pdfPage: 10,
        caption: { en: "Push a red connector into the motor and add a green round plate, like putting a cap on a bottle!", es: "Empuja un conector rojo en el motor y agrega una placa redonda verde, ¡como poner una tapa!" },
        parts: [
          { emoji: "🔴", count: 1, en: "Short red connector", es: "Conector rojo corto" },
          { emoji: "🟢", count: 1, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" }
        ],
        attach: [{ x: 45, y: 55, en: "Motor shaft", es: "Eje del motor", detail: { en: "Push the red connector into the motor's round shaft hole. Then add the green round plate on the shaft on top of the connector.", es: "Empuja el conector rojo en el agujero redondo del eje del motor. Luego agrega la placa redonda verde en el eje encima del conector." } }],
        help: { en: "Push the short red connector into the round hole at the front of the motor. Then add the green 2×2 round plate on the shaft, like putting a cap on a bottle. These parts help connect the spin to the rotor later.", es: "Empuja el conector rojo corto en el agujero redondo en la parte frontal del motor. Luego agrega la placa redonda verde 2×2 en el eje, como poner una tapa a una botella. Estas piezas ayudan a conectar el giro al rotor más tarde." }
      },
      {
        icon: "Circle",
        pdfPage: 11,
        caption: { en: "Slide 2 yellow rings on, they hold things in place like little washers!", es: "Desliza 2 anillos amarillos, ¡sujetan las piezas como arandelas pequeñas!" },
        parts: [{ emoji: "🟡", count: 2, en: "Yellow ring / bushing", es: "Anillo amarillo / buje" }],
        attach: [{ x: 50, y: 55, en: "Onto the motor shaft", es: "En el eje del motor", detail: { en: "Slide both yellow rings onto the motor shaft to lock the green plate in place.", es: "Desliza los dos anillos amarillos en el eje del motor para sujetar la placa verde en su lugar." } }],
        help: { en: "Take the 2 small yellow ring pieces. Slide them onto the shaft next to the green plate. They act like washers on a bolt, stopping everything from sliding off!", es: "Toma las 2 piezas de anillo amarillo pequeñas. Deslízalas en el eje junto a la placa verde. ¡Actúan como arandelas en un tornillo, evitan que todo se salga!" }
      },
      {
        icon: "Minus",
        pdfPage: 12,
        caption: { en: "Add 2 more green beams with holes, building the frame up like walls of a house!", es: "Agrega 2 vigas verdes más con agujeros, ¡levantando el armazón como paredes!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green beam with holes 1×4", es: "Viga verde con agujeros 1×4" }],
        attach: [{ x: 50, y: 45, en: "Along both sides again", es: "A lo largo de ambos lados otra vez", detail: { en: "Press one green beam along each side on top of the existing pieces, raising the walls.", es: "Presiona una viga verde a lo largo de cada lado encima de las piezas existentes, levantando las paredes." } }],
        help: { en: "Add 2 more green beams with holes (same as Step 2), one on each side, stacking them up on top of the previous ones. This builds the frame higher, like the walls of a house.", es: "Agrega 2 vigas verdes más con agujeros (igual que el Paso 2), una a cada lado, apilándolas encima de las anteriores. Esto levanta el armazón más alto, como las paredes de una casa." }
      },
      {
        icon: "Minus",
        pdfPage: 13,
        caption: { en: "Build the rotor shaft: push a gray connector onto a long black rod (length 7)!", es: "Arma el eje del rotor: ¡empuja un conector gris en una varilla negra larga (tamaño 7)!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Long black axle rod, length 7", es: "Varilla eje negra larga, tamaño 7" },
          { emoji: "⬜", count: 1, en: "Gray axle connector", es: "Conector gris para ejes" }
        ],
        attach: [{ x: 80, y: 50, en: "One end of the long rod", es: "Una punta de la varilla larga", detail: { en: "Push the gray connector firmly onto one end of the long black rod. This rod will spin the top rotor.", es: "Empuja el conector gris firmemente en una punta de la varilla negra larga. Esta varilla hará girar el rotor de arriba." } }],
        help: { en: "Find the long black rod, it is marked with a circled '7' in the booklet, meaning it is axle size 7. Push the gray connector onto one end of it. This rod becomes the helicopter's main rotor shaft!", es: "Busca la varilla negra larga, está marcada con un '7' en círculo en el libro, significa tamaño 7. Empuja el conector gris en una punta. ¡Esta varilla se convierte en el eje principal del rotor del helicóptero!" }
      },
      {
        icon: "Circle",
        pdfPage: 14,
        caption: { en: "Push a red connector onto the other end of the rod to lock the parts together.", es: "Empuja un conector rojo en la otra punta de la varilla para fijar las piezas." },
        parts: [{ emoji: "🔴", count: 1, en: "Short red connector", es: "Conector rojo corto" }],
        attach: [{ x: 20, y: 50, en: "Other end of the long rod", es: "El otro extremo de la varilla larga", detail: { en: "Push the red connector onto the other end of the rod, locking the connector in place.", es: "Empuja el conector rojo en el otro extremo de la varilla, fijando el conector en su lugar." } }],
        help: { en: "Push the short red connector onto the other end of the long rod. This locks the pieces together so nothing slides off the shaft.", es: "Empuja el conector rojo corto en el otro extremo de la varilla larga. Esto fija las piezas para que nada se deslice del eje." }
      },
      {
        icon: "Circle",
        pdfPage: 15,
        caption: { en: "Slide a gray gear onto the rod, its teeth grab another gear to pass the spin along!", es: "Desliza un engranaje gris en la varilla, ¡sus dientes agarran otro engranaje y pasan el giro!" },
        parts: [{ emoji: "⚙️", count: 1, en: "Gray gear", es: "Engranaje gris" }],
        attach: [{ x: 55, y: 50, en: "Onto the rod near the connector", es: "En la varilla cerca del conector", detail: { en: "Slide the gray gear onto the rod so its teeth face out. It will mesh with another gear on the motor.", es: "Desliza el engranaje gris en la varilla para que sus dientes queden hacia afuera. Se engranará con otro engranaje del motor." } }],
        help: { en: "Find the small gray gear. Slide it onto the rod. Its teeth will lock into another gear, when the motor spins, the gears connect to spin the rotor shaft too!", es: "Busca el engranaje gris pequeño. Deslízalo en la varilla. Sus dientes se engranarán con otro engranaje, ¡cuando el motor gire, los engranajes conectarán y harán girar el eje del rotor también!" }
      },
      {
        icon: "Zap",
        pdfPage: 16,
        caption: { en: "Set the whole rod with its gear into the top of the motor, no new pieces, just place it!", es: "Coloca toda la varilla con su engranaje en la parte de arriba del motor, ¡sin piezas nuevas!" },
        parts: [],
        attach: [{ x: 50, y: 40, en: "Into the motor's top gear slot", es: "En la ranura del engranaje del motor", detail: { en: "Follow the arrow and set the rod assembly into the top of the motor body so the gears mesh.", es: "Sigue la flecha y coloca el ensamblaje de la varilla en la parte de arriba del cuerpo del motor para que los engranajes se engranen." } }],
        help: { en: "No new pieces! Take the rod you just built with the gear on it. Following the arrow in the diagram, set it into the slot on top of the motor so the gear teeth line up and mesh. Give it a gentle spin to confirm it turns freely!", es: "¡Sin piezas nuevas! Toma la varilla que acabas de armar con el engranaje. Siguiendo la flecha, colócala en la ranura encima del motor para que los dientes del engranaje se alineen y se engranen. ¡Dale un giro suave para confirmar que gira libremente!" }
      },
      {
        icon: "Minus",
        pdfPage: 17,
        caption: { en: "Build the string reel: a spool with a string, like a tiny fishing line for lifting things!", es: "Arma el carrete de hilo: un carrete con hilo, ¡como una pequeña caña de pescar para levantar cosas!" },
        parts: [
          { emoji: "⬜", count: 1, en: "Gray string reel (spool)", es: "Carrete de hilo gris" },
          { emoji: "🪡", count: 1, en: "String", es: "Hilo" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table, separate build", es: "Plana en la mesa, pieza aparte", detail: { en: "This is a separate assembly: the gray spool with the string already wound around it.", es: "Este es un ensamblaje aparte: el carrete gris con el hilo ya enrollado alrededor." } }],
        help: { en: "The gray spool already has string wound around it, that is the string reel! It works like a tiny fishing reel for the helicopter to lift its cargo. Just note how the string hangs off it.", es: "El carrete gris ya tiene el hilo enrollado alrededor, ¡ese es el carrete de hilo! Funciona como un pequeño carrete de pesca para que el helicóptero levante su carga. Solo observa cómo cuelga el hilo." }
      },
      {
        icon: "Minus",
        pdfPage: 18,
        caption: { en: "Tie the string to a small gray plate with a hole, this is the hook that grabs the cargo!", es: "Ata el hilo a una placa gris pequeña con agujero, ¡este es el gancho que agarra la carga!" },
        parts: [{ emoji: "⬜", count: 1, en: "Gray plate 2×3 with hole", es: "Placa gris 2×3 con agujero" }],
        attach: [{ x: 80, y: 60, en: "End of the string", es: "Punta del hilo", detail: { en: "Tie the free end of the string through the hole in the small gray plate. This becomes the hook.", es: "Ata el extremo libre del hilo por el agujero en la placa gris pequeña. Este se convierte en el gancho." } }],
        help: { en: "Take the small gray plate with a hole at one end. Tie the free end of the string from the spool through that hole. This plate is the cargo hook, the helicopter will lower it to pick things up!", es: "Toma la placa gris pequeña con agujero en un extremo. Ata el extremo libre del hilo del carrete por ese agujero. ¡Esta placa es el gancho de carga, el helicóptero la bajará para recoger cosas!" }
      },
      {
        icon: "Circle",
        pdfPage: 19,
        caption: { en: "Slide the string reel onto its place on the body, follow the arrow!", es: "Desliza el carrete de hilo en su lugar en el cuerpo, ¡sigue la flecha!" },
        parts: [],
        attach: [{ x: 50, y: 55, en: "Where the arrow points on the body", es: "Donde señala la flecha en el cuerpo", detail: { en: "Slide the string reel assembly into its place on the side of the body following the red and black arrows.", es: "Desliza el ensamblaje del carrete de hilo en su lugar en el costado del cuerpo siguiendo las flechas roja y negra." } }],
        help: { en: "No new pieces! Slide the string reel (spool with cargo hook) into its slot on the body following the diagram arrows. It should sit on the axle and turn freely so the string can wind up and down.", es: "¡Sin piezas nuevas! Desliza el carrete de hilo (carrete con gancho de carga) en su ranura en el cuerpo siguiendo las flechas del diagrama. Debe quedar en el eje y girar libremente para que el hilo pueda enrollarse y desenrollarse." }
      },
      {
        icon: "Circle",
        pdfPage: 20,
        caption: { en: "Add a gray ring to keep the reel from sliding off, like a stopper on a rolling pin!", es: "Agrega un anillo gris para que el carrete no se salga, ¡como un tope en un rodillo!" },
        parts: [{ emoji: "⬜", count: 1, en: "Gray ring / stopper", es: "Anillo gris / tope" }],
        attach: [{ x: 35, y: 55, en: "Beside the string reel", es: "Junto al carrete de hilo", detail: { en: "Press the gray ring onto the axle next to the string reel to act as a stopper so the reel cannot slide off.", es: "Presiona el anillo gris en el eje junto al carrete de hilo para actuar como tope y que el carrete no se salga." } }],
        help: { en: "Press the small gray ring onto the axle right next to the string reel. It acts like a stopper on a rolling pin, keeping the reel locked in place on the body.", es: "Presiona el anillo gris pequeño en el eje justo junto al carrete de hilo. Actúa como un tope en un rodillo, manteniendo el carrete fijo en el cuerpo." }
      },
      {
        icon: "Circle",
        pdfPage: 21,
        caption: { en: "Push 2 light-blue pulley wheels onto the side rods, like two little spinning fans!", es: "Empuja 2 ruedas de polea azul claro en las varillas del costado, ¡como dos ventiladores!" },
        parts: [{ emoji: "🩵", count: 2, en: "Light-blue pulley wheel", es: "Rueda de polea azul claro" }],
        attach: [
          { x: 20, y: 55, en: "Left side rod", es: "Varilla del lado izquierdo", detail: { en: "Push one blue pulley wheel onto the left side rod.", es: "Empuja una rueda de polea azul en la varilla del lado izquierdo." } },
          { x: 80, y: 55, en: "Right side rod", es: "Varilla del lado derecho", detail: { en: "Push the second blue pulley wheel onto the right side rod.", es: "Empuja la segunda rueda de polea azul en la varilla del lado derecho." } }
        ],
        help: { en: "Find the 2 clear light-blue pulley wheels. Push one firmly onto each side rod sticking out of the helicopter body. They spin freely and will be connected to the belt in a later step.", es: "Busca las 2 ruedas de polea azul claro transparentes. Empuja una firmemente en cada varilla lateral que sobresale del cuerpo del helicóptero. Giran libremente y se conectarán a la banda en un paso posterior." }
      },
      {
        icon: "Box",
        pdfPage: 22,
        caption: { en: "Add 4 orange slope pieces to shape the middle, like four little rooftops in a row!", es: "Agrega 4 piezas naranjas inclinadas para dar forma al centro, ¡como cuatro tejaditos en fila!" },
        parts: [{ emoji: "🟠", count: 4, en: "Orange slope brick 1×2", es: "Ladrillo naranja inclinado 1×2" }],
        attach: [{ x: 50, y: 45, en: "Middle section of the body", es: "Sección central del cuerpo", detail: { en: "Press the 4 orange slope bricks in the middle section of the body, arranged in a row like little rooftops.", es: "Presiona los 4 ladrillos naranjas inclinados en la sección central del cuerpo, dispuestos en fila como tejaditos." } }],
        help: { en: "Take the 4 orange slope bricks and press them in the middle of the body, in a row. Their slanted tops shape the helicopter's cabin area, like four little rooftops!", es: "Toma los 4 ladrillos naranjas inclinados y presiónelos en el centro del cuerpo, en fila. Sus partes superiores inclinadas dan forma al área de la cabina del helicóptero, ¡como cuatro tejaditos!" }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 23,
        caption: { en: "Press a flat orange plate on top to cover and connect the slopes, like a lid on a box!", es: "Presiona una placa naranja plana encima para cubrir y unir las rampas, ¡como tapa de una caja!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }],
        attach: [{ x: 50, y: 40, en: "On top of the orange slopes", es: "Encima de las rampas naranjas", detail: { en: "Press the flat orange plate on top of the 4 slope pieces to cover them like a lid.", es: "Presiona la placa naranja plana encima de las 4 piezas inclinadas para cubrirlas como una tapa." } }],
        help: { en: "Take the flat orange 2×4 plate. Press it on top of the 4 orange slopes to cover them and lock them together. It fits like a lid on a box, making the cabin roof solid!", es: "Toma la placa naranja plana 2×4. Presiónala encima de las 4 rampas naranjas para cubrirlas y unirlas. Encaja como la tapa de una caja, ¡haciendo el techo de la cabina sólido!" }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 24,
        caption: { en: "Lay 2 long white plates along the sides, they stretch out like two long white stripes!", es: "Coloca 2 placas blancas largas a los lados, ¡se estiran como dos franjas blancas largas!" },
        parts: [{ emoji: "⬜", count: 2, en: "White plate 1×12", es: "Placa blanca 1×12" }],
        attach: [
          { x: 50, y: 30, en: "Top side of the body", es: "Lado superior del cuerpo", detail: { en: "Press one long white plate along each long side of the body on top.", es: "Presiona una placa blanca larga a lo largo de cada lado largo del cuerpo en la parte de arriba." } },
          { x: 50, y: 65, en: "Bottom side of the body", es: "Lado inferior del cuerpo", detail: { en: "Press the second white plate along the other side.", es: "Presiona la segunda placa blanca a lo largo del otro lado." } }
        ],
        help: { en: "Lay the 2 long white plates (1×12, very long!) along each side of the body. They stretch the full length and make the sides look sleek and finished.", es: "Coloca las 2 placas blancas largas (1×12, ¡muy largas!) a lo largo de cada lado del cuerpo. Se extienden por toda la longitud y hacen que los lados parezcan elegantes y terminados." }
      },
      {
        icon: "Box",
        pdfPage: 25,
        caption: { en: "Add 2 light-blue bricks near the top, like two little blue blocks on a shelf!", es: "Agrega 2 ladrillos azul claro cerca de arriba, ¡como dos bloques azules en un estante!" },
        parts: [{ emoji: "🩵", count: 2, en: "Light-blue brick 1×2", es: "Ladrillo azul claro 1×2" }],
        attach: [{ x: 50, y: 35, en: "Near the top of the body", es: "Cerca de la parte de arriba del cuerpo", detail: { en: "Press the 2 light-blue bricks near the top of the helicopter body, side by side.", es: "Presiona los 2 ladrillos azul claro cerca de la parte de arriba del cuerpo del helicóptero, uno al lado del otro." } }],
        help: { en: "Find the 2 light-blue small bricks (1×2). Press them near the top of the helicopter body, side by side. They add a cool pop of color on the cabin area!", es: "Busca los 2 ladrillos azul claro pequeños (1×2). Presiónelos cerca de la parte de arriba del cuerpo del helicóptero, uno al lado del otro. ¡Agregan un toque de color genial en el área de la cabina!" }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 26,
        caption: { en: "Press another flat orange plate on to keep everything tight, like taping a package shut!", es: "Presiona otra placa naranja plana para mantener todo firme, ¡como cerrar un paquete!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }],
        attach: [{ x: 50, y: 40, en: "On top, beside the first orange plate", es: "Encima, junto a la primera placa naranja", detail: { en: "Press the second flat orange plate on top to lock the blue bricks and other pieces together.", es: "Presiona la segunda placa naranja plana encima para fijar los ladrillos azules y otras piezas juntas." } }],
        help: { en: "Press another flat orange 2×4 plate on top to hold everything tight. It locks the blue bricks in and keeps the whole top section solid.", es: "Presiona otra placa naranja plana 2×4 encima para mantener todo firme. Fija los ladrillos azules y mantiene toda la sección superior sólida." }
      },
      {
        icon: "Circle",
        pdfPage: 27,
        caption: { en: "Loop 2 yellow belts around the pulley wheels, they work like rubber bands on a spinning top!", es: "Pasa 2 bandas amarillas por las ruedas de polea, ¡funcionan como ligas en un trompo!" },
        parts: [{ emoji: "🟡", count: 2, en: "Yellow belt (rubber band)", es: "Banda amarilla (liga de goma)" }],
        attach: [{ x: 50, y: 55, en: "Around both pulley wheels", es: "Alrededor de las dos ruedas de polea", detail: { en: "Stretch each yellow belt around the light-blue pulley wheels on the sides of the body.", es: "Estira cada banda amarilla alrededor de las ruedas de polea azul claro en los lados del cuerpo." } }],
        help: { en: "Take the 2 stretchy yellow belts. Loop one around each of the light-blue pulley wheels. They should be taut like little rubber bands. When the motor spins, the belts transfer the rotation!", es: "Toma las 2 bandas amarillas elásticas. Pasa una alrededor de cada rueda de polea azul claro. Deben estar tensas como ligas. ¡Cuando el motor gire, las bandas transfieren la rotación!" }
      },
      {
        icon: "Box",
        pdfPage: 28,
        caption: { en: "Add 2 clear light-blue curved pieces for windows and 2 orange slopes, little windshields!", es: "Agrega 2 piezas curvas azules transparentes para ventanas y 2 rampas naranjas, ¡parabrisas!" },
        parts: [
          { emoji: "🩵", count: 2, en: "Clear light-blue curved slope 1×4", es: "Pieza curva azul claro 1×4 transparente" },
          { emoji: "🟠", count: 2, en: "Orange slope brick", es: "Ladrillo naranja inclinado" }
        ],
        attach: [{ x: 50, y: 40, en: "Front/top of the cabin area", es: "Frente/parte de arriba del área de la cabina", detail: { en: "Press the clear curved pieces on the front and the orange slopes on the sides of the cabin.", es: "Presiona las piezas curvas transparentes en el frente y las rampas naranjas en los lados de la cabina." } }],
        help: { en: "Add the 2 clear curved light-blue pieces (windshields) and the 2 orange slope pieces to the cabin area. The clear pieces look like little windshields on a real helicopter!", es: "Agrega las 2 piezas curvas azules claras (parabrisas) y las 2 piezas naranjas inclinadas al área de la cabina. ¡Las piezas transparentes parecen pequeños parabrisas de un helicóptero real!" }
      },
      {
        icon: "Circle",
        pdfPage: 29,
        caption: { en: "Place the large black gear flat on top and a light-blue tile beside it, the big gear spins the rotor blades!", es: "Coloca el engranaje negro grande plano encima y un azulejo azul claro al lado, ¡el engranaje grande hará girar las aspas!" },
        parts: [
          { emoji: "⚙️", count: 1, en: "Large black gear (crown gear)", es: "Engranaje negro grande (corona)" },
          { emoji: "🩵", count: 1, en: "Light-blue tile 1×2", es: "Azulejo azul claro 1×2" }
        ],
        attach: [{ x: 50, y: 35, en: "On top of the body center", es: "Encima del centro del cuerpo", detail: { en: "Lay the large black gear flat on top of the body so it can spin. Place the light-blue tile beside it.", es: "Coloca el engranaje negro grande plano encima del cuerpo para que pueda girar. Coloca el azulejo azul claro al lado." } }],
        help: { en: "Find the large black gear (it looks like a crown or flat ring with teeth). Lay it flat on top of the helicopter body in the center, it will spin and drive the rotor blades later. Place the small light-blue tile next to it.", es: "Busca el engranaje negro grande (parece una corona o anillo plano con dientes). Ponlo plano encima del cuerpo del helicóptero en el centro, girará y moverá las aspas del rotor más tarde. Coloca el azulejo azul claro pequeño junto a él." }
      },
      {
        icon: "Minus",
        pdfPage: 30,
        caption: { en: "Start the tail: push 2 black pins into a long green beam, the long tail boom!", es: "Empieza la cola: empuja 2 pasadores negros en una viga verde larga, ¡el brazo largo de la cola!" },
        parts: [
          { emoji: "🟢", count: 1, en: "Green beam with holes 1×16", es: "Viga verde con agujeros 1×16" },
          { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" }
        ],
        attach: [{ x: 50, y: 50, en: "At both ends of the beam", es: "En ambos extremos de la viga", detail: { en: "Push one black pin into each end of the long green beam so they poke out the ends.", es: "Empuja un pasador negro en cada extremo de la viga verde larga para que sobresalga." } }],
        help: { en: "Find the very long green beam (1×16, the longest one!). Push one black connector pin into each end of it. This is the long tail boom of the helicopter, the part that sticks out at the back!", es: "Busca la viga verde muy larga (1×16, ¡la más larga!). Empuja un pasador conector negro en cada extremo. ¡Este es el largo brazo de la cola del helicóptero, la parte que sale por la parte de atrás!" }
      },
      {
        icon: "Minus",
        pdfPage: 31,
        caption: { en: "Add a second long green beam beside the first, strong and stiff like a double ruler!", es: "Agrega una segunda viga verde larga junto a la primera, ¡firme y rígida como una regla doble!" },
        parts: [{ emoji: "🟢", count: 1, en: "Green beam with holes 1×16", es: "Viga verde con agujeros 1×16" }],
        attach: [{ x: 50, y: 50, en: "Parallel to the first beam", es: "Paralela a la primera viga", detail: { en: "Press the second 1×16 beam beside the first, running parallel, to make the tail double-strong.", es: "Presiona la segunda viga 1×16 junto a la primera, paralela, para que la cola sea doblemente fuerte." } }],
        help: { en: "Take the second long green beam (also 1×16). Press it right beside the first beam, running parallel. The two beams together make the tail very strong and stiff, like using two rulers instead of one.", es: "Toma la segunda viga verde larga (también 1×16). Presiónala justo junto a la primera, paralela. Las dos vigas juntas hacen que la cola sea muy fuerte y rígida, como usar dos reglas en lugar de una." }
      },
      {
        icon: "Box",
        pdfPage: 32,
        caption: { en: "Add a tan pin and 2 orange slopes at the tail tip, shaping the very end of the tail!", es: "Agrega un pasador canela y 2 rampas naranjas en la punta de la cola, ¡dando forma al final!" },
        parts: [
          { emoji: "🟤", count: 1, en: "Tan connector pin", es: "Pasador conector color canela" },
          { emoji: "🟠", count: 2, en: "Orange slope brick", es: "Ladrillo naranja inclinado" }
        ],
        attach: [{ x: 85, y: 50, en: "Tip of the tail beam", es: "Punta de la viga de la cola", detail: { en: "Push the tan pin into the end hole of the tail and press the 2 orange slopes to shape the tail tip.", es: "Empuja el pasador canela en el agujero del extremo de la cola y presiona las 2 rampas naranjas para dar forma a la punta." } }],
        help: { en: "At the far tip of the tail boom, push the tan-colored connector pin into the end hole. Then press the 2 orange slope bricks to form a nice tapered tip at the very end of the tail.", es: "En la punta más lejana del brazo de la cola, empuja el pasador de color canela en el agujero del extremo. Luego presiona los 2 ladrillos naranjas inclinados para formar una punta cónica bonita al final de la cola." }
      },
      {
        icon: "Circle",
        pdfPage: 33,
        caption: { en: "Put a black tire around a light-blue wheel and set it at the tail, the little tail rotor!", es: "Pon una llanta negra alrededor de una rueda azul y colócala en la cola, ¡el pequeño rotor de cola!" },
        parts: [
          { emoji: "🖤", count: 1, en: "Black rubber tire", es: "Llanta de goma negra" },
          { emoji: "🩵", count: 1, en: "Light-blue pulley wheel", es: "Rueda de polea azul claro" }
        ],
        attach: [{ x: 85, y: 50, en: "At the tail tip", es: "En la punta de la cola", detail: { en: "Stretch the black tire around the blue pulley wheel, then push this assembly onto the tan pin at the tail tip.", es: "Estira la llanta negra alrededor de la rueda de polea azul, luego empuja este ensamblaje en el pasador canela de la punta de la cola." } }],
        help: { en: "Stretch the black rubber tire around the light-blue pulley wheel, it snaps into the tire's groove. Then push this tire-and-wheel assembly onto the tan pin at the very tip of the tail. This is the helicopter's tail rotor!", es: "Estira la llanta de goma negra alrededor de la rueda de polea azul claro, encaja en la ranura de la llanta. Luego empuja este ensamblaje de llanta y rueda en el pasador canela en la punta de la cola. ¡Este es el rotor de cola del helicóptero!" }
      },
      {
        icon: "Zap",
        pdfPage: 34,
        caption: { en: "Attach the whole tail boom onto the body, follow the arrow! No new pieces.", es: "Une todo el brazo de la cola al cuerpo, ¡sigue la flecha! Sin piezas nuevas." },
        parts: [],
        attach: [{ x: 65, y: 45, en: "Right side of the body, where the arrow points", es: "Lado derecho del cuerpo, donde señala la flecha", detail: { en: "Clip the tail boom pins into the holes on the right side of the helicopter body.", es: "Encaja los pasadores del brazo de cola en los agujeros del lado derecho del cuerpo del helicóptero." } }],
        help: { en: "No new pieces! Take the whole tail boom you just built. Clip the black connector pins at the base end into the holes on the right side of the helicopter body. The tail sticks out behind the helicopter!", es: "¡Sin piezas nuevas! Toma todo el brazo de cola que acabas de armar. Encaja los pasadores negros en el extremo base en los agujeros del lado derecho del cuerpo del helicóptero. ¡La cola sale por la parte de atrás!" }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 35,
        caption: { en: "Lay 2 long smooth gray bars along the top of the tail, flat and shiny like metal rails!", es: "Coloca 2 barras grises lisas largas encima de la cola, ¡planas y brillantes como rieles de metal!" },
        parts: [{ emoji: "⬜", count: 2, en: "Long smooth gray bar ~1×8", es: "Barra gris lisa larga ~1×8" }],
        attach: [{ x: 50, y: 30, en: "Along the top of the tail boom", es: "A lo largo de la parte de arriba del brazo de la cola", detail: { en: "Press the 2 gray smooth bars along the top of the tail boom lengthwise.", es: "Presiona las 2 barras grises lisas a lo largo de la parte de arriba del brazo de la cola." } }],
        help: { en: "Take the 2 long smooth gray bars (no bumps, about half the length of the tail). Lay them along the top of the tail boom. They look like two shiny metal rails on top of the tail!", es: "Toma las 2 barras grises lisas largas (sin botones, aproximadamente la mitad del largo de la cola). Colócalas a lo largo de la parte de arriba del brazo de la cola. ¡Parecen dos rieles de metal brillantes encima de la cola!" }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 36,
        caption: { en: "Press a flat orange plate to hold the gray bars down, like a clip over papers!", es: "Presiona una placa naranja plana para sujetar las barras grises, ¡como un clip sobre papeles!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{ x: 50, y: 35, en: "Over the gray bars on the tail", es: "Sobre las barras grises en la cola", detail: { en: "Press the orange 2×6 plate flat over the gray bars to hold them down onto the tail.", es: "Presiona la placa naranja 2×6 plana sobre las barras grises para sujetarlas encima de la cola." } }],
        help: { en: "Press the orange 2×6 plate on top of the gray bars on the tail. It holds them down like a clip holding papers together, locking the bars in place.", es: "Presiona la placa naranja 2×6 encima de las barras grises en la cola. Las sujeta como un clip que sostiene papeles, fijando las barras en su lugar." }
      },
      {
        icon: "Box",
        pdfPage: 37,
        caption: { en: "Add an orange brick under the belly, building up the landing area like a little foot!", es: "Agrega un ladrillo naranja debajo de la panza, ¡formando la zona de aterrizaje como un piecito!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange brick 2×4", es: "Ladrillo naranja 2×4" }],
        attach: [{ x: 50, y: 70, en: "Under the helicopter body (belly)", es: "Debajo del cuerpo del helicóptero (panza)", detail: { en: "Press the orange 2×4 brick under the belly of the helicopter to form the landing base.", es: "Presiona el ladrillo naranja 2×4 debajo de la panza del helicóptero para formar la base de aterrizaje." } }],
        help: { en: "Press the orange 2×4 brick underneath the helicopter body. It creates a raised landing area under the belly, like the helicopter's foot to help it stand on the ground.", es: "Presiona el ladrillo naranja 2×4 debajo del cuerpo del helicóptero. Crea un área de aterrizaje elevada debajo de la panza, como el piecito del helicóptero para ayudarlo a pararse en el suelo." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 38,
        caption: { en: "Build the landing skids: 4 white plates under 4 lime-green curved pieces, two smooth skis!", es: "Arma los patines de aterrizaje: 4 placas blancas bajo 4 curvas verdes, ¡dos esquís suaves!" },
        parts: [
          { emoji: "⬜", count: 4, en: "White plate 1×2", es: "Placa blanca 1×2" },
          { emoji: "🟢", count: 4, en: "Lime-green curved slope 1×4", es: "Pieza verde lima curva 1×4" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table, separate skid build", es: "Plana en la mesa, pieza patín aparte", detail: { en: "Snap 4 white plates under 4 curved lime-green pieces to make two landing skis. Make 2 pairs.", es: "Encaja 4 placas blancas bajo 4 piezas verdes curvas para hacer dos esquís de aterrizaje. Haz 2 pares." } }],
        help: { en: "Snap 4 small white plates (1×2) under 4 lime-green curved pieces (1×4). Each pair of 2 white + 2 curved pieces makes one smooth landing ski. You need to make 2 skis total!", es: "Encaja 4 placas blancas pequeñas (1×2) bajo 4 piezas verdes lima curvas (1×4). Cada par de 2 blancas + 2 curvas hace un esquí de aterrizaje suave. ¡Necesitas hacer 2 esquís en total!" }
      },
      {
        icon: "Box",
        pdfPage: 39,
        caption: { en: "Add 2 orange plates to connect the skids to the belly, two straps holding the feet on!", es: "Agrega 2 placas naranjas para unir los patines a la panza, ¡dos correas que sujetan los pies!" },
        parts: [{ emoji: "🟠", count: 2, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{ x: 50, y: 60, en: "Connecting the two skids together", es: "Conectando los dos patines juntos", detail: { en: "Press the 2 orange plates across the skids to connect them to each other and form the landing gear.", es: "Presiona las 2 placas naranjas a través de los patines para conectarlos entre sí y formar el tren de aterrizaje." } }],
        help: { en: "Take the 2 orange 2×6 plates. Press them across the skids, bridging between the two skis. Like two straps holding the feet together, this forms the complete landing gear!", es: "Toma las 2 placas naranjas 2×6. Presiónelas a través de los patines, uniéndolos. ¡Como dos correas que unen los pies, esto forma el tren de aterrizaje completo!" }
      },
      {
        icon: "Zap",
        pdfPage: 40,
        caption: { en: "Attach the skids under the helicopter, now it can stand on the ground! No new pieces.", es: "Coloca los patines debajo del helicóptero, ¡ahora puede pararse en el suelo! Sin piezas nuevas." },
        parts: [],
        attach: [{ x: 50, y: 75, en: "Under the belly of the helicopter", es: "Bajo la panza del helicóptero", detail: { en: "Following the arrow, press the landing skid assembly under the helicopter body.", es: "Siguiendo la flecha, presiona el ensamblaje del tren de aterrizaje debajo del cuerpo del helicóptero." } }],
        help: { en: "No new pieces! Take the landing skid assembly you built. Press it onto the underside of the helicopter body, following the arrow. Now the helicopter can stand upright on the ground, like a real helicopter on its skids!", es: "¡Sin piezas nuevas! Toma el ensamblaje del tren de aterrizaje que armaste. Presiónalo en la parte inferior del cuerpo del helicóptero, siguiendo la flecha. ¡Ahora el helicóptero puede pararse de pie en el suelo, como un helicóptero real sobre sus patines!" }
      },
      {
        icon: "Zap",
        pdfPage: 41,
        caption: { en: "Check your helicopter, make sure the belt and tail spin freely! No new pieces.", es: "Revisa tu helicóptero, ¡asegúrate de que la banda y la cola giren sin problema! Sin piezas nuevas." },
        parts: [],
        attach: [{ x: 50, y: 45, en: "Check the belt and tail rotor", es: "Revisa la banda y el rotor de cola", detail: { en: "Spin the blue pulley wheels and check the belt moves. Check that the tail rotor turns freely.", es: "Gira las ruedas de polea azul y verifica que la banda se mueve. Verifica que el rotor de cola gire libremente." } }],
        help: { en: "No new pieces, just a quality check! Spin the blue pulley wheels by hand, the yellow belt should move. Try spinning the tail wheel at the tip, it should turn freely on the tan pin. If anything is stuck, wiggle and re-press those pieces.", es: "¡Sin piezas nuevas, solo una revisión de calidad! Gira las ruedas de polea azul con la mano, la banda amarilla debería moverse. Intenta girar la rueda de la cola en la punta, debe girar libremente en el pasador canela. Si algo está atascado, mueve y vuelve a presionar esas piezas." }
      },
      {
        icon: "Circle",
        pdfPage: 42,
        caption: { en: "Build the rotor base: snap a light-blue brick onto a round turntable plate!", es: "Arma la base del rotor: ¡encaja un ladrillo azul claro en una placa giratoria redonda!" },
        parts: [
          { emoji: "🩵", count: 1, en: "Light-blue brick 2×4", es: "Ladrillo azul claro 2×4" },
          { emoji: "🩵", count: 1, en: "Light-blue round turntable plate 4×4", es: "Placa giratoria redonda azul claro 4×4" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table, separate rotor build", es: "Plana en la mesa, pieza de rotor aparte", detail: { en: "Build separately: snap the light-blue brick onto the turntable plate. The turntable lets the rotor spin.", es: "Arma aparte: encaja el ladrillo azul claro en la placa giratoria. La placa giratoria deja que el rotor gire." } }],
        help: { en: "Build this separately! Take the round turntable plate (it has a spinning center) and snap the light-blue 2×4 brick on top. The turntable allows the top rotor to spin freely around!", es: "¡Arma esto por separado! Toma la placa giratoria redonda (tiene un centro giratorio) y encaja el ladrillo azul claro 2×4 encima. ¡La base giratoria permite que el rotor superior gire libremente!" }
      },
      {
        icon: "Minus",
        pdfPage: 43,
        caption: { en: "Press a long black plate onto the turntable, the first big rotor blade!", es: "Presiona una placa negra larga en la base giratoria, ¡la primera aspa grande del rotor!" },
        parts: [{ emoji: "⬛", count: 1, en: "Black plate 2×16", es: "Placa negra 2×16" }],
        attach: [{ x: 50, y: 50, en: "On the turntable base", es: "En la base giratoria", detail: { en: "Press the long black plate (2×16) onto the turntable assembly, it sticks out on both sides like a rotor blade.", es: "Presiona la placa negra larga (2×16) en el ensamblaje de la base giratoria, sobresale por ambos lados como un aspa de rotor." } }],
        help: { en: "Press the very long black plate (2×16, the longest plate in the set!) onto the turntable base. It sticks out far on both sides, this is the first rotor blade, like one arm of a helicopter propeller!", es: "Presiona la placa negra muy larga (2×16, ¡la placa más larga del set!) en la base giratoria. Sobresale mucho por ambos lados, ¡esta es la primera aspa del rotor, como un brazo de la hélice de un helicóptero!" }
      },
      {
        icon: "Minus",
        pdfPage: 44,
        caption: { en: "Add a second long black plate on top and a white round tile in the center, full spinning rotor!", es: "Agrega una segunda placa negra larga y un azulejo redondo blanco en el centro, ¡rotor completo!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Black plate 2×16", es: "Placa negra 2×16" },
          { emoji: "⬜", count: 1, en: "White round tile 2×2", es: "Azulejo redondo blanco 2×2" }
        ],
        attach: [
          { x: 50, y: 45, en: "On top of the first blade plate", es: "Encima de la primera placa de aspa", detail: { en: "Press the second black plate on top of the first, sandwiching the turntable between them.", es: "Presiona la segunda placa negra encima de la primera, con la base giratoria entre ellas." } },
          { x: 50, y: 50, en: "White tile in the center", es: "Azulejo blanco en el centro", detail: { en: "Press the white round tile onto the center to cap the rotor hub.", es: "Presiona el azulejo redondo blanco en el centro para tapar el núcleo del rotor." } }
        ],
        help: { en: "Press the second long black plate (2×16) on top of the first one, with the rotor base between them. Then press the white round tile in the very center. Now you have a complete 4-blade rotor that can spin!", es: "Presiona la segunda placa negra larga (2×16) encima de la primera, con la base del rotor entre ellas. Luego presiona el azulejo redondo blanco en el centro. ¡Ahora tienes un rotor completo de 4 aspas que puede girar!" }
      },
      {
        icon: "Zap",
        pdfPage: 45,
        caption: { en: "Set the rotor on top of the helicopter over the big black gear, give it a spin! No new pieces.", es: "Coloca el rotor encima del helicóptero sobre el engranaje negro, ¡hazlo girar! Sin piezas nuevas." },
        parts: [],
        attach: [{ x: 50, y: 30, en: "On top, over the large black gear", es: "Encima, sobre el engranaje negro grande", detail: { en: "Following the arrow, place the rotor on top of the helicopter so the turntable connects to the large black gear.", es: "Siguiendo la flecha, coloca el rotor encima del helicóptero para que la base giratoria se conecte con el engranaje negro grande." } }],
        help: { en: "No new pieces! Set the whole rotor assembly on top of the helicopter body, over the large black gear. The turntable should connect with the gear so the motor can spin the blades. Give it a gentle spin by hand to test!", es: "¡Sin piezas nuevas! Coloca todo el ensamblaje del rotor encima del cuerpo del helicóptero, sobre el engranaje negro grande. La base giratoria debe conectarse con el engranaje para que el motor pueda girar las aspas. ¡Dale un giro suave con la mano para probarlo!" }
      },
      {
        icon: "Minus",
        pdfPage: 46,
        caption: { en: "Hook 2 chains from the tail down to the gray hook plate, they hang like little tow lines!", es: "Engancha 2 cadenas desde la cola hasta la placa gancho gris, ¡cuelgan como líneas de remolque!" },
        parts: [{ emoji: "⛓️", count: 2, en: "Chain", es: "Cadena" }],
        attach: [{ x: 70, y: 55, en: "From the tail tip down to the hook plate", es: "Desde la punta de la cola hasta la placa gancho", detail: { en: "Hook one end of each chain to the tail and the other end to the gray hook plate hanging from the string.", es: "Engancha un extremo de cada cadena a la cola y el otro extremo a la placa gancho gris que cuelga del hilo." } }],
        help: { en: "Take the 2 chains. Hook one end of each chain to the tail of the helicopter and the other end to the gray hook plate on the string reel. They hang like two little tow lines from the tail!", es: "Toma las 2 cadenas. Engancha un extremo de cada cadena a la cola del helicóptero y el otro extremo a la placa gancho gris en el carrete de hilo. ¡Cuelgan como dos pequeñas líneas de remolque desde la cola!" }
      },
      {
        icon: "Box",
        pdfPage: 47,
        caption: { en: "Start the cargo to lift: begin with one light-blue brick 2×4.", es: "Empieza la carga para levantar: comienza con un ladrillo azul claro 2×4." },
        parts: [{ emoji: "🩵", count: 1, en: "Light-blue brick 2×4", es: "Ladrillo azul claro 2×4" }],
        attach: [{ x: 50, y: 55, en: "Flat on the table, separate cargo build", es: "Plana en la mesa, pieza de carga aparte", detail: { en: "Build separately: this light-blue brick is the base of the cargo the helicopter will lift.", es: "Arma aparte: este ladrillo azul claro es la base de la carga que el helicóptero levantará." } }],
        help: { en: "Build the cargo separately from the helicopter! Take the light-blue 2×4 brick and lay it flat on the table. This is the start of the little cargo building the helicopter will lift.", es: "¡Arma la carga separado del helicóptero! Toma el ladrillo azul claro 2×4 y ponlo plano en la mesa. Este es el comienzo del pequeño edificio de carga que el helicóptero levantará." }
      },
      {
        icon: "Box",
        pdfPage: 48,
        caption: { en: "Stack a black 2×2 brick and 2 light-blue 1×2 bricks on top, a tiny tower!", es: "Apila un ladrillo negro 2×2 y 2 azul claro 1×2 encima, ¡una torrecita!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" },
          { emoji: "🩵", count: 2, en: "Light-blue brick 1×2", es: "Ladrillo azul claro 1×2" }
        ],
        attach: [{ x: 50, y: 45, en: "On top of the blue base brick", es: "Encima del ladrillo base azul", detail: { en: "Press the black 2×2 brick on top, then the 2 light-blue 1×2 bricks side by side on top of that.", es: "Presiona el ladrillo negro 2×2 encima, luego los 2 ladrillos azul claro 1×2 uno al lado del otro encima." } }],
        help: { en: "Stack the black 2×2 brick on top of the blue base. Then press the 2 light-blue 1×2 bricks side by side on top of the black brick. You are building a tiny colorful tower, the cargo building!", es: "Apila el ladrillo negro 2×2 encima de la base azul. Luego presiona los 2 ladrillos azul claro 1×2 uno al lado del otro encima del negro. ¡Estás construyendo una pequeña torre colorida, el edificio de carga!" }
      },
      {
        icon: "Box",
        pdfPage: 49,
        caption: { en: "Add 4 orange slope pieces to make a little roof on the cargo!", es: "Agrega 4 piezas naranjas inclinadas para hacer un tejadito en la carga." },
        parts: [{ emoji: "🟠", count: 4, en: "Orange slope brick 1×1", es: "Ladrillo naranja inclinado 1×1" }],
        attach: [{ x: 50, y: 40, en: "On top of the cargo tower", es: "Encima de la torre de carga", detail: { en: "Press the 4 small orange slopes around the top of the tower to form a little pointed roof.", es: "Presiona las 4 rampas naranjas pequeñas alrededor de la parte de arriba de la torre para formar un tejadito." } }],
        help: { en: "Add the 4 orange slope bricks to the top of the cargo tower to make a little pointed roof. The roof gives it the shape of a tiny building!", es: "Agrega los 4 ladrillos naranjas inclinados en la parte de arriba de la torre de carga para hacer un tejadito. ¡El techo le da la forma de un pequeño edificio!" }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 50,
        caption: { en: "Press one white plate on top to smooth it out, like a flat lid!", es: "Presiona una placa blanca encima para alisarla, ¡como una tapa plana!" },
        parts: [{ emoji: "⬜", count: 1, en: "White plate 1×4", es: "Placa blanca 1×4" }],
        attach: [{ x: 50, y: 38, en: "On top of the cargo roof", es: "Encima del techo de la carga", detail: { en: "Press the white 1×4 plate on top of the cargo to cap the roof.", es: "Presiona la placa blanca 1×4 encima de la carga para tapar el techo." } }],
        help: { en: "Press the flat white 1×4 plate on top of the cargo tower roof to smooth it out and lock the slope pieces down. Like a flat lid on top of the building!", es: "Presiona la placa blanca plana 1×4 encima del techo de la torre de carga para alisarla y fijar las piezas inclinadas. ¡Como una tapa plana encima del edificio!" }
      },
      {
        icon: "Box",
        pdfPage: 51,
        caption: { en: "Add 2 white headlight bricks and 1 light-blue brick, the cargo's little face is forming!", es: "Agrega 2 ladrillos blancos tipo faro y 1 ladrillo azul claro, ¡la carita de la carga toma forma!" },
        parts: [
          { emoji: "⬜", count: 2, en: "White headlight brick 1×1 (with side stud)", es: "Ladrillo blanco tipo faro 1×1 (con botón lateral)" },
          { emoji: "🩵", count: 1, en: "Light-blue brick 1×3", es: "Ladrillo azul claro 1×3" }
        ],
        attach: [{ x: 50, y: 55, en: "Front of the cargo tower", es: "Frente de la torre de carga", detail: { en: "Press the 2 white headlight bricks on the sides and the blue 1×3 brick in the middle to start the face.", es: "Presiona los 2 ladrillos blancos tipo faro en los lados y el ladrillo azul 1×3 en el medio para comenzar la cara." } }],
        help: { en: "Press the 2 white headlight bricks (1×1 with a stud on the side) on the front sides of the cargo and the light-blue 1×3 brick between them in the middle. The little face of the cargo is starting to take shape!", es: "Presiona los 2 ladrillos blancos tipo faro (1×1 con botón lateral) en los lados del frente de la carga y el ladrillo azul claro 1×3 entre ellos en el medio. ¡La carita de la carga empieza a tomar forma!" }
      },
      {
        icon: "Circle",
        pdfPage: 52,
        caption: { en: "Add 2 black round pieces and a white bracket, building out the little face!", es: "Agrega 2 piezas redondas negras y un soporte blanco, ¡formando la carita!" },
        parts: [
          { emoji: "⬛", count: 2, en: "Black round piece 1×1", es: "Pieza redonda negra 1×1" },
          { emoji: "⬜", count: 1, en: "White bracket (1×2 with 2×2 plate)", es: "Soporte blanco (1×2 con placa 2×2)" }
        ],
        attach: [{ x: 50, y: 55, en: "Front face of the cargo", es: "Cara frontal de la carga", detail: { en: "Press the black round pieces on the headlight studs and the white bracket to build the face.", es: "Presiona las piezas redondas negras en los botones de los faros y el soporte blanco para armar la cara." } }],
        help: { en: "Press the 2 black round pieces onto the side studs of the headlight bricks (they become pupils/eyes). Then add the white bracket piece to build out the face structure more.", es: "Presiona las 2 piezas redondas negras en los botones laterales de los ladrillos tipo faro (se convierten en pupilas/ojos). Luego agrega la pieza soporte blanca para construir más la estructura de la cara." }
      },
      {
        icon: "Circle",
        pdfPage: 53,
        caption: { en: "Add 2 black round pieces and a white round tile, the cargo has shiny eyes!", es: "Agrega 2 piezas redondas negras y un azulejo redondo blanco, ¡la carga tiene ojitos brillantes!" },
        parts: [
          { emoji: "⬛", count: 2, en: "Black round piece 1×1", es: "Pieza redonda negra 1×1" },
          { emoji: "⬜", count: 1, en: "White round tile 2×2", es: "Azulejo redondo blanco 2×2" }
        ],
        attach: [{ x: 50, y: 50, en: "Front of the cargo face", es: "Frente de la cara de la carga", detail: { en: "Add the black round pieces as pupils and the white round tile as a big shiny eye or lens.", es: "Agrega las piezas redondas negras como pupilas y el azulejo redondo blanco como un ojo brillante grande." } }],
        help: { en: "Add 2 more black round pieces for depth and the white round 2×2 tile as a big shiny eye or camera lens on the cargo. The cargo now has a face, it looks like a little robot building!", es: "Agrega 2 piezas redondas negras más para profundidad y el azulejo redondo blanco 2×2 como un ojo brillante grande o lente de cámara en la carga. ¡La carga ahora tiene cara, parece un pequeño edificio robot!" }
      },
      {
        icon: "Box",
        pdfPage: 54,
        caption: { en: "Add one more black round piece to finish the front, like the tip of a nose!", es: "Agrega una pieza redonda negra más para terminar el frente, ¡como la punta de una nariz!" },
        parts: [{ emoji: "⬛", count: 1, en: "Black round piece 1×1", es: "Pieza redonda negra 1×1" }],
        attach: [{ x: 50, y: 55, en: "Front center of the cargo face", es: "Centro frontal de la cara de la carga", detail: { en: "Press the last black round piece onto the front center to finish the cargo's face.", es: "Presiona la última pieza redonda negra en el centro frontal para terminar la cara de la carga." } }],
        help: { en: "Press one more black round piece onto the very front center of the cargo face. It finishes the nose or lens of the little cargo character, giving it a complete face!", es: "Presiona una pieza redonda negra más en el centro frontal de la cara de la carga. ¡Termina la nariz o lente del pequeño personaje de carga, dándole una cara completa!" }
      },
      {
        icon: "Box",
        pdfPage: 55,
        caption: { en: "Build a little stand: black brick + white plate + 2 black slopes, then join under the cargo!", es: "Arma una basecita: ladrillo negro + placa blanca + 2 rampas negras, ¡luego únela debajo de la carga!" },
        parts: [
          { emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" },
          { emoji: "⬜", count: 1, en: "White plate 1×2", es: "Placa blanca 1×2" },
          { emoji: "⬛", count: 2, en: "Black slope 2×2", es: "Rampa negra 2×2" }
        ],
        attach: [{ x: 50, y: 70, en: "Under the cargo tower", es: "Debajo de la torre de carga", detail: { en: "Build: snap the white plate on the black brick, add 2 black slopes, then join this stand under the cargo tower.", es: "Arma: encaja la placa blanca en el ladrillo negro, agrega 2 rampas negras, luego únela debajo de la torre de carga." } }],
        help: { en: "Press the white 1×2 plate on top of the black 2×2 brick. Add the 2 black slopes on the sides to make a little wedge stand. Then attach this stand underneath the cargo tower. Now the cargo can stand on its own, and the helicopter can come pick it up!", es: "Presiona la placa blanca 1×2 encima del ladrillo negro 2×2. Agrega las 2 rampas negras en los lados para hacer una pequeña base en cuña. Luego une esta base debajo de la torre de carga. ¡Ahora la carga puede pararse sola, y el helicóptero puede venir a recogerla!" }
      },
      {
        icon: "Circle",
        pdfPage: 56,
        caption: { en: "Make 4 clear light-blue round bricks, ice blocks or gems for the helicopter to carry!", es: "Haz 4 piezas redondas azules transparentes, ¡bloques de hielo o gemas para llevar!" },
        parts: [{ emoji: "🩵", count: 4, en: "Clear light-blue round brick 2×2", es: "Ladrillo redondo azul claro 2×2 transparente" }],
        attach: [{ x: 50, y: 55, en: "Set aside, these are the cargo gems", es: "Ponlos aparte, son las gemas de la carga", detail: { en: "These 4 clear round bricks are the cargo. Set them near the cargo tower for the helicopter to 'carry'.", es: "Estos 4 ladrillos redondos transparentes son la carga. Ponlos junto a la torre de carga para que el helicóptero los 'lleve'." } }],
        help: { en: "Find the 4 clear light-blue round bricks (2×2 round). These are the cargo gems that your helicopter is going to lift and carry! Place them near the cargo tower for the final display.", es: "Busca los 4 ladrillos redondos azules claros (2×2 redondos). ¡Estas son las gemas de carga que tu helicóptero va a levantar y llevar! Ponlos junto a la torre de carga para la exhibición final." }
      },
      {
        icon: "Sparkles",
        pdfPage: 57,
        caption: { en: "Your helicopter is done! Press the green button and watch the blades spin! 🚁🎉", es: "¡Tu helicóptero está listo! ¡Presiona el botón verde y mira girar las aspas! 🚁🎉" },
        parts: [],
        attach: [{ x: 50, y: 35, en: "Green button on the Smart Hub", es: "Botón verde del Smart Hub", detail: { en: "Press the green button on the Smart Hub to turn it on. Connect your tablet to make the motor spin and lift the cargo!", es: "Presiona el botón verde del Smart Hub para encenderlo. ¡Conecta tu tablet para que el motor gire y levante la carga!" } }],
        help: { en: "Your helicopter is complete, with a spinning top rotor, a tail rotor, landing skids, and a cargo hook! Press the green button on the Smart Hub to turn it on. Connect to the WeDo 2.0 app on your tablet. Great building! 🚁", es: "¡Tu helicóptero está completo, con un rotor superior giratorio, un rotor de cola, patines de aterrizaje y un gancho de carga! Presiona el botón verde del Smart Hub para encenderlo. ¡Conéctalo a la app WeDo 2.0 en tu tablet. ¡Buen trabajo! 🚁" }
      }
    ]
  },
  {
    id: "milo",
    name: "LEGO Education WeDo 2.0 · Set 45300",
    model: { en: "Milo the Science Rover", es: "Milo el Robot Científico" },
    color: "#4CAF50",
    pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/9e8c0065e_MILO.pdf",
    category: "wedo",
    steps: [
      {
        icon: "LayoutGrid",
        pdfPage: 4,
        caption: { en: "Place 2 green plates side by side, this is Milo's floor!", es: "Pon 2 placas verdes una al lado de la otra, ¡este es el piso de Milo!" },
        parts: [{ emoji: "🟩", count: 2, en: "Green plate 2×8", es: "Placa verde 2×8" }],
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Planas sobre la mesa", detail: { en: "Put both green plates flat on the table with the studs pointing up, touching side by side like railroad tracks.", es: "Pon las dos placas verdes planas en la mesa con los botones hacia arriba, una al lado de la otra como rieles." } }],
        help: { en: "Find the two long green plates, they have 2 rows of 8 bumps each. Lay them flat on the table right next to each other so they touch along the long side. Studs point up. This is the bottom floor of Milo's body.", es: "Busca las dos placas verdes largas, tienen 2 filas de 8 botones cada una. Ponlas planas en la mesa, una junto a la otra por el lado largo. Los botones apuntan hacia arriba. Este es el piso del cuerpo de Milo." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Snap on the lime-green rounded plate to make the base bigger.", es: "Encaja la placa verde clara con punta redondeada para agrandar la base." },
        parts: [{ emoji: "🟢", count: 1, en: "Lime-green rounded plate ~4×6", es: "Placa verde clara redondeada ~4×6" }],
        attach: [{ x: 70, y: 50, en: "Right end of the green plates", es: "Extremo derecho de las placas verdes", detail: { en: "Snap the lime plate onto the right end of the two green plates so the rounded corner sticks out to the right.", es: "Encaja la placa verde clara en el extremo derecho de las dos placas verdes para que la esquina redondeada salga hacia la derecha." } }],
        help: { en: "Find the lighter green plate, it has one rounded corner. Snap it on top of the right end of your green base so the round corner sticks out to the right. Press firmly until it clicks.", es: "Busca la placa verde más clara, tiene una esquina redondeada. Encájala encima del extremo derecho de tu base verde para que la esquina redonda salga a la derecha. Presiona hasta que haga clic." }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Stand 2 small black brackets on the green base. They'll hold a spinning part!", es: "Para 2 soportes negros pequeños en la base verde. ¡Sostendrán una pieza giratoria!" },
        parts: [{ emoji: "⬛", count: 2, en: "Small black bracket 1×2 with holes", es: "Soporte negro pequeño 1×2 con agujeros" }],
        attach: [{ x: 50, y: 40, en: "Center of the green base", es: "Centro de la base verde", detail: { en: "Press both black brackets standing upright, side by side, in the center of the green base. The round holes face outward.", es: "Presiona los dos soportes negros de pie, uno al lado del otro, en el centro de la base verde. Los agujeros redondos miran hacia afuera." } }],
        help: { en: "Take the two small black pieces that look like little brackets with round holes on the side. Press them upright onto the center of the green base, side by side. The round holes should face out to the sides, those holes are where an axle will slide through later.", es: "Toma los dos piezas negras pequeñas que parecen soportes con agujeros redondos en el lado. Presiónate de pie en el centro de la base verde, uno al lado del otro. Los agujeros redondos deben mirar hacia afuera, por esos agujeros pasará un eje más adelante." }
      },
      {
        icon: "Minus",
        pdfPage: 7,
        caption: { en: "Lay the long lime-green beam with holes across the top.", es: "Coloca la viga verde larga con agujeros a lo largo de la parte de arriba." },
        parts: [{ emoji: "🟢", count: 1, en: "Lime-green beam with holes 1×8", es: "Viga verde clara con agujeros 1×8" }],
        attach: [{ x: 50, y: 30, en: "Across the top of the base", es: "A lo largo de la parte superior de la base", detail: { en: "Press the long lime beam flat across the very top row of studs on the green base, spanning its full length.", es: "Presiona la viga verde larga y plana a lo largo de la fila superior de botones de la base verde, de punta a punta." } }],
        help: { en: "Find the long lime-green piece with 7 round holes along it, it is 8 bumps long. Press it flat along the very top row of your green base, spanning the whole length. The holes along it are for axles that we will add soon.", es: "Busca la pieza verde clara larga con 7 agujeros redondos, mide 8 botones de largo. Presiónala a lo largo de la fila superior de tu base verde, de punta a punta. Los agujeros son para los ejes que agregaremos pronto." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 8,
        caption: { en: "Set 2 orange plates side by side, bright like a pumpkin!", es: "Pon 2 placas naranjas una al lado de la otra, ¡brillantes como una calabaza!" },
        parts: [{ emoji: "🟠", count: 2, en: "Orange plate 2×4", es: "Placa naranja 2×4" }],
        attach: [{ x: 50, y: 55, en: "Flat on the table separately", es: "Planas en la mesa, por separado", detail: { en: "Put the two orange plates flat on the table next to each other, this is a sub-assembly for the front of Milo.", es: "Pon las dos placas naranjas planas en la mesa una al lado de la otra, esta es una sub-pieza para la parte delantera de Milo." } }],
        help: { en: "Set the two bright orange plates flat on the table next to each other (NOT on the green base yet). These will become Milo's front section. They are 2 bumps wide and 4 bumps long.", es: "Pon las dos placas naranjas brillantes planas en la mesa una al lado de la otra (NO sobre la base verde todavía). Estas se convertirán en la parte delantera de Milo. Miden 2 botones de ancho y 4 de largo." }
      },
      {
        icon: "Box",
        pdfPage: 9,
        caption: { en: "Press the black 2×2 brick on top of the orange plates, right in the middle.", es: "Presiona el bloque negro 2×2 encima de las placas naranjas, justo en el medio." },
        parts: [{ emoji: "⬛", count: 1, en: "Black brick 2×2", es: "Ladrillo negro 2×2" }],
        attach: [{ x: 50, y: 40, en: "Center of the orange plates", es: "Centro de las placas naranjas", detail: { en: "Press the black square brick on top of the center where the two orange plates meet.", es: "Presiona el ladrillo negro cuadrado encima del centro donde se unen las dos placas naranjas." } }],
        help: { en: "Take the small black brick (2 bumps wide, 2 bumps long). Press it squarely in the center of the two orange plates, right where they meet. It should straddle both orange plates, holding them together.", es: "Toma el ladrillo negro pequeño (2 botones de ancho, 2 de largo). Presiónalo en el centro de las dos placas naranjas, justo donde se unen. Debe quedar sobre ambas placas, uniéndolas." }
      },
      {
        icon: "Circle",
        pdfPage: 10,
        caption: { en: "Add the light-blue see-through hook piece, Milo's grabber!", es: "Agrega la pieza azul transparente con gancho, ¡el agarrador de Milo!" },
        parts: [{ emoji: "🩵", count: 1, en: "Light-blue hook piece 2×2", es: "Pieza azul clara con gancho 2×2" }],
        attach: [{ x: 25, y: 50, en: "Left side of the orange section", es: "Lado izquierdo de la sección naranja", detail: { en: "Snap the blue hook piece onto the left end of the orange plates so the hook loop sticks out to the left.", es: "Encaja la pieza azul con gancho en el extremo izquierdo de las placas naranjas para que el bucle del gancho salga a la izquierda." } }],
        help: { en: "Find the clear light-blue piece with a small loop or hook at one end. Snap it onto the left end of the orange section so the hook sticks out to the left. This hook is what Milo uses to connect to things.", es: "Busca la pieza azul clara transparente con un pequeño lazo o gancho en un extremo. Encájala en el extremo izquierdo de la sección naranja para que el gancho salga a la izquierda. Este gancho es lo que Milo usa para conectarse a las cosas." }
      },
      {
        icon: "Zap",
        pdfPage: 11,
        caption: { en: "Push the orange-blue piece into the front of the green body, they join!", es: "Empuja la pieza naranja-azul en la parte delantera del cuerpo verde, ¡se unen!" },
        parts: [],
        attach: [{ x: 20, y: 50, en: "Front-left of the green base", es: "Parte delantera izquierda de la base verde", detail: { en: "Slide the orange sub-assembly into the front-left of the green base so the blue hook sticks out front. Press until the pieces click together.", es: "Desliza el sub-ensamblaje naranja hacia la parte delantera izquierda de la base verde para que el gancho azul salga por el frente. Presiona hasta que las piezas encajen." } }],
        help: { en: "Take the orange-and-blue piece you built. Push it into the front-left corner of the green base. The blue hook should point forward, away from the body. Press firmly, both sections now click together into one robot body!", es: "Toma la pieza naranja y azul que armaste. Empújala en la esquina delantera izquierda de la base verde. El gancho azul debe apuntar hacia adelante, alejándose del cuerpo. Presiona con fuerza, ¡ambas secciones ahora encajan en un solo cuerpo de robot!" }
      },
      {
        icon: "Box",
        pdfPage: 12,
        caption: { en: "Snap in the bright turquoise 2×2 brick, a fun pop of color!", es: "Encaja el bloque turquesa brillante 2×2, ¡un toque de color divertido!" },
        parts: [{ emoji: "🔵", count: 1, en: "Turquoise brick 2×2", es: "Ladrillo turquesa 2×2" }],
        attach: [{ x: 50, y: 40, en: "Center of the green body", es: "Centro del cuerpo verde", detail: { en: "Press the blue-green turquoise brick onto the center studs of the green base body.", es: "Presiona el ladrillo turquesa azul-verde sobre los botones del centro de la base verde." } }],
        help: { en: "Find the bright blue-green (turquoise) 2×2 brick. Press it onto the center of the green base section. It pops a fun color right in the middle of Milo's body!", es: "Busca el ladrillo azul-verde brillante (turquesa) 2×2. Presiónalo en el centro de la sección base verde. ¡Le da un toque de color divertido en el centro del cuerpo de Milo!" }
      },
      {
        icon: "Minus",
        pdfPage: 13,
        caption: { en: "Slide the black size-6 axle through the holes. Pop a gray connector on the end.", es: "Desliza el eje negro tamaño 6 por los agujeros. Pon un conector gris en la punta." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle, size 6", es: "Eje negro, tamaño 6" },
          { emoji: "⬜", count: 1, en: "Gray connector / bushing", es: "Conector gris / buje" }
        ],
        attach: [{ x: 45, y: 45, en: "Through the black bracket holes", es: "Por los agujeros de los soportes negros", detail: { en: "Slide the axle all the way through both black brackets' round holes. Then press the gray connector firmly onto one end of the axle.", es: "Desliza el eje por los agujeros redondos de los dos soportes negros. Luego presiona el conector gris firmemente en un extremo del eje." } }],
        help: { en: "Take the long black axle, it has the number 6 on it. Slide it all the way through the two round holes in the black brackets on the green base. Then take the small gray piece (bushing/connector) and push it firmly onto one end of the axle so it cannot slide out.", es: "Toma el eje negro largo, tiene el número 6. Deslízalo por los dos agujeros redondos en los soportes negros de la base verde. Luego toma la pieza gris pequeña (buje/conector) y empújala firmemente en un extremo del eje para que no se salga." }
      },
      {
        icon: "Minus",
        pdfPage: 14,
        caption: { en: "Add the second lime-green beam on top to make Milo strong!", es: "Agrega la segunda viga verde clara encima para que Milo quede fuerte." },
        parts: [{ emoji: "🟢", count: 1, en: "Lime-green beam with holes 1×8", es: "Viga verde clara con agujeros 1×8" }],
        attach: [{ x: 50, y: 30, en: "On top of the body, aligned with first beam", es: "Encima del cuerpo, alineada con la primera viga", detail: { en: "Press this second beam on top of the body, parallel to the first beam, locking everything together.", es: "Presiona esta segunda viga encima del cuerpo, paralela a la primera viga, fijando todo junto." } }],
        help: { en: "Take the second lime-green beam (same as step 4). Press it on top of the body right next to or on top of the first beam. This sandwiches the parts together and makes the robot body very solid and strong.", es: "Toma la segunda viga verde clara (igual a la del paso 4). Presiónala encima del cuerpo, junto o encima de la primera viga. Esto sujeta las piezas y hace el cuerpo del robot muy sólido y fuerte." }
      },
      {
        icon: "Minus",
        pdfPage: 15,
        caption: { en: "Push another black size-6 axle through the side holes.", es: "Empuja otra varilla negra tamaño 6 por los agujeros del costado." },
        parts: [{ emoji: "⬛", count: 1, en: "Black axle, size 6", es: "Eje negro, tamaño 6" }],
        attach: [{ x: 55, y: 55, en: "Side holes of the beams", es: "Agujeros laterales de las vigas", detail: { en: "Slide the axle through the holes on the side of the beams following the red arrow direction in the instructions.", es: "Desliza el eje por los agujeros del lado de las vigas siguiendo la dirección de la flecha roja en las instrucciones." } }],
        help: { en: "Take the second black axle (also size 6). Look at the holes along the side of the lime beams and slide this axle through them horizontally, following the arrow. It sticks out both sides and will hold a wheel later.", es: "Toma el segundo eje negro (también tamaño 6). Mira los agujeros a lo largo del lado de las vigas verdes y desliza este eje por ellos horizontalmente, siguiendo la flecha. Sobresale por ambos lados y sostendrá una rueda más adelante." }
      },
      {
        icon: "Circle",
        pdfPage: 16,
        caption: { en: "Pop gray caps onto both ends of each axle, they stop axles sliding out!", es: "Pon tapitas grises en ambas puntas de cada eje, ¡evitan que se salgan!" },
        parts: [{ emoji: "⬜", count: 2, en: "Gray cap / bushing", es: "Tapita gris / buje" }],
        attach: [
          { x: 20, y: 45, en: "Left end of the axle", es: "Extremo izquierdo del eje", detail: { en: "Push one gray cap firmly onto the left end of the axle.", es: "Empuja una tapita gris firmemente en el extremo izquierdo del eje." } },
          { x: 80, y: 45, en: "Right end of the axle", es: "Extremo derecho del eje", detail: { en: "Push the second gray cap firmly onto the right end of the axle.", es: "Empuja la segunda tapita gris firmemente en el extremo derecho del eje." } }
        ],
        help: { en: "Take the two small gray cap pieces (bushings). Push one firmly onto each end of the axle that sticks out from the side of the body. These act as stoppers so the axle cannot slide out when Milo rolls around.", es: "Toma las dos tapitas grises pequeñas (bujes). Empuja una firmemente en cada extremo del eje que sobresale del lado del cuerpo. Actúan como topes para que el eje no se salga cuando Milo rueda." }
      },
      {
        icon: "Cpu",
        pdfPage: 17,
        caption: { en: "Meet Milo's motor! Push the red pin into the front of the motor.", es: "¡Conoce el motor de Milo! Empuja el pin rojo en la parte delantera del motor." },
        parts: [
          { emoji: "⚙️", count: 1, en: "WeDo 2.0 motor with cable", es: "Motor WeDo 2.0 con cable" },
          { emoji: "🔴", count: 1, en: "Red pin", es: "Pin rojo" }
        ],
        attach: [{ x: 35, y: 50, en: "Front shaft of the motor", es: "Eje delantero del motor", detail: { en: "Push the red pin firmly into the round shaft hole at the front of the motor until it clicks.", es: "Empuja el pin rojo firmemente en el agujero redondo del eje delantero del motor hasta que haga clic." } }],
        help: { en: "Take the gray motor with a long black cable coiled on it. Find the round hole at the front (the spinning end). Push the small red pin firmly into that hole until it clicks in. The red pin is what the pulley wheel will attach to.", es: "Toma el motor gris con el cable negro largo enrollado. Encuentra el agujero redondo en la parte delantera (el extremo que gira). Empuja el pin rojo pequeño firmemente en ese agujero hasta que haga clic. El pin rojo es donde se conectará la rueda de polea." }
      },
      {
        icon: "Circle",
        pdfPage: 18,
        caption: { en: "Put the white pulley wheel onto the red pin on the motor.", es: "Pon la rueda de polea blanca sobre el pin rojo del motor." },
        parts: [{ emoji: "⚪", count: 1, en: "White pulley wheel", es: "Rueda de polea blanca" }],
        attach: [{ x: 30, y: 50, en: "Onto the red pin", es: "Sobre el pin rojo", detail: { en: "Press the white wheel onto the red pin so it sits flat against the motor's front face.", es: "Presiona la rueda blanca sobre el pin rojo para que quede plana contra la cara delantera del motor." } }],
        help: { en: "Take the small white wheel (it looks like a spool or pulley). Press it onto the red pin you just added to the motor. It should sit flat against the motor face. This wheel will spin when the motor turns on and drive the yellow belt.", es: "Toma la pequeña rueda blanca (parece un carrete o polea). Presiónala sobre el pin rojo que acabas de agregar al motor. Debe quedar plana contra la cara del motor. Esta rueda girará cuando el motor se encienda y moverá la banda amarilla." }
      },
      {
        icon: "Cpu",
        pdfPage: 19,
        caption: { en: "Set the motor on top of Milo's body, the arrow shows where it goes!", es: "Coloca el motor encima del cuerpo de Milo, ¡la flecha muestra dónde va!" },
        parts: [],
        attach: [{ x: 68, y: 35, en: "Right end of the body (top)", es: "Extremo derecho del cuerpo (encima)", detail: { en: "Lower the motor onto the right end of the top of the body so its studs click into the green beam holes.", es: "Baja el motor sobre el extremo derecho de la parte superior del cuerpo para que sus botones encajen en los agujeros de la viga verde." } }],
        help: { en: "Hold the motor with the white pulley wheel pointing to the right side. Lower it down onto the right portion of the top of the green body. Line up the motor's base with the studs and press until it clicks in. The cable hangs off to the back.", es: "Sostén el motor con la rueda de polea blanca apuntando al lado derecho. Bájalo sobre la parte derecha de la parte superior del cuerpo verde. Alinea la base del motor con los botones y presiona hasta que haga clic. El cable cuelga hacia atrás." }
      },
      {
        icon: "Cpu",
        pdfPage: 20,
        caption: { en: "Add the Smart Hub, Milo's brain! Plug the motor cable in.", es: "¡Agrega el Smart Hub, el cerebro de Milo! Conecta el cable del motor." },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white/gray brick)", es: "Smart Hub (bloque blanco/gris grande)" }],
        attach: [{ x: 50, y: 40, en: "On top of the motor and body", es: "Encima del motor y del cuerpo", detail: { en: "Press the Smart Hub on top of the motor and body. Then push the motor's cable connector into one of the Hub's ports.", es: "Presiona el Smart Hub encima del motor y el cuerpo. Luego empuja el conector del cable del motor en uno de los puertos del Hub." } }],
        help: { en: "The Smart Hub is the large white brick with a green button on the front, it is Milo's brain! Press it on top of the motor and green body. Then take the cable from the motor and push its connector into any port on the side of the Hub. It only fits one way.", es: "El Smart Hub es el ladrillo blanco grande con un botón verde, ¡es el cerebro de Milo! Presiónalo sobre el motor y el cuerpo verde. Luego toma el cable del motor y empuja su conector en cualquier puerto del lado del Hub. Solo entra de una manera." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 21,
        caption: { en: "Flip Milo over. Add 2 long white strips along the top.", es: "Voltea a Milo. Agrega 2 tiras blancas largas a lo largo de la parte de arriba." },
        parts: [{ emoji: "⬜", count: 2, en: "White plate 1×16", es: "Placa blanca 1×16" }],
        attach: [
          { x: 50, y: 30, en: "Back top row", es: "Fila de atrás de arriba", detail: { en: "Press one white strip along the back top row of studs (now facing up since Milo is flipped).", es: "Presiona una tira blanca a lo largo de la fila trasera de arriba (ahora mirando hacia arriba porque Milo está volteado)." } },
          { x: 50, y: 60, en: "Front top row", es: "Fila delantera de arriba", detail: { en: "Press the second white strip along the front top row of studs.", es: "Presiona la segunda tira blanca a lo largo de la fila delantera de arriba." } }
        ],
        help: { en: "Carefully flip Milo upside down so the flat bottom is now facing up. Press one long white strip (1 bump wide, 16 bumps long) along the back row of studs. Press the second strip along the front row of studs. These will become the top surface of Milo's body.", es: "Voltea a Milo cuidadosamente boca arriba para que el fondo plano quede mirando hacia arriba. Presiona una tira blanca larga (1 botón de ancho, 16 de largo) a lo largo de la fila trasera de botones. Presiona la segunda tira a lo largo de la fila delantera. Estas serán la superficie superior del cuerpo de Milo." }
      },
      {
        icon: "Circle",
        pdfPage: 22,
        caption: { en: "Press 2 black round dots and 1 green round dot on top, like little buttons!", es: "Presiona 2 puntos redondos negros y 1 verde encima, ¡como botoncitos!" },
        parts: [
          { emoji: "⚫", count: 2, en: "Black round plate 2×2", es: "Placa redonda negra 2×2" },
          { emoji: "🟢", count: 1, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" }
        ],
        attach: [
          { x: 25, y: 45, en: "Left position on top", es: "Posición izquierda de arriba", detail: { en: "Press one black round plate on the left area of the white strips.", es: "Presiona una placa redonda negra en el área izquierda de las tiras blancas." } },
          { x: 50, y: 45, en: "Center position on top", es: "Posición central de arriba", detail: { en: "Press the green round plate in the center of the white strips.", es: "Presiona la placa redonda verde en el centro de las tiras blancas." } },
          { x: 75, y: 45, en: "Right position on top", es: "Posición derecha de arriba", detail: { en: "Press the second black round plate on the right area.", es: "Presiona la segunda placa redonda negra en el área derecha." } }
        ],
        help: { en: "Find the 2 black round plates and 1 green round plate (all 2×2 round). Press the black one on the left, the green one in the center, and the second black one on the right, onto the white strips. They look like colorful buttons on Milo's back.", es: "Busca las 2 placas redondas negras y 1 placa redonda verde (todas redondas 2×2). Presiona la negra a la izquierda, la verde en el centro, y la segunda negra a la derecha, sobre las tiras blancas. Parecen botones coloridos en la espalda de Milo." }
      },
      {
        icon: "Circle",
        pdfPage: 23,
        caption: { en: "Add 2 clear blue spinner wheels, one on each side.", es: "Agrega 2 ruedas giradoras azules transparentes, una de cada lado." },
        parts: [{ emoji: "🩵", count: 2, en: "Light-blue pulley wheel", es: "Rueda de polea azul clara" }],
        attach: [
          { x: 18, y: 55, en: "Left axle end", es: "Extremo izquierdo del eje", detail: { en: "Press one blue pulley wheel onto the left end of the axle that goes through the body.", es: "Presiona una rueda de polea azul en el extremo izquierdo del eje que pasa por el cuerpo." } },
          { x: 82, y: 55, en: "Right axle end", es: "Extremo derecho del eje", detail: { en: "Press the second blue pulley wheel onto the right end of the axle.", es: "Presiona la segunda rueda de polea azul en el extremo derecho del eje." } }
        ],
        help: { en: "Take the 2 clear blue pulley wheels. Press one firmly onto each end of the axle that sticks out from the sides of Milo's body. The blue wheels are like little spools and will work with the yellow belt in the next step.", es: "Toma las 2 ruedas de polea azules transparentes. Presiona una firmemente en cada extremo del eje que sobresale de los lados del cuerpo de Milo. Las ruedas azules son como carretes pequeños y funcionarán con la banda amarilla en el próximo paso." }
      },
      {
        icon: "Circle",
        pdfPage: 24,
        caption: { en: "Loop the yellow band around a blue wheel and the motor wheel, like a bike chain!", es: "Pasa la banda amarilla alrededor de una rueda azul y la del motor, ¡como cadena de bici!" },
        parts: [{ emoji: "🟡", count: 1, en: "Yellow rubber belt", es: "Banda de goma amarilla" }],
        attach: [{ x: 50, y: 50, en: "Around both pulley wheels", es: "Alrededor de las dos ruedas de polea", detail: { en: "Stretch the yellow band around the blue pulley wheel and the white motor pulley so the band forms a loop connecting both.", es: "Estira la banda amarilla alrededor de la rueda de polea azul y la rueda blanca del motor para que la banda forme un lazo que conecte ambas." } }],
        help: { en: "Take the stretchy yellow rubber band. Loop it around one of the blue wheels on the axle AND around the white motor wheel. Stretch it gently, it should form a loop between the two wheels, just like a bicycle chain. When the motor spins, the band will make the axle spin too!", es: "Toma la banda de goma amarilla elástica. Pásala alrededor de una de las ruedas azules en el eje Y alrededor de la rueda blanca del motor. Estírala suavemente, debe formar un lazo entre las dos ruedas, como la cadena de una bicicleta. ¡Cuando el motor gire, la banda hará girar el eje también!" }
      },
      {
        icon: "Circle",
        pdfPage: 25,
        caption: { en: "Push tires onto white rims, then click them on, Milo can roll now!", es: "Pon las llantas sobre los rines blancos y encájalos, ¡ya puede rodar Milo!" },
        parts: [
          { emoji: "🖤", count: 2, en: "Black rubber tire", es: "Llanta de goma negra" },
          { emoji: "⚪", count: 2, en: "White wheel rim", es: "Rin blanco" }
        ],
        attach: [
          { x: 18, y: 55, en: "Left axle, push tire+rim on", es: "Eje izquierdo, encaja llanta+rin", detail: { en: "First push the black tire onto the white rim, then click the rim onto the left axle end.", es: "Primero empuja la llanta negra sobre el rin blanco, luego encaja el rin en el extremo izquierdo del eje." } },
          { x: 82, y: 55, en: "Right axle, push tire+rim on", es: "Eje derecho, encaja llanta+rin", detail: { en: "First push the black tire onto the white rim, then click the rim onto the right axle end.", es: "Primero empuja la llanta negra sobre el rin blanco, luego encaja el rin en el extremo derecho del eje." } }
        ],
        help: { en: "Take a black rubber tire and stretch it around one white rim. Repeat for the second tire and rim. Then press each tire-and-rim together onto each end of the axle. Push firmly until they click on. Now Milo has wheels and can roll on the floor!", es: "Toma una llanta de goma negra y estírala alrededor de un rin blanco. Repite con la segunda llanta y rin. Luego presiona cada conjunto llanta-rin en cada extremo del eje. Empuja firmemente hasta que encajen. ¡Ahora Milo tiene ruedas y puede rodar por el piso!" }
      },
      {
        icon: "Box",
        pdfPage: 26,
        caption: { en: "Start Milo's head: orange plate + light-blue hook piece together.", es: "Inicia la cabeza de Milo: placa naranja + pieza azul con gancho juntas." },
        parts: [
          { emoji: "🩵", count: 1, en: "Light-blue hook piece 2×2", es: "Pieza azul clara con gancho 2×2" },
          { emoji: "🟠", count: 1, en: "Orange plate 2×4", es: "Placa naranja 2×4" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table, new sub-assembly", es: "Plana en la mesa, nuevo sub-ensamblaje", detail: { en: "Snap the blue hook piece onto the orange plate to form the base of Milo's head. Build this separately from the body.", es: "Encaja la pieza azul con gancho sobre la placa naranja para formar la base de la cabeza de Milo. Arma esto por separado del cuerpo." } }],
        help: { en: "Now we build Milo's head separately! Take the orange 2×4 plate and snap the light-blue hook piece onto one end of it. The hook sticks out from one end. Set this aside, we will add more pieces to it in the next steps.", es: "¡Ahora armamos la cabeza de Milo por separado! Toma la placa naranja 2×4 y encaja la pieza azul con gancho en un extremo. El gancho sale de un extremo. Ponla aparte, agregaremos más piezas en los próximos pasos." }
      },
      {
        icon: "Box",
        pdfPage: 27,
        caption: { en: "Add 2 small white blocks with side holes, they hold the antennas.", es: "Agrega 2 bloques blancos pequeños con agujeros, sostendrán las antenas." },
        parts: [{ emoji: "⬜", count: 2, en: "White brick 1×1 with side hole", es: "Ladrillo blanco 1×1 con agujero lateral" }],
        attach: [
          { x: 25, y: 40, en: "Left side of the head base", es: "Lado izquierdo de la base de la cabeza", detail: { en: "Press one white 1×1 brick with a side hole on the left side of the orange plate.", es: "Presiona un ladrillo blanco 1×1 con agujero lateral en el lado izquierdo de la placa naranja." } },
          { x: 75, y: 40, en: "Right side of the head base", es: "Lado derecho de la base de la cabeza", detail: { en: "Press the second white 1×1 brick on the right side of the orange plate.", es: "Presiona el segundo ladrillo blanco 1×1 en el lado derecho de la placa naranja." } }
        ],
        help: { en: "Take the two tiny white bricks, each is 1×1 size and has a small round hole on the side. Press one on the left side of the orange plate and one on the right side. The holes face outward, the antennas will go in those holes soon!", es: "Toma los dos ladrillos blancos pequeños, cada uno es de tamaño 1×1 y tiene un pequeño agujero redondo en el lado. Presiona uno en el lado izquierdo de la placa naranja y uno en el lado derecho. Los agujeros miran hacia afuera, ¡pronto las antenas irán en esos agujeros!" }
      },
      {
        icon: "Box",
        pdfPage: 28,
        caption: { en: "Add 2 more white bricks with holes, the sides of Milo's head.", es: "Agrega 2 ladrillos blancos más con agujeros, los lados de la cabeza de Milo." },
        parts: [{ emoji: "⬜", count: 2, en: "White brick 1×2 with holes", es: "Ladrillo blanco 1×2 con agujeros" }],
        attach: [
          { x: 25, y: 50, en: "Left wall of the head", es: "Pared izquierda de la cabeza", detail: { en: "Press one 1×2 white brick alongside the 1×1 brick on the left side, building up the left wall.", es: "Presiona un ladrillo blanco 1×2 junto al ladrillo 1×1 en el lado izquierdo, levantando la pared izquierda." } },
          { x: 75, y: 50, en: "Right wall of the head", es: "Pared derecha de la cabeza", detail: { en: "Press the second 1×2 white brick on the right side, building up the right wall.", es: "Presiona el segundo ladrillo blanco 1×2 en el lado derecho, levantando la pared derecha." } }
        ],
        help: { en: "Take the two larger white bricks (1×2 size with holes on them). Press one on the left side of the head and one on the right side, next to the smaller 1×1 bricks. These make the side walls of Milo's head block.", es: "Toma los dos ladrillos blancos más grandes (tamaño 1×2 con agujeros). Presiona uno en el lado izquierdo de la cabeza y uno en el lado derecho, junto a los ladrillos 1×1 más pequeños. Estos forman las paredes laterales del bloque de la cabeza de Milo." }
      },
      {
        icon: "Zap",
        pdfPage: 29,
        caption: { en: "Push 2 black antennas into the holes, Milo's feelers!", es: "Empuja 2 antenas negras en los agujeros, ¡los sensores de Milo!" },
        parts: [{ emoji: "📡", count: 2, en: "Black antenna", es: "Antena negra" }],
        attach: [
          { x: 20, y: 35, en: "Left side hole", es: "Agujero del lado izquierdo", detail: { en: "Push one black antenna into the round hole on the left side brick until it is secure.", es: "Empuja una antena negra en el agujero redondo del ladrillo del lado izquierdo hasta que quede segura." } },
          { x: 80, y: 35, en: "Right side hole", es: "Agujero del lado derecho", detail: { en: "Push the second black antenna into the right side hole.", es: "Empuja la segunda antena negra en el agujero del lado derecho." } }
        ],
        help: { en: "Take the two black antennas, they look like small black sticks with a round ball at the bottom. Push one firmly into the round hole on the left side white brick and one into the right side hole. They stick out like a bug's feelers and help Milo 'sense' things!", es: "Toma las dos antenas negras, parecen palitos negros pequeños con una bola redonda abajo. Empuja uno firmemente en el agujero redondo del ladrillo blanco del lado izquierdo y uno en el agujero del lado derecho. Sobresalen como las antenas de un insecto y ¡ayudan a Milo a 'sentir' cosas!" }
      },
      {
        icon: "Circle",
        pdfPage: 30,
        caption: { en: "Give Milo an eye! 1 round eye piece + 2 blue tiles on the sides.", es: "¡Dale un ojo a Milo! 1 ojo redondo + 2 azulejos azules en los lados." },
        parts: [
          { emoji: "👁️", count: 1, en: "Round eye piece 2×2", es: "Pieza de ojo redondo 2×2" },
          { emoji: "🟦", count: 2, en: "Blue tile 1×2", es: "Azulejo azul 1×2" }
        ],
        attach: [
          { x: 50, y: 50, en: "Front center of the head", es: "Centro frontal de la cabeza", detail: { en: "Press the round eye piece onto the front-center studs of the head assembly.", es: "Presiona el ojo redondo en los botones del centro delantero del ensamblaje de la cabeza." } },
          { x: 20, y: 50, en: "Left side of the eye", es: "Lado izquierdo del ojo", detail: { en: "Snap one blue tile to the left of the eye piece.", es: "Encaja un azulejo azul a la izquierda de la pieza del ojo." } },
          { x: 80, y: 50, en: "Right side of the eye", es: "Lado derecho del ojo", detail: { en: "Snap the second blue tile to the right of the eye piece.", es: "Encaja el segundo azulejo azul a la derecha de la pieza del ojo." } }
        ],
        help: { en: "Press the big round eye piece onto the front center of the head. Then snap one blue flat tile on the left side of the eye and one on the right side. Now Milo has a face and can 'look' at you! The eye is Milo's most important sensor.", es: "Presiona el ojo redondo grande en el centro delantero de la cabeza. Luego encaja un azulejo azul plano en el lado izquierdo del ojo y uno en el lado derecho. ¡Ahora Milo tiene cara y puede 'mirarte'! El ojo es el sensor más importante de Milo." }
      },
      {
        icon: "Minus",
        pdfPage: 31,
        caption: { en: "Make Milo's arm: black size-10 axle + orange ball on each end.", es: "Arma el brazo de Milo: eje negro tamaño 10 + bola naranja en cada punta." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle, size 10", es: "Eje negro, tamaño 10" },
          { emoji: "🟠", count: 2, en: "Orange ball joint", es: "Bola naranja articulada" }
        ],
        attach: [
          { x: 10, y: 50, en: "Left end of axle", es: "Extremo izquierdo del eje", detail: { en: "Push one orange ball firmly onto the left end of the long black axle.", es: "Empuja una bola naranja firmemente en el extremo izquierdo del eje negro largo." } },
          { x: 90, y: 50, en: "Right end of axle", es: "Extremo derecho del eje", detail: { en: "Push the second orange ball firmly onto the right end of the axle.", es: "Empuja la segunda bola naranja firmemente en el extremo derecho del eje." } }
        ],
        help: { en: "Take the long black axle (size 10, longer than the others). Push one orange ball joint firmly onto each end of the axle. The balls should be snug and not wobbly. This is Milo's arm that connects his head to his body!", es: "Toma el eje negro largo (tamaño 10, más largo que los otros). Empuja una bola naranja articulada firmemente en cada extremo del eje. Las bolas deben quedar firmes y sin moverse. ¡Este es el brazo de Milo que conecta su cabeza con su cuerpo!" }
      },
      {
        icon: "Sparkles",
        pdfPage: 32,
        caption: { en: "Last step! Hook Milo's head onto his body using the arm. Milo is done! 🎉", es: "¡Último paso! Engancha la cabeza de Milo al cuerpo con el brazo. ¡Milo está listo! 🎉" },
        parts: [],
        attach: [{ x: 25, y: 55, en: "Front hook of the body", es: "Gancho delantero del cuerpo", detail: { en: "Slide one orange ball of the arm into the blue hook on the head, and the other ball into the blue hook on the body's front. Flip Milo right-side up, he is complete!", es: "Desliza una bola naranja del brazo en el gancho azul de la cabeza, y la otra bola en el gancho azul del frente del cuerpo. Voltea a Milo, ¡está completo!" } }],
        help: { en: "Take the arm (axle with two orange balls). Click one orange ball into the blue hook piece on Milo's head. Click the other orange ball into the blue hook on the front of the body. Flip Milo right-side up. Ta-da, Milo the Science Rover is complete! Connect the Hub to your tablet to make him move!", es: "Toma el brazo (eje con dos bolas naranjas). Encaja una bola naranja en la pieza azul con gancho de la cabeza de Milo. Encaja la otra bola naranja en el gancho azul del frente del cuerpo. Voltea a Milo. ¡Ta-rán, Milo el Robot Científico está completo! ¡Conecta el Hub a tu tablet para que se mueva!" }
      }
    ]
  },
  ...availableKitModules,
];

export const words = {
  en: {
    chooseLanguage: "Choose your language", chooseKit: "Pick your kit", back: "Back",
    step: "Step", of: "of", stuck: "I'm stuck, help!", help: "Let's try together",
    close: "Got it", next: "Next step", previous: "Go back", finish: "I did it!",
    done: "Amazing work!", another: "Choose another kit", listen: "Listen", stop: "Stop",
    install: "Install", parts: "Parts you need", tapPin: "Tap a pin to see where it connects",
    createMode: "Create with AI", createPrompt: "Describe your LEGO idea...",
    createBtn: "Generate Instructions", creating: "Building your idea...",
    askAI: "Ask the AI Helper", askPlaceholder: "Type your question...",
    wedoSection: "WeDo 2.0", spikeSection: "Spike Prime", comingSoon: "Coming soon", comingSoonDesc: "New kits are on the way!"
  },
  es: {
    chooseLanguage: "Elige tu idioma", chooseKit: "Elige tu kit", back: "Atrás",
    step: "Paso", of: "de", stuck: "¡Necesito ayuda!", help: "Probemos juntos",
    close: "Entendido", next: "Siguiente paso", previous: "Regresar", finish: "¡Lo logré!",
    done: "¡Excelente trabajo!", another: "Elegir otro kit", listen: "Escuchar", stop: "Detener",
    install: "Instalar", parts: "Piezas que necesitas", tapPin: "Toca un pin para ver dónde va",
    createMode: "Crear con IA", createPrompt: "Describe tu idea de LEGO...",
    createBtn: "Generar instrucciones", creating: "Construyendo tu idea...",
    askAI: "Pregúntale a la IA", askPlaceholder: "Escribe tu pregunta...",
    wedoSection: "WeDo 2.0", spikeSection: "Spike Prime", comingSoon: "Próximamente", comingSoonDesc: "¡Nuevos kits en camino!"
  }
};