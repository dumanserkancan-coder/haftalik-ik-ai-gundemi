/*
  HAFTALIK İK VE AI GÜNDEMİ — HABER DOSYASI
  Her hafta sadece bu dosya değişir. Yayın düzeni: her sayı Pazartesi–Pazar haftasını kapsar
  ve o haftanın pazar günü yayımlanır (CHRO ile pazartesi paylaşılır).

  ARŞİV NASIL ÇALIŞIR?
  - Tüm sayılar aşağıdaki "sayilar" listesinde durur. Yeni sayıyı listenin EN ÜSTÜNE ekle,
    eski sayıları SİLME. Site açılınca en üstteki (en yeni) sayıyı gösterir.
  - Eski sayılar sayfanın altındaki "Arşiv" bölümünde başlıklarıyla listelenir; arama ve
    konu filtresi tüm sayılarda çalışır. Her sayının kendi adresi vardır: …/#sayi-1, …/#sayi-2
  - "siradaki": henüz yayımlanmamış sayının bilgisi; arşivde "Hazırlanıyor" olarak görünür.
    Yeni sayıyı ekleyince bunu bir sonraki sayıya göre güncelle.

  Bir sayının bölümleri (bu sırayla görünür):
    ana          Haftanın ana gelişmesi: tek konu, büyük görsel, 1 dakikalık özet  (HABER)
    haberler     Haftalık gündem: 5–7 önemli gelişme                              (HABER)
                 gecenHafta: true → bir önceki haftadan dikkat çeken gelişme etiketi
    sinyal       Sektörel gözlem: haberlerin birlikte gösterdiği eğilim            (YORUM)
    veri         Sayılarla gündem: tek önemli araştırma sonucu                     (VERİ)
    sektorden    Sektörden: perakende ve iç giyim şirketlerinin herkese açık İK,     (HABER)
                 işveren markası, ödül ve teknoloji gelişmeleri; 0–4 madde, yorum YOK.
                 Biçim: { tarih: "YIL-AY-GÜN", sirket, tur, baslik, metin, konular: [...],
                          kazananlar?: [{ sirket, derece: "Altın"|"Gümüş"|"Bronz"|"Finalist", kategori }],
                          kaynaklar: [{ ad, url, tip }] }
                 tur: "Ödül" | "Eğitim" | "İşveren markası" | "İK teknolojisi" (kart rengi ve ikonu buna göre).
                 Ödül haberlerinde kazananları metin yerine "kazananlar" listesine yaz; sitede madalya olarak görünür.
                 Kural: "rakip", kıyaslama, öneri ve kendi şirketimizin adı yazılmaz.
                 Haftada haber yoksa liste boş bırakılır; bölüm sitede görünmez.
    etkinlikler  Yaklaşan etkinlikler: İK, eğitim, çalışan deneyimi, yapay zekâ  (TAKVİM)
                 Her etkinliğe "konular" eklenir (aşağıdaki konu anahtarlarından); sitede bu
                 etiketlerle süzülebilir. Örnek: konular: ["egitim", "ai"]

  Konu anahtarları: "ai-hr" AI in HR · "ta" Talent Acquisition · "pa" People Analytics
                    "ex" Employee Experience · "fow" Future of Work · "rapor" Rapor
  Kaynak tipi (tip): "resmi" = şirketin / kurumun kendi duyurusu, "ikinci" = bağımsız haber kaynağı
  Etkinlikler: Öncelik Türkiye'deki İK etkinliklerinde. Dünyadan yalnızca çok önemli bir etkinlik eklenir
    (tur alanı "Dünyadan · …" ile başlar).
  Etkinlik ve ödül konu anahtarları (konular): "ik" İK ve İK teknolojisi · "egitim" Eğitim ve gelişim
    "tce" Çalışan deneyimi ve bağlılık · "ai" Yapay zekâ · "liderlik" Liderlik ve kültür
    "isveren" İşveren markası · "satis-cx" Satış ve müşteri deneyimi · "genel" Genel iş ödülleri
  ÖDÜL TAKVİMİ (oduller): Sayılardan bağımsız, sayfanın en altındaki ayrı liste; her hafta güncellenir.
    Her ödül: ad, kurum, kapsam, aciklama, url, konular, tarihler: [{ etiket, tarih: "YIL-AY-GÜN", sonTarih: true }]
    sonTarih: true → başvuru son tarihi; en son "sonTarih" geçince ödül listeden kendiliğinden düşer.
    Tarihi açıklanmamış ödülde tarihler boş bırakılır, "durum" alanına kısa not yazılır.
    Tarihleri yalnızca ödülün resmî sayfasından yaz; açıklanmamış tarihi tahmin etme.
  Tarihler (baslangic, bitis): YIL-AY-GÜN biçiminde; sitede kalan gün buna göre hesaplanır,
    tarihi geçen etkinlik kendiliğinden gizlenir.
  kapak.gorsel: Görsel dosyasının adı; dosyayı index.html ile aynı yere yükle (her sayıya ayrı ad: kapak-sayi2.jpg …).

  yeni: İki sayı arasında çıkan gerçekten büyük bir gelişme için kullan ("Yeni" şeridi).
        Örnek: { tarih: "14 Ekim", baslik: "…", kaynak: "…", url: "https://…" }
        Liste boşsa şerit görünmez.
*/
window.BULTEN = {
  ad: "Haftalık İK ve AI Gündemi",
  aciklama: "İK teknolojileri ve yapay zekâ dünyasında bu haftanın öne çıkan gelişmeleri.",
  altBaslik: "Haftalık İK ve AI Gelişmeleri",
  hazirlayan: "Serkan Can Duman",

  kategoriler: {
    "ai-hr": { ad: "AI in HR",            ikon: "ik-ai",     renk: "mor" },
    "ta":    { ad: "Talent Acquisition",  ikon: "ta",        renk: "mavi" },
    "pa":    { ad: "People Analytics",    ikon: "analytics", renk: "yesil" },
    "ex":    { ad: "Employee Experience", ikon: "ex",        renk: "pembe" },
    "fow":   { ad: "Future of Work",      ikon: "fow",       renk: "turuncu" },
    "rapor": { ad: "Rapor",               ikon: "report",    renk: "gri" }
  },

  konular: {
    "ik":        { ad: "İK ve İK teknolojisi" },
    "egitim":    { ad: "Eğitim ve gelişim" },
    "tce":       { ad: "Çalışan deneyimi" },
    "ai":        { ad: "Yapay zekâ" },
    "liderlik":  { ad: "Liderlik ve kültür" },
    "isveren":   { ad: "İşveren markası" },
    "satis-cx":  { ad: "Satış ve müşteri deneyimi" },
    "genel":     { ad: "Genel iş ödülleri" }
  },

  yeni: [],

  /* ÖDÜL BAŞVURU TAKVİMİ (sayılardan bağımsız; her hafta resmî sayfalardan güncellenir) */
  oduller: [
    { ad: "PERYÖN İnsana Değer Ödülleri", kurum: "PERYÖN", kapsam: "Türkiye",
      aciklama: "Türkiye İnsan Yönetimi Derneği'nin İK uygulamalarını ödüllendiren programı. Önce ön başvuru, ardından kesin başvuru dosyası teslim ediliyor; \"Değer Yaratan Uygulamalar\" kategorilerinde jüri sunumu yapılıyor. Tören Mart 2027'de.",
      url: "https://peryon.org.tr/en_US/odul-takvimi", konular: ["ik", "tce"],
      tarihler: [
        { etiket: "Ön başvuru son tarihi", tarih: "2026-11-15", sonTarih: true },
        { etiket: "Kesin başvuru dosyası teslimi", tarih: "2026-12-25", sonTarih: true },
        { etiket: "Jüri sunumları başlıyor", tarih: "2027-02-01" }
      ] },
    { ad: "Orta Doğu ve Kuzey Afrika Stevie Ödülleri 2027", kurum: "Stevie Awards", kapsam: "Bölgesel · Türkiye dahil 17 ülke",
      aciklama: "Orta Doğu ve Kuzey Afrika'daki kurumlar için Stevie programı; Türkiye başvurabilen ülkeler arasında. 29 Ekim'e kadar başvurup kazananlar, kazanan ücretinde 40 dolar indirim alıyor.",
      url: "https://mena.stevieawards.com/About/faq", konular: ["genel"],
      tarihler: [
        { etiket: "İndirimli ilk son tarih", tarih: "2026-10-29" },
        { etiket: "Son başvuru", tarih: "2026-11-26", sonTarih: true },
        { etiket: "Kazananlar açıklanıyor", tarih: "2027-02-18" }
      ] },
    { ad: "Stevie Satış ve Müşteri Hizmetleri Ödülleri", kurum: "Stevie Awards", kapsam: "Dünya",
      aciklama: "Satış, müşteri hizmetleri ve çağrı merkezi ekiplerini ve çalışanlarını ödüllendiren program; dünyanın her yerinden kurumlara açık.",
      url: "https://stevieawards.com/About/Calendar", konular: ["satis-cx"],
      tarihler: [
        { etiket: "Erken başvuru (indirimli)", tarih: "2026-11-12" },
        { etiket: "Ana son tarih (sonrası gecikme ücretli)", tarih: "2027-01-13" },
        { etiket: "Son başvuru", tarih: "2027-02-03", sonTarih: true },
        { etiket: "Kazananlar açıklanıyor", tarih: "2027-03-11" }
      ] },
    { ad: "Brandon Hall HCM Excellence Awards 2027", kurum: "Brandon Hall Group", kapsam: "Dünya",
      aciklama: "2026 program alanları: öğrenme ve gelişim, yetenek yönetimi, işe alım, liderlik gelişimi, İK, satış performansı, çeşitlilik, eşitlik ve kapsayıcılık, işin geleceği. 2027 kategori listesi henüz yayımlanmadı. Başvuru başına ücret 575 dolar.",
      url: "https://excellenceawards.brandonhall.com/hcm/", konular: ["egitim", "ik", "liderlik", "satis-cx"],
      tarihler: [
        { etiket: "Başvurular açılıyor", tarih: "2027-01-04" },
        { etiket: "Son başvuru", tarih: "2027-04-09", sonTarih: true },
        { etiket: "Kazananlar açıklanıyor", tarih: "2027-08-12" }
      ] },
    { ad: "Stevie International Business Awards 2027", kurum: "Stevie Awards", kapsam: "Dünya",
      aciklama: "Birçok alanda kategorisi olan uluslararası Stevie programı.",
      url: "https://stevieawards.com/About/Calendar", konular: ["genel"],
      tarihler: [
        { etiket: "Başvurular açılıyor", tarih: "2027-02-09" },
        { etiket: "Erken başvuru (indirimli)", tarih: "2027-04-07" },
        { etiket: "Ana son tarih (sonrası gecikme ücretli)", tarih: "2027-05-05" },
        { etiket: "Son başvuru", tarih: "2027-06-16", sonTarih: true },
        { etiket: "Kazananlar açıklanıyor", tarih: "2027-09-01" }
      ] },
    { ad: "Stevie Awards for Great Employers 2027", kurum: "Stevie Awards", kapsam: "Dünya",
      aciklama: "İşveren olarak öne çıkan kurumları, İK ekiplerini ve uygulamalarını ödüllendiren Stevie programı.",
      url: "https://stevieawards.com/About/Calendar", konular: ["ik", "tce", "isveren"],
      tarihler: [
        { etiket: "Başvurular açılıyor", tarih: "2027-02-24" },
        { etiket: "Erken başvuru (indirimli)", tarih: "2027-04-08" },
        { etiket: "Ana son tarih (sonrası gecikme ücretli)", tarih: "2027-05-06" },
        { etiket: "Son başvuru", tarih: "2027-06-09", sonTarih: true },
        { etiket: "Kazananlar açıklanıyor", tarih: "2027-07-15" }
      ] },
    { ad: "TEGEP Kurumsal Akademi Ödülleri", kurum: "TEGEP", kapsam: "Türkiye",
      aciklama: "Kategoriler: En İyi Kurumsal Akademi (çalışan sayısına göre üç grup) ve En İyi Yeni Kurumsal Akademi. 2025 döneminde başvuru ücreti TEGEP üyeleri için 13.000 TL + KDV idi.",
      durum: "Yeni dönemin başvuru tarihleri henüz açıklanmadı.",
      url: "https://tegep.org/tegep-kurumsal-akademi-odulleri", konular: ["egitim"], tarihler: [] },
    { ad: "The Hammers Awards", kurum: "Pazarlamasyon", kapsam: "Türkiye",
      aciklama: "Pazarlama ve iletişim ekiplerini ödüllendiren program; \"En İyi İşveren Markası Takımı\" kategorisi iç ve dış işveren markası çalışmalarını ödüllendiriyor.",
      durum: "2027 takvimi henüz açıklanmadı. 2026'da başvurular 8 Eylül'de kapandı, tören 13 Ekim'de yapıldı.",
      url: "https://thehammersawards.com/", konular: ["isveren"], tarihler: [] }
  ],

  siradaki: { no: 4, donem: "26 Ekim – 1 Kasım 2026", yayin: "1 Kasım Pazar" },

  sayilar: [
    {
      no: 3,
      donem: "19–25 Ekim 2026",
      yayin: "25 Ekim 2026",
      sonraki: "1 Kasım Pazar",
      okuma: 6,

      /* 1 · HAFTANIN ANA GELİŞMESİ */
      ana: {
        id: "ana", kategori: "ai-hr", tarih: "21 Ekim", tur: "Haftanın konusu", okumaSuresi: 3,
        baslik: "Oracle, işgücü planlama, işe alım, ücret ve bordro için yedi yapay zekâ ajanı uygulaması tanıttı",
        ozet: "Oracle, 21 Ekim'de Las Vegas'taki HR Tech konferansında İK yazılımı Fusion Cloud HCM'in içinde çalışan yedi yeni yapay zekâ ajanı uygulamasını duyurdu. Uygulamalar üç alanı kapsıyor: işgücü planlama ve kadro yönetimi; aday bulma ve işe alım takibi; ücret planlaması ve bordro kontrolü. Şirketin açıklamasına göre uygulamalar hazırladıkları önerileri ve işlemleri kurumun mevcut inceleme ve onay süreçlerinden geçiriyor. Uygulamalar, Oracle'ın uzun süren ve çok adımlı işler için geliştirdiği Fusion Claw adlı altyapıda çalışıyor. Oracle kullanıma açılış tarihi ve fiyat açıklamadı.",
        bolumler: [
          { baslik: "Neler duyuruldu?", maddeler: [
            "İşgücü planlama: Workforce Orchestration, talepteki değişimi, maliyeti ve iş sürekliliğini birlikte gözeterek işgücü planı hazırlıyor; çalışanı geliştirme, başka role kaydırma, dışarıdan işe alma ve dış kaynak seçeneklerini tartıyor. Positions Command Center ise kadro, çalışan, işe alım, maliyet ve onay verisini birleştirip çakışmaları ve ileride doğabilecek riskleri gösteriyor.",
            "İşe alım: Candidate Sourcing, adayları gruplayıp iletişim ve takip adımlarını mevcut işe alım süreçleri ve onaylar içinde yürütüyor. Recruiting Command Center; ilan, aday, mülakat, geri bildirim ve teklif verisini tek yerde topluyor, ilerlemeye hazır adayları işaretliyor ve sonraki adımları onaya hazırlıyor.",
            "Ücret: Workforce Compensation, işverenin belirlediği bütçe, ücret kuralları ve hakkaniyet kriterlerine göre ücret önerileri hazırlıyor; öneriler insan incelemesi ve onayı için sunuluyor.",
            "Bordro: Payroll Command Center; çalışan verisi, puantaj, geriye dönük değişiklikler ve geçmiş örüntüleri inceleyerek olası bordro sorunlarını ve muhtemel nedenlerini buluyor. Payroll Activity Workspace ise bu dönemin ücret, bakiye ve maliyetlerini önceki dönemlerle karşılaştırıp önemli farkları gösteriyor."
          ]},
          { baslik: "Dikkat edilecek noktalar", maddeler: [
            "Oracle'dan Lew Thompson'a göre iş ve İK liderlerinin daha hızlı ve emin karar verebilmek için işgücünü bütünüyle görebilmesi gerekiyor. Duyuruda müşteri sayısı, verim artışı ya da tasarruf gibi bir rakam yer almıyor.",
            "HR Tech Edge, Oracle'ın bağımsız performans ölçümü ya da sayısal verim kazancı paylaşmadığını not ediyor.",
            "ERP Today'e göre ajanların ne kadar kendi başına çalışacağı her kurumda ayarlanabiliyor; istihdam kararlarının ve denetimin sorumluluğu müşteride kalıyor. Yayın, kurumlara onay kurallarını yazılı hâle getirmelerini, ücret ve işe alım önerilerini kimin inceleyeceğini belirlemelerini öneriyor.",
            "Aynı hafta iCIMS de Microsoft Teams içinde çalışan bir işe alım ajanı duyurdu: Ajan, ilgilenilmesi gereken adayları hatırlatıyor; yöneticiler adayı Teams'ten inceleyip geri bildirim ve onay verebiliyor. Şirkete göre son kararları insanlar veriyor; müşterilere açılması 26 Ekim'de başlıyor."
          ]}
        ],
        not: "Yapay zekâ ajanı uygulaması (agentic application): Soru yanıtlamakla kalmayıp bir işi adım adım yürüten, örneğin veriyi tarayıp sorun bulan ve düzeltme önerisini onaya sunan yazılım. \"Command center\" (komuta merkezi) ise ilgili tüm veriyi tek ekranda toplayıp neyin dikkat istediğini gösteren paneldir.",
        kapak: { gorsel: "kapak-sayi3.jpg", gorselAciklama: "İşgücü planı, işe alım, ücret ve bordro kartlarının ortadaki bir onay noktasında birleştiğini anlatan illüstrasyon" },
        kaynaklar: [
          { ad: "Oracle · Resmî duyuru", url: "https://www.oracle.com/news/announcement/oracle-introduces-claw-powered-fusion-agentic-applications-for-hr-2026-10-20/", tip: "resmi" },
          { ad: "iCIMS · Hiring Agent duyurusu", url: "https://www.icims.com/company/newsroom/fallrelease2026/", tip: "resmi" },
          { ad: "ERP Today · Haber", url: "https://erp.today/oracle-brings-claw-powered-agentic-applications-to-hr-and-payroll", tip: "ikinci" },
          { ad: "HR Tech Edge · Haber", url: "https://hrtechedge.com/talent-acquisition/oracle-launches-agentic-ai-applications-for-hr-teams/", tip: "ikinci" }
        ]
      },

      /* 2 · HAFTALIK GÜNDEM (5–7 haber) */
      haberler: [
        {
          id: "h1", kategori: "ai-hr", tarih: "21 Ekim", tur: "Şirket duyurusu",
          baslik: "Deel'in testi: En iyi yapay zekâ modeli gerçek bordro görevlerinin yalnızca %49'unu tam çözebiliyor",
          ozet: "Küresel bordro ve İK platformu Deel, yapay zekâ modellerini gerçek iş görevleriyle test eden Emet adlı bir laboratuvar kurdu. 8 ülkede 29 yerel bordro uzmanıyla hazırlanan 295 görevlik bordro testinde en iyi model, uzmanların kriterlerinin %90'ını karşılasa da görevlerin yalnızca %49'unu eksiksiz çözebildi. Şirket ayrıca bordro ve uluslararası istihdam sorularına odaklanan kendi model ailesi Pangaea'yı kullanıma almaya başladı.",
          ek: "Deel'e göre 601 soruluk uluslararası istihdam testinde en iyi model, internette arama yaparak bile bilgilerin %75'ini doğru verdi. Şirketin açıklamasına göre bordro modeli P1, en zor 110 görevde kriter karşılama oranını %55'ten %61'e çıkardı ve en iyi modelden yaklaşık 40 kat daha ucuz çalışıyor. Deel, modellerin kişisel ya da müşteri verisiyle eğitilmediğini belirtiyor.",
          not: "Bu sonuçlar Deel'in kendi hazırladığı testlere dayanıyor; şirket test sonuçlarını herkese açık sıralama tablolarında yayımladığını söylüyor.",
          kaynaklar: [
            { ad: "Deel · Resmî duyuru", url: "https://www.deel.com/blog/pangaea-emet-launch/", tip: "resmi" },
            { ad: "CPA Practice Advisor · Haber", url: "https://cpapracticeadvisor.com/2026/10/22/deel-launches-ai-lab-and-llms/192250", tip: "ikinci" }
          ]
        },
        {
          id: "h2", kategori: "ai-hr", tarih: "19 Ekim", tur: "Şirket duyurusu",
          baslik: "UKG, bordro hatalarını maaş gününden önce yakalamayı hedefleyen yapay zekâ özellikleri duyurdu",
          ozet: "İK, bordro ve vardiya yönetimi yazılımı UKG, sahada çalışan (frontline) işgücüne yönelik yeni yapay zekâ özelliklerini tanıttı. Şirketin açıklamasına göre sistem olağandışı bordro sonuçlarını belirleyip olası sorunu açıklıyor ve düzeltmeyi bordro uzmanının incelemesine hazırlıyor. Ayrıca personel açıklarını daha erken fark edip işe alma, başka role kaydırma ya da yeniden eğitme seçeneklerini değerlendirmeye yardım ediyor.",
          ek: "UKG, bu yetenekleri çalışanların ve yöneticilerin zaten kullandığı yapay zekâ araçlarına taşımak için de çalıştığını söylüyor. Duyuruda genel kullanım tarihi ve fiyat yer almıyor. MarketScale'in değerlendirmesine göre duyuruda uyarıların ne sıklıkla doğru çıktığına ya da ne kadar zaman kazandırdığına dair veri yok.",
          kaynaklar: [
            { ad: "UKG · Resmî duyuru", url: "https://www.ukg.com/company/newsroom/ukg-turns-workforce-intelligence-action-new-ai-frontline", tip: "resmi" },
            { ad: "MarketScale · Değerlendirme", url: "https://www.marketscale.com/industries/software-and-technology/ukgs-new-frontline-ai-aims-to-catch-payroll-problems-before-payday", tip: "ikinci" }
          ]
        },
        {
          id: "h3", kategori: "ta", tarih: "20 Ekim", tur: "Araştırma",
          baslik: "Greenhouse: ABD'li adayların %81'i hiç kimseyle görüşmeden reddedildiğini söylüyor",
          ozet: "İşe alım yazılımı Greenhouse'un beş ülkede 2.800'den fazla iş arayanla yaptığı araştırmanın ABD sonuçlarına göre adayların %81'i son bir yılda şirketten kimseyle konuşmadan reddedildi. Adayların %77'si iş ararken yapay zekâ kullanıyor; %60'ı ise başvurusu yapay zekâ yazmış gibi görünmesin diye yazım biçimini değiştirdiğini ya da değiştirmeyi düşündüğünü söylüyor.",
          ek: "Mülakata kadar gelenlerin %96'sının en az bir şikâyeti var; en sık şikâyet (%45) işverenden bir daha haber alamamak. Son bir yılda adayların %48'i yapay zekânın yürüttüğü bir mülakata girdi; yapay zekâ mülakatını kesinlikle reddedeceğini söyleyenler %7. Adayların %88'i, işverenlerin mülakatta yapay zekâ kullanımı konusunda şeffaf olmasını gerektiren en az bir yasal kural istiyor. Greenhouse'un İK yöneticisi Sharawn Tipton, \"Hatırlayabildiğim kadarıyla ilk kez iki taraf da işe alımın işlediğini düşünmüyor\" dedi.",
          kaynaklar: [
            { ad: "Greenhouse · Basın bülteni", url: "https://www.greenhouse.com/newsroom/6-in-10-job-seekers-are-rethinking-how-they-write-to-avoid-sounding-like-ai-even-as-most-use-it-in-their-search", tip: "resmi" },
            { ad: "HR Dive · Haber", url: "https://www.hrdive.com/news/job-seekers-say-theyre-still-being-ghosted-even-as-theyre-trying-harder/833774/", tip: "ikinci" }
          ]
        },
        {
          id: "h4", kategori: "pa", tarih: "20 Ekim", tur: "Şirket duyurusu",
          baslik: "Visier'in yapay zekâ asistanı, İK metriklerinin neden değiştiğini istatistiksel olarak açıklamaya başlıyor",
          ozet: "İşgücü analitiği şirketi Visier, yapay zekâ asistanı Vee'ye \"Diagnostics\" özelliğini ekledi. Şirketin açıklamasına göre özellik, istifaların artması ya da pozisyon doldurma süresinin uzaması gibi bir değişimin arkasındaki etkenleri istatistiksel modellerle buluyor, değerlendirdiği etkenleri sıralıyor, güven düzeyini belirtiyor ve yapılan analizin kaydını tutuyor.",
          ek: "Visier'e göre araç, belirli bir etken değiştirildiğinde sonucun nasıl etkileneceğini de modelleyip öneri sunuyor. Özellik şimdilik seçili müşterilere erken erişimde; genel kullanım 2027 kışı için yol haritasında ve Vee'ye ek ücret olmadan dahil. Duyuruda hangi istatistiksel yöntemlerin kullanıldığı belirtilmiyor.",
          kaynaklar: [
            { ad: "Visier · Basın bülteni", url: "https://www.prnewswire.com/news-releases/visier-launches-vee-diagnostics-capabilities-at-hrtech-2026-bringing-data-science-rigor-to-everyday-talent-decisions-302914244.html", tip: "resmi" },
            { ad: "HR Tech Edge · Haber", url: "https://hrtechedge.com/workplace-experience/visier-launches-ai-diagnostics-to-explain-workforce-trends/", tip: "ikinci" }
          ]
        },
        {
          id: "h5", kategori: "ex", tarih: "22 Ekim", tur: "Araştırma",
          baslik: "Gallup: ABD'de çalışanların yalnızca %41'i \"kaliteli iş\" ölçütlerini karşılayan bir işte",
          ozet: "Gallup, Jobs for the Future ve Families & Workers Fund'ın ikinci Amerikan İş Kalitesi Araştırması'na göre ABD'li çalışanların %41'i kaliteli bir işte çalışıyor; oran geçen yılla aynı. Kaliteli iş; adil ücret ve yan haklar, güvenli ve saygılı bir işyeri, gelişim fırsatı, kararlarda söz hakkı ve sürdürülebilir çalışma saatleri gibi asgari ölçütlerle tanımlanıyor.",
          ek: "Kaliteli işte çalışanlar hastalık ya da yaralanma nedeniyle %15 daha az iş günü kaçırıyor. Her dört çalışandan biri ayrımcılık ya da haksız muamele gördüğünü söylüyor. Axios'un aktardığına göre düşük kaliteli işlerde çalışanların bir yıl sonra başka bir işverende olma ihtimali yaklaşık iki kat. Axios'a göre anket 26 Ocak–24 Mart 2026 arasında 18–75 yaş arası 17.874 çalışanla yapıldı.",
          kaynaklar: [
            { ad: "Gallup · Araştırma sayfası", url: "https://www.gallup.com/analytics/691241/american-job-quality-study.aspx", tip: "resmi" },
            { ad: "Axios (Yahoo Finance) · Haber", url: "https://finance.yahoo.com/economy/articles/majority-americans-low-quality-jobs-040105964.html", tip: "ikinci" }
          ]
        },
        {
          id: "h6", kategori: "fow", tarih: "22 Ekim", tur: "Şirket açıklaması",
          baslik: "Barclays bu yıl yaklaşık 5.000 kişilik kadro azaltacak; kesintilerin %60'ı destek birimlerinde",
          ozet: "İngiliz bankası Barclays, 22 Ekim'deki üçüncü çeyrek sonuçları toplantısında bu yıl yaklaşık 5.000 tam zamanlı kadroyu azaltmayı beklediğini açıkladı; Reuters'a göre bu, çalışanlarının yaklaşık %5'i. Finans direktörü Anna Cross'a göre azaltmaların yaklaşık %60'ı, \"yapay zekâ çalışanlarımızı daha verimli kıldığı için daha az geliştirici\" de dahil olmak üzere destek birimlerinde olacak.",
          ek: "Cross'un Reuters'a aktarılan açıklamasına göre şimdiye kadar yaklaşık 1.000 kadro azaltıldı, kalanı yıl sonuna kadar azaltılacak. Banka, maliyetleri teknoloji yardımıyla kalıcı olarak düşürmek için yılın ikinci yarısında 300 milyon sterlin ek harcama yapıyor. CEO C.S. Venkatakrishnan ise yapay zekâyı büyük ölçekte kullanacaklarını söylerken \"Yapay zekâ pastanın kreması, pastanın kendisi değil\" dedi.",
          kaynaklar: [
            { ad: "Investing.com · Barclays çeyrek sonuçları toplantısı dökümü", url: "https://uk.investing.com/news/stock-market-news/earnings-call-transcript-barclays-posts-mixed-q3-2026-results-as-revenue-misses-93CH-4924843", tip: "ikinci" },
            { ad: "Reuters (Business Standard) · Haber", url: "https://www.business-standard.com/amp/companies/news/barclays-to-cut-5-000-jobs-in-ai-led-cost-drive-as-q3-profit-rises-12-126102201741_1.html", tip: "ikinci" },
            { ad: "TechRepublic · Haber", url: "https://www.techrepublic.com/article/news-barclays-job-cuts-ai-productivity-emea-uk/", tip: "ikinci" }
          ]
        }
      ],

      /* 3 · SEKTÖREL GÖZLEM (editoryal yorum, haber değil) */
      sinyal: {
        baslik: "Ajanların yeni adresi: bordro",
        ingilizce: "From Answering → Checking",
        metin: "Bu hafta HR Tech'te Oracle (ana gelişme) ve UKG, yapay zekâyı çalışan sorularını yanıtlamanın ötesine taşıyıp bordro çalışmadan önce veriyi tarayan, farkı açıklayan ve düzeltme öneren bir kontrol katmanı olarak konumladı; ikisinde de son onay bordro uzmanında kalıyor. Deel'in aynı hafta yayımladığı testler de bunun nedenine işaret ediyor: Modeller kuralları büyük ölçüde biliyor ama bir görevi baştan sona eksiksiz bitirmekte hâlâ zorlanıyor. İK açısından bu, bordro ekibinin rolünün hesap yapmaktan, yapay zekânın işaretlediği istisnaları incelemeye ve onaylamaya kayabileceği anlamına geliyor. Hangi farkın kimin onayına gideceğini önceden yazılı kurala bağlamak, bu araçlardan değer almanın ön koşulu olabilir.",
        once: { ad: "Soru yanıtlayan asistan", metin: "Çalışanın bordro sorusunu yanıtlar; hesap ve kontrol insanda kalır." },
        sonra: { ad: "Kontrol eden ajan", metin: "Bordro çalışmadan hatayı arar, düzeltme önerir; onay insanda kalır." },
        dayanak: ["h1", "h2"]
      },

      /* 4 · SAYILARLA GÜNDEM */
      veri: {
        id: "veri", kategori: "fow", tarih: "19 Ekim", tur: "Araştırma",
        deger: "%4",
        baslik: "Gartner CIO anketi: Rolleri insan–ajan iş birliğine göre yeniden tasarlama planı olan CIO'lar yalnızca %4",
        metin: "Gartner'ın 2.002 CIO ve teknoloji yöneticisiyle yaptığı ankete göre rolleri insanların ve yapay zekâ ajanlarının birlikte çalışacağı bir yapıya göre yeniden tasarlamak için açık planı olan CIO'ların oranı yalnızca %4. Gartner'a göre böyle bir planı olan kurumların, iş sonuçlarında daha iyi performans gösteren ve CEO'larının yapay zekâdan yüksek değer gördüğünü söylediği \"öncü\" kurumlar arasında olma ihtimali 2,4 kat daha yüksek.",
        karsilastirma: [
          { etiket: "Yapay zekâdan önemli ya da dönüştürücü değer elde ettiğini söyleyen CIO'lar", deger: 13 },
          { etiket: "Rolleri insan–ajan iş birliğine göre yeniden tasarlama planı olan CIO'lar", deger: 4 }
        ],
        orneklem: "2.002 CIO ve teknoloji yöneticisi (Mayıs–Temmuz 2026)",
        ozet: "Gartner'ın 2027 CIO ve Teknoloji Yöneticisi Gündemi anketinden öne çıkanlar:",
        maddeler: [
          "CIO'ların yalnızca %13'ü kurumlarının yapay zekâdan önemli ya da dönüştürücü değer elde ettiğini söylüyor; yapay zekâ kullanım senaryolarının başarı oranı yaklaşık beşte bir.",
          "CIO'ların %58'i yapay zekâdan maliyet iyileştirmesi sağlama baskısının arttığını söylüyor; %51'i yapay zekânın teknoloji çözümlerinin toplam sahip olma maliyetini artırmasını bekliyor.",
          "Bir yapay zekâ pilotunun ne zaman canlıya alınmayacağına dair kuralı olan CIO'lar %31; canlıdaki düşük değerli yapay zekâ uygulamalarını ne zaman durduracaklarına dair kuralı olanlar ise %17.",
          "Katılımcıların %40'ı 2027'de BT çalışan sayısının artmasını bekliyor; artışın özellikle siber güvenlik ile veri ve analitik alanlarında olması bekleniyor.",
          "Gartner'dan Alicia Mullery'ye göre öncü kurumları asıl farklılaştıran şey işgücünün yeniden tasarımı; Mullery'ye göre teknoloji işlerinde daha az sayıda farklı rol türü olacak, her rolün sorumluluk alanı ise genişleyecek."
        ],
        kaynaklar: [
          { ad: "Gartner · Basın bülteni", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-19-gartner-survey-finds-only-13-percent-of-cios-say-their-enterprise-has-realized-significant-or-transformational-value-from-ai", tip: "resmi" },
          { ad: "CIO Dive · Haber", url: "https://www.ciodive.com/news/gartner-survey-CIOs-workforce-revamp/833405/", tip: "ikinci" }
        ]
      },

      /* 4b · SEKTÖRDEN (perakende ve iç giyim; herkese açık bilgi, yorum yok) */
      sektorden: [
        { tarih: "2026-09-16", sirket: "Mavi · LC Waikiki", tur: "Ödül",
          baslik: "Youth Awards 2026'da perakendeden iki işveren markası ödülü",
          metin: "Kazananlar Youthall'un düzenlediği ve gençlerin oylarıyla belirlenen Youth Awards 2026'da açıklandı.",
          kazananlar: [
            { sirket: "Migros", derece: "Altın", kategori: "Perakende Şirketi" },
            { sirket: "Mavi", derece: "Gümüş", kategori: "Perakende Şirketi" },
            { sirket: "Starbucks Alshaya", derece: "Bronz", kategori: "Perakende Şirketi" },
            { sirket: "LC Waikiki", derece: "Bronz", kategori: "Çalışan Değer Önermesi (EVP) · \"Büyük Kalplerle, Büyük Hedeflere\"" }
          ],
          konular: ["isveren"],
          kaynaklar: [{ ad: "Youthall · Youth Awards 2026 kazananları", url: "https://www.youthall.com/en/youth-awards/winners/2026/?hl=tr+", tip: "resmi" }] },
        { tarih: "2026-09-02", sirket: "LC Waikiki", tur: "Eğitim",
          baslik: "LC Waikiki çalışanları için \"Dijital Teknolojiler ve Yapay Zekâ Okulu\" açtı",
          metin: "Kurumsal Akademi çatısı altında, Yıldız Teknik Üniversitesi Teknoloji Transfer Ofisi işbirliğiyle yürütülen program 8 modül ve 27 oturumdan oluşuyor; farklı birimlerden 450 çalışan katılıyor. Şirket, programın ileride üniversite öğrencileri ve çalışanların çocukları gibi farklı gruplara da genişletilmesini hedefliyor.",
          konular: ["egitim", "ai"],
          kaynaklar: [{ ad: "İnternet Haber · Haber", url: "https://www.internethaber.com/lc-waikiki-calisanlari-icin-dijital-teknolojiler-ve-yapay-zeka-okulunu-hayata-gecirdi-2457701h.htm", tip: "ikinci" }] },
        { tarih: "2026-07-16", sirket: "Dagi · Rossmann Türkiye", tur: "Ödül",
          baslik: "Stevie Great Employers 2026'da perakende ve iç giyimden ödüller",
          metin: "Kazananlar 16 Temmuz'da açıklandı.",
          kazananlar: [
            { sirket: "Rossmann Türkiye", derece: "Altın", kategori: "Esnek ve Hibrit Çalışma Modelleri" },
            { sirket: "Dagi", derece: "Gümüş", kategori: "En İyi Liderlik Gelişim Programı" },
            { sirket: "Dagi", derece: "Bronz", kategori: "Yeni Çalışan Oryantasyonu" }
          ],
          konular: ["egitim", "liderlik", "tce"],
          kaynaklar: [{ ad: "Stevie Awards · 2026 kazananları", url: "https://hr.stevieawards.com/awards/sage-winners/2026/hr-achievement-category-winners/", tip: "resmi" }, { ad: "Stevie Blog · Kazananlar duyurusu", url: "https://blog.stevieawards.com/blog/winners-in-2026-stevie-awards-for-great-employers-announced", tip: "resmi" }] }
      ],

      /* 5 · YAKLAŞAN İK ETKİNLİKLERİ (tarihi geçenler sitede kendiliğinden gizlenir) */
      etkinlikler: [
        { ad: "İstanbul Workplace Conference 2026", tur: "Konferans", baslangic: "2026-11-03", bitis: "2026-11-03", yer: "İstanbul · Point Hotel Barbaros",
          aciklama: "İnsan performansı, çalışma alanı stratejisi, işin geleceği, ofis tasarımı ve iş hayatında uzun ömürlülük konuşulacak.",
          url: "https://www.istanbulworkplace.com/", konular: ["tce"] },
        { ad: "25. Performans Yönetimi Zirvesi", tur: "Zirve", baslangic: "2026-11-11", bitis: "2026-11-11", yer: "İstanbul · Sheraton Grand Ataşehir",
          aciklama: "HRdergi'nin zirvesi; performans yönetiminin geleceği, yapay zekâ ve veri odaklı yaklaşımlar gündemde.",
          url: "https://hrdergi.com/25-performans-yonetimi-zirvesi", konular: ["ik", "ai"] },
        { ad: "Türkiye Yapay Zekâ Zirvesi 2026", tur: "Zirve", baslangic: "2026-11-11", bitis: "2026-11-12", yer: "İstanbul · Wyndham Grand Levent (12 Kasım çevrim içi)",
          aciklama: "Türkiye Yapay Zekâ İnisiyatifi'nin zirvesi; programda yapay zekâ ajanları ve kurum kültürünün bu dönüşüme hazır olup olmadığı üzerine bir oturum da var.",
          url: "https://zirve.turkiye.ai/", konular: ["ai", "liderlik"] },
        { ad: "5. Dijital İK Çağı Zirvesi", tur: "Zirve", baslangic: "2026-12-09", bitis: "2026-12-09", yer: "İstanbul · Sheraton Grand Ataşehir",
          aciklama: "HRdergi'nin zirvesi; yapay zekâ çağında İK'nın rolü, yapay zekâ etiği, veri gizliliği ve people analytics konuşulacak.",
          url: "https://hrdergi.com/5-dijital-ik-cagi-zirvesi", konular: ["ik", "ai", "tce"] }
      ]
    },
    {
      no: 2,
      donem: "12–18 Ekim 2026",
      yayin: "18 Ekim 2026",
      sonraki: "25 Ekim Pazar",
      okuma: 6,

      /* 1 · HAFTANIN ANA GELİŞMESİ */
      ana: {
        id: "ana", kategori: "ai-hr", tarih: "13 Ekim", tur: "Haftanın konusu", okumaSuresi: 3,
        baslik: "Workday, İK işlerini arka planda yürüten \"otomatik pilot\" yapay zekâ ajanlarını tanıttı",
        ozet: "Workday, 13 Ekim'de Las Vegas'taki Workday Rising etkinliğinde işe alım, bordro, muhasebe ve BT için arka planda çalışan yapay zekâ ajanlarını duyurdu. Şirketin açıklamasına göre ajanlar her müşterinin mevcut politika, yetki ve onay kurallarına uyuyor; hangi işin otomatik yapılacağına, hangisinin insan onayı gerektireceğine müşteri karar veriyor ve ajanların her işlemi kayda geçiyor. İşe alım ajanı şimdilik yalnızca erken kullanıcılara açık; genel kullanım 2027 başında planlanıyor. Workday aynı gün, insanların ve yapay zekâ ajanlarının sistemlere erişimini yöneten C1.ai'yi satın alacağını açıkladı.",
        bolumler: [
          { baslik: "Neler duyuruldu?", maddeler: [
            "İşe alım ajanı: Açık pozisyonları izliyor, hedef tarihte dolmama riski olan rolleri işaretliyor, aday buluyor, adayın güçlü ve eksik yanlarını işe alım uzmanına sunuyor ve mülakatları planlıyor. Adaylara gidecek mesajlar uzmanın onayı olmadan gönderilmiyor.",
            "Bordro ajanı: Bordro çalıştırılmadan önce verideki eksikleri ve olası sorunları yakalayacak. Erken kullanıcılara 2027 başında açılması planlanıyor.",
            "Decision Intelligence: İK ekiplerinin dışarıdan işe alım, şirket içinde yetiştirme ve geçici çalışan gibi seçenekleri maliyet, süre ve risk açısından karşılaştırmasını sağlıyor. Workday'e göre İK ve finans müşterilerinin kullanımına açık.",
            "Work Intelligence: Yapay zekânın her roldeki görevleri nasıl değiştirdiğini gösteriyor ve bu görevleri gereken becerilerle eşleştiriyor. Şimdilik erken erişimde.",
            "Aday profili: Workday ile işe alım yapan şirketlere başvuran adaylar bilgilerini bir kez kaydedip sonraki başvurularda yeniden kullanabilecek. 2027 başında bekleniyor."
          ]},
          { baslik: "Dikkat edilecek noktalar", maddeler: [
            "Workday'e göre işe alım süresi \"haftalardan günlere\" inebilir; bu bir ölçüm sonucu değil, şirketin beklentisi.",
            "C1.ai satın alımının, Workday'in 31 Ocak 2027'de biten mali yılının son çeyreğinde tamamlanması bekleniyor; bedel açıklanmadı.",
            "UC Today'in değerlendirmesine göre öne çıkan ürünlerin bir kısmı hâlâ erken erişimde. Yazının diginomica'dan aktardığına göre Dow'dan Sarah Jo Rowley, ajanları henüz devreye almadıklarını; bunun bir nedeninin, faturayı İK'nın değil BT'nin ödemesinden doğan bütçe tartışması olduğunu söylüyor."
          ]}
        ],
        not: "Otomatik pilot (autopilot): Workday'in, kullanıcı bir şey sormadan arka planda çalışıp işi tamamlayan ajanlar için kullandığı ad. Workday'in yapay zekâ yöneticisi Joel Hellermark'ın deyişiyle eski yaklaşımda yapay zekâ bir \"yardımcı pilot\" gibiydi: yalnızca bir şey sorulduğunda devreye giriyordu.",
        kapak: { gorsel: "kapak-sayi2.jpg", gorselAciklama: "Arka planda kendi başına ilerleyen İK süreçlerini ve onay noktasında bekleyen insanı anlatan illüstrasyon" },
        kaynaklar: [
          { ad: "Workday · Otomatik pilot ajanlar duyurusu", url: "https://newsroom.workday.com/2026-10-13-Workday-Launches-Autopilot-Agents-That-Get-Real-Work-Done-Across-HR,-Finance,-and-IT", tip: "resmi" },
          { ad: "Workday · Decision Intelligence duyurusu", url: "https://newsroom.workday.com/2026-10-13-Workday-Brings-Decision-Intelligence-to-HR-and-Finance,-Helping-Teams-Weigh-Workforce-and-Financial-Decisions-Together", tip: "resmi" },
          { ad: "Workday · C1.ai satın alma duyurusu", url: "https://newsroom.workday.com/2026-10-13-Workday-to-Acquire-C1-ai,-a-Leading-Agentic-Identity-Platform-for-People-and-Agents", tip: "resmi" },
          { ad: "Workday · Work Intelligence duyurusu", url: "https://newsroom.workday.com/2026-10-13-Workday-Introduces-Work-Intelligence-to-Help-Customers-Design-Work-for-AI", tip: "resmi" },
          { ad: "Workday · Aday profili duyurusu", url: "https://newsroom.workday.com/2026-10-13-New-Workday-Candidate-Profile-Lets-Job-Seekers-Save-Their-Information-Once-and-Use-It-Every-Time-They-Apply-Through-Workday", tip: "resmi" },
          { ad: "HR Dive · Haber", url: "https://www.hrdive.com/news/workday-brings-autopilots-finance-autonomous-ai-bet/832890/", tip: "ikinci" },
          { ad: "UC Today · Değerlendirme", url: "https://uctoday.com/workday-rising-verdict-the-latest-promises-tested", tip: "ikinci" }
        ]
      },

      /* 2 · HAFTALIK GÜNDEM (5–7 haber) */
      haberler: [
        {
          id: "h1", kategori: "ai-hr", tarih: "13 Ekim", tur: "Şirket duyurusu",
          baslik: "Workday, insanların ve yapay zekâ ajanlarının sistem erişimini yöneten C1.ai'yi satın alıyor",
          ozet: "Workday, insanlara ve yapay zekâ ajanlarına e-posta, müşteri yönetimi, finans ve bulut sistemlerine ihtiyaç anında erişim veren, ihtiyaç bitince bu erişimi kaldıran C1.ai'yi satın almak için anlaşma imzaladı. Satışın Workday'in 31 Ocak 2027'de biten mali yılının son çeyreğinde tamamlanması bekleniyor; bedel açıklanmadı.",
          ek: "Workday'den Gerrit Kazmaier, bugünün şirketlerinin insanlardan ve yapay zekâ ajanlarından oluşan karma bir işgücüyle çalıştığını söyledi. C1.ai'nin kurucusu Alex Bovee'ye göre şirketler yapay zekâ dönemini eski usul BT talepleriyle güvene alamaz. Duyuruda, C1.ai'nin kendi araştırmasına göre büyük ABD şirketlerinin %95'inin otonom ajan kullandığı belirtiliyor.",
          kaynaklar: [
            { ad: "Workday · Resmî duyuru", url: "https://newsroom.workday.com/2026-10-13-Workday-to-Acquire-C1-ai,-a-Leading-Agentic-Identity-Platform-for-People-and-Agents", tip: "resmi" },
            { ad: "UC Today · Değerlendirme", url: "https://uctoday.com/workday-rising-verdict-the-latest-promises-tested", tip: "ikinci" }
          ]
        },
        {
          id: "h2", kategori: "ai-hr", tarih: "8 Ekim", tur: "Araştırma", gecenHafta: true,
          baslik: "Gartner: Yapay zekâ kullanması beklenen çalışanların %47'si benimsemeye direniyor",
          ozet: "Gartner'ın 2026'nın ilk çeyreğinde 11.838 çalışanla yaptığı ankete göre çalışanların %35'ten azı genel iyi oluşunun iyi düzeyde olduğunu söylüyor. İşte yapay zekâ kullanması beklenen çalışanların %47'si ise bu araçları benimsemeye direnç gösteriyor.",
          ek: "Gartner'dan Nicole Paripurana'ya göre işte yapay zekânın geleceği yalnızca verimlilikle ilgili değil; kurumlar yapay zekâyı sağlıksız çalışma kalıplarını fark etmek, sürtünmeyi azaltmak ve desteği kişiselleştirmek için de kullanabilir. HR Dive araştırmayı 14 Ekim'de haberleştirdi.",
          kaynaklar: [
            { ad: "Gartner · Basın bülteni", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-research-reveals-fewer-than-35-percent-of-employees-report-good-levels-of-overall-wellness", tip: "resmi" },
            { ad: "HR Dive · Haber", url: "https://www.hrdive.com/news/hr-leaders-may-be-able-to-use-ai-to-improve-employee-wellness/832960/", tip: "ikinci" }
          ]
        },
        {
          id: "h3", kategori: "ta", tarih: "14 Ekim", tur: "Araştırma",
          baslik: "İşe alım uzmanlarının en büyük stres kaynağı yapay zekâyla parlatılmış özgeçmişler",
          ozet: "Employ'un ABD'de 1.200'den fazla işe alım uzmanı ve yöneticiyle yaptığı Recruiter Nation 2026 araştırmasına göre katılımcıların %33'ü en büyük stres kaynağı olarak yapay zekâyla parlatılmış özgeçmişleri gösteriyor. Yapay zekâ kaynaklı aday sahteciliğini doğrulanmış olarak yaşadığını söyleyenlerin oranı bir yılda %23'ten %27'ye çıktı.",
          ek: "Katılımcıların %66'sı yapay zekânın işini kolaylaştırdığını söylüyor. Kullandıkları ana işe alım sisteminden memnun olanların oranı ise %82'den %69'a düştü; %64'ü önümüzdeki 1–2 yılda sistem değiştirmeye en azından biraz yatkın. Anket Ağustos 2026'da Zogby Analytics tarafından yapıldı.",
          kaynaklar: [
            { ad: "Employ · Basın bülteni", url: "https://www.prnewswire.com/news-releases/ai-polished-resumes-are-top-stressor-for-recruiters-employ-report-finds-302908070.html", tip: "resmi" },
            { ad: "HR Dive · Haber", url: "https://www.hrdive.com/news/ai-is-the-root-of-recruiters-biggest-stressors-survey-says/833223/", tip: "ikinci" }
          ]
        },
        {
          id: "h4", kategori: "pa", tarih: "13 Ekim", tur: "Veri analizi",
          baslik: "Revelio Labs: ABD bankalarında kariyerin başındaki çalışan sayısı geriliyor",
          ozet: "İşgücü verisi şirketi Revelio Labs'ın analizine göre ABD bankalarında kariyerinin başındaki (kıdemsiz) çalışan sayısı Ekim 2022'ye göre %4,7 daha düşük; kıdemli rollerde ise artış sürüyor. Araştırmacılara göre düşüş, yapay zekâya en açık rollerde yoğunlaşmıyor; bankalar yapay zekâ tarafından otomatikleştirilmekten çok onun etrafında yeniden yapılanıyor.",
          ek: "Düşüş işten ayrılmalardan değil, daha az işe alımdan kaynaklanıyor; araştırmacılar 2022'deki faiz döngüsünün de muhtemelen etkili olduğunu belirtiyor. Kıdemli rollerin yaklaşık dörtte üçü şirket içinden dolduruluyor; yazarlar daha az kıdemsiz işe alımın ileride kıdemli rollerin ihtiyaç duyduğu deneyimi azaltabileceği uyarısını yapıyor.",
          kaynaklar: [
            { ad: "Revelio Labs · Analiz", url: "https://www.reveliolabs.com/news/ai-and-work/ai-junior-bankers-hiring-data", tip: "resmi" }
          ]
        },
        {
          id: "h5", kategori: "ex", tarih: "13 Ekim", tur: "Araştırma",
          baslik: "Jabra: Yöneticisi yapay zekâda yetkin olan çalışan, yapay zekâyı çok daha sık kullanıyor",
          ozet: "Jabra'nın altı ülkede 6.000'den fazla bilgi çalışanıyla yaptığı WorkLife araştırmasına göre yöneticisini yapay zekâ konusunda yetkin gören çalışanların %65'i yapay zekâyı her gün kullanıyor; bu oran diğerlerinde %27. Kariyer iyimserliği de yetkin yöneticisi olanlarda 10 üzerinden 8,3, olmayanlarda 5,5.",
          ek: "Üst yöneticilerin %30'u yapay zekâyı yoğun kullanırken yönetici olmayan çalışanlarda bu oran %8. Yönetici olmayanların %64'ü hiç eğitim almadığını ya da yalnızca kısa bir tanıtım aldığını söylüyor; üst yöneticilerde bu oran %26. Anket Mayıs 2026'da Toluna tarafından yapıldı.",
          kaynaklar: [
            { ad: "Jabra · Basın bülteni", url: "https://www.globenewswire.com/news-release/2026/10/13/3379475/0/en/jabra-worklife-report-unveils-a-productivity-paradox-ai-is-giving-workers-time-back-but-they-re-not-working-any-less.html", tip: "resmi" },
            { ad: "IT Brief UK · Haber", url: "https://itbrief.co.uk/story/jabra-study-finds-ai-adds-work-boosts-collaboration", tip: "ikinci" }
          ]
        },
        {
          id: "h6", kategori: "fow", tarih: "14 Ekim", tur: "Resmî rapor",
          baslik: "Fed: 12 bölgeden 5'inde bazı firmalar yapay zekâ yatırımı sonrası daha az işe alıyor",
          ozet: "ABD Merkez Bankası'nın (Fed) 14 Ekim'de yayımladığı Bej Kitap'a (Beige Book) göre 12 bölgeden 5'i, bazı firmaların yapay zekâya yatırım yapıp verimliliği artırdıktan sonra ayrılanların yerini doldurmayarak kadroyu küçülttüğünü, işe alımı ertelediğini ya da daha az yeni iş yaratmayı beklediğini bildirdi. Bölgelerin çoğu ise toplam istihdamda çok az değişiklik olduğunu ya da hiç değişiklik olmadığını aktardı.",
          ek: "Rapora göre uzmanlık gerektiren teknik işlerde ve vasıflı zanaat işlerinde eleman sıkıntısı sürüyor. Fed hangi beş bölgeden söz ettiğini bu özet bölümünde belirtmedi.",
          not: "Bej Kitap, Fed'in 12 bölgesindeki iş dünyası temsilcileriyle yapılan görüşmelere dayanan bir özet; resmî istatistik değil, erken gözlem niteliğinde.",
          kaynaklar: [
            { ad: "Federal Reserve · Bej Kitap özeti", url: "https://www.federalreserve.gov/monetarypolicy/beigebook202610-summary.htm", tip: "resmi" },
            { ad: "24/7 Wall St. · Haber", url: "https://247wallst.com/investing/2026/10/15/the-fed-just-found-ai-is-starting-to-cost-jobs-in-5-of-its-12-districts/", tip: "ikinci" }
          ]
        }
      ],

      /* 3 · SEKTÖREL GÖZLEM (editoryal yorum, haber değil) */
      sinyal: {
        baslik: "Çıkarmadan çok, almamak",
        ingilizce: "From Layoffs → Fewer Hires",
        metin: "Bu haftanın verileri, yapay zekânın istihdama etkisinin büyük işten çıkarma duyurularından çok sessiz bir yoldan geldiğini düşündürüyor: boşalan kadroların doldurulmaması, ertelenen işe alımlar ve kariyerin ilk basamaklarında daralma (ABD bankalarında; Revelio'ya göre bunda faiz döngüsü de etkili). Bu tür bir değişim işten çıkarma istatistiklerinde pek görünmez; İK açısından izlenmesi gereken göstergeler işe alım, iç terfi ve kıdemsiz kadro akışları olabilir. Kadroda kalanlar tarafında ise yapay zekâ kullanımının, yöneticinin yapay zekâ yetkinliğiyle güçlü biçimde ilişkili olduğu görülüyor.",
        once: { ad: "İşten çıkarma", metin: "Etki, duyurulan kadro azaltmalarıyla ölçülür." },
        sonra: { ad: "Daha az işe alım", metin: "Etki, doldurulmayan kadrolarda ve daralan giriş seviyesinde ortaya çıkar." },
        dayanak: ["h4", "h5", "h6"]
      },

      /* 4 · SAYILARLA GÜNDEM */
      veri: {
        id: "veri", kategori: "ta", tarih: "14 Ekim", tur: "Araştırma",
        deger: "%15",
        baslik: "Oyster: Yapay zekâ becerisi isteyen ilanların payı 2022'den bu yana üç katına çıktı",
        metin: "Oyster üzerinden işe alım yapılan pozisyonlarda yapay zekâ becerisi isteyenlerin payı 2022'de yaklaşık %5'ken 2026'nın ilk yarısında %15'e ulaştı. Rakamlar yalnızca Oyster platformundaki ilanları yansıtıyor, tüm piyasayı değil.",
        karsilastirma: [
          { etiket: "2022", deger: 5 },
          { etiket: "2025", deger: 10 },
          { etiket: "2026 ilk yarı", deger: 15 }
        ],
        orneklem: "Yaklaşık 15 bin iş tanımı (2022–Haziran 2026) ve ABD, İngiltere, Kanada ve Avrupa'dan 1.000'den fazla İK yöneticisiyle anket (Ağustos 2026)",
        ozet: "Küresel istihdam platformu Oyster'ın kendi ilan verisine ve İK yöneticileriyle yaptığı ankete dayanan rapordan öne çıkanlar:",
        maddeler: [
          "Yapay zekâ becerisi eksik olduğunda şirketlerin %53'ü mevcut çalışanları eğitmeyi, %31'i eğitimle dışarıdan işe alımı birlikte kullanmayı, %14'ü ağırlıklı olarak dışarıdan işe almayı tercih ediyor.",
          "Son 12 ayda mevcut rollere yapay zekâ beklentisi ekleyen şirketlerin %62'sinde ne unvan ne de ücret değişti.",
          "Teknik olmayan rollere yapay zekâ beklentisi ekleyen şirketlerin %46'sı bu değişikliği resmî olarak duyurmadı.",
          "Adaylara yapay zekâyla ne geliştirdiklerini soran şirketlerin %53'ünde bu yanıt işe alım ya da ücret kararını etkilemiyor.",
          "Platform verisinde yapay zekâ becerisi istenen pozisyonların payı pazarlama koordinatörlerinde %17, işe alım uzmanlarında %15."
        ],
        kaynaklar: [
          { ad: "Oyster · Rapor sayfası", url: "https://www.oysterhr.com/ai-talent-report-2026", tip: "resmi" },
          { ad: "Oyster · Basın bülteni (Yahoo Finance)", url: "https://finance.yahoo.com/technology/ai/articles/oyster-2026-global-ai-talent-130000414.html", tip: "resmi" },
          { ad: "Unite.AI · Haber", url: "https://unite.ai/oyster-2026-global-ai-talent-report-skills-job-definitions", tip: "ikinci" }
        ]
      },

      /* 5 · YAKLAŞAN İK ETKİNLİKLERİ (tarihi geçenler sitede kendiliğinden gizlenir) */
      etkinlikler: [
        { ad: "34. PERYÖN İnsan Odağında Yönetim Kongresi", tur: "Kongre", baslangic: "2026-10-20", bitis: "2026-10-21", yer: "İstanbul · Haliç Kongre Merkezi",
          aciklama: "Türkiye İnsan Yönetimi Derneği'nin (PERYÖN) yıllık kongresi; teknoloji ve yapay zekânın işi, liderliği ve öğrenme modellerini nasıl dönüştürdüğü ele alınacak.",
          url: "https://www.peryonkongre.com/" },
        { ad: "25. Performans Yönetimi Zirvesi", tur: "Zirve", baslangic: "2026-11-11", bitis: "2026-11-11", yer: "İstanbul · Sheraton Grand Ataşehir",
          aciklama: "HRdergi'nin zirvesi; performans yönetiminin geleceği, yapay zekâ ve veri odaklı yaklaşımlar gündemde.",
          url: "https://hrdergi.com/25-performans-yonetimi-zirvesi" },
        { ad: "5. Dijital İK Çağı Zirvesi", tur: "Zirve", baslangic: "2026-12-09", bitis: "2026-12-09", yer: "İstanbul",
          aciklama: "HRdergi'nin zirvesi; yapay zekâ çağında İK'nın rolü, yapay zekâ etiği, veri gizliliği ve people analytics konuşulacak.",
          url: "https://hrdergi.com/5-dijital-ik-cagi-zirvesi" },
        { ad: "HR Tech 2026", tur: "Dünyadan · Konferans ve fuar", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Las Vegas",
          aciklama: "Dünyanın en büyük İK teknolojisi fuarı; yeni İK yazılımları ve yapay zekâ ürünleri genellikle burada tanıtılıyor.",
          url: "https://www.hrtechnologyconference.com/press-releases/built-hr-designed-action-hr-tech-2026-set-october-20-22-las-vegas" }
      ]
    },
    {
      no: 1,
      donem: "5–11 Ekim 2026",
      yayin: "11 Ekim 2026",
      sonraki: "18 Ekim Pazar",
      okuma: 6,

      /* 1 · HAFTANIN ANA GELİŞMESİ */
      ana: {
        id: "ana", kategori: "ai-hr", tarih: "1–8 Ekim", tur: "Haftanın konusu", okumaSuresi: 3,
        baslik: "Yapay zekâ ajanları işe alım ve İK yazılımlarında yeni aşamaya geçiyor",
        ozet: "LinkedIn, işe alım uzmanları için geliştirdiği yapay zekâ asistanının yeni sürümünü duyurdu; asistan uzmanın tercihlerini hatırlıyor ve adayların doğrulama bilgilerini öne çıkarıyor. SAP, bordrodan işe başlamaya kadar birçok İK süreci için yapay zekâ asistanlarını bu ay kullanıma açtı ve beceri verisi şirketi TechWolf'u satın alacağını açıkladı. Aynı hafta Gartner, İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ünün tam ya da yüksek düzeyde başarılı olduğunu paylaştı.",
        bolumler: [
          { baslik: "Neler duyuruldu?", maddeler: [
            "LinkedIn (1 Ekim): Hiring Assistant 2, işe alım uzmanının geçmiş tercihlerini hatırlayarak aday öneriyor, adayın pozisyona ne kadar açık olabileceğini tahmin ediyor ve ön eleme için sesli yanıt alabiliyor. LinkedIn'e göre 20 binden fazla şirket bu çözümleri kullanıyor.",
            "SAP (6–7 Ekim): Bordro, İK hizmetleri, eğitim, işe alım, işe başlama ve kariyer gelişimi için yapay zekâ asistanları bu ay kullanıma açıldı. SAP ayrıca çalışanların iş ve beceri verisini çıkaran TechWolf'u satın alacağını duyurdu; satışın yılın son çeyreğinde tamamlanması bekleniyor."
          ]},
          { baslik: "Şirketlerdeki tablo", maddeler: [
            "Gartner (8 Ekim): İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam ya da yüksek düzeyde başarılı. İK liderlerinin %56'sı en büyük engel olarak düşük veri kalitesini gösteriyor.",
            "Gartner (7 Ekim): CHRO ve CIO'ların yalnızca %38'i, yapay zekânın işin geleceğini nasıl etkileyeceği konusunda ortak bir anlayışa sahip."
          ]}
        ],
        not: "Yapay zekâ ajanı: verilen bir işi, örneğin mülakat planlamayı, adım adım kendi başına yürüten yazılım. Asistan ise soruyu yanıtlar ya da öneri sunar; işi insan tamamlar.",
        kapak: { gorsel: "kapak-sayi1.jpg", gorselAciklama: "İşe alım panosunda görevleri taşıyan yapay zekâ ajanlarını anlatan illüstrasyon" },
        kaynaklar: [
          { ad: "LinkedIn · Hiring Assistant 2 duyurusu", url: "https://www.linkedin.com/pulse/introducing-hiring-assistant-2-more-advanced-ffdyf/", tip: "resmi" },
          { ad: "SAP · TechWolf satın alma duyurusu", url: "https://news.sap.com/?p=247980", tip: "resmi" },
          { ad: "Gartner · Londra İK zirvesi, 3. gün", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-symposium-xpo-london-day-3-highlights", tip: "resmi" },
          { ad: "HR Dive · LinkedIn haberi", url: "https://www.hrdive.com/news/sociable-linkedin-updates-its-ai-powered-hiring-bot/831873/", tip: "ikinci" },
          { ad: "Reuters (The Star) · SAP–TechWolf haberi", url: "https://www.thestar.com.my/tech/tech-news/2026/10/06/sap-to-acquire-workforce-data-firm-techwolf", tip: "ikinci" }
        ]
      },

      /* 2 · HAFTALIK GÜNDEM (5–7 haber) */
      haberler: [
        {
          id: "h1", kategori: "ta", tarih: "1 Ekim", tur: "Şirket duyurusu", gecenHafta: true,
          baslik: "LinkedIn, işe alım asistanının yeni sürümünü duyurdu",
          ozet: "Hiring Assistant 2, işe alım uzmanının geçmiş tercihlerini hatırlayarak aday öneriyor, adayın pozisyona ne kadar açık olabileceğini tahmin ediyor ve kimlik ile beceri doğrulamalarını gösteriyor. LinkedIn'e göre asistanın bulduğu adaylarla iletişime geçilme olasılığı geleneksel yöntemlere göre 4 kat daha yüksek.",
          ek: "Yetenek kazanımı uzmanlarının %39'u en büyük sorunlarının, adayın ya da becerilerinin gerçek olup olmadığını bilememek olduğunu söylüyor. Yeni özellikler, asistanı İngilizce kullanan mevcut müşterilere Kasım'dan itibaren ücretsiz olarak açılacak.",
          kaynaklar: [
            { ad: "LinkedIn · Resmî duyuru", url: "https://www.linkedin.com/pulse/introducing-hiring-assistant-2-more-advanced-ffdyf/", tip: "resmi" },
            { ad: "HR Dive · Haber", url: "https://www.hrdive.com/news/sociable-linkedin-updates-its-ai-powered-hiring-bot/831873/", tip: "ikinci" }
          ]
        },
        {
          id: "h2", kategori: "ai-hr", tarih: "6–7 Ekim", tur: "Şirket duyurusu",
          baslik: "SAP, beceri verisi şirketi TechWolf'u satın alıyor ve İK asistanlarını kullanıma açtı",
          ozet: "SAP, şirketlerin mevcut sistemlerinden çalışanların hangi işleri yaptığını ve hangi becerilere sahip olduğunu çıkaran Belçikalı TechWolf'u satın alacağını açıkladı; satışın yılın son çeyreğinde tamamlanması bekleniyor. Bordro, İK hizmetleri, eğitim, işe alım ve işe başlama süreçleri için yapay zekâ asistanları da bu ay kullanıma açıldı.",
          ek: "TechWolf'un müşterileri arasında HSBC, GSK ve Ericsson var. SAP'nin araştırmasına göre yöneticilerin %72'si, yapay zekâ ile dönüşüm yaptığını söyleyen şirketlerin çoğunlukla eski süreçleri otomatikleştirdiğini düşünüyor.",
          kaynaklar: [
            { ad: "SAP · TechWolf satın alma duyurusu", url: "https://news.sap.com/?p=247980", tip: "resmi" },
            { ad: "SAP · İK ürün duyurusu", url: "https://news.sap.com/2026/10/sap-accelerates-autonomous-hcm/", tip: "resmi" },
            { ad: "Reuters (The Star) · Haber", url: "https://www.thestar.com.my/tech/tech-news/2026/10/06/sap-to-acquire-workforce-data-firm-techwolf", tip: "ikinci" }
          ]
        },
        {
          id: "h3", kategori: "ai-hr", tarih: "7–8 Ekim", tur: "Araştırma",
          baslik: "Gartner: İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam başarılı",
          ozet: "Gartner'ın Londra İK zirvesinde paylaştığı verilere göre İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam ya da yüksek düzeyde başarılı. İK liderlerinin %56'sı en büyük engel olarak düşük veri kalitesini gösteriyor.",
          ek: "Gartner'ın 7 Ekim'de açıkladığı ayrı bir ankete göre CHRO ve CIO'ların yalnızca %38'i, yapay zekânın işin geleceğini nasıl etkileyeceği konusunda ortak bir anlayışa sahip.",
          kaynaklar: [
            { ad: "Gartner · Londra İK zirvesi, 3. gün", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-symposium-xpo-london-day-3-highlights", tip: "resmi" },
            { ad: "Gartner · CHRO ve CIO anketi", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-7-gartner-survey-finds-only-38-percent-of-chros-and-cios-share-an-understanding-of-how-ai-impacts-the-future-of-work", tip: "resmi" }
          ]
        },
        {
          id: "h4", kategori: "pa", tarih: "6 Ekim", tur: "Araştırma",
          baslik: "Gallup: Yapay zekânın faydası çalışanlar arasında eşit dağılmıyor",
          ozet: "Gallup'un ABD'de 15.482 çalışanla yaptığı araştırmaya göre çalışanların %28'i yapay zekâyı en az haftada bir kullanıyor, %54'ü hiç kullanmıyor. Düzenli kullanım üniversite mezunlarında %40, diploması olmayanlarda %17; yöneticilerde %37, diğer çalışanlarda %25.",
          ek: "Kullananların %63'ü işini daha hızlı yaptığını söylüyor; %31'i ise işverenin kendisinden daha fazla sorumluluk almasını istediğini belirtiyor. Çalışanların %52'si, yeni teknolojilerin seçiminde istediğinden daha az söz hakkı olduğunu düşünüyor.",
          kaynaklar: [
            { ad: "Gallup · Araştırma", url: "https://news.gallup.com/poll/714602/benefits-work-unevenly-distributed.aspx", tip: "resmi" },
            { ad: "Fox Business · Haber", url: "https://foxbusiness.com/economy/workers-using-ai-seeing-major-benefits-gap-emerging", tip: "ikinci" }
          ]
        },
        {
          id: "h5", kategori: "ex", tarih: "8 Ekim", tur: "Akademik çalışma",
          baslik: "Çalışan memnuniyetinde yöneticiyle ilişki, uzaktan çalışmaktan daha belirleyici",
          ozet: "Araştırmacılar ABD'de 73 binden fazla şirketten yaklaşık 165 bin çalışanın 2020–2023 verisini inceledi. Diğer etkenler hesaba katıldığında uzaktan çalışanların memnuniyet avantajı büyük ölçüde ortadan kalkıyor; memnuniyeti daha çok takdir görmek, yönetime güven, iyi iletişim ve adil ücret belirliyor.",
          ek: "Yöneticiyle iyi ilişki her çalışma modelinde daha yüksek memnuniyetle bağlantılı; bu bağ işyerinde çalışanlarda daha da güçlü. Çalışma Management Science dergisinde yayımlandı; araştırmacılardan Christos Makridis bulguları bu hafta The Conversation'da paylaştı.",
          kaynaklar: [
            { ad: "INFORMS · Çalışmanın duyurusu", url: "https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/Remote-Work-May-Not-Be-What-Makes-Employees-Happy-New-Study-Finds", tip: "resmi" },
            { ad: "The Conversation · Araştırmacının yazısı", url: "https://theconversation.com/why-your-boss-matters-more-than-remote-or-hybrid-work-when-it-comes-to-burnout-and-job-satisfaction-293319", tip: "ikinci" }
          ]
        },
        {
          id: "h6", kategori: "fow", tarih: "1 Ekim", tur: "Şirket verisi", gecenHafta: true,
          baslik: "ABD'de 2026'da işten çıkarmaların en sık gerekçesi yapay zekâ oldu",
          ozet: "Challenger, Gray & Christmas'ın verisine göre ABD'li şirketlerin Ocak–Eylül döneminde açıkladığı 573.195 işten çıkarmanın 120.136'sı yapay zekâ gerekçesiyle yapıldı; bu, yılın en sık gösterilen nedeni. Toplam işten çıkarmalar ise geçen yılın aynı dönemine göre %39 daha az.",
          ek: "Eylül'de açıklanan 43.281 işten çıkarmanın 3.961'i yapay zekâya bağlandı. Şirketlerin yıl başından bu yana açıkladığı işe alım planları %3 artışla 210.612'ye ulaştı.",
          not: "Bu rakamlar şirketlerin açıkladığı planları gösterir; gerçekleşen işten çıkarma sayısı farklı olabilir.",
          kaynaklar: [
            { ad: "Challenger · Eylül raporu (PDF)", url: "https://www.challengergray.com/wp-content/uploads/2026/10/Challenger-Report-September-2026.pdf", tip: "resmi" },
            { ad: "Fast Company · Haber", url: "https://www.fastcompany.com/91616653/tech-layoffs-165925-jobs-slashed-2026-september-cuts-rise", tip: "ikinci" }
          ]
        }
      ],

      /* 3 · SEKTÖREL GÖZLEM (editoryal yorum, haber değil) */
      sinyal: {
        baslik: "Asistandan ajana",
        ingilizce: "From Assist → Act",
        metin: "İK yazılımlarında yapay zekânın rolü, soruları yanıtlayan bir asistan olmaktan işi adım adım tamamlayan bir ajana doğru kayıyor. Son iki haftada LinkedIn işe alımda, SAP bordrodan işe başlamaya kadar birçok süreçte bu yönde ürünler duyurdu. Gartner'ın verisi ise şirketlerdeki uygulamaların duyuruların gerisinde kaldığını ve sonucu en çok veri kalitesinin belirlediğini gösteriyor.",
        once: { ad: "Asistan", metin: "Soruyu yanıtlar, öneri sunar; işi insan tamamlar." },
        sonra: { ad: "Ajan", metin: "İşi başlatır, adımları yürütür; gerektiğinde insana danışır." },
        dayanak: ["h1", "h2", "h3"]
      },

      /* 4 · SAYILARLA GÜNDEM */
      veri: {
        id: "veri", kategori: "pa", tarih: "5 Ekim", tur: "Araştırma",
        deger: "%40",
        baslik: "Workday Küresel İşgücü Raporu: Yapay zekâ işleri azaltmaktan çok değiştiriyor",
        metin: "İş liderlerinin %40'ı yapay zekâdan mevcut çalışanlarla daha fazla verim almayı bekliyor; çalışan sayısını azaltmayı bekleyenler %28.",
        karsilastirma: [
          { etiket: "Mevcut çalışanlarla daha fazla verim bekleyen liderler", deger: 40 },
          { etiket: "Çalışan sayısını azaltmayı bekleyen liderler", deger: 28 }
        ],
        orneklem: "6.001 çalışan ve yöneticiyle yapılan küresel anket",
        ozet: "Workday'in yazılımını kullanan şirketlerin anonim verisine ve 6.001 çalışan ile yöneticiyle yapılan ankete dayanan rapordan öne çıkanlar:",
        maddeler: [
          "İş liderlerinin %40'ı yapay zekâdan mevcut çalışanlarla daha fazla verim almayı bekliyor; çalışan sayısını azaltmayı bekleyenler %28.",
          "İşverenlerin %57'sinde şirket içi pozisyon değişiklikleri geçen yıla göre azaldı; terfi oranları yerinde saydı.",
          "Çalışanların %79'u hangi becerilere ihtiyaç duyduğunu biliyor, ama yalnızca %66'sı şirketinin bu becerileri geliştirmesine destek olduğunu söylüyor.",
          "Doldurulan her pozisyona başvuran kişi sayısı bir yılda 58'den 69'a çıktı; iş arayanların %84'ü başvururken yapay zekâ kullanıyor.",
          "Temel yapay zekâ becerilerine talep Ocak'taki zirveden sonra %25 düştü; yapay zekâ aracı geliştirme ve iş akışı otomasyonu gibi uygulamalı becerilere talep %51 arttı."
        ],
        kaynaklar: [
          { ad: "Workday · Basın bülteni", url: "https://newsroom.workday.com/2026-10-05-Workday-Global-Workforce-Report-AI-Is-Rewriting-Jobs-More-Than-Its-Cutting-Them", tip: "resmi" },
          { ad: "Vision Monday · Haber", url: "https://visionmonday.com/business/research-and-stats/article/ai-is-reshaping-jobs-but-workers-say-support-is-lacking-according-to-new-report", tip: "ikinci" }
        ]
      },

      /* 5 · YAKLAŞAN İK ETKİNLİKLERİ (tarihi geçenler sitede kendiliğinden gizlenir) */
      etkinlikler: [
        { ad: "Workday Rising", tur: "Konferans", baslangic: "2026-10-12", bitis: "2026-10-15", yer: "Las Vegas",
          aciklama: "Workday'in duyurusuna göre programın odağında İK ve finans için yapay zekâ ajanları var.",
          url: "https://newsroom.workday.com/2026-07-21-Workday-Announces-Rising-2026-Where-Agentic-HR-and-Agentic-Finance-Take-Center-Stage-October-12-15-in-Las-Vegas" },
        { ad: "HR Tech 2026", tur: "Konferans ve fuar", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Las Vegas",
          aciklama: "Sektörün en büyük İK teknolojisi fuarı.",
          url: "https://www.hrtechnologyconference.com/press-releases/built-hr-designed-action-hr-tech-2026-set-october-20-22-las-vegas" },
        { ad: "UNLEASH World", tur: "Konferans", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Paris",
          aciklama: "Avrupa'nın büyük İK etkinliklerinden; 140 ülkeden yaklaşık 8.500 katılımcı bekleniyor.",
          url: "https://www.unleash.ai/events/unleash-paris" }
      ]
    }
  ]
};
