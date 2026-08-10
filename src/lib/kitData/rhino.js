export const rhinoKit = {
  id: "rhino",
  name: "LEGO Education SPIKE Prime",
  model: { en: "Rhino", es: "El Rinoceronte" },
  color: "#3B82F6",
  pdfUrl: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/bb6c06960_Rhino_compressed.pdf",
  category: "spike",
  steps: [
    {
      icon: "Settings",
      pdfPage: 4,
      caption: { en: "Insert 4 dual connector pegs into the side holes of the Hub — one peg per hole!", es: "Inserta 4 conectores dobles en los agujeros del costado del Hub, ¡uno por agujero!" },
      parts: [
        { emoji: "🟡", count: 1, en: "SPIKE Prime Hub", es: "Hub de SPIKE Prime" },
        { emoji: "⬛", count: 4, en: "Dual connector peg", es: "Conector doble" }
      ],
      attach: [{ x: 35, y: 55, en: "4 side holes on the Hub (speaker side)", es: "4 agujeros del costado del Hub (lado del altavoz)", detail: { en: "Find the side of the Hub with the built-in speaker and port markings. Push one dual connector peg firmly into each of the 4 peg holes until it clicks.", es: "Busca el lado del Hub con el altavoz integrado y las marcas de puertos. Empuja un conector doble firmemente en cada uno de los 4 agujeros hasta que haga clic." } }],
      help: { en: "Take the Hub and look for the side that has a round speaker grille and the port markings (A, B, C...). Find the 4 round peg holes along that side. Push one dual connector peg firmly into each hole until it clicks into place. The pegs stick out and will hold the next pieces.", es: "Toma el Hub y busca el lado que tiene la rejilla del altavoz redonda y las marcas de puertos (A, B, C...). Busca los 4 agujeros redondos a lo largo de ese lado. Empuja un conector doble firmemente en cada agujero hasta que haga clic. Los conectores sobresalen y sostendrán las próximas piezas." }
    },
    {
      icon: "Box",
      pdfPage: 5,
      caption: { en: "Rotate the assembly to see the top corner on the port side, then attach the angled connector piece onto the 2 pegs there!", es: "Gira el conjunto para ver la esquina superior del lado de puertos, luego coloca la pieza angulada en los 2 conectores." },
      parts: [
        { emoji: "⬜", count: 1, en: "Angled connector piece", es: "Pieza conectora angulada" }
      ],
      attach: [{ x: 70, y: 30, en: "Top corner of the Hub, port side", es: "Esquina superior del Hub, lado de puertos", detail: { en: "Rotate the whole assembly first so you are looking at the top corner of the Hub on the port side. Then press the angled connector piece onto the two pegs at that top corner.", es: "Primero gira todo el conjunto para ver la esquina superior del Hub en el lado de puertos. Luego presiona la pieza conectora angulada en los dos conectores de esa esquina." } }],
      help: { en: "First rotate the whole Hub assembly following the rotate icon so you are looking at the top corner of the Hub on the side where the ports are. Find the two pegs there from Step 1. Press the angled connector piece firmly onto those two pegs. It should click onto both pegs securely.", es: "Primero gira todo el ensamblaje del Hub siguiendo el ícono de rotación para ver la esquina superior del lado de los puertos. Busca los dos conectores allí del Paso 1. Presiona la pieza conectora angulada firmemente en esos dos conectores. Debe encajar con seguridad en los dos." }
    },
    {
      icon: "Circle",
      pdfPage: 6,
      caption: { en: "Attach the blue bracket onto the angled connector, then press the white ball into the socket on top!", es: "Coloca el soporte azul en el conector angulado, luego presiona la esfera blanca en el encaje de arriba." },
      parts: [
        { emoji: "🔵", count: 1, en: "Blue motor mount bracket", es: "Soporte de motor azul" },
        { emoji: "⚪", count: 1, en: "White sphere ball piece", es: "Pieza esférica blanca" }
      ],
      attach: [{ x: 70, y: 35, en: "Angled connector from the last step", es: "Conector angulado del paso anterior", detail: { en: "Attach the blue bracket piece onto the angled connector. Then press the white ball piece down into the round socket on top of the bracket until it clicks and can rotate freely.", es: "Coloca el soporte azul en el conector angulado. Luego presiona la esfera blanca dentro del encaje redondo en la parte superior del soporte hasta que haga clic y pueda girar libremente." } }],
      help: { en: "Take the blue bracket piece and press it onto the angled connector from the last step. Then take the white ball piece (it is round and smooth) and press it down into the round socket on the very top of the blue bracket until it clicks in. Give it a little wiggle — it should rotate freely in all directions like a ball joint. This is the Rhino's sensor mount!", es: "Toma el soporte azul y presiónalo en el conector angulado del paso anterior. Luego toma la esfera blanca (es redonda y suave) y presiónala en el encaje redondo en la parte superior del soporte azul hasta que haga clic. Dale un pequeño movimiento — debe poder girar libremente en todas las direcciones como una articulación de rótula. ¡Este es el soporte del sensor del Rinoceronte!" }
    },
    {
      icon: "Settings",
      pdfPage: 7,
      caption: { en: "Insert 6 more dual connector pegs into the open holes around the top and side edges of the assembly!", es: "Inserta 6 conectores dobles más en los agujeros abiertos alrededor de la parte superior y los bordes." },
      parts: [
        { emoji: "⬛", count: 6, en: "Dual connector peg", es: "Conector doble" }
      ],
      attach: [{ x: 50, y: 50, en: "Open peg holes around the top and sides", es: "Agujeros abiertos alrededor de la parte superior y los lados", detail: { en: "Push one dual connector peg firmly into each of the 6 open peg holes around the top and side edges of the assembly, as shown in the diagram.", es: "Empuja un conector doble firmemente en cada uno de los 6 agujeros abiertos alrededor de la parte superior y los bordes laterales del conjunto, como se muestra." } }],
      help: { en: "Look at the assembly and find the 6 empty peg holes around the top and side edges (not the ones already filled). Push one dual connector peg firmly into each empty hole. These 6 new pegs are the mounting points where the two motors will attach in the next steps.", es: "Mira el ensamblaje y encuentra los 6 agujeros vacíos alrededor de la parte superior y los bordes laterales (no los que ya están llenos). Empuja un conector doble firmemente en cada agujero vacío. Estos 6 nuevos conectores son los puntos de montaje para los dos motores." }
    },
    {
      icon: "Cpu",
      pdfPage: 8,
      caption: { en: "Attach the first motor onto the pegs next to the ball piece — align the dot mark, then plug in its cable!", es: "Coloca el primer motor en los conectores junto a la esfera, alinea el punto, luego conecta el cable." },
      parts: [
        { emoji: "⚙️", count: 1, en: "SPIKE Prime motor with cable", es: "Motor de SPIKE Prime con cable" }
      ],
      attach: [{ x: 45, y: 50, en: "Pegs next to the ball piece, dot mark aligned", es: "Conectores junto a la esfera, marca de punto alineada", detail: { en: "Press the motor onto the pegs next to the ball piece. Line up the small dot on the motor with the notch marking on the mount so it is oriented correctly. Plug the motor cable into a port on the Hub.", es: "Presiona el motor en los conectores junto a la pieza esférica. Alinea el punto pequeño del motor con la marca de muesca del soporte para que quede orientado correctamente. Conecta el cable al Hub." } }],
      help: { en: "Take the first SPIKE Prime motor (blue, with cable). Press it onto the pegs next to the ball piece. IMPORTANT: look for the small dot marking on the motor and the notch marking on the mount — they must line up so the motor is oriented correctly. The zoom circle in the diagram shows exactly how. Then plug the motor's flat cable into a port on the Hub.", es: "Toma el primer motor de SPIKE Prime (azul, con cable). Presiónalo en los conectores junto a la pieza esférica. IMPORTANTE: busca la pequeña marca de punto en el motor y la marca de muesca en el soporte, deben alinearse para que el motor quede orientado correctamente. El círculo de zoom en el diagrama muestra exactamente cómo. Luego conecta el cable plano del motor a un puerto del Hub." }
    },
    {
      icon: "Settings",
      pdfPage: 9,
      caption: { en: "Insert 2 more dual connector pegs into the remaining open holes next to the first motor!", es: "Inserta 2 conectores dobles más en los agujeros abiertos restantes junto al primer motor." },
      parts: [
        { emoji: "⬛", count: 2, en: "Dual connector peg", es: "Conector doble" }
      ],
      attach: [{ x: 50, y: 55, en: "Remaining open holes next to the first motor", es: "Agujeros abiertos restantes junto al primer motor", detail: { en: "Push the 2 remaining dual connector pegs firmly into the open holes right next to the first motor you just attached.", es: "Empuja los 2 conectores dobles restantes firmemente en los agujeros abiertos justo junto al primer motor que acabas de colocar." } }],
      help: { en: "After attaching the first motor, look for the remaining open peg holes right next to it. Push one dual connector peg into each of the 2 remaining open holes. These two new pegs are the mounting points for the second motor.", es: "Después de colocar el primer motor, busca los agujeros de conectores abiertos restantes justo junto a él. Empuja un conector doble en cada uno de los 2 agujeros abiertos restantes. Estos dos nuevos conectores son los puntos de montaje para el segundo motor." }
    },
    {
      icon: "Cpu",
      pdfPage: 10,
      caption: { en: "Rotate the assembly to see the mounting side, then attach the second motor onto the new pegs — align the dot-and-notch marks!", es: "Gira el conjunto para ver el lado de montaje, luego coloca el segundo motor en los nuevos conectores, alineando punto y muesca." },
      parts: [
        { emoji: "⚙️", count: 1, en: "SPIKE Prime motor with cable", es: "Motor de SPIKE Prime con cable" }
      ],
      attach: [{ x: 60, y: 50, en: "New pegs from the last step, dot-notch aligned", es: "Nuevos conectores del paso anterior, alineados", detail: { en: "Rotate the whole assembly first to see the mounting side clearly. Then press the second motor onto the new pegs, matching the dot-and-notch alignment marks as before. Plug its cable into the next available Hub port.", es: "Primero gira todo el conjunto para ver bien el lado de montaje. Luego presiona el segundo motor en los nuevos conectores, haciendo coincidir las marcas de punto y muesca como antes. Conecta su cable al siguiente puerto disponible del Hub." } }],
      help: { en: "First rotate the whole assembly following the rotate icon so you can see the mounting side clearly. Then attach the second motor exactly like the first: press it onto the two new pegs, making sure the dot on the motor aligns with the notch on the mount. Plug its flat cable into the next available port on the Hub.", es: "Primero gira todo el ensamblaje siguiendo el ícono de rotación para poder ver bien el lado de montaje. Luego coloca el segundo motor exactamente igual que el primero: presiónalo en los dos nuevos conectores, asegurándote de que el punto del motor se alinee con la muesca del soporte. Conecta su cable plano al siguiente puerto disponible del Hub." }
    },
    {
      icon: "Settings",
      pdfPage: 11,
      caption: { en: "Insert 2 dual connector pegs into the remaining open holes on the second motor!", es: "Inserta 2 conectores dobles en los agujeros abiertos restantes del segundo motor." },
      parts: [
        { emoji: "⬛", count: 2, en: "Dual connector peg", es: "Conector doble" }
      ],
      attach: [{ x: 55, y: 55, en: "Open holes on the second motor", es: "Agujeros abiertos del segundo motor", detail: { en: "Push the 2 dual connector pegs into the remaining open holes on the second motor.", es: "Empuja los 2 conectores dobles en los agujeros abiertos restantes del segundo motor." } }],
      help: { en: "Find the remaining open peg holes on the second motor and push one dual connector peg firmly into each. After this step all mounting holes should be filled and both motors should be solidly attached to the Hub.", es: "Busca los agujeros de conectores abiertos restantes en el segundo motor y empuja un conector doble firmemente en cada uno. Después de este paso todos los agujeros de montaje deben estar llenos y ambos motores deben estar bien sujetos al Hub." }
    },
    {
      icon: "Box",
      pdfPage: 12,
      caption: { en: "Start the sensor connector chain: take the small dark blue connector and attach the purple peg to one end!", es: "Empieza la cadena del sensor: toma el conector azul oscuro pequeño y coloca el conector morado en un extremo." },
      parts: [
        { emoji: "🔵", count: 1, en: "Small dark blue connector", es: "Conector azul oscuro pequeño" },
        { emoji: "🟣", count: 1, en: "Purple connector peg", es: "Conector morado" }
      ],
      attach: [{ x: 50, y: 55, en: "Flat on the table, separate sub-assembly", es: "Plana en la mesa, sub-ensamblaje aparte", detail: { en: "Build this away from the main model. Take the small dark blue connector and attach the purple connector peg to one end of it, forming a short two-piece connector chain.", es: "Arma esto aparte del modelo principal. Toma el conector azul oscuro pequeño y coloca el conector morado en uno de sus extremos, formando una pequeña cadena de dos piezas." } }],
      help: { en: "Start a small separate sub-assembly away from the main model. Take the small dark blue connector piece and attach the purple connector peg to one end of it. They click together to form a short two-piece chain. The next step adds the red and blue connectors to complete the chain.", es: "Empieza un pequeño sub-ensamblaje separado del modelo principal. Toma el conector azul oscuro pequeño y coloca el conector morado en uno de sus extremos. Hacen clic para formar una pequeña cadena de dos piezas. El próximo paso agrega los conectores rojo y azul para completar la cadena." }
    },
    {
      icon: "Zap",
      pdfPage: 13,
      caption: { en: "Join the red and blue connector pegs together end to end, then connect that pair to the purple piece from the last step!", es: "Une el conector rojo y azul extremo a extremo, luego conecta ese par a la pieza morada del paso anterior." },
      parts: [
        { emoji: "🔴", count: 1, en: "Red connector peg", es: "Conector rojo" },
        { emoji: "🔵", count: 1, en: "Blue connector peg", es: "Conector azul" }
      ],
      attach: [{ x: 50, y: 55, en: "Join red to blue end to end, then attach to the purple piece", es: "Une rojo al azul extremo a extremo, luego conéctalo a la pieza morada", detail: { en: "Join the red connector peg and the blue connector peg together end to end, then connect this red-blue pair to the purple piece from Step 9, so all three colored connectors are joined in a row.", es: "Une el conector rojo y el azul extremo a extremo, luego conecta este par a la pieza morada del Paso 9, para que los tres conectores de colores queden unidos en fila." } }],
      help: { en: "Take the red connector peg and the blue connector peg. Join them together end to end — they click together. Then connect this red-and-blue pair onto the purple piece from the previous step so all three are in a row. You now have a three-colored connector chain (dark blue, purple, red, blue) that plugs the sensor into the Hub.", es: "Toma el conector rojo y el azul. Únelos extremo a extremo — hacen clic juntos. Luego conecta este par rojo-azul a la pieza morada del paso anterior para que los tres queden en fila. Ahora tienes una cadena de conectores de colores que conecta el sensor al Hub." }
    },
    {
      icon: "Zap",
      pdfPage: 14,
      caption: { en: "Plug the three-colored connector chain into the port on the side of the Hub, following the arrow!", es: "Conecta la cadena de tres conectores al puerto del costado del Hub, siguiendo la flecha." },
      parts: [],
      attach: [{ x: 25, y: 50, en: "Port on the side of the Hub, following the arrow", es: "Puerto del costado del Hub, siguiendo la flecha", detail: { en: "Plug the finished three-colored connector chain (red, blue, and purple) into the port on the side of the Hub next to the motor assembly, as shown by the arrow. No new pieces are used.", es: "Enchufla la cadena de conectores terminada (rojo, azul y morado) en el puerto del costado del Hub junto al ensamblaje de motores, como indica la flecha. No se usan piezas nuevas." } }],
      help: { en: "No new pieces! Take the three-colored connector chain you just built. Following the arrow in the diagram, plug it into the port on the side of the Hub next to the motor assembly. This connector chain carries the sensor signal into the Hub.", es: "¡Sin piezas nuevas! Toma la cadena de conectores que acabas de armar. Siguiendo la flecha del diagrama, enchúfala en el puerto del costado del Hub junto al ensamblaje de motores. Esta cadena transmite la señal del sensor al Hub." }
    },
    {
      icon: "Circle",
      pdfPage: 15,
      caption: { en: "Push one large blue wheel firmly onto the drive shaft of each motor, 2 wheels total!", es: "Empuja una rueda azul grande firmemente en el eje de cada motor, ¡2 ruedas en total!" },
      parts: [
        { emoji: "🔵", count: 2, en: "Large blue wheel", es: "Rueda azul grande" }
      ],
      attach: [
        { x: 35, y: 55, en: "Drive shaft of the left motor", es: "Eje del motor izquierdo", detail: { en: "Press one blue wheel firmly onto the drive shaft of the left motor until it is fully seated.", es: "Presiona una rueda azul firmemente en el eje del motor izquierdo hasta que quede completamente encajada." } },
        { x: 65, y: 55, en: "Drive shaft of the right motor", es: "Eje del motor derecho", detail: { en: "Press the second blue wheel firmly onto the drive shaft of the right motor until it is fully seated.", es: "Presiona la segunda rueda azul firmemente en el eje del motor derecho hasta que quede completamente encajada." } }
      ],
      help: { en: "Take the 2 large blue wheels. Push one firmly onto the drive shaft sticking out from each motor. Press hard until each wheel is fully seated and does not wobble. These are the Rhino's main drive wheels!", es: "Toma las 2 ruedas azules grandes. Empuja una firmemente en el eje que sobresale de cada motor. Presiona fuerte hasta que cada rueda quede completamente encajada y no tambalee. ¡Estas son las ruedas principales del Rinoceronte!" }
    },
    {
      icon: "Minus",
      pdfPage: 16,
      caption: { en: "Set out 2 short yellow axles (size 3), one will go into each wheel in the next steps!", es: "Prepara 2 ejes amarillos cortos (tamaño 3), ¡uno irá en cada rueda en los próximos pasos!" },
      parts: [
        { emoji: "🟡", count: 2, en: "Yellow axle, size 3 (short)", es: "Eje amarillo, tamaño 3 (corto)" }
      ],
      attach: [{ x: 50, y: 55, en: "Flat on the table, separate sub-assembly", es: "Planos en la mesa, sub-ensamblaje aparte", detail: { en: "Set the 2 short yellow axles aside. One will be inserted into each wheel after the white connector caps are attached in the next step.", es: "Pon los 2 ejes amarillos cortos aparte. Uno se insertará en cada rueda después de colocar las tapas blancas en el próximo paso." } }],
      help: { en: "Find the 2 short yellow axles (they are labeled size 3 in the diagram — short, with a cross-shaped end). Set them aside on the table. The next step adds a white connector cap to each, and then they both get pushed into the center of the wheels.", es: "Busca los 2 ejes amarillos cortos (marcados como tamaño 3 en el diagrama, cortos, con extremo en forma de cruz). Ponlos aparte en la mesa. El próximo paso agrega una tapa conectora blanca a cada uno y luego ambos se insertan en el centro de las ruedas." }
    },
    {
      icon: "Box",
      pdfPage: 17,
      caption: { en: "Push one white axle-connector cap onto each yellow axle — cross end fully inserted!", es: "Empuja una tapa conectora blanca en cada eje amarillo, ¡con el extremo de cruz completamente adentro!" },
      parts: [
        { emoji: "⬜", count: 2, en: "White axle-connector cap (cross end)", es: "Tapa conectora blanca (extremo de cruz)" }
      ],
      attach: [
        { x: 35, y: 50, en: "Cross end of the left yellow axle", es: "Extremo de cruz del eje amarillo izquierdo", detail: { en: "Push one white connector cap onto the cross-shaped end of the left yellow axle until fully inserted.", es: "Empuja una tapa conectora blanca en el extremo con forma de cruz del eje amarillo izquierdo hasta que quede completamente insertada." } },
        { x: 65, y: 50, en: "Cross end of the right yellow axle", es: "Extremo de cruz del eje amarillo derecho", detail: { en: "Push the second white connector cap onto the cross-shaped end of the right yellow axle.", es: "Empuja la segunda tapa conectora blanca en el extremo con forma de cruz del eje amarillo derecho." } }
      ],
      help: { en: "Take the 2 white connector caps. Each one has a cross-shaped hole inside. Push one onto the cross-shaped end of each yellow axle, pressing firmly until the cross end is fully inside the white cap. Now each yellow axle has a white cone-shaped cap on one end — these axle-and-cap pairs are ready to go into the wheels.", es: "Toma las 2 tapas conectoras blancas. Cada una tiene un agujero en forma de cruz adentro. Empuja una en el extremo con forma de cruz de cada eje amarillo, presionando firmemente hasta que el extremo de cruz quede completamente dentro de la tapa blanca. Ahora cada eje amarillo tiene una tapa blanca cónica en un extremo, listos para ir en las ruedas." }
    },
    {
      icon: "Zap",
      pdfPage: 18,
      caption: { en: "Insert one axle-and-cap assembly into the center hole of each wheel, pushing firmly until fully seated!", es: "Inserta un conjunto de eje y tapa en el agujero central de cada rueda, empujando firmemente hasta encajar." },
      parts: [],
      attach: [
        { x: 35, y: 60, en: "Center hole of the left blue wheel", es: "Agujero central de la rueda azul izquierda", detail: { en: "Push the yellow axle (white cap first) into the center hole of the left wheel firmly, following the arrow.", es: "Empuja el eje amarillo (tapa blanca primero) en el agujero central de la rueda izquierda firmemente, siguiendo la flecha." } },
        { x: 65, y: 45, en: "Center hole of the right blue wheel", es: "Agujero central de la rueda azul derecha", detail: { en: "Push the second axle-and-cap assembly into the center hole of the right wheel until fully seated.", es: "Empuja el segundo conjunto de eje y tapa en el agujero central de la rueda derecha hasta que quede completamente encajado." } }
      ],
      help: { en: "No new pieces! Take the two axle-and-cap assemblies from the last step. Push each one white-cap-first into the center hole of each blue wheel, pressing firmly until it is fully seated and does not wobble. The arrows in the diagram show exactly where they go.", es: "¡Sin piezas nuevas! Toma los dos conjuntos de eje y tapa del paso anterior. Empuja cada uno con la tapa blanca primero en el agujero central de cada rueda azul, presionando firmemente hasta que quede completamente encajado. Las flechas del diagrama muestran exactamente dónde van." }
    },
    {
      icon: "Sparkles",
      pdfPage: 19,
      caption: { en: "Your Rhino is complete! Rotate it to view from the top, then spin both wheels to check they turn freely. 🦏🎉", es: "¡Tu Rinoceronte está completo! Gíralo para verlo desde arriba, luego gira las ruedas para verificar que giran libremente. 🦏🎉" },
      parts: [],
      attach: [{ x: 50, y: 45, en: "Rotate model to top/front view, spin both wheels", es: "Gira el modelo a vista de arriba/frente, gira las dos ruedas", detail: { en: "Rotate the completed model first to view it from the top and front. Check that both wheels spin freely, both motor cables and the three-colored connector are plugged into the Hub, and all pegs and axles are fully seated.", es: "Primero gira el modelo terminado para verlo desde arriba y al frente. Verifica que ambas ruedas giren libremente, que los cables de los motores y el conector de tres colores estén conectados al Hub, y que todos los conectores y ejes estén completamente encajados." } }],
      help: { en: "No new pieces! Rotate the completed model following the rotate icon to view it from the top and front. Give each blue wheel a spin by hand to make sure it rotates freely. Check that both motor cables are plugged into the Hub, the three-colored connector chain is also plugged in, and all connector pegs and axles are fully seated. Your Rhino rover is ready to roll!", es: "¡Sin piezas nuevas! Gira el modelo terminado siguiendo el ícono de rotación para verlo desde arriba y al frente. Dale a cada rueda azul un giro con la mano para asegurarte de que gire libremente. Verifica que ambos cables de motor estén conectados al Hub, que la cadena de conectores de tres colores también esté conectada, y que todos los conectores y ejes estén completamente encajados. ¡Tu rover Rinoceronte está listo para rodar!" }
    }
  ]
};