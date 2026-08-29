export const grabberKit = {
  id: "grabber",
  name: "LEGO Education SPIKE Prime",
  model: { en: "Grabber", es: "La Pinza" },
  color: "#9333EA",
  pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/f0bb3797f_Grabber1_compressed.pdf",
  category: "spike",
  steps: [
    {
      icon: "Cpu",
      pdfPage: 2,
      caption: { en: "Open your SPIKE Prime tote and slide the battery pack into the Hub!", es: "Abre tu caja de SPIKE Prime y desliza la batería adentro del Hub." },
      parts: [
        { emoji: "🟡", count: 1, en: "SPIKE Prime Hub", es: "Hub de SPIKE Prime" },
        { emoji: "🔋", count: 1, en: "Battery pack", es: "Paquete de baterías" }
      ],
      attach: [{ x: 50, y: 55, en: "Yellow battery cover on the Hub", es: "Tapa amarilla de la batería del Hub", detail: { en: "Open the yellow cover and slide the battery pack in firmly until it twists to lock. Follow the rotate icons on the Hub.", es: "Abre la tapa amarilla y desliza la batería firmemente hasta que gire y trabe. Sigue los íconos de rotación del Hub." } }],
      help: { en: "Open your SPIKE Prime storage tote and take out the Hub. Slide the battery pack into the Hub and twist it to lock, following the rotate icons. The Hub is the Grabber's brain!", es: "Abre tu caja de SPIKE Prime y saca el Hub. Desliza la batería dentro del Hub y gírala para trabarla, siguiendo los íconos de rotación. ¡El Hub es el cerebro de la Pinza!" }
    },
    {
      icon: "Minus",
      pdfPage: 3,
      caption: { en: "Push 2 black pins into the light-blue L-shaped beam, the first arm of the grabber!", es: "Empuja 2 pasadores negros en la viga azul claro en forma de L, ¡el primer brazo de la pinza!" },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" },
        { emoji: "🩵", count: 1, en: "Light-blue angled beam (L-shaped)", es: "Viga azul claro en forma de L" }
      ],
      attach: [{ x: 65, y: 45, en: "Corner holes of the L-shaped beam", es: "Agujeros de la esquina de la viga en L", detail: { en: "Push one black pin into each of the corner holes of the L-shaped beam, like putting two studs on a corner bracket.", es: "Empuja un pasador negro en cada uno de los agujeros de la esquina de la viga en forma de L, como poner dos pernos en una escuadra." } }],
      help: { en: "Find the light-blue L-shaped angled beam. Push two black connector pins into the corner holes of the beam. Push firmly until they click in. This is the first grabber arm!", es: "Busca la viga azul claro en forma de L. Empuja dos pasadores negros en los agujeros de la esquina de la viga. Empuja firmemente hasta que hagan clic. ¡Este es el primer brazo de la pinza!" }
    },
    {
      icon: "Minus",
      pdfPage: 4,
      caption: { en: "Snap a gray double connector onto the beam and add 2 more black pins.", es: "Encaja un conector doble gris en la viga y agrega 2 pasadores negros más." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" },
        { emoji: "⬜", count: 1, en: "Gray double pin connector", es: "Conector doble gris" }
      ],
      attach: [{ x: 50, y: 40, en: "Top of the L-shaped beam", es: "Parte de arriba de la viga en L", detail: { en: "Snap the gray double connector onto the top of the beam, then push two more black pins into the remaining holes.", es: "Encaja el conector doble gris en la parte de arriba de la viga, luego empuja dos pasadores negros más en los agujeros restantes." } }],
      help: { en: "Take the gray double pin connector and snap it onto the top of the L-shaped beam assembly. Then push two more black connector pins into the open holes on the beam. The arm is getting stronger!", es: "Toma el conector doble gris y encájalo en la parte de arriba del ensamblaje de la viga en L. Luego empuja dos pasadores negros más en los agujeros abiertos de la viga. ¡El brazo se vuelve más fuerte!" }
    },
    {
      icon: "Cpu",
      pdfPage: 5,
      caption: { en: "Meet the Medium Motor! Line up the white dot and attach the first arm to it.", es: "¡Conoce el Motor Mediano! Alinea el punto blanco y coloca el primer brazo en él." },
      parts: [
        { emoji: "⚙️", count: 1, en: "Medium Motor (with cable)", es: "Motor Mediano (con cable)" }
      ],
      attach: [{ x: 35, y: 50, en: "White dot mark on the motor face", es: "Marca del punto blanco en la cara del motor", detail: { en: "Line up the white dot on the beam with the alignment mark on the motor, then press the beam firmly onto the motor.", es: "Alinea el punto blanco de la viga con la marca del motor, luego presiona la viga firmemente en el motor." } }],
      help: { en: "Find the Medium Motor with its cable. This motor opens and closes the grabber! Look for the white dot on the beam and the alignment mark on the motor face. Line them up, then press the L-shaped beam assembly firmly onto the motor until it clicks.", es: "Busca el Motor Mediano con su cable. ¡Este motor abre y cierra la pinza! Busca el punto blanco en la viga y la marca de alineación en la cara del motor. Alinéalos, luego presiona el ensamblaje de la viga en L firmemente en el motor hasta que haga clic." }
    },
    {
      icon: "Minus",
      pdfPage: 6,
      caption: { en: "Build a matching second L-shaped arm with 2 black pins, the mirror of the first!", es: "Arma un segundo brazo en L igual con 2 pasadores negros, ¡el espejo del primero!" },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" },
        { emoji: "🩵", count: 1, en: "Light-blue angled beam (L-shaped)", es: "Viga azul claro en forma de L" }
      ],
      attach: [{ x: 65, y: 45, en: "Corner holes of the second L-beam", es: "Agujeros de la esquina de la segunda viga en L", detail: { en: "Repeat step 1: push two black pins into the corner holes of the second L-shaped beam.", es: "Repite el paso 1: empuja dos pasadores negros en los agujeros de la esquina de la segunda viga en L." } }],
      help: { en: "Build a second L-shaped beam that is an exact mirror of the first one. Push two black connector pins into the corner holes of the second light-blue L-shaped beam. This becomes the other side of the grabber!", es: "Arma una segunda viga en L que sea un espejo exacto de la primera. Empuja dos pasadores negros en los agujeros de la esquina de la segunda viga azul claro en L. ¡Este se convierte en el otro lado de la pinza!" }
    },
    {
      icon: "Minus",
      pdfPage: 7,
      caption: { en: "Add a gray double connector to this second beam.", es: "Agrega un conector doble gris a esta segunda viga." },
      parts: [
        { emoji: "⬜", count: 1, en: "Gray double pin connector", es: "Conector doble gris" }
      ],
      attach: [{ x: 50, y: 40, en: "Top of the second L-beam", es: "Parte de arriba de la segunda viga en L", detail: { en: "Snap the gray double connector onto the top of the second beam, just like you did for the first beam.", es: "Encaja el conector doble gris en la parte de arriba de la segunda viga, igual que lo hiciste con la primera." } }],
      help: { en: "Add a gray double pin connector to the top of the second L-shaped beam, just like Step 2. Snap it firmly into place. Both arms of the grabber should now look identical!", es: "Agrega un conector doble gris en la parte de arriba de la segunda viga en L, igual que el Paso 2. Encájalo firmemente. ¡Ambos brazos de la pinza deben verse idénticos!" }
    },
    {
      icon: "Minus",
      pdfPage: 8,
      caption: { en: "Push 2 more black pins into the second beam.", es: "Empuja 2 pasadores negros más en la segunda viga." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 55, en: "Open holes in the second beam", es: "Agujeros abiertos en la segunda viga", detail: { en: "Push two black pins into the remaining open holes on the second L-shaped beam.", es: "Empuja dos pasadores negros en los agujeros abiertos restantes de la segunda viga en L." } }],
      help: { en: "Push two more black connector pins into the open holes on the second L-beam. Now both arms are fully pinned and ready to attach to the motor!", es: "Empuja dos pasadores negros más en los agujeros abiertos de la segunda viga en L. ¡Ahora ambos brazos tienen todos sus pasadores y están listos para unirse al motor!" }
    },
    {
      icon: "Zap",
      pdfPage: 9,
      caption: { en: "Press the second arm onto the other side of the motor, following the arrow, so both sides match!", es: "Presiona el segundo brazo en el otro lado del motor, siguiendo la flecha, ¡para que ambos lados sean iguales!" },
      parts: [],
      attach: [{ x: 65, y: 50, en: "Other side of the motor", es: "El otro lado del motor", detail: { en: "Press the second L-shaped arm onto the other side of the motor, following the arrow. The grabber now has two symmetrical arms.", es: "Presiona el segundo brazo en L en el otro lado del motor, siguiendo la flecha. La pinza ahora tiene dos brazos simétricos." } }],
      help: { en: "No new pieces! Press the second arm onto the other side of the motor, following the arrow in the diagram. Both L-shaped arms should now stick out symmetrically from each side of the motor, like two claws on a crab!", es: "¡Sin piezas nuevas! Presiona el segundo brazo en el otro lado del motor, siguiendo la flecha del diagrama. Ambos brazos en L deben sobresalir simétricamente de cada lado del motor, ¡como dos garras de un cangrejo!" }
    },
    {
      icon: "Box",
      pdfPage: 10,
      caption: { en: "Snap a purple angled connector block onto the back of the motor.", es: "Encaja un bloque morado angulado en la parte trasera del motor." },
      parts: [
        { emoji: "🟣", count: 1, en: "Purple angled connector block", es: "Bloque conector morado angulado" }
      ],
      attach: [{ x: 70, y: 50, en: "Back of the motor", es: "Parte trasera del motor", detail: { en: "Snap the purple angled block onto the back of the motor body. It will connect to the Hub later.", es: "Encaja el bloque morado angulado en la parte trasera del motor. Se conectará al Hub más adelante." } }],
      help: { en: "Find the purple angled connector block. Snap it firmly onto the back of the motor body. This piece is how the grabber head will attach to the Hub in the final step!", es: "Busca el bloque conector morado angulado. Encájalo firmemente en la parte trasera del motor. ¡Esta pieza es como la cabeza de la pinza se unirá al Hub en el paso final!" }
    },
    {
      icon: "Minus",
      pdfPage: 11,
      caption: { en: "Push the black axle into the top of the motor, add 2 pins on the sides, and add a yellow connector through the back.", es: "Empuja el eje negro en la parte de arriba del motor, agrega 2 pasadores a los lados, y un conector amarillo atrás." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" },
        { emoji: "🟡", count: 1, en: "Yellow connector, 1×2", es: "Conector amarillo 1×2" },
        { emoji: "⬛", count: 1, en: "Black axle, length 3", es: "Eje negro, tamaño 3" }
      ],
      attach: [
        { x: 50, y: 30, en: "Top hole of the motor", es: "Agujero de arriba del motor", detail: { en: "Push the black axle (length 3) into the top hole of the motor. This axle will turn the grabber fingers.", es: "Empuja el eje negro (tamaño 3) en el agujero de arriba del motor. Este eje hará girar los dedos de la pinza." } },
        { x: 30, y: 50, en: "Two side holes on the axle", es: "Dos agujeros laterales en el eje", detail: { en: "Attach two black pins onto either side of the axle that sticks out.", es: "Coloca dos pasadores negros a cada lado del eje que sobresale." } }
      ],
      help: { en: "Push the black axle (length 3) into the top hole of the motor, it will turn the grabber fingers. Attach two black connector pins on either side of it. Then put a yellow connector through the gray connector behind the motor to secure the back structure.", es: "Empuja el eje negro (tamaño 3) en el agujero de arriba del motor, hará girar los dedos. Coloca dos pasadores negros a cada lado. Luego pasa un conector amarillo por el conector gris detrás del motor para asegurar la estructura trasera." }
    },
    {
      icon: "Box",
      pdfPage: 12,
      caption: { en: "Add a purple 1×5 beam across the top with 4 black pins, making the frame strong!", es: "Agrega una viga morada de 1×5 arriba con 4 pasadores negros, ¡haciendo el marco fuerte!" },
      parts: [
        { emoji: "🟣", count: 1, en: "Purple beam, 1×5", es: "Viga morada 1×5" },
        { emoji: "⬛", count: 4, en: "Black connector pin", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 28, en: "Top of the motor frame", es: "Parte de arriba del marco del motor", detail: { en: "Press the purple 1×5 beam across the top of the motor frame using 2 black pins, then add 2 more black pins on top of the beam.", es: "Presiona la viga morada 1×5 en la parte de arriba del marco del motor con 2 pasadores negros, luego agrega 2 pasadores negros más encima de la viga." } }],
      help: { en: "Add a purple 1×5 beam across the top of the motor assembly using two black pins to lock it. Then push two more black pins on top of the beam. This makes the entire grabber head frame very sturdy!", es: "Agrega una viga morada 1×5 en la parte de arriba del ensamblaje del motor usando dos pasadores negros para fijarla. Luego empuja dos pasadores negros más encima de la viga. ¡Esto hace que todo el marco de la cabeza de la pinza sea muy firme!" }
    },
    {
      icon: "Minus",
      pdfPage: 13,
      caption: { en: "Start the fixed jaw: push a tan pin into a small gray connector.", es: "Empieza la mandíbula fija: empuja un pasador canela en un conector gris pequeño." },
      parts: [
        { emoji: "🟤", count: 1, en: "Tan connector pin", es: "Pasador conector color canela" },
        { emoji: "⬜", count: 1, en: "Gray connector, 1×2", es: "Conector gris 1×2" }
      ],
      attach: [{ x: 50, y: 55, en: "Hole in the small gray connector", es: "Agujero en el conector gris pequeño", detail: { en: "Push the tan pin into one of the holes in the small gray 1×2 connector.", es: "Empuja el pasador canela en uno de los agujeros del conector gris pequeño 1×2." } }],
      help: { en: "This step starts the fixed jaw, the jaw that stays still. Take the small gray 1×2 connector and push the tan-colored pin into one of its holes. Build this as a separate small sub-assembly.", es: "Este paso empieza la mandíbula fija, la que se queda quieta. Toma el conector gris pequeño 1×2 y empuja el pasador de color canela en uno de sus agujeros. Arma esto como un pequeño sub-ensamblaje aparte." }
    },
    {
      icon: "Box",
      pdfPage: 14,
      caption: { en: "Add a light-blue connector on top of that piece.", es: "Agrega un conector azul claro encima de esa pieza." },
      parts: [
        { emoji: "🩵", count: 1, en: "Light-blue connector, 1×2", es: "Conector azul claro 1×2" }
      ],
      attach: [{ x: 50, y: 40, en: "Top of the gray connector sub-assembly", es: "Parte de arriba del sub-ensamblaje del conector gris", detail: { en: "Snap the light-blue 1×2 connector on top of the gray connector piece to complete the fixed jaw.", es: "Encaja el conector azul claro 1×2 encima del conector gris para completar la mandíbula fija." } }],
      help: { en: "Take the light-blue 1×2 connector and snap it on top of the small gray connector sub-assembly you just made. This little two-piece stack is the complete fixed jaw of the grabber!", es: "Toma el conector azul claro 1×2 y encájalo encima del sub-ensamblaje del conector gris que acabas de hacer. ¡Esta pequeña pila de dos piezas es la mandíbula fija completa de la pinza!" }
    },
    {
      icon: "Zap",
      pdfPage: 15,
      caption: { en: "Press the fixed jaw onto the front of the motor, following the arrow. This jaw stays still!", es: "Presiona la mandíbula fija en el frente del motor, siguiendo la flecha. ¡Esta mandíbula se queda quieta!" },
      parts: [],
      attach: [{ x: 30, y: 55, en: "Front center of the motor", es: "Centro frontal del motor", detail: { en: "Press the fixed jaw sub-assembly onto the front of the motor, following the arrow. It does not move, it is the lower jaw.", es: "Presiona el sub-ensamblaje de la mandíbula fija en el frente del motor, siguiendo la flecha. No se mueve, es la mandíbula inferior." } }],
      help: { en: "No new pieces! Take the small fixed jaw you built. Press it onto the front of the motor following the arrow in the diagram. This jaw stays completely still, it is the bottom of the grabber's mouth!", es: "¡Sin piezas nuevas! Toma la pequeña mandíbula fija que armaste. Presiónala en el frente del motor siguiendo la flecha. ¡Esta mandíbula se queda completamente quieta, es la parte inferior de la boca de la pinza!" }
    },
    {
      icon: "Minus",
      pdfPage: 16,
      caption: { en: "Start the 2 moving fingers: push a length-4 axle into each yellow angled connector.", es: "Empieza los 2 dedos móviles: empuja un eje de tamaño 4 en cada conector amarillo angulado." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black axle, length 4", es: "Eje negro, tamaño 4" },
        { emoji: "🟡", count: 2, en: "Yellow angled connector", es: "Conector amarillo angulado" }
      ],
      attach: [{ x: 50, y: 55, en: "Top hole of each yellow connector", es: "Agujero superior de cada conector amarillo", detail: { en: "Push one length-4 axle into the top hole of each yellow angled connector. Build two identical finger bases.", es: "Empuja un eje de tamaño 4 en el agujero superior de cada conector amarillo angulado. Arma dos bases de dedo idénticas." } }],
      help: { en: "Build 2 identical finger bases. For each one: push a length-4 black axle into the top hole of a yellow angled connector. These will become the two moving fingers that open and close the grabber!", es: "Arma 2 bases de dedo idénticas. Para cada una: empuja un eje negro de tamaño 4 en el agujero superior de un conector amarillo angulado. ¡Estos se convertirán en los dos dedos móviles que abren y cierran la pinza!" }
    },
    {
      icon: "Box",
      pdfPage: 17,
      caption: { en: "Add a light-blue connector to each finger base.", es: "Agrega un conector azul claro a cada base de dedo." },
      parts: [
        { emoji: "🩵", count: 2, en: "Light-blue connector, 1×2", es: "Conector azul claro 1×2" }
      ],
      attach: [{ x: 50, y: 50, en: "Each yellow finger base", es: "Cada base de dedo amarilla", detail: { en: "Snap a light-blue connector onto each yellow angled connector to build up both fingers.", es: "Encaja un conector azul claro en cada conector amarillo angulado para construir ambos dedos." } }],
      help: { en: "Add one light-blue connector to each of the two yellow finger assemblies. Press firmly until each clicks. The fingers are growing taller!", es: "Agrega un conector azul claro a cada uno de los dos ensamblajes de dedo amarillo. Presiona firmemente hasta que cada uno haga clic. ¡Los dedos van creciendo!" }
    },
    {
      icon: "Minus",
      pdfPage: 18,
      caption: { en: "Push a black pin into each finger.", es: "Empuja un pasador negro en cada dedo." },
      parts: [
        { emoji: "⬛", count: 2, en: "Black connector pin", es: "Pasador conector negro" }
      ],
      attach: [{ x: 50, y: 50, en: "Open hole in each finger assembly", es: "Agujero abierto en cada ensamblaje de dedo", detail: { en: "Push one black connector pin into the open hole in each finger assembly.", es: "Empuja un pasador negro en el agujero abierto de cada ensamblaje de dedo." } }],
      help: { en: "Push one black connector pin into each finger assembly. This pin will connect to the purple beam that extends the finger length in the next step.", es: "Empuja un pasador negro en cada ensamblaje de dedo. Este pasador se conectará a la viga morada que extiende la longitud del dedo en el siguiente paso." }
    },
    {
      icon: "Minus",
      pdfPage: 19,
      caption: { en: "Add a purple 1×5 beam to each finger to make them long.", es: "Agrega una viga morada de 1×5 a cada dedo para hacerlos largos." },
      parts: [
        { emoji: "🟣", count: 2, en: "Purple beam, 1×5", es: "Viga morada 1×5" }
      ],
      attach: [{ x: 50, y: 55, en: "Each finger via the black pin", es: "Cada dedo a través del pasador negro", detail: { en: "Press one purple 1×5 beam onto each finger via the black pin. The fingers now extend to their full length.", es: "Presiona una viga morada 1×5 en cada dedo a través del pasador negro. Los dedos ahora se extienden a su longitud completa." } }],
      help: { en: "Snap one purple 1×5 beam onto each of the two fingers using the black pins. The fingers are now long enough to grab things!", es: "Encaja una viga morada 1×5 en cada uno de los dos dedos usando los pasadores negros. ¡Los dedos ahora son suficientemente largos para agarrar cosas!" }
    },
    {
      icon: "Box",
      pdfPage: 20,
      caption: { en: "Add a yellow angled connector to the tip of each finger, like a fingernail!", es: "Agrega un conector amarillo angulado a la punta de cada dedo, ¡como una uña!" },
      parts: [
        { emoji: "🟡", count: 2, en: "Yellow angled connector", es: "Conector amarillo angulado" }
      ],
      attach: [{ x: 50, y: 60, en: "Tip of each purple beam", es: "Punta de cada viga morada", detail: { en: "Snap a yellow angled connector to the tip of each purple beam to create the fingernail tips of the grabber.", es: "Encaja un conector amarillo angulado en la punta de cada viga morada para crear las puntas de uña de la pinza." } }],
      help: { en: "Add a yellow angled connector to the very tip of each finger's purple beam. These connectors look like little fingernails and give the grabber a better grip on objects!", es: "Agrega un conector amarillo angulado en la punta de cada viga morada. ¡Estos conectores parecen pequeñas uñas y le dan a la pinza mejor agarre de los objetos!" }
    },
    {
      icon: "Circle",
      pdfPage: 21,
      caption: { en: "Loop a gray flexible tube onto each finger to make a springy claw!", es: "Coloca un tubo gris flexible en cada dedo para hacer una garra con resorte." },
      parts: [
        { emoji: "⬜", count: 2, en: "Gray flexible tube", es: "Tubo gris flexible" }
      ],
      attach: [
        { x: 30, y: 55, en: "Looped around the left finger", es: "Enrollado alrededor del dedo izquierdo", detail: { en: "Loop one gray flexible tube around the left finger assembly so it forms a springy claw shape.", es: "Coloca un tubo gris flexible alrededor del ensamblaje del dedo izquierdo para que forme una garra con resorte." } },
        { x: 70, y: 55, en: "Looped around the right finger", es: "Enrollado alrededor del dedo derecho", detail: { en: "Loop the second gray flexible tube around the right finger assembly in the same way.", es: "Coloca el segundo tubo gris flexible alrededor del ensamblaje del dedo derecho de la misma manera." } }
      ],
      help: { en: "Take the 2 gray flexible bendy tubes. Loop one around each of the two fingers to make a springy claw shape. The bendy tubes give the grabber fingers a soft, gripping surface so they can hold onto objects without slipping!", es: "Toma los 2 tubos grises flexibles. Coloca uno alrededor de cada uno de los dos dedos para hacer una forma de garra con resorte. ¡Los tubos flexibles le dan a los dedos de la pinza una superficie suave y con agarre para que puedan sostener objetos sin resbalarse!" }
    },
    {
      icon: "Zap",
      pdfPage: 22,
      caption: { en: "Press both fingers onto the axle on the motor, so they can open and close!", es: "Presiona los dos dedos en el eje del motor, ¡para que puedan abrirse y cerrarse!" },
      parts: [],
      attach: [
        { x: 35, y: 45, en: "Left finger onto the axle", es: "Dedo izquierdo en el eje", detail: { en: "Press the left finger onto the left side of the axle at the top of the motor, following the arrow.", es: "Presiona el dedo izquierdo en el lado izquierdo del eje en la parte de arriba del motor, siguiendo la flecha." } },
        { x: 65, y: 45, en: "Right finger onto the axle", es: "Dedo derecho en el eje", detail: { en: "Press the right finger onto the right side of the axle so both fingers can open and close symmetrically.", es: "Presiona el dedo derecho en el lado derecho del eje para que ambos dedos puedan abrirse y cerrarse simétricamente." } }
      ],
      help: { en: "No new pieces! Press both finger assemblies onto the axle at the top of the motor, following the arrows. One finger on each side. When the motor turns, both fingers will open and close together, that is the grabbing action!", es: "¡Sin piezas nuevas! Presiona los dos ensamblajes de dedos en el eje en la parte de arriba del motor, siguiendo las flechas. Un dedo de cada lado. ¡Cuando el motor gire, ambos dedos se abrirán y cerrarán juntos, ¡esa es la acción de agarrar!" }
    },
    {
      icon: "Box",
      pdfPage: 23,
      caption: { en: "Add a tan pin and a black axle pin to the top of the purple connector to lock the mechanism.", es: "Agrega un pasador canela y un pasador de eje negro en la parte superior del conector morado para trabar el mecanismo." },
      parts: [
        { emoji: "🟤", count: 1, en: "Tan connector pin", es: "Pasador conector color canela" },
        { emoji: "⬛", count: 1, en: "Black axle pin", es: "Pasador de eje negro" }
      ],
      attach: [{ x: 50, y: 30, en: "Top of the purple connector block", es: "Parte superior del bloque conector morado", detail: { en: "Push the tan pin and the black axle pin into the top holes of the purple connector block to lock the finger mechanism in place.", es: "Empuja el pasador canela y el pasador de eje negro en los agujeros superiores del bloque conector morado para trabar el mecanismo de los dedos." } }],
      help: { en: "Add a tan connector pin and a black axle pin to the top of the purple connector block. These pins lock the finger mechanism firmly in place so the grabber stays together when it moves.", es: "Agrega un pasador canela y un pasador de eje negro en la parte superior del bloque conector morado. Estos pasadores traban firmemente el mecanismo de los dedos para que la pinza se mantenga unida cuando se mueve." }
    },
    {
      icon: "Box",
      pdfPage: 24,
      caption: { en: "Add one gray double connector on top of the purple connector to finish the grabber head!", es: "Agrega un conector doble gris encima del conector morado para terminar la cabeza de la pinza." },
      parts: [
        { emoji: "⬜", count: 1, en: "Gray double pin connector", es: "Conector doble gris" }
      ],
      attach: [{ x: 50, y: 30, en: "Top of the purple connector", es: "Parte de arriba del conector morado", detail: { en: "Snap one gray double connector on top of the purple connector block to complete the grabber head structure.", es: "Encaja un conector doble gris encima del bloque conector morado para completar la estructura de la cabeza de la pinza." } }],
      help: { en: "Snap the gray double connector on top of the purple connector block. This finishes the grabber head! The grabber is now fully assembled and ready to attach to the Hub.", es: "Encaja el conector doble gris encima del bloque conector morado. ¡Esto termina la cabeza de la pinza! La pinza ahora está completamente ensamblada y lista para unirse al Hub." }
    },
    {
      icon: "Sparkles",
      pdfPage: 25,
      caption: { en: "Attach the grabber to the Hub! Connect the motor to Port E and press the green button! 🦾🎉", es: "¡Coloca la pinza en el Hub! Conecta el motor al Puerto E y presiona el botón verde. 🦾🎉" },
      parts: [],
      attach: [
        { x: 50, y: 60, en: "Motor cable to Port E on the Hub", es: "Cable del motor al Puerto E del Hub", detail: { en: "Connect the motor cable to Port E on the Hub. Press the green button and watch the claw grab!", es: "Conecta el cable del motor al Puerto E del Hub. ¡Presiona el botón verde y mira cómo agarra la garra!" } }
      ],
      help: { en: "Attach the finished grabber to the Hub. Connect the motor cable to Port E on the Hub, and if you have a Distance Sensor, connect it to Port A. Press the green button and watch the claw grab! Great work, the Grabber is complete! 🦾", es: "Coloca la pinza terminada en el Hub. Conecta el cable del motor al Puerto E del Hub, y si tienes un Sensor de Distancia, conéctalo al Puerto A. ¡Presiona el botón verde y mira cómo agarra la garra! ¡Buen trabajo, la Pinza está completa! 🦾" }
    }
  ]
};