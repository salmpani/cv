/* A small, dependency-free enhancement layer for this static GitHub Pages site. */
(() => {
  'use strict';

  const greek = {
    navAbout: 'Σχετικά', navResearch: 'Έρευνα', navProjects: 'Έργα', navPublications: 'Δημοσιεύσεις',
    navTeaching: 'Διδασκαλία', navService: 'Ακαδημαϊκή προσφορά', navContact: 'Επικοινωνία',
    heroEyebrow: 'ΕΡΕΥΝΗΤΡΙΑ · ΔΙΔΑΣΚΟΥΣΑ · ΣΥΝΕΡΓΑΤΙΔΑ',
    heroTitle: 'Αξιόπιστη ΤΝ με θεμέλιο τη <em>συλλογιστική.</em>',
    heroDescription: 'Ερευνώ πώς η υπολογιστική επιχειρηματολογία και η τυπική συλλογιστική μπορούν να καταστήσουν τα ευφυή συστήματα πιο διαφανή, υπεύθυνα και προσανατολισμένα στις ανθρώπινες ανάγκες.',
    heroAffiliation: 'Μεταδιδακτορική ερευνήτρια · Εθνικό Μετσόβιο Πολυτεχνείο',
    exploreResearch: 'Εξερεύνησε την έρευνά μου', downloadCv: 'Λήψη CV',
    visualLabel: 'ΕΡΕΥΝΗΤΙΚΕΣ ΣΥΝΔΕΣΕΙΣ', visualFoot: 'ΑΠΟ ΤΗ ΛΟΓΙΚΗ ΣΤΙΣ ΕΦΑΡΜΟΓΕΣ',
    orbitFormal: 'ΤΥΠΙΚΗ<br>ΣΥΛΛΟΓΙΣΤΙΚΗ', orbitExplain: 'ΕΞΗΓΗΣΙΜΗ<br>ΤΝ',
    orbitSystems: 'ΕΥΦΥΗ<br>ΣΥΣΤΗΜΑΤΑ', orbitCore: 'ΑΝΘΡΩΠΟ-<br>ΚΕΝΤΡΙΚΗ<br>ΤΝ',
    factOneLabel: 'ΕΡΕΥΝΗΤΙΚΟ ΠΕΔΙΟ', factOne: 'Αξιόπιστη ΤΝ',
    factTwoLabel: 'ΑΚΑΔΗΜΑΪΚΗ ΘΕΣΗ', factTwo: 'Μεταδιδακτορική ερευνήτρια',
    factThreeLabel: 'ΕΜΠΕΙΡΙΑ ΠΡΟΤΑΣΕΩΝ', factThree: '20+ υποβολές',
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
    roleLabel: 'Ρόλος', fundingLabel: 'Προϋπολογισμός έργου', programLabel: 'Πρόγραμμα',
    projectsFootnote: 'Τα ποσά αφορούν προϋπολογισμούς των έργων και όχι προσωπικές χρηματοδοτήσεις. Η ατομική συμβολή περιγράφεται αναλυτικά στο CV.',
    publicationsTitle: 'Επιλεγμένες δημοσιεύσεις',
    publicationsIntro: 'Επιλογή εργασιών με κρίση. Ο πλήρης κατάλογος βρίσκεται στο ακαδημαϊκό CV και στο προφίλ Google Scholar.',
    viewScholar: 'Προβολή στο Google Scholar', filterAll: 'Όλες οι επιλεγμένες',
    filterReasoning: 'ΤΝ & συλλογιστική', filterSystems: 'Συστήματα & ασφάλεια',
    filterEducation: 'Εκπαίδευση & ρομποτική', completeList: 'Πλήρης κατάλογος στο CV',
    teachingTitle: 'Διδασκαλία σε διαφορετικά πεδία',
    teachingIntro: 'Συνδυάζω τις σαφείς θεωρητικές βάσεις με την εργαστηριακή εξάσκηση, τα παραδείγματα, την εποικοδομητική ανατροφοδότηση και την αυτόνομη επίλυση προβλημάτων.',
    teachingPhilosophy: 'Στόχος μου είναι οι φοιτητές να αναπτύσσουν τόσο τεχνικές δεξιότητες όσο και κριτική, υπεύθυνη στάση απέναντι στην ΤΝ και τις ψηφιακές τεχνολογίες.',
    teachingEthos: 'ΔΙΔΑΚΤΙΚΗ ΦΙΛΟΣΟΦΙΑ', present: 'σήμερα',
    teachingUoa: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών',
    teachingUoaBody: 'Βάσεις Δεδομένων, Αλγόριθμοι και Δομές Δεδομένων, Εξόρυξη Δεδομένων και Μηχανική Μάθηση, Διάστημα και Κυβερνοασφάλεια.',
    teachingAir: 'Σχολή Ικάρων', teachingAirBody: 'Μεγάλα Δεδομένα και Υπολογιστικό Νέφος.',
    teachingThessaly: 'Πανεπιστήμιο Θεσσαλίας', teachingThessalyBody: 'Θέματα Υπολογιστικών και Εφαρμοσμένων Μαθηματικών.',
    teachingUoaTwo: 'Πανεπιστήμιο Αθηνών', teachingUoaTwoBody: 'Εισαγωγή στον Προγραμματισμό, Αντικειμενοστραφής Προγραμματισμός, Python και Μηχανική Μάθηση.',
    teachingNtua: 'Εθνικό Μετσόβιο Πολυτεχνείο', teachingNtuaBody: 'Επικουρικό διδακτικό έργο στον Αντικειμενοστραφή Προγραμματισμό (Java).',
    teachingPostgrad: 'Μεταπτυχιακά προγράμματα', teachingPostgradBody: 'Θέματα Λογικής ΙΙ (διαπανεπιστημιακό ΠΜΣ)· Ανατρεπτικές Τεχνολογίες και Ψηφιακός Μετασχηματισμός (Πανεπιστήμιο Νεάπολις Πάφου).',
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
    languageButton.textContent = isGreek ? 'EN' : 'ΕΛ';
    languageButton.setAttribute('aria-label', isGreek ? 'Switch to English' : 'Μετάβαση στα Ελληνικά');
    languageButton.title = isGreek ? 'Switch to English' : 'Ελληνικά';
    document.title = isGreek ? 'Δρ Σοφία Αλμπάνη · Ακαδημαϊκή Ιστοσελίδα' : 'Dr Sofia Almpani · Academic Research Portfolio';
    try { localStorage.setItem('sofia-portfolio-language', isGreek ? 'el' : 'en'); } catch { /* storage may be unavailable */ }
  }

  let preferred = 'en';
  try { preferred = localStorage.getItem('sofia-portfolio-language') || 'en'; } catch { /* ignore */ }
  setLanguage(preferred === 'el' ? 'el' : 'en');
  languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'el' : 'en'));

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
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    publications.forEach(item => { item.hidden = selected !== 'all' && item.dataset.category !== selected; });
  }));

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
  updateProgress();
})();
