export const drivingBase1Kit = {
  id: "drivingbase1",
  name: "LEGO Education SPIKE Prime",
  model: { en: "Driving Base", es: "Base Motriz" },
  color: "#7C3AED",
  pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/f73ac5493_DrivingBase1_compressed.pdf",
  category: "spike",
  steps: [
    {
      icon: "Battery",
      pdfPage: 2,
      caption: { en: "Open the SPIKE Prime tote, take out the Hub, and slide the battery pack inside!", es: "Abre la caja de SPIKE Prime, saca el Hub y desliza la batería adentro." },
      parts: [
        { emoji: "🟡", count: 1, en: "SPIKE Prime Hub", es: "Hub de SPIKE Prime" },
        { emoji: "🔋", count: 1, en: "Battery pack", es: "Paquete de baterías" }
      ],
      attach: [{ x: 50, y: 55, en: "Yellow cover on the Hub", es: "Tapa amarilla del Hub", detail: { en: "Open the yellow cover on the Hub and slide the battery pack in firmly until it clicks.", es: "Abre la tapa amarilla del Hub y desliza el paquete de baterías hasta que haga clic." } }],
      help: { en: "Open your SPIKE Prime storage tote and take out the Hub, the big yellow and gray brick with the screen. Open the yellow cover on one side and slide the battery pack firmly inside until it clicks shut.", es: "Abre tu caja de almacenamiento de SPIKE Prime y saca el Hub, el ladrillo grande amarillo y gris con pantalla. Abre la tapa amarilla de un lado y desliza la batería firmemente hasta que haga clic." }
    },
    {
      icon: "Square",
      pdfPage: 3,
      caption: { en: "Set out the purple frame by itself, this is the base for the two drive motors!", es: "Prepara el marco morado solo, ¡esta es la base para los dos motores de manejo!" },
      parts: [
        { emoji: "🟣", count: 1, en: "Purple frame (open rectangle frame)", es: "Marco morado (marco rectangulado abierto)" }
      ],
      attach: [{ x: 50, y: 55, en: "Flat on the table, separate build", es: "Plano en la mesa, pieza aparte", detail: { en: "Start with the base of the drive unit: set out the purple frame by itself. You will build the two drive motors onto it over the next few steps.", es: "Empieza con la base de tu unidad motriz: prepara el marco morado solo. Construirás los dos motores de manejo sobre él en los próximos pasos." } }],
      help: { en: "Take the purple open rectangle frame and lay it flat on the table by itself. You will build the two drive motors onto it over the next few steps.", es: "Toma el marco morado rectangular abierto y ponlo plano en la mesa solo. Construirás los dos motores de manejo sobre él en los próximos pasos." }
    },
    {
      icon: "Settings",
      pdfPage: 4,
      caption: { en: "Push 6 black connector pegs into the holes along the top of the purple frame!", es: "¡Empuja 6 pasadores negros en los agujeros a lo largo de la parte de arriba del marco morado!" },
      parts: [
        { emoji: "⬛", count: 6, en: "Black connector peg", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 35, en: "6 holes along the top of the purple frame", es: "6 agujeros a lo largo de la parte de arriba del marco morado", detail: { en: "Push one black connector peg into each of the 6 holes along the top edge of the purple frame.", es: "Empuja un pasador negro en cada uno de los 6 agujeros a lo largo del borde superior del marco morado." } }],
      help: { en: "Push six black connector pegs, one into each of the six holes along the top edge of the purple frame. They should click in and stick up a little. These pegs are where the two motors will attach!", es: "Empuja seis pasadores negros, uno en cada uno de los seis agujeros a lo largo del borde superior del marco morado. Deben encajar y sobresalir un poco. ¡Estos pasadores son donde se unirán los dos motores!" }
    },
    {
      icon: "Cpu",
      pdfPage: 5,
      caption: { en: "Set both motors onto the pegs side by side, push 4 more pegs into their outer sides to lock!", es: "Coloca los dos motores sobre los pasadores uno junto al otro, empuja 4 pasadores en sus lados exteriores para trabarlos." },
      parts: [
        { emoji: "⚙️", count: 2, en: "Motor (with cable)", es: "Motor (con cable)" },
        { emoji: "⬛", count: 4, en: "Black connector peg", es: "Pasador conector negro" }
      ],
      attach: [
        { x: 35, y: 45, en: "Left motor onto left pegs of the frame", es: "Motor izquierdo en los pasadores izquierdos del marco", detail: { en: "Press the first motor onto the left three pegs of the purple frame. The white dot on the motor cable connector must face correctly.", es: "Presiona el primer motor en los tres pasadores izquierdos del marco morado." } },
        { x: 65, y: 45, en: "Right motor onto right pegs, 4 pegs on outer sides", es: "Motor derecho en los pasadores derechos, 4 pasadores en los lados exteriores", detail: { en: "Press the second motor next to the first, then push 4 black pegs into the outer side holes to lock both motors to the frame.", es: "Presiona el segundo motor junto al primero, luego empuja 4 pasadores negros en los agujeros exteriores para trabar los dos motores al marco." } }
      ],
      help: { en: "Set both motors onto the pegs on the purple frame, one next to the other. Then push 4 more black pegs into the holes on their outer sides to lock the motors together and to the frame. Make sure the white dot on each motor cable connector is visible for plugging in later!", es: "Coloca los dos motores sobre los pasadores del marco, uno junto al otro. Luego empuja 4 pasadores negros más en los agujeros de sus lados exteriores para unir los motores entre sí y al marco. ¡Asegúrate de que el punto blanco en cada conector de cable sea visible para conectar más adelante!" }
    },
    {
      icon: "Minus",
      pdfPage: 6,
      caption: { en: "Push a long yellow peg (size 3) into the middle hole of each motor, 2 total!", es: "¡Empuja un pasador largo amarillo (tamaño 3) en el agujero del medio de cada motor, 2 en total!" },
      parts: [
        { emoji: "🟡", count: 2, en: "Yellow connector peg (long, size 3)", es: "Pasador conector amarillo (largo, tamaño 3)" }
      ],
      attach: [
        { x: 30, y: 50, en: "Center hole of the left motor", es: "Agujero del centro del motor izquierdo", detail: { en: "Push one long yellow peg into the center axle hole of the left motor.", es: "Empuja un pasador largo amarillo en el agujero del centro del motor izquierdo." } },
        { x: 70, y: 50, en: "Center hole of the right motor", es: "Agujero del centro del motor derecho", detail: { en: "Push the second long yellow peg into the center axle hole of the right motor.", es: "Empuja el segundo pasador largo amarillo en el agujero del centro del motor derecho." } }
      ],
      help: { en: "Push one long yellow peg (they have a '3' circle label in the diagram) into the center hole of each motor, 2 pegs total. These will hold the wheels later!", es: "Empuja un pasador largo amarillo (tienen etiqueta de círculo '3' en el diagrama) en el agujero central de cada motor, 2 pasadores en total. ¡Estos sostendrán las ruedas más adelante!" }
    },
    {
      icon: "Settings",
      pdfPage: 7,
      caption: { en: "Push 8 black pegs into the holes along the top of both motors, then set this whole unit aside!", es: "Empuja 8 pasadores negros en los agujeros de la parte de arriba de los dos motores, luego pon esta unidad a un lado." },
      parts: [
        { emoji: "⬛", count: 8, en: "Black connector peg", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 30, en: "8 holes along the top of both motors", es: "8 agujeros a lo largo de la parte de arriba de los dos motores", detail: { en: "Push 8 black pegs into the holes along the top surface of both motors (4 per motor). Then set the whole motor unit aside — you will attach it to the Hub later in Step 14.", es: "Empuja 8 pasadores negros en los agujeros a lo largo de la superficie superior de los dos motores (4 por motor). Luego pon la unidad entera a un lado, la unirás al Hub más adelante en el Paso 14." } }],
      help: { en: "Push eight black pegs into the holes along the top of both motors (4 per motor). Then set this entire motor unit aside — you'll attach it to the Hub later in Step 14. Start the Hub build separately next!", es: "Empuja ocho pasadores negros en los agujeros a lo largo de la parte de arriba de los dos motores (4 por motor). Luego pon esta unidad de motores a un lado, la unirás al Hub más adelante en el Paso 14. ¡Empieza la construcción del Hub por separado a continuación!" }
    },
    {
      icon: "Cpu",
      pdfPage: 8,
      caption: { en: "Here's the Hub again, the robot's brain! Set it flat, screen facing up.", es: "¡Aquí está el Hub otra vez, el cerebro del robot! Ponlo plano con la pantalla hacia arriba." },
      parts: [
        { emoji: "🟡", count: 1, en: "SPIKE Prime Hub", es: "Hub de SPIKE Prime" }
      ],
      attach: [{ x: 50, y: 50, en: "Flat on the table, screen facing up", es: "Plano en la mesa, pantalla hacia arriba", detail: { en: "Set the Hub flat on the table with the screen facing up and the ports facing toward you. You will build onto its sides next.", es: "Coloca el Hub plano en la mesa con la pantalla hacia arriba y los puertos hacia ti. Construirás en sus lados a continuación." } }],
      help: { en: "Pick up the Hub with its battery inside. Set it flat on the table with the big screen facing up. You will now build the robot's body directly onto the Hub's sides.", es: "Toma el Hub con la batería adentro. Ponlo plano en la mesa con la pantalla grande hacia arriba. Ahora construirás el cuerpo del robot directamente en los lados del Hub." }
    },
    {
      icon: "Wrench",
      pdfPage: 9,
      caption: { en: "Build 2 small matching leg pieces: snap a gray angled connector onto each yellow 1×3 brick!", es: "¡Construye 2 piecitas iguales: encaja un conector gris angulado en cada ladrillo amarillo 1×3!" },
      parts: [
        { emoji: "🟡", count: 2, en: "Yellow brick with holes, 1×3", es: "Ladrillo amarillo con agujeros, 1×3" },
        { emoji: "⬜", count: 2, en: "Gray angled connector", es: "Conector gris angulado" }
      ],
      attach: [
        { x: 35, y: 55, en: "Gray connector onto left yellow brick", es: "Conector gris en el ladrillo amarillo izquierdo", detail: { en: "Snap one gray angled connector onto the yellow 1×3 brick.", es: "Encaja un conector gris angulado en el ladrillo amarillo 1×3." } },
        { x: 65, y: 55, en: "Gray connector onto right yellow brick", es: "Conector gris en el ladrillo amarillo derecho", detail: { en: "Snap the second gray angled connector onto the second yellow 1×3 brick.", es: "Encaja el segundo conector gris angulado en el segundo ladrillo amarillo 1×3." } }
      ],
      help: { en: "Build two identical small leg pieces: snap a gray angled connector onto each yellow 1×3 brick. Make both pieces exactly the same — you'll attach them to the bottom of the Hub in the next step.", es: "Construye dos piecitas iguales: encaja un conector gris angulado en cada ladrillo amarillo 1×3. Haz ambas piezas exactamente iguales, las unirás a la parte de abajo del Hub en el próximo paso." }
    },
    {
      icon: "Wrench",
      pdfPage: 10,
      caption: { en: "Attach both leg pieces onto the underside of the Hub, following the arrows!", es: "¡Une las dos piecitas a la parte de abajo del Hub, siguiendo las flechas!" },
      parts: [],
      attach: [{ x: 50, y: 60, en: "Underside of the Hub (following arrows)", es: "Parte de abajo del Hub (siguiendo las flechas)", detail: { en: "Flip the Hub over and attach both leg pieces onto the underside, following the arrows in the diagram.", es: "Voltea el Hub y une las dos piecitas a la parte de abajo, siguiendo las flechas del diagrama." } }],
      help: { en: "No new pieces! Flip the Hub over so the bottom faces up. Following the arrows in the diagram, attach both yellow leg pieces onto the underside of the Hub. The gray connectors should click securely into the Hub's side holes.", es: "¡Sin piezas nuevas! Voltea el Hub para que la parte de abajo quede hacia arriba. Siguiendo las flechas del diagrama, une las dos piecitas amarillas a la parte de abajo del Hub. Los conectores grises deben encajar firmemente en los agujeros del costado del Hub." }
    },
    {
      icon: "Settings",
      pdfPage: 11,
      caption: { en: "Rotate the model so the top faces you, push 2 black pegs into the holes shown!", es: "Gira el modelo para que la parte de arriba quede hacia ti, empuja 2 pasadores negros en los agujeros indicados." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector peg", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 40, en: "2 holes shown on the top of the Hub", es: "2 agujeros indicados en la parte de arriba del Hub", detail: { en: "Rotate the model so the top faces you, then push two black pegs into the two holes shown in the diagram.", es: "Gira el modelo para que la parte de arriba quede hacia ti, luego empuja dos pasadores negros en los dos agujeros indicados en el diagrama." } }],
      help: { en: "Rotate the whole model so the top of the Hub faces you. Push two black pegs into the two holes shown in the diagram on the top surface. These pegs hold the small purple angled plate in the next step.", es: "Gira todo el modelo para que la parte de arriba del Hub quede hacia ti. Empuja dos pasadores negros en los dos agujeros indicados en el diagrama en la superficie superior. Estos pasadores sostienen la pequeña placa morada angulada en el próximo paso." }
    },
    {
      icon: "Settings",
      pdfPage: 12,
      caption: { en: "Attach the small purple angled plate on the 2 pegs from last step, add 2 more pegs on top!", es: "Une la pequeña placa morada angulada sobre los 2 pasadores del paso anterior, agrega 2 pasadores más encima." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector peg", es: "Pasador conector negro" },
        { emoji: "🟣", count: 1, en: "Purple angled plate", es: "Placa morada angulada" }
      ],
      attach: [{ x: 45, y: 45, en: "Purple plate onto the 2 pegs, then 2 more pegs on top", es: "Placa morada en los 2 pasadores, luego 2 pasadores más encima", detail: { en: "Snap the purple angled plate onto the two black pegs from the last step. Then push two more black pegs into the holes on top of the purple plate.", es: "Encaja la placa morada angulada en los dos pasadores negros del paso anterior. Luego empuja dos pasadores negros más en los agujeros encima de la placa morada." } }],
      help: { en: "Snap the small purple angled plate onto the two black pegs you just added. Then push two more black pegs into the holes on top of the purple plate. These top pegs will hold the caster wheel assembly!", es: "Encaja la pequeña placa morada angulada en los dos pasadores negros que acabas de agregar. Luego empuja dos pasadores negros más en los agujeros encima de la placa morada. ¡Estos pasadores de arriba sostendrán el ensamblaje de la rueda giratoria!" }
    },
    {
      icon: "Circle",
      pdfPage: 13,
      caption: { en: "Attach the blue ball-joint piece onto the purple plate, snap the white ball in to form the caster!", es: "Une la pieza azul de rótula sobre la placa morada, encaja la bola blanca para formar la rueda giratoria." },
      parts: [
        { emoji: "🔵", count: 1, en: "Blue ball-joint piece", es: "Pieza azul con forma de rótula" },
        { emoji: "⬜", count: 1, en: "White ball", es: "Bola blanca" }
      ],
      attach: [{ x: 45, y: 40, en: "Blue piece onto the 2 pegs on the purple plate, then white ball into the socket", es: "Pieza azul en los 2 pasadores de la placa morada, luego bola blanca en el soporte", detail: { en: "Attach the blue ball-joint piece onto the two pegs on the purple plate, then snap the white ball into the socket to form the caster wheel.", es: "Une la pieza azul de rótula en los dos pasadores de la placa morada, luego encaja la bola blanca en el soporte para formar la rueda giratoria." } }],
      help: { en: "Attach the blue ball-joint piece (it has a round socket on top) onto the two pegs on the purple plate. Then snap the white ball into the blue socket. This ball-caster acts as the front wheel that lets the robot swivel freely!", es: "Une la pieza azul de rótula (tiene un soporte redondo arriba) en los dos pasadores de la placa morada. Luego encaja la bola blanca en el soporte azul. ¡Este rueda tipo bola actúa como la rueda delantera que permite al robot girar libremente!" }
    },
    {
      icon: "Settings",
      pdfPage: 14,
      caption: { en: "Push a short tan peg into the hole next to the caster wheel to hold it in place!", es: "Empuja un pasador corto color canela en el agujero junto a la rueda giratoria para sostenerla." },
      parts: [
        { emoji: "🟤", count: 1, en: "Tan connector peg (short)", es: "Pasador conector color canela (corto)" }
      ],
      attach: [{ x: 50, y: 45, en: "Hole next to the caster wheel", es: "Agujero junto a la rueda giratoria", detail: { en: "Push the short tan peg firmly into the hole right next to the caster wheel.", es: "Empuja el pasador corto color canela firmemente en el agujero justo junto a la rueda giratoria." } }],
      help: { en: "Push the short tan (beige) peg into the hole right next to the caster wheel. This helps lock the caster assembly firmly in place.", es: "Empuja el pasador corto color canela en el agujero justo junto a la rueda giratoria. Esto ayuda a fijar el ensamblaje de la rueda giratoria en su lugar." }
    },
    {
      icon: "Settings",
      pdfPage: 15,
      caption: { en: "Push a short yellow peg into the hole right next to the tan one!", es: "Empuja un pasador corto amarillo en el agujero de al lado del canela." },
      parts: [
        { emoji: "🟡", count: 1, en: "Yellow connector peg (short)", es: "Pasador conector amarillo (corto)" }
      ],
      attach: [{ x: 52, y: 45, en: "Hole adjacent to the tan peg", es: "Agujero junto al pasador canela", detail: { en: "Push the short yellow peg into the hole adjacent to the tan peg you just inserted.", es: "Empuja el pasador corto amarillo en el agujero junto al pasador canela que acabas de insertar." } }],
      help: { en: "Push the short yellow peg into the hole right next to the tan peg. Together they secure the caster wheel bracket tightly.", es: "Empuja el pasador corto amarillo en el agujero justo junto al pasador canela. Juntos fijan el soporte de la rueda giratoria firmemente." }
    },
    {
      icon: "Cpu",
      pdfPage: 16,
      caption: { en: "Rotate the Hub piece, then attach the motor unit from Step 5 underneath it so everything lines up!", es: "Gira la pieza del Hub, luego une la unidad de motores del Paso 5 debajo de ella para que todo quede alineado." },
      parts: [],
      attach: [{ x: 50, y: 55, en: "Motor unit underneath the Hub (following arrows)", es: "Unidad de motores debajo del Hub (siguiendo las flechas)", detail: { en: "Rotate the Hub piece, then press the motor unit from Step 5 underneath it so the legs, caster wheel, and motors all line up. The 8 black pegs on top of the motors connect into the Hub's bottom holes.", es: "Gira la pieza del Hub, luego presiona la unidad de motores del Paso 5 debajo de ella para que las patas, la rueda giratoria y los motores queden alineados. Los 8 pasadores negros encima de los motores se conectan en los agujeros de la parte de abajo del Hub." } }],
      help: { en: "No new pieces! Take the motor unit you set aside earlier. Rotate the Hub piece following the rotate icon, then press the motor unit up underneath the Hub so the 8 black pegs on the motors click into the holes on the Hub's underside. The legs and caster wheel should all point downward.", es: "¡Sin piezas nuevas! Toma la unidad de motores que pusiste a un lado. Gira la pieza del Hub siguiendo el ícono de rotación, luego presiona la unidad de motores hacia arriba debajo del Hub para que los 8 pasadores negros de los motores encajen en los agujeros de la parte de abajo del Hub. Las patas y la rueda giratoria deben quedar apuntando hacia abajo." }
    },
    {
      icon: "Minus",
      pdfPage: 17,
      caption: { en: "Start a new small piece: push a tan peg into one end hole of the long black beam (1×15)!", es: "Empieza una piecita nueva: empuja un pasador canela en el agujero de una punta de la viga negra larga (1×15)." },
      parts: [
        { emoji: "⬛", count: 1, en: "Black beam, 1×15", es: "Viga negra, 1×15" },
        { emoji: "🟤", count: 1, en: "Tan connector peg", es: "Pasador conector color canela" }
      ],
      attach: [{ x: 85, y: 50, en: "One end hole of the long black beam", es: "Agujero de una punta de la viga negra larga", detail: { en: "Push the tan peg into the hole at one end of the long black beam.", es: "Empuja el pasador canela en el agujero de una punta de la viga negra larga." } }],
      help: { en: "Take the long black beam (1×15 holes) and push the tan peg into the hole at one end. Set this aside — you will attach it to the side of the model in the next step.", es: "Toma la viga negra larga (1×15 agujeros) y empuja el pasador canela en el agujero de una punta. Ponla aparte, la unirás al costado del modelo en el próximo paso." }
    },
    {
      icon: "Minus",
      pdfPage: 18,
      caption: { en: "Attach the long beam from Step 15 across one side of the model, following the arrow down!", es: "Une la viga larga del Paso 15 a lo largo de un costado del modelo, siguiendo la flecha hacia abajo." },
      parts: [],
      attach: [{ x: 50, y: 55, en: "One side of the model (following arrow)", es: "Un costado del modelo (siguiendo la flecha)", detail: { en: "Following the arrow, press the long beam down onto the side of the model so the tan peg clicks into the Hub's hole.", es: "Siguiendo la flecha, presiona la viga larga hacia abajo en el costado del modelo para que el pasador canela encaje en el agujero del Hub." } }],
      help: { en: "No new pieces! Attach the long beam from the last step down along one side of the combined model, following the arrow in the diagram. The tan peg hooks it to the Hub and the beam rests along the motor side.", es: "¡Sin piezas nuevas! Une la viga larga del último paso a lo largo de un costado del modelo combinado, siguiendo la flecha. El pasador canela la engancha al Hub y la viga descansa a lo largo del costado del motor." }
    },
    {
      icon: "Zap",
      pdfPage: 19,
      caption: { en: "Clip the blue cable clip onto one of the motor cables!", es: "Engancha el clip azul en uno de los cables del motor." },
      parts: [
        { emoji: "🔵", count: 1, en: "Blue cable clip", es: "Clip azul para cable" }
      ],
      attach: [{ x: 40, y: 55, en: "Onto one of the motor cables", es: "En uno de los cables del motor", detail: { en: "Clip the blue cable clip onto one of the motor cables coming out of the motor unit.", es: "Engancha el clip azul para cable en uno de los cables del motor que salen de la unidad de motores." } }],
      help: { en: "Take the small blue cable clip and clip it onto one of the flat motor cables. This keeps the cable tidy and guided correctly.", es: "Toma el pequeño clip azul para cable y engancha en uno de los cables planos del motor. Esto mantiene el cable ordenado y guiado correctamente." }
    },
    {
      icon: "Zap",
      pdfPage: 20,
      caption: { en: "Guide the clipped cable over the top of the model to the other side, following the picture!", es: "Guía el cable con el clip por encima del modelo hacia el otro lado, siguiendo la imagen." },
      parts: [],
      attach: [{ x: 50, y: 35, en: "Over the top to the other side", es: "Por encima hacia el otro lado", detail: { en: "Route the clipped cable up and over the top of the model following the picture so it reaches the Hub's ports on the other side.", es: "Guía el cable con el clip hacia arriba y por encima del modelo siguiendo la imagen para que llegue a los puertos del Hub en el otro lado." } }],
      help: { en: "No new pieces! Guide the cable (with the blue clip) up and over the top of the model to the other side, following the picture. This routes the cable neatly to reach the Hub's port.", es: "¡Sin piezas nuevas! Guía el cable (con el clip azul) hacia arriba y por encima del modelo hacia el otro lado, siguiendo la imagen. Esto guía el cable ordenadamente hasta el puerto del Hub." }
    },
    {
      icon: "Cpu",
      pdfPage: 21,
      caption: { en: "Plug that motor's cable into the port shown on the Hub, align the white dot!", es: "Conecta el cable de ese motor en el puerto indicado del Hub, alinea el punto blanco." },
      parts: [],
      attach: [{ x: 55, y: 40, en: "Port shown on the Hub (Port C or D)", es: "Puerto indicado en el Hub (Puerto C o D)", detail: { en: "Plug the motor cable into the port shown on the Hub. Line up the white dot on the cable connector with the black dot on the port.", es: "Conecta el cable del motor en el puerto indicado del Hub. Alinea el punto blanco del conector del cable con el punto negro del puerto." } }],
      help: { en: "No new pieces! Plug the cable you just routed into the port shown on the Hub. Remember: line up the white dot on the cable connector with the black dot on the port — it only connects one way!", es: "¡Sin piezas nuevas! Conecta el cable que acabas de guiar en el puerto indicado del Hub. Recuerda: alinea el punto blanco del conector del cable con el punto negro del puerto, ¡solo conecta de una manera!" }
    },
    {
      icon: "Minus",
      pdfPage: 22,
      caption: { en: "Build a second long beam the same way as Step 15: push a tan peg into one end hole!", es: "Construye una segunda viga larga igual al Paso 15: empuja un pasador canela en el agujero de una punta." },
      parts: [
        { emoji: "⬛", count: 1, en: "Black beam, 1×15", es: "Viga negra, 1×15" },
        { emoji: "🟤", count: 1, en: "Tan connector peg", es: "Pasador conector color canela" }
      ],
      attach: [{ x: 15, y: 50, en: "One end hole of the second long black beam", es: "Agujero de una punta de la segunda viga negra larga", detail: { en: "Push the tan peg into the hole at one end of the second long black beam, just like Step 15.", es: "Empuja el pasador canela en el agujero de una punta de la segunda viga negra larga, igual que en el Paso 15." } }],
      help: { en: "Build a second long beam exactly like the first in Step 15: push a tan peg into one end hole of a second long black beam. You will attach this one to the other side.", es: "Construye una segunda viga larga exactamente como la primera en el Paso 15: empuja un pasador canela en el agujero de una punta de una segunda viga negra larga. Esta la unirás al otro costado." }
    },
    {
      icon: "Minus",
      pdfPage: 23,
      caption: { en: "Rotate the model, then attach the second long beam across the other side!", es: "Gira el modelo, luego une la segunda viga larga a lo largo del otro costado." },
      parts: [],
      attach: [{ x: 50, y: 55, en: "Other side of the model", es: "El otro costado del modelo", detail: { en: "Rotate the model following the rotate icon, then attach the second long beam across the other side, mirroring the first.", es: "Gira el modelo siguiendo el ícono de rotación, luego une la segunda viga larga al otro costado, en espejo del primero." } }],
      help: { en: "No new pieces! Rotate the model following the rotate icon, then attach the second long beam down along the other side of the model. It should mirror the first beam on the opposite side.", es: "¡Sin piezas nuevas! Gira el modelo siguiendo el ícono de rotación, luego une la segunda viga larga a lo largo del otro costado del modelo. Debe quedar en espejo del primer lado." }
    },
    {
      icon: "Zap",
      pdfPage: 24,
      caption: { en: "Clip the green cable clip onto the other motor cable!", es: "Engancha el clip verde en el otro cable del motor." },
      parts: [
        { emoji: "🟢", count: 1, en: "Green cable clip", es: "Clip verde para cable" }
      ],
      attach: [{ x: 60, y: 55, en: "Onto the second motor cable", es: "En el segundo cable del motor", detail: { en: "Clip the green cable clip onto the second motor cable.", es: "Engancha el clip verde en el segundo cable del motor." } }],
      help: { en: "Take the small green cable clip and clip it onto the second motor cable, just like you did with the blue one.", es: "Toma el pequeño clip verde para cable y engancha en el segundo cable del motor, igual que hiciste con el azul." }
    },
    {
      icon: "Cpu",
      pdfPage: 25,
      caption: { en: "Plug that second motor's cable into the port shown on the Hub!", es: "Conecta el cable del segundo motor en el puerto indicado del Hub." },
      parts: [],
      attach: [{ x: 55, y: 40, en: "Second port shown on the Hub", es: "Segundo puerto indicado en el Hub", detail: { en: "Plug the second motor cable into the next port shown on the Hub, aligning the white dot with the black dot.", es: "Conecta el cable del segundo motor en el siguiente puerto indicado del Hub, alineando el punto blanco con el punto negro." } }],
      help: { en: "No new pieces! Plug the second motor's cable into the port shown on the Hub. Align the white dot with the black dot as always.", es: "¡Sin piezas nuevas! Conecta el cable del segundo motor en el puerto indicado del Hub. Alinea el punto blanco con el punto negro como siempre." }
    },
    {
      icon: "Zap",
      pdfPage: 26,
      caption: { en: "Tuck any loose cable neatly along the beam so it does not hang loose!", es: "Acomoda el cable suelto a lo largo de la viga para que no quede colgando." },
      parts: [],
      attach: [{ x: 50, y: 50, en: "Along the beam", es: "A lo largo de la viga", detail: { en: "Tuck any loose cable neatly along the side beam so it does not hang down or catch on anything.", es: "Acomoda el cable suelto a lo largo de la viga lateral para que no quede colgando ni se enganche en nada." } }],
      help: { en: "No new pieces! Tuck any extra cable length neatly along the long side beam so the cables are tidy and do not hang loose.", es: "¡Sin piezas nuevas! Acomoda el largo extra de cable a lo largo de la viga lateral para que los cables estén ordenados y no queden colgando." }
    },
    {
      icon: "Circle",
      pdfPage: 27,
      caption: { en: "Rotate the model, push a blue wheel onto each motor's axle, 2 wheels total!", es: "Gira el modelo, empuja una rueda azul en el eje de cada motor, ¡2 ruedas en total!" },
      parts: [
        { emoji: "🔵", count: 2, en: "Blue wheel (tire + rim)", es: "Rueda azul (llanta + aro)" }
      ],
      attach: [
        { x: 25, y: 50, en: "Left motor axle", es: "Eje del motor izquierdo", detail: { en: "Push one blue wheel firmly onto the left motor's axle (yellow peg).", es: "Empuja una rueda azul firmemente en el eje (pasador amarillo) del motor izquierdo." } },
        { x: 75, y: 50, en: "Right motor axle", es: "Eje del motor derecho", detail: { en: "Push the second blue wheel firmly onto the right motor's axle.", es: "Empuja la segunda rueda azul firmemente en el eje del motor derecho." } }
      ],
      help: { en: "Rotate the model following the rotate icon so the motor axles face you. Push one blue wheel onto each motor's yellow axle peg. Press firmly until each wheel sits flush. These are the drive wheels!", es: "Gira el modelo siguiendo el ícono de rotación para que los ejes del motor queden hacia ti. Empuja una rueda azul en el pasador amarillo de cada motor. Presiona firmemente hasta que cada rueda quede al ras. ¡Estas son las ruedas motrices!" }
    },
    {
      icon: "Circle",
      pdfPage: 28,
      caption: { en: "Push a small white connector piece into the center of each wheel to hold it in place, 2 total!", es: "Empuja una piecita blanca en el centro de cada rueda para sostenerla, ¡2 en total!" },
      parts: [
        { emoji: "⬜", count: 2, en: "Small white connector piece", es: "Piecita blanca conector" }
      ],
      attach: [
        { x: 25, y: 50, en: "Center of the left wheel", es: "Centro de la rueda izquierda", detail: { en: "Push one small white connector piece into the center of the left wheel.", es: "Empuja una piecita blanca en el centro de la rueda izquierda." } },
        { x: 75, y: 50, en: "Center of the right wheel", es: "Centro de la rueda derecha", detail: { en: "Push the second small white connector piece into the center of the right wheel.", es: "Empuja la segunda piecita blanca en el centro de la rueda derecha." } }
      ],
      help: { en: "Push one small white connector piece into the center axle hole of each wheel. These lock the wheels onto the axle so they do not fall off.", es: "Empuja una pequeña piecita blanca en el agujero central del eje de cada rueda. Estas traban las ruedas en el eje para que no se caigan." }
    },
    {
      icon: "Cpu",
      pdfPage: 29,
      caption: { en: "Start the steering motor: push a short red pin into the top of a new motor!", es: "Empieza el motor de dirección: empuja un pequeño pasador rojo en la parte de arriba de un motor nuevo." },
      parts: [
        { emoji: "⚙️", count: 1, en: "Motor (with cable)", es: "Motor (con cable)" },
        { emoji: "🔴", count: 1, en: "Red connector pin (short)", es: "Pasador conector rojo (corto)" }
      ],
      attach: [{ x: 50, y: 30, en: "Top hole of the new motor", es: "Agujero de arriba del motor nuevo", detail: { en: "Push the short red pin into the top hole of the new motor. Align the white dot on the motor cable connector with the black dot indicator.", es: "Empuja el pasador rojo corto en el agujero de arriba del motor nuevo. Alinea el punto blanco del conector del cable del motor con el indicador del punto negro." } }],
      help: { en: "Take a new motor (this is the steering motor) and push a short red pin into the top hole. The red pin will hold the gray gear in the next step. Also note the white-dot alignment indicator on the motor cable.", es: "Toma un motor nuevo (este es el motor de dirección) y empuja un pasador rojo corto en el agujero de arriba. El pasador rojo sostendrá el engranaje gris en el próximo paso. También observa el indicador de alineación del punto blanco en el cable del motor." }
    },
    {
      icon: "Settings",
      pdfPage: 30,
      caption: { en: "Push the gray gear (steering knob) onto the red pin from the last step!", es: "Empuja el engranaje gris (perilla de dirección) en el pasador rojo del paso anterior." },
      parts: [
        { emoji: "⬜", count: 1, en: "Gray gear (steering knob)", es: "Engranaje gris (perilla de dirección)" }
      ],
      attach: [{ x: 50, y: 40, en: "Onto the red pin on top of the steering motor", es: "En el pasador rojo encima del motor de dirección", detail: { en: "Push the gray gear firmly onto the red pin on top of the steering motor.", es: "Empuja el engranaje gris firmemente en el pasador rojo encima del motor de dirección." } }],
      help: { en: "Push the gray gear (steering knob) firmly onto the red pin sticking out of the top of the steering motor. This gear will be used to adjust the steering angle.", es: "Empuja el engranaje gris (perilla de dirección) firmemente en el pasador rojo que sobresale de la parte de arriba del motor de dirección. Este engranaje se usará para ajustar el ángulo de dirección." }
    },
    {
      icon: "Wrench",
      pdfPage: 31,
      caption: { en: "Build 2 more small leg pieces the same way as Step 7!", es: "Construye 2 piecitas más, de la misma forma que en el Paso 7." },
      parts: [
        { emoji: "🟡", count: 2, en: "Yellow brick with holes, 1×3", es: "Ladrillo amarillo con agujeros, 1×3" },
        { emoji: "⬜", count: 2, en: "Gray angled connector", es: "Conector gris angulado" }
      ],
      attach: [
        { x: 35, y: 55, en: "Gray connector onto left yellow brick", es: "Conector gris en el ladrillo amarillo izquierdo", detail: { en: "Snap one gray angled connector onto the yellow 1×3 brick.", es: "Encaja un conector gris angulado en el ladrillo amarillo 1×3." } },
        { x: 65, y: 55, en: "Gray connector onto right yellow brick", es: "Conector gris en el ladrillo amarillo derecho", detail: { en: "Snap the second gray angled connector onto the second yellow 1×3 brick.", es: "Encaja el segundo conector gris angulado en el segundo ladrillo amarillo 1×3." } }
      ],
      help: { en: "Build two more small leg pieces exactly the same way you did in Step 7: snap a gray angled connector onto each yellow 1×3 brick.", es: "Construye dos piecitas más exactamente igual que en el Paso 7: encaja un conector gris angulado en cada ladrillo amarillo 1×3." }
    },
    {
      icon: "Settings",
      pdfPage: 32,
      caption: { en: "Push 4 black pegs into both new leg pieces from the last step!", es: "Empuja 4 pasadores negros en las dos piecitas nuevas del paso anterior." },
      parts: [
        { emoji: "⬛", count: 4, en: "Black connector peg", es: "Pasador conector negro" }
      ],
      attach: [
        { x: 35, y: 50, en: "2 pegs into the left leg piece", es: "2 pasadores en la piecita izquierda", detail: { en: "Push 2 black pegs into the holes of the left leg piece.", es: "Empuja 2 pasadores negros en los agujeros de la piecita izquierda." } },
        { x: 65, y: 50, en: "2 pegs into the right leg piece", es: "2 pasadores en la piecita derecha", detail: { en: "Push 2 black pegs into the holes of the right leg piece.", es: "Empuja 2 pasadores negros en los agujeros de la piecita derecha." } }
      ],
      help: { en: "Push 4 black pegs into both new leg pieces — 2 pegs per leg piece. These pegs let the leg pieces connect to the steering motor.", es: "Empuja 4 pasadores negros en las dos nuevas piecitas, 2 pasadores por piecita. Estos pasadores permiten que las piecitas se conecten al motor de dirección." }
    },
    {
      icon: "Wrench",
      pdfPage: 33,
      caption: { en: "Attach both leg pieces onto the side of the steering motor, following the arrows!", es: "Une las dos piecitas al costado del motor de dirección, siguiendo las flechas." },
      parts: [],
      attach: [{ x: 50, y: 50, en: "Both sides of the steering motor (following arrows)", es: "Ambos costados del motor de dirección (siguiendo las flechas)", detail: { en: "Attach both leg pieces onto the side of the steering motor, following the arrows in the diagram.", es: "Une las dos piecitas al costado del motor de dirección, siguiendo las flechas del diagrama." } }],
      help: { en: "No new pieces! Attach both leg pieces onto the side of the steering motor following the arrows. The yellow bricks should face outward and the gray connectors click into the motor's side holes.", es: "¡Sin piezas nuevas! Une las dos piecitas al costado del motor de dirección siguiendo las flechas. Los ladrillos amarillos deben quedar hacia afuera y los conectores grises encajan en los agujeros del costado del motor." }
    },
    {
      icon: "Cpu",
      pdfPage: 34,
      caption: { en: "Attach the steering motor underneath the main body, connecting its legs to the two long side beams!", es: "Une el motor de dirección debajo del cuerpo principal, conectando sus patas a las dos vigas largas de los costados." },
      parts: [],
      attach: [{ x: 50, y: 65, en: "Underneath the main body, legs onto side beams (following arrows)", es: "Debajo del cuerpo principal, patas en las vigas laterales (siguiendo las flechas)", detail: { en: "Following the arrows, attach the steering motor assembly underneath the main body so its legs connect to the two long side beams.", es: "Siguiendo las flechas, une el ensamblaje del motor de dirección debajo del cuerpo principal para que sus patas se conecten a las dos vigas largas laterales." } }],
      help: { en: "No new pieces! Following the arrows, press the steering motor assembly (with its two leg pieces) underneath the main body so the yellow legs clip onto the two long black side beams. It snaps into place at the front of the robot.", es: "¡Sin piezas nuevas! Siguiendo las flechas, presiona el ensamblaje del motor de dirección (con sus dos piecitas de patas) debajo del cuerpo principal para que las patas amarillas se enganchen en las dos vigas negras largas laterales. Encaja en su lugar en la parte delantera del robot." }
    },
    {
      icon: "Search",
      pdfPage: 35,
      caption: { en: "Rotate the model to see the underside, check the connector circled in red is pushed in all the way!", es: "Gira el modelo para ver la parte de abajo, revisa que el conector marcado en rojo esté empujado hasta el fondo." },
      parts: [],
      attach: [{ x: 60, y: 65, en: "Connector circled in red on the underside", es: "Conector marcado en rojo en la parte de abajo", detail: { en: "Flip the model to see the underside and check the connector circled in red — make sure it is pushed in all the way.", es: "Voltea el modelo para ver la parte de abajo y revisa el conector marcado en rojo, asegúrate de que esté empujado hasta el fondo." } }],
      help: { en: "No new pieces! Rotate the model following the rotate icon to see the underside. Find the connector circled in red in the diagram and make sure it is fully pushed in. If not, press it firmly until it clicks.", es: "¡Sin piezas nuevas! Gira el modelo siguiendo el ícono de rotación para ver la parte de abajo. Encuentra el conector marcado en rojo en el diagrama y asegúrate de que esté completamente empujado. Si no, presiónalo firmemente hasta que haga clic." }
    },
    {
      icon: "Sparkles",
      pdfPage: 36,
      caption: { en: "Rotate the model back over, your Driving Base is complete! Plug motors into Ports C, D, and E. 🎉", es: "Gira el modelo de vuelta, ¡tu Base Motriz está completa! Conecta los motores a los Puertos C, D y E. 🎉" },
      parts: [],
      attach: [{ x: 50, y: 50, en: "Ports C and D (drive motors), Port E (steering motor)", es: "Puertos C y D (motores de manejo), Puerto E (motor de dirección)", detail: { en: "Plug the two drive motors from Steps 3–5 into Ports C and D on the Hub. Plug the steering motor from Steps 27–28 into Port E.", es: "Conecta los dos motores de manejo de los Pasos 3–5 a los Puertos C y D del Hub. Conecta el motor de dirección de los Pasos 27–28 al Puerto E." } }],
      help: { en: "No new pieces! Rotate the model back over — your Driving Base is complete! Plug the two drive motors into Ports C and D on the Hub, and the steering motor into Port E. Now it is ready to program and drive!", es: "¡Sin piezas nuevas! Gira el modelo de vuelta, ¡tu Base Motriz está completa! Conecta los dos motores de manejo a los Puertos C y D del Hub, y el motor de dirección al Puerto E. ¡Ahora está lista para programar y manejar!" }
    }
  ]
};