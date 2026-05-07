(function(){
  var MSGS={
    shop:[
      {t:"Hey, ich bin Anna! ðŸ‘‹",b:"Klick auf ein Design â€“ ich helfe dir beim Personalisieren."},
      {t:"Wusstest du? ðŸ“Š",b:"81% der Kunden informieren sich auf Social Media, bevor sie einem Berater vertrauen."},
      {t:"Berufsstarter? ðŸŽ",b:"Neu gestartet? Sprich deinen Coach an â€“ er kann dir das Berufsstarter-Bundle kaufen. 50 Posts, sofort startklar!"},
      {t:"Social Media Fakt",b:"Profile, die 3â€“5Ã— pro Woche posten, wachsen 5Ã— schneller als inaktive Profile."},
      {t:"FÃ¼r dein Team ðŸ’¼",b:"Dein Gruppenleiter kann das Berufsstarter-Bundle fÃ¼r dich bestellen â€“ einfach ansprechen!"},
      {t:"Wusstest du? ðŸ“±",b:"Instagram-Posts mit Gesicht erzielen 38% mehr Likes als Posts ohne Person."},
      {t:"Social Media Fakt",b:"Die beste Zeit fÃ¼r LinkedIn: Dienstag bis Donnerstag zwischen 8 und 10 Uhr morgens."},
      {t:"Coach-Tipp ðŸ¤",b:"Gruppenleiter: Starte deine neuen Berater mit fertigen Posts â€“ das Berufsstarter-Bundle gibt ihnen sofort Sichtbarkeit."},
      {t:"Wusstest du? ðŸ“ˆ",b:"Stories bekommen 34% mehr Views, wenn du abends zwischen 18â€“21 Uhr postest."},
      {t:"Social Media Fakt",b:"Konsistentes Posting verdreifacht die organische Reichweite innerhalb von 3 Monaten."},
      {t:"Berufsstarter-Tipp",b:"Frag deinen Coach nach dem Berufsstarter-Bundle â€“ 50 personalisierte Posts als Willkommensgeschenk zum Start."},
      {t:"Wusstest du? ðŸ‘€",b:"65% der Nutzer entscheiden in der ersten Sekunde, ob sie stehenbleiben. Ein gutes Design macht den Unterschied."},
      {t:"Social Media Fakt",b:"87% der Menschen folgen Konten, die authentische Behind-the-Scenes-Inhalte teilen."},
      {t:"Tipp",b:"Lade dein Foto hoch und sieh sofort, wie dein Post mit deinem Gesicht wirkt."},
      {t:"Wusstest du? ðŸ”¥",b:"Reels mit echten Personen haben 2Ã— hÃ¶here Speicherrate als reine Grafikposts."},
      {t:"Social Media Fakt",b:"VermÃ¶gensberater mit aktivem Social-Media-Profil gewinnen im Schnitt 4 neue Kontakte pro Monat darÃ¼ber."},
    ],
    step1:[
      {t:"Format wÃ¤hlen ðŸ“±",b:"Stories (9:16) sehen auf dem Handy am stÃ¤rksten aus â€“ meistgenutztes Format!"},
      {t:"Tipp",b:"Quadrat-Posts funktionieren super fÃ¼r LinkedIn und den Feed gleichzeitig."},
      {t:"Social Media Fakt",b:"Stories werden tÃ¤glich von Ã¼ber 500 Millionen Menschen angeschaut."},
      {t:"Wusstest du?",b:"Hochformat-Posts nehmen auf dem Handy 78% mehr BildschirmflÃ¤che ein als Quadrat."},
    ],
    step2:[
      {t:"Design wÃ¤hlen âœ¨",b:"Das Layout 'Editorial' wirkt besonders professionell â€“ mein persÃ¶nlicher Fav!"},
      {t:"Tipp",b:"FÃ¼r Teamaufbau-Posts passt 'Zitat' super â€“ sehr persÃ¶nlich und authentisch."},
      {t:"Wusstest du?",b:"Posts mit klarer Typografie werden 25% lÃ¤nger betrachtet als unstrukturierte Grafiken."},
    ],
    step3:[
      {t:"Farbpalette ðŸŒ¿",b:"ErdtÃ¶ne passen perfekt zu Fotos im Freien und wirken warm und vertrauenswÃ¼rdig."},
      {t:"Tipp",b:"WÃ¤hle Farben, die du auch in deinem Profil verwendest â€“ das wirkt konsistent."},
      {t:"Social Media Fakt",b:"Markenfarben steigern die Wiedererkennung auf Social Media um bis zu 80%."},
    ],
    step4:[
      {t:"Fast fertig! ðŸŽ‰",b:"Dein Foto macht den Post wirklich persÃ¶nlich. Hochformat wirkt am besten!"},
      {t:"Tipp",b:"Gutes Frontlicht und neutraler Hintergrund â€“ das sieht am schÃ¶nsten aus."},
      {t:"Wusstest du?",b:"Posts mit echtem Gesicht bekommen 3Ã— mehr Kommentare als solche ohne Person."},
    ],
    cart:[
      {t:"Super Auswahl! ðŸ›’",b:"Beim Kauf erhÃ¤ltst du alle Formate als PNG-Dateien zum sofortigen Download."},
      {t:"FÃ¼r Gruppenleiter",b:"MÃ¶chtest du das fÃ¼r einen Berufsstarter kaufen? Schreib mir kurz â€“ ich mach das mÃ¶glich!"},
    ],
  };

  var ctx='shop',idx=0,hideT=null;
  var rightPx=32,walkDir=-1;

  function getCtx(){
    var cp=document.getElementById('cart-page');
    if(cp&&cp.style.display==='block') return 'cart';
    var cfp=document.getElementById('config-modal');
    if(cfp&&cfp.classList.contains('open')){
      for(var i=1;i<=4;i++){
        var el=document.getElementById('step'+i+'-content');
        if(el&&el.style.display!=='none') return 'step'+i;
      }
      return 'step1';
    }
    return 'shop';
  }

  function showMsg(m){
    var b=document.getElementById('ki-bubble');
    b.innerHTML='<strong>'+m.t+'</strong>'+m.b;
    b.classList.add('on');
    var el=document.getElementById('ki-anna');
    el.classList.remove('ki-wave');
    void el.offsetWidth;
    el.classList.add('ki-wave');
    setTimeout(function(){el.classList.remove('ki-wave');},2800);
    clearTimeout(hideT);
    hideT=setTimeout(function(){b.classList.remove('on');},5500);
  }

  function nextMsg(){
    var c=getCtx();
    if(c!==ctx){ctx=c;idx=0;}
    var pool=MSGS[ctx]||MSGS.shop;
    showMsg(pool[idx%pool.length]);
    idx++;
  }

  window.kiClick=function(e){
    if(e.target.closest&&e.target.closest('#ki-close')) return;
    nextMsg();
  };

  window.kiClose=function(e){
    e.stopPropagation();
    document.getElementById('ki-anna').style.display='none';
  };

  function walk(){
    var maxRight=Math.min(window.innerWidth*0.45,350);
    rightPx=Math.max(20,Math.min(maxRight,rightPx+walkDir*(40+Math.random()*80)));
    if(rightPx<=22||rightPx>=maxRight) walkDir*=-1;
    var el=document.getElementById('ki-anna');
    el.style.right=rightPx+'px';
  }

  setTimeout(nextMsg,1800);
  setInterval(nextMsg,10000);
  setInterval(walk,18000);
})();

// â”€â”€â”€ CONTENT LIBRARY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const LIB_SAEULES=[
  {id:'s01',icon:'ðŸ‘¥',name:'Teamaufbau & Benefits',cnt:50},
  {id:'s02',icon:'ðŸ“Š',name:'Produktkommunikation',cnt:36},
  {id:'s03',icon:'ðŸ™‹',name:'Personal Brand',cnt:14},
  {id:'s04',icon:'ðŸ“°',name:'Kundenkommunikation',cnt:14},
  {id:'s05',icon:'ðŸ˜„',name:'Memes & Humor',cnt:12},
];
const LIB_BLOCKS=[
  {id:'s01-b1',sid:'s01',name:'Recruiting & Einstieg',cnt:8},
  {id:'s01-b2',sid:'s01',name:'10 gute GrÃ¼nde',cnt:8},
  {id:'s01-b3',sid:'s01',name:'Freiheit & SelbststÃ¤ndigkeit',cnt:5},
  {id:'s01-b4',sid:'s01',name:'Team & Gemeinschaft',cnt:4},
  {id:'s01-b5',sid:'s01',name:'Zielgruppen',cnt:4},
  {id:'s01-b6',sid:'s01',name:'Mindset & Motivation',cnt:4},
  {id:'s01-b7',sid:'s01',name:'Motivations-Zitate',cnt:12},
  {id:'s01-b8',sid:'s01',name:'Saisonal',cnt:5},
  {id:'s02-b9',sid:'s02',name:'Altersvorsorge â€“ Grundlagen',cnt:5},
  {id:'s02-b10',sid:'s02',name:'Altersvorsorge â€“ Produkte',cnt:5},
  {id:'s02-b11',sid:'s02',name:'Absicherung',cnt:6},
  {id:'s02-b12',sid:'s02',name:'Immobilien & Bausparen',cnt:5},
  {id:'s02-b13',sid:'s02',name:'VermÃ¶gensaufbau',cnt:5},
  {id:'s02-b14',sid:'s02',name:'Kidz-Konzept & Familie',cnt:4},
  {id:'s02-b15',sid:'s02',name:'Privatkredit',cnt:2},
  {id:'s02-b16',sid:'s02',name:'Firmenkunden & SelbststÃ¤ndige',cnt:4},
  {id:'s03-b17',sid:'s03',name:'Ãœber mich',cnt:5},
  {id:'s03-b18',sid:'s03',name:'Meine Arbeitsweise',cnt:4},
  {id:'s03-b19',sid:'s03',name:'Behind the Scenes',cnt:5},
  {id:'s04-b20',sid:'s04',name:'Markt & Wirtschaft',cnt:4},
  {id:'s04-b21',sid:'s04',name:'Finanzbildung',cnt:6},
  {id:'s04-b22',sid:'s04',name:'Erstberatung & Kontakt',cnt:4},
  {id:'s05-b23',sid:'s05',name:'Finanz-Humor',cnt:6},
  {id:'s05-b24',sid:'s05',name:'Berater-Alltag',cnt:6},
];
const LIB_DATA=[
  {i:'s01-1-0',b:'s01-b1',h:'Karriere als Finanzcoach starten',c:'Ich wusste nie, wohin mein Weg fÃ¼hren wÃ¼rde'},
  {i:'s01-1-1',b:'s01-b1',h:'Dein Einstieg. Deine Regeln.',c:'Niemand schreibt dir vor, wie du startest'},
  {i:'s01-1-2',b:'s01-b1',h:'Kein Abschluss? Kein Problem. Der Wille zÃ¤hlt.',c:'Was wirklich zÃ¤hlt, ist nicht dein Zeugnis'},
  {i:'s01-1-3',b:'s01-b1',h:'Nach der Schule. Nach dem Studium. Genau jetzt.',c:'Du hast gerade abgeschlossen â€“ und jetzt'},
  {i:'s01-1-4',b:'s01-b1',h:'Branchenkenner aufgepasst. Hier sind deine Chancen.',c:'Du kennst die Branche. Das ist dein Vorteil'},
  {i:'s01-1-5',b:'s01-b1',h:'Nebenberuflich starten â€“ ohne zu kÃ¼ndigen.',c:'Wer sagt, dass du alles aufgeben musst'},
  {i:'s01-1-6',b:'s01-b1',h:'Dein Lebenslauf ist genau richtig so.',c:'Ich hÃ¶re oft: Ich habe keine Erfahrung'},
  {i:'s01-1-7',b:'s01-b1',h:'Ehrlich: So war mein erster Tag als Finanzcoach.',c:'NervÃ¶s, aufgeregt und keine Ahnung was'},
  {i:'s01-2-0',b:'s01-b2',h:'Finanzcoaching: Sinn und Einkommen in einem.',c:'Was, wenn dein Job Menschen wirklich weiterbringt'},
  {i:'s01-2-1',b:'s01-b2',h:'Leistung lohnt sich. Wirklich.',c:'In keinem anderen Job habe ich erlebt'},
  {i:'s01-2-2',b:'s01-b2',h:'SelbststÃ¤ndig â€“ mit starkem RÃ¼ckhalt.',c:'SelbststÃ¤ndig klingt oft nach allein. Ist es aber'},
  {i:'s01-2-3',b:'s01-b2',h:'Erstklassige Ausbildung â€“ von Anfang an.',c:'Bevor ich meinen ersten Kunden beraten hatte'},
  {i:'s01-2-4',b:'s01-b2',h:'Beruf mit Zukunft â€“ auch in 20 Jahren.',c:'Finanzberatung war, ist und bleibt einer der'},
  {i:'s01-2-5',b:'s01-b2',h:'WertschÃ¤tzung die man wirklich spÃ¼rt.',c:'Es sind die kleinen Momente, die zeigen'},
  {i:'s01-2-6',b:'s01-b2',h:'Teamspirit der echten Unterschied macht.',c:'Hinter jedem erfolgreichen Berater steht ein echtes'},
  {i:'s01-2-7',b:'s01-b2',h:'Familienunternehmen â€“ der Mensch steht im Mittelpunkt.',c:'Was ich an meinem Beruf am meisten'},
  {i:'s01-3-0',b:'s01-b3',h:'Kein Chef. Keine festen Schichten. Deine Zeit.',c:'Morgens ausschlafen oder frÃ¼h loslegen â€“ du entscheidest'},
  {i:'s01-3-1',b:'s01-b3',h:'Freie Zeiteinteilung. Kein Gehaltsdeckel.',c:'Zwei Dinge, die selten zusammenpassen â€“ hier schon'},
  {i:'s01-3-2',b:'s01-b3',h:'Homeoffice oder BÃ¼ro? Du entscheidest.',c:'An manchen Tagen ist mein Wohnzimmer das'},
  {i:'s01-3-3',b:'s01-b3',h:'Du baust fÃ¼r dich â€“ nicht fÃ¼r andere.',c:'Jede Stunde, die du investierst, geht auf'},
  {i:'s01-3-4',b:'s01-b3',h:'Sport und Karriere? Beides geht.',c:'Dienstag Mittag Training, Donnerstag KundengesprÃ¤ch. Das geht'},
  {i:'s01-4-0',b:'s01-b4',h:'SelbststÃ¤ndig â€“ aber nie allein.',c:'Wer denkt, SelbststÃ¤ndigkeit bedeutet Einsamkeit, der hat'},
  {i:'s01-4-1',b:'s01-b4',h:'Dein persÃ¶nlicher Karrierecoach. Von Tag 1.',c:'Ich erinnere mich noch gut an mein'},
  {i:'s01-4-2',b:'s01-b4',h:'Events, Erfolge, echte Menschen.',c:'Das Beste an diesem Job sind nicht'},
  {i:'s01-4-3',b:'s01-b4',h:'Gleichheit. Leistung. Chancen fÃ¼r alle.',c:'Egal ob du 22 oder 55 Jahre'},
  {i:'s01-5-0',b:'s01-b5',h:'Frauen in der Finanzberatung. UnterschÃ¤tztes Potenzial.',c:'Warum sind Frauen in der Finanzbranche noch'},
  {i:'s01-5-1',b:'s01-b5',h:'Familie und Karriere. Beides geht.',c:'Mir hat mal jemand gesagt, dass das'},
  {i:'s01-5-2',b:'s01-b5',h:'Profi sein â€“ nicht nur im Sport.',c:'Du bist Sportler und weiÃŸt, was Disziplin'},
  {i:'s01-5-3',b:'s01-b5',h:'Nach der Bank. Neu starten.',c:'Du kennst die Finanzwelt von innen. Das'},
  {i:'s01-6-0',b:'s01-b6',h:'Was wartest du noch?',c:'Du denkst schon lÃ¤nger darÃ¼ber nach. Ich'},
  {i:'s01-6-1',b:'s01-b6',h:'Warum ich jeden Morgen gerne arbeite.',c:'Ich stehe auf und freue mich auf'},
  {i:'s01-6-2',b:'s01-b6',h:'Finanzcoaching ist kreativer als du denkst.',c:'Die meisten stellen sich Finanzberatung trocken vor'},
  {i:'s01-6-3',b:'s01-b6',h:'Deine Zukunft beginnt genau hier.',c:'Nicht morgen. Nicht nach dem nÃ¤chsten Urlaub'},
  {i:'s01-7-0',b:'s01-b7',h:'Der beste Zeitpunkt war gestern. Der zweitbeste ist heute.',c:'Warten ist die teuerste Entscheidung, die du'},
  {i:'s01-7-1',b:'s01-b7',h:'HÃ¤tte. Sollte. KÃ¶nnte. WÃ¼rde. Mach es einfach.',c:'Wie oft habe ich selbst gedacht: Irgendwann'},
  {i:'s01-7-2',b:'s01-b7',h:'Wer fÃ¼r sich selbst arbeitet, arbeitet nie umsonst.',c:'Jeder Einsatz zahlt auf dein eigenes Konto'},
  {i:'s01-7-3',b:'s01-b7',h:'Nicht der Wind entscheidet wo du hinkommst â€“ sondern wie du die Segel setzt.',c:'Im Leben wie im Segeln gilt eines'},
  {i:'s01-7-4',b:'s01-b7',h:'Frei. Eigen. Stark.',c:'Drei Worte. Mein Berufsleben in einem Satz'},
  {i:'s01-7-5',b:'s01-b7',h:'Dein zukÃ¼nftiges Ich wird dir danken.',c:'Stell dir vor, du schaust in fÃ¼nf'},
  {i:'s01-7-6',b:'s01-b7',h:'Menschen brauchen keine Produkte. Sie brauchen Vertrauen.',c:'Ich verkaufe keine Policen. Ich baue Vertrauen'},
  {i:'s01-7-7',b:'s01-b7',h:'Geld verdienen und anderen helfen â€“ kein Widerspruch.',c:'Viele denken: Wenn ich Geld verdiene, geht'},
  {i:'s01-7-8',b:'s01-b7',h:'Jeder Experte war einmal AnfÃ¤nger.',c:'WeiÃŸt du noch, wie du als absoluter'},
  {i:'s01-7-9',b:'s01-b7',h:'Kein Limit auÃŸer dem den du dir selbst setzt.',c:'Das einzige Limit in diesem Beruf bist'},
  {i:'s01-7-10',b:'s01-b7',h:'Die stÃ¤rksten Berater sind nicht die lautesten.',c:'Stille Wasser sind tief. Das gilt auch'},
  {i:'s01-7-11',b:'s01-b7',h:'SelbststÃ¤ndig bedeutet nicht allein. Es bedeutet frei.',c:'Ich bin selbststÃ¤ndig und hatte noch nie'},
  {i:'s01-8-0',b:'s01-b8',h:'Jahresstart: Neue Ziele, neue Chancen.',c:'Welches Ziel nimmst du dir dieses Jahr'},
  {i:'s01-8-1',b:'s01-b8',h:'FrÃ¼hjahr: Jetzt durchstarten.',c:'Der FrÃ¼hling bringt nicht nur wÃ¤rmere Temperaturen'},
  {i:'s01-8-2',b:'s01-b8',h:'Sommer: Flexibel arbeiten von Ã¼berall.',c:'WÃ¤hrend andere Urlaub machen, kann ich arbeiten'},
  {i:'s01-8-3',b:'s01-b8',h:'Herbst: Jetzt Team aufbauen fÃ¼r Q4.',c:'Q4 ist die stÃ¤rkste Jahreszeit. Wer jetzt'},
  {i:'s01-8-4',b:'s01-b8',h:'Was dieses Jahr alles mÃ¶glich war.',c:'Ein Jahr voller Momente, Entscheidungen und echter'},
  {i:'s02-9-0',b:'s02-b9',h:'FrÃ¼her anfangen â€“ mehr haben.',c:'WeiÃŸt du, wie viel Unterschied 10 Jahre'},
  {i:'s02-9-1',b:'s02-b9',h:'Was bedeutet eigentlich VersorgungslÃ¼cke?',c:'Die VersorgungslÃ¼cke ist der Unterschied zwischen dem was'},
  {i:'s02-9-2',b:'s02-b9',h:'Altersvorsorge mit 25 vs. mit 45.',c:'Wer mit 25 anfÃ¤ngt, zahlt deutlich weniger'},
  {i:'s02-9-3',b:'s02-b9',h:'Mehr, Anders, Intelligenter vorsorgen.',c:'Nicht mehr Stunden arbeiten â€“ sondern smarter fÃ¼r'},
  {i:'s02-9-4',b:'s02-b9',h:'3 hÃ¤ufige Fehler bei der Altersvorsorge.',c:'Fast jeder macht mindestens einen dieser drei'},
  {i:'s02-10-0',b:'s02-b10',h:'Riester-Rente: Staatliche FÃ¶rderung clever nutzen.',c:'Viele unterschÃ¤tzen, wie viel der Staat zur Riester'},
  {i:'s02-10-1',b:'s02-b10',h:'Basis-Rente: Besonders fÃ¼r SelbststÃ¤ndige.',c:'Als SelbststÃ¤ndiger hast du keine gesetzliche Rentenversicherung'},
  {i:'s02-10-2',b:'s02-b10',h:'Betriebliche Altersvorsorge: Doppelt gefÃ¶rdert.',c:'Dein Arbeitgeber zahlt mit ein â€“ wusstest du'},
  {i:'s02-10-3',b:'s02-b10',h:'Fondsgebundene Rente: BÃ¶rsenchancen nutzen.',c:'Warum auf Zinsen warten, wenn du mit Fonds'},
  {i:'s02-10-4',b:'s02-b10',h:'Flexibel vorsorgen â€“ und trotzdem absichern.',c:'Vorsorge muss nicht starr und unflexibel sein'},
  {i:'s02-11-0',b:'s02-b11',h:'BerufsunfÃ¤higkeit: Jeder 4. ist betroffen.',c:'Stell dir vor, du kannst morgen nicht'},
  {i:'s02-11-1',b:'s02-b11',h:'Haftpflichtversicherung: Braucht wirklich jeder.',c:'Ein kleines Missgeschick kann sehr schnell sehr'},
  {i:'s02-11-2',b:'s02-b11',h:'Absicherung und Vorsorge clever kombinieren.',c:'Warum nicht beides in einem smarten Konzept'},
  {i:'s02-11-3',b:'s02-b11',h:'Was passiert wenn du nicht mehr arbeiten kannst?',c:'Das ist die Frage, Ã¼ber die niemand'},
  {i:'s02-11-4',b:'s02-b11',h:'FÃ¼r deine Familie: Schutz wenn es darauf ankommt.',c:'Was wÃ¼rde deine Familie tun, wenn du'},
  {i:'s02-11-5',b:'s02-b11',h:'Gesundheit ist dein wertvollstes Gut.',c:'Du versicherst dein Auto und deine Wohnung'},
  {i:'s02-12-0',b:'s02-b12',h:'Eigenheim â€“ ja oder nein?',c:'Die Frage, die fast jeden irgendwann beschÃ¤ftigt'},
  {i:'s02-12-1',b:'s02-b12',h:'Mieten oder kaufen? Was rechnet sich wirklich?',c:'Ich hÃ¶re diese Frage sehr oft. Die'},
  {i:'s02-12-2',b:'s02-b12',h:'Bausparen erklÃ¤rt in 60 Sekunden.',c:'Bausparen klingt altmodisch â€“ ist es aber nicht'},
  {i:'s02-12-3',b:'s02-b12',h:'Eigenkapital aufbauen: So gehst du vor.',c:'Das grÃ¶ÃŸte Hindernis beim Hauskauf ist oft'},
  {i:'s02-12-4',b:'s02-b12',h:'Die 4 Phasen deines Bausparvertrags.',c:'Viele haben einen Bausparvertrag, aber wissen nicht'},
  {i:'s02-13-0',b:'s02-b13',h:'Sparplan statt Sparbuch.',c:'Dein Sparbuch verliert jeden Monat an Kaufkraft'},
  {i:'s02-13-1',b:'s02-b13',h:'Warum das Girokonto keine Sparanlage ist.',c:'Ich sage es direkt: Das Girokonto ist'},
  {i:'s02-13-2',b:'s02-b13',h:'Investmentfonds einfach erklÃ¤rt.',c:'Was ist ein Investmentfonds? Stell dir einen'},
  {i:'s02-13-3',b:'s02-b13',h:'Die Formel fÃ¼r finanzielles GlÃ¼ck: MÂ·AÂ·I',c:'Drei Buchstaben, die alles verÃ¤ndern kÃ¶nnen: Methode'},
  {i:'s02-13-4',b:'s02-b13',h:'Mit kleinen BetrÃ¤gen GroÃŸes erreichen.',c:'Du denkst, 50 Euro im Monat sind'},
  {i:'s02-14-0',b:'s02-b14',h:'Das beste Geschenk fÃ¼r dein Kind.',c:'Kein Spielzeug, keine Kleidung â€“ sondern finanzielle Sicherheit'},
  {i:'s02-14-1',b:'s02-b14',h:'FrÃ¼h anfangen â€“ fÃ¼r deine Kinder.',c:'Der schÃ¶nste Moment ist, wenn ein Elternteil'},
  {i:'s02-14-2',b:'s02-b14',h:'Absicherung fÃ¼r Kinder: Von Geburt an.',c:'Sobald ein Kind auf die Welt kommt'},
  {i:'s02-14-3',b:'s02-b14',h:'Finanzielle UnabhÃ¤ngigkeit fÃ¼r dein Kind.',c:'Was, wenn dein Kind mit 25 bereits'},
  {i:'s02-15-0',b:'s02-b15',h:'Wann ein Kredit wirklich Sinn macht.',c:'Nicht jeder Kredit ist schlecht. Manchmal ist'},
  {i:'s02-15-1',b:'s02-b15',h:'Kredit clever nutzen â€“ meine Tipps.',c:'Ich zeige dir, wie du einen Kredit'},
  {i:'s02-16-0',b:'s02-b16',h:'Als SelbststÃ¤ndige: Bin ich wirklich abgesichert?',c:'Die meisten SelbststÃ¤ndigen wissen gar nicht, wie viel'},
  {i:'s02-16-1',b:'s02-b16',h:'Mitarbeiter binden durch echte Benefits.',c:'Die besten Mitarbeiter bleiben nicht wegen des Gehalts'},
  {i:'s02-16-2',b:'s02-b16',h:'LiquiditÃ¤t im Unternehmen sichern.',c:'Cashflow ist das Blut eines Unternehmens. Ohne'},
  {i:'s02-16-3',b:'s02-b16',h:'Unternehmensrisiken minimieren.',c:'Welche Risiken schlÃ¤fst du gerade weg, ohne es'},
  {i:'s03-17-0',b:'s03-b17',h:'Wer ich bin und warum ich diesen Beruf liebe.',c:'Ich kÃ¶nnte dir jetzt meinen Lebenslauf runterbeten'},
  {i:'s03-17-1',b:'s03-b17',h:'Meine Geschichte als Finanzcoach.',c:'Es begann mit einer einzigen Frage, die'},
  {i:'s03-17-2',b:'s03-b17',h:'Meine 3 Werte: Ehrlichkeit. Kompetenz. Vertrauen.',c:'Alles, was ich tue, basiert auf diesen'},
  {i:'s03-17-3',b:'s03-b17',h:'5 Fakten die du vielleicht nicht wusstest.',c:'Lass mich mich kurz vorstellen â€“ aber mal'},
  {i:'s03-17-4',b:'s03-b17',h:'Was mich von anderen Beratern unterscheidet.',c:'Es gibt viele Finanzberater. Aber hier ist'},
  {i:'s03-18-0',b:'s03-b18',h:'So lÃ¤uft unser erstes GesprÃ¤ch ab.',c:'Du fragst dich, was dich beim ersten'},
  {i:'s03-18-1',b:'s03-b18',h:'Kein Druck. Kein Verkauf. Nur ein echtes GesprÃ¤ch.',c:'Ich verkaufe nicht. Ich berate. Das klingt'},
  {i:'s03-18-2',b:'s03-b18',h:'Warum das ErstgesprÃ¤ch kostenlos ist.',c:'Weil ich erst verstehen mÃ¶chte, was du'},
  {i:'s03-18-3',b:'s03-b18',h:'Warum ich auf Vertrauen setze â€“ nicht auf Verkauf.',c:'Vertrauen kann man nicht kaufen. Man muss'},
  {i:'s03-19-0',b:'s03-b19',h:'Ein Tag in meinem Leben als Finanzcoach.',c:'07:30 Uhr. Kaffee in der Hand. Laptop'},
  {i:'s03-19-1',b:'s03-b19',h:'Mein Homeoffice-Setup.',c:'Von hier aus begleite ich meine Kunden'},
  {i:'s03-19-2',b:'s03-b19',h:'Was ich diese Woche gelernt habe.',c:'Jede Woche bringt neue Erkenntnisse. Diese Woche'},
  {i:'s03-19-3',b:'s03-b19',h:'Mein Morgenritual fÃ¼r produktive Tage.',c:'Wie mein Tag beginnt, so lÃ¤uft er'},
  {i:'s03-19-4',b:'s03-b19',h:'Das hat mich diese Woche Ã¼berrascht.',c:'Manchmal passiert etwas, das einen wirklich zum'},
  {i:'s04-20-0',b:'s04-b20',h:'Was die EZB-Entscheidung fÃ¼r dich bedeutet.',c:'Die EuropÃ¤ische Zentralbank hat entschieden. Aber was'},
  {i:'s04-20-1',b:'s04-b20',h:'Inflation sinkt â€“ was jetzt?',c:'Die Inflation geht zurÃ¼ck. Gut so. Aber'},
  {i:'s04-20-2',b:'s04-b20',h:'Wirtschaftsnachrichten die dich direkt betreffen.',c:'Diese Nachrichten klingen abstrakt. Aber sie haben'},
  {i:'s04-20-3',b:'s04-b20',h:'Zinsen, Inflation, Notenbanken â€“ einfach erklÃ¤rt.',c:'Du fragst dich, was das alles mit'},
  {i:'s04-21-0',b:'s04-b21',h:'3 Finanztipps die wirklich jeder kennen sollte.',c:'Ich wÃ¼nschte, jemand hÃ¤tte mir diese drei'},
  {i:'s04-21-1',b:'s04-b21',h:'Was bedeutet eigentlich Rendite?',c:'Rendite klingt kompliziert. Ist es aber nicht'},
  {i:'s04-21-2',b:'s04-b21',h:'Der Unterschied zwischen Sparen und Vorsorgen.',c:'Die meisten verwechseln beides. Dabei ist der'},
  {i:'s04-21-3',b:'s04-b21',h:'Finanzielle UnabhÃ¤ngigkeit â€“ was steckt dahinter?',c:'Finanzielle UnabhÃ¤ngigkeit bedeutet nicht, MillionÃ¤r zu sein'},
  {i:'s04-21-4',b:'s04-b21',h:'5 Begriffe aus der Finanzwelt â€“ endlich erklÃ¤rt.',c:'VersorgungslÃ¼cke, Rendite, Zinseszins â€“ was steckt wirklich dahinter'},
  {i:'s04-21-5',b:'s04-b21',h:'Was ist der Zinseszins und warum ist er so mÃ¤chtig?',c:'Einstein soll ihn das achte Weltwunder genannt'},
  {i:'s04-22-0',b:'s04-b22',h:'Das ErstgesprÃ¤ch ist kostenlos. Und unverbindlich.',c:'Du zÃ¶gerst noch? Das verstehe ich. Deshalb'},
  {i:'s04-22-1',b:'s04-b22',h:'Nach dem GesprÃ¤ch bist du schlauer. Versprochen.',c:'Keine Verpflichtung, kein Druck â€“ nur mehr Klarheit'},
  {i:'s04-22-2',b:'s04-b22',h:'Deine Fragen â€“ meine Antworten.',c:'Du hast Fragen rund um Finanzen? Dann'},
  {i:'s04-22-3',b:'s04-b22',h:'So erreichst du mich.',c:'Direktnachricht, Kommentar oder der Link in meiner'},
  {i:'s05-23-0',b:'s05-b23',h:'Wenn der Kunde fragt ob er noch warten soll.',c:'Ja, gerne. Warte auf den perfekten Zeitpunkt'},
  {i:'s05-23-1',b:'s05-b23',h:'Ich spare ja schon. Sagt der Mensch mit 3 Abos.',c:'Netflix, Spotify, Amazon Prime und noch fÃ¼nf'},
  {i:'s05-23-2',b:'s05-b23',h:'Das Girokonto als Sparanlage.',c:'Das Geld liegt auf dem Konto. Sicher'},
  {i:'s05-23-3',b:'s05-b23',h:'Was HÃ¤tte-Sollte-KÃ¶nnte-WÃ¼rde wirklich kostet.',c:'WeiÃŸt du, was das teuerste Wort in'},
  {i:'s05-23-4',b:'s05-b23',h:'Wenn der Rentenbescheid ankommt.',c:'Erster Gedanke: Das kann unmÃ¶glich stimmen. Zweiter'},
  {i:'s05-23-5',b:'s05-b23',h:'Altersvorsorge mit 25 vs. mit 45.',c:'Mit 25: Cool, aber ich bin doch'},
  {i:'s05-24-0',b:'s05-b24',h:'Montagsenergie als Finanzcoach.',c:'Montag? Kein Problem. Ich starte sowieso immer'},
  {i:'s05-24-1',b:'s05-b24',h:'Wenn alle fragen was ich eigentlich genau mache.',c:'Ich berate Menschen zu Finanzen. Nein, ich'},
  {i:'s05-24-2',b:'s05-b24',h:'Finanzcoach vs. was meine Familie denkt.',c:'Meine Familie denkt immer noch, ich laufe'},
  {i:'s05-24-3',b:'s05-b24',h:'Der Moment wenn ein Kunde sagt: Jetzt verstehe ich es.',c:'Das ist der Moment, fÃ¼r den ich'},
  {i:'s05-24-4',b:'s05-b24',h:'Kalender voll. Kaffee leer.',c:'Zwei Beratungen, ein Webinar und drei Telefonate'},
  {i:'s05-24-5',b:'s05-b24',h:'Work-Life-Balance als Finanzcoach.',c:'Work-Life-Balance ist kein Ziel. Es ist eine'},
];

// â”€â”€â”€ DESIGN SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const DS_STYLES = [
  {lid:7, label:'Clean & Minimal', desc:'Nur dein Foto und ein starker Hook. Ruhig, zeitlos.', related:[1,4,2,5,3,10]},
  {lid:6, label:'Strukturiert', desc:'Klare Elemente, modernes Layout, Foto im Fokus.', related:[3,8,1,2,5,9]},
  {lid:8, label:'Bold & Dark', desc:'Kontraststark, dunkel â€“ bleibt im Kopf.', related:[9,2,7,6,3,10]},
];

const DS_PALETTES = [
  // Hell & NatÃ¼rlich (helle HintergrÃ¼nde, dunkler Text)
  {name:'Creme & Koralle', desc:'Hell & warm',            swatches:['#F8F2EA','#C67B5A','#2C2420'], pal:{primary:'#F8F2EA',accent:'#C67B5A',text:'#2C2420'}},
  {name:'MintgrÃ¼n',        desc:'Frisch & leicht',        swatches:['#EAF3EA','#5A8060','#1A3020'], pal:{primary:'#EAF3EA',accent:'#5A8060',text:'#1A3020'}},
  {name:'Puderrose',       desc:'Weich & modern',         swatches:['#F5EDEA','#B06070','#2C2420'], pal:{primary:'#F5EDEA',accent:'#B06070',text:'#2C2420'}},
  // Warm & Modern
  {name:'Sandstein',       desc:'Warm & vertrauenswÃ¼rdig',swatches:['#7A5440','#C67B5A','#F0E8DC'], pal:{primary:'#7A5440',accent:'#C67B5A',text:'#fff'}},
  {name:'Terracotta',      desc:'Einladend & lebendig',   swatches:['#7A3A20','#D2714A','#F5E8E0'], pal:{primary:'#7A3A20',accent:'#D2714A',text:'#fff'}},
  {name:'Taubenblau',      desc:'Modern & seriÃ¶s',        swatches:['#3A5878','#88B0D0','#EEF4F8'], pal:{primary:'#3A5878',accent:'#88B0D0',text:'#fff'}},
  // AuffÃ¤llig & Kontrastreich
  {name:'Navy & Gold',     desc:'LuxuriÃ¶s & stark',       swatches:['#1A3060','#D4AF37','#FFF8E8'], pal:{primary:'#1A3060',accent:'#D4AF37',text:'#fff'}, signal:true},
  {name:'Smaragd & Apricot',desc:'Lebendig & kontrastreich',swatches:['#1B5040','#E8A060','#FFF0E8'],pal:{primary:'#1B5040',accent:'#E8A060',text:'#fff'}, signal:true},
  {name:'Lila & Rosa',     desc:'Kreativ & mutig',        swatches:['#5A2870','#E060A0','#FFF0F8'], pal:{primary:'#5A2870',accent:'#E060A0',text:'#fff'}, signal:true},
];

let dsState = {styleIdx:null, paletteIdx:null, customPal:null};

function initDesignSection(){
  const el=document.getElementById('ds-style-cards');
  if(!el)return;
  const ct=CONTENTS[0];
  var initPals=[0,3,6];
  el.innerHTML=DS_STYLES.map(function(s,i){
    const prev=buildPostPreview(s.lid, DS_PALETTES[initPals[i]].pal, ct, null, 120, 150);
    return '<details class="ds-item" id="dsi-'+i+'">'
      +'<summary class="ds-item-summary">'
        +'<div class="ds-item-prev">'+prev+'</div>'
        +'<div class="ds-item-meta">'
          +'<div class="ds-item-label">'+s.label+'</div>'
          +'<div class="ds-item-desc">'+s.desc+'</div>'
        +'</div>'
        +'<span class="ds-item-arrow">â–¼</span>'
      +'</summary>'
      +'<div class="ds-item-body" id="dsb-'+i+'"></div>'
    +'</details>';
  }).join('');
  el.querySelectorAll('.ds-item').forEach(function(det,i){
    det.addEventListener('toggle',function(){
      if(this.open){
        el.querySelectorAll('.ds-item').forEach(function(d,j){if(j!==i&&d.open)d.removeAttribute('open');});
        dsState.styleIdx=i; dsState.paletteIdx=null; dsState.customPal=null;
        renderDsItemBody(i);
      }
    });
  });
}

function dsPalCard(p,idx){
  const sw=p.swatches.map(function(c){return '<div class="ds-swatch" style="background:'+c+'"></div>';}).join('');
  const cls='ds-pal-opt'+(p.signal?' signal':p.light?' light':'');
  return '<div class="'+cls+'" id="dsp-'+idx+'" data-dspal="'+idx+'">'
    +'<div class="ds-swatches">'+sw+'</div>'
    +'<div class="ds-pal-name">'+p.name+'</div>'
    +'<div class="ds-pal-desc">'+p.desc+'</div>'
    +'</div>';
}

function renderDsItemBody(si){
  const s=DS_STYLES[si];
  const ct=CONTENTS[0];
  const body=document.getElementById('dsb-'+si);
  if(!body)return;
  var initPalIdx=[0,3,6][si]||0;
  const prev=buildPostPreview(s.lid, DS_PALETTES[initPalIdx].pal, ct, null, 155, 194);
  const light=DS_PALETTES.slice(0,3).map(function(p,i){return dsPalCard(p,i);}).join('');
  const warm=DS_PALETTES.slice(3,6).map(function(p,i){return dsPalCard(p,i+3);}).join('');
  const signal=DS_PALETTES.slice(6,9).map(function(p,i){return dsPalCard(p,i+6);}).join('');
  body.innerHTML=
    '<div class="ds-body-wrap">'
      +'<div class="ds-body-left">'
        +'<div class="ds-sec-title">Hell & NatÃ¼rlich</div>'
        +'<div class="ds-pal-grid">'+light+'</div>'
        +'<div class="ds-sec-title">Warm & Modern</div>'
        +'<div class="ds-pal-grid">'+warm+'</div>'
        +'<div class="ds-sec-title">AuffÃ¤llig & Kontrastreich</div>'
        +'<div class="ds-pal-grid">'+signal+'</div>'
        +'<div class="ds-custom-wrap">'
          +'<div class="ds-custom-label">Eigene Farben</div>'
          +'<div class="ds-custom-3">'
            +'<div class="ds-color-row"><span class="ds-color-role">Hauptfarbe</span><div class="ds-color-inputs"><input type="color" class="ds-cp" id="ds-c1" value="#2C2420" style="width:36px;height:32px;border:none;border-radius:5px;cursor:pointer;padding:2px;flex-shrink:0"><input type="text" class="ds-hex ds-ht" id="ds-h1" value="#2C2420" maxlength="7"></div></div>'
            +'<div class="ds-color-row"><span class="ds-color-role">Akzentfarbe</span><div class="ds-color-inputs"><input type="color" class="ds-cp" id="ds-c2" value="#C67B5A" style="width:36px;height:32px;border:none;border-radius:5px;cursor:pointer;padding:2px;flex-shrink:0"><input type="text" class="ds-hex ds-ht" id="ds-h2" value="#C67B5A" maxlength="7"></div></div>'
            +'<div class="ds-color-row"><span class="ds-color-role">Textfarbe</span><div class="ds-color-inputs"><input type="color" class="ds-cp" id="ds-c3" value="#FFFFFF" style="width:36px;height:32px;border:none;border-radius:5px;cursor:pointer;padding:2px;flex-shrink:0"><input type="text" class="ds-hex ds-ht" id="ds-h3" value="#FFFFFF" maxlength="7"></div></div>'
          +'</div>'
          +'<label class="ds-logo-lbl">ðŸ“Ž Logo hochladen &amp; Farben Ã¼bernehmen <input type="file" accept="image/*" style="display:none"></label>'
        +'</div>'
      +'</div>'
      +'<div class="ds-body-right">'
        +'<div class="ds-live-label">Vorschau</div>'
        +'<div class="ds-live-prev-wrap"><div id="ds-live-prev">'+prev+'</div></div>'
        +'<button id="ds-quiz-btn" style="margin-top:1rem;background:var(--coral);color:white;border:none;padding:11px 20px;border-radius:4px;font-family:sans-serif;font-size:13px;font-weight:600;cursor:pointer;width:100%">Design anpassen &amp; bestellen â†’</button>'
      +'</div>'
    +'</div>';
  body.querySelectorAll('[data-dspal]').forEach(function(el){
    el.addEventListener('click',function(){selectDsPalette(parseInt(this.getAttribute('data-dspal')));});
  });
  body.querySelectorAll('.ds-cp').forEach(function(el){
    el.addEventListener('input',dsCustom3);
  });
  body.querySelectorAll('.ds-ht').forEach(function(el){
    el.addEventListener('input',function(){dsHex3(parseInt(this.id.replace('ds-h','')),this.value);});
  });
  body.querySelector('.ds-logo-lbl input').addEventListener('change',function(){dsExtractLogo(this);});
  body.querySelector('#ds-quiz-btn').addEventListener('click',startQuiz);
}

function selectDsPalette(idx){
  dsState.paletteIdx=idx; dsState.customPal=null;
  document.querySelectorAll('.ds-pal-opt').forEach(function(el){
    el.classList.toggle('active', el.getAttribute('data-dspal')==String(idx));
  });
  dsUpdateLivePreview(DS_PALETTES[idx].pal);
}

function dsUpdateLivePreview(pal){
  var s=dsState.styleIdx!==null?DS_STYLES[dsState.styleIdx]:null;
  var lp=document.getElementById('ds-live-prev');
  if(lp&&s)lp.innerHTML=buildPostPreview(s.lid,pal,CONTENTS[0],null,155,194);
}

function dsCustom3(){
  var c1=document.getElementById('ds-c1'); var c2=document.getElementById('ds-c2'); var c3=document.getElementById('ds-c3');
  if(!c1||!c2||!c3)return;
  var h1=document.getElementById('ds-h1'); var h2=document.getElementById('ds-h2'); var h3=document.getElementById('ds-h3');
  if(h1)h1.value=c1.value; if(h2)h2.value=c2.value; if(h3)h3.value=c3.value;
  dsState.customPal={primary:c1.value,accent:c2.value,text:c3.value};
  dsState.paletteIdx=-1;
  document.querySelectorAll('.ds-pal-opt').forEach(function(el){el.classList.remove('active');});
  dsUpdateLivePreview(dsState.customPal);
}

function dsHex3(n,val){
  if(/^#[0-9A-Fa-f]{6}$/.test(val)){
    var cp=document.getElementById('ds-c'+n);
    if(cp){cp.value=val; dsCustom3();}
  }
}

function dsExtractLogo(input){
  var file=input.files[0]; if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    var img=new Image();
    img.onload=function(){
      var cv=document.createElement('canvas');
      cv.width=img.width; cv.height=img.height;
      var ctx=cv.getContext('2d');
      ctx.drawImage(img,0,0);
      var d=ctx.getImageData(0,0,img.width,img.height).data;
      var r=0,g=0,b=0,n=0;
      for(var i=0;i<d.length;i+=16){if(d[i+3]>128){r+=d[i];g+=d[i+1];b+=d[i+2];n++;}}
      if(n){
        var hex='#'+[Math.round(r/n),Math.round(g/n),Math.round(b/n)].map(function(v){return v.toString(16).padStart(2,'0');}).join('');
        var drk='#'+[r,g,b].map(function(v){return Math.round(v/n*0.5).toString(16).padStart(2,'0');}).join('');
        var c1=document.getElementById('ds-c1'),h1=document.getElementById('ds-h1');
        var c2=document.getElementById('ds-c2'),h2=document.getElementById('ds-h2');
        if(c1){c1.value=drk; if(h1)h1.value=drk;}
        if(c2){c2.value=hex; if(h2)h2.value=hex;}
        dsCustom3();
      }
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
}

let _libActive=null;

function buildLibrary(){
  const acc=document.getElementById('lib-accordion');
  if(!acc)return;
  let html='';
  LIB_SAEULES.forEach(s=>{
    const blocks=LIB_BLOCKS.filter(b=>b.sid===s.id);
    html+=`<div class="lib-saeule" id="ls-${s.id}">`;
    html+=`<div class="s-hdr"><span class="s-icon">${s.icon}</span><span class="s-title">${s.name}</span><span class="s-cnt">${s.cnt} Posts</span></div>`;
    html+=`<div class="blist" id="g-${s.id}">`;
    blocks.forEach(bl=>{
      const posts=LIB_DATA.filter(p=>p.b===bl.id);
      html+=`<div data-bwrap="${bl.id}" id="w-${bl.id}">`;
      html+=`<button class="bbtn" id="b-${bl.id}"><span class="bt">${bl.name}</span><span class="bc">${bl.cnt} Posts</span><span class="ba">â–¶</span></button>`;
      html+=`</div>`;
      html+=`<div class="panel" id="p-${bl.id}">`;
      html+=`<div class="p-hdr"><h3>${bl.name}</h3><button class="p-close">âœ•</button></div>`;
      html+=`<div class="pgrid">`;
      posts.forEach(p=>{
        const cap=p.c?p.c+'â€¦':'â€¦';
        html+=`<div class="pcard" id="lp-${p.i}" data-bid="${bl.id}" data-h="${p.h.toLowerCase()}">`;
        html+=`<div class="pcard-left"><div class="phook">${p.h}</div><div class="pcap">${cap} <span class="pcap-note">(vollstÃ¤ndige Caption nach dem Kauf)</span></div></div>`;
        html+=`<button class="btn-d" data-pid="${p.i}">Design wÃ¤hlen</button>`;
        html+=`</div>`;
      });
      html+=`</div></div>`;
    });
    html+=`</div></div>`;
  });
  acc.innerHTML=html;
  acc.addEventListener('click',function(e){
    const btn=e.target.closest('.btn-d[data-pid]');
    if(btn)selectPost(btn.dataset.pid);
    const bbtn=e.target.closest('.bbtn[id]');
    if(bbtn)toggleLib(bbtn.id.replace('b-',''));
    const pc=e.target.closest('.p-close');
    if(pc){const bid=pc.closest('.panel').id.replace('p-','');toggleLib(bid);}
  });
}

function toggleLib(bid){
  const panel=document.getElementById('p-'+bid);
  const btn=document.getElementById('b-'+bid);
  if(!panel||!btn)return;
  if(_libActive&&_libActive!==bid){
    const pp=document.getElementById('p-'+_libActive);
    const pb=document.getElementById('b-'+_libActive);
    if(pp)pp.classList.remove('open');
    if(pb)pb.classList.remove('active');
  }
  const open=panel.classList.toggle('open');
  btn.classList.toggle('active',open);
  _libActive=open?bid:null;
  if(open)setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}),60);
}

function libSearch(q){
  q=(q||'').toLowerCase().trim();
  let found=0;
  LIB_SAEULES.forEach(s=>{
    const sEl=document.getElementById('ls-'+s.id);
    if(!sEl)return;
    let sv=false;
    sEl.querySelectorAll('.pcard').forEach(c=>{
      const m=!q||c.dataset.h.includes(q);
      c.classList.toggle('hidden',!m);
      if(m){found++;sv=true;}
    });
    sEl.querySelectorAll('[data-bwrap]').forEach(w=>{
      const bid=w.dataset.bwrap;
      const vis=sEl.querySelectorAll('.pcard[data-bid="'+bid+'"]:not(.hidden)').length>0;
      w.classList.toggle('hidden',!vis);
    });
    sEl.classList.toggle('hidden',!sv);
    if(q&&sv){
      sEl.querySelectorAll('.panel').forEach(p=>{
        const bid=p.id.replace('p-','');
        const has=sEl.querySelectorAll('.pcard[data-bid="'+bid+'"]:not(.hidden)').length>0;
        p.classList.toggle('open',has);
        const b=document.getElementById('b-'+bid);
        if(b)b.classList.toggle('active',has);
      });
    } else if(!q){
      sEl.querySelectorAll('.panel').forEach(p=>p.classList.remove('open'));
      sEl.querySelectorAll('.bbtn').forEach(b=>b.classList.remove('active'));
      _libActive=null;
    }
  });
  const cnt=document.getElementById('lib-count');
  const emp=document.getElementById('lib-empty');
  if(cnt)cnt.textContent=q?found+' Posts gefunden':LIB_DATA.length+' Posts verfÃ¼gbar';
  if(emp)emp.classList.toggle('show',q&&found===0);
}

function selectPost(pid){
  const p=LIB_DATA.find(x=>x.i===pid);
  if(!p)return;
  state.selectedLibPost=p;
  startQuiz();
}

// â”€â”€â”€ DESIGN QUIZ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// â”€â”€â”€ QUIZ STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const STEPS = ['welcome','photo','zielgruppe','postetSelbst','designStil','palette','feed','content'];
let Q = {step:0,photo:null,zielgruppe:null,postetSelbst:null,designStil:null,palette:null,feedSel:[]};
let FDS = [];

function startQuiz() {
  Q = {step:0,photo:null,zielgruppe:null,postetSelbst:null,designStil:null,palette:null,feedSel:[]};
  document.getElementById('quiz-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  go(0);
}

function closeQuiz() {
  document.getElementById('quiz-overlay').style.display = 'none';
  document.body.style.overflow = '';
  try { localStorage.setItem('m_seen','1'); } catch(e) {}
}

function go(n) {
  Q.step = n;
  const qm = document.getElementById('qm-box');
  if (qm) qm.className = 'qm' + (STEPS[n]==='feed'?' wide':'');
  document.getElementById('q-dots').innerHTML = STEPS.map((_,i) =>
    `<div class="dot" style="background:${i<n?'#C67B5A':i===n?'#2C2420':'#E0D8CE'}"></div>`
  ).join('');
  document.getElementById('q-label').textContent = `Schritt ${n+1} von ${STEPS.length}`;
  renderStep(STEPS[n], n);
}

function renderStep(key, n) {
  const body = document.getElementById('q-body');

  if (key === 'welcome') {
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Willkommen</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Hast du schon Design-Erfahrung?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1.2rem">WÃ¤hle wie du starten mÃ¶chtest.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <button class="q-opt" id="opt-guide" style="border-color:#C67B5A;background:#fdf3ef">
          <div style="font-size:1.4rem;margin-bottom:.3rem">âœ¨</div>
          <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">Zeig mir, was mÃ¶glich ist</div>
          <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">Ich lass mich fÃ¼hren und finde meinen Stil</div>
        </button>
        <button class="q-opt" onclick="closeQuiz()">
          <div style="font-size:1.4rem;margin-bottom:.3rem">ðŸ”</div>
          <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">Ich such selbst</div>
          <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">Ich stÃ¶bere lieber direkt im Shop</div>
        </button>
      </div>
      <div class="q-nav">
        <button class="q-btn" onclick="go(1)">FÃ¼hre mich â†’</button>
      </div>`;
    document.getElementById('opt-guide').addEventListener('click', () => go(1));
  }

  else if (key === 'photo') {
    const hp = Q.photo;
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Optional</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Dein Foto fÃ¼r die Vorschau</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">
        Lade optional dein Foto hoch â€“ nur fÃ¼r die Designvorschau in dieser Sitzung.<br>
        <strong>Wird nicht gespeichert.</strong> Du kannst es auch spÃ¤ter beim Kauf hochladen.
      </p>
      <div id="upload-zone" style="border:2px dashed ${hp?'#4A6741':'#E0D8CE'};border-radius:10px;padding:1.5rem;text-align:center;cursor:pointer;background:${hp?'#f0f5ee':'#F5F0E8'};margin-bottom:.75rem">
        ${hp
          ? `<img src="${hp}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;object-position:center 10%;border:3px solid #C67B5A;display:block;margin:0 auto .6rem">
             <p style="font-family:sans-serif;font-size:13px;color:#4A6741;font-weight:600;margin:0">âœ“ Foto geladen</p>
             <p style="font-family:sans-serif;font-size:11px;color:#8B6F5A;margin:.3rem 0 0">Klick zum Ã„ndern</p>`
          : `<div style="font-size:1.8rem;margin-bottom:.4rem">ðŸ“¸</div>
             <p style="font-family:sans-serif;font-size:14px;color:#2C2420;margin:0 0 4px">Foto hochladen <span style="color:#8B6F5A">(optional)</span></p>
             <p style="font-family:sans-serif;font-size:11px;color:#8B6F5A;margin:0">JPG oder PNG</p>`
        }
      </div>
      <input type="file" id="photo-in" accept="image/*" style="display:none">
      <p style="font-family:sans-serif;font-size:11px;color:#8B6F5A;margin-bottom:.5rem">ðŸ”’ Dein Foto verlÃ¤sst deinen Browser nicht.</p>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" onclick="go(${n+1})">${hp ? 'Weiter mit Foto' : 'Weiter ohne Foto'} â†’</button>
      </div>`;
    document.getElementById('upload-zone').addEventListener('click', () => document.getElementById('photo-in').click());
    document.getElementById('photo-in').addEventListener('change', function() {
      const file = this.files[0]; if (!file) return;
      const r = new FileReader();
      r.onload = e => { Q.photo = e.target.result; go(n); };
      r.readAsDataURL(file);
    });
  }

  else if (key === 'zielgruppe') {
    const opts = [
      {val:'teamaufbau', icon:'ðŸ‘¥', label:'Neue Teammitglieder', desc:'Recruiting, Benefits, Motivation'},
      {val:'kunden', icon:'ðŸ¤', label:'Endkunden', desc:'Altersvorsorge, Immobilien, Vertrauen aufbauen'},
      {val:'beides', icon:'ðŸŽ¯', label:'Beides', desc:'Kollegen und Kunden ansprechen'},
    ];
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Deine Zielgruppe</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Wen mÃ¶chtest du ansprechen?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">Je nach Zielgruppe empfehle ich andere Designs und Inhalte.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
        ${opts.map(o => `
          <button class="q-opt${Q.zielgruppe===o.val?' sel':''}" data-val="${o.val}" onclick="pick('zielgruppe',this)">
            <div style="font-size:1.4rem;margin-bottom:.3rem">${o.icon}</div>
            <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">${o.label}</div>
            <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">${o.desc}</div>
          </button>`).join('')}
      </div>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" id="zg-next" onclick="go(${n+1})" ${!Q.zielgruppe?'disabled':''}>Weiter â†’</button>
      </div>`;
  }

  else if (key === 'postetSelbst') {
    const opts = [
      {val:'ja', icon:'ðŸ“±', label:'Ja, manchmal', desc:'Ich poste auch eigene Bilder oder Stories'},
      {val:'nein', icon:'ðŸ›’', label:'Nein, nur hier', desc:'Ich nutze ausschlieÃŸlich professionelle Designs'},
    ];
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Dein Feed</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Postest du auch selbst manchmal?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">So gestalte ich deinen Feed-Vorschlag realistisch.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${opts.map(o => `
          <button class="q-opt${Q.postetSelbst===o.val?' sel':''}" data-val="${o.val}" onclick="pick('postetSelbst',this)">
            <div style="font-size:1.4rem;margin-bottom:.3rem">${o.icon}</div>
            <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">${o.label}</div>
            <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">${o.desc}</div>
          </button>`).join('')}
      </div>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" id="ps-next" onclick="go(${n+1})" ${!Q.postetSelbst?'disabled':''}>Weiter â†’</button>
      </div>`;
  }

  else if (key === 'designStil') {
    const photo = Q.photo;
    const ct = CONTENTS[0];
    const cfgs = [
      {lid:7, pal:PALETTES[1], label:'Clean & Minimal', desc:'Nur dein Foto und ein starker Hook. Ruhig, zeitlos.'},
      {lid:6, pal:PALETTES[4], label:'Strukturiert', desc:'Klare Elemente, modernes Layout, Bild im Fokus.'},
      {lid:8, pal:PALETTES[2], label:'Bold & Dark', desc:'Kontraststark, dunkel, bleibt im Kopf.'},
    ];
    const cards = cfgs.map((c,i) => {
      const prev = buildPostPreview(c.lid, c.pal, ct, photo, 160, 200);
      const sel = Q.designStil === i;
      return `<button class="q-opt${sel?' sel':''}" data-idx="${i}" onclick="pickDesignStil(${i},this)" style="padding:.65rem">
        <div class="q-design">${prev}</div>
        <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">${c.label}</div>
        <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">${c.desc}</div>
      </button>`;
    }).join('');
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Dein Stil</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Welches Design sagt dir am meisten zu?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">Vertrau deinem ersten GefÃ¼hl.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;align-items:start">${cards}</div>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" id="ds-next" onclick="go(${n+1})" ${Q.designStil===null?'disabled':''}>Weiter â†’</button>
      </div>`;
  }

  else if (key === 'palette') {
    const photo = Q.photo;
    const ct = CONTENTS[0];
    const stilLid = [7,6,8][Q.designStil||0];
    const groups = [
      {i:0, name:'Warm & Lebendig', desc:'Einladend, freundlich', palIdx:4, swatches:['#5C3020','#D2714A','#3A3E1E','#7A8A3A']},
      {i:1, name:'Hell & NatÃ¼rlich', desc:'Ruhig, vertrauenswÃ¼rdig', palIdx:1, swatches:['#5C4433','#C67B5A','#2A3B2E','#6B8F62']},
      {i:2, name:'Dark & Modern', desc:'SeriÃ¶s, stark, Vertrauen', palIdx:0, swatches:['#1E3A2A','#4A6741','#3D3228','#8B6F5A']},
    ];
    const cards = groups.map(g => {
      const prev = buildPostPreview(stilLid, PALETTES[g.palIdx], ct, photo, 160, 200);
      const sel = Q.palette === g.i;
      const swatchBar = g.swatches.map(c => `<span style="flex:1;background:${c}"></span>`).join('');
      return `<button class="q-opt${sel?' sel':''}" data-idx="${g.i}" onclick="pickPalette(${g.i},this)" style="padding:.65rem">
        <div class="q-design">${prev}</div>
        <div style="display:flex;height:36px;border-radius:6px;overflow:hidden;margin-bottom:.5rem">${swatchBar}</div>
        <div style="font-family:Georgia,serif;font-size:13px;color:#2C2420;margin-bottom:3px">${g.name}</div>
        <div style="font-family:sans-serif;font-size:11px;color:#8B6F5A">${g.desc}</div>
      </button>`;
    }).join('');
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Deine Farbe</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Welche Farbrichtung passt zu dir?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">Dein Feed sollte eine klare Farbsprache haben.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;align-items:start">${cards}</div>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" id="pal-next" onclick="go(${n+1})" ${Q.palette===null?'disabled':''}>Weiter â†’</button>
      </div>`;
  }

  else if (key === 'feed') {
    // 9 designs in 3 groups (3 per row)
    const stilLayouts = [
      [7,6,5,1,2,9,4,3,8],
      [6,9,7,4,2,8,1,5,3],
      [8,2,4,6,1,7,9,3,5]
    ];
    const palGroups = [
      [4,5,6,7,4,5,6,7,4],
      [1,3,8,9,1,3,8,9,1],
      [0,2,7,9,0,2,7,9,0]
    ];
    const si = Q.designStil||0;
    const pi = Q.palette||0;
    FDS = stilLayouts[si].map((lid,i) => ({lid, palIdx:palGroups[pi][i], i}));
    const photo = Q.photo;

    const cards = FDS.map((fd,i) => {
      const p = PALETTES[fd.palIdx];
      const c = CONTENTS[i % CONTENTS.length];
      const prev = buildPostPreview(fd.lid, p, c, photo, 110, 138);
      const sel = Q.feedSel.includes(i);
      return `<div style="border:2px solid ${sel?'#C67B5A':'#E0D8CE'};border-radius:8px;overflow:hidden;cursor:pointer;transition:all .15s;${sel?'box-shadow:0 0 0 2px rgba(198,123,90,.35)':''}" onclick="toggleFD(${i},this)" data-i="${i}">
        <div style="width:100%;aspect-ratio:4/5;overflow:hidden;background:#E8DDD0">${prev}</div>
        <div style="font-family:sans-serif;font-size:9px;color:#8B6F5A;padding:4px 6px;text-align:center;letter-spacing:.04em;background:#FDFAF6">${sel?'âœ“ ':''}Design ${i+1}</div>
      </div>`;
    }).join('');

    const photoAvatar = photo
      ? `<img src="${photo}" alt="">`
      : `<span style="font-size:14px">ðŸ‘¤</span>`;

    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.25rem">Dein Feed</div>
      <h2 style="font-family:Georgia,serif;font-size:1.25rem;color:#2C2420;margin-bottom:.25rem;line-height:1.2">So kÃ¶nnte dein Instagram-Feed aussehen</h2>
      <p style="font-family:sans-serif;font-size:12px;color:#8B6F5A;margin-bottom:.6rem;line-height:1.4">Klicke auf Designs links â€“ die Vorschau rechts aktualisiert sich sofort.</p>
      <div style="display:inline-flex;align-items:center;gap:6px;background:#E8EEE6;color:#4A6741;font-family:sans-serif;font-size:11px;padding:3px 10px;border-radius:20px;margin-bottom:.75rem">âœ“ 143 Berater nutzen Ã¤hnliche Design-Pakete</div>
      <div style="display:grid;grid-template-columns:1fr 260px;gap:1.25rem;align-items:start">
        <div>
          <div style="font-family:sans-serif;font-size:10px;color:#8B6F5A;margin-bottom:8px;letter-spacing:.06em;text-transform:uppercase">9 Designs wÃ¤hlen (bis zu 6 kombinieren):</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:.5rem">${cards}</div>
          <p style="font-family:sans-serif;font-size:11px;color:#8B6F5A;margin:.4rem 0 0;line-height:1.4">ðŸ’¡ <strong>Tipp:</strong> 6 verschiedene Designs = maximale Abwechslung, einheitlicher Look.</p>
        </div>
        <div>
          <div class="feed-preview-phone">
            <div class="feed-preview-header">
              <div class="feed-preview-av">${photoAvatar}</div>
              <span class="feed-preview-handle">dein_profil</span>
              <div style="margin-left:auto;font-family:sans-serif;font-size:8px;color:#999">Instagram</div>
            </div>
            <div class="feed-preview-grid" id="ig-grid"></div>
          </div>
          <p id="fd-count" style="font-family:sans-serif;font-size:11px;color:#8B6F5A;text-align:center;margin-top:.5rem;line-height:1.4">Designs links wÃ¤hlen</p>
        </div>
      </div>
      <div class="q-nav" style="margin-top:1rem">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" id="fd-next" onclick="go(${n+1})" ${Q.feedSel.length===0?'disabled':''}>${Q.feedSel.length||0} Design(s) gewÃ¤hlt â€“ Weiter â†’</button>
      </div>`;
    buildFeed();
  }

  else if (key === 'content') {
    const recMap = {teamaufbau:['teamaufbau','personal'],kunden:['produkte','news','personal'],beides:['teamaufbau','produkte','personal','news','meme']};
    const rec = recMap[Q.zielgruppe]||[];
    const cats = [
      ['ðŸ‘¥','Teamaufbau & Benefits','teamaufbau'],
      ['ðŸ“Š','Produktkommunikation','produkte'],
      ['ðŸ™‹','Personal Brand','personal'],
      ['ðŸ“°','Kundenkommunikation','news'],
      ['ðŸ˜„','Memes & Humor','meme'],
    ];
    body.innerHTML = `
      <div style="font-family:sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C67B5A;margin-bottom:.35rem">Fast fertig!</div>
      <h2 style="font-family:Georgia,serif;font-size:1.4rem;color:#2C2420;margin-bottom:.35rem">Welche Inhalte interessieren dich?</h2>
      <p style="font-family:sans-serif;font-size:13px;color:#8B6F5A;margin-bottom:1rem">Du siehst danach alle passenden Posts im Shop.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${cats.map(([icon,label,val]) => `
          <button class="q-opt${rec.includes(val)?' sel':''}" onclick="this.classList.toggle('sel')" data-cat="${val}" style="display:flex;align-items:center;gap:.65rem;padding:.8rem">
            <span style="font-size:1.3rem;flex-shrink:0">${icon}</span>
            <div>
              <span style="font-family:Georgia,serif;font-size:12px;color:#2C2420;display:block">${label}${rec.includes(val)?'&thinsp;<span style="font-size:9px;background:#4A6741;color:white;padding:1px 5px;border-radius:8px">Empfohlen</span>':''}</span>
            </div>
          </button>`).join('')}
      </div>
      <div class="q-nav">
        <button class="q-back" onclick="go(${n-1})">â† ZurÃ¼ck</button>
        <button class="q-btn" onclick="finish()">Zum Shop mit meinem Stil â†’</button>
      </div>`;
  }
}

function pick(field, el) {
  Q[field] = el.dataset.val;
  el.closest('div').querySelectorAll('.q-opt').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const nextMap = {zielgruppe:'zg-next',postetSelbst:'ps-next'};
  const btn = document.getElementById(nextMap[field]);
  if (btn) btn.disabled = false;
}

function pickDesignStil(idx, el) {
  Q.designStil = idx;
  el.closest('div').querySelectorAll('.q-opt').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const btn = document.getElementById('ds-next');
  if (btn) btn.disabled = false;
}

function pickPalette(idx, el) {
  Q.palette = idx;
  el.closest('div').querySelectorAll('.q-opt').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  const btn = document.getElementById('pal-next');
  if (btn) btn.disabled = false;
}

function toggleFD(idx, el) {
  const s = Q.feedSel;
  const i = s.indexOf(idx);
  if (i > -1) { s.splice(i,1); el.style.borderColor='#E0D8CE'; el.style.boxShadow=''; }
  else if (s.length < 6) { s.push(idx); el.style.borderColor='#C67B5A'; el.style.boxShadow='0 0 0 2px rgba(198,123,90,.35)'; }
  el.querySelector('div:last-child').textContent = (s.includes(idx)?'âœ“ ':'') + 'Design ' + (idx+1);
  const btn = document.getElementById('fd-next');
  if (btn) { btn.disabled = s.length===0; btn.textContent = s.length + ' Design(s) gewÃ¤hlt â€“ Weiter â†’'; }
  const cnt = document.getElementById('fd-count');
  if (cnt) {
    if (s.length===0) cnt.textContent = 'Designs links wÃ¤hlen';
    else if (s.length<6) cnt.innerHTML = `<span style="color:#C67B5A">${s.length}/6</span> â€“ noch ${6-s.length} fÃ¼r maximale Abwechslung`;
    else cnt.innerHTML = '<span style="color:#4A6741">âœ“ Perfekt! 6 Designs gewÃ¤hlt</span>';
  }
  buildFeed();
}

function buildFeed() {
  const grid = document.getElementById('ig-grid');
  if (!grid) return;
  const sel = Q.feedSel;
  const selfPost = Q.postetSelbst === 'ja';
  const photo = Q.photo;
  const cells = [];
  let di = 0;
  for (let i=0; i<9; i++) {
    if (selfPost && (i===2||i===5||i===8)) { cells.push({own:true}); continue; }
    if (sel.length > 0) {
      const fd = FDS[sel[di%sel.length]];
      cells.push({fd, ci:di}); di++;
    } else {
      cells.push({fd:FDS[i%FDS.length], empty:true});
    }
  }
  grid.innerHTML = cells.map(cell => {
    if (cell.own) return `<div class="own-cell">ðŸ“¸<span>Eigener Post</span></div>`;
    const p = PALETTES[cell.fd.palIdx];
    const c = CONTENTS[(cell.ci||0)%CONTENTS.length];
    const prev = buildPostPreview(cell.fd.lid, p, c, photo, 76, 76);
    return `<div class="ig-cell" style="opacity:${cell.empty?.3:1}">${prev}</div>`;
  }).join('');
}

function finish() {
  closeQuiz();
  const pgMap = [[4,5,6,7],[1,3,8,9],[0,2,7,9]];
  if (Q.palette !== null) state.selectedPalette = pgMap[Q.palette][0];
  if (Q.designStil !== null) state.selectedDesign = [7,6,8][Q.designStil];
  const catMap = {teamaufbau:'teamaufbau',kunden:'produkte',beides:'alle'};
  if (Q.zielgruppe) {
    const cat = catMap[Q.zielgruppe] || 'alle';
    state.activeCat = cat;
    document.querySelectorAll('#cat-filters .filter-btn').forEach(b => {
      b.classList.remove('active');
      const oc = b.getAttribute('onclick') || '';
      if (oc.includes("'"+cat+"'") || (cat==='alle' && b.textContent.includes('Alle'))) b.classList.add('active');
    });
  }
  if (Q.photo) state.uploadedImg = Q.photo;
  renderProducts();
  const shop = document.getElementById('shop');
  if (shop) shop.scrollIntoView({behavior:'smooth'});
}

// stub to avoid reference errors from old code
function quizGoStep() {}
function quizSelect() {}
function quizSelectColor() {}
function quizHandlePhoto() {}
function quizRemovePhoto() {}
function quizToggleChip() {}
function finishQuiz() { finish(); }

// â”€â”€â”€ SUCHE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CAT_LABELS = {teamaufbau:'Teamaufbau',produkte:'Produkte',personal:'Personal Brand',news:'Kundenkommunikation',meme:'Memes'};

function handleNavSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  const q = query.trim().toLowerCase();

  if (q.length < 2) {
    dropdown.style.display = 'none';
    return;
  }

  const results = CONTENTS.filter(c =>
    c.title.toLowerCase().includes(q) ||
    (c.body && c.body.toLowerCase().includes(q)) ||
    (c.cat && c.cat.toLowerCase().includes(q)) ||
    (c.tag && c.tag.toLowerCase().includes(q))
  ).slice(0, 8);

  if (results.length === 0) {
    dropdown.innerHTML = `<div class="search-no-results">Keine Posts fÃ¼r â€ž${query}" gefunden</div>`;
  } else {
    dropdown.innerHTML = results.map(c => {
      const p = PALETTES[c.id % 10];
      const thumb = buildPostPreview(c.id % 10 + 1, p, c, null, 36, 45);
      const catLabel = CAT_LABELS[c.cat] || c.cat || '';
      return `<div class="search-result-item" onclick="selectSearchResult(${c.id})">
        <div class="search-result-thumb">${thumb}</div>
        <div class="search-result-info">
          <div class="search-result-title">${c.title}</div>
          <div class="search-result-cat">${catLabel}${c.tag ? ' Â· ' + c.tag : ''}</div>
        </div>
      </div>`;
    }).join('');
  }

  dropdown.style.display = 'block';
}

function selectSearchResult(contentId) {
  closeSearchDropdown();
  document.getElementById('nav-search-input').value = '';
  const content = CONTENTS.find(c => c.id === contentId);
  if (!content) return;
  state.activeCat = content.cat || 'alle';
  document.querySelectorAll('#cat-filters .filter-btn').forEach(b => {
    b.classList.remove('active');
    if ((b.getAttribute('onclick')||'').includes("'"+state.activeCat+"'")) b.classList.add('active');
  });
  renderProducts();
  showShop();
  setTimeout(() => {
    const card = document.querySelector(`[data-content-id="${contentId}"]`);
    if (card) card.scrollIntoView({behavior:'smooth',block:'center'});
    else document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  }, 200);
}

function goToFirstResult() {
  const first = document.querySelector('.search-result-item');
  if (first) first.click();
}

function showSearchDropdown() {
  const q = (document.getElementById('nav-search-input').value||'').trim();
  if (q.length >= 2) document.getElementById('search-dropdown').style.display = 'block';
}

function closeSearchDropdown() {
  document.getElementById('search-dropdown').style.display = 'none';
}

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search-wrap')) closeSearchDropdown();
});

// â”€â”€â”€ STRIPE CHECKOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Trage hier deinen Stripe Publishable Key ein (beginnt mit pk_live_ oder pk_test_)
const STRIPE_PUBLISHABLE_KEY = 'pk_test_DEIN_KEY_HIER';

async function startStripeCheckout() {
  const btn = document.getElementById('checkout-btn');
  if (!btn || state.cart.length === 0) return;

  btn.disabled = true;
  btn.textContent = 'Weiterleitung zu Stripe â€¦';

  const TAX_RATE = 0.19;
  const items = state.cart.map(item => ({
    title: item.content ? item.content.title : 'Social Media Post',
    design: item.design ? item.design.name : '',
    format: item.format ? item.format.name : '',
    palette: item.palette ? item.palette.name : '',
    grossPrice: parseFloat((item.price * (1 + TAX_RATE)).toFixed(2)),
  }));

  const origin = window.location.origin || 'https://merkert-social-media.de';

  try {
    const res = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        successUrl: origin + '/success.html',
        cancelUrl: origin + '/#shop',
      }),
    });

    if (!res.ok) throw new Error('Server-Fehler ' + res.status);
    const { url, error } = await res.json();
    if (error) throw new Error(error);
    window.location.href = url;
  } catch (err) {
    console.error('Checkout-Fehler:', err);
    alert('Zahlung konnte nicht gestartet werden. Bitte versuche es spÃ¤ter erneut oder kontaktiere uns direkt.');
    btn.disabled = false;
    btn.textContent = 'Jetzt sicher bezahlen â†’';
  }
}

buildLibrary();
initDesignSection();

// Auto-start on first visit
window.addEventListener('load', () => {
  try {
    if (!localStorage.getItem('m_seen')) setTimeout(startQuiz, 600);
  } catch(e) {
    setTimeout(startQuiz, 600);
  }
});
