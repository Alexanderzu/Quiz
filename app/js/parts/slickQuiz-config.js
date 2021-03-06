// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Как хорошо вы разбираетесь в новостях бизнеса",
        "main":    "<p>По следам публикаций на vc.ru.</p>",
        "results": "",
        "level0":  "Я работаю в редакции vc.ru",
        "level1":  "Читаю vc.ru каждый день, но работать тоже нужно",
        "level2":  "Бизнес это интересно, но где взять столько времени?",
        "level3":  "Читаю vc.ru с экрана попутчика в метро",
        "level4":  "Мне больше интересен футбол",
        "level5":  "Мне больше интересен футбол",
        "level6":  "Мне больше интересен футбол",
        "level7":  "Мне больше интересен футбол",
        "level8":  "Мне больше интересен футбол",
    },
    "questions": [
        { // Question 1
            "q": "На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?",
            "a": [
                {"option": "6,3 млн рублей", "correct": true, "text": "<p><b>Верно.</b> Проверка <a href='#' target='_blank'>обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</p>" },
                {"option": "1 млн рублей", "correct": false,  "text": "<p><b>Нет, немного больше: 6,3 млн рублей.</b> Проверка обнаружила просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</p>" },
                {"option": "50 млн рублей", "correct": false, "text": "<p><b>Нет, гораздо меньше: 6,3 млн рублей.</b> Проверка обнаружила просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</p>" },
                {"option": "Не оштрафовал, а объявил выговор", "correct": false, "text": "<p><b>Нет, всё же оштрафовал на 6,3 млн рублей.</b> Проверка обнаружила просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</p>" }
            ],
            "correct": "",
            "incorrect": ""
            // no comma here
        },
        { // Question 2
            "q": "Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?",
            "a": [
                {"option": "Она оказалась огнеопасной","correct": true, "text": "<p>Да, бутылка благодаря своей форме призмы фокусировала свет так, что он воспламенял окружающие предметы.</p>"},
                {"option": "Дети играли ею в футбол и разбивали окна",   "correct": false, "text": "<p>Нет, дело в её форме призмы — она фокусировала свет так, что он воспламенял окружающие предметы.</p>"},
                {"option": "Она постоянно скатывалась с полок", "correct": false, "text": "<p>Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так, что он воспламенял окружающие предметы.</p>" },
                {"option": "Её никто не покупал", "correct": false, "text": "<p>Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так, что он воспламенял окружающие предметы.</p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 3
            "q": "Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?",
            "a": [
                {"option": "Они лишились акций на $1,3 млрд","correct": true, "text": "<p>Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за конфликта с руководством.</p>"},
                {"option": "Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн",   "correct": false, "text": "<p>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за конфликта с руководством, но штрафы никто не выплачивал.</p>"},
                {"option": "Ничего не лишились, к моменту ухода они уже получили всё вознаграждение", "correct": false, "text": "<p>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за конфликта с руководством.</p>" },
                {"option": "Ничего не лишились, но получили иски за нарушение коммерческой тайны", "correct": false, "text": "<p>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за конфликта с руководством — но коммерческую тайну пока никто не нарушил.</p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 4
            "q": "В какой скандал угодила компания «Газелькин» в июне 2018 года?",
            "a": [
                {"option": "Предложила клиентам вызвать «водителей-славян» за дополнительную плату","correct": true, "text": "<p>Компания дала клиентам возможность выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык». </p>"},
                {"option": "Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет» ",   "correct": false, "text": "<p>Было пару раз, но не в июне. На самом деле компания дала клиентам возможность выбрать водителя славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык». </p>"},
                {"option": "Грузчики разбили антикварный шкаф стоимостью 163 млн рублей ", "correct": false, "text": "<p>О таком случае не сообщалось, но зато компания дала клиентам возможность выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык». </p>" },
                {"option": "Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ ", "correct": false, "text": "<p>О таком случае не сообщалось, но зато компания дала клиентам возможность выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык». </p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 5
            "q": "Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?",
            "a": [
                {"option": "20% ","correct": true, "text": "<p>Да, НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит</p>"},
                {"option": "19% ",   "correct": false, "text": "<p>Нет, всё же именно НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит </p>"},
                {"option": "21% ", "correct": false, "text": "<p>Нет, НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит </p>" },
                {"option": "Никто не собирается повышать НДС, зато повысят НДФЛ ", "correct": false, "text": "<p>Нет, всё же именно НДС собираются повысить с 18% до 20%. Кстати, вот чем это грозит </p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 6
            "q": "Чем займётся Герман Клименко после ухода с поста советника президента по интернету?",
            "a": [
                {"option": "Проектами в сфере цифровой медицины ","correct": true, "text": "<p> Верно</p>"},
                {"option": "Станет разрабатывать собственный мессенджер ",   "correct": false, "text": "<p>Это вполне возможно, но сперва он планирует заниматься проектами в сфере цифровой медицины. </p>"},
                {"option": "Будет советником по медицине ", "correct": false, "text": "<p>Нет, он планирует заниматься собственными проектами в сфере цифровой медицины. </p>" },
                {"option": "Отправится в кругосветное путешествие ", "correct": false, "text": "<p>Он планирует заниматься собственными проектами в сфере цифровой медицины. </p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 7
            "q": "Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?",
            "a": [
                {"option": "Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей ","correct": true, "text": "<p>Да, и заказчик точно так же обязан принять первый предложенный вариант. </p>"},
                {"option": "Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог ",   "correct": false, "text": "<p>Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант. </p>"},
                {"option": "Экспресс-доставку обедов в офис ", "correct": false, "text": "<p>Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант. </p>" },
                {"option": "Создание визиток за 50 тысяч рублей ", "correct": false, "text": "<p>Речь об экспресс-дизайне предметов, и заказчик точно так же обязан принять первый предложенный вариант. </p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        { // Question 8
            "q": "Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?",
            "a": [
                {"option": "Это стыдно — нанимать людей, которыми нужно управлять ","correct": true, "text": "<p>Вопрос был с подвохом: все эти фразы прозвучали в интервью. </p>"},
                {"option": "Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель» ",   "correct": false, "text": "<p>Вопрос был с подвохом: все эти фразы прозвучали в интервью. </p>"},
                {"option": "Чтобы быть предпринимателем, не нужно никакого образования ", "correct": false, "text": "<p>Вопрос был с подвохом: все эти фразы прозвучали в интервью. </p>" },
                {"option": "Предприниматели должны быть звёздами и элитой общества ", "correct": false, "text": "<p>Вопрос был с подвохом: все эти фразы прозвучали в интервью. </p>"} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
       
        
    
    ]
};
