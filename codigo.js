function inicio()
{

    var boton = document.getElementById("boton");

    boton.addEventListener('click', function() {


        document.getElementById('TextoFortalezas').innerHTML='Fortalezas';
        document.getElementById('TextoDebilidades').innerHTML='Debilidades';
        var fortalezas1 = 0
        var fortalezas2 = 0
        var fortalezas3 = 0
        var fortalezas4 = 0

        var debilidades1 = 0
        var debilidades2 = 0
        var debilidades3 = 0
        var debilidades4 = 0
        ////////////////////////////////////////////////////////1.1
        if (animado.checked)
        {
            fortalezas1 += 1;
        }
        else if (aventurero.checked)
        {
            fortalezas2 += 1;
        }
        else if (analitico.checked)
        {
            fortalezas3 += 1;
        }
        else if (adaptable.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////1.2

        if (jugueton.checked)
        {
            fortalezas1 += 1;
        }
        else if (persuasivo.checked)
        {
            fortalezas2 += 1;
        }
        else if (persistente.checked)
        {
            fortalezas3 += 1;
        }
        else if (pasivo.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////1.3

        if (amigable.checked)
        {
            fortalezas1 += 1;
        }
        else if (resuelto.checked)
        {
            fortalezas2 += 1;
        }
        else if (sacrificado.checked)
        {
            fortalezas3 += 1;
        }
        else if (sumiso.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////1.4
        if (convincente.checked)
        {
            fortalezas1 += 1;
        }
        else if (competitivo.checked)
        {
            fortalezas2 += 1;
        }
        else if (considerado.checked)
        {
            fortalezas3 += 1;
        }
        else if (controlado.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////1.5

        if (alentador.checked)
        {
            fortalezas1 += 1;
        }
        else if (recursivo.checked)
        {
            fortalezas2 += 1;
        }
        else if (respetuoso.checked)
        {
            fortalezas3 += 1;
        }
        else if (reservado.checked)
        {
            fortalezas4 += 1;
        }
        /////////////////////////////////////////////////////////////////////////////2////////////////////////////////////////////////////////////////////////////
        if (sensato.checked)
        {
            fortalezas1 += 1;
        }
        else if (confiado.checked)
        {
            fortalezas2 += 1;
        }
        else if (sensible.checked)
        {
            fortalezas3 += 1;
        }
        else if (satisfecho.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////2.2

        if (promotor.checked)
        {
            fortalezas1 += 1;
        }
        else if (positivo.checked)
        {
            fortalezas2 += 1;
        }
        else if (planificador.checked)
        {
            fortalezas3 += 1;
        }
        else if (paciente.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////2.3

        if (espontaneo.checked)
        {
            fortalezas1 += 1;
        }
        else if (seguro.checked)
        {
            fortalezas2 += 1;
        }
        else if (programador.checked)
        {
            fortalezas3 += 1;
        }
        else if (prudente.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////2.4

        if (optimista.checked)
        {
            fortalezas1 += 1;
        }
        else if (franco.checked)
        {
            fortalezas2 += 1;
        }
        else if (ordenado.checked)
        {
            fortalezas3 += 1;
        }
        else if (servicial.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////2.5

        if (divertido.checked)
        {
            fortalezas1 += 1;
        }
        else if (fuerte.checked)
        {
            fortalezas2 += 1;
        }
        else if (fiel.checked)
        {
            fortalezas3 += 1;
        }
        else if (amistoso.checked)
        {
            fortalezas4 += 1;
        }
//////////////////////////////////////////////////////////////////////////////////3///////////////////////////////////////////////////////////////////////////
        
        if (encantador.checked)
        {
            fortalezas1 += 1;
        }
        else if (atrevido.checked)
        {
            fortalezas2 += 1;
        }
        else if (detallista.checked)
        {
            fortalezas3 += 1;
        }
        else if (diplomatico.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////3.2

        if (alegre.checked)
        {
            fortalezas1 += 1;
        }
        else if (confidente.checked)
        {
            fortalezas2 += 1;
        }
        else if (educado.checked)
        {
            fortalezas3 += 1;
        }
        else if (consistente.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////3.3

        if (inspirador.checked)
        {
            fortalezas1 += 1;
        }
        else if (independiente.checked)
        {
            fortalezas2 += 1;
        }
        else if (idealista.checked)
        {
            fortalezas3 += 1;
        }
        else if (inofensivo.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////3.4

        if (demostrativo.checked)
        {
            fortalezas1 += 1;
        }
        else if (decidido.checked)
        {
            fortalezas2 += 1;
        }
        else if (jocoso.checked)
        {
            fortalezas3 += 1;
        }
        else if (meditador.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////3.5
        if (sociable.checked)
        {
            fortalezas1 += 1;
        }
        else if (mediador.checked)
        {
            fortalezas2 += 1;
        }
        else if (musical.checked)
        {
            fortalezas3 += 1;
        }
        else if (activo.checked)
        {
            fortalezas4 += 1;
        }

        //////////////////////////////////////////////////////////////////////////////////4///////////////////////////////////////////////////////////////////////////
        
        if (charlador.checked)
        {
            fortalezas1 += 1;
        }
        else if (tenaz.checked)
        {
            fortalezas2 += 1;
        }
        else if (considerado.checked)
        {
            fortalezas3 += 1;
        }
        else if (tolerante.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////4.2

        if (alegre2.checked)
        {
            fortalezas1 += 1;
        }
        else if (lider.checked)
        {
            fortalezas2 += 1;
        }
        else if (leal.checked)
        {
            fortalezas3 += 1;
        }
        else if (oyente.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////4.3

        if (adorable.checked)
        {
            fortalezas1 += 1;
        }
        else if (jefe.checked)
        {
            fortalezas2 += 1;
        }
        else if (planeador.checked)
        {
            fortalezas3 += 1;
        }
        else if (contento.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////4.4

        if (popular.checked)
        {
            fortalezas1 += 1;
        }
        else if (productivo.checked)
        {
            fortalezas2 += 1;
        }
        else if (perfeccionista.checked)
        {
            fortalezas3 += 1;
        }
        else if (placentero.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////4.5
        if (campante.checked)
        {
            fortalezas1 += 1;
        }
        else if (atrevido2.checked)
        {
            fortalezas2 += 1;
        }
        else if (comportado.checked)
        {
            fortalezas3 += 1;
        }
        else if (balanceado.checked)
        {
            fortalezas4 += 1;
        }

//////////////////////////////////////////////////////////////////////////////////////DEBILIDADES////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////DEBILIDADES////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////DEBILIDADES////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////1.1
        if (arrogante.checked)
        {
            debilidades1 += 1;
        }
        else if (mandon.checked)
        {
            debilidades2 += 1;
        }
        else if (confuso.checked)
        {
            debilidades3 += 1;
        }
        else if (timido.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////1.2

        if (indisciplinado.checked)
        {
            debilidades1 += 1;
        }
        else if (compasion.checked)
        {
            debilidades2 += 1;
        }
        else if (entusiasmo.checked)
        {
            debilidades3 += 1;
        }
        else if (acusador.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////1.3

        if (rebelde.checked)
        {
            debilidades1 += 1;
        }
        else if (resentido.checked)
        {
            debilidades2 += 1;
        }
        else if (resistente.checked)
        {
            debilidades3 += 1;
        }
        else if (reservado2.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////1.4
        if (olvidadizo.checked)
        {
            debilidades1 += 1;
        }
        else if (franco2.checked)
        {
            debilidades2 += 1;
        }
        else if (fastidioso.checked)
        {
            debilidades3 += 1;
        }
        else if (temeroso.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////1.5

        if (interrumpe.checked)
        {
            debilidades1 += 1;
        }
        else if (impaciente.checked)
        {
            debilidades2 += 1;
        }
        else if (inseguro.checked)
        {
            debilidades3 += 1;
        }
        else if (indeciso.checked)
        {
            debilidades4 += 1;
        }
        /////////////////////////////////////////////////////////////////////////////2////////////////////////////////////////////////////////////////////////////
        if (impredecible.checked)
        {
            debilidades1 += 1;
        }
        else if (afecto.checked)
        {
            debilidades2 += 1;
        }
        else if (restringido.checked)
        {
            debilidades3 += 1;
        }
        else if (no_popular.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////2.2

        if (arbitrario.checked)
        {
            debilidades1 += 1;
        }
        else if (obstinado.checked)
        {
            debilidades2 += 1;
        }
        else if (contentar.checked)
        {
            debilidades3 += 1;
        }
        else if (vacilante.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////2.3

        if (permisivo.checked)
        {
            debilidades1 += 1;
        }
        else if (orgulloso.checked)
        {
            debilidades2 += 1;
        }
        else if (pesimista.checked)
        {
            debilidades3 += 1;
        }
        else if (simple.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////2.4

        if (enojar.checked)
        {
            debilidades1 += 1;
        }
        else if (argumentador.checked)
        {
            debilidades2 += 1;
        }
        else if (metas.checked)
        {
            debilidades3 += 1;
        }
        else if (distanciado.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////2.5

        if (ingenuo.checked)
        {
            debilidades1 += 1;
        }
        else if (nervioso.checked)
        {
            debilidades2 += 1;
        }
        else if (indiferente.checked)
        {
            debilidades3 += 1;
        }
        else if (negativo.checked)
        {
            debilidades4 += 1;
        }
//////////////////////////////////////////////////////////////////////////////////3///////////////////////////////////////////////////////////////////////////
        
        if (manipulador.checked)
        {
            debilidades1 += 1;
        }
        else if (aatrabajo.checked)
        {
            debilidades2 += 1;
        }
        else if (retraido.checked)
        {
            debilidades3 += 1;
        }
        else if (preocupado.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////3.2

        if (hablador.checked)
        {
            debilidades1 += 1;
        }
        else if (indiscreto.checked)
        {
            debilidades2 += 1;
        }
        else if (sensible2.checked)
        {
            debilidades3 += 1;
        }
        else if (timido2.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////3.3

        if (dudoso.checked)
        {
            debilidades1 += 1;
        }
        else if (desorganizado.checked)
        {
            debilidades2 += 1;
        }
        else if (dominante.checked)
        {
            debilidades3 += 1;
        }
        else if (deprimido.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////3.4

        if (inconsistente.checked)
        {
            debilidades1 += 1;
        }
        else if (intolerante.checked)
        {
            debilidades2 += 1;
        }
        else if (introvertido.checked)
        {
            debilidades3 += 1;
        }
        else if (indiferente2.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////3.5
        if (desordenado.checked)
        {
            debilidades1 += 1;
        }
        else if (manipulador2.checked)
        {
            debilidades2 += 1;
        }
        else if (temperamental.checked)
        {
            debilidades3 += 1;
        }
        else if (quejumbroso.checked)
        {
            debilidades4 += 1;
        }

        //////////////////////////////////////////////////////////////////////////////////4///////////////////////////////////////////////////////////////////////////
        
        if (exhibicionista.checked)
        {
            debilidades1 += 1;
        }
        else if (terco.checked)
        {
            debilidades2 += 1;
        }
        else if (esceptico.checked)
        {
            debilidades3 += 1;
        }
        else if (lento.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////4.2

        if (ostentoso.checked)
        {
            fortalezas1 += 1;
        }
        else if (enseñoreador.checked)
        {
            fortalezas2 += 1;
        }
        else if (solitario.checked)
        {
            fortalezas3 += 1;
        }
        else if (perezoso.checked)
        {
            fortalezas4 += 1;
        }
        //////////////////////////////////////////////////////////4.3

        if (desmemoriado.checked)
        {
            debilidades1 += 1;
        }
        else if (languido.checked)
        {
            debilidades2 += 1;
        }
        else if (sospechoso.checked)
        {
            debilidades3 += 1;
        }
        else if (genio.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////4.4

        if (inquieto.checked)
        {
            debilidades1 += 1;
        }
        else if (imprudente.checked)
        {
            debilidades2 += 1;
        }
        else if (vengativo.checked)
        {
            debilidades3 += 1;
        }
        else if (renuente.checked)
        {
            debilidades4 += 1;
        }
        //////////////////////////////////////////////////////////4.5
        if (variable.checked)
        {
            debilidades1 += 1;
        }
        else if (astuto.checked)
        {
            debilidades2 += 1;
        }
        else if (criticon.checked)
        {
            debilidades3 += 1;
        }
        else if (transigente.checked)
        {
            debilidades4 += 1;
        }

        ////////////////////////////////////////////////////////////////////////////RESULTADOS//////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////RESULTADOS//////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////RESULTADOS//////////////////////////////////////////////////////////////

        if (fortalezas1 + fortalezas2 + fortalezas3 + fortalezas4 + debilidades1 + debilidades2 + debilidades3 + debilidades4 == 40)
        {
            if (fortalezas1+debilidades1 > fortalezas2+debilidades2 && fortalezas1+debilidades1 > fortalezas3+debilidades3 && fortalezas1+debilidades1 > fortalezas4+debilidades4)
            {
                document.getElementById('TituloFortalezas').innerHTML='Sanguíneo-popular';
                document.getElementById('Fortalezasjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Personalidad atractiva, charlador, cuentista, la vida de la fiesta, buen sentido del humor, memoria para los colores, escuchado con agrado, emocional y demostrativo, entusiasta y expresivo, alegre, curioso, bueno en un escenario, inocente, vive en el presente, disposición cambiable, sinceridad de corazon, siempre es un niño</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Voluntario para el trabajo, piensa en nuevas actividades, se ve bien a primera vista, creativo y pintoresco, tiene energía y entusiasmo, empieza rápidamente, inspira a otros a unirse, anima a otros a trabajar</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Hace amigos fácilmente, ama a las personas, busca la aprobación, parece emocionante, es envidiado por otros, no es rencoroso, se disculpa rápidamente, evita el aburrimiento, gusta de actividades espontáneas</p></td></tr></table>';
                document.getElementById('TituloDebilidades').innerHTML='Sanguíneo-popular';
                document.getElementById('Debilidadesjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Parlachín compulsivo, exagerado, vive en lo trivial, no recuerda nombres, espanta a los demás, demasiado feliz para algunos, energía interminablem egoista, grita y se queja, inocente, tiene voz fuerte, y se ríe, controlado por las circustancias, se enoja facilmente, a algunos les parece falso, nunca crece</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Prefiere hablar, se olvida de sus obligaciones, no persiste, la confianza se le acaba rápido, indisciplinado, sus prioridades están fuera de ordén, se distrae fácilmente, pierde el tiempo hablando</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Detesta estar a solas, necesita ser la figura central, ser popular, busca la alabanza de los demás, domina las conversaciones, interrumpe y no escucha, responde por los demás, variable y olvidadizo, pone excusas, repite las mismas historias</p></td></tr></table>';            
            }
            if (fortalezas2+debilidades2 > fortalezas1+debilidades1 && fortalezas2+debilidades2 > fortalezas3+debilidades3 && fortalezas2+debilidades2 > fortalezas4+debilidades4)
            {
                document.getElementById('TituloFortalezas').innerHTML='Colérico-fuerte';
                document.getElementById('Fortalezasjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Ha nacido líder, dinámico y activo, necesidad compulsiva de cambios, tiene que corregir lo equivocado, voluntad fuerte y decisivo, sin emociones, no se desanima fácilmente, independiente y autosuficiente, irradia confianza, puede dirigir cualquier cosa</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Orientado a las metas, ve el panorama completo, organiza bien, busca soluciones prácticas, rápido para la accion, delega el trabajo, insiste en la productividad, llega a la meta, estimula la actividad, lucha ante la oposición</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Poca necesidad de amigos, trabajará en actividad de grupos, guía y organiza, generalmente tiene la razón, sobresale en las emergencias</p></td></tr></table>';
                document.getElementById('TituloDebilidades').innerHTML='Colérico-fuerte';
                document.getElementById('Debilidadesjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Mandón, impaciente, se enoja rápido, demasiado irrespetuoso, le gusta la controversia, no se da por vencido si pierde, es demásiado fuerte, inflexible, no le gusta alabar a los demás, no gusta de lágrimas ni emociones, no simpatiza con los demás</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Poca tolerancia con los errores, no analiza los detalles, le molesta lo trivial, toma desiciones imprudentes, rudo sin tacto, gusta manipular a los demás, hace demandas, el fin justifica los medios, el trabajo puede ser su Dios, demanda lealtad en sus rangos</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Tiende a utilizar a las personas, dominante, decide por otros, sabe todo, puede hacer todo de la mejor manera, independiente, posesivo de los amigos y la pareja, no puede decir "lo siento", puede tener la razon pero no es popular</p></td></tr></table>';
            }
            if (fortalezas3+debilidades3 > fortalezas1+debilidades1 && fortalezas3+debilidades3 > fortalezas2+debilidades2 && fortalezas3+debilidades3 > fortalezas4+debilidades4)
            {
                document.getElementById('TituloFortalezas').innerHTML='Melancólico-Perfeccionista';
                document.getElementById('Fortalezasjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Profundo y pensador, analítico, serio, con propósito, tendencia a ser un genio, talentoso y creativo, artista o musico, filosófico y poeta, aprecia la belleza, sensible a los demás, sacrificado, meticuloso, idealista</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Orientado a los horarios, perfeccionista, normas muy altas, metículoso, persistente, logra lo que quiere, organizado, pulcro, económico, ve los problemas, da soluciones creativas, necesita terminar lo que empieza, gusta de gráficas, numeros y listas</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Hace amigos con cautela, está contento si queda atrás de los demás, evita llamar la atención, fiel y consagrado, resuelve problemas a otros, tiene intrés en las personas, llega a llorar por compasión, busca la pareja ideal</p></td></tr></table>';
                document.getElementById('TituloDebilidades').innerHTML='Melancólico-Perfeccionista';
                document.getElementById('Debilidadesjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Recuerda las cosas negativas, caprichoso y deprimido, le gusta ser lastimado, de humildad falsa, vive en otro mundo, tiene una imagen pobre de sí mismo, escucha lo que quiere oir, egoísta, demasiado introspectivo, tiene sentimientos de culpa, complejo de persecucion, tiende a ser hipocondriaco</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>No está orientado hacia las personas, se deprime con las imperfecciones, escoge trabajos difíciles, vacila al empezar lo nuevo, pasa mucho tiempo en planes, prefiere el análisis al trabajo, de baja autoestima, difícil de complacer, de normas muy altas, necesita apoyo</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Vive a través de los demás socialmente inseguro, retraído, crítico de los demás, no es afectuoso, no gusta de los que se oponen a él, sospecha de las personas, antagonista y vengativo, no perdona, contradictorio, y escéptico cuando se le alaba</p></td></tr></table>';
            }
            if (fortalezas4+debilidades4 > fortalezas1+debilidades1 && fortalezas4+debilidades4 > fortalezas2+debilidades2 && fortalezas4+debilidades4 > fortalezas3+debilidades3)
            {
                document.getElementById('TituloFortalezas').innerHTML='Flemático-pasivo';
                document.getElementById('Fortalezasjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>Personalidad pobre, fácil de llevar y relajado, calmado, tranquilo y recogido, paciente, bien balanceado, de vida consistente, callado pero inteligente, simpático y amable, no muestra sus emociones, se reconcilia felizmente con la vida, es persona que sirve para todo</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>Competente y persistente, pasivo y casi de acuerdo con todo, habilidades administrativas, mediador de problemas, evita los conflictos, bueno bajo presión, encuentra la manera fácil de funcionar</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Fácil de llevar con él, agradable, se disfruta con él, inofensivo, buen oyente, tiene un seco sentido del humor, le gusta observar a las personas, tiene muchos amigos y se interesa en los demás</p></td></tr></table>';
                document.getElementById('TituloDebilidades').innerHTML='Flemático-pasivo';
                document.getElementById('Debilidadesjs').innerHTML='<table class="TablaInternaFortalezas"><tr><td class="Emociones">Emociones</td></tr><tr><td><p>No es entusiasta, temeroso y preocupado, evita la responsabilidad, tiene una tranquila voluntad de acero, egoísta, demasiado tímido, y reticente, se compromete demasiado, se justifica a sí mismo</p></td></tr><tr><td class="Trabajo">Trabajo</td></tr><tr><td><p>No está orientado a tener metas, le falta motivación propia, es difícil lograr que se ponga en movimiento, resiente el ser empujado, perezoso y descuidado, desanima a los demás, prefiere ser espectador</p></td></tr><tr><td class="Amistades">Amistades</td></tr><tr><td><p>Apaga el entusiasmo, no gusta de participar, no es emocionante, indiferente a los planes, juzga a los demás, sarcástico y bromista, se resiste al cambio</p></td></tr></table>';
            }

        }
        else
        {
            alert("Asegurate de haber seleccionado una cualidad por cada fila");
        }
        
        
    });
    

    var animado = document.querySelector("input[name=Animado]");
    var aventurero = document.querySelector("input[name=Aventurero]");
    var analitico = document.querySelector("input[name=Analitico]");
    var adaptable = document.querySelector("input[name=Adaptable]");

    aventurero.addEventListener('change', function() {
        if (this.checked) {
            animado.checked = false
            analitico.checked = false
            adaptable.checked = false

        }     
    });

    adaptable.addEventListener('change', function() {
        if (this.checked) {
            aventurero.checked = false
            analitico.checked = false
            animado.checked = false
        }     
    });

    animado.addEventListener('change', function() {
        if (this.checked) {
            aventurero.checked = false
            analitico.checked = false
            adaptable.checked = false
        }     
    });
    
    
    analitico.addEventListener('change', function() {
        if (this.checked) {
            aventurero.checked = false
            animado.checked = false
            adaptable.checked = false
        }     
    });
    

    var persistente = document.querySelector("input[name=Persistente]");
    var jugueton = document.querySelector("input[name=Jugueton]");
    var persuasivo = document.querySelector("input[name=Persuasivo]");
    var pasivo = document.querySelector("input[name=Pasivo]");

    persistente.addEventListener('change', function() {
        if (this.checked) {
            jugueton.checked = false
            persuasivo.checked = false
            pasivo.checked = false
        }     
    });
    jugueton.addEventListener('change', function() {
        if (this.checked) {
            persistente.checked = false
            persuasivo.checked = false
            pasivo.checked = false
        }     
    });
    persuasivo.addEventListener('change', function() {
        if (this.checked) {
            jugueton.checked = false
            persistente.checked = false
            pasivo.checked = false
        }     
    });
    pasivo.addEventListener('change', function() {
        if (this.checked) {
            jugueton.checked = false
            persuasivo.checked = false
            persistente.checked = false
        }     
    });

    var sumiso = document.querySelector("input[name=Sumiso]");
    var sacrificado = document.querySelector("input[name=Sacrificado]");
    var amigable = document.querySelector("input[name=Amigable]");
    var resuelto = document.querySelector("input[name=Resuelto]");

    sumiso.addEventListener('change', function() {
        if (this.checked) {
            sacrificado.checked = false
            amigable.checked = false
            resuelto.checked = false
        }     
    });
    sacrificado.addEventListener('change', function() {
        if (this.checked) {
            sumiso.checked = false
            amigable.checked = false
            resuelto.checked = false
        }     
    });
    amigable.addEventListener('change', function() {
        if (this.checked) {
            sumiso.checked = false
            sacrificado.checked = false
            resuelto.checked = false
        }     
    });
    resuelto.addEventListener('change', function() {
        if (this.checked) {
            sumiso.checked = false
            sacrificado.checked = false
            amigable.checked = false
        }     
    });

    var considerado = document.querySelector("input[name=Considerado]");
    var controlado = document.querySelector("input[name=Controlado]");
    var competitivo = document.querySelector("input[name=Competitivo]");
    var convincente = document.querySelector("input[name=Convincente]");

    considerado.addEventListener('change', function() {
        if (this.checked) {
            controlado.checked = false
            competitivo.checked = false
            convincente.checked = false
        }     
    });
    controlado.addEventListener('change', function() {
        if (this.checked) {
            considerado.checked = false
            competitivo.checked = false
            convincente.checked = false
        }     
    });
    competitivo.addEventListener('change', function() {
        if (this.checked) {
            controlado.checked = false
            considerado.checked = false
            convincente.checked = false
        }     
    });
    convincente.addEventListener('change', function() {
        if (this.checked) {
            controlado.checked = false
            competitivo.checked = false
            considerado.checked = false
        }     
    });

    var alentador = document.querySelector("input[name=Alentador]");
    var reservado = document.querySelector("input[name=Reservado]");
    var respetuoso = document.querySelector("input[name=Respetuoso]");
    var recursivo = document.querySelector("input[name=Recursivo]");

    alentador.addEventListener('change', function() {
        if (this.checked) {
            reservado.checked = false
            respetuoso.checked = false
            recursivo.checked = false
        }     
    });
    reservado.addEventListener('change', function() {
        if (this.checked) {
            alentador.checked = false
            respetuoso.checked = false
            recursivo.checked = false
        }     
    });
    respetuoso.addEventListener('change', function() {
        if (this.checked) {
            reservado.checked = false
            alentador.checked = false
            recursivo.checked = false
        }     
    });
    recursivo.addEventListener('change', function() {
        if (this.checked) {
            reservado.checked = false
            respetuoso.checked = false
            alentador.checked = false
        }     
    });

    var satisfecho = document.querySelector("input[name=Satisfecho]");
    var sensible = document.querySelector("input[name=Sensible]");
    var confiado = document.querySelector("input[name=Confiado]");
    var sensato = document.querySelector("input[name=Sensato]");

    satisfecho.addEventListener('change', function() {
        if (this.checked) {
            sensible.checked = false
            confiado.checked = false
            sensato.checked = false
        }     
    });
    sensible.addEventListener('change', function() {
        if (this.checked) {
            satisfecho.checked = false
            confiado.checked = false
            sensato.checked = false
        }     
    });
    confiado.addEventListener('change', function() {
        if (this.checked) {
            sensible.checked = false
            satisfecho.checked = false
            sensato.checked = false
        }     
    });
    sensato.addEventListener('change', function() {
        if (this.checked) {
            sensible.checked = false
            confiado.checked = false
            satisfecho.checked = false
        }     
    });

    var planificador = document.querySelector("input[name=Planificador]");
    var paciente = document.querySelector("input[name=Paciente]");
    var positivo = document.querySelector("input[name=Positivo]");
    var promotor = document.querySelector("input[name=Promotor]");

    planificador.addEventListener('change', function() {
        if (this.checked) {
            paciente.checked = false
            positivo.checked = false
            promotor.checked = false
        }     
    });
    paciente.addEventListener('change', function() {
        if (this.checked) {
            planificador.checked = false
            positivo.checked = false
            promotor.checked = false
        }     
    });
    positivo.addEventListener('change', function() {
        if (this.checked) {
            paciente.checked = false
            planificador.checked = false
            promotor.checked = false
        }     
    });
    promotor.addEventListener('change', function() {
        if (this.checked) {
            paciente.checked = false
            positivo.checked = false
            planificador.checked = false
        }     
    });

    var seguro = document.querySelector("input[name=Seguro]");
    var espontaneo = document.querySelector("input[name=Espontaneo]");
    var programador = document.querySelector("input[name=Programador]");
    var prudente = document.querySelector("input[name=Prudente]");

    seguro.addEventListener('change', function() {
        if (this.checked) {
            espontaneo.checked = false
            programador.checked = false
            prudente.checked = false
        }     
    });
    espontaneo.addEventListener('change', function() {
        if (this.checked) {
            seguro.checked = false
            programador.checked = false
            prudente.checked = false
        }     
    });
    programador.addEventListener('change', function() {
        if (this.checked) {
            espontaneo.checked = false
            seguro.checked = false
            prudente.checked = false
        }     
    });
    prudente.addEventListener('change', function() {
        if (this.checked) {
            espontaneo.checked = false
            programador.checked = false
            seguro.checked = false
        }     
    });

    var ordenado = document.querySelector("input[name=Ordenado]");
    var servicial = document.querySelector("input[name=Servicial]");
    var franco = document.querySelector("input[name=Franco]");
    var optimista = document.querySelector("input[name=Optimista]");

    ordenado.addEventListener('change', function() {
        if (this.checked) {
            servicial.checked = false
            franco.checked = false
            optimista.checked = false
        }     
    });
    servicial.addEventListener('change', function() {
        if (this.checked) {
            ordenado.checked = false
            franco.checked = false
            optimista.checked = false
        }     
    });
    franco.addEventListener('change', function() {
        if (this.checked) {
            servicial.checked = false
            ordenado.checked = false
            optimista.checked = false
        }     
    });
    optimista.addEventListener('change', function() {
        if (this.checked) {
            servicial.checked = false
            franco.checked = false
            ordenado.checked = false
        }     
    });

    var amistoso = document.querySelector("input[name=Amistoso]");
    var fiel = document.querySelector("input[name=Fiel]");
    var divertido = document.querySelector("input[name=Divertido]");
    var fuerte = document.querySelector("input[name=Fuerte]");

       
    amistoso.addEventListener('change', function() {
        if (this.checked){ 
            fiel.checked = false
            divertido.checked = false
            fuerte.checked = false
        }
    });
    fiel.addEventListener('change', function(){ 
        if (this.checked) {
            amistoso.checked = false
            divertido.checked = false
            fuerte.checked = false
        }
    });
    divertido.addEventListener('change', function() {
        if (this.checked) {
            amistoso.checked = false
            fiel.checked = false
            fuerte.checked = false
        }
    });
    fuerte.addEventListener('change', function() {
        if (this.checked) {
            amistoso.checked = false
            fiel.checked = false
            divertido.checked = false
        }
    });

    var atrevido = document.querySelector("input[name=Atrevido]");
    var encantador = document.querySelector("input[name=Encantador]");
    var diplomatico = document.querySelector("input[name=Diplomatico]");
    var detallista = document.querySelector("input[name=Detallista]");

       
    atrevido.addEventListener('change', function() {
        if (this.checked) {
            encantador.checked = false
            diplomatico.checked = false
            detallista.checked = false
        }
    });
    encantador.addEventListener('change', function() {
        if (this.checked) {
            atrevido.checked = false
            diplomatico.checked = false
            detallista.checked = false
        }
    });
    diplomatico.addEventListener('change', function() {
        if (this.checked) {
            atrevido.checked = false
            encantador.checked = false
            detallista.checked = false
        }
    });
    detallista.addEventListener('change', function() {
        if (this.checked) {
            atrevido.checked = false
            encantador.checked = false
            diplomatico.checked = false
        }
    });

    var alegre = document.querySelector("input[name=Alegre]");
    var confidente = document.querySelector("input[name=Confidente]");
    var educado = document.querySelector("input[name=Educado]");
    var consistente = document.querySelector("input[name=Consistente]");

       
    alegre.addEventListener('change', function() {
        if (this.checked) {
            consistente.checked = false
            educado.checked = false
            confidente.checked = false
        }
    });
    confidente.addEventListener('change', function() {
        if (this.checked) {
            alegre.checked = false
            consistente.checked = false
            educado.checked = false
        }
    });
    educado.addEventListener('change', function() {
        if (this.checked) {
            alegre.checked = false
            consistente.checked = false
            confidente.checked = false
        }
    });
    consistente.addEventListener('change', function() {
        if (this.checked) {
            alegre.checked = false
            educado.checked = false
            confidente.checked = false
        }
    });
    

    var idealista = document.querySelector("input[name=Idealista]");
    var independiente = document.querySelector("input[name=Independiente]");
    var inofensivo = document.querySelector("input[name=Inofensivo]");
    var inspirador = document.querySelector("input[name=Inspirador]");

       
    idealista.addEventListener('change', function() {
        if (this.checked) {
            independiente.checked = false
            inofensivo.checked = false
            inspirador.checked = false
        }
    });
    independiente.addEventListener('change', function() {
        if (this.checked) {
            idealista.checked = false
            inofensivo.checked = false
            inspirador.checked = false
        }
    });
    inofensivo.addEventListener('change', function() {
        if (this.checked) {
            idealista.checked = false
            independiente.checked = false
            inspirador.checked = false
        }
    });
    inspirador.addEventListener('change', function() {
        if (this.checked) {
            idealista.checked = false
            independiente.checked = false
            inofensivo.checked = false
        }
    });

    var demostrativo = document.querySelector("input[name=Demostrativo]");
    var decidido = document.querySelector("input[name=Decidido]");
    var jocoso = document.querySelector("input[name=Jocoso]");
    var meditador = document.querySelector("input[name=Meditador]");

       
    demostrativo.addEventListener('change', function() {
        if (this.checked) {
            decidido.checked = false
            jocoso.checked = false
            meditador.checked = false
        }
    });
    decidido.addEventListener('change', function() {
        if (this.checked) {
            demostrativo.checked = false
            jocoso.checked = false
            meditador.checked = false
        }
    });
    jocoso.addEventListener('change', function() {
        if (this.checked) {
            demostrativo.checked = false
            decidido.checked = false
            meditador.checked = false
        }
    });
    meditador.addEventListener('change', function() {
        if (this.checked) {
            demostrativo.checked = false
            decidido.checked = false
            jocoso.checked = false
        }
    });

    var mediador = document.querySelector("input[name=Mediador]");
    var musical = document.querySelector("input[name=Musical]");
    var activo = document.querySelector("input[name=Activo]");
    var sociable = document.querySelector("input[name=Sociable]");

       
    mediador.addEventListener('change', function() {
        if (this.checked) {
            musical.checked = false
            activo.checked = false
            sociable.checked = false
        }
    });
    musical.addEventListener('change', function() {
        if (this.checked) {
            mediador.checked = false
            activo.checked = false
            sociable.checked = false
        }
    });
    activo.addEventListener('change', function() {
        if (this.checked) {
            mediador.checked = false
            musical.checked = false
            sociable.checked = false
        }
    });
    sociable.addEventListener('change', function() {
        if (this.checked) {
            mediador.checked = false
            musical.checked = false
            activo.checked = false
        }
    });

    var considerado3 = document.querySelector("input[name=Considerado3]");
    var tenaz = document.querySelector("input[name=Tenaz]");
    var charlador = document.querySelector("input[name=Charlador]");
    var tolerante = document.querySelector("input[name=Tolerante]");

       
    considerado3.addEventListener('change', function() {
        if (this.checked) {
            tenaz.checked = false
            charlador.checked = false
            tolerante.checked = false
        }
    });
    tenaz.addEventListener('change', function() {
        if (this.checked) {
            considerado3.checked = false
            charlador.checked = false
            tolerante.checked = false
        }
    });
    charlador.addEventListener('change', function() {
        if (this.checked) {
            considerado3.checked = false
            tenaz.checked = false
            tolerante.checked = false
        }
    });
    tolerante.addEventListener('change', function() {
        if (this.checked) {
            considerado3.checked = false
            tenaz.checked = false
            charlador.checked = false
        }
    });

    var oyente = document.querySelector("input[name=Oyente]");
    var leal = document.querySelector("input[name=Leal]");
    var lider = document.querySelector("input[name=Lider]");
    var alegre2 = document.querySelector("input[name=Alegre2]");

       
    oyente.addEventListener('change', function() {
        if (this.checked) {
            leal.checked = false
            lider.checked = false
            alegre2.checked = false
        }
    });
    leal.addEventListener('change', function() {
        if (this.checked) {
            oyente.checked = false
            lider.checked = false
            alegre2.checked = false
        }
    });
    lider.addEventListener('change', function() {
        if (this.checked) {
            oyente.checked = false
            leal.checked = false
            alegre2.checked = false
        }
    });
    alegre2.addEventListener('change', function() {
        if (this.checked) {
            oyente.checked = false
            leal.checked = false
            lider.checked = false
        }
    });

    var contento = document.querySelector("input[name=Contento]");
    var jefe = document.querySelector("input[name=Jefe]");
    var planeador = document.querySelector("input[name=Planeador]");
    var adorable = document.querySelector("input[name=Adorable]");

       
    contento.addEventListener('change', function() {
        if (this.checked) {
            jefe.checked = false
            planeador.checked = false
            adorable.checked = false
        }
    });
    jefe.addEventListener('change', function() {
        if (this.checked) {
            contento.checked = false
            planeador.checked = false
            adorable.checked = false
        }
    });
    planeador.addEventListener('change', function() {
        if (this.checked) {
            contento.checked = false
            jefe.checked = false
            adorable.checked = false
        }
    });
    adorable.addEventListener('change', function() {
        if (this.checked) {
            contento.checked = false
            jefe.checked = false
            planeador.checked = false
        }
    });

    var perfeccionista = document.querySelector("input[name=Perfeccionista]");
    var placentero = document.querySelector("input[name=Placentero]");
    var productivo = document.querySelector("input[name=Productivo]");
    var popular = document.querySelector("input[name=Popular]");

       
    perfeccionista.addEventListener('change', function() {
        if (this.checked) {
            placentero.checked = false
            productivo.checked = false
            popular.checked = false
        }
    });
    placentero.addEventListener('change', function() {
        if (this.checked) {
            perfeccionista.checked = false
            productivo.checked = false
            popular.checked = false
        }
    });
    productivo.addEventListener('change', function() {
        if (this.checked) {
            perfeccionista.checked = false
            placentero.checked = false
            popular.checked = false
        }
    });
    popular.addEventListener('change', function() {
        if (this.checked) {
            perfeccionista.checked = false
            placentero.checked = false
            productivo.checked = false
        }
    });

    var campante = document.querySelector("input[name=Campante]");
    var atrevido2 = document.querySelector("input[name=Atrevido2]");
    var comportado = document.querySelector("input[name=Comportado]");
    var balanceado = document.querySelector("input[name=Balanceado]");

       
    campante.addEventListener('change', function() {
        if (this.checked) {
            atrevido2.checked = false
            comportado.checked = false
            balanceado.checked = false
        }
    });
    atrevido2.addEventListener('change', function() {
        if (this.checked) {
            campante.checked = false
            comportado.checked = false
            balanceado.checked = false
        }
    });
    comportado.addEventListener('change', function() {
        if (this.checked) {
            campante.checked = false
            atrevido2.checked = false
            balanceado.checked = false
        }
    });
    balanceado.addEventListener('change', function() {
        if (this.checked) {
            campante.checked = false
            atrevido2.checked = false
            comportado.checked = false
        }
    });

    var confuso = document.querySelector("input[name=Confuso]");
    var timido = document.querySelector("input[name=Timido]");
    var arrogante = document.querySelector("input[name=Arrogante]");
    var mandon = document.querySelector("input[name=Mandon]");

       
    confuso.addEventListener('change', function() {
        if (this.checked) {
            timido.checked = false
            arrogante.checked = false
            mandon.checked = false
        }
    });
    timido.addEventListener('change', function() {
        if (this.checked) {
            confuso.checked = false
            arrogante.checked = false
            mandon.checked = false
        }
    });
    arrogante.addEventListener('change', function() {
        if (this.checked) {
            confuso.checked = false
            timido.checked = false
            mandon.checked = false
        }
    });
    mandon.addEventListener('change', function() {
        if (this.checked) {
            confuso.checked = false
            timido.checked = false
            arrogante.checked = false
        }
    });

    var indisciplinado = document.querySelector("input[name=Indisciplinado]");
    var compasion = document.querySelector("input[name=Compasion]");
    var entusiasmo = document.querySelector("input[name=Entusiasmo]");
    var acusador = document.querySelector("input[name=Acusador]");

       
    indisciplinado.addEventListener('change', function() {
        if (this.checked) {
            compasion.checked = false
            entusiasmo.checked = false
            acusador.checked = false
        }
    });
    compasion.addEventListener('change', function() {
        if (this.checked) {
            indisciplinado.checked = false
            entusiasmo.checked = false
            acusador.checked = false
        }
    });
    entusiasmo.addEventListener('change', function() {
        if (this.checked) {
            indisciplinado.checked = false
            compasion.checked = false
            acusador.checked = false
        }
    });
    acusador.addEventListener('change', function() {
        if (this.checked) {
            indisciplinado.checked = false
            compasion.checked = false
            entusiasmo.checked = false
        }
    });

    var reservado2 = document.querySelector("input[name=Reservado2]");
    var resentido = document.querySelector("input[name=Resentido]");
    var resistente = document.querySelector("input[name=Resistente]");
    var rebelde = document.querySelector("input[name=Rebelde]");

       
    reservado2.addEventListener('change', function() {
        if (this.checked) {
            resentido.checked = false
            resistente.checked = false
            rebelde.checked = false
        }
    });
    resentido.addEventListener('change', function() {
        if (this.checked) {
            reservado2.checked = false
            resistente.checked = false
            rebelde.checked = false
        }
    });
    resistente.addEventListener('change', function() {
        if (this.checked) {
            reservado2.checked = false
            resentido.checked = false
            rebelde.checked = false
        }
    });
    rebelde.addEventListener('change', function() {
        if (this.checked) {
            reservado2.checked = false
            resentido.checked = false
            resistente.checked = false
        }
    });

    var fastidioso = document.querySelector("input[name=Fastidioso]");
    var temeroso = document.querySelector("input[name=Temeroso]");
    var olvidadizo = document.querySelector("input[name=Olvidadizo]");
    var franco2 = document.querySelector("input[name=Franco2]");

       
    fastidioso.addEventListener('change', function() {
        if (this.checked) {
            temeroso.checked = false
            olvidadizo.checked = false
            franco2.checked = false
        }
    });
    temeroso.addEventListener('change', function() {
        if (this.checked) {
            fastidioso.checked = false
            olvidadizo.checked = false
            franco2.checked = false
        }
    });
    olvidadizo.addEventListener('change', function() {
        if (this.checked) {
            fastidioso.checked = false
            temeroso.checked = false
            franco2.checked = false
        }
    });
    franco2.addEventListener('change', function() {
        if (this.checked) {
            fastidioso.checked = false
            temeroso.checked = false
            olvidadizo.checked = false
        }
    });

    var impaciente = document.querySelector("input[name=Impaciente]");
    var inseguro = document.querySelector("input[name=Inseguro]");
    var indeciso = document.querySelector("input[name=Indeciso]");
    var interrumpe = document.querySelector("input[name=Interrumpe]");

       
    impaciente.addEventListener('change', function() {
        if (this.checked) {
            inseguro.checked = false
            indeciso.checked = false
            interrumpe.checked = false
        }
    });
    inseguro.addEventListener('change', function() {
        if (this.checked) {
            impaciente.checked = false
            indeciso.checked = false
            interrumpe.checked = false
        }
    });
    indeciso.addEventListener('change', function() {
        if (this.checked) {
            impaciente.checked = false
            inseguro.checked = false
            interrumpe.checked = false
        }
    });
    interrumpe.addEventListener('change', function() {
        if (this.checked) {
            impaciente.checked = false
            inseguro.checked = false
            indeciso.checked = false
        }
    });

    var no_popular = document.querySelector("input[name=no_Popular]");
    var restringido = document.querySelector("input[name=Restringido]");
    var impredecible = document.querySelector("input[name=Impredecible]");
    var afecto = document.querySelector("input[name=Afecto]");

       
    no_popular.addEventListener('change', function() {
        if (this.checked) {
            restringido.checked = false
            impredecible.checked = false
            afecto.checked = false
        }
    });
    restringido.addEventListener('change', function() {
        if (this.checked) {
            no_popular.checked = false
            impredecible.checked = false
            afecto.checked = false
        }
    });
    impredecible.addEventListener('change', function() {
        if (this.checked) {
            no_popular.checked = false
            restringido.checked = false
            afecto.checked = false
        }
    });
    afecto.addEventListener('change', function() {
        if (this.checked) {
            no_popular.checked = false
            restringido.checked = false
            impredecible.checked = false
        }
    });

    var obstinado = document.querySelector("input[name=Obstinado]");
    var arbitrario = document.querySelector("input[name=Arbitrario]");
    var contentar = document.querySelector("input[name=Contentar]");
    var vacilante = document.querySelector("input[name=Vacilante]");

       
    obstinado.addEventListener('change', function() {
        if (this.checked) {
            arbitrario.checked = false
            contentar.checked = false
            vacilante.checked = false
        }
    });
    arbitrario.addEventListener('change', function() {
        if (this.checked) {
            obstinado.checked = false
            contentar.checked = false
            vacilante.checked = false
        }
    });
    contentar.addEventListener('change', function() {
        if (this.checked) {
            obstinado.checked = false
            arbitrario.checked = false
            vacilante.checked = false
        }
    });
    vacilante.addEventListener('change', function() {
        if (this.checked) {
            obstinado.checked = false
            arbitrario.checked = false
            contentar.checked = false
        }
    });

    var simple = document.querySelector("input[name=Simple]");
    var pesimista = document.querySelector("input[name=Pesimista]");
    var orgulloso = document.querySelector("input[name=Orgulloso]");
    var permisivo = document.querySelector("input[name=Permisivo]");

       
    simple.addEventListener('change', function() {
        if (this.checked) {
            pesimista.checked = false
            orgulloso.checked = false
            permisivo.checked = false
        }
    });
    pesimista.addEventListener('change', function() {
        if (this.checked) {
            simple.checked = false
            orgulloso.checked = false
            permisivo.checked = false
        }
    });
    orgulloso.addEventListener('change', function() {
        if (this.checked) {
            simple.checked = false
            pesimista.checked = false
            permisivo.checked = false
        }
    });
    permisivo.addEventListener('change', function() {
        if (this.checked) {
            simple.checked = false
            pesimista.checked = false
            orgulloso.checked = false
        }
    });

    var enojar = document.querySelector("input[name=Enojar]");
    var metas = document.querySelector("input[name=Metas]");
    var argumentador = document.querySelector("input[name=Argumentador]");
    var distanciado = document.querySelector("input[name=Distanciado]");

       
    enojar.addEventListener('change', function() {
        if (this.checked) {
            metas.checked = false
            argumentador.checked = false
            distanciado.checked = false
        }
    });
    metas.addEventListener('change', function() {
        if (this.checked) {
            enojar.checked = false
            argumentador.checked = false
            distanciado.checked = false
        }
    });
    argumentador.addEventListener('change', function() {
        if (this.checked) {
            enojar.checked = false
            metas.checked = false
            distanciado.checked = false
        }
    });
    distanciado.addEventListener('change', function() {
        if (this.checked) {
            enojar.checked = false
            metas.checked = false
            argumentador.checked = false
        }
    });

    var ingenuo = document.querySelector("input[name=Ingenuo]");
    var negativo = document.querySelector("input[name=Negativo]");
    var nervioso = document.querySelector("input[name=Nervioso]");
    var indiferente = document.querySelector("input[name=Indiferente]");

       
    ingenuo.addEventListener('change', function() {
        if (this.checked) {
            negativo.checked = false
            nervioso.checked = false
            indiferente.checked = false
        }
    });
    negativo.addEventListener('change', function() {
        if (this.checked) {
            ingenuo.checked = false
            nervioso.checked = false
            indiferente.checked = false
        }
    });
    nervioso.addEventListener('change', function() {
        if (this.checked) {
            ingenuo.checked = false
            negativo.checked = false
            indiferente.checked = false
        }
    });
    indiferente.addEventListener('change', function() {
        if (this.checked) {
            ingenuo.checked = false
            negativo.checked = false
            nervioso.checked = false
        }
    });

    var preocupado = document.querySelector("input[name=Preocupado]");
    var retraido = document.querySelector("input[name=Retraido]");
    var aatrabajo = document.querySelector("input[name=AATrabajo]");
    var manipulador = document.querySelector("input[name=Manipulador]");

       
    preocupado.addEventListener('change', function() {
        if (this.checked) {
            retraido.checked = false
            aatrabajo.checked = false
            manipulador.checked = false
        }
    });
    retraido.addEventListener('change', function() {
        if (this.checked) {
            preocupado.checked = false
            aatrabajo.checked = false
            manipulador.checked = false
        }
    });
    aatrabajo.addEventListener('change', function() {
        if (this.checked) {
            preocupado.checked = false
            retraido.checked = false
            manipulador.checked = false
        }
    });
    manipulador.addEventListener('change', function() {
        if (this.checked) {
            preocupado.checked = false
            retraido.checked = false
            aatrabajo.checked = false
        }
    });

    var sensible2 = document.querySelector("input[name=Sensible2]");
    var indiscreto = document.querySelector("input[name=Indiscreto]");
    var timido2 = document.querySelector("input[name=Timido2]");
    var hablador = document.querySelector("input[name=Hablador]");

       
    sensible2.addEventListener('change', function() {
        if (this.checked) {
            indiscreto.checked = false
            timido2.checked = false
            hablador.checked = false
        }
    });
    indiscreto.addEventListener('change', function() {
        if (this.checked) {
            sensible2.checked = false
            timido2.checked = false
            hablador.checked = false
        }
    });
    timido2.addEventListener('change', function() {
        if (this.checked) {
            sensible2.checked = false
            indiscreto.checked = false
            hablador.checked = false
        }
    });
    hablador.addEventListener('change', function() {
        if (this.checked) {
            sensible2.checked = false
            indiscreto.checked = false
            timido2.checked = false
        }
    });

    var dudoso = document.querySelector("input[name=Dudoso]");
    var desorganizado = document.querySelector("input[name=Desorganizado]");
    var dominante = document.querySelector("input[name=Dominante]");
    var deprimido = document.querySelector("input[name=Deprimido]");

       
    dudoso.addEventListener('change', function() {
        if (this.checked) {
            desorganizado.checked = false
            dominante.checked = false
            deprimido.checked = false
        }
    });
    desorganizado.addEventListener('change', function() {
        if (this.checked) {
            dudoso.checked = false
            dominante.checked = false
            deprimido.checked = false
        }
    });
    dominante.addEventListener('change', function() {
        if (this.checked) {
            dudoso.checked = false
            desorganizado.checked = false
            deprimido.checked = false
        }
    });
    deprimido.addEventListener('change', function() {
        if (this.checked) {
            dudoso.checked = false
            desorganizado.checked = false
            dominante.checked = false
        }
    });

    var inconsistente = document.querySelector("input[name=Inconsistente]");
    var introvertido = document.querySelector("input[name=Introvertido]");
    var intolerante = document.querySelector("input[name=Intolerante]");
    var indiferente2 = document.querySelector("input[name=Indiferente2]");

       
    inconsistente.addEventListener('change', function() {
        if (this.checked) {
            introvertido.checked = false
            intolerante.checked = false
            indiferente2.checked = false
        }
    });
    introvertido.addEventListener('change', function() {
        if (this.checked) {
            inconsistente.checked = false
            intolerante.checked = false
            indiferente2.checked = false
        }
    });
    intolerante.addEventListener('change', function() {
        if (this.checked) {
            inconsistente.checked = false
            introvertido.checked = false
            indiferente2.checked = false
        }
    });
    indiferente2.addEventListener('change', function() {
        if (this.checked) {
            inconsistente.checked = false
            introvertido.checked = false
            intolerante.checked = false
        }
    });

    var desordenado = document.querySelector("input[name=Desordenado]");
    var temperamental = document.querySelector("input[name=Temperamental]");
    var quejumbroso = document.querySelector("input[name=Quejumbroso]");
    var manipulador2 = document.querySelector("input[name=Manipulador2]");

       
    desordenado.addEventListener('change', function() {
        if (this.checked) {
            temperamental.checked = false
            quejumbroso.checked = false
            manipulador2.checked = false
        }
    });
    temperamental.addEventListener('change', function() {
        if (this.checked) {
            desordenado.checked = false
            quejumbroso.checked = false
            manipulador2.checked = false
        }
    });
    quejumbroso.addEventListener('change', function() {
        if (this.checked) {
            desordenado.checked = false
            temperamental.checked = false
            manipulador2.checked = false
        }
    });
    manipulador2.addEventListener('change', function() {
        if (this.checked) {
            desordenado.checked = false
            temperamental.checked = false
            quejumbroso.checked = false
        }
    });

    var lento = document.querySelector("input[name=Lento]");
    var terco = document.querySelector("input[name=Terco]");
    var exhibicionista = document.querySelector("input[name=Exhibicionista]");
    var esceptico = document.querySelector("input[name=Esceptico]");

       
    lento.addEventListener('change', function() {
        if (this.checked) {
            terco.checked = false
            exhibicionista.checked = false
            esceptico.checked = false
        }
    });
    terco.addEventListener('change', function() {
        if (this.checked) {
            lento.checked = false
            exhibicionista.checked = false
            esceptico.checked = false
        }
    });
    exhibicionista.addEventListener('change', function() {
        if (this.checked) {
            lento.checked = false
            terco.checked = false
            esceptico.checked = false
        }
    });
    esceptico.addEventListener('change', function() {
        if (this.checked) {
            lento.checked = false
            terco.checked = false
            exhibicionista.checked = false
        }
    });

    var solitario = document.querySelector("input[name=Solitario]");
    var enseñoreador = document.querySelector("input[name=Enseñoreador]");
    var perezoso = document.querySelector("input[name=Perezoso]");
    var ostentoso = document.querySelector("input[name=Ostentoso]");

       
    solitario.addEventListener('change', function() {
        if (this.checked) {
            enseñoreador.checked = false
            perezoso.checked = false
            ostentoso.checked = false
        }
    });
    enseñoreador.addEventListener('change', function() {
        if (this.checked) {
            solitario.checked = false
            perezoso.checked = false
            ostentoso.checked = false
        }
    });
    perezoso.addEventListener('change', function() {
        if (this.checked) {
            solitario.checked = false
            enseñoreador.checked = false
            ostentoso.checked = false
        }
    });
    ostentoso.addEventListener('change', function() {
        if (this.checked) {
            solitario.checked = false
            enseñoreador.checked = false
            perezoso.checked = false
        }
    });

    var languido = document.querySelector("input[name=Languido]");
    var sospechoso = document.querySelector("input[name=Sospechoso]");
    var genio = document.querySelector("input[name=Genio]");
    var desmemoriado = document.querySelector("input[name=Desmemoriado]");

       
    languido.addEventListener('change', function() {
        if (this.checked) {
            sospechoso.checked = false
            genio.checked = false
            desmemoriado.checked = false
        }
    });
    sospechoso.addEventListener('change', function() {
        if (this.checked) {
            languido.checked = false
            genio.checked = false
            desmemoriado.checked = false
        }
    });
    genio.addEventListener('change', function() {
        if (this.checked) {
            languido.checked = false
            sospechoso.checked = false
            desmemoriado.checked = false
        }
    });
    desmemoriado.addEventListener('change', function() {
        if (this.checked) {
            languido.checked = false
            sospechoso.checked = false
            genio.checked = false
        }
    });

    var vengativo = document.querySelector("input[name=Vengativo]");
    var inquieto = document.querySelector("input[name=Inquieto]");
    var renuente = document.querySelector("input[name=Renuente]");
    var imprudente = document.querySelector("input[name=Imprudente]");

       
    vengativo.addEventListener('change', function() {
        if (this.checked) {
            inquieto.checked = false
            renuente.checked = false
            imprudente.checked = false
        }
    });
    inquieto.addEventListener('change', function() {
        if (this.checked) {
            vengativo.checked = false
            renuente.checked = false
            imprudente.checked = false
        }
    });
    renuente.addEventListener('change', function() {
        if (this.checked) {
            vengativo.checked = false
            inquieto.checked = false
            imprudente.checked = false
        }
    });
    imprudente.addEventListener('change', function() {
        if (this.checked) {
            vengativo.checked = false
            inquieto.checked = false
            renuente.checked = false
        }
    });

    var transigente = document.querySelector("input[name=Transigente]");
    var astuto = document.querySelector("input[name=Astuto]");
    var criticon = document.querySelector("input[name=Criticon]");
    var variable = document.querySelector("input[name=Variable]");

       
    transigente.addEventListener('change', function() {
        if (this.checked) {
            astuto.checked = false
            criticon.checked = false
            variable.checked = false
        }
    });
    astuto.addEventListener('change', function() {
        if (this.checked) {
            transigente.checked = false
            criticon.checked = false
            variable.checked = false
        }
    });
    criticon.addEventListener('change', function() {
        if (this.checked) {
            transigente.checked = false
            astuto.checked = false
            variable.checked = false
        }
    });
    variable.addEventListener('change', function() {
        if (this.checked) {
            transigente.checked = false
            astuto.checked = false
            criticon.checked = false
        }
    });

        
}
