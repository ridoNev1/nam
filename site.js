const languageConfig = {
  default: "en",
  storageKey: "preferredLanguage",
  supported: ["en", "id", "ar"],
};

const translations = {
  brandName: {
    en: "Nayyara Mitra Kalendra",
    id: "Nayyara Mitra Kalendra",
    ar: "نايارا ميترا كاليندرا",
  },
  "nav.home": {
    en: "HOME",
    id: "BERANDA",
    ar: "الرئيسية",
  },
  "nav.about": {
    en: "ABOUT US",
    id: "TENTANG KAMI",
    ar: "من نحن",
  },
  "nav.products": {
    en: "PRODUCTS",
    id: "PRODUK",
    ar: "المنتجات",
  },
  "nav.factory": {
    en: "FACTORY",
    id: "PABRIK",
    ar: "المصنع",
  },
  "nav.contact": {
    en: "CONTACT",
    id: "KONTAK",
    ar: "تواصل",
  },
  "nav.toggleLabel": {
    en: "Toggle navigation",
    id: "Buka tutup navigasi",
    ar: "تبديل قائمة التنقل",
  },
  "nav.languageLabel": {
    en: "Language",
    id: "Bahasa",
    ar: "اللغة",
  },
  "cta.contact": {
    en: "CONTACT US",
    id: "HUBUNGI KAMI",
    ar: "اتصل بنا",
  },
  // Home — Hero
  "home.hero.title": {
    en: "Premium Coconut<br />Shell Briquette",
    id: "Briket Tempurung Kelapa<br />Premium",
    ar: "فحم أراجيل من قشر جوز الهند<br />فاخر",
  },
  "home.hero.subtitle": {
    en: "for a Sustainable World",
    id: "untuk dunia yang berkelanjutan",
    ar: "من أجل عالم مستدام",
  },
  "home.hero.body": {
    en: "CV Nayyara Mitra Kalendra engineers export-grade coconut charcoal briquettes that deliver consistent heat, low ash, and reliable supply for partners across Europe, the Middle East, and the Americas.",
    id: "CV Nayyara Mitra Kalendra merancang briket arang tempurung kelapa kelas ekspor yang menghadirkan panas konsisten, abu rendah, dan pasokan andal bagi mitra di Eropa, Timur Tengah, dan Amerika.",
    ar: "تُنتج شركة نايارا ميترا كاليندرا فحم أراجيل من قشر جوز الهند بمواصفات التصدير يوفر حرارة ثابتة، ورماداً منخفضاً، وإمدادات موثوقة لشركاء في أوروبا والشرق الأوسط والأمريكتين.",
  },
  "home.hero.ctaProducts": {
    en: "Explore Products",
    id: "Lihat Produk",
    ar: "استكشف المنتجات",
  },
  "home.hero.ctaTeam": {
    en: "Meet Our Export Team",
    id: "Temui Tim Ekspor Kami",
    ar: "قابل فريق التصدير لدينا",
  },
  "home.hero.stat1.title": {
    en: "High Heat, Long Burn",
    id: "Panas Tinggi, Nyala Panjang",
    ar: "حرارة عالية واحتراق طويل",
  },
  "home.hero.stat1.detail": {
    en: "7500 Kcal with 2h30 burn time",
    id: "7500 Kkal dengan waktu bakar 2 jam 30 menit",
    ar: "7500 سعر حراري مع مدة احتراق ساعتين ونصف",
  },
  "home.hero.stat2.title": {
    en: "Low Ash Assurance",
    id: "Jaminan Abu Rendah",
    ar: "ضمان رماد منخفض",
  },
  "home.hero.stat2.detail": {
    en: "Ash content maintained at 1.9–2.2%",
    id: "Kadar abu dijaga pada 1,9–2,2%",
    ar: "نسبة الرماد ثابتة بين 1.9–2.2%",
  },
  "home.hero.stat3.title": {
    en: "Global Export Support",
    id: "Dukungan Ekspor Global",
    ar: "دعم تصدير عالمي",
  },
  "home.hero.stat3.detail": {
    en: "Dedicated team handling OEM specs & logistics",
    id: "Tim khusus menangani spesifikasi OEM dan logistik",
    ar: "فريق مخصص للتعامل مع مواصفات OEM واللوجستيات",
  },
  // Home — Product Line-Up
  "home.lineup.eyebrow": {
    en: "Product Line-Up",
    id: "Lini Produk",
    ar: "تشكيلة المنتجات",
  },
  "home.lineup.heading": {
    en: "Export-grade briquettes for <span>every market demand</span>",
    id: "Briket kelas ekspor untuk <span>setiap kebutuhan pasar</span>",
    ar: "فحم بمواصفات التصدير يلبي <span>كل متطلبات السوق</span>",
  },
  "home.lineup.body": {
    en: "Choose from cube, hexagonal, circle, flat, and Kaloud profiles engineered to meet strict international KPIs for shisha lounges, barbecue distributors, and private-label brands.",
    id: "Pilih profil kubus, heksagonal, lingkaran, flat, dan Kaloud yang direkayasa untuk memenuhi KPI internasional ketat bagi lounge shisha, distributor barbeque, dan merek private label.",
    ar: "اختر أشكال المكعب والسداسي والدائري والمسطح والقالود المصممة لتلبي مؤشرات الأداء الدولية الصارمة لصالونات الشيشة وموزعي الشواء والعلامات الخاصة.",
  },
  "home.lineup.chipHeat": {
    en: "High Heat",
    id: "Panas Tinggi",
    ar: "حرارة عالية",
  },
  "home.lineup.chipBurn": {
    en: "Long Burn",
    id: "Nyala Panjang",
    ar: "احتراق طويل",
  },
  "home.lineup.chipOEM": {
    en: "OEM Ready",
    id: "Siap OEM",
    ar: "جاهز للعلامات الخاصة",
  },
  "home.lineup.statCapacity": {
    en: "Monthly capacity sustained by our dual custom production lines.",
    id: "Kapasitas bulanan dijaga oleh dua lini produksi kustom kami.",
    ar: "قدرة شهرية مدعومة بخطي الإنتاج المخصصين لدينا.",
  },
  "home.lineup.statMOQ": {
    en: "Minimum order quantity—one 20-ft container with full export documentation.",
    id: "Minimum pemesanan: satu kontainer 20 kaki dengan dokumen ekspor lengkap.",
    ar: "الحد الأدنى للطلب: حاوية بطول 20 قدماً مع مستندات التصدير الكاملة.",
  },
  "home.lineup.card1.tag": {
    en: "Flagship",
    id: "Andalan",
    ar: "منتج رئيسي",
  },
  "home.lineup.card1.title": {
    en: "Cube 2.5 cm & 2.2 cm",
    id: "Kubus 2,5 cm & 2,2 cm",
    ar: "مكعب 2.5 سم و2.2 سم",
  },
  "home.lineup.card1.body": {
    en: "Industry-standard cubes for shisha and BBQ distribution with crisp edges, steady airflow, and uniform carbon density.",
    id: "Kubus standar industri untuk distribusi shisha dan BBQ dengan tepi presisi, aliran udara stabil, dan kerapatan karbon seragam.",
    ar: "مكعبات بمعايير الصناعة لتوزيع الشيشة والشواء بحواف دقيقة وتدفق هواء ثابت وكثافة كربون متجانسة.",
  },
  "home.lineup.card1.feature1": {
    en: "2h30 burn time with sustained heat plateaus.",
    id: "Waktu bakar 2 jam 30 menit dengan panas stabil.",
    ar: "مدة احتراق ساعتين ونصف مع حرارة ثابتة.",
  },
  "home.lineup.card1.feature2": {
    en: "Ash performance maintained between 1.9–2.2%.",
    id: "Kinerja abu terjaga di kisaran 1,9–2,2%.",
    ar: "نسبة الرماد محفوظة بين 1.9–2.2%.",
  },
  "home.lineup.card1.cta": {
    en: "View Product Specs",
    id: "Lihat Spesifikasi Produk",
    ar: "عرض مواصفات المنتج",
  },
  "home.lineup.card2.tag": {
    en: "Endurance",
    id: "Daya Tahan",
    ar: "التحمّل",
  },
  "home.lineup.card2.title": {
    en: "Hexagonal 2.2 cm",
    id: "Heksagonal 2,2 cm",
    ar: "سداسي 2.2 سم",
  },
  "home.lineup.card2.body": {
    en: "Hollow-core geometry extends burn duration for grilling and lounge formats while delivering crack resistance in transit.",
    id: "Desain berongga memperpanjang durasi bakar untuk format panggangan dan lounge serta tahan retak saat pengiriman.",
    ar: "تصميم مجوف يطيل مدة الاحتراق للشواء وصالات الشيشة مع مقاومة التشقق أثناء النقل.",
  },
  "home.lineup.card2.feature1": {
    en: "Optimised draft keeps combustion even through service.",
    id: "Tarikan udara yang dioptimalkan menjaga pembakaran merata sepanjang penggunaan.",
    ar: "تيار هواء محسّن يحافظ على احتراق متوازن طوال الخدمة.",
  },
  "home.lineup.card2.feature2": {
    en: "Engineered strength to surpass 8+ drop tests.",
    id: "Kekuatan teruji melampaui 8+ uji jatuh.",
    ar: "متانة هندسية تتجاوز أكثر من ثمانية اختبارات سقوط.",
  },
  "home.lineup.card2.cta": {
    en: "Export Catalogue",
    id: "Katalog Ekspor",
    ar: "دليل التصدير",
  },
  "home.lineup.card3.tag": {
    en: "Specialty",
    id: "Spesial",
    ar: "منتج متخصص",
  },
  "home.lineup.card3.title": {
    en: "Flat & Kaloud Discs",
    id: "Flat & Kaloud Disc",
    ar: "أقراص مسطحة وكالود",
  },
  "home.lineup.card3.body": {
    en: "Slim profiles tuned for lotus systems, balancing quick light-up with clean, even embers for premium lounge experiences.",
    id: "Profil tipis yang disetel untuk sistem lotus, menyeimbangkan penyalaan cepat dengan bara bersih dan merata untuk lounge premium.",
    ar: "تصاميم رفيعة مُهيأة لأنظمة اللوتس توازن بين الاشتعال السريع والجمر النظيف والمتساوي لصالات الدرجة الممتازة.",
  },
  "home.lineup.card3.feature1": {
    en: "Gentle ember plume safeguards delicate flavour profiles.",
    id: "Semburan bara lembut menjaga profil rasa yang halus.",
    ar: "انبعاث جمر لطيف يحافظ على النكهات الدقيقة.",
  },
  "home.lineup.card3.feature2": {
    en: "100% coconut shell base with dependable low volatile matter.",
    id: "Basis 100% tempurung kelapa dengan kadar zat mudah menguap yang rendah.",
    ar: "مصنوع بالكامل من قشر جوز الهند مع محتوى منخفض وموثوق من المواد المتطايرة.",
  },
  "home.lineup.card3.cta": {
    en: "Retail Lookbook",
    id: "Katalog Ritel",
    ar: "دليل التجزئة",
  },
  // Home — Why NAM
  "home.why.eyebrow": {
    en: "Why Choose Nayyara Mitra Kalendra",
    id: "Mengapa Memilih Nayyara Mitra Kalendra",
    ar: "لماذا تختار نايارا ميترا كاليندرا",
  },
  "home.why.heading": {
    en: "Engineering standards that <span>ignite trust</span>",
    id: "Standar rekayasa yang <span>membangun kepercayaan</span>",
    ar: "معايير هندسية <span>تشعل الثقة</span>",
  },
  "home.why.body": {
    en: "Since 2014 we have transformed coconut shell waste into export briquettes through a fully traceable journey—screening, crushing, blending, molding, drying, and final QA—ensuring every shipment matches the specs signed off by our customers.",
    id: "Sejak 2014 kami mengubah limbah tempurung kelapa menjadi briket ekspor melalui proses yang sepenuhnya terlacak—penyaringan, penghancuran, pencampuran, pencetakan, pengeringan, hingga QA akhir—agar setiap pengiriman sesuai spesifikasi yang disetujui pelanggan.",
    ar: "منذ عام 2014 نحول مخلفات قشر جوز الهند إلى فحم للتصدير عبر رحلة يمكن تتبعها بالكامل من الغربلة والطحن والخلط والتشكيل والتجفيف حتى مراقبة الجودة النهائية لضمان مطابقة كل شحنة للمواصفات المعتمدة من عملائنا.",
  },
  "home.why.dualLines.title": {
    en: "Dual Lines",
    id: "Dua Lini",
    ar: "خطّان للإنتاج",
  },
  "home.why.dualLines.body": {
    en: "Custom-built machines stabilise temperature, moisture, and density across two dedicated production lines.",
    id: "Mesin kustom menstabilkan suhu, kelembapan, dan kerapatan di dua lini produksi khusus.",
    ar: "آلات مُصممة خصيصاً تثبت الحرارة والرطوبة والكثافة عبر خطي إنتاج مخصصين.",
  },
  "home.why.globalReach.title": {
    en: "Global Reach",
    id: "Jangkauan Global",
    ar: "انتشار عالمي",
  },
  "home.why.globalReach.body": {
    en: "Export experience across Europe, the Middle East, Red Sea, Asia, and the Americas with full customs coordination.",
    id: "Pengalaman ekspor ke Eropa, Timur Tengah, Laut Merah, Asia, dan Amerika dengan koordinasi bea cukai penuh.",
    ar: "خبرة تصدير إلى أوروبا والشرق الأوسط والبحر الأحمر وآسيا والأمريكتين مع تنسيق جمركي كامل.",
  },
  "home.why.step1": {
    en: "Sustainably sourced coconut shells through our partner CV Sinar Tirta Jaya across audited plantations in Indonesia.",
    id: "Tempurung kelapa bersumber berkelanjutan melalui mitra kami CV Sinar Tirta Jaya dari kebun bersertifikasi di Indonesia.",
    ar: "قشر جوز الهند يتم الحصول عليه بشكل مستدام عبر شريكنا CV Sinar Tirta Jaya من مزارع مدققة في إندونيسيا.",
  },
  "home.why.step2": {
    en: "Controlled carbonisation with closed-loop heat recovery to minimise emissions and energy waste.",
    id: "Karbonisasi terkendali dengan pemulihan panas tertutup untuk meminimalkan emisi dan pemborosan energi.",
    ar: "تفحيم مضبوط مع استعادة حرارة مغلقة لتقليل الانبعاثات والهدر في الطاقة.",
  },
  "home.why.step3": {
    en: "Triple inspection—burn, ash, and moisture—before export clearance for every batch.",
    id: "Inspeksi tiga kali—nyala, abu, dan kelembapan—sebelum persetujuan ekspor setiap batch.",
    ar: "فحص ثلاثي للهب والرماد والرطوبة قبل إجازة التصدير لكل دفعة.",
  },
  "home.why.feature1.title": {
    en: "High Heat Guarantee",
    id: "Jaminan Panas Tinggi",
    ar: "ضمان حرارة عالية",
  },
  "home.why.feature1.body": {
    en: "7,500 Kcal calorific value ensures powerful ignition for demanding lounge and grill applications.",
    id: "Nilai kalor 7.500 Kkal memastikan penyalaan kuat untuk kebutuhan lounge dan grill yang menuntut.",
    ar: "قيمة حرارية تبلغ 7500 سعر حراري تضمن اشتعالاً قوياً للتطبيقات الصعبة في الصالات والمشاوي.",
  },
  "home.why.feature2.title": {
    en: "Low Ash Results",
    id: "Hasil Abu Rendah",
    ar: "نتائج رماد منخفض",
  },
  "home.why.feature2.body": {
    en: "Ash content controlled at 1.9–2.2% to keep hookah sessions and kitchen surfaces pristine.",
    id: "Kadar abu terkontrol di 1,9–2,2% untuk menjaga sesi hookah dan permukaan dapur tetap bersih.",
    ar: "نسبة الرماد المضبوطة بين 1.9–2.2% تحافظ على نظافة جلسات الشيشة وأسطح المطابخ.",
  },
  "home.why.feature3.title": {
    en: "Extended Burn Time",
    id: "Waktu Bakar Lebih Lama",
    ar: "مدة احتراق أطول",
  },
  "home.why.feature3.body": {
    en: "Kiln curves and weathering cycles secure 2h30 average burn time with stable ember output.",
    id: "Kurva kiln dan siklus pelapukan memastikan waktu bakar rata-rata 2 jam 30 menit dengan bara stabil.",
    ar: "منحنيات الأفران ودورات التكييف تضمن متوسط احتراق ساعتين ونصف مع جمر ثابت.",
  },
  "home.why.feature4.title": {
    en: "Responsible Sourcing",
    id: "Sumber Bertanggung Jawab",
    ar: "توريد مسؤول",
  },
  "home.why.feature4.body": {
    en: "100% coconut shells valorised into clean energy, reducing deforestation and landfill waste streams.",
    id: "100% tempurung kelapa dimanfaatkan menjadi energi bersih, mengurangi deforestasi dan limbah ke TPA.",
    ar: "100% من قشور جوز الهند تتحول إلى طاقة نظيفة، مما يقلل إزالة الغابات والنفايات المطمورة.",
  },
  // Home — Partnership Network
  "home.partners.eyebrow": {
    en: "Partnership Network",
    id: "Jaringan Kemitraan",
    ar: "شبكة الشركاء",
  },
  "home.partners.heading": {
    en: "Building lasting <span>distribution alliances</span>",
    id: "Membangun <span>aliansi distribusi</span> jangka panjang",
    ar: "نبني <span>تحالفات توزيع مستدامة</span>",
  },
  "home.partners.body": {
    en: "CV Nayyara Mitra Kalendra collaborates with importers, national distributors, and OEM brands to deliver coconut shell briquettes across Europe, the Middle East, Red Sea, Asia, and the Americas. We customise products, packaging, and documentation to match your market strategy.",
    id: "CV Nayyara Mitra Kalendra berkolaborasi dengan importir, distributor nasional, dan merek OEM untuk menghadirkan briket tempurung kelapa ke Eropa, Timur Tengah, Laut Merah, Asia, dan Amerika. Kami menyesuaikan produk, kemasan, dan dokumen sesuai strategi pasar Anda.",
    ar: "تتعاون شركة نايارا ميترا كاليندرا مع المستوردين والموزعين الوطنيين والعلامات الخاصة لتوريد فحم قشر جوز الهند عبر أوروبا والشرق الأوسط والبحر الأحمر وآسيا والأمريكتين، مع تخصيص المنتجات والتغليف والمستندات بما يناسب استراتيجيتك السوقية.",
  },
  "home.partners.card1.title": {
    en: "OEM & Private Label",
    id: "OEM & Private Label",
    ar: "العلامات الخاصة و OEM",
  },
  "home.partners.card1.body": {
    en: "End-to-end artwork coordination, inner box design, and master carton printing tailored to your brand guidelines.",
    id: "Koordinasi desain menyeluruh, desain inner box, dan pencetakan karton utama sesuai panduan merek Anda.",
    ar: "تنسيق كامل للتصميمات، وتصميم العلب الداخلية، وطباعة الكراتين الرئيسية وفق إرشادات علامتك التجارية.",
  },
  "home.partners.card2.title": {
    en: "Seamless Logistics",
    id: "Logistik Tanpa Hambatan",
    ar: "لوجستيات سلسة",
  },
  "home.partners.card2.body": {
    en: "We handle proforma invoices, customs paperwork, fumigation, and container loading updates for your lane.",
    id: "Kami menangani proforma invoice, dokumen bea cukai, fumigasi, dan pembaruan muatan kontainer untuk jalur Anda.",
    ar: "نتولى الفواتير المبدئية والمستندات الجمركية والتبخير وتحديثات تحميل الحاويات لخط شحنك.",
  },
  "home.partners.card3.title": {
    en: "Certified Quality",
    id: "Kualitas Bersertifikat",
    ar: "جودة معتمدة",
  },
  "home.partners.card3.body": {
    en: "Batch-level COA, MSDS, and third-party inspections (CARSURIN) available to reinforce trust with your clients.",
    id: "COA, MSDS, dan inspeksi pihak ketiga (CARSURIN) per batch tersedia untuk menumbuhkan kepercayaan pelanggan Anda.",
    ar: "شهادات التحليل وتقارير السلامة وفحوصات الطرف الثالث (كارسرين) متاحة لكل دفعة لتعزيز ثقة عملائك.",
  },
  "home.partners.card4.title": {
    en: "Market Coverage",
    id: "Cakupan Pasar",
    ar: "تغطية الأسواق",
  },
  "home.partners.card4.body": {
    en: "Active partners in Europe, USA, Middle East, Red Sea region, India, North America, and Russia—with capacity to scale new territories.",
    id: "Mitra aktif di Eropa, AS, Timur Tengah, kawasan Laut Merah, India, Amerika Utara, dan Rusia—siap memperluas pasar baru.",
    ar: "شركاء نشطون في أوروبا والولايات المتحدة والشرق الأوسط ومنطقة البحر الأحمر والهند وأمريكا الشمالية وروسيا مع قدرة على التوسع لأسواق جديدة.",
  },
  "home.partners.ctaPrimary": {
    en: "Become a Partner",
    id: "Jadi Mitra",
    ar: "انضم كشريك",
  },
  "home.partners.ctaSecondary": {
    en: "Download Partnership Deck",
    id: "Unduh Deck Kemitraan",
    ar: "حمّل عرض الشراكة",
  },
  // Home — Affiliations
  "home.affiliations.eyebrow": {
    en: "Affiliations",
    id: "Afiliasi",
    ar: "شراكات",
  },
  "home.affiliations.heading": {
    en: "Trusted by <span>global partners &amp; certifiers</span>",
    id: "Dipercaya oleh <span>mitra &amp; lembaga sertifikasi global</span>",
    ar: "موثوق به من قبل <span>شركاء وجهات اعتماد عالمية</span>",
  },
  "home.affiliations.body": {
    en: "Our briquettes move through a dependable ecosystem of sourcing, certification, logistics, and finance partners to ensure every shipment reaches your market on schedule.",
    id: "Briket kami melewati ekosistem andal: pemasok bahan baku, sertifikasi, logistik, dan mitra keuangan untuk memastikan setiap pengiriman tiba tepat waktu.",
    ar: "يمر فحمنا عبر منظومة موثوقة من الشركاء في التوريد والاعتماد واللوجستيات والتمويل لضمان وصول كل شحنة إلى سوقك في الموعد المحدد.",
  },
  // Home — Production Specs
  "home.production.eyebrow": {
    en: "Production Clarity",
    id: "Kejelasan Produksi",
    ar: "وضوح الإنتاج",
  },
  "home.production.heading": {
    en: "Transparent specs for <span>every partner</span>",
    id: "Spesifikasi transparan untuk <span>setiap mitra</span>",
    ar: "مواصفات شفافة <span>لكل شريك</span>",
  },
  "home.production.body": {
    en: "We document every batch with moisture, ash, and fixed carbon reports so your customers receive predictable heat with every shipment.",
    id: "Setiap batch terdokumentasi dengan laporan kelembapan, abu, dan karbon tetap agar pelanggan Anda menerima panas yang konsisten.",
    ar: "نوثق كل دفعة بتقارير الرطوبة والرماد والكربون الثابت لضمان حرارة متوقعة في كل شحنة.",
  },
  "home.production.card1.tag": {
    en: "Export Ready",
    id: "Siap Ekspor",
    ar: "جاهز للتصدير",
  },
  "home.production.card1.label": {
    en: "Cube",
    id: "Kubus",
    ar: "مكعب",
  },
  "home.production.card1.title": {
    en: "Premium 2.0 cm",
    id: "Premium 2,0 cm",
    ar: "ممتاز 2.0 سم",
  },
  "home.production.card1.body": {
    en: "Packed with moisture-absorbing liners to arrive stable and ready for premium lounges worldwide.",
    id: "Dikemas dengan liner penyerap kelembapan agar stabil dan siap untuk lounge premium di seluruh dunia.",
    ar: "معبأ ببطانات ماصة للرطوبة ليصل ثابتاً وجاهزاً لصالات الدرجة الممتازة حول العالم.",
  },
  "home.production.card1.cta": {
    en: "Request COA",
    id: "Minta COA",
    ar: "اطلب شهادة التحليل",
  },
  "home.production.card2.tag": {
    en: "Long Haul",
    id: "Jarak Jauh",
    ar: "رحلات طويلة",
  },
  "home.production.card2.label": {
    en: "Hexa",
    id: "Hexa",
    ar: "سداسي",
  },
  "home.production.card2.title": {
    en: "2.2 cm Hexagonal",
    id: "Heksagonal 2,2 cm",
    ar: "سداسي 2.2 سم",
  },
  "home.production.card2.body": {
    en: "Hollow core extends airflow for slow, steady heating across grills and commercial kitchens.",
    id: "Inti berongga memperpanjang aliran udara untuk pemanasan lambat dan stabil di panggangan dan dapur komersial.",
    ar: "نواة مجوفة تطيل تدفق الهواء للتسخين البطيء والثابت في المشاوي والمطابخ التجارية.",
  },
  "home.production.card2.cta": {
    en: "Download Specs",
    id: "Unduh Spesifikasi",
    ar: "حمّل المواصفات",
  },
  "home.production.card3.tag": {
    en: "Boutique",
    id: "Boutique",
    ar: "مصمم خصيصاً",
  },
  "home.production.card3.label": {
    en: "Finger",
    id: "Finger",
    ar: "إصبع",
  },
  "home.production.card3.title": {
    en: "Finger Cut Custom",
    id: "Finger Cut Custom",
    ar: "مقاس الإصبع المخصص",
  },
  "home.production.card3.body": {
    en: "Ideal for speciality cafes and mixologists requiring responsive heat in compact formats.",
    id: "Ideal untuk kafe spesialis dan mixologist yang membutuhkan panas responsif dalam format ringkas.",
    ar: "مثالي للمقاهي المتخصصة وصانعي المشروبات الذين يحتاجون حرارة سريعة الاستجابة في أحجام مدمجة.",
  },
  "home.production.card3.cta": {
    en: "Customise Order",
    id: "Sesuaikan Pesanan",
    ar: "خصّص طلبك",
  },
  "home.production.metrics.moisture": {
    en: "Moisture",
    id: "Kelembapan",
    ar: "الرطوبة",
  },
  "home.production.metrics.ash": {
    en: "Ash",
    id: "Abu",
    ar: "الرماد",
  },
  "home.production.metrics.volatile": {
    en: "Volatile Matter",
    id: "Zat Mudah Menguap",
    ar: "المواد المتطايرة",
  },
  "home.production.metrics.fixedCarbon": {
    en: "Fixed Carbon",
    id: "Karbon Tetap",
    ar: "الكربون الثابت",
  },
  "home.production.metrics.ashColor": {
    en: "Ash Colour",
    id: "Warna Abu",
    ar: "لون الرماد",
  },
  "home.production.metrics.burnTime": {
    en: "Burn Time",
    id: "Waktu Bakar",
    ar: "مدة الاحتراق",
  },
  "home.production.metrics.calories": {
    en: "Calories",
    id: "Kalori",
    ar: "السعرات الحرارية",
  },
  "home.production.metrics.dropTest": {
    en: "Drop Test",
    id: "Uji Jatuh",
    ar: "اختبار السقوط",
  },
  "home.production.metrics.length": {
    en: "Length",
    id: "Panjang",
    ar: "الطول",
  },
  "home.production.metrics.moq": {
    en: "MOQ",
    id: "MOQ",
    ar: "الحد الأدنى للطلب",
  },
  // Home — About Snapshot
  "home.about.eyebrow": {
    en: "About Nayyara Mitra Kalendra",
    id: "Tentang Nayyara Mitra Kalendra",
    ar: "عن نايارا ميترا كاليندرا",
  },
  "home.about.heading": {
    en: "Built on <span>process excellence</span> and traceability",
    id: "Dibangun di atas <span>keunggulan proses</span> dan keterlacakan",
    ar: "بُني على <span>تميّز العمليات</span> وإمكانية التتبع",
  },
  "home.about.body": {
    en: "Established in 2014, CV Nayyara Mitra Kalendra fuses strategic plant location, skilled manpower, and rigorous QA to turn coconut shells into export-ready energy. We collaborate with CV Sinar Tirta Jaya for reliable raw material and maintain full-traceability from shell sourcing to finished goods.",
    id: "Sejak 2014, CV Nayyara Mitra Kalendra memadukan lokasi pabrik strategis, tenaga terampil, dan QA ketat untuk mengubah tempurung kelapa menjadi energi siap ekspor. Kami bermitra dengan CV Sinar Tirta Jaya dan menjaga keterlacakan penuh dari bahan baku hingga produk jadi.",
    ar: "منذ عام 2014 تجمع شركة نايارا ميترا كاليندرا بين موقع المصنع الاستراتيجي والكوادر الماهرة ومراقبة الجودة الصارمة لتحويل قشر جوز الهند إلى طاقة جاهزة للتصدير، مع شراكة مع CV Sinar Tirta Jaya للحفاظ على تتبع كامل من المادة الخام حتى المنتج النهائي.",
  },
  "home.about.stat1": {
    en: "Year we began serving global buyers with coconut shell briquettes from Surabaya and Sidoarjo, Indonesia.",
    id: "Tahun kami mulai melayani pembeli global dengan briket tempurung kelapa dari Surabaya dan Sidoarjo, Indonesia.",
    ar: "العام الذي بدأنا فيه خدمة المشترين العالميين بفحم قشر جوز الهند من سورابايا وسيدوارجو في إندونيسيا.",
  },
  "home.about.stat2": {
    en: "Monthly output capacity supported by precision ovens, mixers, and finishing lines.",
    id: "Kapasitas produksi bulanan didukung oven presisi, mixer, dan lini finishing.",
    ar: "طاقة إنتاج شهرية مدعومة بأفران دقيقة وخلاطات وخطوط تشطيب.",
  },
  "home.about.bullet1": {
    en: "Fully traceable supply chain with batch-level documentation and CARSURIN-aligned testing protocols.",
    id: "Rantai pasok sepenuhnya terlacak dengan dokumentasi per batch dan protokol pengujian sesuai CARSURIN.",
    ar: "سلسلة توريد يمكن تتبعها بالكامل مع توثيق لكل دفعة وبروتوكولات اختبار متوافقة مع CARSURIN.",
  },
  "home.about.bullet2": {
    en: "Dedicated R&D to customise specs, blends, and packaging for OEM partners.",
    id: "R&D khusus untuk menyesuaikan spesifikasi, campuran, dan kemasan bagi mitra OEM.",
    ar: "قسم بحث وتطوير مخصص لتخصيص المواصفات والخلطات والتغليف لشركاء العلامات الخاصة.",
  },
  "home.about.bullet3": {
    en: "Export coverage across Europe, Middle East, Red Sea, Asia, and the Americas.",
    id: "Cakupan ekspor ke Eropa, Timur Tengah, Laut Merah, Asia, dan Amerika.",
    ar: "تغطية تصدير تشمل أوروبا والشرق الأوسط والبحر الأحمر وآسيا والأمريكتين.",
  },
  "home.about.ctaProfile": {
    en: "Download Company Profile",
    id: "Unduh Profil Perusahaan",
    ar: "حمّل الملف التعريفي للشركة",
  },
  "home.about.ctaFactory": {
    en: "Explore Our Factory",
    id: "Jelajahi Pabrik Kami",
    ar: "استكشف مصنعنا",
  },
  // Home — CTA
  "home.cta.eyebrow": {
    en: "Partner With Us",
    id: "Bermitra dengan Kami",
    ar: "تعاون معنا",
  },
  "home.cta.heading": {
    en: "Ready to elevate your grilling experience?",
    id: "Siap meningkatkan pengalaman memanggang Anda?",
    ar: "هل أنت مستعد للارتقاء بتجربة الشواء لديك؟",
  },
  "home.cta.body": {
    en: "Speak with our export specialists to align MOQ, pallet plans, OEM packaging, and shipment timelines. We coordinate proforma invoices, documentation, and batch tracking end-to-end.",
    id: "Diskusikan dengan spesialis ekspor kami untuk menyelaraskan MOQ, rencana palet, kemasan OEM, dan timeline pengiriman. Kami mengoordinasikan proforma invoice, dokumentasi, dan pelacakan batch secara menyeluruh.",
    ar: "تحدث مع فريق التصدير لدينا لمواءمة الحد الأدنى للطلب وخطط المنصات والتغليف الخاص وجداول الشحن. نحن ننسق الفواتير المبدئية والوثائق وتتبع الدُفعات من البداية حتى النهاية.",
  },
  "home.cta.btnPrimary": {
    en: "Contact Our Team",
    id: "Hubungi Tim Kami",
    ar: "تواصل مع فريقنا",
  },
  "home.cta.btnSecondary": {
    en: "Email Export Desk",
    id: "Email Meja Ekspor",
    ar: "أرسل بريداً إلى فريق التصدير",
  },
  // Home — Footer
  "home.footer.tagline": {
    en: "From Coconut Shells to Sustainable Energy — Nayyara Mitra Kalendra powers the world, responsibly.",
    id: "Dari tempurung kelapa menjadi energi berkelanjutan — Nayyara Mitra Kalendra menyalakan dunia dengan tanggung jawab.",
    ar: "من قشر جوز الهند إلى طاقة مستدامة — نايارا ميترا كاليندرا تزوّد العالم بالطاقة بمسؤولية.",
  },
  "home.footer.headOffice": {
    en: "<strong class=\"text-gray-200\">Head Office:</strong> Taman Pondok Indah OX-21, Wiyung, Surabaya, Indonesia.",
    id: "<strong class=\"text-gray-200\">Kantor Pusat:</strong> Taman Pondok Indah OX-21, Wiyung, Surabaya, Indonesia.",
    ar: "<strong class=\"text-gray-200\">المقر الرئيسي:</strong> تامان بوندوك إنده OX-21، ويونغ، سورابايا، إندونيسيا.",
  },
  "home.footer.factory": {
    en: "<strong class=\"text-gray-200\">Factory:</strong> Jl Industri No 68, Buduran, Sidoarjo, Jawa Timur, Indonesia.",
    id: "<strong class=\"text-gray-200\">Pabrik:</strong> Jl Industri No 68, Buduran, Sidoarjo, Jawa Timur, Indonesia.",
    ar: "<strong class=\"text-gray-200\">المصنع:</strong> شارع إندستري رقم 68، بودوران، سيدوارجو، جاوة الشرقية، إندونيسيا.",
  },
  "home.footer.products": {
    en: "Products",
    id: "Produk",
    ar: "المنتجات",
  },
  "home.footer.linkCube": {
    en: "Cube 2.5 & 2.2 cm",
    id: "Kubus 2,5 & 2,2 cm",
    ar: "مكعب 2.5 و2.2 سم",
  },
  "home.footer.linkHexa": {
    en: "Hexagonal 2.2 cm",
    id: "Heksagonal 2,2 cm",
    ar: "سداسي 2.2 سم",
  },
  "home.footer.linkKaloud": {
    en: "Flat & Kaloud Discs",
    id: "Disc Flat & Kaloud",
    ar: "أقراص مسطحة وكالود",
  },
  "home.footer.company": {
    en: "Company",
    id: "Perusahaan",
    ar: "الشركة",
  },
  "home.footer.linkAbout": {
    en: "About Us",
    id: "Tentang Kami",
    ar: "من نحن",
  },
  "home.footer.linkFactory": {
    en: "Factory",
    id: "Pabrik",
    ar: "المصنع",
  },
  "home.footer.linkContact": {
    en: "Contact",
    id: "Kontak",
    ar: "تواصل",
  },
  "home.footer.subscribeHeading": {
    en: "Subscribe",
    id: "Berlangganan",
    ar: "اشترك",
  },
  "home.footer.subscribeCopy": {
    en: "Get updates on production slots, specification updates, and export timelines.",
    id: "Dapatkan informasi terbaru mengenai slot produksi, pembaruan spesifikasi, dan jadwal ekspor.",
    ar: "احصل على تحديثات حول جداول الإنتاج والمواصفات ومواعيد الشحن.",
  },
  "home.footer.placeholderEmail": {
    en: "Your email",
    id: "Email Anda",
    ar: "بريدك الإلكتروني",
  },
  "home.footer.sendButton": {
    en: "Send",
    id: "Kirim",
    ar: "أرسل",
  },
  "home.footer.bottom": {
    en: "&copy; <span id=\"year\"></span> CV Nayyara Mitra Kalendra. All rights reserved. Head Office: Taman Pondok Indah OX-21, Wiyung, Surabaya.",
    id: "&copy; <span id=\"year\"></span> CV Nayyara Mitra Kalendra. Seluruh hak cipta dilindungi. Kantor Pusat: Taman Pondok Indah OX-21, Wiyung, Surabaya.",
    ar: "&copy; <span id=\"year\"></span> CV نايارا ميترا كاليندرا. جميع الحقوق محفوظة. المقر الرئيسي: تامان بوندوك إنده OX-21، ويونغ، سورابايا.",
  },
  "home.footer.map": {
    en: "Factory Map",
    id: "Peta Pabrik",
    ar: "خريطة المصنع",
  },
  "home.footer.whatsapp": {
    en: "WhatsApp",
    id: "WhatsApp",
    ar: "واتساب",
  },
  "home.footer.emailLink": {
    en: "Email",
    id: "Email",
    ar: "البريد الإلكتروني",
  },
  // About
  "about.meta.title": {
    en: "About Us — CV Nayyara Mitra Kalendra",
    id: "Tentang Kami — CV Nayyara Mitra Kalendra",
    ar: "من نحن — CV نايارا ميترا كاليندرا",
  },
  "about.hero.eyebrow": {
    en: "About Us",
    id: "Tentang Kami",
    ar: "من نحن",
  },
  "about.hero.heading": {
    en: "Building <span>global energy solutions</span> from coconut shells",
    id: "Membangun <span>solusi energi global</span> dari tempurung kelapa",
    ar: "نبني <span>حلول طاقة عالمية</span> من قشر جوز الهند",
  },
  "about.hero.body": {
    en: "CV Nayyara Mitra Kalendra (NAM) is an Indonesian export partner specialising in coconut shell briquettes for shisha and barbecue markets. Since 2014 we have combined strategic sourcing, traceability, and customer-centric collaboration to help distributors, importers, and OEM brands scale their businesses.",
    id: "CV Nayyara Mitra Kalendra (NAM) adalah mitra ekspor Indonesia yang berfokus pada briket tempurung kelapa untuk pasar shisha dan barbeque. Sejak 2014 kami menggabungkan sumber bahan strategis, keterlacakan, dan kolaborasi berorientasi pelanggan untuk membantu distributor, importir, dan merek OEM menumbuhkan bisnis mereka.",
    ar: "تُعد CV نايارا ميترا كاليندرا شريكاً إندونيسياً في التصدير متخصصاً في فحم قشر جوز الهند لأسواق الشيشة والشواء. منذ عام 2014 نجمع بين التوريد الاستراتيجي والتتبع الكامل والتعاون المتمحور حول العميل لدعم توسيع أعمال الموزعين والمستوردين والعلامات الخاصة.",
  },
  "about.overview.eyebrow": {
    en: "Company Overview",
    id: "Gambaran Perusahaan",
    ar: "نظرة عامة على الشركة",
  },
  "about.overview.heading": {
    en: "Established in <span>2014</span> with a global mandate",
    id: "Berdiri pada <span>2014</span> dengan mandat global",
    ar: "تأسست في <span>2014</span> بتفويض عالمي",
  },
  "about.overview.body": {
    en: "Headquartered in Surabaya with a production centre in Sidoarjo, NAM delivers premium coconut shell briquettes to partners across Europe, the Middle East, Red Sea countries, Asia, and the Americas. We partner closely with CV Sinar Tirta Jaya to secure consistent raw materials and operate dual production lines with a combined capacity of up to 300 tons per month.",
    id: "Berkantor pusat di Surabaya dengan pusat produksi di Sidoarjo, NAM memasok briket tempurung kelapa premium ke mitra di Eropa, Timur Tengah, negara-negara Laut Merah, Asia, dan Amerika. Kami bermitra erat dengan CV Sinar Tirta Jaya untuk memastikan bahan baku konsisten dan mengoperasikan dua lini produksi dengan kapasitas gabungan hingga 300 ton per bulan.",
    ar: "يقع مقر NAM في سورابايا مع مركز إنتاج في سيدوارجو، وتزود شركاءها في أوروبا والشرق الأوسط ودول البحر الأحمر وآسيا والأمريكتين بفحم قشر جوز الهند الفاخر. نتعاون عن كثب مع CV Sinar Tirta Jaya لضمان توفر المواد الخام وتشغيل خطي إنتاج بطاقة تصل إلى 300 طن شهرياً.",
  },
  "about.overview.stat1": {
    en: "Year NAM began exporting coconut briquettes to international markets.",
    id: "Tahun NAM mulai mengekspor briket kelapa ke pasar internasional.",
    ar: "السنة التي بدأت فيها NAM بتصدير فحم جوز الهند إلى الأسواق العالمية.",
  },
  "about.overview.stat2": {
    en: "Monthly production capacity supported by custom machinery and QA checkpoints.",
    id: "Kapasitas produksi bulanan yang didukung mesin kustom dan titik QA.",
    ar: "طاقة إنتاج شهرية مدعومة بآلات مخصصة ونقاط تفتيش للجودة.",
  },
  "about.objective.title": {
    en: "Our Objective",
    id: "Tujuan Kami",
    ar: "هدفنا",
  },
  "about.objective.body": {
    en: "To help global businesses grow by supplying innovative, reliable, and efficient coconut charcoal solutions while maintaining ethical and sustainable practices.",
    id: "Membantu bisnis global berkembang dengan memasok solusi arang kelapa yang inovatif, andal, dan efisien sambil menjaga praktik etis dan berkelanjutan.",
    ar: "مساعدة الشركات العالمية على النمو عبر توفير حلول فحم جوز الهند المبتكرة والموثوقة والفعالة مع الالتزام بالممارسات الأخلاقية والمستدامة.",
  },
  "about.ecosystem.title": {
    en: "Collaborative Ecosystem",
    id: "Ekosistem Kolaboratif",
    ar: "منظومة تعاونية",
  },
  "about.ecosystem.body": {
    en: "We align procurement, production, QC, and logistics teams to deliver smooth exports from Indonesia to your destination port.",
    id: "Kami menyelaraskan tim pengadaan, produksi, QC, dan logistik untuk menghadirkan ekspor yang lancar dari Indonesia ke pelabuhan tujuan Anda.",
    ar: "ننسق فرق المشتريات والإنتاج وضمان الجودة واللوجستيات لضمان تدفق سلس للشحنات من إندونيسيا إلى ميناء وجهتك.",
  },
  "about.vision.eyebrow": {
    en: "Vision & Mission",
    id: "Visi & Misi",
    ar: "الرؤية والرسالة",
  },
  "about.vision.heading": {
    en: "Guiding <span>our journey</span> to premium quality",
    id: "Menuntun <span>perjalanan kami</span> menuju kualitas premium",
    ar: "نقود <span>رحلتنا</span> نحو جودة فائقة",
  },
  "about.vision.title": {
    en: "Vision",
    id: "Visi",
    ar: "الرؤية",
  },
  "about.vision.body": {
    en: "To become a trustworthy and professional company in the international commodities market by building robust distribution channels and delivering the best premium briquettes.",
    id: "Menjadi perusahaan yang terpercaya dan profesional di pasar komoditas internasional dengan membangun jalur distribusi yang kuat serta menghadirkan briket premium terbaik.",
    ar: "أن نصبح شركة موثوقة ومهنية في سوق السلع العالمية عبر بناء قنوات توزيع قوية وتقديم أفضل فحم بريميوم.",
  },
  "about.mission.title": {
    en: "Mission",
    id: "Misi",
    ar: "الرسالة",
  },
  "about.mission.item1": {
    en: "Provide outstanding customer service and technical support.",
    id: "Memberikan layanan pelanggan dan dukungan teknis yang unggul.",
    ar: "تقديم خدمة عملاء ودعم فني متميزين.",
  },
  "about.mission.item2": {
    en: "Actively develop organised commodity markets and export pathways.",
    id: "Aktif mengembangkan pasar komoditas terorganisir dan jalur ekspor.",
    ar: "تطوير أسواق السلع المنظمة ومسارات التصدير بشكل مستمر.",
  },
  "about.mission.item3": {
    en: "Improve public knowledge and market efficiency for coconut charcoal products.",
    id: "Meningkatkan pengetahuan publik dan efisiensi pasar untuk produk arang kelapa.",
    ar: "رفع الوعي العام وكفاءة السوق لمنتجات فحم جوز الهند.",
  },
  "about.values.eyebrow": {
    en: "Corporate Values",
    id: "Nilai Perusahaan",
    ar: "قيم الشركة",
  },
  "about.values.integrity.title": {
    en: "Integrity",
    id: "Integritas",
    ar: "النزاهة",
  },
  "about.values.integrity.body": {
    en: "We operate honestly, transparently, and without bias in every transaction.",
    id: "Kami beroperasi dengan jujur, transparan, dan tanpa bias dalam setiap transaksi.",
    ar: "نعمل بصدق وشفافية ومن دون تحيز في كل معاملة.",
  },
  "about.values.innovation.title": {
    en: "Innovation",
    id: "Inovasi",
    ar: "الابتكار",
  },
  "about.values.innovation.body": {
    en: "Continuous improvement to deliver value-added solutions for partners.",
    id: "Perbaikan berkelanjutan untuk memberikan solusi bernilai tambah bagi mitra.",
    ar: "تحسين مستمر لتقديم حلول ذات قيمة مضافة لشركائنا.",
  },
  "about.values.cooperation.title": {
    en: "Good Cooperation",
    id: "Kerja Sama Baik",
    ar: "تعاون مثمر",
  },
  "about.values.cooperation.body": {
    en: "We prioritise teamwork, open communication, and mutual growth.",
    id: "Kami memprioritaskan kerja tim, komunikasi terbuka, dan pertumbuhan bersama.",
    ar: "نمنح الأولوية للعمل الجماعي والتواصل المفتوح والنمو المشترك.",
  },
  "about.values.customer.title": {
    en: "Customer Focus",
    id: "Fokus Pada Pelanggan",
    ar: "التركيز على العميل",
  },
  "about.values.customer.body": {
    en: "Your targets drive our schedules, QA protocols, and logistics.",
    id: "Target Anda menentukan jadwal, protokol QA, dan logistik kami.",
    ar: "أهدافكم توجه جداولنا وبروتوكولات الجودة واللوجستيات لدينا.",
  },
  "about.org.eyebrow": {
    en: "Organisation",
    id: "Organisasi",
    ar: "الهيكل التنظيمي",
  },
  "about.org.heading": {
    en: "Experienced team behind <span>each shipment</span>",
    id: "Tim berpengalaman di balik <span>setiap pengiriman</span>",
    ar: "فريق مخضرم يقف وراء <span>كل شحنة</span>",
  },
  "about.org.roleDirector.title": {
    en: "Director",
    id: "Direktur",
    ar: "المدير العام",
  },
  "about.org.roleDirector.desc": {
    en: "Strategic leadership, budgeting, and performance review",
    id: "Kepemimpinan strategis, penganggaran, dan evaluasi kinerja",
    ar: "القيادة الاستراتيجية، الميزانية، ومراجعة الأداء",
  },
  "about.org.roleGM.title": {
    en: "General Manager",
    id: "General Manager",
    ar: "المدير العام التنفيذي",
  },
  "about.org.roleGM.desc": {
    en: "Daily coordination and operational oversight",
    id: "Koordinasi harian dan pengawasan operasional",
    ar: "التنسيق اليومي والإشراف التنفيذي",
  },
  "about.org.roleMarketing.title": {
    en: "Marketing",
    id: "Pemasaran",
    ar: "التسويق",
  },
  "about.org.roleMarketing.desc": {
    en: "Customer engagement and market development",
    id: "Keterlibatan pelanggan dan pengembangan pasar",
    ar: "التواصل مع العملاء وتطوير السوق",
  },
  "about.org.roleFinance.title": {
    en: "Finance Dept.",
    id: "Departemen Keuangan",
    ar: "قسم المالية",
  },
  "about.org.roleFinance.desc": {
    en: "Accounting, payroll, and material cost control",
    id: "Akuntansi, penggajian, dan pengendalian biaya material",
    ar: "المحاسبة والرواتب وضبط تكاليف المواد",
  },
  "about.org.roleAdmin.title": {
    en: "General Admin",
    id: "Admin Umum",
    ar: "الإدارة العامة",
  },
  "about.org.roleAdmin.desc": {
    en: "Documentation and administrative governance",
    id: "Dokumentasi dan tata kelola administrasi",
    ar: "التوثيق والحوكمة الإدارية",
  },
  "about.org.roleProduction.title": {
    en: "Production Dept.",
    id: "Departemen Produksi",
    ar: "قسم الإنتاج",
  },
  "about.org.roleProduction.desc": {
    en: "Process control and efficiency improvements",
    id: "Pengendalian proses dan peningkatan efisiensi",
    ar: "ضبط العمليات وتحسين الكفاءة",
  },
  "about.org.roleWarehouse.title": {
    en: "Warehouse",
    id: "Gudang",
    ar: "المخزن",
  },
  "about.org.roleWarehouse.desc": {
    en: "Inventory, loading, and dispatch management",
    id: "Manajemen inventaris, muatan, dan pengiriman",
    ar: "إدارة المخزون والتحميل والتوزيع",
  },
  "about.org.roleQC.title": {
    en: "QC Dept.",
    id: "Departemen QC",
    ar: "قسم ضبط الجودة",
  },
  "about.org.roleQC.desc": {
    en: "Burn tests, moisture checks, and batch approvals",
    id: "Uji nyala, pemeriksaan kelembapan, dan persetujuan batch",
    ar: "اختبارات الاحتراق، فحوص الرطوبة، واعتماد الدُفعات",
  },
  "about.org.roleTechnical.title": {
    en: "Technical Dept.",
    id: "Departemen Teknis",
    ar: "قسم التقنية",
  },
  "about.org.roleTechnical.desc": {
    en: "Machinery maintenance and spare-part planning",
    id: "Perawatan mesin dan perencanaan suku cadang",
    ar: "صيانة الآلات وتخطيط قطع الغيار",
  },
  "about.org.additional": {
    en: "Additional production leads: Riyanto (Oven), Edi Santoso (Rotary & Diskmill), Amanu & Rangga (Mixer/Blending), Nedi (Hammermill), Supendi (Packing).",
    id: "Koordinator produksi tambahan: Riyanto (Oven), Edi Santoso (Rotary & Diskmill), Amanu & Rangga (Mixer/Blending), Nedi (Hammermill), Supendi (Packing).",
    ar: "قادة إنتاج إضافيون: ريانتو (الفرن)، إدي سانتوسو (الدوّار والطاحونة)، أمانو ورانغا (الخلّاط/المزج)، نيدي (مطحنة المطرقة)، سوبندي (التعبئة).",
  },
  "about.legacy.eyebrow": {
    en: "Legacy & Compliance",
    id: "Warisan & Kepatuhan",
    ar: "الترخيص والامتثال",
  },
  "about.legacy.heading": {
    en: "Anchored by <span>permits and partnerships</span>",
    id: "Didukung oleh <span>izin dan kemitraan</span>",
    ar: "مرتكز على <span>التصاريح والشراكات</span>",
  },
  "about.legacy.body1": {
    en: "NAM operates with a complete suite of Indonesian legal registrations (TAX ID / Legal & Permission) and aligns QA protocols with CARSURIN certification standards. Detailed permit documentation is available upon request during vendor setup.",
    id: "NAM beroperasi dengan kelengkapan izin hukum Indonesia (NPWP / Legal & Perizinan) dan menyesuaikan protokol QA dengan standar sertifikasi CARSURIN. Dokumen izin rinci tersedia berdasarkan permintaan selama proses vendor.",
    ar: "تعمل NAM بمنظومة كاملة من التراخيص القانونية الإندونيسية (الرقم الضريبي/التصاريح) وتوائم بروتوكولات الجودة مع معايير اعتماد CARSURIN، وتتوفر الوثائق التفصيلية عند إعداد الموردين.",
  },
  "about.legacy.body2": {
    en: "Our collaboration with CV Sinar Tirta Jaya ensures steady supply of mature coconut shell charcoal, allowing us to focus on process consistency, environmental stewardship, and partner success.",
    id: "Kolaborasi kami dengan CV Sinar Tirta Jaya memastikan pasokan arang tempurung kelapa matang yang stabil, sehingga kami dapat fokus pada konsistensi proses, pengelolaan lingkungan, dan keberhasilan mitra.",
    ar: "شراكتنا مع CV Sinar Tirta Jaya تضمن توريداً مستقراً لفحم قشر جوز الهند الناضج، مما يتيح لنا التركيز على ثبات العمليات وحماية البيئة ونجاح الشركاء.",
  },
  "about.legacy.market.title": {
    en: "Market Coverage",
    id: "Cakupan Pasar",
    ar: "تغطية الأسواق",
  },
  "about.legacy.market.body": {
    en: "Europe · Middle East · Red Sea · Asia · Americas",
    id: "Eropa · Timur Tengah · Laut Merah · Asia · Amerika",
    ar: "أوروبا · الشرق الأوسط · البحر الأحمر · آسيا · الأمريكيتان",
  },
  "about.legacy.locations.title": {
    en: "Strategic Locations",
    id: "Lokasi Strategis",
    ar: "مواقع استراتيجية",
  },
  "about.legacy.locations.body": {
    en: "Head Office: Taman Pondok Indah OX-21, Wiyung, Surabaya.<br />Factory: Jl Industri No 68, Buduran, Sidoarjo (Java, Indonesia).",
    id: "Kantor Pusat: Taman Pondok Indah OX-21, Wiyung, Surabaya.<br />Pabrik: Jl Industri No 68, Buduran, Sidoarjo (Jawa, Indonesia).",
    ar: "المقر الرئيسي: تامان بوندوك إنده OX-21، ويونغ، سورابايا.<br />المصنع: شارع إندستري رقم 68، بودوران، سيدوارجو (جاوة، إندونيسيا).",
  },
  "about.legacy.distributor.title": {
    en: "Distributor Network",
    id: "Jaringan Distributor",
    ar: "شبكة الموزعين",
  },
  "about.legacy.distributor.body": {
    en: "We invite importers, wholesalers, and lounge operators to join our distribution network and co-create private-label collections.",
    id: "Kami mengundang importir, grosir, dan operator lounge untuk bergabung dengan jaringan distribusi kami dan mengembangkan koleksi private label bersama.",
    ar: "ندعو المستوردين وتجار الجملة ومشغلي الصالات للانضمام إلى شبكة التوزيع لدينا وتطوير مجموعات بعلامات خاصة مشتركة.",
  },
  "about.cta.eyebrow": {
    en: "Partner With Us",
    id: "Bermitra dengan Kami",
    ar: "تعاون معنا",
  },
  "about.cta.heading": {
    en: "Ready to collaborate on your next container?",
    id: "Siap berkolaborasi untuk kontainer berikutnya?",
    ar: "هل أنت جاهز للتعاون في شحنتك القادمة؟",
  },
  "about.cta.body": {
    en: "Share your target markets, product mix, and packaging needs—we will propose timelines, MOQ alignment, and the documentation roadmap to move swiftly.",
    id: "Bagikan pasar sasaran, portofolio produk, dan kebutuhan kemasan Anda—kami akan menyusun timeline, penyesuaian MOQ, dan peta jalan dokumentasi agar bergerak cepat.",
    ar: "شاركنا أسواقك المستهدفة ومزيج منتجاتك واحتياجات التغليف لنقترح الجداول الزمنية والحد الأدنى للطلب وخارطة الطريق الوثائقية للتنفيذ السريع.",
  },
  "about.cta.btnPrimary": {
    en: "Chat on WhatsApp",
    id: "Chat melalui WhatsApp",
    ar: "تحدث عبر واتساب",
  },
  "about.cta.btnSecondary": {
    en: "Email Our Team",
    id: "Email Tim Kami",
    ar: "أرسل بريداً لفريقنا",
  },
  // Factory
  "factory.meta.title": {
    en: "Factory — CV Nayyara Mitra Kalendra",
    id: "Pabrik — CV Nayyara Mitra Kalendra",
    ar: "المصنع — CV نايارا ميترا كاليندرا",
  },
  "factory.hero.eyebrow": {
    en: "Factory",
    id: "Pabrik",
    ar: "المصنع",
  },
  "factory.hero.heading": {
    en: "WHERE PRECISION MEETS PURITY",
    id: "PERPADUAN PRESISI DAN KEMURNIAN",
    ar: "حيث تلتقي الدقة بالنقاء",
  },
  "factory.hero.body1": {
    en: "Inside our factory, nature’s finest resource transforms into world-class coconut shell briquettes — engineered with integrity, passion, and precision.",
    id: "Di dalam pabrik kami, sumber daya alam terbaik diubah menjadi briket tempurung kelapa kelas dunia — dirancang dengan integritas, passion, dan presisi.",
    ar: "داخل مصنعنا تتحول أفضل موارد الطبيعة إلى فحم قشر جوز الهند عالمي المستوى — يُهندَس بنزاهة وشغف ودقة.",
  },
  "factory.hero.body2": {
    en: "At Nayyara Mitra Kalendra, we take pride in combining traditional know-how with precise craftsmanship. Two high-performance lines, custom-engineered for stability and efficiency, deliver consistent output up to 300 tons per month so our global partners receive a smooth, reliable supply.",
    id: "Kami memadukan keahlian tradisional dengan keterampilan presisi. Dua lini berperforma tinggi yang direkayasa khusus untuk stabilitas dan efisiensi menghadirkan produksi konsisten hingga 300 ton per bulan sehingga mitra global kami menerima pasokan yang lancar dan andal.",
    ar: "نفخر في نايارا ميترا كاليندرا بدمج الخبرة التقليدية مع الحرفية الدقيقة. خطان عاليَا الأداء مُهندسان خصيصاً للاستقرار والكفاءة يقدمان إنتاجاً ثابتاً يصل إلى 300 طن شهرياً لضمان إمداد سلس وموثوق لشركائنا حول العالم.",
  },
  "factory.hero.chipCapacity": {
    en: "300T / Month",
    id: "300T / Bulan",
    ar: "300 طن / شهر",
  },
  "factory.hero.chipLab": {
    en: "Lab Tested",
    id: "Diuji Laboratorium",
    ar: "مختبر معتمد",
  },
  "factory.hero.chipLocation": {
    en: "Sidoarjo, East Java",
    id: "Sidoarjo, Jawa Timur",
    ar: "سيدوارجو، جاوة الشرقية",
  },
  "factory.facility.eyebrow": {
    en: "Facility Overview",
    id: "Gambaran Fasilitas",
    ar: "نظرة عامة على المصنع",
  },
  "factory.facility.heading": {
    en: "Dual production lines with <span>custom machinery</span>",
    id: "Dua lini produksi dengan <span>mesin kustom</span>",
    ar: "خطا إنتاج مزدوجان مع <span>آلات مخصصة</span>",
  },
  "factory.facility.body": {
    en: "We merge traditional charcoal expertise with custom-built mixers, presses, ovens, and cooling zones to stabilise every stage of production. Each line features rotary screening, diskmill crushing, 200 kg mixers, double blending, wire-cut molding, and high-capacity ovens tuned for repeatable results.",
    id: "Kami memadukan keahlian arang tradisional dengan mixer, press, oven, dan zona pendingin kustom untuk menstabilkan setiap tahap produksi. Setiap lini dilengkapi screening rotari, penghancur diskmill, mixer 200 kg, double blending, wire-cut molding, dan oven berkapasitas tinggi untuk hasil yang konsisten.",
    ar: "نجمع خبرة الفحم التقليدية مع خلاطات ومكابس وأفران ومناطق تبريد مصممة خصيصاً لضبط كل مرحلة إنتاج. يضم كل خط غربلة دوارة وطحن بالأقراص وخلاطات 200 كجم ومزجات مزدوجة وتشكيل بأسلاك وأفران عالية السعة لضمان نتائج قابلة للتكرار.",
  },
  "factory.facility.layout.title": {
    en: "Integrated Layout",
    id: "Tata Letak Terpadu",
    ar: "تخطيط متكامل",
  },
  "factory.facility.layout.body": {
    en: "Raw material yards, rotary screening, mixing, molding, cooling, laboratory, and finished goods areas mapped for seamless flow.",
    id: "Area bahan baku, screening rotari, pencampuran, pencetakan, pendinginan, laboratorium, dan gudang produk jadi ditata untuk alur kerja yang mulus.",
    ar: "ساحات المواد الخام والغربلة الدوارة والمزج والتشكيل والتبريد والمختبر ومنطقة المنتجات النهائية موزعة لتدفق سلس.",
  },
  "factory.facility.climate.title": {
    en: "Climate Control",
    id: "Pengendalian Iklim",
    ar: "التحكم بالمناخ",
  },
  "factory.facility.climate.body": {
    en: "Controlled ovens (80–90°C) with 10 racks × 50 trays, plus weathering zones to stabilise moisture before packing.",
    id: "Oven terkontrol (80–90°C) dengan 10 rak × 50 baki, ditambah zona weathering untuk menstabilkan kelembapan sebelum pengepakan.",
    ar: "أفران مضبوطة (80–90 درجة مئوية) مع 10 رفوف × 50 صينية إضافةً إلى مناطق تكييف لتثبيت الرطوبة قبل التعبئة.",
  },
  "factory.capabilities.eyebrow": {
    en: "Core Capabilities",
    id: "Kapabilitas Inti",
    ar: "القدرات الأساسية",
  },
  "factory.capabilities.lineFlex": {
    en: "Dedicated production lines operating in tandem for flexible scheduling.",
    id: "Dua lini produksi khusus yang berjalan bersamaan untuk penjadwalan fleksibel.",
    ar: "خطا إنتاج مخصصان يعملان معاً لتوفير مرونة في الجداول.",
  },
  "factory.capabilities.output": {
    en: "Monthly output combining cube, hexagonal, flat, and Kaloud formats.",
    id: "Output bulanan mencakup format kubus, heksagonal, flat, dan Kaloud.",
    ar: "إنتاج شهري يجمع أشكال المكعب والسداسي والمسطح والقالود.",
  },
  "factory.capabilities.uptime": {
    en: "Continuous kiln monitoring and maintenance coverage to reduce downtime.",
    id: "Pemantauan kiln terus menerus dan cakupan perawatan untuk meminimalkan downtime.",
    ar: "مراقبة الأفران على مدار الساعة وتغطية الصيانة لتقليل التوقف.",
  },
  "factory.qa.eyebrow": {
    en: "Quality Assurance",
    id: "Jaminan Kualitas",
    ar: "ضمان الجودة",
  },
  "factory.qa.heading": {
    en: "Tested to meet <span>international standards</span>",
    id: "Diuji memenuhi <span>standar internasional</span>",
    ar: "اختبارات تلبي <span>المعايير الدولية</span>",
  },
  "factory.qa.body": {
    en: "Each briquette is assessed for burn stability, moisture control, and dimensional accuracy so every pallet delivers the same clean performance. Traceability tags accompany every batch from shell sourcing to final shipment.",
    id: "Setiap briket dinilai stabilitas nyala, kontrol kelembapan, dan ketepatan dimensi agar setiap palet menghadirkan performa bersih yang konsisten. Tag keterlacakan menyertai setiap batch dari sumber tempurung hingga pengiriman akhir.",
    ar: "يُقيّم كل فحم من حيث ثبات الاحتراق والسيطرة على الرطوبة ودقة الأبعاد لضمان أداء نظيف ومتسق لكل منصة. ترافق بطاقات التتبع كل دفعة من مصدر القشر حتى الشحنة النهائية.",
  },
  "factory.qa.traceability.title": {
    en: "Shell-to-shipment traceability",
    id: "Keterlacakan dari tempurung ke pengiriman",
    ar: "تتبع من القشر إلى الشحن",
  },
  "factory.qa.traceability.body": {
    en: "Batch IDs, laboratory reports, and packing records are linked to export documentation for transparent audits.",
    id: "ID batch, laporan laboratorium, dan catatan pengepakan terhubung ke dokumen ekspor untuk audit transparan.",
    ar: "يتم ربط أرقام الدُفعات وتقارير المختبر وسجلات التغليف بمستندات التصدير لتدقيق شفاف.",
  },
  "factory.qa.cta": {
    en: "Request COA Sample",
    id: "Minta Sampel COA",
    ar: "اطلب عينة شهادة التحليل",
  },
  "factory.journey.eyebrow": {
    en: "Production Journey",
    id: "Rangkaian Produksi",
    ar: "رحلة الإنتاج",
  },
  "factory.journey.heading": {
    en: "From shell to shipment in <span>12 controlled steps</span>",
    id: "Dari tempurung ke pengiriman dalam <span>12 langkah terkontrol</span>",
    ar: "من القشر إلى الشحن عبر <span>12 خطوة مضبوطة</span>",
  },
  "factory.traceability.eyebrow": {
    en: "Quality & Traceability",
    id: "Kualitas & Keterlacakan",
    ar: "الجودة والتتبع",
  },
  "factory.traceability.batch.title": {
    en: "Batch-Level Monitoring",
    id: "Pemantauan Per Batch",
    ar: "مراقبة على مستوى الدُفعات",
  },
  "factory.traceability.batch.body": {
    en: "Each production lot is tagged with sourcing, processing, and QA data—covering moisture, ash, and burn tests for CARSURIN-aligned traceability.",
    id: "Setiap lot produksi diberi tag data sumber, pemrosesan, dan QA—meliputi pengujian kelembapan, abu, dan nyala sesuai standar CARSURIN.",
    ar: "كل دفعة إنتاج موسومة ببيانات التوريد والمعالجة والجودة، بما في ذلك اختبارات الرطوبة والرماد والاحتراق وفق معايير CARSURIN.",
  },
  "factory.traceability.lab.title": {
    en: "Laboratory Testing",
    id: "Pengujian Laboratorium",
    ar: "الاختبارات المخبرية",
  },
  "factory.traceability.lab.body": {
    en: "In-house lab conducts initial burn tests post-oven and re-burn tests prior to packing to lock in performance targets.",
    id: "Laboratorium internal melakukan uji bakar awal setelah oven dan uji bakar ulang sebelum pengepakan untuk memastikan target performa.",
    ar: "المختبر الداخلي يجري اختبارات الاحتراق الأولية بعد الأفران وإعادة الاختبار قبل التعبئة لضمان أهداف الأداء.",
  },
  "factory.traceability.sustainability.title": {
    en: "Sustainability",
    id: "Keberlanjutan",
    ar: "الاستدامة",
  },
  "factory.traceability.sustainability.body": {
    en: "Closed-loop heat recovery and coconut-shell valorisation reduce waste and emissions while supporting local communities.",
    id: "Pemulihan panas tertutup dan pemanfaatan tempurung kelapa mengurangi limbah serta emisi sambil mendukung komunitas lokal.",
    ar: "استعادة الحرارة في حلقة مغلقة والاستفادة من قشر جوز الهند يقللان النفايات والانبعاثات مع دعم المجتمعات المحلية.",
  },
  "factory.layout.eyebrow": {
    en: "Factory Layout",
    id: "Tata Letak Pabrik",
    ar: "تخطيط المصنع",
  },
  "factory.layout.heading": {
    en: "Thoughtfully zoned for <span>efficiency &amp; safety</span>",
    id: "Ditata dengan cermat untuk <span>efisiensi &amp; keselamatan</span>",
    ar: "مقسمة بعناية لضمان <span>الكفاءة والسلامة</span>",
  },
  "factory.affiliations.eyebrow": {
    en: "Affiliations",
    id: "Afiliasi",
    ar: "شراكات",
  },
  "factory.affiliations.heading": {
    en: "Supported by <span>trusted partners &amp; certifiers</span>",
    id: "Didukung oleh <span>mitra &amp; lembaga sertifikasi tepercaya</span>",
    ar: "مدعوم من <span>شركاء وجهات اعتماد موثوقة</span>",
  },
  "factory.affiliations.body": {
    en: "We collaborate with certification bodies, logistics operators, and financial institutions to keep every shipment compliant and on schedule.",
    id: "Kami bekerja sama dengan lembaga sertifikasi, operator logistik, dan institusi keuangan untuk menjaga setiap pengiriman tetap patuh dan tepat waktu.",
    ar: "نتعاون مع جهات الاعتماد ومشغلي اللوجستيات والمؤسسات المالية لضمان التزام كل شحنة وجداولها الزمنية.",
  },
  "factory.cta.eyebrow": {
    en: "Schedule a Visit",
    id: "Jadwalkan Kunjungan",
    ar: "حدد موعداً للزيارة",
  },
  "factory.cta.heading": {
    en: "Explore our production capability first-hand",
    id: "Jelajahi kemampuan produksi kami secara langsung",
    ar: "تعرّف عن قرب على قدراتنا الإنتاجية",
  },
  "factory.cta.body": {
    en: "We welcome partners to audit our facility, witness burn tests, and align on operational requirements. Arrange an in-person or virtual factory walkthrough with our export team.",
    id: "Kami menyambut mitra untuk mengaudit fasilitas, menyaksikan uji bakar, dan menyelaraskan kebutuhan operasional. Atur tur pabrik langsung atau virtual bersama tim ekspor kami.",
    ar: "نرحب بالشركاء لتفقد منشأتنا ومشاهدة اختبارات الاحتراق وتنسيق الاحتياجات التشغيلية. احجز جولة ميدانية أو افتراضية مع فريق التصدير لدينا.",
  },
  "factory.cta.btnPrimary": {
    en: "View Location",
    id: "Lihat Lokasi",
    ar: "اعرض الموقع",
  },
  "factory.cta.btnSecondary": {
    en: "Book an Audit",
    id: "Jadwalkan Audit",
    ar: "احجز تدقيقاً",
  },
  // Products
  "products.meta.title": {
    en: "Products — CV Nayyara Mitra Kalendra",
    id: "Produk — CV Nayyara Mitra Kalendra",
    ar: "المنتجات — CV نايارا ميترا كاليندرا",
  },
  "products.hero.eyebrow": {
    en: "Product Catalogue",
    id: "Katalog Produk",
    ar: "دليل المنتجات",
  },
  "products.hero.heading": {
    en: "Precision-crafted <span>coconut shell briquettes</span>",
    id: "Briket tempurung kelapa <span>berpresisi tinggi</span>",
    ar: "فحم قشر جوز الهند <span>مصنوع بدقة عالية</span>",
  },
  "products.hero.body": {
    en: "NAM manufactures cube, hexagonal, circle, flat, and Kaloud briquette formats from 100% coconut shells. Each batch is pressed, oven-dried, weathered, and tested to guarantee 7,500 Kcal performance, 2h30 burn time, and low ash levels demanded by premium lounges and grill operators.",
    id: "NAM memproduksi briket kubus, heksagonal, lingkaran, flat, dan Kaloud dari 100% tempurung kelapa. Setiap batch dipres, dioven, di-weathering, dan diuji untuk menjamin performa 7.500 Kkal, waktu bakar 2 jam 30 menit, dan kadar abu rendah yang dibutuhkan lounge premium dan operator grill.",
    ar: "تنتج NAM أشكال الفحم المكعب والسداسي والدائري والمسطح والقالود من قشر جوز الهند بنسبة 100%. تُضغط كل دفعة وتُجفف وتُكيف وتُختبر لضمان 7500 سعر حراري ومدة احتراق ساعتين ونصف ومستويات رماد منخفضة تلبي متطلبات صالات الدرجة الممتازة ومشغلي الشواء.",
  },
  "products.signature.eyebrow": {
    en: "Signature Range",
    id: "Rangkaian Andalan",
    ar: "التشكيلة المميزة",
  },
  "products.signature.heading": {
    en: "Tailored formats for <span>export-ready combustion</span>",
    id: "Format khusus untuk <span>pembakaran siap ekspor</span>",
    ar: "أشكال مخصصة لاحتراق <span>جاهز للتصدير</span>",
  },
  "products.signature.body": {
    en: "Each variant is pressed using custom moulds, dried in dedicated ovens, and cooled through a controlled weathering cycle to ensure stable density. Select the profile that aligns with your market or work with us on private-label dimensions.",
    id: "Setiap varian dipres dengan cetakan khusus, dikeringkan di oven khusus, dan didinginkan melalui siklus weathering terkontrol untuk memastikan kerapatan stabil. Pilih profil yang sesuai pasar Anda atau kolaborasi untuk dimensi private label.",
    ar: "يتم ضغط كل نوع بقوالب مخصصة وتجفيفه في أفران مخصصة ثم تبريده عبر دورة تكييف مضبوطة لضمان كثافة ثابتة. اختر الشكل الذي يناسب سوقك أو تعاون معنا لقياسات العلامات الخاصة.",
  },
  "products.tech.eyebrow": {
    en: "Technical Specifications",
    id: "Spesifikasi Teknis",
    ar: "المواصفات التقنية",
  },
  "products.tech.heading": {
    en: "Export-grade specs <span>validated per batch</span>",
    id: "Spesifikasi kelas ekspor <span>divalidasi per batch</span>",
    ar: "مواصفات بمستوى التصدير <span>موثقة لكل دفعة</span>",
  },
  "products.tech.note": {
    en: "Certificates of Analysis (COA) and third-party inspections (CARSURIN) available on request.",
    id: "Certificate of Analysis (COA) dan inspeksi pihak ketiga (CARSURIN) tersedia berdasarkan permintaan.",
    ar: "شهادات التحليل والفحوصات الخارجية (كارسرين) متاحة عند الطلب.",
  },
  "products.order.eyebrow": {
    en: "How to Order",
    id: "Cara Memesan",
    ar: "كيفية الطلب",
  },
  "products.order.heading": {
    en: "Made-to-order with <span>export support</span>",
    id: "Diproduksi sesuai pesanan dengan <span>dukungan ekspor</span>",
    ar: "إنتاج حسب الطلب مع <span>دعم للتصدير</span>",
  },
  "products.market.eyebrow": {
    en: "Market Focus",
    id: "Fokus Pasar",
    ar: "الأسواق المستهدفة",
  },
  "products.market.distribution.title": {
    en: "Distribution Ready",
    id: "Siap Distribusi",
    ar: "جاهز للتوزيع",
  },
  "products.market.packaging.title": {
    en: "Packaging Formats",
    id: "Format Kemasan",
    ar: "خيارات التغليف",
  },
  "products.market.packaging.body": {
    en: "Inner box (1 kg), master carton (10 kg or custom), vacuum packs, polybags, and full-colour sleeves. Moisture absorbers and barcodes included on request.",
    id: "Inner box (1 kg), master carton (10 kg atau sesuai), vakum pack, polybag, dan sleeve full colour. Penyerap kelembapan dan barcode tersedia sesuai permintaan.",
    ar: "علبة داخلية (1 كجم)، كرتون رئيسي (10 كجم أو مخصص)، عبوات مفرغة، أكياس بولي، وأغلفة كاملة الألوان. يتوفر امتصاص الرطوبة والرموز الشريطية عند الطلب.",
  },
  "products.market.leadTime.title": {
    en: "Lead Time",
    id: "Waktu Produksi",
    ar: "مدة الإنتاج",
  },
  "products.market.leadTime.body": {
    en: "Standard production cycle 21–28 days after deposit & packaging approval, subject to order volume and destination schedule.",
    id: "Siklus produksi standar 21–28 hari setelah deposit & persetujuan kemasan, tergantung volume pesanan dan jadwal tujuan.",
    ar: "دورة الإنتاج القياسية من 21 إلى 28 يوماً بعد الدفعة الأولى واعتماد التغليف، وفق حجم الطلب وجدول الوجهة.",
  },
  "products.cta.eyebrow": {
    en: "Request Catalogue",
    id: "Minta Katalog",
    ar: "اطلب الكاتالوج",
  },
  "products.cta.heading": {
    en: "Need custom specs or samples?",
    id: "Butuh spesifikasi atau sampel khusus?",
    ar: "هل تحتاج مواصفات أو عينات مخصصة؟",
  },
  "products.cta.body": {
    en: "Let us know your target profile, branding guidelines, and market timeline. Our export desk will prepare samples, technical data, and paperwork tailored to your requirements.",
    id: "Sampaikan profil target, panduan branding, dan timeline pasar Anda. Tim ekspor kami akan menyiapkan sampel, data teknis, dan dokumen sesuai kebutuhan Anda.",
    ar: "أخبرنا بالمنتج المستهدف وإرشادات العلامة التجارية والجدول الزمني للسوق، وسيعد فريق التصدير لدينا العينات والبيانات الفنية والمستندات بما يناسب متطلباتك.",
  },
  "products.cta.btnPrimary": {
    en: "Download Company Profile",
    id: "Unduh Profil Perusahaan",
    ar: "حمّل الملف التعريفي للشركة",
  },
  "products.cta.btnSecondary": {
    en: "Start Your Order",
    id: "Mulai Pesanan Anda",
    ar: "ابدأ طلبك",
  },
  // Contact
  "contact.meta.title": {
    en: "Contact — CV Nayyara Mitra Kalendra",
    id: "Kontak — CV Nayyara Mitra Kalendra",
    ar: "تواصل — CV نايارا ميترا كاليندرا",
  },
  "contact.hero.eyebrow": {
    en: "Contact",
    id: "Kontak",
    ar: "اتصل بنا",
  },
  "contact.hero.heading": {
    en: "Connect with our <span>export desk</span>",
    id: "Terhubung dengan <span>tim ekspor</span> kami",
    ar: "تواصل مع <span>فريق التصدير</span> لدينا",
  },
  "contact.hero.body": {
    en: "Share your requirements and we will align MOQ, specification, packaging, documentation, and shipping to your destination port. Our team responds within one business day.",
    id: "Sampaikan kebutuhan Anda dan kami akan menyelaraskan MOQ, spesifikasi, kemasan, dokumentasi, serta pengiriman ke pelabuhan tujuan. Tim kami merespons dalam satu hari kerja.",
    ar: "أخبرنا باحتياجاتك وسنقوم بمواءمة الحد الأدنى للطلب والمواصفات والتغليف والوثائق والشحن إلى ميناءك. يرد فريقنا خلال يوم عمل واحد.",
  },
  "contact.hero.btnPrimary": {
    en: "WhatsApp Now",
    id: "WhatsApp Sekarang",
    ar: "تواصل عبر واتساب",
  },
  "contact.hero.btnSecondary": {
    en: "Email Export Team",
    id: "Email Tim Ekspor",
    ar: "أرسل بريداً لفريق التصدير",
  },
  "contact.cards.whatsapp.title": {
    en: "WhatsApp",
    id: "WhatsApp",
    ar: "واتساب",
  },
  "contact.cards.whatsapp.body": {
    en: "+62 822-4422-0017 (NAM Export Desk)",
    id: "+62 822-4422-0017 (NAM Export Desk)",
    ar: "+62 822-4422-0017 (قسم التصدير)",
  },
  "contact.cards.whatsapp.cta": {
    en: "Chat Now",
    id: "Chat Sekarang",
    ar: "ابدأ المحادثة",
  },
  "contact.cards.email.title": {
    en: "Email",
    id: "Email",
    ar: "البريد الإلكتروني",
  },
  "contact.cards.email.body": {
    en: "tirta@nam-id.com",
    id: "tirta@nam-id.com",
    ar: "tirta@nam-id.com",
  },
  "contact.cards.email.cta": {
    en: "Send Email",
    id: "Kirim Email",
    ar: "أرسل بريداً",
  },
  "contact.cards.visit.title": {
    en: "Visit Us",
    id: "Kunjungi Kami",
    ar: "زرنا",
  },
  "contact.cards.visit.body": {
    en: "Factory: Jl Industri No 68, Buduran, Sidoarjo, East Java.<br />Head Office: Taman Pondok Indah OX-21, Wiyung, Surabaya.",
    id: "Pabrik: Jl Industri No 68, Buduran, Sidoarjo, Jawa Timur.<br />Kantor Pusat: Taman Pondok Indah OX-21, Wiyung, Surabaya.",
    ar: "المصنع: شارع إندستري رقم 68، بودوران، سيدوارجو، جاوة الشرقية.<br />المقر الرئيسي: تامان بوندوك إنده OX-21، ويونغ، سورابايا.",
  },
  "contact.cards.visit.cta": {
    en: "Open Map",
    id: "Buka Peta",
    ar: "افتح الخريطة",
  },
  "contact.rfq.eyebrow": {
    en: "Request for Quotation",
    id: "Permintaan Penawaran",
    ar: "طلب عرض سعر",
  },
  "contact.rfq.heading": {
    en: "Tell us about your <span>next container</span>",
    id: "Ceritakan tentang <span>kontainer berikutnya</span>",
    ar: "أخبرنا عن <span>حاويتك القادمة</span>",
  },
  "contact.rfq.body": {
    en: "Provide details on destination, preferred formats, packaging, and expected timelines. We'll revert with MOQ alignment, availability, and documentation requirements.",
    id: "Berikan detail tujuan, format pilihan, kemasan, dan timeline yang diharapkan. Kami akan merespons dengan penyesuaian MOQ, ketersediaan, dan kebutuhan dokumen.",
    ar: "زودنا بتفاصيل الوجهة والأشكال المطلوبة والتغليف والجداول المتوقعة، وسنعود إليك بمواءمة الحد الأدنى للطلب والتوفر والمتطلبات الوثائقية.",
  },
  "contact.form.company": {
    en: "Company Name",
    id: "Nama Perusahaan",
    ar: "اسم الشركة",
  },
  "contact.form.contactPerson": {
    en: "Contact Person",
    id: "Kontak Person",
    ar: "الشخص المسؤول",
  },
  "contact.form.email": {
    en: "Email",
    id: "Email",
    ar: "البريد الإلكتروني",
  },
  "contact.form.destination": {
    en: "Destination Country",
    id: "Negara Tujuan",
    ar: "بلد الوجهة",
  },
  "contact.form.loadDate": {
    en: "Target Load Date",
    id: "Tanggal Muat Target",
    ar: "تاريخ التحميل المستهدف",
  },
  "contact.form.notes": {
    en: "Product Mix / Notes",
    id: "Campuran Produk / Catatan",
    ar: "مزيج المنتجات / الملاحظات",
  },
  "contact.form.notesPlaceholder": {
    en: "Cube 2.5 cm, Hex 2.2 cm, Kaloud discs, packaging details...",
    id: "Kubus 2,5 cm, Hex 2,2 cm, disc Kaloud, detail kemasan...",
    ar: "مكعب 2.5 سم، سداسي 2.2 سم، أقراص كالود، تفاصيل التغليف...",
  },
  "contact.form.submit": {
    en: "Submit Request",
    id: "Kirim Permintaan",
    ar: "أرسل الطلب",
  },
  "contact.rfq.disclaimer": {
    en: "By submitting you authorise NAM to contact you regarding export opportunities.",
    id: "Dengan mengirimkan formulir ini Anda mengizinkan NAM menghubungi terkait peluang ekspor.",
    ar: "من خلال الإرسال، تسمح لـ NAM بالتواصل معك بشأن فرص التصدير.",
  },
  "contact.distributor.eyebrow": {
    en: "Distributor & Importer Network",
    id: "Jaringan Distributor & Importir",
    ar: "شبكة الموزعين والمستوردين",
  },
  "contact.distributor.partners.title": {
    en: "Join Our Global Partners",
    id: "Bergabung dengan Mitra Global Kami",
    ar: "انضم إلى شركائنا حول العالم",
  },
  "contact.distributor.partners.body": {
    en: "We actively collaborate with distributors, wholesalers, and OEM brands across Europe, Middle East, Red Sea, Asia, and the Americas. Share your plan and we will set up sampling, catalogue access, and private label options.",
    id: "Kami berkolaborasi dengan distributor, grosir, dan merek OEM di Eropa, Timur Tengah, Laut Merah, Asia, dan Amerika. Bagikan rencana Anda dan kami akan menyiapkan sampel, akses katalog, dan opsi private label.",
    ar: "نتعاون بنشاط مع الموزعين وتجار الجملة والعلامات الخاصة في أوروبا والشرق الأوسط والبحر الأحمر وآسيا والأمريكتين. شاركنا خطتك وسنرتب العينات والوصول إلى الكتالوج وخيارات العلامة الخاصة.",
  },
  "contact.distributor.documents.title": {
    en: "Documents Provided",
    id: "Dokumen yang Disediakan",
    ar: "الوثائق المتاحة",
  },
  "contact.distributor.hours.title": {
    en: "Office Hours",
    id: "Jam Operasional",
    ar: "ساعات العمل",
  },
  "contact.distributor.hours.body": {
    en: "Monday – Friday, 09:00–17:00 (GMT+7)<br />Saturday, 09:00–13:00 (GMT+7)",
    id: "Senin – Jumat, 09.00–17.00 (GMT+7)<br />Sabtu, 09.00–13.00 (GMT+7)",
    ar: "الإثنين – الجمعة، 09:00–17:00 (GMT+7)<br />السبت، 09:00–13:00 (GMT+7)",
  },
  "contact.cta.eyebrow": {
    en: "Stay Updated",
    id: "Tetap Terinformasi",
    ar: "ابق على اطلاع",
  },
  "contact.cta.heading": {
    en: "Receive production slot alerts and spec updates",
    id: "Terima info slot produksi dan pembaruan spesifikasi",
    ar: "استلم تنبيهات حول جداول الإنتاج وتحديث المواصفات",
  },
  "contact.cta.body": {
    en: "Join our mailing list for announcements on capacity windows, pricing adjustments, and new briquette formats.",
    id: "Gabung dalam daftar surel kami untuk pengumuman slot kapasitas, penyesuaian harga, dan format briket baru.",
    ar: "انضم إلى قائمتنا البريدية للحصول على إعلانات حول فترات السعة وتعديلات الأسعار وأشكال الفحم الجديدة.",
  },
  "contact.cta.placeholder": {
    en: "Your email",
    id: "Email Anda",
    ar: "بريدك الإلكتروني",
  },
  "contact.cta.button": {
    en: "Join",
    id: "Gabung",
    ar: "انضم",
  },
};

const getInitialLanguage = () => {
  const stored =
    typeof window !== "undefined"
      ? window.localStorage.getItem(languageConfig.storageKey)
      : null;
  if (stored && languageConfig.supported.includes(stored)) {
    return stored;
  }
  const htmlLang = document.documentElement.lang;
  if (languageConfig.supported.includes(htmlLang)) {
    return htmlLang;
  }
  return languageConfig.default;
};

const setDocumentLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
};

const applyTranslations = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[key] && translations[key][lang];

    if (!translation) {
      return;
    }

    if (element.dataset.i18nAttr) {
      const targets = element.dataset.i18nAttr.split(",").map((attr) => attr.trim());
      targets.forEach((attrName) => {
        element.setAttribute(attrName, translation);
      });
      return;
    }

    if (element.hasAttribute("data-i18n-html")) {
      element.innerHTML = translation;
      return;
    }

    element.textContent = translation;
  });
};

const syncLanguageSwitchers = (lang) => {
  document.querySelectorAll(".language-switcher").forEach((select) => {
    select.value = lang;
  });
};

const setLanguage = (lang) => {
  const resolved = languageConfig.supported.includes(lang)
    ? lang
    : languageConfig.default;
  setDocumentLanguage(resolved);
  applyTranslations(resolved);
  syncLanguageSwitchers(resolved);
  window.localStorage.setItem(languageConfig.storageKey, resolved);
};

const initLanguageControls = () => {
  document.querySelectorAll(".language-switcher").forEach((select) => {
    select.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  });
};

const initNavigationToggle = () => {
  const navContainer = document.querySelector(".nav-container");
  const navToggle = document.querySelector(".nav-toggle");
  const navGroup = document.querySelector(".nav-group");

  if (!navContainer || !navToggle || !navGroup) {
    return;
  }

  const closeMenu = () => {
    navContainer.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navGroup.setAttribute("data-visible", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navContainer.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navGroup.setAttribute("data-visible", String(isOpen));
  });

  navGroup.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initNavigationToggle();
  initLanguageControls();
  setLanguage(getInitialLanguage());
});
