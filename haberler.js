/*
  HAFTALIK İK VE AI GÜNDEMİ — HABER DOSYASI
  Her hafta sadece bu dosya değişir.

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
  aciklama: "İK teknolojileri ve yapay zekâ dünyasında bu hafta bilmeniz gerekenler.",
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

  siradaki: { no: 2, donem: "12–18 Ekim 2026", yayin: "19 Ekim Pazartesi" },

  sayilar: [
    {
      no: 1,
      donem: "5–11 Ekim 2026",
      yayin: "12 Ekim 2026",
      sonraki: "19 Ekim Pazartesi",
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
