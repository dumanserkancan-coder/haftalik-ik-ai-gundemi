/*
  YAPAY ZEKÂ VE İK HAFTALIK BÜLTENİ — HABER DOSYASI
  Her hafta sadece bu dosya değişir. Yeni sayıyı "sayilar" listesinin EN ÜSTÜNE ekle.
  Eski sayılar aşağıda kalır ve sitede "Sayılar" bölümünden açılabilir.
  Kategori anahtarları: "ik-yz" (İK'da Yapay Zekâ), "analytics" (HR Analytics), "yz" (Yapay Zekâ Gelişmeleri)
  Kaynak türleri: "Araştırma", "Anket", "Şirket verisi", "Şirket duyurusu"
*/
window.BULTEN = {
  ad: "Yapay Zekâ ve İK Haftalık Bülteni",
  hazirlayan: "Serkan",

  kategoriler: {
    "ik-yz":     { ad: "İK'da Yapay Zekâ",       ikon: "ik-ai",     aciklama: "Yapay zekânın işe alım, performans ve İK süreçlerine etkisi" },
    "analytics": { ad: "HR Analytics",           ikon: "analytics", aciklama: "Veriye dayalı İK araştırmaları ve işgücü göstergeleri" },
    "yz":        { ad: "Yapay Zekâ Gelişmeleri", ikon: "ai-net",    aciklama: "Teknoloji dünyasından iş hayatını etkileyecek gelişmeler" }
  },

  sayilar: [
    {
      no: 1,
      donem: "5–11 Ekim 2026",
      sonraki: "19 Ekim Pazartesi",
      okuma: 5,

      ozet: [
        { metin: "Gartner: İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam başarılı.", hedef: "h1" },
        { metin: "Workday: İş liderlerinin %40'ı yapay zekâdan çalışan azaltmaktan çok daha fazla verim bekliyor.", hedef: "h5" },
        { metin: "CHRO'ların %79'u yöneticilerin aşırı yük altında olduğunu düşünüyor.", hedef: "h6" },
        { metin: "Sesli yapay zekâyla ön görüşme yapılan adaylar %12 daha fazla iş teklifi aldı.", hedef: "h4" },
        { metin: "ABD'de halkın %64'ü yapay zekânın çok hızlı geliştiğini düşünüyor.", hedef: "h8" }
      ],

      haberler: [
        {
          id: "h1", kategori: "ik-yz", tarih: "8 Ekim", tur: "Araştırma", oneCikan: true,
          baslik: "İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam başarılı",
          ozet: "Gartner'ın Londra İK zirvesinde paylaştığı verilere göre İK'daki yapay zekâ ajanı projelerinin yalnızca %14'ü tam ya da yüksek düzeyde başarılı. İK liderlerinin %56'sı en büyük engel olarak düşük veri kalitesini gösteriyor. Gartner'ın CHRO anketine göre yönetim ekiplerinin yalnızca %24'ü, ajanların yaptığı işten kimin sorumlu olacağı konusunda uzlaşmış.",
          not: "Yapay zekâ ajanı: verilen bir işi, örneğin mülakat planlamayı, adım adım kendi başına yürüten yazılım.",
          kapak: { baslik: "Yapay zekâ ajanları", alt: "Gartner · Londra İK zirvesi" },
          kaynaklar: [
            { ad: "gartner.com", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-symposium-xpo-london-day-3-highlights" }
          ]
        },
        {
          id: "h2", kategori: "ik-yz", tarih: "8 Ekim", tur: "Şirket duyurusu",
          baslik: "Gartner, İK'daki yapay zekâ ajanları için ilk pazar raporunu yayımladı",
          ozet: "Eylül'de yayımlanan rapor, İK yazılımı sağlayıcılarının yapay zekâ ajanı ürünlerini değerlendiriyor; Workday raporda yer aldığını 8 Ekim'de duyurdu. Böyle bir raporun çıkması, ajanların İK yazılımlarında ayrı bir ürün kategorisi hâline geldiğini gösteriyor.",
          kaynaklar: [
            { ad: "prnewswire.com", url: "https://prnewswire.com/news-releases/workday-named-as-a-market-shaper-in-the-2026-gartner-emerging-market-quadrant-for-ai-agents-in-human-resources--established-vendors-302902835.html" }
          ]
        },
        {
          id: "h3", kategori: "ik-yz", tarih: "6 Ekim", tur: "Araştırma",
          baslik: "Gartner, CHRO'ların 2027 önceliklerini açıkladı",
          ozet: "Temmuz'da 297 CHRO ile yapılan ankete dayanan dört öncelik:",
          maddeler: [
            "İK'da başarı, verimlilik kadar değere ulaşma hızıyla ölçülecek",
            "Yapay zekâ hangi işi üstlenirse üstlensin, sorumluluk insanda kalmalı",
            "İşin yükünü az sayıda kritik beceri taşıyor",
            "Liderlik rolü sürekli değişime göre tasarlanmamış"
          ],
          ek: "CHRO'ların %67'si çalışan verimliliğine yönelik beklentinin arttığını söylüyor.",
          kaynaklar: [
            { ad: "gartner.com", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-6-gartner-says-chros-top-priorities-for-2027-focus-on-meeting-ceos-expectations-while-minimizing-organizational-risk" }
          ]
        },
        {
          id: "h4", kategori: "ik-yz", tarih: "23 Eylül", tur: "Şirket verisi",
          baslik: "Sesli yapay zekâ ile ön görüşme yapılan adaylar %12 daha fazla iş teklifi aldı",
          ozet: "Textio'nun yaklaşık 70.000 başvuruyu kapsayan deneyinde, ilk görüşmesini sesli yapay zekâ ile yapan adayların 30 gün sonra işte kalma oranı da %18 daha yüksek çıktı. İşe alım kararlarının tamamını insanlar verdi; fark, yapay zekânın görüşme rehberine daha tutarlı uymasından geliyor.",
          kaynaklar: [
            { ad: "techintelpro.com", url: "https://techintelpro.com/news/hr/talent-acquisition/lavalier-launches-ai-interviewer-and-integrity-signals" }
          ]
        },
        {
          id: "h5", kategori: "analytics", tarih: "6 Ekim", tur: "Şirket verisi",
          baslik: "Workday raporu: Yapay zekâ işleri azaltmaktan çok dönüştürüyor",
          ozet: "Workday'in Ekim 2026 küresel işgücü raporuna göre iş liderlerinin %40'ı yapay zekânın mevcut çalışanlardan daha fazla değer almayı sağlayacağını, %28'i ise çalışan sayısını azaltacağını bekliyor. İşverenlerin %57'sinde şirket içi rol değişiklikleri azaldı; doldurulan pozisyon başına başvuru sayısı 58'den 69'a çıktı.",
          ek: "İş arayanların %84'ü iş ararken yapay zekâ kullanıyor.",
          kaynaklar: [
            { ad: "peoplemattersglobal.com", url: "https://sea.peoplemattersglobal.com/news/ai-and-emerging-tech/ai-is-rewriting-jobs-more-than-cutting-them-workday-report-52539" }
          ]
        },
        {
          id: "h6", kategori: "analytics", tarih: "8 Ekim", tur: "Araştırma",
          baslik: "CHRO'ların %79'u yöneticilerin aşırı yük altında olduğunu düşünüyor",
          ozet: "Gartner'a göre her dört yöneticiden biri, seçme şansı olsa yöneticiliği bırakırdı. Yönetici başına düşen ekip büyüklüğünün beş yılda %18,6 artması bekleniyor. Gartner, yapay zekâ gerekçesiyle orta kademe yöneticileri azaltan kuruluşların %75'inin 2028'e kadar bu rollerin en az yarısını yeniden dolduracağını öngörüyor.",
          kaynaklar: [
            { ad: "gartner.com", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-symposium-xpo-london-day-3-highlights" }
          ]
        },
        {
          id: "h7", kategori: "analytics", tarih: "8 Ekim", tur: "Araştırma",
          baslik: "Çalışanların yalnızca %38'i performans yönetiminden fayda görüyor",
          ozet: "Gartner'a göre çalışanların yalnızca %38'i performans yönetiminin işlerinde daha iyi olmalarına yardımcı olduğunu söylüyor. Çalışanların yarısı performansın ücretine yansıdığına inanıyor; yaklaşık üçte biri performansını yöneticisiyle en az ayda bir konuşuyor. CHRO'ların %49'u mevcut sürecin iyi ve zayıf performansı ayırt edebildiğini düşünüyor.",
          kaynaklar: [
            { ad: "gartner.com", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-8-gartner-hr-symposium-xpo-london-day-3-highlights" }
          ]
        },
        {
          id: "h8", kategori: "yz", tarih: "8 Ekim", tur: "Anket",
          baslik: "ABD'de halkın %64'ü yapay zekânın çok hızlı geliştiğini düşünüyor",
          ozet: "AP-NORC'un 2.140 yetişkinle yaptığı ankette katılımcıların %64'ü yapay zekânın çok hızlı, %27'si makul hızda geliştiğini söyledi. Yaklaşık 10 kişiden 8'i, yapay zekânın insan kontrolünde kalmasını hükümetin önemli bir önceliği olarak görüyor; çalışanların korunması da benzer ölçüde öncelikli bulunuyor.",
          kaynaklar: [
            { ad: "AP (ksat.com)", url: "https://www.ksat.com/news/politics/2026/10/08/most-americans-think-artificial-intelligence-is-developing-too-fast-a-new-ap-norc-poll-finds/" }
          ]
        },
        {
          id: "h9", kategori: "yz", tarih: "7 Ekim", tur: "Şirket duyurusu",
          baslik: "Meta ve Sierra, yapay zekâ asistanları için ortak bir standart duyurdu",
          ozet: "Personal Agent Protocol adlı standart, kişisel yapay zekâ asistanlarının şirketlerle nasıl etkileşime gireceğine dair ortak kurallar getiriyor. Şirketler asistanı tanıyıp neye erişebileceğini belirleyebiliyor, kullanıcılar da asistanın kendi adına ne yapabileceğine karar veriyor. Walmart, Shopify ve Stripe destekleyenler arasında; ilk sürümün Ekim sonunda yayımlanması bekleniyor.",
          kaynaklar: [
            { ad: "channelinsider.com", url: "https://www.channelinsider.com/ai/news-meta-walmart-shopify-stripe-ai-agent-standard/" }
          ]
        },
        {
          id: "h10", kategori: "yz", tarih: "6–8 Ekim", tur: "Araştırma",
          baslik: "Yapay zekâ harcamaları hızla artıyor, şirketlerin %40'ı bütçeyi aşmış",
          ozet: "Gartner, dünya genelindeki yapay zekâ harcamalarının 2025'teki 1,79 trilyon dolardan bu yıl 2,67 trilyon dolara çıkmasını bekliyor. Şirketlerin yaklaşık %40'ı yapay zekâ bütçesini aşmış durumda; yapay zekâdan elde ettiği kazancı yeniliğe yönlendiren kuruluşların gelir hedeflerini aşma ihtimali ise neredeyse dört kat.",
          kaynaklar: [
            { ad: "gartner.com", url: "https://www.gartner.com/en/newsroom/press-releases/2026-10-6-gartner-hr-symposium-xpo-london-day-1-highlights" },
            { ad: "hrgrapevine.com", url: "https://hrgrapevine.com/content/article/2026-10-08-two-people-analytics-leaders-on-getting-real-value-from-ai" }
          ]
        }
      ],

      /* Etkinlik tarihleri YIL-AY-GÜN biçiminde yazılır; sitede kalan gün sayısı buna göre hesaplanır */
      etkinlikler: [
        { ad: "Workday Rising", tur: "Konferans", baslangic: "2026-10-12", bitis: "2026-10-15", yer: "Las Vegas",
          aciklama: "Workday'in yapay zekâ ajanlarını canlı tanıtması ve ürün yol haritasını paylaşması bekleniyor.",
          url: "https://newsroom.workday.com/2026-07-21-Workday-Announces-Rising-2026-Where-Agentic-HR-and-Agentic-Finance-Take-Center-Stage-October-12-15-in-Las-Vegas" },
        { ad: "HR Tech 2026", tur: "Konferans ve fuar", baslangic: "2026-10-20", bitis: "2026-10-22", yer: "Las Vegas",
          aciklama: "Sektörün en büyük İK teknolojisi fuarı; bu yılın odağı yapay zekâda denemeden gerçek sonuca geçiş.",
          url: "https://www.hrtechnologyconference.com/press-releases/built-hr-designed-action-hr-tech-2026-set-october-20-22-las-vegas" }
      ]
    }
  ]
};
