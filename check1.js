
// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CONTENTS = [
  // â”€â”€ SÃ„ULE 1: Teamaufbau & Recruiting â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {id:1,  cat:'teamaufbau', tag:'Recruiting',   title:'Karriere als Finanzcoach starten',           body:'Neben- oder Hauptberuf â€“ du entscheidest. Ich zeige dir, wie der Einstieg als Finanzcoach wirklich aussieht.'},
  {id:2,  cat:'teamaufbau', tag:'Recruiting',   title:'Dein Einstieg. Deine Regeln.',               body:'Kein vorgeschriebener Weg, kein festes Schema. Du gestaltest deinen Start selbst â€“ ich begleite dich dabei.'},
  {id:3,  cat:'teamaufbau', tag:'Recruiting',   title:'Kein Abschluss? Kein Problem.',              body:'Was zÃ¤hlt ist dein Wille. Wir bilden dich aus â€“ alles andere kommt mit der Zeit.'},
  {id:4,  cat:'teamaufbau', tag:'Recruiting',   title:'Nach der Schule. Nach dem Studium. Jetzt.',  body:'Wer frÃ¼h startet, hat den lÃ¤ngsten Vorlauf. Dein Einstieg in die SelbststÃ¤ndigkeit beginnt heute.'},
  {id:5,  cat:'teamaufbau', tag:'Recruiting',   title:'Branchenkenner aufgepasst.',                 body:'Du kommst aus Versicherung, Bank oder Vertrieb? Hier kannst du dein Wissen wirklich einsetzen.'},
  {id:6,  cat:'teamaufbau', tag:'Recruiting',   title:'Nebenberuflich starten â€“ ohne zu kÃ¼ndigen.',body:'Erst testen, dann entscheiden. Viele meiner besten Kollegen haben genau so begonnen.'},
  {id:7,  cat:'teamaufbau', tag:'Recruiting',   title:'Dein Lebenslauf? Genau richtig so.',         body:'Quereinsteiger willkommen. Deine Erfahrungen sind dein Vorteil â€“ nicht dein Hindernis.'},
  {id:8,  cat:'teamaufbau', tag:'Recruiting',   title:'Mein ehrlicher Erfahrungsbericht.',          body:'Was ich mir vor dem Start gewÃ¼nscht hÃ¤tte zu wissen â€“ und was mich wirklich Ã¼berrascht hat.'},
  {id:9,  cat:'benefits',   tag:'Freiheit',     title:'Kein Chef. Keine festen Schichten.',         body:'Deine Zeit gehÃ¶rt dir. Das klingt einfach â€“ aber es verÃ¤ndert wirklich alles.'},
  {id:10, cat:'benefits',   tag:'Freiheit',     title:'Freie Zeiteinteilung. Kein Gehaltsdeckel.', body:'Zwei Dinge, die zusammen seltener sind als du denkst â€“ hier sind sie Alltag.'},
  {id:11, cat:'benefits',   tag:'Freiheit',     title:'Homeoffice oder BÃ¼ro? Du entscheidest.',    body:'Ich arbeite manchmal von zuhause, manchmal unterwegs. Das BÃ¼ro steht bereit â€“ aber nur wenn ich will.'},
  {id:12, cat:'benefits',   tag:'Freiheit',     title:'Du baust nicht fÃ¼r jemand anderen.',        body:'Du baust fÃ¼r dich. Dein Kundenstock, dein Team, deine Zukunft. Das ist der Unterschied.'},
  {id:13, cat:'benefits',   tag:'Freiheit',     title:'Frei. Eigen. Stark.',                       body:'Drei Worte. Alle drei beschreiben, wie sich dieser Beruf anfÃ¼hlt â€“ wenn man ihn wirklich lebt.'},
  {id:14, cat:'benefits',   tag:'Freiheit',     title:'Keine Investition nÃ¶tig. Nur Motivation.',  body:'Kein Eigenkapital, kein Franchise, keine Lizenz. Du bringst dich mit â€“ das reicht.'},
  {id:15, cat:'benefits',   tag:'Freiheit',     title:'Sport und Karriere? Beides ist mÃ¶glich.',   body:'Mein Training lÃ¤uft weiter. Mein Job auch. Weil ich beides einplane â€“ und beides klappt.'},
  {id:16, cat:'benefits',   tag:'Freiheit',     title:'Dein Einkommen wÃ¤chst mit dir.',            body:'Nicht mit dem Kalender. Nicht mit dem Chef. Sondern mit dem, was du aufbaust.'},
  {id:17, cat:'teamaufbau', tag:'Team',         title:'SelbststÃ¤ndig. Aber nie allein.',            body:'Ein Netzwerk aus Kollegen, Mentoren und Teamleitern steht hinter dir â€“ von Tag 1 an.'},
  {id:18, cat:'teamaufbau', tag:'Team',         title:'Erfolg hat man nur gemeinsam.',             body:'Die stÃ¤rksten Ergebnisse entstehen nicht allein. Unser Team zeigt das jeden Tag.'},
  {id:19, cat:'teamaufbau', tag:'Team',         title:'Dein persÃ¶nlicher Karrierecoach.',          body:'Von Anfang an hast du jemanden an deiner Seite â€“ der weiÃŸ wie es geht, weil er es selbst gegangen ist.'},
  {id:20, cat:'teamaufbau', tag:'Team',         title:'Events, Erfolge, echte Menschen.',          body:'Was mich am meisten Ã¼berrascht hat? Die Community. Events, Auszeichnungen, echte Verbindungen.'},
  {id:21, cat:'teamaufbau', tag:'Team',         title:'Die stÃ¤rksten Finanzcoaches.',              body:'Sind nicht die lautesten. Sondern die konsequentesten. Beobachtung aus dem echten Alltag.'},
  {id:22, cat:'teamaufbau', tag:'Team',         title:'Gleichheit. Leistung. Chancen fÃ¼r alle.',   body:'Egal wo du herkommst, egal was du vorher gemacht hast. Hier zÃ¤hlt was du tust â€“ nicht was du warst.'},
  {id:23, cat:'teamaufbau', tag:'Zielgruppen',  title:'Frauen in der Finanzberatung.',             body:'UnterschÃ¤tztes Potenzial. Ich bin selbst Beispiel dafÃ¼r, was mÃ¶glich ist â€“ wenn man es angeht.'},
  {id:24, cat:'teamaufbau', tag:'Zielgruppen',  title:'Vereinbarkeit ist keine Frage des Geschlechts.', body:'Familie und Karriere. Ich lebe beides. Nicht perfekt â€“ aber beides mit vollem Einsatz.'},
  {id:25, cat:'teamaufbau', tag:'Zielgruppen',  title:'Aus dem Sport in die SelbststÃ¤ndigkeit.',  body:'Disziplin, Teamgeist, Zielorientierung â€“ das klingt nach Mannschaftssport. Und nach unserem Job.'},
  {id:26, cat:'teamaufbau', tag:'Zielgruppen',  title:'Nach der Bank. Nach der Versicherung.',    body:'Neu durchstarten. Dein Wissen bleibt â€“ aber jetzt arbeitest du damit fÃ¼r dich selbst.'},
  {id:27, cat:'motivation', tag:'Mindset',      title:'Was wartest du noch?',                     body:'Der richtige Moment kommt nicht. Den machst du. Lass uns reden.'},
  {id:28, cat:'motivation', tag:'Mindset',      title:'Warum ich jeden Morgen gerne arbeite.',    body:'Ich werde oft gefragt. Die ehrliche Antwort: Weil ich weiÃŸ wofÃ¼r. Das ist nicht selbstverstÃ¤ndlich.'},
  {id:29, cat:'motivation', tag:'Mindset',      title:'Finanzberatung ist so kreativ.',            body:'Das hÃ¤tte ich nicht gedacht. Aber Kommunikation, Strategie, Aufbau â€“ es steckt viel mehr drin als ich erwartet hatte.'},
  {id:30, cat:'motivation', tag:'Mindset',      title:'Deine Zukunft beginnt genau hier.',        body:'Nicht irgendwann. Nicht wenn alles perfekt ist. Sondern jetzt, mit dem was du hast.'},
  {id:31, cat:'motivation', tag:'Saisonal',     title:'Jahresstart: Neue Ziele, neue Chancen.',   body:'Was willst du in diesem Jahr anders machen? Lass uns konkret werden.'},
  {id:32, cat:'motivation', tag:'Saisonal',     title:'FrÃ¼hjahr: Jetzt durchstarten.',            body:'Frischer Start, neue Energie. Wer jetzt beginnt, hat den Sommer schon als Ergebnis vor sich.'},
  {id:33, cat:'motivation', tag:'Saisonal',     title:'Sommer: Flexibel arbeiten von Ã¼berall.',   body:'Laptop, Sonnenschirm, KundengesprÃ¤che per Video. Der Job macht Urlaub mit â€“ auf Wunsch.'},
  {id:34, cat:'motivation', tag:'Saisonal',     title:'Herbst: Jetzt Team aufbauen fÃ¼r Q4.',      body:'Das stÃ¤rkste Quartal des Jahres kommt. Mit dem richtigen Team macht es noch mehr SpaÃŸ.'},
  {id:35, cat:'motivation', tag:'Saisonal',     title:'Weihnachten: Was dieses Jahr alles mÃ¶glich war.', body:'Ein RÃ¼ckblick auf Momente, die zeigen: Es lohnt sich, anzufangen.'},

  // â”€â”€ SÃ„ULE 2: Produktkommunikation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {id:36, cat:'produkt', tag:'Altersvorsorge',   title:'Altersvorsorge â€“ frÃ¼h anfangen lohnt sich.', body:'Der Zinseszinseffekt arbeitet fÃ¼r dich â€“ aber nur wenn du anfÃ¤ngst. Heute ist besser als morgen.'},
  {id:37, cat:'produkt', tag:'Altersvorsorge',   title:'Jedes Jahr frÃ¼her spart Tausende Euro.',    body:'Konkret gerechnet: Wer mit 25 statt 35 anfÃ¤ngt, kann mit gleichem Beitrag deutlich mehr aufbauen.'},
  {id:38, cat:'produkt', tag:'Altersvorsorge',   title:'Was die gesetzliche Rente wirklich bedeutet.', body:'Zahlen, die viele Ã¼berraschen. Ich erklÃ¤re dir, was du wirklich erwarten kannst.'},
  {id:39, cat:'produkt', tag:'Altersvorsorge',   title:'Altersvorsorge mit 25 vs. mit 45.',         body:'Zwei Szenarien. Ein Ergebnis. Der Unterschied ist grÃ¶ÃŸer als du denkst.'},
  {id:40, cat:'produkt', tag:'Altersvorsorge',   title:'Altersvorsorge ist das Fundament.',         body:'Wer hier solide baut, kann alles andere obendrauf setzen. Deshalb fangen wir immer hier an.'},
  {id:41, cat:'produkt', tag:'Altersvorsorge',   title:'Flexibel einzahlen â€“ maximale Wirkung.',    body:'Kein starrer Betrag. Du kannst anpassen, pausieren, aufstocken. Leben ist flexibel â€“ deine Vorsorge auch.'},
  {id:42, cat:'produkt', tag:'Altersvorsorge',   title:'Dein persÃ¶nlicher Altersvorsorge-Plan.',    body:'Nicht von der Stange. Sondern genau auf deine Situation zugeschnitten.'},
  {id:43, cat:'produkt', tag:'Altersvorsorge',   title:'3 hÃ¤ufige Fehler bei der Altersvorsorge.',  body:'Den ersten macht fast jeder. Den zweiten viele. Den dritten erklÃ¤re ich dir heute â€“ damit du ihn nicht machst.'},
  {id:44, cat:'produkt', tag:'Altersvorsorge',   title:'Wann ist der richtige Zeitpunkt? Jetzt.',   body:'Diese Frage hÃ¶re ich oft. Die Antwort ist immer dieselbe.'},
  {id:45, cat:'produkt', tag:'Altersvorsorge',   title:'Warum ich selbst frÃ¼h angefangen habe.',    body:'Nicht weil ich musste. Sondern weil ich verstanden hatte, was es bedeutet â€“ zu warten.'},
  {id:46, cat:'produkt', tag:'Immobilien',       title:'Eigenheim â€“ ja oder nein?',                body:'Keine pauschale Antwort. Aber ich helfe dir, die richtige Frage zu stellen.'},
  {id:47, cat:'produkt', tag:'Immobilien',       title:'Was du vor dem Hauskauf wissen musst.',     body:'5 Dinge, die viele erst nach dem Kauf herausfinden. Ich sage sie dir vorher.'},
  {id:48, cat:'produkt', tag:'Immobilien',       title:'Mieten oder kaufen â€“ was rechnet sich?',    body:'Die ehrliche Antwort hÃ¤ngt von mehr ab als dem Preis. Ich rechne es mit dir durch.'},
  {id:49, cat:'produkt', tag:'Immobilien',       title:'Eigenkapital aufbauen: So gehst du vor.',   body:'Schritt fÃ¼r Schritt. Ohne groÃŸen Startbetrag. Mit einem konkreten Plan.'},
  {id:50, cat:'produkt', tag:'Immobilien',       title:'Ich helfe dir die richtige Entscheidung zu treffen.', body:'Kauf? Finanzierung? Timing? Wir schauen uns alles gemeinsam an â€“ unverbindlich.'},
  {id:51, cat:'produkt', tag:'Bausparen',        title:'Bausparen erklÃ¤rt in 60 Sekunden.',         body:'Was es ist, wie es funktioniert, wann es sich lohnt. Kurz und klar.'},
  {id:52, cat:'produkt', tag:'Bausparen',        title:'Warum Bausparen heute noch sinnvoll ist.',  body:'In Zeiten schwankender Zinsen: Warum ein fester Zinssatz fÃ¼r viele das beste Argument ist.'},
  {id:53, cat:'produkt', tag:'Bausparen',        title:'Die 4 Phasen deines Bausparvertrags.',      body:'Sparphase, Zuteilung, Darlehen, Tilgung. Ich erklÃ¤re dir, was wann passiert.'},
  {id:54, cat:'produkt', tag:'Bausparen',        title:'Zinsen sichern â€“ so funktioniert es.',      body:'Heute einen gÃ¼nstigen Zins festschreiben â€“ fÃ¼r Vorhaben in ein paar Jahren. Das ist der Trick.'},
  {id:55, cat:'produkt', tag:'Kidz',             title:'Das beste Geschenk fÃ¼r dein Kind.',         body:'Nicht Spielzeug. Nicht Geld auf dem Konto. Sondern ein Plan, der wÃ¤chst â€“ mit dem Kind.'},
  {id:56, cat:'produkt', tag:'Kidz',             title:'FrÃ¼h anfangen â€“ fÃ¼r deine Kinder vorsorgen.', body:'Was heute klein anfÃ¤ngt, wird in 20 Jahren groÃŸ. Das Prinzip gilt nirgends mehr als hier.'},
  {id:57, cat:'produkt', tag:'Kidz',             title:'Wie du die Zukunft deines Kindes sicherst.', body:'Schon heute, mit kleinen BetrÃ¤gen. Ich zeige dir wie.'},
  {id:58, cat:'produkt', tag:'Kidz',             title:'KindersparplÃ¤ne: Was wirklich sinnvoll ist.', body:'Nicht jeder Plan ist gleich gut. Ich erklÃ¤re dir den Unterschied â€“ ohne Fachjargon.'},
  {id:59, cat:'produkt', tag:'Kredit',           title:'Wann ein Kredit sinnvoll ist.',             body:'Nicht jede Schuld ist schlecht. Manchmal ist ein Kredit das klÃ¼gste Werkzeug.'},
  {id:60, cat:'produkt', tag:'Kredit',           title:'Was du vor dem Kredit wissen musst.',       body:'3 Fragen, die du dir stellen solltest â€“ bevor du unterschreibst.'},
  {id:61, cat:'produkt', tag:'Kredit',           title:'Kredit clever nutzen â€“ meine Tipps.',       body:'Wie du Fremdkapital so einsetzt, dass es fÃ¼r dich arbeitet â€“ nicht gegen dich.'},

  // â”€â”€ SÃ„ULE 3: Personal Brand â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {id:62, cat:'brand', tag:'Ãœber mich',          title:'Wer ich bin und warum ich diesen Beruf liebe.', body:'Eine ehrliche Antwort auf die hÃ¤ufigste Frage, die mir gestellt wird.'},
  {id:63, cat:'brand', tag:'Ãœber mich',          title:'Meine Geschichte als VermÃ¶gensberaterin.',  body:'Wo ich herkam, was mich bewogen hat zu starten â€“ und was ich seitdem gelernt habe.'},
  {id:64, cat:'brand', tag:'Ãœber mich',          title:'Warum ich diesen Weg gegangen bin.',        body:'Es war nicht der naheliegendste. Aber im RÃ¼ckblick: der richtige.'},
  {id:65, cat:'brand', tag:'Ãœber mich',          title:'Was mich von anderen Beratern unterscheidet.', body:'Drei Dinge, die mir persÃ¶nlich wichtig sind â€“ und die ich in jedes GesprÃ¤ch mitbringe.'},
  {id:66, cat:'brand', tag:'Ãœber mich',          title:'Meine Werte: Ehrlichkeit, Kompetenz, Vertrauen.', body:'Kein Marketing-Speak. Das sind die drei Dinge, auf die ich mich tÃ¤glich festlege.'},
  {id:67, cat:'brand', tag:'Ãœber mich',          title:'Steckbrief: Das bin ich in 5 Fakten.',      body:'Kurzversion von mir. FÃ¼r alle, die es eilig haben â€“ und trotzdem wissen wollen mit wem sie sprechen.'},
  {id:68, cat:'brand', tag:'Ãœber mich',          title:'Beruf und Leidenschaft â€“ fÃ¼r mich ist es beides.', body:'Das klingt wie ein Klischee. Aber ich erklÃ¤re dir, warum ich es so meine.'},
  {id:69, cat:'brand', tag:'Arbeitsweise',       title:'So bereite ich mich auf KundengesprÃ¤che vor.', body:'Was ich immer tue, bevor wir uns treffen. Damit deine Zeit gut investiert ist.'},
  {id:70, cat:'brand', tag:'Arbeitsweise',       title:'Was mich tÃ¤glich antreibt.',                body:'Nicht das Gehalt. Nicht die Zahlen. Sondern das, was ich bei meinen Kunden bewirke.'},
  {id:71, cat:'brand', tag:'Arbeitsweise',       title:'So lÃ¤uft unser erstes GesprÃ¤ch ab.',        body:'Damit du weiÃŸt was dich erwartet â€“ ohne Ãœberraschungen, ohne Druck.'},
  {id:72, cat:'brand', tag:'Arbeitsweise',       title:'Kein Druck, kein Verkauf â€“ nur ein ehrliches GesprÃ¤ch.', body:'Ich verkaufe nichts, was du nicht brauchst. Das ist keine Floskel. Das ist wie ich arbeite.'},
  {id:73, cat:'brand', tag:'Arbeitsweise',       title:'Das ErstgesprÃ¤ch ist kostenlos und unverbindlich.', body:'Kein Haken. Keine versteckten Kosten. Einfach kennenlernen â€“ und schauen ob es passt.'},
  {id:74, cat:'brand', tag:'Arbeitsweise',       title:'Warum ich auf Vertrauen statt Verkauf setze.', body:'Langfristige Beziehungen schlagen kurzfristige AbschlÃ¼sse. Das ist meine Ãœberzeugung.'},
  {id:75, cat:'brand', tag:'Behind the Scenes',  title:'Ein Tag in meinem Leben als Finanzcoach.',  body:'Morgens Vorbereitung, mittags GesprÃ¤che, abends Nachbereitung â€“ aber flexibel. Immer.'},
  {id:76, cat:'brand', tag:'Behind the Scenes',  title:'Mein Homeoffice-Setup.',                    body:'Was wirklich bei mir auf dem Schreibtisch steht â€“ und warum ich so arbeite.'},
  {id:77, cat:'brand', tag:'Behind the Scenes',  title:'Was ich diese Woche gelernt habe.',         body:'Ein ehrlicher WochenrÃ¼ckblick. Was hat funktioniert? Was nicht? Was nehme ich mit?'},
  {id:78, cat:'brand', tag:'Behind the Scenes',  title:'Hinter den Kulissen: Mein Alltag.',         body:'Was du nicht siehst, wenn du meinen Posts siehst â€“ der echte Alltag dahinter.'},
  {id:79, cat:'brand', tag:'Behind the Scenes',  title:'Das hat mich diese Woche Ã¼berrascht.',      body:'Manchmal kommt es anders als geplant. Heute teile ich, was mich dieses Mal Ã¼berrascht hat.'},
  {id:80, cat:'brand', tag:'Behind the Scenes',  title:'Mein Morgenritual fÃ¼r produktive Tage.',    body:'Was ich jeden Morgen tue, bevor ich anfange â€“ und warum es funktioniert.'},

  // â”€â”€ SÃ„ULE 4: Kundenkommunikation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {id:81, cat:'kunden', tag:'Markt-Update',      title:'Was die EZB-Entscheidung fÃ¼r dich bedeutet.', body:'Aktuell, verstÃ¤ndlich, relevant. Ich erklÃ¤re dir, was sich Ã¤ndert â€“ und was du tun kannst.'},
  {id:82, cat:'kunden', tag:'Markt-Update',      title:'Inflation sinkt â€“ was jetzt?',              body:'Gute Nachricht, aber kein Grund zum Nichtstun. Was das fÃ¼r deine Vorsorge bedeutet.'},
  {id:83, cat:'kunden', tag:'Markt-Update',      title:'Zinsen steigen â€“ was bedeutet das?',        body:'FÃ¼r Sparer, fÃ¼r Kreditnehmer, fÃ¼r die Altersvorsorge. Ich erklÃ¤re alle drei.'},
  {id:84, cat:'kunden', tag:'Markt-Update',      title:'Marktupdate: Was gerade passiert.',         body:'Kurz, klar, ohne Fachjargon. Damit du weiÃŸt, was du wissen musst.'},
  {id:85, cat:'kunden', tag:'Markt-Update',      title:'Wirtschaftsnachrichten betreffen dich direkt.', body:'Klingt abstrakt â€“ ist es nicht. Ich zeige dir die Verbindung zu deinem Alltag.'},
  {id:86, cat:'kunden', tag:'Markt-Update',      title:'Was passiert wenn du gar nichts tust?',     body:'Auch Nichtstun ist eine Entscheidung. Und ich zeige dir, was sie kosten kann.'},
  {id:87, cat:'kunden', tag:'Markt-Update',      title:'Notenbanken, Zinsen, Inflation â€“ einfach erklÃ¤rt.', body:'Die drei Begriffe, die du im Radio hÃ¶rst. Endlich erklÃ¤rt, was sie fÃ¼r dich bedeuten.'},
  {id:88, cat:'kunden', tag:'Finanztipps',       title:'3 Finanztipps die wirklich jeder kennen sollte.', body:'Kein Fachwissen nÃ¶tig. Drei Dinge, die sofort einen Unterschied machen.'},
  {id:89, cat:'kunden', tag:'Finanztipps',       title:'Was bedeutet Inflation fÃ¼r mein Erspartes?', body:'Dein Geld verliert an Wert â€“ still und leise. Ich erklÃ¤re wie viel und was du dagegen tun kannst.'},
  {id:90, cat:'kunden', tag:'Finanztipps',       title:'Das Girokonto ist keine Sparanlage.',       body:'Einer der hÃ¤ufigsten Fehler. Ich erklÃ¤re warum â€“ und was stattdessen besser ist.'},
  {id:91, cat:'kunden', tag:'Finanztipps',       title:'VermÃ¶gensaufbau â€“ so fÃ¤ngst du heute an.',  body:'Kein groÃŸes Startkapital nÃ¶tig. Nur ein Plan. Und jemanden der dir dabei hilft.'},
  {id:92, cat:'kunden', tag:'Finanztipps',       title:'Der Unterschied zwischen sparen und vorsorgen.', body:'Klingt Ã¤hnlich, ist es nicht. Wer beides verwechselt, verliert Zeit und Geld.'},
  {id:93, cat:'kunden', tag:'Finanztipps',       title:'Was ist eigentlich Rendite?',               body:'Kurz erklÃ¤rt: Was das Wort bedeutet, warum es wichtig ist â€“ und wie du es fÃ¼r dich nutzt.'},
  {id:94, cat:'kunden', tag:'Finanztipps',       title:'5 Finanzbegriffe einfach erklÃ¤rt.',         body:'Rendite, Inflation, Diversifikation, Zinseszins, LiquiditÃ¤t. Heute in je einem Satz.'},
  {id:95, cat:'kunden', tag:'Finanztipps',       title:'Finanzielle UnabhÃ¤ngigkeit â€“ was steckt dahinter?', body:'Nicht nur fÃ¼r Reiche. Ich erklÃ¤re was das Ziel wirklich bedeutet â€“ und wie man hinkommt.'},
  {id:96, cat:'kunden', tag:'Erstberatung',      title:'So lÃ¤uft unser erstes GesprÃ¤ch ab.',        body:'Schritt fÃ¼r Schritt, ohne Ãœberraschungen. Damit du entspannt reingehst.'},
  {id:97, cat:'kunden', tag:'Erstberatung',      title:'Deine Fragen â€“ meine Antworten.',           body:'Bring alle deine Fragen mit. Es gibt keine schlechte Frage â€“ nur ungenutzte Chancen.'},
  {id:98, cat:'kunden', tag:'Erstberatung',      title:'Warum das GesprÃ¤ch mit mir nichts kostet.', body:'Weil ich langfristig denke. Vertrauen entsteht zuerst. Dann alles andere.'},
  {id:99, cat:'kunden', tag:'Erstberatung',      title:'Was du zum ErstgesprÃ¤ch mitbringen solltest.', body:'Nicht viel. Ich sage dir genau was â€“ damit wir die Zeit gut nutzen kÃ¶nnen.'},
  {id:100,cat:'kunden', tag:'Erstberatung',      title:'Nach dem GesprÃ¤ch bist du schlauer â€“ versprochen.', body:'Egal ob wir zusammenarbeiten oder nicht: Du gehst informierter raus als du reingekommen bist.'},
  {id:101,cat:'kunden', tag:'Vorlagen',          title:'Marktupdate-Vorlage: EZB-Entscheidung.',    body:'Fertige Nachricht fÃ¼r WhatsApp und E-Mail. Du musst nur deinen Namen einsetzen.'},
  {id:102,cat:'kunden', tag:'Vorlagen',          title:'Marktupdate-Vorlage: InflationsrÃ¼ckgang.',  body:'Personalisierbar, verstÃ¤ndlich formuliert. Sofort einsetzbar fÃ¼r deine Bestandskunden.'},
  {id:103,cat:'kunden', tag:'Vorlagen',          title:'Marktupdate-Vorlage: Zinsentwicklung.',     body:'Aktuelle Zinslage einfach kommunizieren. FÃ¼r alle Kunden die gerade Ã¼ber Finanzierung nachdenken.'},
  {id:104,cat:'kunden', tag:'Vorlagen',          title:'Jahresstart-Nachricht an Bestandskunden.',  body:'Herzlich, persÃ¶nlich, mit echtem Mehrwert. Kein leeres "Gutes neues Jahr".'},
  {id:105,cat:'kunden', tag:'Vorlagen',          title:'Sommerpause-Nachricht mit Mehrwert.',       body:'Auch in der Pause prÃ¤sent bleiben. Mit einem Tipp, der wirklich hilft.'},

  // â”€â”€ SÃ„ULE 5: Memes & Humor â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {id:106,cat:'memes', tag:'Finanz-Humor',       title:'Wenn der Kunde fragt ob er noch warten kannâ€¦', body:'â€¦mit der Altersvorsorge. Klassiker. Den kenne ich zu gut. ðŸ˜„'},
  {id:107,cat:'memes', tag:'Finanz-Humor',       title:'"Ich spare ja schon" â€“ 3 Streaming-Abos.',  body:'Das klassische MissverstÃ¤ndnis. Nicht bÃ¶se gemeint â€“ aber jemand musste es sagen.'},
  {id:108,cat:'memes', tag:'Finanz-Humor',       title:'Altersvorsorge mit 25 vs. mit 45.',         body:'Ein Vergleich, der sich selbst erklÃ¤rt. Und trotzdem immer noch jemanden Ã¼berrascht.'},
  {id:109,cat:'memes', tag:'Finanz-Humor',       title:'Wenn Kunden Zinsen googeln und anrufen.',   body:'Diese GesprÃ¤che liebe ich. Wirklich. Weil danach immer etwas passiert.'},
  {id:110,cat:'memes', tag:'Finanz-Humor',       title:'Das Girokonto als "Sparanlage".',            body:'Weit verbreitet. Gut gemeint. Leider falsch. Aber ich erklÃ¤re es gerne.'},
  {id:111,cat:'memes', tag:'Finanz-Humor',       title:'Was HÃ¤tte-Sollte-KÃ¶nnte-WÃ¼rde kostet.',     body:'Die teuersten vier WÃ¶rter in der Finanzplanung. Immer noch wahr.'},
  {id:112,cat:'memes', tag:'Finanz-Humor',       title:'Wenn der Rentenbescheid ankommt.',          body:'Der Moment der Wahrheit. Manche lachen. Manche weinen. Ich helfe vorher.'},
  {id:113,cat:'memes', tag:'Berater-Alltag',     title:'Montagsenergie als Finanzcoach.',           body:'Kaffee. Kalender. Kunden. In dieser Reihenfolge.'},
  {id:114,cat:'memes', tag:'Berater-Alltag',     title:'Das ErstgesprÃ¤ch ist kostenlos. Das Wissen danach?', body:'Unbezahlbar. Ich stehe dazu.'},
  {id:115,cat:'memes', tag:'Berater-Alltag',     title:'Wenn alle fragen was ich eigentlich mache.',body:'Kurze Antwort: Ich helfe Menschen, kluge Entscheidungen mit Geld zu treffen.'},
  {id:116,cat:'memes', tag:'Berater-Alltag',     title:'Der Moment wenn ein Kunde "jetzt verstehe ich es" sagt.', body:'Der beste Teil des Jobs. Kein Witz.'},
  {id:117,cat:'memes', tag:'Berater-Alltag',     title:'Finanzcoach vs. was meine Familie denkt.',  body:'Was ich mache. Was sie glauben was ich mache. Was ich wirklich mache.'},
  {id:118,cat:'memes', tag:'Berater-Alltag',     title:'Wenn der Kalender voll ist aber der Kaffee leer.', body:'Priorities. ðŸ˜…'},
  {id:119,cat:'memes', tag:'Berater-Alltag',     title:'So sieht Work-Life-Balance wirklich aus.',  body:'Nicht immer Instagram-tauglich. Aber ehrlich. Und meistens gut.'},
  {id:120,cat:'memes', tag:'Meme Generator',     title:'KI-Meme Generator: Eigenes Thema eingeben.',body:'Erstelle deinen eigenen Finanz-Meme â€“ powered by KI. Dein Thema, dein Humor.'},
];

const FORMATS = [
  {id:'ig-post',name:'Instagram Post',dim:'1080 Ã— 1350 px',ratio:'4:5',platforms:['Instagram'],w:240,h:300},
  {id:'ig-story',name:'Instagram Story',dim:'1080 Ã— 1920 px',ratio:'9:16',platforms:['Instagram','WhatsApp'],w:175,h:310},
  {id:'linkedin',name:'LinkedIn Post',dim:'1200 Ã— 627 px',ratio:'1.91:1',platforms:['LinkedIn'],w:320,h:167},
  {id:'facebook',name:'Facebook Post',dim:'1200 Ã— 630 px',ratio:'1.9:1',platforms:['Facebook'],w:320,h:168},
  {id:'whatsapp',name:'WhatsApp Status',dim:'1080 Ã— 1920 px',ratio:'9:16',platforms:['WhatsApp'],w:175,h:310},
];

const DESIGNS = [
  {id:1,name:'Splitscreen',desc:'Bild & Text nebeneinander'},
  {id:2,name:'Bold Type',desc:'GroÃŸer Headline-Fokus'},
  {id:3,name:'Card Stack',desc:'Bullet-Karten Struktur'},
  {id:4,name:'Minimal',desc:'Ruhig & aufgerÃ¤umt'},
  {id:5,name:'Quote Frame',desc:'Zitat im Mittelpunkt'},
  {id:6,name:'Photo Big',desc:'Foto dominiert'},
  {id:7,name:'Diagonal Cut',desc:'Dynamischer Schnitt'},
  {id:8,name:'List View',desc:'Strukturierte Liste'},
  {id:9,name:'Dark Impact',desc:'Starker Kontrast'},
  {id:10,name:'Editorial',desc:'Magazin-Stil'},
];

const PALETTES = [
  {name:'WaldgrÃ¼n',primary:'#1E3A2A',accent:'#4A6741',text:'#fff'},
  {name:'Sandstein',primary:'#5C4433',accent:'#C67B5A',text:'#fff'},
  {name:'CremeweiÃŸ',primary:'#3D3228',accent:'#8B6F5A',text:'#fff'},
  {name:'Salbei',primary:'#2A3B2E',accent:'#6B8F62',text:'#fff'},
  {name:'Terracotta',primary:'#5C3020',accent:'#D2714A',text:'#fff'},
  {name:'OlivgrÃ¼n',primary:'#3A3E1E',accent:'#7A8A3A',text:'#fff'},
  {name:'Warmes Braun',primary:'#4A3020',accent:'#A07850',text:'#fff'},
  {name:'TiefgrÃ¼n',primary:'#1A3020',accent:'#3A6040',text:'#fff'},
  {name:'MoosgrÃ¼n',primary:'#2E3A24',accent:'#586B42',text:'#fff'},
  {name:'Natur',primary:'#2C2420',accent:'#6B5B4E',text:'#fff'},
];

// â”€â”€â”€ STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let state = {
  activeCat:'alle', activeFormat:'all',
  selectedContent:null, selectedFormat:null, selectedDesign:null, selectedPalette:0,
  uploadedImg:null, cart:[], step:1, selectedLibPost:null
};

// â”€â”€â”€ RENDER HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function buildPostPreview(layout, palette, content, imgSrc, w, h) {
  const p = palette || PALETTES[0];
  const s = (v,base) => (v / base * h).toFixed(1);
  const sw = (v,base) => (v / base * w).toFixed(1);
  let html = '';
  const photoEl = (size, pos) => {
    const img = imgSrc ? `<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`
      : `<div style="font-size:${(size/100*9).toFixed(1)}px;opacity:0.6;text-align:center;color:${p.text};padding:4px">Dein Foto</div>`;
    return `<div style="position:absolute;width:${size}px;height:${size}px;${pos};border-radius:6px;border:2px solid rgba(255,255,255,0.35);overflow:hidden;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center">${img}</div>`;
  };
  const badgeEl = `<div style="font-family:sans-serif;font-size:${(9/300*h).toFixed(1)}px;letter-spacing:0.1em;text-transform:uppercase;opacity:0.75;color:${p.text};margin-bottom:${(6/300*h).toFixed(1)}px">${content.tag}</div>`;
  const titleEl = (fs) => `<div style="font-family:Georgia,serif;font-size:${(fs/300*h).toFixed(1)}px;font-weight:700;color:${p.text};line-height:1.2;margin-bottom:${(6/300*h).toFixed(1)}px">${content.title}</div>`;
  const bodyEl = (fs) => `<div style="font-family:sans-serif;font-size:${(fs/300*h).toFixed(1)}px;color:${p.text};opacity:0.75;line-height:1.5">${content.body.slice(0,100)}â€¦</div>`;

  const photoSm = Math.round(w*0.22);
  const photoLg = Math.round(w*0.38);

  if(layout===1) {
    html=`<div style="display:flex;width:${w}px;height:${h}px;background:${p.primary}">
      <div style="width:40%;background:${p.accent};display:flex;align-items:center;justify-content:center">
        <div style="width:70%;aspect-ratio:1;border-radius:6px;overflow:hidden;border:2px solid rgba(255,255,255,0.3);${imgSrc?'':'background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center'}">
          ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:`<div style="font-size:9px;color:rgba(255,255,255,0.6);text-align:center">Dein Foto</div>`}
        </div>
      </div>
      <div style="flex:1;padding:${(16/300*h).toFixed(1)}px;display:flex;flex-direction:column;justify-content:center">
        ${badgeEl}${titleEl(16)}${bodyEl(9)}
      </div>
    </div>`;
  } else if(layout===2) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.primary};padding:${(18/300*h).toFixed(1)}px;display:flex;flex-direction:column;justify-content:flex-end">
      ${photoEl(photoSm,`top:${(14/300*h).toFixed(1)}px;right:${(14/300*w).toFixed(1)}px`)}
      ${badgeEl}${titleEl(18)}${bodyEl(9)}
    </div>`;
  } else if(layout===3) {
    const bullets=['Freie Zeit','Eigenes Team','Kein Limit'];
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.primary};padding:${(14/300*h).toFixed(1)}px">
      ${badgeEl}${titleEl(13)}
      ${bullets.map(b=>`<div style="background:rgba(255,255,255,0.08);border-radius:4px;padding:${(5/300*h).toFixed(1)}px ${(8/300*w).toFixed(1)}px;margin-bottom:${(4/300*h).toFixed(1)}px;display:flex;align-items:center;gap:6px"><span style="color:${p.accent};font-size:10px">âœ“</span><span style="color:${p.text};font-size:${(9/300*h).toFixed(1)}px;font-family:sans-serif">${b}</span></div>`).join('')}
      ${photoEl(photoSm,`bottom:${(14/300*h).toFixed(1)}px;right:${(14/300*w).toFixed(1)}px`)}
    </div>`;
  } else if(layout===4) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.accent};padding:${(22/300*h).toFixed(1)}px;display:flex;flex-direction:column;justify-content:center">
      <div style="width:28px;height:2px;background:rgba(255,255,255,0.6);margin-bottom:${(12/300*h).toFixed(1)}px"></div>
      ${titleEl(15)}${bodyEl(9)}
      <div style="margin-top:${(14/300*h).toFixed(1)}px;display:flex;align-items:center;gap:8px">
        <div style="width:${photoSm*0.55}px;height:${photoSm*0.55}px;border-radius:50%;overflow:hidden;border:1.5px solid rgba(255,255,255,0.4);${imgSrc?'':'background:rgba(255,255,255,0.15)'}">
          ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:''}
        </div>
        <span style="font-size:${(9/300*h).toFixed(1)}px;font-family:sans-serif;color:rgba(255,255,255,0.8)">VermÃ¶gensberatung</span>
      </div>
    </div>`;
  } else if(layout===5) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.primary};padding:${(20/300*h).toFixed(1)}px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
      <div style="font-size:${(30/300*h).toFixed(1)}px;color:${p.accent};line-height:0.8;margin-bottom:8px">"</div>
      ${titleEl(14)}
      <div style="width:28px;height:1.5px;background:${p.accent};margin:${(8/300*h).toFixed(1)}px auto"></div>
      <div style="width:${photoSm*0.7}px;height:${photoSm*0.7}px;border-radius:50%;overflow:hidden;border:2px solid ${p.accent};${imgSrc?'':'background:rgba(255,255,255,0.1)'}">
        ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:''}
      </div>
    </div>`;
  } else if(layout===6) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;overflow:hidden">
      ${imgSrc?`<img src="${imgSrc}" style="position:absolute;width:100%;height:100%;object-fit:cover;opacity:0.4">`:`<div style="position:absolute;width:100%;height:100%;background:${p.accent};opacity:0.3"></div>`}
      <div style="position:absolute;inset:0;background:linear-gradient(to top, ${p.primary} 55%, transparent)"></div>
      <div style="position:absolute;bottom:0;padding:${(18/300*h).toFixed(1)}px">
        ${badgeEl}${titleEl(17)}
      </div>
    </div>`;
  } else if(layout===7) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;overflow:hidden;background:${p.primary}">
      <div style="position:absolute;top:0;left:0;width:55%;height:100%;background:${p.accent};clip-path:polygon(0 0,85% 0,100% 100%,0 100%)"></div>
      <div style="position:absolute;top:${(16/300*h).toFixed(1)}px;left:${(14/300*w).toFixed(1)}px;width:42%">
        <div style="width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;${imgSrc?'':'background:rgba(255,255,255,0.15)'}">
          ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:''}
        </div>
      </div>
      <div style="position:absolute;right:${(12/300*w).toFixed(1)}px;top:${(16/300*h).toFixed(1)}px;width:42%">
        ${badgeEl}${titleEl(13)}
      </div>
    </div>`;
  } else if(layout===8) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.primary};padding:${(14/300*h).toFixed(1)}px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:${(10/300*h).toFixed(1)}px">
        ${badgeEl}
        <div style="width:${photoSm*0.6}px;height:${photoSm*0.6}px;border-radius:4px;overflow:hidden;${imgSrc?'':'background:rgba(255,255,255,0.1)'}">
          ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:''}
        </div>
      </div>
      ${titleEl(13)}
      ${['â†’ Freie Zeiteinteilung','â†’ Eigenes Team aufbauen','â†’ Unlimitiertes Einkommen'].map(b=>`<div style="font-family:sans-serif;font-size:${(8.5/300*h).toFixed(1)}px;color:rgba(255,255,255,0.7);margin-bottom:3px">${b}</div>`).join('')}
    </div>`;
  } else if(layout===9) {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:#111;padding:${(18/300*h).toFixed(1)}px;display:flex;flex-direction:column;justify-content:flex-end">
      ${photoEl(photoSm,`top:${(14/300*h).toFixed(1)}px;right:${(14/300*w).toFixed(1)}px`)}
      <div style="font-family:sans-serif;font-size:${(8/300*h).toFixed(1)}px;letter-spacing:0.15em;text-transform:uppercase;color:${p.accent};margin-bottom:${(6/300*h).toFixed(1)}px">${content.tag}</div>
      <div style="font-family:Georgia,serif;font-size:${(18/300*h).toFixed(1)}px;font-weight:900;color:#fff;line-height:1.1;text-transform:uppercase;margin-bottom:${(6/300*h).toFixed(1)}px">${content.title}</div>
      <div style="width:100%;height:1px;background:${p.accent}"></div>
    </div>`;
  } else {
    html=`<div style="position:relative;width:${w}px;height:${h}px;background:${p.accent};padding:${(16/300*h).toFixed(1)}px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:${(10/300*h).toFixed(1)}px">
        <div style="font-family:monospace;font-size:${(8/300*h).toFixed(1)}px;color:rgba(255,255,255,0.7);letter-spacing:0.1em">MAGAZIN</div>
        <div style="width:${photoSm*0.5}px;height:${photoSm*0.5}px;border-radius:4px;overflow:hidden;${imgSrc?'':'background:rgba(255,255,255,0.15)'}">
          ${imgSrc?`<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover">`:''}
        </div>
      </div>
      <div style="font-size:${(8/300*h).toFixed(1)}px;color:rgba(255,255,255,0.7);font-family:sans-serif;margin-bottom:4px">â€” ${content.tag}</div>
      ${titleEl(14)}${bodyEl(8.5)}
    </div>`;
  }
  return html;
}

function renderPreview(elId, layoutId, paletteIdx, content, imgSrc, formatId) {
  const el = document.getElementById(elId);
  if(!el || !content) return;
  const fmt = FORMATS.find(f=>f.id===formatId) || FORMATS[0];
  const p = PALETTES[paletteIdx||0];
  el.innerHTML = buildPostPreview(layoutId||2, p, content, imgSrc, fmt.w, fmt.h);
  el.style.width = fmt.w+'px';
  el.style.height = fmt.h+'px';
}

function updateAllPreviews() {
  const c = state.selectedContent;
  const fid = state.selectedFormat || 'ig-post';
  const lid = state.selectedDesign || 2;
  const pidx = state.selectedPalette;
  const img = state.uploadedImg;
  ['post-preview-el','post-preview-el2','post-preview-el3','post-preview-el4'].forEach(id=>{
    renderPreview(id, lid, pidx, c, img, fid);
  });
  const pname = PALETTES[pidx].name;
  const dname = (DESIGNS.find(d=>d.id===lid)||{name:'Kein Design'}).name;
  ['preview-design-name','preview-design-name2','preview-design-name3','preview-design-name4'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=dname;
  });
  ['preview-palette-name','preview-palette-name2','preview-palette-name3','preview-palette-name4'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=pname;
  });
}

// â”€â”€â”€ SHOP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function filterCat(cat, btn) {
  state.activeCat = cat;
  document.querySelectorAll('#cat-filters .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function setFormatFilter(fmt, badge) {
  state.activeFormat = fmt;
  document.querySelectorAll('.format-strip .format-badge').forEach(b=>b.classList.remove('active'));
  badge.classList.add('active');
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const list = state.activeCat==='alle' ? CONTENTS : CONTENTS.filter(c=>c.cat===state.activeCat);
  grid.innerHTML = list.map(content => {
    const p = PALETTES[content.id % 10];
    const preview = buildPostPreview(content.id % 10 + 1, p, content, null, 200, 250);
    return `<div class="product-card" data-content-id="${content.id}">
      <div class="product-preview" onclick="openPreview(${content.id})" style="cursor:pointer">
        <div style="position:relative;overflow:hidden;line-height:0">${preview}<div class="wm-overlay"><div class="wm-text"><span class="wm-line1">Merkert</span><span class="wm-line2">Social Media</span></div></div></div>
        <div class="product-overlay">
          <button class="overlay-btn" onclick="event.stopPropagation();openPreview(${content.id})">Vorschau â†—</button>
          <button class="overlay-btn-outline" onclick="event.stopPropagation();startConfig(${content.id})">Design anpassen â†’</button>
        </div>
      </div>
      <div class="product-info" onclick="startConfig(${content.id})" style="cursor:pointer">
        <span class="product-cat">${content.cat}</span>
        <p class="product-title">${content.title}</p>
        <div class="product-footer">
          <span class="product-price">ab â‚¬9,80</span>
          <span class="product-formats">10 Designs Â· 10 Farben</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// â”€â”€â”€ PREVIEW MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function openPreview(contentId) {
  const content = CONTENTS.find(c => c.id === contentId);
  if (!content) return;
  const p = PALETTES[content.id % 10];
  const preview = buildPostPreview(content.id % 10 + 1, p, content, null, 360, 450);
  document.getElementById('preview-modal-content').innerHTML = preview;
  document.getElementById('preview-modal-title').textContent = content.title;
  const configBtn = document.getElementById('preview-modal-config-btn');
  configBtn.style.display = '';
  configBtn.onclick = () => { closePreview(); startConfig(contentId); };
  document.getElementById('preview-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  document.getElementById('preview-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function openCartItemPreview(idx) {
  const item = state.cart[idx];
  if (!item) return;
  const h = Math.round(360 * item.format.h / item.format.w);
  const preview = buildPostPreview(item.design.id, item.palette, item.content, item.img, 360, h);
  document.getElementById('preview-modal-content').innerHTML = preview;
  document.getElementById('preview-modal-title').textContent = item.content.title + ' Â· ' + item.design.name + ' Â· ' + item.palette.name;
  document.getElementById('preview-modal-config-btn').style.display = 'none';
  document.getElementById('preview-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// â”€â”€â”€ CONFIGURATOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function startConfig(contentId) {
  state.selectedContent = CONTENTS.find(c=>c.id===contentId);
  state.selectedFormat = null;
  state.selectedDesign = null;
  state.step = 1;
  document.getElementById('config-content-title').textContent = '"'+state.selectedContent.title+'"';
  document.getElementById('config-modal').classList.add('open');
  document.getElementById('cart-page').style.display='none';
  document.body.style.overflow='hidden';
  goStep(1);
  updateAllPreviews();
}

function goStep(n) {
  state.step = n;
  [1,2,3,4].forEach(i=>{
    document.getElementById('step'+i+'-content').style.display = i===n?'block':'none';
    const cs = document.getElementById('cs'+i);
    cs.classList.remove('active','done');
    if(i===n) cs.classList.add('active');
    else if(i<n) cs.classList.add('done');
  });
  if(n===1) renderFormatSelector();
  if(n===2) renderDesignGrid();
  if(n===3) renderPaletteGrid();
  updateAllPreviews();
  window.scrollTo(0,0);
}

function renderFormatSelector() {
  const el = document.getElementById('format-selector');
  el.innerHTML = FORMATS.map(f => `
    <div class="format-option${state.selectedFormat===f.id?' selected':''}" onclick="selectFormat('${f.id}',this)">
      <div class="format-name">${f.name}</div>
      <div class="format-dim">${f.dim} Â· ${f.ratio}</div>
      <div class="format-platform">${f.platforms.map(p=>`<span class="platform-tag">${p}</span>`).join('')}</div>
    </div>`).join('');
}

function selectFormat(id, el) {
  state.selectedFormat = id;
  document.querySelectorAll('.format-option').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('btn-next-1').disabled = false;
  updateAllPreviews();
}

function renderDesignGrid() {
  const el = document.getElementById('design-grid-config');
  const fmt = FORMATS.find(f=>f.id===state.selectedFormat) || FORMATS[0];
  el.innerHTML = DESIGNS.map(d => {
    const prev = buildPostPreview(d.id, PALETTES[state.selectedPalette], state.selectedContent, state.uploadedImg, 130, Math.round(130*fmt.h/fmt.w));
    return `<div class="design-card${state.selectedDesign===d.id?' selected':''}" style="position:relative" onclick="selectDesign(${d.id})">
      <div class="design-mini-wrap" style="overflow:hidden">${prev}</div>
      ${state.selectedDesign===d.id?'<div class="design-check">âœ“</div>':''}
      <div class="design-label">
        <div class="design-name">${d.name}</div>
        <div class="design-desc">${d.desc}</div>
      </div>
    </div>`;
  }).join('');
}

function selectDesign(id) {
  state.selectedDesign = id;
  document.getElementById('btn-next-2').disabled = false;
  renderDesignGrid();
  updateAllPreviews();
}

function renderPaletteGrid() {
  const el = document.getElementById('palette-grid');
  el.innerHTML = PALETTES.map((p,i) => `
    <div class="palette-item${state.selectedPalette===i?' selected':''}" onclick="selectPalette(${i})">
      <div class="palette-dots">
        <div class="palette-dot" style="background:${p.primary}"></div>
        <div class="palette-dot" style="background:${p.accent}"></div>
      </div>
      <div class="palette-name">${p.name}</div>
    </div>`).join('');
}

function selectPalette(i) {
  state.selectedPalette = i;
  renderPaletteGrid();
  updateAllPreviews();
}

function handleUpload(input) {
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    state.uploadedImg = e.target.result;
    document.getElementById('upload-thumb').src = e.target.result;
    document.getElementById('upload-preview-row').style.display='flex';
    updateAllPreviews();
  };
  reader.readAsDataURL(file);
}

function removeUpload() {
  state.uploadedImg = null;
  document.getElementById('upload-preview-row').style.display='none';
  document.getElementById('file-input').value='';
  updateAllPreviews();
}

// â”€â”€â”€ CART â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function addToCart() {
  const fmt = FORMATS.find(f=>f.id===state.selectedFormat)||FORMATS[0];
  const design = DESIGNS.find(d=>d.id===state.selectedDesign)||DESIGNS[0];
  const palette = PALETTES[state.selectedPalette];
  state.cart.push({
    id: Date.now(),
    content: state.selectedContent,
    format: fmt, design, palette,
    img: state.uploadedImg,
    price: 9.80
  });
  document.getElementById('cart-count').textContent = state.cart.length;
  showToast('Design zum Warenkorb hinzugefÃ¼gt!');
  showShop();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i=>i.id!==id);
  document.getElementById('cart-count').textContent = state.cart.length;
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const summary = document.getElementById('cart-summary-box');
  if(state.cart.length===0){
    list.innerHTML='<p style="color:var(--warm-brown);font-family:sans-serif;font-size:14px;padding:3rem 0 1rem">Dein Warenkorb ist leer.</p>';
    summary.innerHTML='<button class="btn-primary" onclick="showShop()">Zum Shop â†’</button>';
    return;
  }
  list.innerHTML = state.cart.map((item, cartIdx) => {
    const prev = buildPostPreview(item.design.id, item.palette, item.content, item.img, 70, Math.round(70*item.format.h/item.format.w));
    return `<div class="cart-item">
      <div class="cart-thumb" style="position:relative;overflow:hidden;line-height:0">${prev}<div class="wm-overlay"><div class="wm-text"><span class="wm-line1" style="font-size:9px">Merkert</span><span class="wm-line2" style="font-size:7px">Social Media</span></div></div></div>
      <div class="cart-info">
        <p class="cart-item-title">${item.content.title}</p>
        <p class="cart-item-meta">${item.design.name} Â· ${item.palette.name} Â· ${item.format.name}</p>
        <p class="cart-item-meta">${item.img?'Foto hochgeladen âœ“':'Kein Foto'}</p>
        <button class="cart-preview-btn" onclick="openCartItemPreview(${cartIdx})">Design ansehen â†’</button>
      </div>
      <span class="cart-price">â‚¬${item.price.toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">âœ•</button>
    </div>`;
  }).join('');
  const total = state.cart.reduce((s,i)=>s+i.price,0);
  const tax = total*0.19;
  summary.innerHTML=`<div class="cart-summary">
    <div class="summary-row"><span>Zwischensumme</span><span>â‚¬${total.toFixed(2)}</span></div>
    <div class="summary-row"><span>MwSt. (19%)</span><span>â‚¬${tax.toFixed(2)}</span></div>
    <div class="summary-row summary-total"><span>Gesamt</span><span>â‚¬${(total+tax).toFixed(2)}</span></div>
    <button class="checkout-btn" id="checkout-btn" onclick="startStripeCheckout()">Jetzt sicher bezahlen â†’</button>
  </div>`;
}

function showCart() {
  document.getElementById('shop-page').style.display='none';
  document.getElementById('config-modal').classList.remove('open');
  document.getElementById('cart-page').style.display='block';
  document.body.style.overflow='';
  renderCart();
  window.scrollTo(0,0);
}

function showShop() {
  document.getElementById('shop-page').style.display='block';
  document.getElementById('config-modal').classList.remove('open');
  document.getElementById('cart-page').style.display='none';
  document.body.style.overflow='';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent=msg; t.style.display='block';
  setTimeout(()=>t.style.display='none',2500);
}

// â”€â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
renderProducts();

