(function(){
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function(){
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open'); burger.setAttribute('aria-expanded','false');
  }));

  const i18n = {
    de: {
      meta_title:"Web- & Logodesign für die albanische Diaspora | Kosovo",
      skip:"Zum Inhalt springen",
      mob_call:"Anrufen", mob_whatsapp:"Per WhatsApp schreiben",
      nav_services:"Leistungen", nav_pricing:"Preise", nav_portfolio:"Arbeiten", nav_about:"Über uns", nav_contact:"Kontakt", nav_cta:"Angebot anfragen",
      hero_eyebrow:"Prizren, Kosovo — für die albanische Diaspora",
      hero_title:"Websites &amp; Logos, die <em>professionell</em> wirken.",
      hero_lead:"Wir helfen Albaner:innen in der Schweiz, Deutschland, Frankreich und im Kosovo, mit einem professionellen Online-Auftritt zu starten — schnell, klar und in wenigen Wochen fertig.",
      hero_lead_short:"Professionelle Websites & Logos für Albaner in der Schweiz, Deutschland, Frankreich und im Kosovo.",
      trust1_short:"Kosovo-Recht", trust_ch_short:"Schweiz · DE & FR", trust3_short:"Domain gratis",
      hero_cta1:"Projekt starten", hero_cta2:"Preise ansehen",
      trust1:"Nach kosovarischem Recht", trust_ch:"Auch in der Schweiz tätig — Deutsch & Französisch fließend", trust3:"1 Jahr Domain inklusive",
      hero_tag:"Web + Logo Design — ab 650€",
      serv_eyebrow:"Was wir anbieten", serv_title:"Zwei Leistungen, ein Ziel: Ihr Online-Auftritt wirkt professionell.",
      serv1_title:"Webdesign", serv1_desc:"Moderne, schnelle und einfach zu bedienende Websites — von einer einzigen Seite bis zur Standardseite mit mehreren Unterseiten.",
      serv1_li1:"100% für Mobile optimiertes Design", serv1_li2:"Basis-SEO — auffindbar auf Google", serv1_li3:"Schnelle Ladezeit", serv1_li4:"Kontaktformular & WhatsApp-Verknüpfung",
      serv2_title:"Logodesign", serv2_desc:"Ein Erscheinungsbild, das im Gedächtnis bleibt — klar, professionell, bereit für Web, Social Media und Druck.",
      serv2_li1:"Erste Logo-Entwürfe", serv2_li2:"Definierte Farben & Schriften", serv2_li3:"Dateien für Web und Druck", serv2_li4:"Abstimmung mit Ihrer Website",
      proc1_t:"Gespräch & Ideen", proc1_p:"Kurzes Gespräch über Ihr Geschäft, Zielgruppe und Ideen.",
      proc2_t:"Design", proc2_p:"Wir senden den ersten Entwurf für Logo und Website.",
      proc3_t:"Korrekturen", proc3_p:"Wir passen alles nach Ihren Wünschen an.",
      proc4_t:"Veröffentlichung", proc4_p:"Die Website geht online, Domain inklusive.",
      price_eyebrow:"Preise", price_title:"Klare Preise, keine Überraschungen.",
      price_sub:"Wählen Sie das Paket, das zu Ihrem Unternehmen passt. Beide Pakete beinhalten Logodesign + Website.",
      price1_badge:"One-Pager", price1_title:"Web + Logo — Eine Seite", price1_note:"Einmalzahlung, Festpreis",
      price1_li1:"1 vollständig gestaltete Seite (One-Pager)", price1_li2:"Logodesign inklusive", price1_li3:"Optimiert für Mobile & Basis-SEO", price1_li4:"Domain (.com/.ch/.de/.fr) 1 Jahr inklusive", price1_li5:"Kontaktformular & WhatsApp/Instagram-Link",
      price2_badge:"Standard — bis zu 5 Seiten", price2_title:"Web + Logo — Standard", price2_note:"Einmalzahlung, Festpreis",
      price2_li1:"Bis zu 5 Unterseiten (Start, Über uns, Leistungen, Galerie, Kontakt...)", price2_li2:"Logodesign inklusive", price2_li3:"Vollständig für Mobile & SEO optimiert", price2_li4:"Domain (.com/.ch/.de/.fr) 1 Jahr inklusive", price2_li5:"Verknüpfung mit Google-Profil & Social Media", price2_li6:"Erweitertes Kontaktformular",
      price_cta:"Dieses Paket anfragen",
      price_addon:"Die Domain (Ihr Website-Name, z. B. www.ihrunternehmen.com) ist im ersten Jahr in beiden Paketen kostenlos enthalten. Die Verlängerung nach dem ersten Jahr wird separat zum Preis des Domain-Anbieters berechnet. Hosting kann auf Anfrage angeboten werden.",
      port_eyebrow:"Unsere Arbeiten", port_title:"Einige aktuelle Projekte.", port_sub:"Websites und Logos, die wir für Kunden im Kosovo, in der Schweiz und darüber hinaus umgesetzt haben.",
      port_ph:"Projektbild hinzufügen", port1_tag:"Webdesign", port2_tag:"Logodesign", port3_tag:"Web + Logo", port_sub_web:"Webdesign", port_sub_logo:"Logodesign",
      port1_title:"Projekt-/Kundenname", port2_title:"Projekt-/Kundenname", port3_title:"Projekt-/Kundenname",
      dia_eyebrow:"Wo wir Sie finden", dia_title:"Gemacht im Kosovo, gebaut für die Diaspora.",
      dia_ks:"Kosovo — unser Büro in Prizren, persönliche Treffen möglich.",
      dia_ch:"Schweiz — aktiv vor Ort tätig, wir sprechen fließend Deutsch & Französisch.",
      dia_de:"Deutschland — vollständig online abgewickelte Projekte, klarer Vertrag.",
      dia_fr:"Frankreich — Betreuung auf Französisch & Albanisch.",
      about_eyebrow:"Über uns", about_title:"Kleines Studio, professioneller Standard.",
      about_p1:"Wir sind ein Designstudio mit Sitz im Kosovo, das speziell dafür da ist, Albaner:innen und Unternehmen der Diaspora zu einer Website und einem Logo zu verhelfen, die seriös wirken — ohne hohe Preise und ohne komplizierte Prozesse.",
      about_p2:"Jedes Projekt beinhaltet direkte Kommunikation, klare Fristen und ein Endergebnis, das vom ersten Tag an bereit für Google, Mobile und soziale Netzwerke ist.",
      about_it1_t:"Direkte Kommunikation", about_it1_p:"WhatsApp, Telefon oder E-Mail — wie es Ihnen passt.",
      about_it2_t:"Realistische Fristen", about_it2_p:"In der Regel 1–3 Wochen, je nach Paket.",
      about_it3_t:"Festpreise", about_it3_p:"Was vereinbart wird, wird bezahlt — keine versteckten Kosten.",
      about_it4_t:"Nach kosovarischem Recht", about_it4_p:"Eingetragenes Unternehmen, Vertrag & offizielle Rechnung.",
      faq_eyebrow:"Häufige Fragen", faq_title:"Was Sie vor dem Start wissen sollten.",
      faq1_q:"Wie lange dauert die Fertigstellung meiner Website?", faq1_a:"Der One-Pager dauert in der Regel 1–2 Wochen, das Standardpaket (bis zu 5 Seiten) 2–3 Wochen, abhängig davon, wie schnell Sie uns die Inhalte zusenden.",
      faq2_q:"Kann ich aus dem Ausland bezahlen (Schweiz, Deutschland, Frankreich)?", faq2_a:"Ja. Wir akzeptieren internationale Banküberweisungen sowie weitere Online-Zahlungsmethoden — Details klären wir im Erstgespräch.",
      faq3_q:"Ist die Domain (Website-Name) im Preis enthalten?", faq3_a:"Ja, die Domain ist im ersten Jahr in beiden Paketen enthalten. Die Verlängerung in den Folgejahren erfolgt gegen eine kleine jährliche Gebühr.",
      faq4_q:"Arbeiten Sie nach kosovarischem Recht?", faq4_a:"Ja, wir sind ein im Kosovo eingetragenes Unternehmen. Jedes Projekt wird von einem Vertrag und einer offiziellen Rechnung gemäß geltendem Recht begleitet.",
      cont_eyebrow:"Kontakt", cont_title:"Lassen Sie uns Ihr Projekt starten.",
      cont_lead:"Schreiben Sie uns kurz etwas über Ihr Unternehmen — wir antworten in der Regel innerhalb von 24 Stunden.",
      cont_loc:"Tirana 106, Prizren 20000, Kosovo",
      f_name:"Name", f_email:"E-Mail", f_country:"Land", f_other:"Andere", f_package:"Paket",
      f_pkg1:"One-Pager — 650€", f_pkg2:"Standard (5 Seiten) — 950€", f_pkg3:"Ich bin mir nicht sicher",
      f_msg:"Nachricht", f_msg_ph:"Erzählen Sie uns kurz von Ihrem Unternehmen...",
      f_consent:"Ich stimme zu, dass meine Daten zur Kontaktaufnahme bezüglich dieser Anfrage verwendet werden, gemäß der Datenschutzerklärung.",
      f_submit:"Anfrage senden",
      foot_about:"Web- und Logodesign mit Sitz im Kosovo, für die albanische Diaspora in der Schweiz, Deutschland und Frankreich.",
      foot_nav:"Navigation", foot_contact:"Kontakt", foot_legal:"Rechtliches",
      foot_impressum:"Impressum", foot_privacy:"Datenschutz", foot_terms:"AGB",
      foot_copy:"© 2026 Dardania Design. Alle Rechte vorbehalten.",
      legal_note:"Dardania Design ist ein Geschäft mit Sitz in Tirana 106, 20000 Prizren, Kosovo. Die Geschäftstätigkeit und Dienstleistungsverträge unterliegen dem Recht der Republik Kosovo, einschließlich des Gesetzes über elektronischen Handel und des Gesetzes zum Schutz personenbezogener Daten. Für Kund:innen aus der EU und der Schweiz werden personenbezogene Daten im Einklang mit den Grundsätzen der DSGVO behandelt, soweit diese für Dienstleister außerhalb der EU anwendbar sind. Handelsregister- und Steuernummer werden ergänzt, sobald die Registrierung abgeschlossen ist."
    },
    fr: {
      meta_title:"Design Web & Logo pour la diaspora albanaise | Kosovo",
      skip:"Aller au contenu",
      mob_call:"Appeler", mob_whatsapp:"Écrire sur WhatsApp",
      nav_services:"Services", nav_pricing:"Tarifs", nav_portfolio:"Réalisations", nav_about:"À propos", nav_contact:"Contact", nav_cta:"Demander un devis",
      hero_eyebrow:"Prizren, Kosovo — pour la diaspora albanaise",
      hero_title:"Des sites web &amp; logos à l'image <em>professionnelle</em>.",
      hero_lead:"Nous aidons les Albanais de Suisse, d'Allemagne, de France et du Kosovo à démarrer avec une présence en ligne professionnelle — rapide, claire et prête en quelques semaines.",
      hero_lead_short:"Sites web & logos professionnels pour les Albanais en Suisse, Allemagne, France et au Kosovo.",
      trust1_short:"Droit kosovar", trust_ch_short:"Suisse · DE & FR", trust3_short:"Domaine gratuit",
      hero_cta1:"Démarrer le projet", hero_cta2:"Voir les tarifs",
      trust1:"Conforme au droit kosovar", trust_ch:"Aussi actifs en Suisse — allemand & français courants", trust3:"1 an de domaine inclus",
      hero_tag:"Design Web + Logo — dès 650€",
      serv_eyebrow:"Ce que nous proposons", serv_title:"Deux services, un seul objectif : une image en ligne professionnelle.",
      serv1_title:"Design Web", serv1_desc:"Des sites modernes, rapides et simples à utiliser — d'une page unique à un site standard avec plusieurs pages.",
      serv1_li1:"Design 100% optimisé mobile", serv1_li2:"SEO de base — visible sur Google", serv1_li3:"Chargement rapide du site", serv1_li4:"Formulaire de contact & lien WhatsApp",
      serv2_title:"Design de Logo", serv2_desc:"Une identité visuelle mémorable — claire, professionnelle, prête pour le web, les réseaux sociaux et l'impression.",
      serv2_li1:"Premières propositions de logo", serv2_li2:"Couleurs & typographies définies", serv2_li3:"Fichiers pour le web et l'impression", serv2_li4:"Cohérence avec votre site web",
      proc1_t:"Échange & Idées", proc1_p:"Une brève discussion sur votre activité et vos idées.",
      proc2_t:"Design", proc2_p:"Nous vous envoyons la première proposition du logo et du site.",
      proc3_t:"Ajustements", proc3_p:"Nous apportons les modifications selon vos souhaits.",
      proc4_t:"Mise en ligne", proc4_p:"Le site est publié, domaine inclus.",
      price_eyebrow:"Tarifs", price_title:"Des prix clairs, sans surprise.",
      price_sub:"Choisissez la formule adaptée à votre activité. Les deux formules incluent logo + site web.",
      price1_badge:"One-Pager", price1_title:"Web + Logo — Une Page", price1_note:"Paiement unique, prix final",
      price1_li1:"1 page (One-Pager) entièrement conçue", price1_li2:"Design de logo inclus", price1_li3:"Optimisé mobile & SEO de base", price1_li4:"Domaine (.com/.ch/.de/.fr) 1 an inclus", price1_li5:"Formulaire de contact & lien WhatsApp/Instagram",
      price2_badge:"Standard — jusqu'à 5 pages", price2_title:"Web + Logo — Standard", price2_note:"Paiement unique, prix final",
      price2_li1:"Jusqu'à 5 pages (Accueil, À propos, Services, Galerie, Contact...)", price2_li2:"Design de logo inclus", price2_li3:"Entièrement optimisé mobile & SEO", price2_li4:"Domaine (.com/.ch/.de/.fr) 1 an inclus", price2_li5:"Lien avec profil Google & réseaux sociaux", price2_li6:"Formulaire de contact avancé",
      price_cta:"Demander cette formule",
      price_addon:"Le domaine (le nom de votre site, ex. www.votreentreprise.com) est inclus gratuitement la première année dans les deux formules. Le renouvellement après la première année est facturé séparément, au tarif du fournisseur de domaine. L'hébergement peut être proposé sur demande.",
      port_eyebrow:"Nos réalisations", port_title:"Quelques projets récents.", port_sub:"Sites web et logos réalisés pour des clients au Kosovo, en Suisse et au-delà.",
      port_ph:"Ajouter une photo du projet", port1_tag:"Design Web", port2_tag:"Design de Logo", port3_tag:"Web + Logo", port_sub_web:"Design Web", port_sub_logo:"Design de Logo",
      port1_title:"Nom du projet/client", port2_title:"Nom du projet/client", port3_title:"Nom du projet/client",
      dia_eyebrow:"Où nous vous trouvons", dia_title:"Conçu au Kosovo, pensé pour la diaspora.",
      dia_ks:"Kosovo — notre bureau à Prizren, rendez-vous en personne possibles.",
      dia_ch:"Suisse — présents activement sur place, allemand & français courants.",
      dia_de:"Allemagne — projets entièrement gérés en ligne, contrat clair.",
      dia_fr:"France — accompagnement en français & albanais.",
      about_eyebrow:"À propos", about_title:"Petit studio, standard professionnel.",
      about_p1:"Nous sommes un studio de design basé au Kosovo, créé spécialement pour aider les Albanais et les entreprises de la diaspora à obtenir un site web et un logo à l'image sérieuse — sans prix élevés ni processus compliqués.",
      about_p2:"Chaque projet inclut une communication directe, des délais clairs et un résultat final prêt pour Google, le mobile et les réseaux sociaux dès le premier jour.",
      about_it1_t:"Communication directe", about_it1_p:"WhatsApp, téléphone ou e-mail — selon votre préférence.",
      about_it2_t:"Délais réalistes", about_it2_p:"Généralement 1 à 3 semaines, selon la formule.",
      about_it3_t:"Prix fixes", about_it3_p:"Ce qui est convenu est ce qui est payé — aucun coût caché.",
      about_it4_t:"Conforme au droit kosovar", about_it4_p:"Entreprise enregistrée, contrat & facture officielle.",
      faq_eyebrow:"Questions fréquentes", faq_title:"Ce qu'il faut savoir avant de commencer.",
      faq1_q:"Combien de temps faut-il pour terminer mon site ?", faq1_a:"Le One-Pager prend généralement 1 à 2 semaines, la formule Standard (jusqu'à 5 pages) 2 à 3 semaines, selon la rapidité avec laquelle vous nous envoyez le contenu.",
      faq2_q:"Puis-je payer depuis l'étranger (Suisse, Allemagne, France) ?", faq2_a:"Oui. Nous acceptons les virements bancaires internationaux ainsi que d'autres moyens de paiement en ligne — les détails sont précisés lors du premier échange.",
      faq3_q:"Le domaine (nom du site) est-il inclus dans le prix ?", faq3_a:"Oui, le domaine est inclus la première année dans les deux formules. Le renouvellement les années suivantes se fait moyennant de petits frais annuels.",
      faq4_q:"Travaillez-vous conformément au droit kosovar ?", faq4_a:"Oui, nous sommes une entreprise enregistrée au Kosovo. Chaque projet est accompagné d'un contrat et d'une facture officielle, conformément à la législation en vigueur.",
      cont_eyebrow:"Contact", cont_title:"Démarrons votre projet.",
      cont_lead:"Écrivez-nous quelques mots sur votre activité — nous répondons généralement sous 24 heures.",
      cont_loc:"Tirana 106, Prizren 20000, Kosovo",
      f_name:"Nom", f_email:"E-mail", f_country:"Pays", f_other:"Autre", f_package:"Formule",
      f_pkg1:"One-Pager — 650€", f_pkg2:"Standard (5 pages) — 950€", f_pkg3:"Je ne suis pas sûr(e)",
      f_msg:"Message", f_msg_ph:"Parlez-nous brièvement de votre activité...",
      f_consent:"J'accepte que mes données soient utilisées pour me recontacter au sujet de cette demande, conformément à la politique de confidentialité.",
      f_submit:"Envoyer la demande",
      foot_about:"Design web et logo basé au Kosovo, pour la diaspora albanaise en Suisse, Allemagne et France.",
      foot_nav:"Navigation", foot_contact:"Contact", foot_legal:"Mentions légales",
      foot_impressum:"Mentions légales", foot_privacy:"Confidentialité", foot_terms:"Conditions",
      foot_copy:"© 2026 Dardania Design. Tous droits réservés.",
      legal_note:"Dardania Design est une entreprise située à Tirana 106, 20000 Prizren, Kosovo. L'activité et les contrats de service sont régis par le droit de la République du Kosovo, y compris la loi sur le commerce électronique et la loi sur la protection des données personnelles. Pour les client(e)s de l'UE et de Suisse, les données personnelles sont traitées conformément aux principes du RGPD, dans la mesure où ils s'appliquent aux prestataires établis hors UE. Le numéro d'entreprise et le numéro fiscal seront ajoutés dès la finalisation de l'immatriculation."
    },
    en: {
      meta_title:"Web & Logo Design for the Albanian Diaspora | Kosovo",
      skip:"Skip to content",
      mob_call:"Call", mob_whatsapp:"Message on WhatsApp",
      nav_services:"Services", nav_pricing:"Pricing", nav_portfolio:"Work", nav_about:"About", nav_contact:"Contact", nav_cta:"Get a Quote",
      hero_eyebrow:"Prizren, Kosovo — for the Albanian diaspora",
      hero_title:"Websites &amp; logos that look <em>professional</em>.",
      hero_lead:"We help Albanians in Switzerland, Germany, France and Kosovo launch a professional online presence — fast, clear, and ready within a few weeks.",
      hero_lead_short:"Professional websites & logos for Albanians in Switzerland, Germany, France and Kosovo.",
      trust1_short:"Kosovo law", trust_ch_short:"Switzerland · DE & FR", trust3_short:"Free domain",
      hero_cta1:"Start Your Project", hero_cta2:"See Pricing",
      trust1:"Compliant with Kosovo law", trust_ch:"Also active in Switzerland — fluent German & French", trust3:"1 year domain included",
      hero_tag:"Web + Logo Design — from €650",
      serv_eyebrow:"What we offer", serv_title:"Two services, one goal: an online presence that looks professional.",
      serv1_title:"Web Design", serv1_desc:"Modern, fast, easy-to-use websites — from a single page to a standard site with several sub-pages.",
      serv1_li1:"100% mobile-optimized design", serv1_li2:"Basic SEO — findable on Google", serv1_li3:"Fast page load times", serv1_li4:"Contact form & WhatsApp link",
      serv2_title:"Logo Design", serv2_desc:"A visual identity that's memorable — clear, professional, ready for web, social media and print.",
      serv2_li1:"Initial logo proposals", serv2_li2:"Defined colors & typography", serv2_li3:"Files for web and print", serv2_li4:"Aligned with your website",
      proc1_t:"Chat & Ideas", proc1_p:"A short talk about your business, audience and ideas.",
      proc2_t:"Design", proc2_p:"We send the first proposal for your logo and website.",
      proc3_t:"Revisions", proc3_p:"We make changes based on your feedback.",
      proc4_t:"Launch", proc4_p:"The site goes live, domain included.",
      price_eyebrow:"Pricing", price_title:"Clear prices, no surprises.",
      price_sub:"Choose the package that fits your business. Both packages include logo design + website.",
      price1_badge:"One-Pager", price1_title:"Web + Logo — One Page", price1_note:"One-time payment, fixed price",
      price1_li1:"1 fully designed page (One-Pager)", price1_li2:"Logo design included", price1_li3:"Mobile-optimized & basic SEO", price1_li4:"Domain (.com/.ch/.de/.fr) 1 year included", price1_li5:"Contact form & WhatsApp/Instagram link",
      price2_badge:"Standard — up to 5 pages", price2_title:"Web + Logo — Standard", price2_note:"One-time payment, fixed price",
      price2_li1:"Up to 5 sub-pages (Home, About, Services, Gallery, Contact...)", price2_li2:"Logo design included", price2_li3:"Fully optimized for mobile & SEO", price2_li4:"Domain (.com/.ch/.de/.fr) 1 year included", price2_li5:"Linked to your Google Profile & social media", price2_li6:"Advanced contact form",
      price_cta:"Request This Package",
      price_addon:"The domain (your website's name, e.g. www.yourbusiness.com) is included free for the first year in both packages. Renewal after the first year is billed separately, at the domain provider's rate. Hosting can be offered on request.",
      port_eyebrow:"Our Work", port_title:"A few recent projects.", port_sub:"Websites and logos we've built for clients in Kosovo, Switzerland and beyond.",
      port_ph:"Add project image", port1_tag:"Web Design", port2_tag:"Logo Design", port3_tag:"Web + Logo", port_sub_web:"Web Design", port_sub_logo:"Logo Design",
      port1_title:"Project/Client Name", port2_title:"Project/Client Name", port3_title:"Project/Client Name",
      dia_eyebrow:"Where we find you", dia_title:"Made in Kosovo, built for the diaspora.",
      dia_ks:"Kosovo — our office in Prizren, in-person meetings possible.",
      dia_ch:"Switzerland — actively present on the ground, fluent in German & French.",
      dia_de:"Germany — fully remote projects, clear contract.",
      dia_fr:"France — support in French & Albanian.",
      about_eyebrow:"About Us", about_title:"Small studio, professional standard.",
      about_p1:"We're a design studio based in Kosovo, created specifically to help Albanians and diaspora businesses get a website and logo that look serious — without high prices or complicated processes.",
      about_p2:"Every project includes direct communication, clear deadlines and a final result that's ready for Google, mobile and social media from day one.",
      about_it1_t:"Direct communication", about_it1_p:"WhatsApp, phone or email — whatever suits you.",
      about_it2_t:"Realistic timelines", about_it2_p:"Usually 1–3 weeks, depending on the package.",
      about_it3_t:"Fixed prices", about_it3_p:"What's agreed is what you pay — no hidden costs.",
      about_it4_t:"Compliant with Kosovo law", about_it4_p:"Registered business, contract & official invoice.",
      faq_eyebrow:"Frequently Asked Questions", faq_title:"What to know before we start.",
      faq1_q:"How long does it take to finish my website?", faq1_a:"The One-Pager usually takes 1–2 weeks, while the Standard package (up to 5 pages) takes 2–3 weeks, depending on how quickly you send us the content.",
      faq2_q:"Can I pay from abroad (Switzerland, Germany, France)?", faq2_a:"Yes. We accept international bank transfers and other online payment methods — details are arranged during our first conversation.",
      faq3_q:"Is the domain (website name) included in the price?", faq3_a:"Yes, the domain is included for the first year in both packages. Renewal in following years is billed at a small annual fee.",
      faq4_q:"Do you operate under Kosovo law?", faq4_a:"Yes, we are a registered business in Kosovo. Every project comes with a contract and an official invoice, in line with applicable legislation.",
      cont_eyebrow:"Contact", cont_title:"Let's start your project.",
      cont_lead:"Send us a few words about your business — we usually reply within 24 hours.",
      cont_loc:"Tirana 106, Prizren 20000, Kosovo",
      f_name:"Name", f_email:"Email", f_country:"Country", f_other:"Other", f_package:"Package",
      f_pkg1:"One-Pager — €650", f_pkg2:"Standard (5 pages) — €950", f_pkg3:"Not sure yet",
      f_msg:"Message", f_msg_ph:"Tell us a bit about your business...",
      f_consent:"I agree that my data will be used to contact me regarding this request, in accordance with the Privacy Policy.",
      f_submit:"Send Request",
      foot_about:"Web and logo design based in Kosovo, for the Albanian diaspora in Switzerland, Germany and France.",
      foot_nav:"Navigation", foot_contact:"Contact", foot_legal:"Legal",
      foot_impressum:"Company Details", foot_privacy:"Privacy Policy", foot_terms:"Terms of Service",
      foot_copy:"© 2026 Dardania Design. All rights reserved.",
      legal_note:"Dardania Design is a business located at Tirana 106, 20000 Prizren, Kosovo. Business activity and service contracts are governed by the laws of the Republic of Kosovo, including the Law on Electronic Commerce and the Law on Protection of Personal Data. For clients from the EU and Switzerland, personal data is handled in line with GDPR principles, to the extent applicable to service providers outside the EU. Business and fiscal registration numbers will be added once registration is finalized."
    }
  };

  const original = {};
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    original[el.getAttribute('data-i18n')+'::'+cssPath(el)] = el.innerHTML;
  });
  function cssPath(el){ /* simple unique-ish key using position */ return Array.from(el.parentNode.children).indexOf(el); }

  // simpler: store original AL text keyed by element reference via WeakMap
  const originalMap = new WeakMap();
  document.querySelectorAll('[data-i18n]').forEach(el=> originalMap.set(el, el.innerHTML));
  const originalPh = new WeakMap();
  document.querySelectorAll('[data-i18n-ph]').forEach(el=> originalPh.set(el, el.getAttribute('placeholder')));
  const originalTitle = document.title;
  const originalDesc = document.querySelector('meta[name="description"]').getAttribute('content');

  function setLang(lang){
    document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
    document.documentElement.lang = lang;

    if(lang==='sq'){
      document.querySelectorAll('[data-i18n]').forEach(el=>{ el.innerHTML = originalMap.get(el); });
      document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.setAttribute('placeholder', originalPh.get(el)); });
      document.title = originalTitle;
      document.querySelector('meta[name="description"]').setAttribute('content', originalDesc);
      return;
    }
    const dict = i18n[lang];
    if(!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){ el.innerHTML = dict[key]; }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.getAttribute('data-i18n-ph');
      if(dict[key] !== undefined){ el.setAttribute('placeholder', dict[key]); }
    });
    if(dict.meta_title) document.title = dict.meta_title;
  }

  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });
})();
