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
    etkinlikler  Yaklaşan İK etkinlikleri                                          (TAKVİM)

  Konu anahtarları: "ai-hr" AI in HR · "ta" Talent Acquisition · "pa" People Analytics
                    "ex" Employee Experience · "fow" Future of Work · "rapor" Rapor
  Kaynak tipi (tip): "resmi" = şirketin / kurumun kendi duyurusu, "ikinci" = bağımsız haber kaynağı
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

  yeni: [],

  siradaki: { no: 3, donem: "19–25 Ekim 2026", yayin: "25 Ekim Pazar" },

  sayilar: [
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
        { ad: "HR Tech 2026", tur: "Konferans ve fuar", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Las Vegas",
          aciklama: "Organizatöre göre yüzlerce teknolojinin sergilendiği, dünyanın en büyük İK çözümleri fuarı.",
          url: "https://www.hrtechnologyconference.com/press-releases/built-hr-designed-action-hr-tech-2026-set-october-20-22-las-vegas" },
        { ad: "UNLEASH World", tur: "Konferans", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Paris",
          aciklama: "Avrupa'nın büyük İK etkinliklerinden; 140 ülkeden yaklaşık 8.500 katılımcı bekleniyor.",
          url: "https://www.prnewswire.com/news-releases/unleash-2026-hits-record-growth-in-paris-as-ai-triggers-major-investments-in-work-and-hr-302907638.html" },
        { ad: "Gartner HR Symposium/Xpo", tur: "Konferans", baslangic: "2026-10-26", bitis: "2026-10-28", yer: "Florida (Orlando bölgesi)",
          aciklama: "CHRO ve İK yöneticilerine yönelik; odakta insan ve yapay zekânın birlikte çalıştığı işgücü ve işlerin yeniden tasarımı var.",
          url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-24-gartner-announces-gartner-hr-symposium-xpo-conference-2026-orlando" },
        { ad: "Gartner HR Symposium/Xpo", tur: "Konferans", baslangic: "2026-11-16", bitis: "2026-11-17", yer: "Sidney",
          aciklama: "Gartner'ın İK zirvesinin Asya-Pasifik ayağı.",
          url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-06-gartner-announces-gartner-hr-symposium-2026-sydney" }
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
