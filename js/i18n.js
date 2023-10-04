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
 			"ch": '<i class="fa fa-user"></i> 接觸'
 		},
 		"hero": {
 			"ru": 'Главная страница',
 			"uz": 'Assosiy saxifa',
 			"en": 'Home',
 			"ch": '首頁'
 		},
 		"shop": {
 			"ru": 'Каталог',
 			"uz": 'Katalog',
 			"en": 'Catalogue',
 			"ch": '目錄'
 		},
 		"about": {
 			"ru": 'О нас',
 			"uz": 'Bizning haqimizda',
 			"en": 'About',
 			"ch": '關於我們'
 		},
 		"contact": {
 			"ru": 'Контакты',
 			"uz": 'Raqamlarimiz',
 			"en": 'Contacts',
 			"ch": '聯絡方式'
 		},
 		"service": {
 			"ru": 'Услуги',
 			"uz": 'Hizmatlar',
 			"en": 'Services',
 			"ch": '服務'
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
