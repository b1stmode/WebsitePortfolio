(function () {
  var translations = {
    en: {
      eyebrow: "Software & game developer",
      heroLine1: "Ideas in motion, ",
      heroAccent: "code in place.",
      heroSub: "Games, web apps, and developer tools — built one problem at a time.",
      aboutP1: "I build games, web apps, and developer tools — whatever the problem calls for.",
      aboutP2: "My approach is hands-on: dive in, figure out what works, learn from what doesn't, and keep iterating.",
      skillsMarker: "Skills",
      learningHeading: "Learning",
      learningNote: "Courses I've worked through, hand-coded drills, and certificates completed along the way.",
      coursesHeading: "Courses",
      certsHeading: "Certificates",
      course1Desc: "Structured course expanding on Unity workflows and C# scripting through guided projects and practical game systems.",
      course2Desc: "Beginner-friendly introduction to Unity and C#, used as an initial resource to understand core scripting concepts and engine basics.",
      course3Desc: "Project-based course covering HTML, CSS, and JavaScript through short and practical projects.",
      practiceHeading: "Hand-coded drills",
      jsLgDesc: "Every drill written by hand and timed — practising each new topic right after learning it under time pressure, and keeping my own problem-solving sharp instead of leaving the code to AI. From loops and functions to map, filter, and reduce.",
      pyLgDesc: "Same approach, same reasons, applied to Python as a second language — started from the basics in August 2026.",
      workHeading: "Selected work",
      workNote: "Three featured projects in full, everything else indexed below.",
      standbyDate: " · June 2026",
      standbyDesc: "Shot timer and training companion for airsoft and range training.",
      kfLabel: "Key features",
      standbyKf1: "Offline-first PWA — installable on phone and desktop, no account required",
      standbyKf2: "Audio-based shot detection — mic stops the timer on confirmed shots",
      standbyKf3: "Drill library with built-in classics and a custom drill builder",
      geDate: "July 2026",
      geDesc: "Explore public GitHub profiles and repositories through the REST API.",
      geKf1: "Profile explorer — repositories, languages, activity, and metrics",
      geKf2: "Repository search with in-page detail view and README display",
      geKf3: "Client-side only — no login, backend, or build tools required",
      gearupDate: "May 2026",
      gearupDesc: "A mobile-first Progressive Web App designed for managing equipment, preparing loadouts, organizing operations, and tracking gear across devices. Designed and directed by me, with implementation developed through an AI-assisted workflow.",
      gearupKf1: "Offline-first PWA — installable on phone and desktop",
      gearupKf2: "Armory system: ownership, lending, maintenance, ammo tracking",
      gearupKf3: "Operations Center: briefings, objectives, maps, checklists",
      pmDate: "June 2026",
      pmDesc: "Project-management workspace built around knowing what to work on next.",
      pmKf1: "Project → version → milestone → task hierarchy instead of one flat task list",
      pmKf2: "Work-session tracking for continuity between sessions",
      pmKf3: "Offline-capable PWA on a Supabase backend, syncing when the connection returns",
      clioDate: "November 2026",
      clioRole: "Study workspace that brings learning materials, assignments, and an Obsidian vault together.",
      clioDesc: "Built for my own school work: one place for deadlines, study materials, and notes, without replacing the tools I already use. Obsidian stays the source of truth for notes, and Clio adds the organisation around them. Designed and directed by me, built with the assistance of Claude Code.",
      clioKf1: "Overview with today's focus, upcoming deadlines, and recently opened items",
      clioKf2: "Assignments with deadlines, priorities, and progress, in agenda or calendar view",
      clioKf3: "Resource library for files and links, organised by subject and topic",
      clioKf4: "Works with an existing local Obsidian vault — browse, read, and create notes",
      clioKf5: "Installable PWA with keyboard shortcuts and a command palette",
      sspsDate: "November 2026 · In progress",
      sspsRole: "Website for the SSPŠ school airsoft club, which I co-founded and help organise.",
      sspsDesc: "The club's public face for students and potential partners: who we are, what we do, and how safety is handled. Built in planned steps on a small design system of tokens and shared components. Still in progress, so some sections hold placeholders until the club's details are final. Designed and directed by me, built with the assistance of Claude Code.",
      sspsKf1: "Czech-language site with home, about, gallery, and partner pages",
      sspsKf2: "Design tokens and shared components keep every page consistent",
      sspsKf3: "Accessible mobile menu with focus trap, Esc to close, and scroll lock",
      sspsKf4: "Responsive WebP and JPG photos in three sizes",
      ratDate: "September 2026",
      ratRole: "Website for RAT PMC, the Czech airsoft team I co-founded.",
      ratDesc: "The team's public home: who we are, how we train, and how to join. It started in 2025 as a simple site for the 10.SOF Brigade, was rebuilt when RAT PMC was founded, and redesigned in 2026 around a year-by-year photo archive. Designed and directed by me, built with the assistance of Claude Code.",
      ratKf1: "Home, About, and Gallery pages covering the team's history and its three detachments",
      ratKf2: "Photo archive grouped by year, with a full-screen viewer",
      ratKf3: "Image pipeline that generates WebP and JPG sizes for fast loading",
      ratKf4: "Mobile-first layout",
      ratKf5: "Recruitment handled through the team's Discord",
      cmDate: "May 2026",
      cmDesc: "Claude Code usage limits, always visible.",
      cmKf1: "Permanent status bar item — no commands needed",
      cmKf2: "Tracks 5-hour and weekly usage limits",
      cmKf3: "Color-coded by usage percentage",
      bhDate: "February 2026",
      bhDesc: "Atmospheric exploration game, solo long-term project.",
      bhKf1: "First-person exploration in a fictionalized 1977",
      bhKf2: "Custom radiation exposure and hazard systems",
      bhKf3: "All models, textures, and levels built from scratch",
      rdDate: "June 2025",
      rdDesc: "Physics-based precision timing game.",
      rdKf1: "Physics-driven movement with unforgiving controls",
      rdKf2: "Difficulty scaling across multiple levels",
      rdKf3: "Menus, control scheme, and death counter added independently",
      radDate: "February 2025",
      radDesc: "Dice rolling simulator, vanilla JS.",
      radKf1: "Two independent dice with separate roll histories",
      radKf2: "Event-driven DOM manipulation — no frameworks"
    },
    // Czech translations below. Provenance:
    //  - Verified (carried over verbatim/near-verbatim from the real, previously-shipped index-cs.html):
    //    aboutP1, aboutP2, bhDesc, bhKf1, bhKf2, bhKf3, rdKf1, rdKf2, radDesc, radKf1, radKf2
    //  - NOT yet verified by the site owner (first-pass AI translation — review before treating as final):
    //    eyebrow, heroLine1, heroAccent, heroSub, skillsMarker, workHeading, workNote,
    //    standby*, gearup*, pm*, rat*, clio*, ssps*, indexHeading, cmDesc, cmKf1-3, rdDesc, rdKf3,
    //    learningHeading, learningNote, coursesHeading, certsHeading, course1Desc, course2Desc, course3Desc,
    //    ge*, practiceHeading, jsLgDesc, pyLgDesc
    cs: {
      eyebrow: "Software a herní vývojář",
      heroLine1: "Ideas in motion, ",
      heroAccent: "code in place.",
      heroSub: "Hry, webové aplikace a vývojářské nástroje — jeden problém po druhém.",
      aboutP1: "Vyvíjím hry, webové aplikace a vývojářské nástroje — cokoliv, co situace vyžaduje.",
      aboutP2: "Můj přístup je praktický: ponořím se do projektu, zjistím, co funguje, poučím se z chyb a neustále iteruji.",
      skillsMarker: "Dovednosti",
      learningHeading: "Vzdělávání",
      learningNote: "Kurzy, kterými jsem prošel, ručně psaná cvičení a certifikáty získané po cestě.",
      coursesHeading: "Kurzy",
      certsHeading: "Certifikáty",
      course1Desc: "Strukturovaný kurz rozšiřující znalosti Unity workflow a C# skriptování prostřednictvím vedených projektů a praktických herních systémů.",
      course2Desc: "Úvod pro začátečníky do Unity a C#, použitý jako první zdroj pro pochopení základních konceptů skriptování a enginu.",
      course3Desc: "Projektově orientovaný kurz pokrývající HTML, CSS a JavaScript prostřednictvím krátkých praktických projektů.",
      practiceHeading: "Ručně psaná cvičení",
      jsLgDesc: "Každé cvičení napsané ručně a na čas — procvičení nového tématu hned po naučení pod časovým tlakem a zároveň udržení vlastního řešení problémů, místo abych kód nechával jen na AI. Od cyklů a funkcí po map, filter a reduce.",
      pyLgDesc: "Stejný přístup ze stejných důvodů, tentokrát u Pythonu jako druhého jazyka — od úplných základů, začátek v srpnu 2026.",
      workHeading: "Vybrané projekty",
      workNote: "Tři vybrané projekty v plném rozsahu, zbytek je v seznamu níže.",
      standbyDate: " · červen 2026",
      standbyDesc: "Časovač výstřelů a tréninkový pomocník pro airsoft a střelecký trénink.",
      kfLabel: "Klíčové funkce",
      standbyKf1: "Offline-first PWA — lze nainstalovat na telefon i počítač, bez nutnosti účtu",
      standbyKf2: "Zvukové rozpoznávání výstřelů — mikrofon zastaví časovač při potvrzeném výstřelu",
      standbyKf3: "Knihovna cvičení s klasikami a možností vytvořit vlastní cvičení",
      geDate: "červenec 2026",
      geDesc: "Prohlížení veřejných GitHub profilů a repozitářů přes REST API.",
      geKf1: "Průzkumník profilů — repozitáře, jazyky, aktivita a metriky",
      geKf2: "Vyhledávání repozitářů s detailem přímo na stránce a zobrazením README",
      geKf3: "Čistě na straně klienta — bez přihlášení, backendu i build nástrojů",
      gearupDate: "květen 2026",
      gearupDesc: "Mobile-first progresivní webová aplikace navržená pro správu vybavení, přípravu loadoutů, organizaci operací a sledování vybavení napříč zařízeními. Návrh a vedení projektu jsou moje, implementace vznikla ve spolupráci s AI.",
      gearupKf1: "Offline-first PWA — lze nainstalovat na telefon i počítač",
      gearupKf2: "Systém zbrojnice: vlastnictví, půjčování, údržba, sledování munice",
      gearupKf3: "Operační centrum: briefingy, cíle, mapy, checklisty",
      pmDate: "červen 2026",
      pmDesc: "Nástroj pro řízení projektů postavený kolem toho, aby bylo vždy jasné, na čem pracovat dál.",
      pmKf1: "Hierarchie projekt → verze → milník → úkol místo jednoho dlouhého seznamu úkolů",
      pmKf2: "Záznam pracovních sessions, aby bylo snadné navázat na předchozí práci",
      pmKf3: "Offline PWA se Supabase backendem, synchronizace po obnovení připojení",
      clioDate: "listopad 2026",
      clioRole: "Studijní pracovní prostor, který spojuje studijní materiály, úkoly a Obsidian vault.",
      clioDesc: "Vytvořeno pro mou vlastní školní práci: jedno místo pro termíny, studijní materiály a poznámky, bez nahrazování nástrojů, které už používám. Obsidian zůstává hlavním zdrojem poznámek a Clio kolem nich přidává organizaci. Návrh a vedení jsou moje, vytvořeno s asistencí Claude Code.",
      clioKf1: "Přehled s dnešními prioritami, blížícími se termíny a naposledy otevřenými položkami",
      clioKf2: "Úkoly s termíny, prioritami a stavem, v zobrazení agendy nebo kalendáře",
      clioKf3: "Knihovna souborů a odkazů organizovaná podle předmětů a témat",
      clioKf4: "Napojení na existující lokální Obsidian vault — procházení, čtení a vytváření poznámek",
      clioKf5: "Instalovatelná PWA s klávesovými zkratkami a paletou příkazů",
      sspsDate: "listopad 2026 · Rozpracováno",
      sspsRole: "Web školního airsoftového klubu SSPŠ, který jsem spoluzaložil a pomáhám organizovat.",
      sspsDesc: "Veřejná tvář klubu pro studenty a potenciální partnery: kdo jsme, co děláme a jak řešíme bezpečnost. Stavěno v plánovaných krocích na malém design systému z tokenů a sdílených komponent. Stále rozpracováno, takže některé sekce obsahují zástupný text, dokud nebudou detaily klubu finální. Návrh a vedení jsou moje, vytvořeno s asistencí Claude Code.",
      sspsKf1: "Web v češtině se stránkami Domů, O nás, Galerie a Pro partnery",
      sspsKf2: "Design tokeny a sdílené komponenty drží všechny stránky jednotné",
      sspsKf3: "Přístupné mobilní menu s focus trapem, zavřením přes Esc a zámkem scrollu",
      sspsKf4: "Responzivní fotky ve formátech WebP a JPG ve třech velikostech",
      ratDate: "září 2026",
      ratRole: "Web pro RAT PMC, český airsoftový tým, který jsem spoluzaložil.",
      ratDesc: "Veřejná tvář týmu: kdo jsme, jak trénujeme a jak se přidat. Vznikl v roce 2025 jako jednoduchý web pro 10.SOF Brigade, po založení RAT PMC byl přestavěn a v roce 2026 přepracován s fotoarchivem rozděleným podle let. Návrh a vedení jsou moje, vytvořeno s asistencí Claude Code.",
      ratKf1: "Stránky Domů, O nás a Galerie s historií týmu a jeho třemi oddíly",
      ratKf2: "Fotoarchiv rozdělený podle let s celoobrazovkovým prohlížečem",
      ratKf3: "Generování obrázků ve formátech WebP a JPG v několika velikostech pro rychlé načítání",
      ratKf4: "Rozvržení navržené primárně pro mobil",
      ratKf5: "Nábor probíhá přes Discord týmu",
      cmDate: "květen 2026",
      cmDesc: "Limity využití Claude Code, vždy viditelné.",
      cmKf1: "Trvalá položka ve stavovém řádku — bez nutnosti příkazů",
      cmKf2: "Sleduje 5hodinové i týdenní limity využití",
      cmKf3: "Barevné odlišení podle procenta využití",
      bhDate: "únor 2026",
      bhDesc: "Atmosférická průzkumová hra, dlouhodobý sólo projekt.",
      bhKf1: "First-person atmosférický průzkum zasazený do zfiktovaného Československa roku 1977",
      bhKf2: "Vlastní systémy gameplay — vliv radiace, anomální jevy",
      bhKf3: "Veškeré modely, textury a level design vytvořeny mnou od nuly",
      rdDate: "červen 2025",
      rdDesc: "Fyzikální hra založená na přesném časování.",
      rdKf1: "Fyzicky řízený přesný pohyb s přísným, nekompromisním ovládáním",
      rdKf2: "Postupné zvyšování obtížnosti napříč úrovněmi",
      rdKf3: "Menu, ovládací schéma a počítadlo úmrtí přidány samostatně",
      radDate: "únor 2025",
      radDesc: "Simulátor hodu kostkami, čistý JavaScript.",
      radKf1: "Dvě nezávislé kostky s oddělenou historií hodů",
      radKf2: "Event-driven manipulace s DOM — bez frameworků"
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = translations[lang] && translations[lang][key];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang-btn'));
    });
  });

  var params = new URLSearchParams(location.search);
  var requested = params.get('lang');
  var saved;
  try { saved = localStorage.getItem('lang'); } catch (e) { saved = null; }
  var initial = requested === 'cs' || requested === 'en' ? requested : (saved === 'cs' ? 'cs' : 'en');

  if (initial === 'cs') applyLang('cs');
  else { document.documentElement.lang = 'en'; }
})();
