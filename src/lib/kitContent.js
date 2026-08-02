// Kit content — LEGO Education WeDo 2.0 Set 45300: Milo the Science Rover
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
        caption: { en: "Lay the orange plate flat. Put 2 slope bricks on top — the frog's base!", es: "Pon la placa naranja plana. Coloca 2 ladrillos inclinados encima — ¡la base de la rana!" },
        parts: [
          { emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" },
          { emoji: "🟠", count: 2, en: "Orange slope brick 1×2", es: "Ladrillo naranja inclinado 1×2" }
        ],
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the long orange plate flat on the table with studs up. Press one orange slope brick near each end — they make the front and back of the frog's body.", es: "Pon la placa naranja larga plana en la mesa con los botones hacia arriba. Presiona un ladrillo inclinado naranja cerca de cada extremo." } }],
        help: { en: "Find the long orange plate — it has 2 rows of 6 bumps. Lay it flat on the table with all the bumps pointing up. Now find 2 small orange slope bricks that are slanted on one side. Press one near each end of the orange plate. This is the very beginning of the frog's body!", es: "Busca la placa naranja larga — tiene 2 filas de 6 botones. Ponla plana con los botones hacia arriba. Ahora busca 2 ladrillos naranjas inclinados. Presiona uno cerca de cada extremo de la placa. ¡Este es el comienzo del cuerpo de la rana!" }
      },
      {
        icon: "Minus",
        pdfPage: 4,
        caption: { en: "Add 2 long green beams along the sides — the holes are for rods later!", es: "Agrega 2 vigas verdes largas a los lados — ¡los agujeros son para varillas!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green beam with holes 1×8", es: "Viga verde con agujeros 1×8" }],
        attach: [
          { x: 20, y: 45, en: "Left side, long way", es: "Lado izquierdo, a lo largo", detail: { en: "Press one green beam along the left side of the orange plate, running the full length.", es: "Presiona una viga verde a lo largo del lado izquierdo de la placa naranja." } },
          { x: 80, y: 45, en: "Right side, long way", es: "Lado derecho, a lo largo", detail: { en: "Press the second green beam along the right side, mirroring the first.", es: "Presiona la segunda viga verde a lo largo del lado derecho, igual que la primera." } }
        ],
        help: { en: "Find the 2 long lime-green pieces with round holes along them — they are 8 bumps long. Press one along the left edge of the orange plate and one along the right edge, running the full length. The round holes face sideways and will hold axles later.", es: "Busca las 2 piezas verde lima largas con agujeros redondos — miden 8 botones de largo. Presiona una a lo largo del borde izquierdo y otra a lo largo del borde derecho. Los agujeros redondos mirarán hacia el costado y sostendrán ejes más adelante." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Snap the second orange plate across the open end — now it's a closed frame!", es: "Encaja la segunda placa naranja en el extremo abierto — ¡ahora es un marco cerrado!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{ x: 50, y: 75, en: "Open end of the frame", es: "Extremo abierto del marco", detail: { en: "Press the second orange plate across the open end so the frame becomes a closed rectangle.", es: "Presiona la segunda placa naranja en el extremo abierto para que el marco quede cerrado como un rectángulo." } }],
        help: { en: "Take the second long orange plate (same as the one in Step 1). Press it flat across the open end of the frame — the end that does not have a plate yet. Now the shape looks like a picture frame, closed on all four sides!", es: "Toma la segunda placa naranja larga (igual a la del Paso 1). Presiónala en el extremo abierto del marco. ¡Ahora la forma parece el marco de un cuadro, cerrado por los cuatro lados!" }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Stack 2 short green bricks in the middle of one side — they build up the wall!", es: "Apila 2 ladrillos verdes cortos en el centro de un lado — ¡levantan la pared!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 35, y: 50, en: "Middle of the left side", es: "Centro del lado izquierdo", detail: { en: "Press both green bricks stacked on top of each other, nearer the middle of the side — not at the corner.", es: "Presiona ambos ladrillos verdes apilados uno encima del otro, más cerca del centro del lado — no en la esquina." } }],
        help: { en: "Take 2 short green bricks with holes — each is 4 bumps long. Press one on top of the other to stack them, then press the stack onto one side of the orange frame. Put them closer to the center of the side, not in the corner. They make a little green wall.", es: "Toma 2 ladrillos verdes cortos con agujeros — cada uno mide 4 botones de largo. Presiona uno encima del otro para apilarlos, luego presiona el conjunto sobre un lado del marco naranja. Ponlos más cerca del centro del lado, no en la esquina. Forman una pequeña pared verde." }
      },
      {
        icon: "Cpu",
        pdfPage: 7,
        caption: { en: "Press the Smart Hub onto the green beams — this is the frog's brain!", es: "Presiona el Smart Hub sobre las vigas verdes — ¡este es el cerebro de la rana!" },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white brick)", es: "Smart Hub (bloque blanco grande)" }],
        attach: [{ x: 60, y: 40, en: "On top of the green beams", es: "Encima de las vigas verdes", detail: { en: "Lower the Smart Hub down onto the green beams so it sits in the right side of the frame. The green button faces up.", es: "Baja el Smart Hub sobre las vigas verdes para que quede en el lado derecho del marco. El botón verde queda hacia arriba." } }],
        help: { en: "Find the big white-and-gray brick — it has a green button on top. This is the Smart Hub, the frog's brain! Press it firmly down onto the right side of the green beams, inside the frame. The green button should face up so you can press it later.", es: "Busca el ladrillo blanco y gris grande — tiene un botón verde encima. ¡Este es el Smart Hub, el cerebro de la rana! Presiónalo firmemente sobre el lado derecho de las vigas verdes, dentro del marco. El botón verde debe quedar hacia arriba." }
      },
      {
        icon: "Box",
        pdfPage: 8,
        caption: { en: "Add 2 blue bricks along the side of the Smart Hub.", es: "Agrega 2 ladrillos azules al costado del Smart Hub." },
        parts: [{ emoji: "🔵", count: 2, en: "Blue brick 1×2", es: "Ladrillo azul 1×2" }],
        attach: [{ x: 40, y: 55, en: "Side of the Smart Hub", es: "Costado del Smart Hub", detail: { en: "Press both blue bricks side by side along the side of the Smart Hub, filling the gap.", es: "Presiona ambos ladrillos azules uno al lado del otro a lo largo del costado del Smart Hub." } }],
        help: { en: "Find the 2 small blue bricks — each is 1 bump wide and 2 bumps long. Press them side by side along the left side of the Smart Hub. They fill in the gap between the Hub and the green wall and add a pop of blue color!", es: "Busca los 2 ladrillos azules pequeños — cada uno mide 1 botón de ancho y 2 de largo. Presiónados uno al lado del otro a lo largo del costado izquierdo del Smart Hub. ¡Llenan el espacio entre el Hub y la pared verde!" }
      },
      {
        icon: "Circle",
        pdfPage: 9,
        caption: { en: "Put 2 curved green pieces on the sides of the Hub — the frog gets a shape!", es: "Pon 2 piezas verdes curvas a los lados del Hub — ¡la rana toma forma!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green curved slope 1×4", es: "Pieza verde curva 1×4" }],
        attach: [
          { x: 35, y: 35, en: "Left side of the Hub", es: "Lado izquierdo del Hub", detail: { en: "Press one green curved slope on the left side of the Smart Hub, curving upward.", es: "Presiona una pieza verde curva en el lado izquierdo del Smart Hub, curvándose hacia arriba." } },
          { x: 70, y: 35, en: "Right side of the Hub", es: "Lado derecho del Hub", detail: { en: "Press the second green curved slope on the right side, mirroring the first.", es: "Presiona la segunda pieza verde curva en el lado derecho, igual que la primera." } }
        ],
        help: { en: "Find the 2 lime-green pieces with a long smooth curve on top — they are 4 bumps long. Press one on each side of the Smart Hub (NOT the front or back — the sides). They curve upward like the frog's rounded back and make the body look smooth.", es: "Busca las 2 piezas verde lima con una curva suave — miden 4 botones de largo. Presiona una a cada lado del Smart Hub (NO al frente ni atrás — los lados). Se curvan hacia arriba como la espalda redondeada de la rana." }
      },
      {
        icon: "Cpu",
        pdfPage: 10,
        caption: { en: "Meet the motor! Plug its black cable into the Smart Hub — it makes the frog hop!", es: "¡Conoce el motor! Conecta su cable negro al Smart Hub — ¡hace saltar a la rana!" },
        parts: [{ emoji: "⚙️", count: 1, en: "Motor with cable", es: "Motor con cable" }],
        attach: [{ x: 30, y: 55, en: "Front of the model, cable into Hub", es: "Frente del modelo, cable al Hub", detail: { en: "Press the motor onto the front of the model, then push the cable's connector into any port on the Smart Hub.", es: "Presiona el motor en la parte delantera del modelo, luego empuja el conector del cable en cualquier puerto del Smart Hub." } }],
        help: { en: "Find the gray motor — it has a round spinning end and a long black cable coiled around it. Push the motor onto the front of the frame. Then take the cable and push its connector firmly into one of the ports on the side of the Smart Hub until it clicks. The motor is what will make the frog jump!", es: "Busca el motor gris — tiene un extremo redondo que gira y un cable negro largo enroscado. Empuja el motor en la parte delantera del marco. Luego toma el cable y empuja su conector en uno de los puertos del Smart Hub hasta que haga clic. ¡El motor hará saltar a la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 11,
        caption: { en: "Press 2 blue curved pieces over the top to hold the cable in place.", es: "Presiona 2 piezas azules curvas por arriba para sujetar el cable en su lugar." },
        parts: [{ emoji: "🩵", count: 2, en: "Blue curved slope 1×4", es: "Pieza azul curva 1×4" }],
        attach: [{ x: 50, y: 30, en: "Over the top of the Hub", es: "Sobre la parte de arriba del Hub", detail: { en: "Lay both blue curved slopes over the top of the Smart Hub, side by side, so they hold the motor cable neatly in a curve.", es: "Coloca ambas piezas azules curvas sobre la parte de arriba del Smart Hub, una al lado de la otra, para que sujeten el cable del motor en forma de curva." } }],
        help: { en: "Find the 2 light-blue curved pieces. Press them side by side over the top of the Smart Hub, curving over it like a bridge. They hold the motor's black cable in a neat arch — the cable should curve up and over, not dangle loose.", es: "Busca las 2 piezas azules curvas. Presiónadas una al lado de la otra sobre la parte de arriba del Smart Hub, curvándose como un puente. Sujetan el cable negro del motor en un arco ordenado." }
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
        help: { en: "Find the short black rod (it is only about 3 units long). Slide it all the way into the round hole in the center of the motor's face — the spinning end. Then take the small black connector and push it firmly onto the end of the rod that sticks out. It stops the rod from sliding out.", es: "Busca la varilla negra corta (mide solo unas 3 unidades de largo). Deslízala por el agujero redondo en el centro de la cara del motor — el extremo que gira. Luego toma el conector negro pequeño y empújalo firmemente en la punta de la varilla que sobresale." }
      },
      {
        icon: "Box",
        pdfPage: 13,
        caption: { en: "Snap the short green brick onto the side of the motor — like a little wall.", es: "Encaja el ladrillo verde corto en el costado del motor — como una paredita." },
        parts: [{ emoji: "🟢", count: 1, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 40, y: 55, en: "Side of the motor", es: "Costado del motor", detail: { en: "Press the green 1×4 brick onto the side of the motor, standing upright. Its holes face sideways.", es: "Presiona el ladrillo verde 1×4 en el costado del motor, parado verticalmente. Sus agujeros miran de lado." } }],
        help: { en: "Take the short green brick with holes (4 bumps long). Press it onto the side of the motor so it stands upright like a little wall. The round holes in the brick should face out to the side — an axle will go through them later.", es: "Toma el ladrillo verde corto con agujeros (4 botones de largo). Presiónalo en el costado del motor para que quede parado como una paredita. Los agujeros redondos deben mirar hacia afuera — pronto pasará un eje por ellos." }
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
        help: { en: "Take the longest black rod (size 10 — the longest one in the set). First slide the gray tube onto it, then push the red pin into the end. Now push the whole rod through the round holes in the green beams, going from the front all the way to the back. It should stick out both sides a little.", es: "Toma la varilla negra más larga (tamaño 10 — la más larga del set). Primero desliza el tubo gris y luego empuja el pasador rojo. Ahora pasa toda la varilla por los agujeros redondos de las vigas verdes, de adelante hacia atrás. Debe sobresalir un poco por ambos lados." }
      },
      {
        icon: "Circle",
        pdfPage: 15,
        caption: { en: "Put the small gear on the motor rod and the big gear on the long rod — they lock teeth!", es: "Pon el engranaje pequeño en la varilla del motor y el grande en la larga — ¡encajan!" },
        parts: [
          { emoji: "⚙️", count: 1, en: "Small gear", es: "Engranaje pequeño" },
          { emoji: "⚙️", count: 1, en: "Large gear", es: "Engranaje grande" }
        ],
        attach: [
          { x: 38, y: 60, en: "Small gear on motor rod", es: "Engranaje pequeño en varilla del motor", detail: { en: "Push the small gear onto the short rod sticking out of the motor.", es: "Empuja el engranaje pequeño en la varilla corta que sobresale del motor." } },
          { x: 55, y: 60, en: "Big gear on long rod", es: "Engranaje grande en varilla larga", detail: { en: "Push the large gear onto the long rod so its teeth mesh with the small gear's teeth.", es: "Empuja el engranaje grande en la varilla larga para que sus dientes encajen con los del engranaje pequeño." } }
        ],
        help: { en: "Find the 2 gears — one small (fewer teeth) and one large (more teeth). Push the small gear onto the short rod sticking out of the motor. Push the large gear onto the long rod. Make sure the teeth of both gears line up and touch each other. When the motor spins the small gear, it will make the big gear spin too!", es: "Busca los 2 engranajes — uno pequeño (menos dientes) y uno grande (más dientes). Empuja el engranaje pequeño en la varilla corta del motor. Empuja el engranaje grande en la varilla larga. Asegúrate de que los dientes de ambos engranajes se toquen. ¡Cuando el motor gire el engranaje pequeño, también hará girar el grande!" }
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
        help: { en: "Carefully flip the whole model upside down so the bottom is facing up. Find 4 black round flat pieces (2×2 round). Press one onto each orange plate area — two at the front and two at the back. These will become part of the frog's feet!", es: "Voltea cuidadosamente todo el modelo boca abajo. Busca 4 piezas planas negras redondas (2×2 redondas). Presiona una en cada área naranja — dos adelante y dos atrás. ¡Estas se convertirán en parte de las patas de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 17,
        caption: { en: "Snap a black round dot onto an orange plate — press this pair onto the model.", es: "Encaja un punto negro en una placa naranja — presiona este par en el modelo." },
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
        attach: [{ x: 50, y: 60, en: "Flat on the table — separate build", es: "Plana en la mesa — pieza aparte", detail: { en: "Set this aside from the main model. Press the orange plate on top of the black round plate to make a small sub-assembly.", es: "Ponla aparte del modelo principal. Presiona la placa naranja encima de la placa negra redonda para hacer un sub-ensamblaje." } }],
        help: { en: "This step builds a small separate piece — not on the main model yet! Take the black round plate and press the orange 2×4 plate on top of it. Set it aside. This little piece will become the top of the frog's head in the next steps.", es: "¡Este paso arma una pieza aparte — todavía no va en el modelo! Toma la placa negra redonda y presiona la placa naranja 2×4 encima. Ponla aparte. Esta pequeña pieza se convertirá en la parte de arriba de la cabeza de la rana." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 19,
        caption: { en: "Add 2 orange slope pieces to that separate piece — the head is taking shape!", es: "Agrega 2 piezas naranjas inclinadas a la pieza aparte — ¡la cabeza toma forma!" },
        parts: [{ emoji: "🟠", count: 2, en: "Orange slope brick 1×2", es: "Ladrillo naranja inclinado 1×2" }],
        attach: [{ x: 50, y: 55, en: "On the separate piece", es: "En la pieza aparte", detail: { en: "Press both orange slope bricks onto the separate orange plate — one near each end, with the slope pointing outward.", es: "Presiona ambos ladrillos naranjas inclinados sobre la placa naranja aparte — uno cerca de cada extremo, con la inclinación hacia afuera." } }],
        help: { en: "Take the separate piece you just built. Press both orange slope bricks on top of it, one near each end. The slanted side should face outward. This makes the sloped sides of the frog's head. It is starting to look like a frog!", es: "Toma la pieza aparte que acabas de armar. Presiona ambos ladrillos naranjas inclinados encima, uno cerca de cada extremo. El lado inclinado debe mirar hacia afuera. ¡Esto hace los lados inclinados de la cabeza de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 20,
        caption: { en: "Put a green round dot on top of the head piece — the frog's forehead!", es: "Pon un punto verde redondo encima de la pieza de la cabeza — ¡la frente de la rana!" },
        parts: [{ emoji: "🟢", count: 1, en: "Green round plate 2×2", es: "Placa redonda verde 2×2" }],
        attach: [{ x: 30, y: 40, en: "Left top of the head piece", es: "Parte superior izquierda de la cabeza", detail: { en: "Press the green round plate onto the top-left area of the head sub-assembly.", es: "Presiona la placa redonda verde en el área superior izquierda del sub-ensamblaje de la cabeza." } }],
        help: { en: "Find the small green round plate (2×2 round, same size as the black ones). Press it on top of the head sub-assembly on the left side. The green circle peeks out and becomes the frog's forehead. Make sure it is pressed firmly down.", es: "Busca la placa redonda verde pequeña (2×2 redonda, del mismo tamaño que las negras). Presiónala encima del sub-ensamblaje de la cabeza en el lado izquierdo. El círculo verde sobresale y se convierte en la frente de la rana." }
      },
      {
        icon: "Circle",
        pdfPage: 21,
        caption: { en: "Add 2 green slope pieces on top — the head is complete!", es: "Agrega 2 piezas verdes inclinadas encima — ¡la cabeza está completa!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green slope brick 1×2", es: "Ladrillo verde inclinado 1×2" }],
        attach: [{ x: 50, y: 40, en: "Top of the head piece", es: "Parte de arriba de la pieza cabeza", detail: { en: "Press both green slope bricks on top of the head piece, side by side, sloping toward the front to make a pointed snout.", es: "Presiona ambos ladrillos verdes inclinados encima de la pieza cabeza, uno al lado del otro, inclinándose hacia el frente para hacer el hocico." } }],
        help: { en: "Take the 2 green slope bricks. Press them side by side on top of the head piece, with the sloped side pointing toward the front. This makes the frog's snout! Now press this whole head piece onto the front of the main model where the arrow is pointing.", es: "Toma los 2 ladrillos verdes inclinados. Presiónados uno al lado del otro encima de la pieza cabeza, con el lado inclinado apuntando al frente. ¡Esto hace el hocico de la rana! Ahora presiona toda la pieza cabeza en la parte delantera del modelo principal." }
      },
      {
        icon: "Zap",
        pdfPage: 22,
        caption: { en: "Press the head piece onto the model — the frog has a face now!", es: "Presiona la pieza cabeza en el modelo — ¡la rana ya tiene cara!" },
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
        help: { en: "Find the 2 orange slope bricks — they are slightly longer this time (1×3). Press one on top of each of the 2 clear blue curved pieces at the back of the model. The orange slope should cover the blue piece and slope downward toward the back. These are the frog's back leg joints!", es: "Busca los 2 ladrillos naranjas inclinados — son un poco más largos esta vez (1×3). Presiona uno encima de cada una de las 2 piezas azules curvas transparentes en la parte trasera del modelo. ¡Estas son las articulaciones de las patas traseras de la rana!" }
      },
      {
        icon: "Circle",
        pdfPage: 24,
        caption: { en: "Time for eyes! Press white eye pieces onto white brackets — attach one on each side.", es: "¡Hora de los ojos! Presiona piezas blancas en soportes — coloca uno a cada lado." },
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
        caption: { en: "Add 2 small green curved pieces above the eyes — they're the eyebrows!", es: "Agrega 2 pequeñas piezas verdes curvas sobre los ojos — ¡son las cejas!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green curved slope 1×2", es: "Pieza verde curva 1×2" }],
        attach: [
          { x: 22, y: 32, en: "Just above the left eye", es: "Justo encima del ojo izquierdo", detail: { en: "Press one small green curved piece just above the left eye.", es: "Presiona una pequeña pieza verde curva justo encima del ojo izquierdo." } },
          { x: 78, y: 32, en: "Just above the right eye", es: "Justo encima del ojo derecho", detail: { en: "Press the second green curved piece just above the right eye.", es: "Presiona la segunda pieza verde curva justo encima del ojo derecho." } }
        ],
        help: { en: "Find the 2 small green curved pieces — shorter than the ones used earlier. Press one just above each white eye piece. They curve upward like little eyebrows, giving the frog a friendly expression. The frog can now 'look' at you!", es: "Busca las 2 pequeñas piezas verdes curvas — más cortas que las usadas antes. Presiona una justo encima de cada ojo blanco. Se curvan hacia arriba como pequeñas cejas, dándole a la rana una expresión amigable. ¡La rana ahora puede 'mirarte'!" }
      },
      {
        icon: "Circle",
        pdfPage: 26,
        caption: { en: "Push small black dots into the white eyes — now the frog can look at you!", es: "Empuja puntos negros pequeños en los ojos blancos — ¡ahora la rana puede mirarte!" },
        parts: [{ emoji: "⚫", count: 2, en: "Black round piece 1×1", es: "Pieza negra redonda 1×1" }],
        attach: [
          { x: 22, y: 48, en: "Center of the left eye", es: "Centro del ojo izquierdo", detail: { en: "Push one small black round piece into the center of the left white eye.", es: "Empuja una pequeña pieza negra redonda en el centro del ojo blanco izquierdo." } },
          { x: 78, y: 48, en: "Center of the right eye", es: "Centro del ojo derecho", detail: { en: "Push one small black round piece into the center of the right white eye.", es: "Empuja una pequeña pieza negra redonda en el centro del ojo blanco derecho." } }
        ],
        help: { en: "Find the 2 tiny black round pieces (1×1 size — the smallest round pieces). Push one into the center of each white eyeball. They are the frog's pupils and make the eyes look alive! Press firmly until they sit snugly in the center.", es: "Busca las 2 pequeñas piezas negras redondas (tamaño 1×1 — las piezas redondas más pequeñas). Empuja una en el centro de cada ojo blanco. ¡Son las pupilas de la rana y hacen que los ojos parezcan vivos! Presiona firmemente hasta que queden en el centro." }
      },
      {
        icon: "Box",
        pdfPage: 27,
        caption: { en: "Build a separate sensor piece: 2 gray bricks onto a white plate.", es: "Arma una pieza sensor aparte: 2 ladrillos grises sobre una placa blanca." },
        parts: [
          { emoji: "⬜", count: 1, en: "White plate 1×4", es: "Placa blanca 1×4" },
          { emoji: "⬛", count: 2, en: "Gray brick with cross hole 1×2", es: "Ladrillo gris con agujero de cruz 1×2" }
        ],
        attach: [{ x: 50, y: 60, en: "Flat on the table — separate build", es: "Plana en la mesa — pieza aparte", detail: { en: "Press both gray bricks side by side on top of the white plate. Build this separately from the main model.", es: "Presiona ambos ladrillos grises uno al lado del otro encima de la placa blanca. Arma esto aparte del modelo principal." } }],
        help: { en: "Set aside from the main model for now. Take the white plate (1×4, 4 bumps long) and press the 2 gray bricks side by side on top of it. The gray bricks have a special cross-shaped hole on the side — that is where the connector goes next.", es: "Aparta del modelo principal por ahora. Toma la placa blanca (1×4, 4 botones de largo) y presiona los 2 ladrillos grises uno al lado del otro encima. Los ladrillos grises tienen un agujero en forma de cruz en el costado — ahí va el conector en el próximo paso." }
      },
      {
        icon: "Zap",
        pdfPage: 28,
        caption: { en: "Push the red connector into the cross hole, then add a black connector on top.", es: "Empuja el conector rojo en el agujero de cruz, luego agrega un conector negro encima." },
        parts: [
          { emoji: "🔴", count: 1, en: "Red connector pin", es: "Pasador conector rojo" },
          { emoji: "⬛", count: 1, en: "Black connector", es: "Conector negro" }
        ],
        attach: [{ x: 70, y: 50, en: "Side cross hole of the gray bricks", es: "Agujero de cruz lateral de los ladrillos grises", detail: { en: "Push the red connector into the cross-shaped hole on the side of the gray bricks, then press the black connector onto the red one. Build a second identical piece — you need two total.", es: "Empuja el conector rojo en el agujero en forma de cruz del costado de los ladrillos grises, luego presiona el conector negro sobre el rojo. Arma una segunda pieza idéntica — necesitas dos en total." } }],
        help: { en: "Push the red connector into the cross-shaped hole on the side of the gray bricks — it only fits one way. Then press the black connector onto the red one. Now build a second identical piece exactly the same way so you have 2 total.", es: "Empuja el conector rojo en el agujero en forma de cruz del costado de los ladrillos grises — solo entra de una manera. Luego presiona el conector negro sobre el rojo. Ahora arma una segunda pieza idéntica para tener 2 en total." }
      },
      {
        icon: "Zap",
        pdfPage: 29,
        caption: { en: "Attach one sensor piece to the top of the model near the gears. Keep one aside.", es: "Coloca una pieza sensor encima del modelo cerca de los engranajes. Guarda la otra." },
        parts: [],
        attach: [{ x: 55, y: 35, en: "Near the gears on top", es: "Cerca de los engranajes arriba", detail: { en: "Press one of the two sensor pieces onto the top of the model, close to where the gears are. Keep the second piece set aside — it connects later.", es: "Presiona una de las dos piezas sensor encima del modelo, cerca de donde están los engranajes. Guarda la segunda pieza aparte — se conecta más adelante." } }],
        help: { en: "Take ONE of the 2 sensor pieces you built. Press it onto the top of the main model near the gears — the diagram shows exactly where with an arrow. Leave the second sensor piece to the side. It will connect when you turn on the Smart Hub.", es: "Toma UNA de las 2 piezas sensor que armaste. Presiónala encima del modelo principal cerca de los engranajes — el diagrama muestra exactamente dónde con una flecha. Deja la segunda pieza sensor a un lado. Se conectará cuando enciendas el Smart Hub." }
      },
      {
        icon: "Sparkles",
        pdfPage: 30,
        caption: { en: "Last step! Your frog is done! Press the green button and watch it hop! 🐸🎉", es: "¡Último paso! ¡Tu rana está lista! Presiona el botón verde y mírala saltar! 🐸🎉" },
        parts: [],
        attach: [{ x: 50, y: 35, en: "Green button on the Smart Hub", es: "Botón verde del Smart Hub", detail: { en: "Press the green button on top of the Smart Hub to turn on the frog. Connect your tablet and watch it jump!", es: "Presiona el botón verde encima del Smart Hub para encender la rana. ¡Conecta tu tablet y mírala saltar!" } }],
        help: { en: "Your frog is complete! Press the green button on top of the Smart Hub to turn it on. Connect the Hub to the WeDo 2.0 app on your tablet. Run a program to make the motor spin — and the frog will hop! Great job, you built the whole thing yourself!", es: "¡Tu rana está completa! Presiona el botón verde encima del Smart Hub para encenderla. Conecta el Hub a la app WeDo 2.0 en tu tablet. Ejecuta un programa para que el motor gire — ¡y la rana saltará! ¡Buen trabajo, la construiste tú mismo!" }
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
        caption: { en: "Place 2 green plates side by side — this is Milo's floor!", es: "Pon 2 placas verdes una al lado de la otra — ¡este es el piso de Milo!" },
        parts: [{ emoji: "🟩", count: 2, en: "Green plate 2×8", es: "Placa verde 2×8" }],
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Planas sobre la mesa", detail: { en: "Put both green plates flat on the table with the studs pointing up, touching side by side like railroad tracks.", es: "Pon las dos placas verdes planas en la mesa con los botones hacia arriba, una al lado de la otra como rieles." } }],
        help: { en: "Find the two long green plates — they have 2 rows of 8 bumps each. Lay them flat on the table right next to each other so they touch along the long side. Studs point up. This is the bottom floor of Milo's body.", es: "Busca las dos placas verdes largas — tienen 2 filas de 8 botones cada una. Ponlas planas en la mesa, una junto a la otra por el lado largo. Los botones apuntan hacia arriba. Este es el piso del cuerpo de Milo." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Snap on the lime-green rounded plate to make the base bigger.", es: "Encaja la placa verde clara con punta redondeada para agrandar la base." },
        parts: [{ emoji: "🟢", count: 1, en: "Lime-green rounded plate ~4×6", es: "Placa verde clara redondeada ~4×6" }],
        attach: [{ x: 70, y: 50, en: "Right end of the green plates", es: "Extremo derecho de las placas verdes", detail: { en: "Snap the lime plate onto the right end of the two green plates so the rounded corner sticks out to the right.", es: "Encaja la placa verde clara en el extremo derecho de las dos placas verdes para que la esquina redondeada salga hacia la derecha." } }],
        help: { en: "Find the lighter green plate — it has one rounded corner. Snap it on top of the right end of your green base so the round corner sticks out to the right. Press firmly until it clicks.", es: "Busca la placa verde más clara — tiene una esquina redondeada. Encájala encima del extremo derecho de tu base verde para que la esquina redonda salga a la derecha. Presiona hasta que haga clic." }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Stand 2 small black brackets on the green base. They'll hold a spinning part!", es: "Para 2 soportes negros pequeños en la base verde. ¡Sostendrán una pieza giratoria!" },
        parts: [{ emoji: "⬛", count: 2, en: "Small black bracket 1×2 with holes", es: "Soporte negro pequeño 1×2 con agujeros" }],
        attach: [{ x: 50, y: 40, en: "Center of the green base", es: "Centro de la base verde", detail: { en: "Press both black brackets standing upright, side by side, in the center of the green base. The round holes face outward.", es: "Presiona los dos soportes negros de pie, uno al lado del otro, en el centro de la base verde. Los agujeros redondos miran hacia afuera." } }],
        help: { en: "Take the two small black pieces that look like little brackets with round holes on the side. Press them upright onto the center of the green base, side by side. The round holes should face out to the sides — those holes are where an axle will slide through later.", es: "Toma los dos piezas negras pequeñas que parecen soportes con agujeros redondos en el lado. Presiónate de pie en el centro de la base verde, uno al lado del otro. Los agujeros redondos deben mirar hacia afuera — por esos agujeros pasará un eje más adelante." }
      },
      {
        icon: "Minus",
        pdfPage: 7,
        caption: { en: "Lay the long lime-green beam with holes across the top.", es: "Coloca la viga verde larga con agujeros a lo largo de la parte de arriba." },
        parts: [{ emoji: "🟢", count: 1, en: "Lime-green beam with holes 1×8", es: "Viga verde clara con agujeros 1×8" }],
        attach: [{ x: 50, y: 30, en: "Across the top of the base", es: "A lo largo de la parte superior de la base", detail: { en: "Press the long lime beam flat across the very top row of studs on the green base, spanning its full length.", es: "Presiona la viga verde larga y plana a lo largo de la fila superior de botones de la base verde, de punta a punta." } }],
        help: { en: "Find the long lime-green piece with 7 round holes along it — it is 8 bumps long. Press it flat along the very top row of your green base, spanning the whole length. The holes along it are for axles that we will add soon.", es: "Busca la pieza verde clara larga con 7 agujeros redondos — mide 8 botones de largo. Presiónala a lo largo de la fila superior de tu base verde, de punta a punta. Los agujeros son para los ejes que agregaremos pronto." }
      },
      {
        icon: "RectangleHorizontal",
        pdfPage: 8,
        caption: { en: "Set 2 orange plates side by side — bright like a pumpkin!", es: "Pon 2 placas naranjas una al lado de la otra — ¡brillantes como una calabaza!" },
        parts: [{ emoji: "🟠", count: 2, en: "Orange plate 2×4", es: "Placa naranja 2×4" }],
        attach: [{ x: 50, y: 55, en: "Flat on the table separately", es: "Planas en la mesa, por separado", detail: { en: "Put the two orange plates flat on the table next to each other — this is a sub-assembly for the front of Milo.", es: "Pon las dos placas naranjas planas en la mesa una al lado de la otra — esta es una sub-pieza para la parte delantera de Milo." } }],
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
        caption: { en: "Add the light-blue see-through hook piece — Milo's grabber!", es: "Agrega la pieza azul transparente con gancho — ¡el agarrador de Milo!" },
        parts: [{ emoji: "🩵", count: 1, en: "Light-blue hook piece 2×2", es: "Pieza azul clara con gancho 2×2" }],
        attach: [{ x: 25, y: 50, en: "Left side of the orange section", es: "Lado izquierdo de la sección naranja", detail: { en: "Snap the blue hook piece onto the left end of the orange plates so the hook loop sticks out to the left.", es: "Encaja la pieza azul con gancho en el extremo izquierdo de las placas naranjas para que el bucle del gancho salga a la izquierda." } }],
        help: { en: "Find the clear light-blue piece with a small loop or hook at one end. Snap it onto the left end of the orange section so the hook sticks out to the left. This hook is what Milo uses to connect to things.", es: "Busca la pieza azul clara transparente con un pequeño lazo o gancho en un extremo. Encájala en el extremo izquierdo de la sección naranja para que el gancho salga a la izquierda. Este gancho es lo que Milo usa para conectarse a las cosas." }
      },
      {
        icon: "Zap",
        pdfPage: 11,
        caption: { en: "Push the orange-blue piece into the front of the green body — they join!", es: "Empuja la pieza naranja-azul en la parte delantera del cuerpo verde — ¡se unen!" },
        parts: [],
        attach: [{ x: 20, y: 50, en: "Front-left of the green base", es: "Parte delantera izquierda de la base verde", detail: { en: "Slide the orange sub-assembly into the front-left of the green base so the blue hook sticks out front. Press until the pieces click together.", es: "Desliza el sub-ensamblaje naranja hacia la parte delantera izquierda de la base verde para que el gancho azul salga por el frente. Presiona hasta que las piezas encajen." } }],
        help: { en: "Take the orange-and-blue piece you built. Push it into the front-left corner of the green base. The blue hook should point forward, away from the body. Press firmly — both sections now click together into one robot body!", es: "Toma la pieza naranja y azul que armaste. Empújala en la esquina delantera izquierda de la base verde. El gancho azul debe apuntar hacia adelante, alejándose del cuerpo. Presiona con fuerza — ¡ambas secciones ahora encajan en un solo cuerpo de robot!" }
      },
      {
        icon: "Box",
        pdfPage: 12,
        caption: { en: "Snap in the bright turquoise 2×2 brick — a fun pop of color!", es: "Encaja el bloque turquesa brillante 2×2 — ¡un toque de color divertido!" },
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
        help: { en: "Take the long black axle — it has the number 6 on it. Slide it all the way through the two round holes in the black brackets on the green base. Then take the small gray piece (bushing/connector) and push it firmly onto one end of the axle so it cannot slide out.", es: "Toma el eje negro largo — tiene el número 6. Deslízalo por los dos agujeros redondos en los soportes negros de la base verde. Luego toma la pieza gris pequeña (buje/conector) y empújala firmemente en un extremo del eje para que no se salga." }
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
        caption: { en: "Pop gray caps onto both ends of each axle — they stop axles sliding out!", es: "Pon tapitas grises en ambas puntas de cada eje — ¡evitan que se salgan!" },
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
        caption: { en: "Set the motor on top of Milo's body — the arrow shows where it goes!", es: "Coloca el motor encima del cuerpo de Milo — ¡la flecha muestra dónde va!" },
        parts: [],
        attach: [{ x: 68, y: 35, en: "Right end of the body (top)", es: "Extremo derecho del cuerpo (encima)", detail: { en: "Lower the motor onto the right end of the top of the body so its studs click into the green beam holes.", es: "Baja el motor sobre el extremo derecho de la parte superior del cuerpo para que sus botones encajen en los agujeros de la viga verde." } }],
        help: { en: "Hold the motor with the white pulley wheel pointing to the right side. Lower it down onto the right portion of the top of the green body. Line up the motor's base with the studs and press until it clicks in. The cable hangs off to the back.", es: "Sostén el motor con la rueda de polea blanca apuntando al lado derecho. Bájalo sobre la parte derecha de la parte superior del cuerpo verde. Alinea la base del motor con los botones y presiona hasta que haga clic. El cable cuelga hacia atrás." }
      },
      {
        icon: "Cpu",
        pdfPage: 20,
        caption: { en: "Add the Smart Hub — Milo's brain! Plug the motor cable in.", es: "¡Agrega el Smart Hub — el cerebro de Milo! Conecta el cable del motor." },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white/gray brick)", es: "Smart Hub (bloque blanco/gris grande)" }],
        attach: [{ x: 50, y: 40, en: "On top of the motor and body", es: "Encima del motor y del cuerpo", detail: { en: "Press the Smart Hub on top of the motor and body. Then push the motor's cable connector into one of the Hub's ports.", es: "Presiona el Smart Hub encima del motor y el cuerpo. Luego empuja el conector del cable del motor en uno de los puertos del Hub." } }],
        help: { en: "The Smart Hub is the large white brick with a green button on the front — it is Milo's brain! Press it on top of the motor and green body. Then take the cable from the motor and push its connector into any port on the side of the Hub. It only fits one way.", es: "El Smart Hub es el ladrillo blanco grande con un botón verde — ¡es el cerebro de Milo! Presiónalo sobre el motor y el cuerpo verde. Luego toma el cable del motor y empuja su conector en cualquier puerto del lado del Hub. Solo entra de una manera." }
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
        caption: { en: "Press 2 black round dots and 1 green round dot on top — like little buttons!", es: "Presiona 2 puntos redondos negros y 1 verde encima — ¡como botoncitos!" },
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
        caption: { en: "Add 2 clear blue spinner wheels — one on each side.", es: "Agrega 2 ruedas giradoras azules transparentes — una de cada lado." },
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
        caption: { en: "Loop the yellow band around a blue wheel and the motor wheel — like a bike chain!", es: "Pasa la banda amarilla alrededor de una rueda azul y la del motor — ¡como cadena de bici!" },
        parts: [{ emoji: "🟡", count: 1, en: "Yellow rubber belt", es: "Banda de goma amarilla" }],
        attach: [{ x: 50, y: 50, en: "Around both pulley wheels", es: "Alrededor de las dos ruedas de polea", detail: { en: "Stretch the yellow band around the blue pulley wheel and the white motor pulley so the band forms a loop connecting both.", es: "Estira la banda amarilla alrededor de la rueda de polea azul y la rueda blanca del motor para que la banda forme un lazo que conecte ambas." } }],
        help: { en: "Take the stretchy yellow rubber band. Loop it around one of the blue wheels on the axle AND around the white motor wheel. Stretch it gently — it should form a loop between the two wheels, just like a bicycle chain. When the motor spins, the band will make the axle spin too!", es: "Toma la banda de goma amarilla elástica. Pásala alrededor de una de las ruedas azules en el eje Y alrededor de la rueda blanca del motor. Estírala suavemente — debe formar un lazo entre las dos ruedas, como la cadena de una bicicleta. ¡Cuando el motor gire, la banda hará girar el eje también!" }
      },
      {
        icon: "Circle",
        pdfPage: 25,
        caption: { en: "Push tires onto white rims, then click them on — Milo can roll now!", es: "Pon las llantas sobre los rines blancos y encájalos — ¡ya puede rodar Milo!" },
        parts: [
          { emoji: "🖤", count: 2, en: "Black rubber tire", es: "Llanta de goma negra" },
          { emoji: "⚪", count: 2, en: "White wheel rim", es: "Rin blanco" }
        ],
        attach: [
          { x: 18, y: 55, en: "Left axle — push tire+rim on", es: "Eje izquierdo — encaja llanta+rin", detail: { en: "First push the black tire onto the white rim, then click the rim onto the left axle end.", es: "Primero empuja la llanta negra sobre el rin blanco, luego encaja el rin en el extremo izquierdo del eje." } },
          { x: 82, y: 55, en: "Right axle — push tire+rim on", es: "Eje derecho — encaja llanta+rin", detail: { en: "First push the black tire onto the white rim, then click the rim onto the right axle end.", es: "Primero empuja la llanta negra sobre el rin blanco, luego encaja el rin en el extremo derecho del eje." } }
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
        attach: [{ x: 50, y: 55, en: "Flat on the table — new sub-assembly", es: "Plana en la mesa — nuevo sub-ensamblaje", detail: { en: "Snap the blue hook piece onto the orange plate to form the base of Milo's head. Build this separately from the body.", es: "Encaja la pieza azul con gancho sobre la placa naranja para formar la base de la cabeza de Milo. Arma esto por separado del cuerpo." } }],
        help: { en: "Now we build Milo's head separately! Take the orange 2×4 plate and snap the light-blue hook piece onto one end of it. The hook sticks out from one end. Set this aside — we will add more pieces to it in the next steps.", es: "¡Ahora armamos la cabeza de Milo por separado! Toma la placa naranja 2×4 y encaja la pieza azul con gancho en un extremo. El gancho sale de un extremo. Ponla aparte — agregaremos más piezas en los próximos pasos." }
      },
      {
        icon: "Box",
        pdfPage: 27,
        caption: { en: "Add 2 small white blocks with side holes — they hold the antennas.", es: "Agrega 2 bloques blancos pequeños con agujeros — sostendrán las antenas." },
        parts: [{ emoji: "⬜", count: 2, en: "White brick 1×1 with side hole", es: "Ladrillo blanco 1×1 con agujero lateral" }],
        attach: [
          { x: 25, y: 40, en: "Left side of the head base", es: "Lado izquierdo de la base de la cabeza", detail: { en: "Press one white 1×1 brick with a side hole on the left side of the orange plate.", es: "Presiona un ladrillo blanco 1×1 con agujero lateral en el lado izquierdo de la placa naranja." } },
          { x: 75, y: 40, en: "Right side of the head base", es: "Lado derecho de la base de la cabeza", detail: { en: "Press the second white 1×1 brick on the right side of the orange plate.", es: "Presiona el segundo ladrillo blanco 1×1 en el lado derecho de la placa naranja." } }
        ],
        help: { en: "Take the two tiny white bricks — each is 1×1 size and has a small round hole on the side. Press one on the left side of the orange plate and one on the right side. The holes face outward — the antennas will go in those holes soon!", es: "Toma los dos ladrillos blancos pequeños — cada uno es de tamaño 1×1 y tiene un pequeño agujero redondo en el lado. Presiona uno en el lado izquierdo de la placa naranja y uno en el lado derecho. Los agujeros miran hacia afuera — ¡pronto las antenas irán en esos agujeros!" }
      },
      {
        icon: "Box",
        pdfPage: 28,
        caption: { en: "Add 2 more white bricks with holes — the sides of Milo's head.", es: "Agrega 2 ladrillos blancos más con agujeros — los lados de la cabeza de Milo." },
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
        caption: { en: "Push 2 black antennas into the holes — Milo's feelers!", es: "Empuja 2 antenas negras en los agujeros — ¡los sensores de Milo!" },
        parts: [{ emoji: "📡", count: 2, en: "Black antenna", es: "Antena negra" }],
        attach: [
          { x: 20, y: 35, en: "Left side hole", es: "Agujero del lado izquierdo", detail: { en: "Push one black antenna into the round hole on the left side brick until it is secure.", es: "Empuja una antena negra en el agujero redondo del ladrillo del lado izquierdo hasta que quede segura." } },
          { x: 80, y: 35, en: "Right side hole", es: "Agujero del lado derecho", detail: { en: "Push the second black antenna into the right side hole.", es: "Empuja la segunda antena negra en el agujero del lado derecho." } }
        ],
        help: { en: "Take the two black antennas — they look like small black sticks with a round ball at the bottom. Push one firmly into the round hole on the left side white brick and one into the right side hole. They stick out like a bug's feelers and help Milo 'sense' things!", es: "Toma las dos antenas negras — parecen palitos negros pequeños con una bola redonda abajo. Empuja uno firmemente en el agujero redondo del ladrillo blanco del lado izquierdo y uno en el agujero del lado derecho. Sobresalen como las antenas de un insecto y ¡ayudan a Milo a 'sentir' cosas!" }
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
        help: { en: "Take the long black axle (size 10 — longer than the others). Push one orange ball joint firmly onto each end of the axle. The balls should be snug and not wobbly. This is Milo's arm that connects his head to his body!", es: "Toma el eje negro largo (tamaño 10 — más largo que los otros). Empuja una bola naranja articulada firmemente en cada extremo del eje. Las bolas deben quedar firmes y sin moverse. ¡Este es el brazo de Milo que conecta su cabeza con su cuerpo!" }
      },
      {
        icon: "Sparkles",
        pdfPage: 32,
        caption: { en: "Last step! Hook Milo's head onto his body using the arm. Milo is done! 🎉", es: "¡Último paso! Engancha la cabeza de Milo al cuerpo con el brazo. ¡Milo está listo! 🎉" },
        parts: [],
        attach: [{ x: 25, y: 55, en: "Front hook of the body", es: "Gancho delantero del cuerpo", detail: { en: "Slide one orange ball of the arm into the blue hook on the head, and the other ball into the blue hook on the body's front. Flip Milo right-side up — he is complete!", es: "Desliza una bola naranja del brazo en el gancho azul de la cabeza, y la otra bola en el gancho azul del frente del cuerpo. Voltea a Milo — ¡está completo!" } }],
        help: { en: "Take the arm (axle with two orange balls). Click one orange ball into the blue hook piece on Milo's head. Click the other orange ball into the blue hook on the front of the body. Flip Milo right-side up. Ta-da — Milo the Science Rover is complete! Connect the Hub to your tablet to make him move!", es: "Toma el brazo (eje con dos bolas naranjas). Encaja una bola naranja en la pieza azul con gancho de la cabeza de Milo. Encaja la otra bola naranja en el gancho azul del frente del cuerpo. Voltea a Milo. ¡Ta-rán — Milo el Robot Científico está completo! ¡Conecta el Hub a tu tablet para que se mueva!" }
      }
    ]
  }
];

export const words = {
  en: {
    chooseLanguage: "Choose your language", chooseKit: "Pick your kit", back: "Back",
    step: "Step", of: "of", stuck: "I'm stuck — help!", help: "Let's try together",
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