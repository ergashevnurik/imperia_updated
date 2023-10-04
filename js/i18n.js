/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

 var demoJson = {
 	"header": {
     "call": {
       "ru": '<i class="fa fa-user"></i> Связаться',
       "uz": '<i class="fa fa-user"></i> Aloqaga chiqish',
       "en": '<i class="fa fa-user"></i> Call',
       "ch": '<i class="fa fa-user"></i> 接觸',
       "ir": "تماس",
       "ar": "اتصل",
     },
     "hero": {
       "ru": 'Главная страница',
       "uz": 'Assosiy saxifa',
       "en": 'Home',
       "ch": '首頁',
      "ir": "صفحه اصلی",
      "ar": "الصفحة الرئيسية"
     },
     "shop": {
       "ru": 'Каталог',
       "uz": 'Katalog',
       "en": 'Catalogue',
       "ch": '目錄',
      "ir": "کاتالوگ",
      "ar": "كتالوج",
     },
     "about": {
       "ru": 'О нас',
       "uz": 'Bizning haqimizda',
       "en": 'About',
       "ch": '關於我們',
      "ir": "درباره ما",
      "ar": "عنا"
     },
     "contact": {
       "ru": 'Контакты',
       "uz": 'Raqamlarimiz',
       "en": 'Contacts',
       "ch": '聯絡方式',
      "ir": "تماس",
      "ar": "جهات الاتصال"
     },
     "service": {
       "ru": 'Услуги',
       "uz": 'Hizmatlar',
       "en": 'Services',
       "ch": '服務',
      "ir": "خدمات",
      "ar": "خدمات"
     }
   },

   "hero": {
     "all_categories": {
       "ru": "Все категории",
       "en": "All categories",
       "uz": "Barcha toifalar",
       "ch": "所有類別",
      "ir": "همه دسته بندی ها",
      "ar": "جميع الفئات"
     },
     "all_products": {
       "ru": "Все товары",
       "en": "All goods",
       "uz": "Barcha tovarlar",
       "ch": "所有商品",
      "ir": "همه کالاها",
      "ar": "جميع السلع"
     },
     "search": {
       "ru": "ПОИСК",
       "en": "SEARCH",
       "uz": "QIDIRMOQ",
       "ch": "搜尋",
      "ir": "جستجو",
      "ar": "البحث"
     },
     "title": {
       "ru": "Мировой ассортимент на вашем столе.",
       "en": "A global assortment on your table.",
       "uz": "Sizning stolingizda global assortiment.",
       "ch": "您餐桌上的全球品種。",
      "ir": "مجموعه جهانی بر روی میز شما",
      "ar": "تشكيلة عالمية على طاولتك"
     },
     "beverage": {
       "ru": "Напитки",
       "en": "Beverages",
       "uz": "Ichimliklar",
       "ch": "飲料",
      "ir": "نوشیدنی ها",
      "ar": "المشروبات"
     },
     "halal": {
       "ru": "Халяльные <br />Продукты",
       "en": "Halal <br />Products",
       "uz": "Halol <br />Mahsulotlar",
       "ch": "清真<br />產品",
      "ir": "حلال <br />محصولات",
      "ar": "حلال < br / > المنتجات"
     },
     "delivery": {
       "ru": "Возможен бесплатный <br /> самовывоз и доставка",
       "en": "Free <br />pickup and delivery available",
       "uz": "Bepul <br />olib olish va yetkazib berish mavjud",
       "ch": "<br />提供免費接送服務",
      "ir": "رایگان <br /> خود تحویل و تحویل امکان پذیر است",
      "ar": "< br / > التسليم الذاتي والتسليم ممكن"
     },
     "buy": {
       "ru": "КУПИТЬ СЕЙЧАС",
       "en": "BUY NOW",
       "uz": "HOZIR XARID QILISH",
       "ch": "立即購買",
      "ir": "همین الان خرید کنید",
      "ar": "اشتري الآن"
     },
     "must_you": {
       "ru": "Что вам нужно?",
       "en": "What you need?",
       "uz": "Sizga nima kerak?",
       "ch": "你需要什麼",
      "ir": "چه چیزی نیاز دارید?",
      "ar": "ماذا تحتاج?"
     },
   },

 	
   "categories": {
     "fresh_fruits": {
       "ru": "Свежие фрукты",
       "en": "Fresh fruits",
       "uz": "Yangi uzilgan mevalar",
       "ch": "新鮮水果",
       "ar": "فواكه طازجة",
       "ir": "میوه تازه",
     },
     "dry_fruit": {
       "ru": "Сухофрукт",
       "en": "Dried fruit",
       "uz": "Quritilgan mevalar",
       "ch": "乾果",
       "ar": "فاكهة مجففة",
       "ir": "خشکبار",
     },
     "all_fruit": {
       "ru": "Овощи",
       "en": "Vegetables",
       "uz": "Sabzavotlar",
       "ch": "蔬菜",
       "ar": "خضروات",
       "ir": "سبزیجات",
     },
     "drink_bear": {
       "ru": "Напитки",
       "en": "Beverages",
       "uz": "Ichimliklar",
       "ch": "飲料",
       "ar": "المشروبات",
       "ir": "نوشیدنی ها",
     },
     "meat_good": {
       "ru": "Мясо",
       "en": "Meat",
       "uz": "Go'sht",
       "ch": "肉",
       "ar": "لحمة",
       "ir": "گوشت",
     },

   },

   "about": {
     "aboutTitle": {
       "ru": "О нас",
       "en": "About Us",
       "uz": "Biz haqimizda",
       "ch": "關於我們",
       "ar": "معلومات عنا",
       "ir": "درباره ما",
     },
     "history": {
       "ru": "История нашей компании",
       "en": "History of our company",
       "uz": "Kompaniyamiz tarixi",
       "ch": "我們公司的歷史",
       "ar": "تاريخ شركتنا",
       "ir": "تاریخچه شرکت ما",
     },
     "btn": {
       "ru": "Imperia была основана более двадцати лет назад с одной целью - предоставить качественную халяльную продукцию питания на мировом рынке. С тех пор мы уверенно развиваемся, сотрудничая с проверенными производителями и поддерживая самые высокие стандарты качества",
       "en": "Imperia was founded over twenty years ago with one goal - to provide quality halal food products to the global market. Since then, we have been developing confidently, collaborating with trusted manufacturers and maintaining the highest quality standards.",
       "uz": "Imperia kompaniyasi bundan yigirma yil muqaddam bir maqsad — jahon bozoriga sifatli halol oziq-ovqat mahsulotlarini yetkazib berish maqsadida tashkil etilgan. O'shandan beri biz ishonchli ishlab chiqaruvchilar bilan hamkorlik qilib, eng yuqori sifat standartlarini saqlab, ishonchli rivojlanmoqdamiz.",
       "ch": "Imperia 成立於二十多年前，目標只有一個：向全球市場提供優質的清真食品。從那時起，我們一直充滿信心地發展，與值得信賴的製造商合作，並保持最高的品質標準。",
       "ar": "تأسست شركة إمبيريا منذ أكثر من عشرين عامًا بهدف واحد وهو توفير منتجات غذائية حلال عالية الجودة للسوق العالمية. منذ ذلك الحين، قمنا بالتطوير بثقة، والتعاون مع الشركات المصنعة الموثوقة والحفاظ على أعلى معايير الجودة.",
       "ir": "بیش از بیست سال پیش با یک هدف تاسیس شد - برای ارائه محصولات غذایی حلال با کیفیت بالا در بازار جهانی. از آن زمان، ما به طور پیوسته در حال توسعه، همکاری با تولید کنندگان اثبات شده و حفظ بالاترین استانداردهای کیفیت است",
     },
     "learn_more": {
       "ru": "Узнать поближе",
       "en": "Find out more",
       "uz": "Batafsil ma'lumot oling",
       "ch": "了解更多",
       "ar": "اكتشف المزيد",
       "ir": "نزدیک تر شدن",
     },
   },



   "footer": {
     "location": {
       "ru": "Адрес 100115: Чиланзар - 17, Бунедкор проспект, Шох кучаси, 29 дом",
       "en": "Address 100115: Chilanzar - 17, Bunyodkor Avenue, Shokh Kuchasi, 29 building",
       "uz": "Manzil 100115: Chilonzor - 17, Bunyodkor shoh ko'chasi, Shox ko'chasi, 29-uy",
       "ch": "地址 100115：Chilanzar - 17, Bunyodkor Avenue, Shokh Kuchasi, 29 樓",
       "ar": "العنوان 100115: تشيلانزار - 17، شارع بونيودكور، شوك كوتشاسي، مبنى 29",
       "ir": "آدرس 100115: چیلانزار - 17 ، Bunedkor Prospekt، Shoh kuchasi، 29 خانه",
     },
     "number": {
       "ru": "Телефон: +998 33 622-25-25",
       "en": "Phone: +998 33 622-25-25",
       "uz": "Telefon: +998 33 622-25-25",
       "ch": "電話：+998 33 622-25-25",
       "ar": "الهاتف: +998 33 622-25-25",
       "ir": "تلفن: +998 33 622-25-25",
     },
     "email": {
       "ru": "Электронная почта info@imperiasg.uz:",
       "en": "Email: info@imperiasg.uz",
       "uz": "Elektron pochta: info@imperiasg.uz",
       "ch": "電子郵件：info@imperiasg.uz",
       "ar": "البريد الإلكتروني: info@Imperiasg.uz",
       "ir": "ایمیل: info@imperiasg.uz",
     },
     "help_link": {
       "ru": "Полезные ссылки",
       "en": "useful links",
       "uz": "foydali havolalar",
       "ch": "有用的連結",
       "ar": "روابط مفيدة",
       "ir": "لینک های مفید",
     },
     "follow_me": {
       "ru": "Подпишитесь на нашу рассылку прямо сейчас",
       "en": "Subscribe to our newsletter now",
       "uz": "Bizning yangiliklar byulletenimizga hozir obuna bo'ling",
       "ch": "立即訂閱我們的電子報",
       "ar": "إشترك فى صحيفتنا الإخبارية الآن",
       "ir": "همین حالا در خبرنامه ما عضو شوید",
     },
     "secial_email": {
       "ru": "Получайте по электронной почте обновления о наших последних магазинах и специальных предложениях.",
       "en": "Receive email updates about our latest stores and special offers",
       "uz": "Eng so'nggi do'konlarimiz va maxsus takliflarimiz haqida elektron pochta xabarlarini oling",
       "ch": "接收有關我們最新商店和特別優惠的電子郵件更新",
       "ar": "احصل على تحديثات عبر البريد الإلكتروني حول أحدث متاجرنا وعروضنا الخاصة",
       "ir": "دریافت به روز رسانی ایمیل در مورد آخرین فروشگاه های ما و پیشنهادات ویژه",
     },
   "your_email": {
       "ru": "Введите свою почту",
       "en": "Enter your email",
       "uz": "Elektron pochtangizni kiriting",
       "ch": "輸入你的電子郵件信箱",
       "ar": "أدخل بريدك الإلكتروني",
       "ir": "پست خود را وارد کنید",
   },
   "following": {
       "ru": "Подписаться",
       "en": "Subscribe",
       "uz": "Obuna boʻling",
       "ch": "訂閱",
       "ar": "يشترك",
       "ir": "اشتراک در",
   }
 },

   "featured": {
    "section_title": {
       "ru": "Рекомендуемый продукт",
       "en": "Recommended Product",
       "uz": "Tavsiya etilgan mahsulot",
       "ch": "推薦產品",
       "ir": "محصول توصیه شده",
       "ar": "المنتج الموصى به"
     },
     "active": {
       "ru": "Все",
       "en": "All",
       "uz": "Hammasi",
       "ch": "全部",
       "ir": "همه",
       "ar": "الجميع"
     },
     "beverage": {
       "ru": "Напитки",
       "en": "Beverages",
       "uz": "Ichimliklar",
       "ch": "飲料",
       "ir": "نوشیدنی ها",
       "ar": "المشروبات"
     },
     "chicken": {
       "ru": "Куринное мясо",
       "en": "Chicken meat",
       "uz": "Tovuq go'shti",
       "ch": "雞肉",
       "ir": "گوشت مرغ",
       "ar": "لحم دجاج"
     },
     "fish": {
       "ru": "Рыба",
       "en": "Fish",
       "uz": "Baliq",
       "ch": "魚",
       "ir": "ماهی",
       "ar": "سمكة"
     },
     "oil": {
       "ru": "Растительное Масло",
       "en": "Oil",
       "uz": "O'simlik moyi",
       "ch": "植物油",
       "ir": "روغن گیاهی",
       "ar": "زيت نباتي"
     }
  },
  "latest_product": {
     "last": {
       "ru": "Последние продукты",
       "en": "Latest Products",
       "uz": "Eng so'nggi mahsulotlar",
       "ir": "آخرین محصولات",
       "ar": "أحدث المنتجات",
       "ch": "最新產品"
     },
     "top":{
       "ru": "Топ рейтинги",
       "en": "Top ratings",
       "uz": "Yuqori reytinglar",
       "ir": "رتبه های برتر",
       "ar": "أعلى التقييمات",
       "ch": "最高收視率",

     },
     "obzor": {
       "ru": "Обзор продуктов",
       "en": "Product overview",
       "uz": "Mahsulotga umumiy nuqtai",
       "ir": "نمای کلی محصول",
       "ar": "نظرة عامة على المنتج",
       "ch": "產品概述",

     },
     

   },
   "blog": {
   	"title": {
   		"ru": "Из блога",
   		"en": "From the blog",
   		"uz": "Blogdan",
   		"ir": "از وبلاگ",
   		"ar": "من المدونة",
   		"ch": "來自部落格"
   	}
   },






	"demo": {
		"navbartopFirst": {
			"ru": "Электронная зона продажи",
			"en": "Electronic sales area",
			"uz": "Elektron savdo maydoni"
		},
		"navbartopSecond": {
			"ru": "сантехнической продукции",
			"en": "plumbing products",
			"uz": "sanitariya-texnik vositalar"
		},
		"navbaraddressFirst": {
			"ru": "Ориентир. Новый ТАШМИ.",
			"en": "Reference point. New TASHMI.",
			"uz": "Malumot nuqtasi. Yangi TOSHMI."
		},
		"navbaraddressSecond": {
			"ru": "Рядом с Олтин Тепа",
			"en": "Close to Oltin Tepa",
			"uz": "Oltin tepaga yaqin"
		},
		"navbarphone": {
			"ru": "Мы уже работаем, звоните:",
			"en": "We are already working, call:",
			"uz": "Biz allaqachon ishlayapmiz, qo'ng'iroq qiling:"
		},
		"hero": {
			"ru": "Kingplast представляет сантехнику для дома и офиса. Также мы предлагаем качество и низкие цены. Номер один в сантехнических услугах и продаже продукции",
			"en": "Kingplast presents plumbing for home and office. We also offer quality and low prices. Number one in plumbing services and product sales",
			"uz": "Kingplast uy va ofis uchun sanitariya-tesisat taqdim etadi. Shuningdek, biz sifatli va arzon narxlarni taklif etamiz. Santexnika xizmatlari va mahsulotlarni sotishda birinchi o'rinda turadi"
		},
		"startBtn": {
			"ru": "Начать",
			"en": "Get Started",
			"uz": "Boshlash"
		},
		"about": {
			"heading": {
				"ru": "Коротко о компании KINGPLAST",
				"en": "Briefly about KINGPLAST",
				"uz": "KINGPLAST haqida qisqacha"
			},
			"para": {
				"ru": "Наша компания начала собственное продвижение в 2016 году и с этого момента мы достигли многих целей и задач.",
				"en": "Our company started its own promotion in 2016 and since then we have achieved many goals and objectives.",
				"uz": "Kompaniyamiz 2016 yilda o'z reklamasini boshladi va o'shandan beri biz ko'plab maqsad va vazifalarga erishdik."
			},
			"firstSubHeading": {
				"ru": "Искусство производства",
				"en": "The art of production",
				"uz": "Ishlab chiqarish san'ati"
			},
			"firstSubPara": {
				"ru": "Продукты, которые мы моделируем и производим, имеют высокое качество",
				"en": "The products we design and manufacture are of high quality.",
				"uz": "Biz ishlab chiqarayotgan va ishlab chiqarayotgan mahsulotlarimiz yuqori sifatga ega."
			},
			"secondSubHeading": {
				"ru": "Хороший выбор",
				"en": "A good choice",
				"uz": "Yaxshi tanlov"
			},
			"secondSubPara": {
				"ru": "С 2016 года мы не получили ни одного плохого отзыва от наших постоянных клиентов.",
				"en": "Since 2016, we have not received any bad feedback from our regular customers.",
				"uz": "2016 yildan beri biz doimiy mijozlarimizdan yomon fikrlar olmadik."
			},
			"thirdSubHeading": {
				"ru": "Яркость и четкость",
				"en": "Brightness and clarity",
				"uz": "Yorqinlik va ravshanlik"
			},
			"thirdSubPara": {
				"ru": "Мы можем гарантировать, что наш продукт будет соответствовать вашему дому и вашим потребностям.",
				"en": "We can guarantee that our product will fit your home and your needs.",
				"uz": "Mahsulotimiz sizning uyingizga va ehtiyojlaringizga mos kelishiga kafolat bera olamiz."
			}
		},
		"product": {
			"heading": {
				"ru": "Наши продукты",
				"en": "Our products",
				"uz": "Bizning mahsulotlarimiz"
			},
			"para": {
				"ru": "Продукты, которые мы производим в течение длительного периода времени",
				"en": "Products we have been producing for a long period of time",
				"uz": "Biz uzoq vaqtdan beri ishlab chiqarayotgan mahsulotlarimiz"
			},
			"all": {
				"ru": "Все",
				"en": "All",
				"uz": "Hammasi"
			},
			"siphons": {
				"ru": "Сифоны",
				"en": "Siphons",
				"uz": "Sifonlar"
			},
			"hatchDoors": {
				"ru": "Люк дверца",
				"en": "Hatch door",
				"uz": "Eshik eshigi"
			},
			"trap": {
				"ru": "Трапы",
				"en": "Trap",
				"uz": "Trap"
			},
			"corrugation": {
				"ru": "Гофра",
				"en": "Corrugation",
				"uz": "Gofra"
			},
			"krishka": {
				"ru": "Крышка унитаза",
				"en": "Tap",
				"uz": "Qopqoq"
			}
		},
		"features": {
			"heading": {
				"ru": "Решетки",
				"en": "Cage",
				"uz": "Panjara"
			}, 
			"headingAcc": {
				"ru": "Aксессуары",
				"en": "Accessories",
				"uz": "Aksessuarlar"
			},
			"heading_1":{
				"ru": "Красочное и индивидуальное решетчатое изделие от KINGPLAST",
				"en": "Colorful and customized lattice product from KINGPLAST",
				"uz": "KINGPLASTdan rangli va moslashtirilgan panjara mahsuloti"
			},
			"heading_2": {
				"ru": "Мы можем представить различные цветные решетки на ваш выбор. При этом он состоит из 3-х основных частей",
				"en": "We can provide different color gratings for you to choose from. However, it consists of 3 main parts.",
				"uz": "Siz tanlaganingiz uchun turli rangdagi panjaralarni taqdim eta olamiz. Biroq, u 3 ta asosiy qismdan iborat."
			},
			"heading_3": {
				"ru": "Многоразовый",
				"en": "reusable",
				"uz": "qayta foydalanish mumkin"
			},
			"heading_4": {
				"ru": "Красочный",
				"en": "Colorful",
				"uz": "Rangli"
			},
			"heading_5": {
				"ru": "Подходит для вашего дома",
				"en": "Suitable for your home",
				"uz": "Uyingiz uchun mos"
			},
			"heading_6":{
				"ru": "Имеет высокое качество.",
				"en": "Has high quality.",
				"uz": "Yuqori sifatga ega."
			},
			"heading_7":{
				"ru": "Адаптируется к вашим потребностям",
				"en": "Adapts to your needs",
				"uz": "Ehtiyojlaringizga moslashadi"
			},
			"heading_8":{
				"ru": "Аксессуары для сантехники",
				"en": "Plumbing accessories",
				"uz": "Santexnika aksessuarlari"
			},
			"heading_9":{
				"ru": "У нас есть различные аксессуары для сантехники, начиная от маленьких винтиков и заканчивая деталями для унитаза.",
				"en": "We have a variety of plumbing accessories ranging from small screws to toilet parts.",
				"uz": "Bizda kichik vintlardek, hojatxona qismlarigacha bo'lgan turli xil sanitariya-tesisat aksessuarlari mavjud."
			},


		},
		"recent-blog-posts": {
			"row": {
				"ru": "Последние сообщения в блоге",
				"en": "Latest blog posts",
				"uz": "Eng so'nggi blog postlari"
			},
			"row_1":{
				"ru": "Получайте обновления от KINPLAST в разделах нашего блога",
				"en": "Get updates from KINPLAST in our blog sections",
				"uz": "Bizning blog bo'limlarida KINPLAST yangilanishlarini oling"
			},
			"row_2":{
				"ru": "12 декабря",
				"en": "December 12",
				"uz": "12 dekabr"
			},
			"row_3":{
				"ru": "Сийосат",
				"en": "Politics",
				"uz": "Siyosat"
			},
			"row_4": {
				"ru": "Читать далее",
				"en": "Read More",
				"uz": "Ko'proq o'qing"
			},
			"row_5": {
				"ru": "17 июля",
				"en": "July 17",
				"uz": "17 iyul"
			},
			"row_6":{
				"ru": "Спортивный",
				"en": "Sports",
				"uz": "Sport"
			},
			"row_7":{
				"ru": "экономика",
				"en": "Economics",
				"uz": "Iqtisodiyot"
			},
			"row_8":{
				"ru": "05 Сентября",
				"en": "September 05",
				"uz": "05 Sentyabr"
			}

		},
		"get-started": {
      "head": {
        "ru": "Как вы можете связаться с нами?",
        "en": "How can you contact us?",
        "uz": "Biz bilan qanday bog'lanishingiz mumkin?"
      }, 
      "headAcc": {
        "ru": "Заполните форму, указав свое имя, телефон и сообщение.",
        "en": "Fill out the form with your name, phone number and message.",
        "uz": " Shaklni ismingiz, telefon raqamingiz va xabaringiz bilan to'ldiring."
      },
      "headPcc": {
        "ru": "Зачем нам такие данные?",
        "en": "Why do we need such data?",
        "uz": "Nima uchun bizga bunday ma'lumotlar kerak?"
      },
      "headPcci": {
        "ru": "Имя - для того, чтобы называть вас по имени и фамилии.",
        "en": "Name - in order to call you by name and surname.",
        "uz": "Ism - sizni ism va familiya bilan chaqirish uchun."
      },
      "headPccpi": {
        "ru": "Телефон - для связи с вами",
        "en": "Phone - to contact you",
        "uz": "Telefon - siz bilan bog'lanish uchun"
      },
      "headPccip": {
        "ru": "Сообщение - для того, чтобы узнать, что вы хотели бы знать",
        "en": "Message - in order to find out what you would like to know",
        "uz": "Xabar - nimani bilishni xohlayotganingizni bilish uchun"
      },
      "Sav": {
        "ru": "Связаться",
        "en": "Contact",
        "uz": "Aloqa"
      },
      "Vas": {
        "ru": "Если у вас есть сомнения или какие-либо вопросы, вы можете связаться с нами, чтобы получить дополнительную информацию..",
        "en": "If you have any doubts or any questions, you can contact us for more information..",
        "uz": "Agar sizda biron bir shubha yoki biron bir savol bo'lsa, qo'shimcha ma'lumot olish uchun biz bilan bog'lanishingiz mumkin.."
      },
      "Avs": {
        "ru": "ЗАГРУЗКА...",
        "en": "LOADING...",
        "uz": "Yuklanmoqda..."
      },
      "Pvs": {
        "ru": "Ваш запрос цитаты был успешно отправлен. Благодарю вас!",
        "en": "Your quote request has been successfully submitted. Thank you!",
        "uz": "Kotirovka soʻrovingiz muvaffaqiyatli topshirildi. Rahmat!"
      },
      "Psv": {
        "ru": "Связаться",
        "en": "Contact",
        "uz": "Aloqa"
      },
    },
    "footer": {
      "Reviews11": {
        "ru": "Ориентир. Новый ТАШМИ.",
        "en": "Reference point. New TASHMI.",
        "uz": "Malumot nuqtasi. Yangi TOSHMI."
      },
      "Reviews12": {
        "ru": "Рядом с Олтин Тепа",
        "en": "Close to Oltin Tepa",
        "uz": "Oltin Tepaga yaqin"
      },
    },
    "contact": {
      "Reviews6": {
        "ru": "Контакты",
        "en": "Contacts",
        "uz": "Kontaktlar",
      },
      "Reviews7": {
        "ru": "Есть контактная информация, по которой вы можете нас найти",
        "en": "We have contact information where you can find us",
        "uz": "Bizni topishingiz mumkin bo'lgan aloqa ma'lumotlarimiz mavjud",
      },
      "Reviews8": {
        "ru": "Адрес",
        "en": "Address",
        "uz": "Manzil",
      },
      "Reviews9": {
        "ru": "Ориентир. Новый ТАШМИ. Рядом с Олтин Тепа",
        "en": "Reference point. New TASHMI. Close to Oltin Tepa",
        "uz": "Malumot nuqtasi. Yangi TOSHMI. Oltin Tepaga yaqin",
      },
      "Reviews10": {
        "ru": "Телефон",
        "en": "Telephone",
        "uz": "Telefon",
      },
    },
    "testimonials": {
       "Reviews4": {
        "ru": "Отзывы",
        "en": "Reviews",
        "uz": "Sharhlar",
      },
      "Reviews5": {
        "ru": "Замечательные слова о KINGPLAST от наших клиентов",
        "en": "Wonderful words about KINGPLAST from our customers",
        "uz": "Mijozlarimizdan KINGPLAST haqida ajoyib so'zlar",
      },
    },

		"title": {
			"ru": "Exemplo de uso do i18n.js",
			"en": "Simple demo for i18n.js",
			"uz": "¡Una cerveza por favor!"
		},
		"text": {
			"ru": "Este exemplo serve apenas para ilustrar os diferentes tipos de atributos de texto que podem ser localizados no cliente com a ajuda do i18n.js",
			"en": "This demo's only purpose is to show the different text attributes that can be localized with the help of i18n.js",
			"uz": "Si i18n.js era español entonces sería de puta madre. Ahora así, la han cagado!"
		},
		"form": {
			"name": {
				"ru": "Zé dos Anzóis",
				"en": "John Doe",
				"uz": "Fulano de Tal"
			},
			"email": {
				"ru": "zeanzois@email.org",
				"en": "johndoe@email.org",
				"uz": "fulanotal@email.org"
			},
			"submit": {
				"ru": "Enviar",
				"en": "Send",
				"uz": "¡Tío!"
			}
		}
	}
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'ru';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');
	
	$('.lang-picker #russian').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #uzbek').on('click', function () {
		i18n.lang('uz');
		selectLang($(this));
	})
	$('.lang-picker #iranian').on('click', function () {
		i18n.lang('ir');
		selectLang($(this));
	})
	$('.lang-picker #chinese').on('click', function () {
		i18n.lang('ch');
		selectLang($(this));
	})
	$('.lang-picker #arab').on('click', function () {
		i18n.lang('ar');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker a').removeClass('selected');
		picker.addClass('selected');
	}
});
