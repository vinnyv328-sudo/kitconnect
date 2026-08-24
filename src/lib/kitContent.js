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
        attach: [{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the long orange plate flat on the table with studs up. Press one orange slope brick near each end.", es: "Pon la placa naranja larga plana en la mesa con los botones hacia arriba. Presiona un ladrillo inclinado naranja cerca de cada extremo." } }],
        help: { en: "Find the long orange plate, it has 2 rows of 6 bumps. Lay it flat on the table with all the bumps pointing up. Now find 2 small orange slope bricks that are slanted on one side. Press one near each end of the plate.", es: "Busca la placa naranja larga, tiene 2 filas de 6 botones. Colócala plana sobre la mesa con todos los botones hacia arriba. Ahora busca 2 pequeños ladrillos naranjas inclinados que son sesgados en un lado. Presiona uno cerca de cada extremo de la placa." }
      },
      {
        icon: "Minus",
        pdfPage: 4,
        caption: { en: "Add 2 long green beams along the sides, the holes are for rods later!", es: "Agrega 2 vigas verdes largas a los lados, ¡los agujeros son para varillas!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green beam with holes 1×8", es: "Viga verde con agujeros 1×8" }],
        attach: [
          { x: 20, y: 45, en: "Left side, long way", es: "Lado izquierdo, a lo largo", detail: { en: "Press one green beam along the left side of the orange plate, running the full length.", es: "Presiona una viga verde a lo largo del lado izquierdo de la placa naranja, recorriendo toda la longitud." } },
          { x: 80, y: 45, en: "Right side, long way", es: "Lado derecho, a lo largo", detail: { en: "Press the second green beam along the right side, mirroring the first.", es: "Presiona la segunda viga verde a lo largo del lado derecho, reflejando la primera." } }
        ],
        help: { en: "Find the 2 long lime-green pieces with round holes along them, they are 8 bumps long. Press one along the left edge of the orange plate and one along the right edge, running the full length.", es: "Busca las 2 piezas verdes largas con agujeros redondos a lo largo, tienen 8 botones de largo. Presiona una a lo largo del borde izquierdo de la placa naranja y una a lo largo del borde derecho, recorriendo toda la longitud." }
      },
      {
        icon: "LayoutGrid",
        pdfPage: 5,
        caption: { en: "Snap the second orange plate across the open end, now it's a closed frame!", es: "Encaja la segunda placa naranja en el extremo abierto, ¡ahora es un marco cerrado!" },
        parts: [{ emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{ x: 50, y: 75, en: "Open end of the frame", es: "Extremo abierto del marco", detail: { en: "Press the second orange plate across the open end so the frame becomes a closed rectangle.", es: "Presiona la segunda placa naranja en el extremo abierto para que el marco se convierta en un rectángulo cerrado." } }],
        help: { en: "Take the second long orange plate (same as the one in Step 1). Press it flat across the open end of the frame, the end that does not have a plate yet. Now the shape looks like a closed rectangle.", es: "Toma la segunda placa naranja larga (igual que la del Paso 1). Presiónala plana en el extremo abierto del marco, el extremo que aún no tiene una placa. Ahora la forma se ve como un rectángulo cerrado." }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Stack 2 short green bricks in the middle of one side, they build up the wall!", es: "Apila 2 ladrillos verdes cortos en el centro de un lado, ¡levantan la pared!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 35, y: 50, en: "Middle of the left side", es: "Centro del lado izquierdo", detail: { en: "Press both green bricks stacked on top of each other, nearer the middle of the side.", es: "Presiona ambos ladrillos verdes apilados uno encima del otro, más cerca del centro del lado." } }],
        help: { en: "Take 2 short green bricks with holes, each is 4 bumps long. Press one on top of the other to stack them, then press the stack onto one side of the orange frame. Put them close to the middle of that side.", es: "Toma 2 ladrillos verdes cortos con agujeros, cada uno tiene 4 botones de largo. Presiona uno encima del otro para apilarlos, luego presiona la pila en un lado del marco naranja. Colócalos cerca del centro de ese lado." }
      },
      {
        icon: "Cpu",
        pdfPage: 7,
        caption: { en: "Press the Smart Hub onto the green beams, this is the frog's brain!", es: "Presiona el Smart Hub sobre las vigas verdes, ¡este es el cerebro de la rana!" },
        parts: [{ emoji: "🧠", count: 1, en: "Smart Hub (large white brick)", es: "Smart Hub (bloque blanco grande)" }],
        attach: [{ x: 60, y: 40, en: "On top of the green beams", es: "Encima de las vigas verdes", detail: { en: "Lower the Smart Hub down onto the green beams so it sits in the right side of the frame.", es: "Baja el Smart Hub sobre las vigas verdes para que se siente en el lado derecho del marco." } }],
        help: { en: "Find the big white-and-gray brick, it has a green button on top. This is the Smart Hub, the frog's brain! Press it firmly down onto the right side of the green beams, inside the frame.", es: "Encuentra el bloque blanco y gris grande, tiene un botón verde en la parte superior. ¡Este es el Smart Hub, el cerebro de la rana! Presiónalo firmemente sobre el lado derecho de las vigas verdes, dentro del marco." }
      },
      {
        icon: "Box",
        pdfPage: 8,
        caption: { en: "Add 2 blue bricks along the side of the Smart Hub.", es: "Agrega 2 ladrillos azules al costado del Smart Hub." },
        parts: [{ emoji: "🔵", count: 2, en: "Blue brick 1×2", es: "Ladrillo azul 1×2" }],
        attach: [{ x: 40, y: 55, en: "Side of the Smart Hub", es: "Costado del Smart Hub", detail: { en: "Press both blue bricks side by side along the side of the Smart Hub, filling the gap.", es: "Presiona ambos ladrillos azules uno al lado del otro a lo largo del lado del Smart Hub, llenando el hueco." } }],
        help: { en: "Find the 2 small blue bricks, each is 1 bump wide and 2 bumps long. Press them side by side along the left side of the Smart Hub. They fill in the gap between the Hub and the left green beam.", es: "Encuentra los 2 ladrillos azules pequeños, cada uno tiene 1 botón de ancho y 2 de largo. Presiónelos uno al lado del otro a lo largo del lado izquierdo del Smart Hub. Llenan el hueco entre el Hub y la viga verde izquierda." }
      },
      {
        icon: "Circle",
        pdfPage: 9,
        caption: { en: "Put 2 curved green pieces on the sides of the Hub, the frog gets a shape!", es: "Pon 2 piezas verdes curvas a los lados del Hub, ¡la rana toma forma!" },
        parts: [{ emoji: "🟢", count: 2, en: "Green curved slope 1×4", es: "Pieza verde curva 1×4" }],
        attach: [
          { x: 35, y: 35, en: "Left side of the Hub", es: "Lado izquierdo del Hub", detail: { en: "Press one green curved slope on the left side of the Smart Hub, curving upward.", es: "Presiona una pieza verde curva en el lado izquierdo del Smart Hub, curvándose hacia arriba." } },
          { x: 70, y: 35, en: "Right side of the Hub", es: "Lado derecho del Hub", detail: { en: "Press the second green curved slope on the right side, mirroring the first.", es: "Presiona la segunda pieza verde curva en el lado derecho, reflejando la primera." } }
        ],
        help: { en: "Find the 2 lime-green pieces with a long smooth curve on top, they are 4 bumps long. Press one on each side of the Smart Hub (NOT the front or back, the sides). They curve upward and make the frog look rounded.", es: "Busca las 2 piezas verde lima con una curva suave larga en la parte superior, tienen 4 botones de largo. Presiona una en cada lado del Smart Hub (NO la parte frontal o trasera, los lados). Se curvan hacia arriba y hacen que la rana se vea redondeada." }
      },
      {
        icon: "Cpu",
        pdfPage: 10,
        caption: { en: "Meet the motor! Plug its black cable into the Smart Hub, it makes the frog hop!", es: "¡Conoce el motor! Conecta su cable negro al Smart Hub, ¡hace saltar a la rana!" },
        parts: [{ emoji: "⚙️", count: 1, en: "Motor with cable", es: "Motor con cable" }],
        attach: [{ x: 30, y: 55, en: "Front of the model, cable into Hub", es: "Frente del modelo, cable al Hub", detail: { en: "Press the motor onto the front of the model, then push the cable's connector into a port on the Smart Hub.", es: "Presiona el motor en la parte frontal del modelo, luego empuja el conector del cable en un puerto del Smart Hub." } }],
        help: { en: "Find the gray motor, it has a round spinning end and a long black cable coiled around it. Push the motor onto the front of the frame. Then take the cable and push its connector firmly into a port on the side of the Smart Hub. The cable lets the motor get power.", es: "Encuentra el motor gris, tiene un extremo giratorio redondo y un cable negro largo enrollado alrededor. Empuja el motor hacia la parte frontal del marco. Luego toma el cable y empuja su conector firmemente en un puerto en el lado del Smart Hub. El cable permite que el motor obtenga energía." }
      },
      {
        icon: "Circle",
        pdfPage: 11,
        caption: { en: "Press 2 blue curved pieces over the top to hold the cable in place.", es: "Presiona 2 piezas azules curvas por arriba para sujetar el cable en su lugar." },
        parts: [{ emoji: "🩵", count: 2, en: "Blue curved slope 1×4", es: "Pieza azul curva 1×4" }],
        attach: [{ x: 50, y: 30, en: "Over the top of the Hub", es: "Sobre la parte de arriba del Hub", detail: { en: "Lay both blue curved slopes over the top of the Smart Hub, side by side, so they curve over it like a bridge.", es: "Coloca ambas piezas azules curvas sobre la parte superior del Smart Hub, una al lado de la otra, para que se curven sobre él como un puente." } }],
        help: { en: "Find the 2 light-blue curved pieces. Press them side by side over the top of the Smart Hub, curving over it like a bridge. They hold the motor's black cable in a neat arch, keeping it tidy and not dangling.", es: "Encuentra las 2 piezas azul claro curvas. Presiónelas una al lado de la otra sobre la parte superior del Smart Hub, curvándose sobre él como un puente. Sostienen el cable negro del motor en un arco ordenado, manteniéndolo limpio y sin colgarse." }
      },
      {
        icon: "Minus",
        pdfPage: 12,
        caption: { en: "Slide the short black rod into the motor, then push a black connector on the end.", es: "Desliza la varilla negra corta en el motor, luego pon un conector negro en la punta." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle rod, length 3", es: "Varilla eje negra, tamaño 3" },
          { emoji: "⬛", count: 1, en: "Black connector", es: "Conector negro" }
        ],
        attach: [{ x: 35, y: 60, en: "Center hole of the motor", es: "Agujero central del motor", detail: { en: "Slide the short black axle rod into the round hole at the center of the motor's spinning end.", es: "Desliza la varilla eje negra corta en el agujero redondo en el centro del extremo giratorio del motor." } }],
        help: { en: "Find the short black rod (it is only about 3 units long). Slide it all the way into the round hole in the center of the motor's face, the spinning end. Then take the small black connector and push it firmly onto the other end of the rod that sticks out.", es: "Encuentra la varilla negra corta (tiene solo unos 3 unidades de largo). Deslízala completamente en el agujero redondo en el centro de la cara del motor, el extremo giratorio. Luego toma el pequeño conector negro y empújalo firmemente en el otro extremo de la varilla que sobresale." }
      },
      {
        icon: "Box",
        pdfPage: 13,
        caption: { en: "Snap the short green brick onto the side of the motor, like a little wall.", es: "Encaja el ladrillo verde corto en el costado del motor, como una paredita." },
        parts: [{{ emoji: "🟢", count: 1, en: "Green brick with holes 1×4", es: "Ladrillo verde con agujeros 1×4" }],
        attach: [{ x: 40, y: 55, en: "Side of the motor", es: "Costado del motor", detail: { en: "Press the green 1×4 brick onto the side of the motor, standing upright. Its holes face sideways.", es: "Presiona el ladrillo verde 1×4 en el costado del motor, parado derecho. Sus agujeros miran hacia los lados." } }],
        help: { en: "Take the short green brick with holes (4 bumps long). Press it onto the side of the motor so it stands upright like a little wall. The round holes in the brick should face out sideways. It braces the motor in place.", es: "Toma el ladrillo verde corto con agujeros (4 botones de largo). Presiónalo en el costado del motor para que quede erguido como una pequeña pared. Los agujeros redondos del ladrillo deben mirar hacia los lados. Sostiene el motor en su lugar." }
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
        attach: [{{ x: 75, y: 55, en: "One end of the long beam", es: "Una punta de la viga larga", detail: { en: "Lay the long green beam flat. Stand two small green bricks with holes upright on one end of it.", es: "Coloca la viga verde larga plana. Para dos ladrillos verdes pequeños con agujeros en un extremo." } }],
        help: { en: "Find the long green beam with round holes along it, it is 8 bumps long. Lay it flat. Now find the 2 small green bricks with a round hole on the side. Stand them upright on one end of the beam. They look like little walls.", es: "Encuentra la viga verde larga con agujeros redondos a lo largo, tiene 8 botones de largo. Colócala plana. Ahora encuentra los 2 ladrillos verdes pequeños con un agujero redondo en el lado. Páralos de pie en un extremo de la viga. Se ven como pequeñas paredes." }
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
        attach: [{{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the gray frame plate flat. Press one lime slope near each end of the frame, they look like roof tops.", es: "Coloca la placa gris plana. Presiona una rampa verde lima cerca de cada extremo del marco, se ven como tejados." } }],
        help: { en: "Find the dark-gray frame plate (it has a hollow open center like a picture frame). Lay it flat. Find 2 small lime-green slope bricks, slanted on one side. Press one near each end of the frame.", es: "Encuentra la placa gris oscura (tiene un centro hueco abierto como un marco de imagen). Colócala plana. Encuentra 2 ladrillos verdes lima pequeños inclinados, sesgados en un lado. Presiona uno cerca de cada extremo del marco." }
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
        parts: [{{ emoji: "🟩", count: 2, en: "Green plate 2×8", es: "Placa verde 2×8" }],
        attach: [{{ x: 50, y: 55, en: "Flat on the table", es: "Planas sobre la mesa", detail: { en: "Put both green plates flat on the table with the studs pointing up, touching side by side like floor tiles.", es: "Coloca ambas placas verdes planas sobre la mesa con los botones hacia arriba, tocándose una al lado de la otra como baldosas de piso." } }],
        help: { en: "Find the two long green plates, they have 2 rows of 8 bumps each. Lay them flat on the table right next to each other so they touch along the long side. Studs point up. This is Milo's floor platform.", es: "Encuentra las dos placas verdes largas, tienen 2 filas de 8 botones cada una. Colócalas planas sobre la mesa una al lado de la otra para que se toquen a lo largo del lado largo. Los botones apuntan hacia arriba. Esta es la plataforma del piso de Milo." }
      }
    ]
  },
  {
    id: "pulling",
    name: "LEGO Education WeDo 2.0 · Set 45300",
    model: { en: "Pulling Robot", es: "Robot Tirador" },
    color: "#FF6B35",
    pdfUrl: "/Pulling.pdf",
    category: "wedo",
    steps: [
      {
        icon: "LayoutGrid",
        pdfPage: 1,
        caption: { en: "Build the base: lay a long orange plate flat on the table.", es: "Construye la base: coloca una placa naranja larga plana sobre la mesa." },
        parts: [{{ emoji: "🟠", count: 1, en: "Orange plate 2×6", es: "Placa naranja 2×6" }],
        attach: [{{ x: 50, y: 55, en: "Flat on the table", es: "Plana sobre la mesa", detail: { en: "Lay the long orange plate flat on the table with studs pointing up.", es: "Coloca la placa naranja larga plana sobre la mesa con los botones hacia arriba." } }],
        help: { en: "Find the long orange plate. Lay it completely flat on the table with all the bumps (studs) pointing up. This will be the base of your pulling robot.", es: "Encuentra la placa naranja larga. Colócala completamente plana sobre la mesa con todos los botones hacia arriba. Esta será la base de tu robot tirador." }
      },
      {
        icon: "Box",
        pdfPage: 2,
        caption: { en: "Add green bricks along the sides to build up the frame.", es: "Agrega ladrillos verdes a los lados para construir el marco." },
        parts: [{{ emoji: "🟢", count: 2, en: "Green brick 1×4", es: "Ladrillo verde 1×4" }],
        attach: [{{ x: 50, y: 45, en: "Along both sides", es: "A lo largo de ambos lados", detail: { en: "Press green bricks upright along each side of the orange base.", es: "Presiona ladrillos verdes verticales a lo largo de cada lado de la base naranja." } }],
        help: { en: "Find 2 green bricks. Press them upright along the left and right sides of the orange base plate. They stand like walls and will hold other pieces.", es: "Encuentra 2 ladrillos verdes. Presiónelos verticales a lo largo de los lados izquierdo y derecho de la placa base naranja. Se paran como paredes y sostendrán otras piezas." }
      },
      {
        icon: "Cpu",
        pdfPage: 3,
        caption: { en: "Place the Smart Hub in the center as the robot's brain.", es: "Coloca el Smart Hub en el centro como el cerebro del robot." },
        parts: [{{ emoji: "🧠", count: 1, en: "Smart Hub", es: "Smart Hub" }],
        attach: [{{ x: 50, y: 35, en: "Center of the base", es: "Centro de la base", detail: { en: "Press the Smart Hub firmly in the center of the base between the green bricks.", es: "Presiona el Smart Hub firmemente en el centro de la base entre los ladrillos verdes." } }],
        help: { en: "Find the large white Smart Hub with the green button on top. Press it in the center of your base. This is your robot's brain and controls all its movements!", es: "Encuentra el Smart Hub blanco grande con el botón verde en la parte superior. Presiónalo en el centro de tu base. ¡Este es el cerebro de tu robot y controla todos sus movimientos!" }
      },
      {
        icon: "Cpu",
        pdfPage: 4,
        caption: { en: "Attach the motor to power your robot's pulling action!", es: "¡Conecta el motor para alimentar la acción de tracción de tu robot!" },
        parts: [{{ emoji: "⚙️", count: 1, en: "Motor with cable", es: "Motor con cable" }],
        attach: [{{ x: 30, y: 45, en: "Side of the Smart Hub", es: "Costado del Smart Hub", detail: { en: "Press the motor onto the side of the Smart Hub and plug the cable into a port.", es: "Presiona el motor en el costado del Smart Hub y conecta el cable en un puerto." } }],
        help: { en: "Find the gray motor with the black cable. Press it onto the base next to the Smart Hub. Then take the cable and push its connector into a port on the Smart Hub to give power to your pulling robot.", es: "Encuentra el motor gris con el cable negro. Presiónalo sobre la base al lado del Smart Hub. Luego toma el cable y empuja su conector en un puerto del Smart Hub para dar energía a tu robot tirador." }
      },
      {
        icon: "Minus",
        pdfPage: 5,
        caption: { en: "Add axles and gears to create the pulling mechanism.", es: "Agrega ejes y engranajes para crear el mecanismo de tracción." },
        parts: [
          { emoji: "⬛", count: 1, en: "Black axle rod", es: "Varilla eje negra" },
          { emoji: "⚙️", count: 2, en: "Gears", es: "Engranajes" }
        ],
        attach: [{{ x: 50, y: 50, en: "Through the motor and gears", es: "A través del motor y engranajes", detail: { en: "Slide the axle through the gears to connect the motor's spinning power.", es: "Desliza el eje a través de los engranajes para conectar la potencia giratoria del motor." } }],
        help: { en: "Find the black axle rod and the 2 gears. Slide the axle through the gears and connect it to the motor. The gears will transfer the motor's spinning motion to create the pulling action.", es: "Encuentra la varilla eje negra y los 2 engranajes. Desliza el eje a través de los engranajes y conéctalo al motor. Los engranajes transferirán el movimiento giratorio del motor para crear la acción de tracción." }
      },
      {
        icon: "Box",
        pdfPage: 6,
        caption: { en: "Build the pulling arm that will grab and pull objects.", es: "Construye el brazo tirador que agarrará y tirará objetos." },
        parts: [{{ emoji: "🟢", count: 2, en: "Green beam segments", es: "Segmentos de viga verde" }],
        attach: [{{ x: 60, y: 40, en: "Connected to the gears", es: "Conectado a los engranajes", detail: { en: "Attach green beams to the gears to form a mechanical arm.", es: "Conecta vigas verdes a los engranajes para formar un brazo mecánico." } }],
        help: { en: "Take 2 green beam segments and attach them to the gears and axle. They will form the arm that rotates and pulls when the motor spins.", es: "Toma 2 segmentos de viga verde y conéctalos a los engranajes y el eje. Formarán el brazo que rota y tira cuando el motor gira." }
      },
      {
        icon: "Circle",
        pdfPage: 7,
        caption: { en: "Add a hook or grabber at the end of the arm for pulling.", es: "Agrega un gancho o agarrador al final del brazo para tirar." },
        parts: [{{ emoji: "🔴", count: 1, en: "Red connector / hook", es: "Conector rojo / gancho" }],
        attach: [{{ x: 75, y: 40, en: "Tip of the pulling arm", es: "Punta del brazo tirador", detail: { en: "Press the red hook connector at the end of the arm so it can grab and pull objects.", es: "Presiona el conector rojo gancho al final del brazo para que pueda agarrar y tirar objetos." } }],
        help: { en: "Find the red connector or hook piece. Attach it to the end of the pulling arm. This is what will grab onto other objects and pull them when the motor spins!", es: "Encuentra el conector rojo o la pieza gancho. Conéctala al final del brazo tirador. ¡Esto es lo que agarrará otros objetos y los tirará cuando el motor gire!" }
      },
      {
        icon: "Sparkles",
        pdfPage: 8,
        caption: { en: "Test your robot! Press the green button and watch it pull! 🎉", es: "¡Prueba tu robot! ¡Presiona el botón verde y míralo tirar! 🎉" },
        parts: [],
        attach: [{{ x: 50, y: 35, en: "Green button on Smart Hub", es: "Botón verde del Smart Hub", detail: { en: "Press the green button to power up your robot and watch the pulling arm move!", es: "Presiona el botón verde para encender tu robot y mira cómo se mueve el brazo tirador." } }],
        help: { en: "Your pulling robot is complete! Press the green button on the Smart Hub to turn it on. Watch as the motor spins the gears and the arm rotates around, pulling in circles. Connect to the WeDo 2.0 app to program more complex pulling motions!", es: "¡Tu robot tirador está completo! Presiona el botón verde del Smart Hub para encenderlo. Mira cómo el motor gira los engranajes y el brazo rota, tirando en círculos. ¡Conéctate a la aplicación WeDo 2.0 para programar movimientos de tracción más complejos!" }
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
