const PROJECTS = [
  {
    slug: 'dsb-redesign',
    title: 'DSB',
    eyebrow: 'App Redesign · 2025',
    titleHtml: 'DSB —<br><em>redesign af</em><br>rejseappen',
    subtitle: 'Redesign af DSB’s rejseapp med fokus på en mere overskuelig rejseoplevelse og en ny check ind/ud-funktion.',
    cover: {
      src: 'assets/images/DSB-cover.png',
      alt: 'DSB — redesign af rejseappen',
    },
    meta: {
      client: 'DSB',
      period: '2025',
      role: 'Junior Designer',
      disciplines: 'UX · UI · Brugertest',
    },
    summary: {
      lead: 'DSB’s app bruges dagligt af tusindvis af rejsende til at finde og booke rejser, tjekke afgange og administrere deres billetter. Som junior designer var jeg del af det interne designteam der stod for et større redesign af appen, med særligt fokus på at gøre rejseoplevelsen mere overskuelig og tilgængelig — samt en ny check ind/ud-funktion.',

    },
    challenge: {
      heading: 'Udfordringen',
      paragraphs: [
        'Den eksisterende app havde vokset sig kompleks over tid, og brugere oplevede at centrale funktioner var svære at finde eller forstå. Samtidig skulle en ny check ind/ud-feature integreres på en måde der føltes naturlig og hurtig at bruge — særligt i en situation hvor brugeren er på farten og har få sekunder til rådighed.',
      ],
    },
    solution: {
      heading: 'Løsningen',
      paragraphs: [
        'Redesignet tog udgangspunkt i brugerresearch og -test der afdækkede hvor i appen folk stødte på friktion. På baggrund af indsigterne arbejdede vi med en gennemgående forenkling af navigationen og informationsarkitekturen, så de mest brugte funktioner — rejsesøgning, afgangsoversigt og rejsehistorik — var lettere at tilgå.',
        'Check ind/ud-funktionen blev designet til at være så hurtig og gnidningsfri som muligt. For en bruger der netop er ved at stige på toget er hvert ekstra trin en potentiel barriere, så flowet blev stripped ned til det absolut nødvendige uden at gå på kompromis med tydelighed.',
        'Den visuelle stil blev opdateret for at skabe mere klarhed og konsistens på tværs af appens mange skærme — med en stærkere hierarkisk struktur der gør det lettere at orientere sig hurtigt.',
      ],
    },
    branding: {
      heading: 'Branding og visuel retning',
      text: 'Brandingarbejdet fokuserede pa et roligt og konsekvent udtryk i appen. Typografi, farver og komponenthierarki blev strammet op, sa DSB-identiteten stod tydeligt frem uden at gore flowet tungere.',
      image: {
        src: 'assets/images/DSB-cover.jpg',
        alt: 'Brandingretning for DSB app-redesign',
      },
    },
    designDecisions: {
      heading: 'Designbeslutninger',
      paragraphs: [
        { text: 'Et gennemgående princip i redesignet var at prioritere brugerens mentale tilstand i kontekst. En person der tjekker afgange på perronen har et helt andet behov end en der sidder hjemme og planlægger en tur — og designet skulle håndtere begge scenarier elegant.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80' },
        { text: 'Brugertest spillede en central rolle i at validere beslutninger undervejs, særligt omkring check ind/ud-flowet og den nye navigationstruktur. Det gav os konkrete data at arbejde ud fra frem for at basere valg på antagelser.', image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80' },
        { text: 'Som junior designer på et etableret internt team var projektet en lærerig erfaring i at arbejde inden for et eksisterende designsystem og brand, bidrage konstruktivt i et team af erfarne designere og forstå hvordan store produktbeslutninger tages i en organisation som DSB.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80' },
      ],
    },
    inlineImage: {
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
      alt: 'DSB app redesign — navigation og check ind/ud',
      caption: 'Den forenklede navigation og det nye check ind/ud-flow.',
    },
    results: {
      intro: 'Redesignet fokuserede på at gøre rejseoplevelsen hurtigere og mere overskuelig for daglige brugere.',
      cards: [
        { number: '1 tap', label: 'Check ind/ud', desc: 'Flowet er stripped ned så brugeren kan checke ind med minimalt antal trin.' },
        { number: 'Forenklet', label: 'Navigation', desc: 'De mest brugte funktioner er nu lettere at finde og tilgå på tværs af appen.' },
        { number: 'Valideret', label: 'Med brugertest', desc: 'Beslutninger blev løbende testet og valideret med rigtige brugere.' },
      ],
    },
    nav: {
      prev: null,
      next: { slug: 'dentaaid-akutkit', title: 'DentaAid Akutkit' },
    },
  },

  {
    slug: 'dentaaid-akutkit',
    title: 'DentaAid-webapp',
    liveUrl: 'https://app.dentaaid.dk',
    eyebrow: 'UX Design · 2025',
    titleHtml: 'DentaAid — <em>vejledning der </em>beroliger',
    subtitle: 'En dansk teledentistry-platform der giver brugere adgang til tandægehjælp når de har brug for det — designet til den akutte, stressede bruger.',
    cover: {
      src: 'assets/images/Test.png',
      alt: 'DentaAid — akutkit vejledningsapp',
    },
    meta: {
      client: 'DentaAid',
      period: '6M',
      role: 'Product designer',
      disciplines: 'UX · Brugerflow · Figma',
    },
    tools: [
      { name: 'Figma', logo: 'assets/images/Figma_Symbol_0.svg' },
      { name: 'Tailwind', logo: 'assets/images/tailwindcss-logotype-white.svg' },
    ],
    summary: {
      lead: 'DentaAid er en dansk teledentistry-platform der giver brugere adgang til tandægehjælp når de har brug for det. Som solo designer stod jeg for det komplette design af deres webapp til vejledning i brugen af DentaAids akutkit.',
      
    },
    challenge: {
      heading: 'Hvad var problemet?',
      paragraphs: [
        'Brugere der oplever akutte tandsmerter er ofte stressede og usikre på hvad de skal gøre. Akutkittet indeholder flere forskellige værktøjer, og udfordringen var at designe en oplevelse der hurtigt og trygt kunne guide brugeren til den rigtige løsning. Udfordringen var at gøre det uden at overvælde dem med information — i en situation hvor kognitiv belastning i forvejen er høj.',
      
      ],
    },
    solution: {
      heading: 'Hvordan løste vi det?',
      paragraphs: [
        'Jeg designede et triage-baseret flow hvor brugeren besvarer en række spørgsmål for at blive ført direkte hen til den relevante løsningsside med video- og tekstvejledning. Spørgsmålene er struktureret så de gradvist indsnævrer problemet og aldrig føles som et medicinsk skema. På løsningssiden præsenteres brugeren for en kombination af video og tekst, så de selv kan vælge den læringsform der passer dem bedst. For at sikre at brugeren ikke efterlades alene med resultatet er der bygget en <strong style="color: var(--text);">opfølgningsfunktion ind — 30 minutter efter endt vejledning.</strong> For brugere der blot er nysgerrige på kittet er der en fri udforskningstilstand og direkte adgang til at booke en konsultation med en certificeret tandæge — enten som alternativ til selvbehandling eller som næste skridt.',
      ],
    },
    branding: {
      heading: 'Branding og tone of voice',
      text: 'Det visuelle udtryk blev designet til at virke roligt og trygt i en akut situation. Farver, ikoner og microcopy blev valgt for at reducere stress og skabe en tydelig, omsorgsfuld retning gennem forlobet.',
      image: {
        src: 'assets/images/Akutkit-branding.png',
        alt: 'Brandingretning for DentaAid Akutkit',
      },
    },
    designDecisions: {
      heading: 'Designvalg',
      paragraphs: [
        { text: 'Et centralt valg var at adskille de to primære brugsscenarier tydeligt: den akutte bruger der har brug for hurtig og tryg vejledning, og den nysgerrige bruger der vil lære om kittet i ro og mag. Begge veje skulle føles naturlige og ligeværdige — ingen af dem måtte opleves som en omvej eller en sekundær funktion.', image: 'assets/images/Akutkit-app.png' },
        { text: 'I det akutte flow var det vigtigt at minimere den kognitive belastning. Det betød korte, klare spørgsmål, én beslutning ad gangen, og en visuel stil der signalerer ro og kontrol frem for hastværk. Farver og typografi er bevidst holdt nedtonede i flowet for ikke at tilføje unødig uro til en i forvejen stresset situation.', image: 'assets/images/ssurvey.png' },
        { text: 'Bookingfunktionen til direkte tandægekonsultation er tilgængelig gennem hele oplevelsen, men er designet til ikke at dominere. Den er der som en sikkerhedsventil — synlig nok til at brugeren altid ved den eksisterer, men ikke så fremtrædende at den underminerer tilliden til selvvejledningen.', image: 'assets/images/Akutkit-Booking.png' },
        { text: 'Opfølgningsfunktionen efter 30 minutter var et valg der udsprang af et ønske om at forlænge designets ansvar ud over selve opgaveløsningen. I stedet for at betragte brugerrejsen som afsluttet når vejledningen er fulgt, holder appen kontakten og sikrer at brugeren har et naturligt næste skridt — uanset om behandlingen virkede eller ej.', image: 'assets/images/Akutkit-opfølgning.png' },
      ],
    },
    inlineImage: false,
    results: {
      intro: '',
      cards: [
        { number: '89%', label: 'Til næste skridt', desc: 'Andelen af brugere der fuldfører diagnose-flowet uden at forlade processen.' },
        { number: '30 min', label: 'Opfølgningsvindue', desc: 'Bevidst valgt tidspunkt der giver behandlingen tid til at virke før brugeren tjekker ind.' },
        { number: '0%', label: 'Klare brugsscenarier', desc: 'Andelen af brugere som angav at de følte sig overvældet under brugertests.' },
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
    liveUrl: 'https://app.dentaaid.dk/wellness/dashboard',
    liveNote: 'Kræver login',
    eyebrow: 'UX Design · 2025',
    titleHtml: 'DentaAid —<br><em>forebyggelse der</em><br>føles overkommeligt',
    subtitle: 'Et selvstændigt digitalt forebyggelsesløb målrettet mennesker med særlig risiko for dårlig mundsundhed — gravide, diabetikere og kræftpatienter.',
    cover: {
      src: 'assets/images/Forebyggelse-cover.png',
      alt: 'DentaAid Forebyggelse — webapp interface',
    },
    meta: {
      client: 'DentaAid',
      period: '3M',
      role: 'Product designer',
      disciplines: 'UX · Informationsarkitektur · Figma',
    },
    summary: {
      lead: 'DentaAids forebyggelsesløb er et selvstændigt digitalt produkt målrettet mennesker med særlig risiko for dårlig mundsundhed. Som solo designer stod jeg for det komplette design af webappen, fra informationsarkitektur og brugerflows til det færdige visuelle design.',
    
    },
    challenge: {
      heading: 'Hvad var problemet?',
      paragraphs: [
        'Mennesker i risikogrupper har ofte forhøjet behov for opfølgning på deres mundsundhed, men mangler redskaberne til at monitorere den løbende eller vide hvornår de skal søge hjælp. Udfordringen var at designe en oplevelse der gør det let og overskueligt at holde styr på sin mundsundhed over tid — uden at det føles som en medicinsk byrde i hverdagen.',
      ],
    },
    solution: {
      heading: 'Hvordan er det bygget op?',
      paragraphs: [
        'Forløbet er bygget op omkring to faste rytmer: ugentligt besvarer brugeren spørgsmål om blødning i tandkødet, månedligt uploader de 5–6 billeder som tandlægen bruger til at vurdere tilstanden over tid. På baggrund af denne data udarbejder tandlægen en professionel rapport med vurdering af potentielle problemer. <strong style="color: var(--text);">Målet er at komme problemerne i forkøbet — ikke at reagere når skaden allerede er sket.</strong> Når brugeren tilmelder sig modtager de en fysisk pakke med udstyr særligt udtænkt til deres gruppe. I appen kan de se hvad pakken indeholder med billeder og vejledning til korrekt brug — så forbindelsen mellem det fysiske kit og den digitale oplevelse føles sammenhængende. Som en del af forløbet har brugeren et antal inkluderede konsultationer med en tandlæge, som nemt kan bookes direkte i appen.',
      ],
    },
    branding: {
      heading: 'Branding i forebyggelsesforlobet',
      text: 'Brandingretningen blev holdt blod, overskuelig og tillidsfuld for at understotte et langsigtet forlob. Visuelle elementer blev standardiseret, sa produktet foles konsistent pa tvars af check-ins, rapporter og kit-oversigt.',
      image: {
        src: 'assets/images/Dentaaid-branding.png',
        alt: 'Brandingretning for DentaAid Forebyggelse',
      },
    },
    designDecisions: {
      heading: 'Designvalg',
      paragraphs: [
        { text: 'En af de vigtigste designudfordringer var at gøre de løbende check-ins lette nok til at brugeren faktisk gennemfører dem — uge efter uge. Det betød at spørgsmålsflowet skulle føles kort og konkret, og at den visuelle stil skulle signalere omsorg og tryghed frem for klinisk kontrol. Brugerne er i en sårbar situation, og designet skulle afspejle det.', image: 'assets/images/Forebyggelse-logbog.png' },
        { text: 'Foto-upload flowet krævede særlig opmærksomhed, da det potentielt er en barriere for mange brugere. Her var det vigtigt at give tydelig vejledning om hvordan billederne tages korrekt, så tandlægen får et brugbart grundlag — uden at det føles kompliceret eller teknisk for brugeren.', image: 'assets/images/Forebyggelse-billeder.png' },
        { text: 'Rapporten fra tandlægen er designet til at være tilgængelig og forståelig for en lægmand. Frem for at præsentere rå data eller medicinsk terminologi er fokus på hvad brugeren skal vide og hvad de eventuelt skal gøre — formidlet på en måde der ikke skaber unødig bekymring.', image: 'assets/images/Forebyggelse-rapport.png' },
        { text: 'Kit-oversigten i appen er med til at skabe sammenhæng mellem det fysiske og det digitale produkt. Det var et bevidst valg at give hvert produkt i pakken sin egen plads med billeder og vejledning, så brugeren fra dag ét føler sig klædt på til forløbet.', image: 'assets/images/Forebyggelse-kit.png' },
      ],
    },
    inlineImage: false,
    results: {
      intro: 'Designet tog udgangspunkt i tre succeskriterier: completion rate på løbende check-ins, brugeroplevet tryghed og sammenhæng mellem fysisk kit og digital oplevelse.',
      cards: [
        { number: '87%', label: 'Faste rytmer', desc: 'Gennemførte ugentlige check-ins efter 3 måneder — det lette spørgsmålsdesign og den visuelle tone skaber en vedvarende vane frem for en klinisk forpligtelse.' },
        { number: '96%', label: 'Foto-upload', desc: 'Andelen af brugere som forstod hvordan billederne skulle tages korrekt.' },
        { number: '100%', label: 'Risikogrupper', desc: 'Sammenhæng mellem fysisk kit og digital oplevelse.' },
      ],
    },
    nav: {
      prev: { slug: 'dentaaid-akutkit', title: 'DentaAid Akutkit' },
      next: { slug: 'dentaaid-hjemmeside', title: 'DentaAid Hjemmeside' },
    },
  },

  {
    slug: 'dentaaid-hjemmeside',
    title: 'DentaAid Hjemmeside',
    liveUrl: 'https://dentaaid.dk',
    eyebrow: 'Website Design · 2025',
    titleHtml: 'DentaAid —<br><em>hjemmeside med</em><br>klar retning',
    subtitle: 'Design og udvikling af DentaAids hjemmeside med fokus på tillid, tydelig struktur og bedre konvertering.',
    cover: {
      src: 'assets/images/Dentaaid-hjemmeside-cover.png',
      alt: 'DentaAid — hjemmeside',
    },
    meta: {
      client: 'DentaAid',
      period: '2 uger',
      role: 'Product designer',
      disciplines: 'Web Design · UX · UI',
    },
    tools: [
      { name: 'Figma', logo: 'assets/images/Figma_Symbol_0.svg' },
      { name: '', logo: 'assets/images/shopify_logo_darkbg.svg', logoClass: 'tool-logo--shopify' },
    ],
    summary: {
      lead: 'DentaAid er en dansk teledentistry-platform der giver folk adgang til professionel tandlægehjælp digitalt — uden ventetid og uden at skulle møde fysisk op på en klinik. Som solo designer og udvikler stod jeg for hele processen fra informationsarkitektur og visuel retning til det færdige website bygget i Shopify.',
    },
    results: {
      intro: '',
      cards: [
        { number: 'Tilgængelig', label: 'Tydelig struktur', desc: 'DentaAids tre kerneydelser er præsenteret klart og overskueligt, så nye besøgende hurtigt forstår hvad platformen tilbyder.' },
        { number: 'Troværdig ', label: 'Konverteringsvej', desc: 'Siden kommunikerer professionalisme og tillid gennem konsistent visuel stil og tydelig fremhævelse af autoriserede tandlæger og dansk GDPR-compliance.' },
        { number: 'Konverterende ', label: 'Visuelt system', desc: 'Primære CTA\'er er strategisk placeret gennem hele siden, så vejen fra første besøg til booking er så kort og gnidningsfri som muligt.' },
      ],
    },
    challenge: {
      heading: 'Udfordringen',
      paragraphs: [
        'DentaAid havde brug for en hjemmeside der kunne præsentere deres teledentistry-platform klart og troværdigt over for danskere der søger hurtig tandlægehjælp. Udfordringen var at kommunikere et relativt nyt koncept — digital tandpleje — på en måde der både skaber tillid og overbeviser besøgende om at det er et reelt og professionelt alternativ til den traditionelle tandklinik.',
      ],
    },
    solution: {
      heading: 'Løsningen',
      paragraphs: [
        'Jeg designede og byggede hjemmesiden i Shopify, med fokus på at gøre DentaAids tre kerneydelser — akut konsultation, forebyggelsesforløb og nødkit — lette at forstå og tilgå. Siden er struktureret til at guide besøgende fra problemgenkendelse til handling, og understøtter tilliden til platformen gennem tydelig kommunikation om autoriserede tandlæger, hurtig svartid og dansk GDPR-compliance.',
      ],
    },
    showDesignDecisions: false,
    inlineImage: {
      src: 'assets/images/Dentaaid-promo.mp4',
      alt: 'Oversigt over DentaAid hjemmeside og sektioner',
      caption: 'Hjemmesiden er bygget op med tydelig prioritering af budskaber og næste skridt.',
    },
    nav: {
      prev: { slug: 'dentaaid-forebyggelse', title: 'DentaAid Forebyggelse' },
      next: { slug: 'agilio', title: 'Agilio' },
    },
  },

  {
    slug: 'agilio',
    title: 'Agilio',
    liveUrl: 'https://agilio.one',
    eyebrow: 'Website Design · Freelance',
    titleHtml: 'Agilio —<em> europæisk </em>projektstyring',
    subtitle: 'Hjemmeside til et europæisk alternativ til Jira, Linear og Asana — designet til softwareteams med fokus på datasikkerhed.',
    cover: {
      src: 'assets/images/Agilio-Cover.png',
      alt: 'Agilio — hjemmeside til europæisk projektstyring',
    },
    meta: {
      client: 'Agilio',
      period: 'Freelance',
      role: 'Product Designer',
      disciplines: 'Web Design · UX · UI',
    },
    summary: {
      lead: 'Agilio er et europæisk alternativ til Jira, Linear og Asana — bygget til softwareteams der vil styre projekter og sprints uden at gå på kompromis med datasikkerhed. Som solo designer og freelancer stod jeg for det komplette design af Agilios hjemmeside.',
     
    },
    challenge: {
      heading: 'Udfordringen',
      paragraphs: [
        'Markedet for projektstyringsværktøjer er domineret af veletablerede aktører med store brands. Agilios stærkeste differentiator er ikke en feature — det er hvor dataen ligger. Udfordringen var at løfte EU-datasuverænitet fra et compliance-argument til et ægte og følelsesmæssigt salgsargument, og samtidig overbevise tekniske beslutningstagere om at produktet feature-mæssigt kan matche konkurrenterne.',
      ],
    },
    solution: {
      heading: 'Løsningen',
      paragraphs: [
        'Jeg designede en hjemmeside der oversætter Agilios tekniske og juridiske fordele til et klart og tilgængeligt budskab rettet mod softwareteams og tekniske beslutningstagere. Siden er struktureret til at guide besøgende fra problembevidsthed — hvorfor det overhovedet er et problem at data ligger på amerikanske servere — til konkret produktforståelse og konvertering. Udover det primære datasikkerhedsargument kommunikerer siden at Agilio feature-mæssigt kan stå mål med de etablerede alternativer, og at overgangen fra eksisterende værktøjer er gjort så gnidningsfri som muligt.'
      ],
    },
    showDesignDecisions: false,
    designDecisions: {
      heading: 'Designvalg',
      paragraphs: [
        { text: 'Det indledende spørgsmål blev bevidst skrevet som en konfrontation frem for en klassisk value proposition. Formålet var at få EU-datasuverænitet til at føles som et aktivt valg og ikke blot en juridisk detalje.', image: 'assets/images/Agilio-hero.png' },
        { text: 'Feature-gridet blev holdt kompakt og stramt, så produktet fremstår modent og kompetent uden at lande i en lang, tung enterprise-fortælling. Strukturen skulle signalere at Agilio kan matche de store spillere uden at kopiere deres tone.', image: 'assets/images/Agilio-Cover.png' },
        { text: 'Sensitive Data Shield og migration fik hver deres sektion, fordi de svarer på to forskellige former for modstand: rationel skepsis omkring sikkerhed og operationel frygt for at skifte værktøj. Det gjorde argumentationen mere troværdig og lettere at aflæse.', image: 'assets/images/Agilio-Cover.png' },
        { text: 'Den mørke hero kombineret med et lyst, roligt content-layout var et bevidst valg for at skabe kontrast mellem provokation og troværdighed. Heroen skaber kant, mens resten af siden skal få produktet til at føles stabilt, modent og klar til brug i en seriøs B2B-kontekst.', image: 'assets/images/Agilio-Cover.png' },
      ],
    },
    inlineImage: {
      src: 'assets/images/Agilio-website.png',
      alt: 'Agilio website hero og indholdssektioner',
      caption: 'Det visuelle koncept kombinerer en mørk hero med et lyst indhold-layout for at balancere kant og troværdighed.',
    },
    results: {
      intro: 'Case-siden er bygget op omkring de centrale salgsargumenter, der skulle flytte Agilio fra endnu et projektstyringsværktøj til et tydeligt europæisk alternativ.',
      cards: [
        { number: '1', label: 'Kernebudskab', desc: 'Datasuverænitet blev løftet frem som det primære salgsargument fra første sektion.' },
        { number: '2', label: 'Barrierer adresseret', desc: 'Sikkerhed og migration blev gjort til egne fortællinger for at mindske modstand mod at skifte.' },
        { number: '1 pris', label: 'Forenklet pricing', desc: 'Et enkelt prisniveau med to hosting-muligheder reducerer friktion i beslutningsprocessen.' },
      ],
    },
    nav: {
      prev: { slug: 'dentaaid-hjemmeside', title: 'DentaAid Hjemmeside' },
      next: null,
    },
  },
];
