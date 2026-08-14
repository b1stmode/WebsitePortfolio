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
      learningNote: "Courses I've worked through, and certificates completed along the way.",
      coursesHeading: "Courses",
      certsHeading: "Certificates",
      course1Desc: "Structured course expanding on Unity workflows and C# scripting through guided projects and practical game systems.",
      course2Desc: "Beginner-friendly introduction to Unity and C#, used as an initial resource to understand core scripting concepts and engine basics.",
      course3Desc: "Project-based course covering HTML, CSS, and JavaScript through short and practical projects.",
      workHeading: "Selected work",
      workNote: "Two most recent projects in full, everything else indexed below.",
      standbyLatest: "Latest",
      standbyDate: " · June 2026",
      standbyRole: "Shot timer and training companion for airsoft and range training.",
      standbyDesc: "A mobile-first Progressive Web App built for use on the range, during the drill, in the moment, timer, drill library, and training log in a single offline-capable tool. Designed and directed by me, with implementation developed through an AI-assisted workflow.",
      kfLabel: "Key features",
      standbyKf1: "Offline-first PWA — installable on phone and desktop, no account required",
      standbyKf2: "Audio-based shot detection — mic stops the timer on confirmed shots",
      standbyKf3: "Drill library with built-in classics and a custom drill builder",
      standbyKf4: "Calibration system — measures ambient noise to suggest your threshold",
      standbyKf5: "Training log — notebook-style entries with splits and scores",
      standbyKf6: "Field Mode for outdoor readability in direct sunlight",
      gearupDate: "May 2026",
      gearupRole: "Operational management platform for airsoft and milsim environments.",
      gearupDesc: "A mobile-first Progressive Web App designed for managing equipment, preparing loadouts, organizing operations, and tracking gear across devices. Designed and directed by me, with implementation developed through an AI-assisted workflow.",
      gearupKf1: "Offline-first PWA — installable on phone and desktop",
      gearupKf2: "Armory system: ownership, lending, maintenance, ammo tracking",
      gearupKf3: "Operations Center: briefings, objectives, maps, checklists",
      gearupKf4: "Automated loadout generation by season, role, and condition",
      gearupKf5: "Cross-device sync via Supabase with local persistence",
      pmDate: "June 2026",
      pmRole: "Session-based project and task tracker for developers.",
      pmDesc: "A command-center view for active development work — projects, milestones, tasks, and session logs in one place, built to surface what to work on next without demanding constant upkeep. Designed and directed by me, with implementation developed through an AI-assisted workflow.",
      pmKf1: "Projects, milestones, and tasks organized in one place",
      pmKf2: "Session log for tracking development work over time",
      pmKf3: "Built around always knowing what to work on next",
      cmDesc: "Claude Code usage limits, always visible.",
      cmKf1: "Permanent status bar item — no commands needed",
      cmKf2: "Tracks 5-hour and weekly usage limits",
      cmKf3: "Color-coded by usage percentage",
      bhDesc: "Atmospheric exploration game, solo long-term project.",
      bhKf1: "First-person exploration in a fictionalized 1977",
      bhKf2: "Custom radiation exposure and hazard systems",
      bhKf3: "All models, textures, and levels built from scratch",
      rdDesc: "Physics-based precision timing game.",
      rdKf1: "Physics-driven movement with unforgiving controls",
      rdKf2: "Difficulty scaling across multiple levels",
      rdKf3: "Menus, control scheme, and death counter added independently",
      radDesc: "Dice rolling simulator, vanilla JS.",
      radKf1: "Two independent dice with separate roll histories",
      radKf2: "Event-driven DOM manipulation — no frameworks"
    },
    // Czech translations below. Provenance:
    //  - Verified (carried over verbatim/near-verbatim from the real, previously-shipped index-cs.html):
    //    aboutP1, aboutP2, bhDesc, bhKf1, bhKf2, bhKf3, rdKf1, rdKf2, radDesc, radKf1, radKf2
    //  - NOT yet verified by the site owner (first-pass AI translation — review before treating as final):
    //    eyebrow, heroLine1, heroAccent, heroSub, skillsMarker, workHeading, workNote,
    //    standby*, gearup*, pm*, indexHeading, cmDesc, cmKf1-3, rdDesc, rdKf3,
    //    learningHeading, learningNote, coursesHeading, certsHeading, course1Desc, course2Desc, course3Desc
    cs: {
      eyebrow: "Software a herní vývojář",
      heroLine1: "Ideas in motion, ",
      heroAccent: "code in place.",
      heroSub: "Hry, webové aplikace a vývojářské nástroje — jeden problém po druhém.",
      aboutP1: "Vyvíjím hry, webové aplikace a vývojářské nástroje — cokoliv, co situace vyžaduje.",
      aboutP2: "Můj přístup je praktický: ponořím se do projektu, zjistím, co funguje, poučím se z chyb a neustále iteruji.",
      skillsMarker: "Dovednosti",
      learningHeading: "Vzdělávání",
      learningNote: "Kurzy, kterými jsem prošel, a certifikáty získané po cestě.",
      coursesHeading: "Kurzy",
      certsHeading: "Certifikáty",
      course1Desc: "Strukturovaný kurz rozšiřující znalosti Unity workflow a C# skriptování prostřednictvím vedených projektů a praktických herních systémů.",
      course2Desc: "Úvod pro začátečníky do Unity a C#, použitý jako první zdroj pro pochopení základních konceptů skriptování a enginu.",
      course3Desc: "Projektově orientovaný kurz pokrývající HTML, CSS a JavaScript prostřednictvím krátkých praktických projektů.",
      workHeading: "Vybrané projekty",
      workNote: "Dva nejaktuálnější projekty v plném rozsahu, zbytek je v seznamu níže.",
      standbyLatest: "Nejnovější",
      standbyDate: " · červen 2026",
      standbyRole: "Časovač výstřelů a tréninkový pomocník pro airsoft a střelecký trénink.",
      standbyDesc: "Mobile-first progresivní webová aplikace (PWA) vytvořená pro použití přímo na střelnici, během cvičení, v daném okamžiku, časovač, knihovna cvičení a tréninkový deník v jednom nástroji fungujícím i offline. Návrh a vedení projektu jsou moje, implementace vznikla ve spolupráci s AI.",
      kfLabel: "Klíčové funkce",
      standbyKf1: "Offline-first PWA — lze nainstalovat na telefon i počítač, bez nutnosti účtu",
      standbyKf2: "Zvukové rozpoznávání výstřelů — mikrofon zastaví časovač při potvrzeném výstřelu",
      standbyKf3: "Knihovna cvičení s klasikami a možností vytvořit vlastní cvičení",
      standbyKf4: "Kalibrační systém — měří okolní hluk a navrhne vhodný práh citlivosti",
      standbyKf5: "Tréninkový deník — záznamy ve stylu poznámkového bloku se splity a skóre",
      standbyKf6: "Terénní režim pro čitelnost na přímém slunci",
      gearupDate: "květen 2026",
      gearupRole: "Platforma pro operační řízení airsoftového a milsimového vybavení.",
      gearupDesc: "Mobile-first progresivní webová aplikace navržená pro správu vybavení, přípravu loadoutů, organizaci operací a sledování vybavení napříč zařízeními. Návrh a vedení projektu jsou moje, implementace vznikla ve spolupráci s AI.",
      gearupKf1: "Offline-first PWA — lze nainstalovat na telefon i počítač",
      gearupKf2: "Systém zbrojnice: vlastnictví, půjčování, údržba, sledování munice",
      gearupKf3: "Operační centrum: briefingy, cíle, mapy, checklisty",
      gearupKf4: "Automatické generování loadoutů podle sezóny, role a stavu vybavení",
      gearupKf5: "Synchronizace napříč zařízeními přes Supabase s lokálním ukládáním dat",
      pmDate: "červen 2026",
      pmRole: "Sledování projektů a úkolů pro vývojáře, organizované podle pracovních session.",
      pmDesc: "Přehledový nástroj pro aktivní vývojářskou práci — projekty, milestones, úkoly a sessions záznamy na jednom místě, navržený tak, aby bylo vždy jasné, na čem pracovat dál, bez nutnosti neustálé údržby. Návrh a vedení projektu jsou moje, implementace vznikla ve spolupráci s AI.",
      pmKf1: "Projekty, milestones a úkoly organizované na jednom místě",
      pmKf2: "Sessions záznamy pro sledování vývojářské práce v čase",
      pmKf3: "Navrženo tak, aby bylo vždy jasné, na čem pracovat dál",
      cmDesc: "Limity využití Claude Code, vždy viditelné.",
      cmKf1: "Trvalá položka ve stavovém řádku — bez nutnosti příkazů",
      cmKf2: "Sleduje 5hodinové i týdenní limity využití",
      cmKf3: "Barevné odlišení podle procenta využití",
      bhDesc: "Atmosférická průzkumová hra, dlouhodobý sólo projekt.",
      bhKf1: "First-person atmosférický průzkum zasazený do zfiktovaného Československa roku 1977",
      bhKf2: "Vlastní systémy gameplay — vliv radiace, anomální jevy",
      bhKf3: "Veškeré modely, textury a level design vytvořeny mnou od nuly",
      rdDesc: "Fyzikální hra založená na přesném časování.",
      rdKf1: "Fyzicky řízený přesný pohyb s přísným, nekompromisním ovládáním",
      rdKf2: "Postupné zvyšování obtížnosti napříč úrovněmi",
      rdKf3: "Menu, ovládací schéma a počítadlo úmrtí přidány samostatně",
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
