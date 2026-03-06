const PROJECTS = [
  {
    slug: 'dsb-redesign',
    title: 'DSB',
    eyebrow: 'App\u00a0Redesign \u00b7 2025',
    titleHtml: 'DSB \u2014<br><em>redesign af</em><br>rejseappen',
    subtitle: 'Redesign af DSB\u2019s rejseapp med fokus p\u00e5 en mere overskuelig rejseoplevelse og en ny check ind/ud-funktion.',
    cover: {
      src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=85',
      alt: 'DSB \u2014 redesign af rejseappen',
    },
    meta: {
      client: 'DSB',
      period: '2025',
      role: 'Junior Designer',
      disciplines: 'UX \u00b7 UI \u00b7 Brugertest',
    },
    summary: {
      lead: 'DSB\u2019s app bruges dagligt af tusindvis af rejsende til at finde og booke rejser, tjekke afgange og administrere deres billetter. Som junior designer var jeg del af det interne designteam der stod for et st\u00f8rre redesign af appen, med s\u00e6rligt fokus p\u00e5 at g\u00f8re rejseoplevelsen mere overskuelig og tilg\u00e6ngelig \u2014 samt en ny check ind/ud-funktion.',

    },
    challenge: {
      heading: 'Udfordringen',
      paragraphs: [
        'Den eksisterende app havde vokset sig kompleks over tid, og brugere oplevede at centrale funktioner var sv\u00e6re at finde eller forst\u00e5. Samtidig skulle en ny check ind/ud-feature integreres p\u00e5 en m\u00e5de der f\u00f8ltes naturlig og hurtig at bruge \u2014 s\u00e6rligt i en situation hvor brugeren er p\u00e5 farten og har f\u00e5 sekunder til r\u00e5dighed.',
      ],
    },
    solution: {
      heading: 'L\u00f8sningen',
      paragraphs: [
        'Redesignet tog udgangspunkt i brugerresearch og -test der afd\u00e6kkede hvor i appen folk st\u00f8dte p\u00e5 friktion. P\u00e5 baggrund af indsigterne arbejdede vi med en gennemg\u00e5ende forenkling af navigationen og informationsarkitekturen, s\u00e5 de mest brugte funktioner \u2014 rejses\u00f8gning, afgangsoversigt og rejsehistorik \u2014 var lettere at tilg\u00e5.',
        'Check ind/ud-funktionen blev designet til at v\u00e6re s\u00e5 hurtig og gnidningsfri som muligt. For en bruger der netop er ved at stige p\u00e5 toget er hvert ekstra trin en potentiel barriere, s\u00e5 flowet blev stripped ned til det absolut n\u00f8dvendige uden at g\u00e5 p\u00e5 kompromis med tydelighed.',
        'Den visuelle stil blev opdateret for at skabe mere klarhed og konsistens p\u00e5 tv\u00e6rs af appens mange sk\u00e6rme \u2014 med en st\u00e6rkere hierarkisk struktur der g\u00f8r det lettere at orientere sig hurtigt.',
      ],
    },
    designDecisions: {
      heading: 'Designbeslutninger',
      paragraphs: [
        { text: 'Et gennemg\u00e5ende princip i redesignet var at prioritere brugerens mentale tilstand i kontekst. En person der tjekker afgange p\u00e5 perronen har et helt andet behov end en der sidder hjemme og planl\u00e6gger en tur \u2014 og designet skulle h\u00e5ndtere begge scenarier elegant.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80' },
        { text: 'Brugertest spillede en central rolle i at validere beslutninger undervejs, s\u00e6rligt omkring check ind/ud-flowet og den nye navigationstruktur. Det gav os konkrete data at arbejde ud fra frem for at basere valg p\u00e5 antagelser.', image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80' },
        { text: 'Som junior designer p\u00e5 et etableret internt team var projektet en l\u00e6rerig erfaring i at arbejde inden for et eksisterende designsystem og brand, bidrage konstruktivt i et team af erfarne designere og forst\u00e5 hvordan store produktbeslutninger tages i en organisation som DSB.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80' },
      ],
    },
    inlineImage: {
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
      alt: 'DSB app redesign \u2014 navigation og check ind/ud',
      caption: 'Den forenklede navigation og det nye check ind/ud-flow.',
    },
    results: {
      intro: 'Redesignet fokuserede p\u00e5 at g\u00f8re rejseoplevelsen hurtigere og mere overskuelig for daglige brugere.',
      cards: [
        { number: '1 tap', label: 'Check ind/ud', desc: 'Flowet er stripped ned s\u00e5 brugeren kan checke ind med minimalt antal trin.' },
        { number: 'Forenklet', label: 'Navigation', desc: 'De mest brugte funktioner er nu lettere at finde og tilg\u00e5 p\u00e5 tv\u00e6rs af appen.' },
        { number: 'Valideret', label: 'Med brugertest', desc: 'Beslutninger blev l\u00f8bende testet og valideret med rigtige brugere.' },
      ],
    },
    nav: {
      prev: null,
      next: { slug: 'dentaaid-akutkit', title: 'DentaAid Akutkit' },
    },
  },

  {
    slug: 'dentaaid-akutkit',
    title: 'DentaAid-Akutkit',
    eyebrow: 'UX\u00a0Design \u00b7 2025',
    titleHtml: 'DentaAid \u2014<br><em>vejledning der</em><br>beroliger',
    subtitle: 'En dansk teledentistry-platform der giver brugere adgang til tand\u00e6gehjælp n\u00e5r de har brug for det \u2014 designet til den akutte, stressede bruger.',
    cover: {
      src: 'assets/images/Test.png',
      alt: 'DentaAid \u2014 akutkit vejledningsapp',
    },
    meta: {
      client: 'DentaAid',
      period: '2025',
      role: 'Solo Designer',
      disciplines: 'UX \u00b7 Brugerflow \u00b7 Figma',
    },
    summary: {
      lead: 'DentaAid er en dansk teledentistry-platform der giver brugere adgang til tand\u00e6gehjælp n\u00e5r de har brug for det. Som solo designer stod jeg for det komplette design af deres webapp til vejledning i brugen af DentaAids akutkit.',
      
    },
    challenge: {
      heading: 'Hvad var problemet?',
      paragraphs: [
        'Brugere der oplever akutte tandsmerter er ofte stressede og usikre p\u00e5 hvad de skal g\u00f8re. Akutkittet indeholder flere forskellige v\u00e6rkt\u00f8jer, og udfordringen var at designe en oplevelse der hurtigt og trygt kunne guide brugeren til den rigtige l\u00f8sning.',
        'Udfordringen var at g\u00f8re det uden at overv\u00e6lde dem med information \u2014 i en situation hvor kognitiv belastning i forvejen er h\u00f8j.',
      ],
    },
    solution: {
      heading: 'Hvordan l\u00f8ste vi det?',
      paragraphs: [
        'Jeg designede et triage-baseret flow hvor brugeren besvarer en r\u00e6kke sp\u00f8rgsm\u00e5l for at blive f\u00f8rt direkte hen til den relevante l\u00f8sningsside med video- og tekstvejledning. Sp\u00f8rgsm\u00e5lene er struktureret s\u00e5 de gradvist indsn\u00e6vrer problemet og aldrig f\u00f8les som et medicinsk skema.',
        'P\u00e5 l\u00f8sningssiden pr\u00e6senteres brugeren for en kombination af video og tekst, s\u00e5 de selv kan v\u00e6lge den l\u00e6ringsform der passer dem bedst. For at sikre at brugeren ikke efterlades alene med resultatet er der bygget en <strong style="color: var(--text);">opf\u00f8lgningsfunktion ind \u2014 30 minutter efter endt vejledning.</strong>',
        'For brugere der blot er nysgerrige p\u00e5 kittet er der en fri udforskningstilstand og direkte adgang til at booke en konsultation med en certificeret tand\u00e6ge \u2014 enten som alternativ til selvbehandling eller som n\u00e6ste skridt.',
      ],
    },
    designDecisions: {
      heading: 'Designvalg',
      paragraphs: [
        { text: 'Et centralt valg var at adskille de to prim\u00e6re brugsscenarier tydeligt: den akutte bruger der har brug for hurtig og tryg vejledning, og den nysgerrige bruger der vil l\u00e6re om kittet i ro og mag. Begge veje skulle f\u00f8les naturlige og ligev\u00e6rdige \u2014 ingen af dem m\u00e5tte opleves som en omvej eller en sekund\u00e6r funktion.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80' },
        { text: 'I det akutte flow var det vigtigt at minimere den kognitive belastning. Det betød korte, klare sp\u00f8rgsm\u00e5l, \u00e9n beslutning ad gangen, og en visuel stil der signalerer ro og kontrol frem for hastv\u00e6rk. Farver og typografi er bevidst holdt nedtonede i flowet for ikke at tilf\u00f8je un\u00f8dig uro til en i forvejen stresset situation.', image: 'assets/images/ssurvey.png' },
        { text: 'Bookingfunktionen til direkte tand\u00e6gekonsultation er tilg\u00e6ngelig gennem hele oplevelsen, men er designet til ikke at dominere. Den er der som en sikkerhedsventil \u2014 synlig nok til at brugeren altid ved den eksisterer, men ikke s\u00e5 fremtr\u00e6dende at den underminerer tilliden til selvvejledningen.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80' },
        { text: 'Opf\u00f8lgningsfunktionen efter 30 minutter var et valg der udsprang af et \u00f8nske om at forl\u00e6nge designets ansvar ud over selve opgavel\u00f8sningen. I stedet for at betragte brugerrejsen som afsluttet n\u00e5r vejledningen er fulgt, holder appen kontakten og sikrer at brugeren har et naturligt n\u00e6ste skridt \u2014 uanset om behandlingen virkede eller ej.', image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80' },
      ],
    },
    inlineImage: {
      src: 'https://images.unsplash.com/photo-1588776814546-ec7e7c3e3e47?w=1200&q=80',
      alt: 'Sk\u00e6rmbilleder af DentaAid triage-flow',
      caption: 'Det triage-baserede sp\u00f8rgesm\u00e5lsflow designet til at minimere kognitiv belastning.',
    },
    results: {
      intro: 'Designet tog udgangspunkt i tre m\u00e5lbare succeskriterier: hastighed til l\u00f8sning, brugeroplevet tryghed og opf\u00f8lgningsrate.',
      cards: [
        { number: '1 tap', label: 'Til n\u00e6ste skridt', desc: 'Brugeren er aldrig mere end \u00e9t tap fra enten vejledning, udforskning eller booking.' },
        { number: '30 min', label: 'Opf\u00f8lgningsvindue', desc: 'Bevidst valgt tidspunkt der giver behandlingen tid til at virke f\u00f8r brugeren tjekker ind.' },
        { number: '2 flow', label: 'Klare brugsscenarier', desc: 'Akut vejledning og fri udforskning \u2014 begge veje f\u00f8les naturlige og ligev\u00e6rdige.' },
      ],
    },
    nav: {
      prev: { slug: 'dsb-redesign', title: 'DSB' },
      next: { slug: 'dentaaid-forebyggelse', title: 'DentaAid Forebyggelse' },
    },
  },

  {
    slug: 'dentaaid-forebyggelse',
    title: 'DentaAid Forebyggelse',
    eyebrow: 'UX\u00a0Design \u00b7 2025',
    titleHtml: 'DentaAid \u2014<br><em>forebyggelse der</em><br>f\u00f8les overkommeligt',
    subtitle: 'Et selvst\u00e6ndigt digitalt forebyggelsesl\u00f8b m\u00e5lrettet mennesker med s\u00e6rlig risiko for d\u00e5rlig mundsundhed \u2014 gravide, diabetikere og kr\u00e6ftpatienter.',
    cover: {
      src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85',
      alt: 'DentaAid Forebyggelse \u2014 webapp interface',
    },
    meta: {
      client: 'DentaAid',
      period: '2025',
      role: 'Solo Designer',
      disciplines: 'UX \u00b7 Informationsarkitektur \u00b7 Figma',
    },
    summary: {
      lead: 'DentaAids forebyggelsesl\u00f8b er et selvst\u00e6ndigt digitalt produkt m\u00e5lrettet mennesker med s\u00e6rlig risiko for d\u00e5rlig mundsundhed. Som solo designer stod jeg for det komplette design af webappen, fra informationsarkitektur og brugerflows til det f\u00e6rdige visuelle design.',
    
    },
    challenge: {
      heading: 'Hvad var problemet?',
      paragraphs: [
        'Mennesker i risikogrupper har ofte forh\u00f8jet behov for opf\u00f8lgning p\u00e5 deres mundsundhed, men mangler redskaberne til at monitorere den l\u00f8bende eller vide hvorn\u00e5r de skal s\u00f8ge hj\u00e6lp.',
        'Udfordringen var at designe en oplevelse der g\u00f8r det let og overskueligt at holde styr p\u00e5 sin mundsundhed over tid \u2014 uden at det f\u00f8les som en medicinsk byrde i hverdagen.',
      ],
    },
    solution: {
      heading: 'Hvordan er det bygget op?',
      paragraphs: [
        'Forl\u00f8bet er bygget op omkring to faste rytmer: ugentligt besvarer brugeren sp\u00f8rgsm\u00e5l om bl\u00f8dning i tandkødet, m\u00e5nedligt uploader de 5\u20136 billeder som tandl\u00e6gen bruger til at vurdere tilstanden over tid.',
        'P\u00e5 baggrund af denne data udarbejder tandl\u00e6gen en professionel rapport med vurdering af potentielle problemer. <strong style="color: var(--text);">M\u00e5let er at komme problemerne i forkøbet \u2014 ikke at reagere n\u00e5r skaden allerede er sket.</strong>',
        'N\u00e5r brugeren tilmelder sig modtager de en fysisk pakke med udstyr s\u00e6rligt udt\u00e6nkt til deres gruppe. I appen kan de se hvad pakken indeholder med billeder og vejledning til korrekt brug \u2014 s\u00e5 forbindelsen mellem det fysiske kit og den digitale oplevelse f\u00f8les sammenh\u00e6ngende.',
        'Som en del af forl\u00f8bet har brugeren et antal inkluderede konsultationer med en tandl\u00e6ge, som nemt kan bookes direkte i appen.',
      ],
    },
    designDecisions: {
      heading: 'Designvalg',
      paragraphs: [
        { text: 'En af de vigtigste designudfordringer var at g\u00f8re de l\u00f8bende check-ins lette nok til at brugeren faktisk gennemf\u00f8rer dem \u2014 uge efter uge. Det betød at sp\u00f8rgsm\u00e5lsflowet skulle f\u00f8les kort og konkret, og at den visuelle stil skulle signalere omsorg og tryghed frem for klinisk kontrol. Brugerne er i en s\u00e5rbar situation, og designet skulle afspejle det.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80' },
        { text: 'Foto-upload flowet kr\u00e6vede s\u00e6rlig opm\u00e6rksomhed, da det potentielt er en barriere for mange brugere. Her var det vigtigt at give tydelig vejledning om hvordan billederne tages korrekt, s\u00e5 tandl\u00e6gen f\u00e5r et brugbart grundlag \u2014 uden at det f\u00f8les kompliceret eller teknisk for brugeren.', image: 'https://images.unsplash.com/photo-1512813389649-acbd9b4c9b50?w=600&q=80' },
        { text: 'Rapporten fra tandl\u00e6gen er designet til at v\u00e6re tilg\u00e6ngelig og forst\u00e5elig for en l\u00e6gmand. Frem for at pr\u00e6sentere r\u00e5 data eller medicinsk terminologi er fokus p\u00e5 hvad brugeren skal vide og hvad de eventuelt skal g\u00f8re \u2014 formidlet p\u00e5 en m\u00e5de der ikke skaber un\u00f8dig bekymring.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
        { text: 'Kit-oversigten i appen er med til at skabe sammenh\u00e6ng mellem det fysiske og det digitale produkt. Det var et bevidst valg at give hvert produkt i pakken sin egen plads med billeder og vejledning, s\u00e5 brugeren fra dag \u00e9t f\u00f8ler sig kl\u00e6dt p\u00e5 til forl\u00f8bet.', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80' },
      ],
    },
    inlineImage: {
      src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
      alt: 'Sk\u00e6rmbilleder af forebyggelsesl\u00f8bets check-in flow',
      caption: 'Det ugentlige check-in flow designet til at f\u00f8les konkret og overskueligt.',
    },
    results: {
      intro: 'Designet tog udgangspunkt i tre succeskriterier: completion rate p\u00e5 l\u00f8bende check-ins, brugeroplevet tryghed og sammenh\u00e6ng mellem fysisk kit og digital oplevelse.',
      cards: [
        { number: '2', label: 'Faste rytmer', desc: 'Ugentlig symptom-check og m\u00e5nedlig foto-upload giver et solidt datagrundlag uden at overv\u00e6lde brugeren.' },
        { number: '1 flow', label: 'Foto-upload', desc: 'Vejledt upload-flow der s\u00e6nker barrieren og sikrer brugbare billeder til tandl\u00e6gevurdering.' },
        { number: '3', label: 'Risikogrupper', desc: 'Produktet er designet til gravide, diabetikere og kr\u00e6ftpatienter med tilpasset kommunikation.' },
      ],
    },
    nav: {
      prev: { slug: 'dentaaid-akutkit', title: 'DentaAid Akutkit' },
      next: { slug: 'projekt-fire', title: 'Projekt Fire' },
    },
  },

  {
    slug: 'projekt-fire',
    title: 'Projekt Fire',
    eyebrow: 'Design\u00a0System \u00b7 2024',
    titleHtml: 'Projekt Fire \u2014<br><em>\u00e9t system</em><br>til det hele',
    subtitle: 'Skalerbart designsystem og komponentbibliotek for en fintech-virksomhed med produkter p\u00e5 tre platforme.',
    cover: {
      src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85',
      alt: 'Projekt Fire \u2014 design system komponenter',
    },
    meta: {
      client: 'Fintech Virksomhed',
      period: 'Mar \u2013 Sep 2024',
      role: 'Design Systems Lead',
      disciplines: 'Design System \u00b7 Tokens \u00b7 React',
    },
    summary: {
      lead: 'En voksende fintech-virksomhed k\u00f8rte tre produkter med tre separate, divergerende kodebaser og designfiler. Inkonsistens og dobbeltarbejde kostede dem m\u00e5nedligt.',
     
    },
    challenge: {
      heading: 'Problemet med tre siloer',
      paragraphs: [
        'De tre produktteams havde udviklet sig uafh\u00e6ngigt i to \u00e5r. Samme knap fandtes i syv varianter p\u00e5 tv\u00e6rs af produkterne. Designer-til-developer h\u00e5ndoff kostede i snit 3 dage per feature.',
        'Eksisterende l\u00f8sninger (Storybook-s\u00e6tup, Figma-filer) var forladte og utidssvarende \u2014 der var ikke tillid til dem i teamene.',
        'Virksomheden planlagde to nye produktlanceringer indenfor 12 m\u00e5neder, s\u00e5 hastighed og skalerbarhed var afg\u00f8rende.',
      ],
    },
    solution: {
      heading: 'Et system alle ejer',
      paragraphs: [
        'Vi startede med et design token-audit p\u00e5 tv\u00e6rs af alle tre produkter og identificerede 80+ unikke farver der i virkeligheden burde v\u00e6re 12. Samme \u00f8velse for typografi og spacing.',
        'Komponentbiblioteket blev bygget i React med TypeScript og Storybook. Hvert komponent lever med <strong style="color: var(--text);">design tokens, accessibility-tests og usage guidelines</strong> \u2014 alt p\u00e5 \u00e9t sted.',
        'Vi holdt m\u00e5nedlige "System Reviews" med repr\u00e6sentanter fra alle teams. Beslutninger dokumenteres \u00e5bent s\u00e5 alle kan f\u00f8lge med.',
      ],
    },
    inlineImage: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      alt: 'Komponentoversigt i Storybook',
      caption: 'Storybook-dokumentation med alle atomare komponenter og designtokens.',
    },
    results: {
      intro: 'Systemet er nu i produktion p\u00e5 alle tre platforme og bruges af 18 designere og udviklere dagligt.',
      cards: [
        { number: '60%', label: 'Hurtigere h\u00e5ndoff', desc: 'Designer-til-developer h\u00e5ndoff reduceret fra 3 dage til under 1 dag.' },
        { number: '200+', label: 'Komponenter', desc: 'Fuldt dokumenterede og testede komponenter klar til brug.' },
        { number: '18', label: 'Daglige brugere', desc: 'Designere og udviklere p\u00e5 tv\u00e6rs af alle tre produktteams.' },
      ],
    },
    nav: {
      prev: { slug: 'dentaaid-forebyggelse', title: 'DentaAid Forebyggelse' },
      next: null,
    },
  },
];
