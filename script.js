/* A small, dependency-free enhancement layer for this static GitHub Pages site. */
(() => {
  'use strict';

  const greek = {
    skipContent: 'Μετάβαση στο κύριο περιεχόμενο',
    navAbout: 'Σχετικά', navHighlights: 'Νέα', navProjects: 'Έργα', navPublications: 'Δημοσιεύσεις',
    navTeaching: 'Διδασκαλία', navContact: 'Επικοινωνία',
    heroEyebrow: 'ΕΡΕΥΝΗΤΡΙΑ · ΔΙΔΑΣΚΟΥΣΑ · ΠΡΟΓΡΑΜΜΑΤΙΣΤΡΙΑ',
    heroTitle: 'Αξιόπιστη ΤΝ με θεμέλιο τη <em>συλλογιστική.</em>',
    heroDescription: 'Ερευνώ πώς η υπολογιστική επιχειρηματολογία και η τυπική συλλογιστική μπορούν να καταστήσουν τα ευφυή συστήματα πιο διαφανή, υπεύθυνα και προσανατολισμένα στις ανθρώπινες ανάγκες.',
    heroAffiliation: 'Μεταδιδακτορική ερευνήτρια (ΕΜΠ) · Εντεταλμένη διδάσκουσα',
    exploreResearch: 'Εξερεύνησε την έρευνά μου', downloadCv: 'Λήψη βιογραφικού (Ελληνικά PDF)',
    visualLabel: 'ΕΡΕΥΝΗΤΙΚΕΣ ΣΥΝΔΕΣΕΙΣ', visualFoot: 'ΑΠΟ ΤΗ ΛΟΓΙΚΗ ΣΤΙΣ ΕΦΑΡΜΟΓΕΣ',
    orbitFormal: 'ΤΥΠΙΚΗ<br>ΣΥΛΛΟΓΙΣΤΙΚΗ', orbitExplain: 'ΕΞΗΓΗΣΙΜΗ<br>ΤΝ',
    orbitSystems: 'ΕΥΦΥΗ<br>ΣΥΣΤΗΜΑΤΑ', orbitCore: 'ΑΝΘΡΩΠΟ-<br>ΚΕΝΤΡΙΚΗ<br>ΤΝ',
    highlightsTitle: 'Πρόσφατα νέα και διακρίσεις',
    highlightsIntro: 'Επιλεγμένες δημοσιεύσεις, διακρίσεις και δράσεις καθοδήγησης από την πρόσφατη ακαδημαϊκή μου δραστηριότητα.',
    highlightSumType: 'ΣΥΝΕΔΡΙΟ',
    highlightSumTitle: 'Πρόεδρος της Τοπικής Οργανωτικής Επιτροπής του SUM 2026',
    highlightSumBody: 'Πρόεδρος της Τοπικής Οργανωτικής Επιτροπής του 17ου Διεθνούς Συνεδρίου Scalable Uncertainty Management, που φιλοξενήθηκε στο ΕΜΠ, στην Αθήνα.',
    highlightSumLink: 'Επιτροπή SUM 2026',
    highlightOneType: 'ΕΡΕΥΝΑ', highlightOneTitle: 'Νέες εργασίες στην αξιόπιστη ΤΝ και την επιχειρηματολογία',
    highlightOneBody: 'Τρεις δημοσιεύσεις σε επιστημονικά περιοδικά το 2026 για την ανθρωποκεντρική ΤΝ, τη συνεργατική επιχειρηματολογία και τις απαιτήσεις συστημάτων για την αντιμετώπιση εχθρικών αφηγημάτων.',
    highlightRead: 'Δείτε τις δημοσιεύσεις',
    highlightTwoType: 'ΚΑΘΟΔΗΓΗΣΗ', highlightTwoTitle: 'Διάκριση της φοιτητικής ομάδας Perseus',
    highlightTwoBody: 'Καθοδήγηση της ομάδας Perseus στους τομείς της κυβερνοασφάλειας και των μη επανδρωμένων εναέριων συστημάτων, με διάκριση Youth Entrepreneurship Award.',
    highlightMentoring: 'Δείτε τη διάκριση Perseus',
    highlightThreeType: 'ΒΡΑΒΕΙΟ', highlightThreeTitle: 'Βραβείο Καλύτερης Εργασίας',
    highlightThreeBody: 'Διάκριση για την ανάπτυξη συστήματος λογικής συλλογιστικής που υποστηρίζει τη συμμόρφωση με τη νομοθεσία προστασίας δεδομένων.',
    highlightDetails: 'Λεπτομέρειες στο βιογραφικό',
    carouselPrevious: 'Προηγούμενο', carouselNext: 'Επόμενο',
    archiveToggle: 'Δείτε παλαιότερες σημαντικές στιγμές',
    archiveOneType: 'ΕΡΕΥΝΑ', archiveOneTitle: 'Διάκριση μεταδιδακτορικής έρευνας',
    archiveOneBody: 'Υποτροφία «Χ. Παπακυριακόπουλος» στο ΕΜΠ για τα Μαθηματικά της Πληροφορικής.',
    archiveTwoType: 'ΑΚΑΔΗΜΑΪΚΗ ΠΡΟΣΦΟΡΑ', archiveTwoTitle: 'Διοργάνωση συνεδρίου Scientix',
    archiveTwoBody: 'Συμμετοχή στην οργανωτική επιτροπή του 3ου Πανελλήνιου Συνεδρίου Scientix στην Αθήνα.',
    archiveThreeType: 'ΔΙΕΘΝΗΣ ΚΙΝΗΤΙΚΟΤΗΤΑ', archiveThreeTitle: 'Ερευνητική επίσκεψη στο University of Twente',
    archiveThreeBody: 'Επιστημονική αποστολή COST Action Wearable Robots με αντικείμενο τις ηθικές, νομικές και κοινωνικές πτυχές της φορετής ρομποτικής.',
    researchTitle: 'Ερευνητικά ενδιαφέροντα & κατευθύνσεις',
    researchIntro: 'Τρεις αλληλοσυνδεόμενες κατευθύνσεις καθορίζουν την έρευνά μου: αυστηρές μέθοδοι, υπεύθυνος σχεδιασμός και εφαρμογές με ουσιαστικό αντίκτυπο.',
    researchOneTitle: 'Υπολογιστική επιχειρηματολογία & τυπική συλλογιστική',
    researchOneBody: 'Πλαίσια εξηγήσιμης, επαληθεύσιμης και ιχνηλάσιμης συλλογιστικής σε ευφυή και πολυπρακτορικά συστήματα.',
    researchOneTag: 'Λογική · Υποστήριξη αποφάσεων',
    researchTwoTitle: 'Ανθρωποκεντρική & υπεύθυνη ΤΝ',
    researchTwoBody: 'Διαφανής λήψη αποφάσεων, ανθρώπινη εποπτεία, ηθική συλλογιστική και συμμόρφωση με κανονιστικά πλαίσια.',
    researchTwoTag: 'Εμπιστοσύνη · Διακυβέρνηση',
    researchThreeTitle: 'Εφαρμογές ευφυών συστημάτων',
    researchThreeBody: 'Αξιόπιστη ΤΝ στην κυβερνοασφάλεια, την αεροδιαστημική, τη φορετή ρομποτική, τις ιατροτεχνολογικές συσκευές και τις εκπαιδευτικές τεχνολογίες.',
    researchThreeTag: 'Κυβερνοασφάλεια · Ρομποτική',
    visionLabel: 'ΜΕΛΛΟΝΤΙΚΗ ΠΡΟΟΠΤΙΚΗ',
    visionBody: 'Στόχος μου είναι η ανάπτυξη διεπιστημονικού ερευνητικού προγράμματος στην αξιόπιστη και εξηγήσιμη ΤΝ, η ενίσχυση διεθνών συνεργασιών, η προσέλκυση ανταγωνιστικής χρηματοδότησης και η συμμετοχή φοιτητών σε έρευνα που συνδέει τη θεωρία της ΤΝ με πραγματικές προκλήσεις.',
    projectsTitle: 'Η έρευνα στην πράξη',
    projectsIntro: 'Επιλεγμένα συνεργατικά έργα σε ΤΝ, ρομποτική, κυβερνοασφάλεια, εκπαίδευση και ψηφιακή καινοτομία.',
    avalancheSub: 'Κατανόηση εχθρικών διαδικτυακών αφηγημάτων',
    avalancheBody: 'Έρευνα σε εχθρικά διαδικτυακά αφηγήματα, κοινωνικοτεχνικές απαιτήσεις και προσεγγίσεις ανίχνευσης παραπληροφόρησης, ρητορικής μίσους και deepfakes.',
    avalancheRole: 'Ερευνήτρια · IDIR',
    steamSub: 'Κινητοί χώροι δημιουργίας για σχολεία',
    steamBody: 'Ανάπτυξη εκπαιδευτικού υλικού και πλατφόρμας Moodle για κινητά makerspaces στη δευτεροβάθμια εκπαίδευση.',
    steamRole: 'Ερευνήτρια · ΕΜΠ',
    makerspaceSub: 'Μάθηση μέσα από την κατασκευή',
    makerspaceBody: 'Εκπαιδευτική έρευνα και ανάπτυξη για maker education, συνδυάζοντας STEM, CAD, τρισδιάστατη εκτύπωση και σχεδιασμό.',
    makerspaceRole: 'Ερευνήτρια · ENGINO',
    inbotsSub: 'Συμπεριληπτική ρομποτική για την κοινωνία',
    inbotsBody: 'Έρευνα στην εκπαιδευτική ρομποτική και την κοινωνική αποδοχή της, με συμβολή σε παραδοτέα και εργαστήρια.',
    inbotsRole: 'Ερευνήτρια · EDUMOTIVA',
    ginobotSub: 'Οικοσύστημα ρομποτικής για την εκπαίδευση STEM',
    ginobotBody: 'Ανάπτυξη αναλυτικών προγραμμάτων και εκπαιδευτικού υλικού για επεκτάσιμο εκπαιδευτικό ρομπότ.',
    ginobotRole: 'Ερευνήτρια · ENGINO',
    legicrowdSub: 'Κατανοητοί ψηφιακοί όροι χρήσης',
    legicrowdBody: 'Οντολογικές επισημειώσεις ηλεκτρονικών όρων χρήσης για μεγαλύτερη διαφάνεια, ιδιωτικότητα και τεκμηριωμένες αποφάσεις.',
    legicrowdRole: 'Ερευνήτρια · ΕΜΠ',
    roleLabel: 'Ρόλος', programLabel: 'Πρόγραμμα', projectLink: 'Πληροφορίες έργου',
    projectsFootnote: 'Στο βιογραφικό παρουσιάζονται περισσότερες πληροφορίες για τον ρόλο και την ερευνητική μου συμβολή σε κάθε έργο.',
    publicationsTitle: 'Επιλεγμένες δημοσιεύσεις',
    publicationsIntro: 'Επιλογή εργασιών με κρίση. Ο πλήρης κατάλογος βρίσκεται στο ακαδημαϊκό CV και στο προφίλ Google Scholar.',
    contributionLabel: 'Ερευνητική συμβολή',
    impactNarratives: 'Διαμορφώνει απαιτήσεις για παρεμβάσεις κατά εχθρικών διαδικτυακών αφηγημάτων, πέρα από την απλή ανίχνευση περιεχομένου, με έμφαση στο πλαίσιο και τη λογοδοσία.',
    impactHumanAi: 'Συνδέει την επιχειρηματολογία με την επικοινωνία και την εμπιστοσύνη στη συνεργασία ανθρώπων και ΤΝ, εισάγοντας ένα τυπικό πλαίσιο συλλογιστικής.',
    impactCollaborative: 'Συνδυάζει την ατομική και τη συλλογική συλλογιστική στο APEC–PS, υποστηρίζοντας την ιχνηλασιμότητα συνεργατικών αποφάσεων με στόχους.',
    viewScholar: 'Προβολή στο Google Scholar', filterAll: 'Όλες οι επιλεγμένες',
    filterReasoning: 'ΤΝ & συλλογιστική', filterSystems: 'Συστήματα & ασφάλεια',
    filterEducation: 'Εκπαίδευση & ρομποτική', completeList: 'Πλήρης κατάλογος στο βιογραφικό (Ελληνικά PDF)',
    teachingTitle: 'Διδασκαλία σε διαφορετικά πεδία',
    teachingIntro: 'Συνδυάζω τις σαφείς θεωρητικές βάσεις με την εργαστηριακή εξάσκηση, τα παραδείγματα, την εποικοδομητική ανατροφοδότηση και την αυτόνομη επίλυση προβλημάτων.',
    teachingPhilosophy: 'Στόχος μου είναι οι φοιτητές να αναπτύσσουν τόσο τεχνικές δεξιότητες όσο και κριτική, υπεύθυνη στάση απέναντι στην ΤΝ και τις ψηφιακές τεχνολογίες.',
    teachingEthos: 'ΔΙΔΑΚΤΙΚΗ ΦΙΛΟΣΟΦΙΑ',
    teachingUoa: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών',
    teachingUoaDate: 'Διδάσκουσα · Σεπ. 2025–σήμερα',
    courseUoaOne: 'Βάσεις Δεδομένων (SQL)',
    courseUoaTwo: 'Αλγόριθμοι, Προγραμματισμός και Δομές Δεδομένων (C)',
    courseUoaThree: 'Εξόρυξη Δεδομένων και Μηχανική Μάθηση',
    courseUoaFour: 'Διάστημα και Κυβερνοασφάλεια',
    teachingAir: 'Σχολή Ικάρων', teachingAirDate: 'Συμβασιούχο Διδακτικό Προσωπικό · Μάρ. 2026–σήμερα',
    courseAirOne: 'Μεγάλα Δεδομένα (Spark, Hadoop, MapReduce, Kafka, MongoDB)',
    courseAirTwo: 'Νεφοϋπολογιστική',
    teachingThessaly: 'Πανεπιστήμιο Θεσσαλίας', teachingThessalyDate: 'Διδάσκουσα · Σεπ. 2025–Φεβ. 2026',
    courseThessalyOne: 'Θέματα Υπολογιστικών και Εφαρμοσμένων Μαθηματικών Ι',
    teachingUoaTwo: 'Πανεπιστήμιο Αθηνών · Τμήμα Τεχνολογιών Ψηφιακής Βιομηχανίας',
    teachingUoaTwoDate: 'Αποσπασμένη εκπαιδευτικός · Σεπ. 2023–Σεπ. 2024',
    courseUoaTwoOne: 'Εισαγωγή στον Προγραμματισμό (C)',
    courseUoaTwoTwo: 'Αντικειμενοστραφής Προγραμματισμός (C++)',
    courseUoaTwoThree: 'Μηχανική Μάθηση', courseUoaTwoFour: 'Python',
    teachingNtua: 'Εθνικό Μετσόβιο Πολυτεχνείο', teachingNtuaDate: 'Επικουρικό διδακτικό έργο · Σεπ. 2018–Φεβ. 2021',
    courseNtuaOne: 'Εισαγωγή στον Αντικειμενοστραφή Προγραμματισμό (Java)',
    teachingMsc: 'Διαπανεπιστημιακό ΠΜΣ στη Λογική',
    teachingMscDate: 'ΕΜΠ · ΕΚΠΑ · Ακαδημία Αθηνών · Φεβ. 2026–σήμερα',
    courseMscOne: 'Θέματα Λογικής ΙΙ',
    teachingNeapolis: 'Πανεπιστήμιο Νεάπολις Πάφου',
    teachingNeapolisDate: 'Επισκέπτρια διδάσκουσα · 2026–σήμερα',
    courseNeapolisOne: 'Ανατρεπτικές Τεχνολογίες (ΠΜΣ Αναλυτική Δεδομένων και Χρηματοοικονομική Τεχνολογία)',
    courseNeapolisTwo: 'Ανατρεπτικές Τεχνολογίες και Ψηφιακός Μετασχηματισμός (ΠΜΣ Πληροφοριακά Συστήματα και Ψηφιακή Καινοτομία)',
    teachingMedical: 'Ιατρική Σχολή ΕΚΠΑ · ΠΜΣ Εφαρμοσμένη Εμβιομηχανική',
    teachingMedicalDate: 'Προσκεκλημένες διαλέξεις · Μάρ. 2020 και Μάρ. 2026',
    courseMedicalOne: 'Φορετή Ρομποτική και Εξωσκελετοί στην Υγεία',
    serviceTitle: 'Ακαδημαϊκή προσφορά & διεθνής δραστηριότητα',
    serviceIntro: 'Η έρευνα εξελίσσεται μέσα από συνεργασίες, καθοδήγηση, κοινά εργαλεία και ενεργή συμμετοχή στην επιστημονική κοινότητα.',
    serviceCategoryOne: 'ΕΠΙΜΕΛΕΙΑ & ΣΥΝΕΔΡΙΑ', serviceOneTitle: 'Υποστήριξη της επιστημονικής ανταλλαγής',
    serviceOneBody: 'Μέλος της Συντακτικής Επιτροπής του Studia Humana· συμμετοχή σε επιστημονικές και οργανωτικές επιτροπές των SUM 2026, PoEM 2026, UNILOG, Scientix και των εργαστηρίων Rules: Logic and Applications.',
    serviceCategoryTwo: 'ΣΥΝΕΡΓΑΣΙΕΣ', serviceTwoTitle: 'Διεθνή ερευνητικά δίκτυα',
    serviceTwoBody: 'Συνεργασίες με ομάδες RuleML, University of Twente, Jadavpur University, Hellenic-Romanian Logic and Computation Group, και ευρωπαϊκά δίκτυα ρομποτικής και εκπαίδευσης STEM.',
    serviceCategoryThree: 'ΚΑΘΟΔΗΓΗΣΗ', serviceThreeTitle: 'Υποστήριξη νέων ερευνητών',
    serviceThreeBody: 'Καθοδήγηση υποψήφιων διδακτόρων και νέων ερευνητών, της εκπαιδευτικής ομάδας R&D της ENGINO και φοιτητικών ομάδων, μεταξύ των οποίων οι Perseus (κυβερνοασφάλεια και UAV) και Ikaros (EuroBot).',
    proposalEyebrow: 'ΑΝΑΠΤΥΞΗ ΕΡΕΥΝΗΤΙΚΩΝ ΠΡΟΤΑΣΕΩΝ', proposalTitle: 'Από την ιδέα στη συνεργατική πρόταση',
    proposalBody: 'Συμβολή σε περισσότερες από 20 ερευνητικές και αναπτυξιακές προτάσεις, με επιστημονική συγγραφή, ανάπτυξη πακέτων εργασίας, προϋπολογισμούς, συντονισμό εταίρων και ηλεκτρονική υποβολή.',
    contactTitle: 'Ας συζητήσουμε για την έρευνα.',
    contactBody: 'Με ενδιαφέρουν συνεργασίες στην αξιόπιστη ΤΝ, την υπολογιστική επιχειρηματολογία, τη διεπιστημονική έρευνα και την πανεπιστημιακή διδασκαλία.',
    contactEmail: 'Επικοινωνία', footerUpdated: 'Ακαδημαϊκή ιστοσελίδα · Ενημέρωση Νοέμβριος 2026', backTop: 'Επιστροφή στην αρχή ↑'
  };

  const translatable = [...document.querySelectorAll('[data-i18n]')];
  const english = new Map(translatable.map(el => [el, el.innerHTML]));
  const languageButton = document.getElementById('language-toggle');
  const cvLinks = [...document.querySelectorAll('[data-cv-download]')];
  const portrait = document.querySelector('.hero-portrait');
  const mainNavigation = document.getElementById('site-nav');
  const profileLinks = document.querySelector('.hero-social');
  const researchVisual = document.querySelector('.hero-visual');
  const publicationFilters = document.querySelector('.publication-filters');

  function setLanguage(language) {
    const isGreek = language === 'el';
    document.documentElement.lang = isGreek ? 'el' : 'en';
    document.documentElement.dataset.language = isGreek ? 'el' : 'en';
    translatable.forEach(el => {
      const value = isGreek ? greek[el.dataset.i18n] : english.get(el);
      if (value === undefined) return;
      if (el.dataset.i18n === 'heroTitle' || el.dataset.i18n.startsWith('orbit')) el.innerHTML = value;
      else if (isGreek) el.textContent = value;
      else el.innerHTML = value;
    });
    // Keep the download language aligned with the content language.
    const cvFilename = isGreek ? 'Sofia_Almpani_Academic_CV_Greek.pdf' : 'Sofia_Almpani_CV.pdf';
    cvLinks.forEach(link => {
      link.href = cvFilename;
      link.setAttribute('download', cvFilename);
      link.setAttribute('hreflang', isGreek ? 'el' : 'en');
    });
    languageButton.textContent = isGreek ? 'EN' : 'ΕΛ';
    if (portrait) portrait.alt = isGreek ? 'Η Δρ Σοφία Αλμπάνη παρουσιάζει σε ακαδημαϊκή εκδήλωση' : 'Dr Sofia Almpani presenting at an academic event';
    languageButton.setAttribute('aria-label', isGreek ? 'Switch to English' : 'Μετάβαση στα Ελληνικά');
    languageButton.title = isGreek ? 'Switch to English' : 'Ελληνικά';
    mainNavigation.setAttribute('aria-label', isGreek ? 'Κεντρική πλοήγηση' : 'Main navigation');
    profileLinks.setAttribute('aria-label', isGreek ? 'Ακαδημαϊκά προφίλ' : 'Academic profiles');
    researchVisual.setAttribute('aria-label', isGreek ? 'Ερευνητικά πεδία' : 'Research themes');
    publicationFilters.setAttribute('aria-label', isGreek ? 'Φιλτράρισμα δημοσιεύσεων' : 'Filter publications');
    document.title = isGreek ? 'Δρ Σοφία Αλμπάνη · Ακαδημαϊκή Ιστοσελίδα' : 'Dr Sofia Almpani · Academic Research Portfolio';
    try { localStorage.setItem('sofia-portfolio-language', isGreek ? 'el' : 'en'); } catch { /* storage may be unavailable */ }
  }

  let preferred = 'en';
  try { preferred = localStorage.getItem('sofia-portfolio-language') || 'en'; } catch { /* ignore */ }
  setLanguage(preferred === 'el' ? 'el' : 'en');
  languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'el' : 'en'));

  // Remote institutional emblems degrade gracefully to a readable acronym.
  document.querySelectorAll('.institution-logo img').forEach(img => {
    const showFallback = () => img.parentElement.classList.add('is-missing');
    img.addEventListener('error', showFallback);
    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('site-nav');
  function closeMenu() { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
  menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const publications = [...document.querySelectorAll('.publication')];
  const publicationFilterStatus = document.getElementById('publication-filter-status');
  function updateFilterAnnouncement() {
    const count = publications.filter(item => !item.hidden).length;
    publicationFilterStatus.textContent = document.documentElement.lang === 'el'
      ? `Προβάλλονται ${count} δημοσιεύσεις.`
      : `Showing ${count} publications.`;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    publications.forEach(item => { item.hidden = selected !== 'all' && item.dataset.category !== selected; });
    updateFilterAnnouncement();
  }));
  languageButton.addEventListener('click', updateFilterAnnouncement);
  updateFilterAnnouncement();

  // Give icon-only publication links a distinct, meaningful accessible name.
  function updatePublicationLinkLabels() {
    publications.forEach(item => {
      const title = item.querySelector('h3')?.textContent?.trim();
      const link = item.querySelector('a[href]');
      if (title && link) link.setAttribute('aria-label', document.documentElement.lang === 'el'
        ? `Άνοιγμα δημοσίευσης: ${title}`
        : `Read publication: ${title}`);
    });
  }
  languageButton.addEventListener('click', updatePublicationLinkLabels);
  updatePublicationLinkLabels();

  // News carousel: explicit navigation, no autoplay, works with keyboard and touch.
  const carousel = document.getElementById('highlights-carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.highlight-card')];
    const dots = [...carousel.querySelectorAll('.carousel-dot')];
    const previous = document.getElementById('highlight-prev');
    const next = document.getElementById('highlight-next');
    const position = document.getElementById('highlight-current');
    document.getElementById('highlight-total').textContent = String(slides.length).padStart(2, '0');
    let selected = 0;

    function showHighlight(index) {
      selected = (index + slides.length) % slides.length;
      const greekSelected = document.documentElement.lang === 'el';
      slides.forEach((slide, i) => {
        const active = i === selected;
        slide.hidden = !active;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', `${greekSelected ? 'Νέο' : 'Highlight'} ${i + 1} ${greekSelected ? 'από' : 'of'} ${slides.length}`);
      });
      dots.forEach((dot, i) => {
        const active = i === selected;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-pressed', String(active));
        dot.setAttribute('aria-label', `${greekSelected ? 'Προβολή νέου' : 'Show highlight'} ${i + 1}`);
      });
      previous.setAttribute('aria-label', greekSelected ? 'Προηγούμενο νέο' : 'Previous highlight');
      next.setAttribute('aria-label', greekSelected ? 'Επόμενο νέο' : 'Next highlight');
      position.textContent = String(selected + 1).padStart(2, '0');
    }

    previous.addEventListener('click', () => showHighlight(selected - 1));
    next.addEventListener('click', () => showHighlight(selected + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => showHighlight(i)));
    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showHighlight(selected - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); showHighlight(selected + 1); }
    });
    let touchStartX = null;
    carousel.addEventListener('touchstart', event => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
    }, { passive: true });
    carousel.addEventListener('touchend', event => {
      if (touchStartX === null) return;
      const distance = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
      if (Math.abs(distance) > 55) showHighlight(selected + (distance < 0 ? 1 : -1));
      touchStartX = null;
    }, { passive: true });
    languageButton.addEventListener('click', () => showHighlight(selected));
    showHighlight(0);
  }

  const readingBar = document.getElementById('reading-bar');
  let scheduled = false;
  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    readingBar.style.width = `${progress}%`;
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });

  // Page-like navigation: each top-level section has its own view, URL hash,
  // back/forward history entry, and active menu item. Without JavaScript,
  // all content remains available as an ordinary long-form page.
  const pages = [...document.querySelectorAll('main > section[id]')];
  const pageLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  // Research is now a section of the About view rather
  // than separate navigation tabs. Their old URL hashes remain usable.
  const aboutSections = new Set(['research']);
  function showPage(scrollToStart = true) {
    const requested = decodeURIComponent(window.location.hash.slice(1)) || 'about';
    const insideAbout = aboutSections.has(requested);
    const page = pages.find(item => item.id === (insideAbout ? 'about' : requested)) || pages[0];
    pages.forEach(item => {
      item.hidden = item !== page && !(page.id === 'about' && aboutSections.has(item.id));
    });
    pageLinks.forEach(link => {
      if (link.getAttribute('href') === `#${page.id}`) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.body.dataset.currentView = page.id;
    closeMenu();
    if (scrollToStart) {
      const target = insideAbout ? pages.find(item => item.id === requested) : page;
      if (insideAbout && target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      const heading = (target || page).querySelector('h1,h2');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
    requestAnimationFrame(updateProgress);
  }
  window.addEventListener('hashchange', () => showPage());
  showPage(false);
  updateProgress();
})();
