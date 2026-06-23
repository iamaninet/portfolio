
/* ── DATA ── */
const DATA={
  ar:{
    sbScreens:[
      {num:"01",title:"شاشة الترحيب",desc:"شاشة الدخول للمقرر تتضمن عنوان الوحدة وأهدافها وزر البدء مع تحفيز بصري.",tags:["Intro","Gamification"]},
      {num:"02",title:"الأهداف التعليمية",desc:"عرض الأهداف بأسلوب تفاعلي يطلب من الطالب توقّع ما سيتعلمه.",tags:["Objectives","Interactive"]},
      {num:"03",title:"المحتوى الأساسي",desc:"تقديم المفهوم الرئيسي عبر نص موجز ومرفق بصورة توضيحية.",tags:["Content","Visual"]},
      {num:"04",title:"مثال تطبيقي",desc:"سيناريو واقعي يعيش فيه الطالب الموقف ثم يختار الحل المناسب.",tags:["Scenario","Apply"]},
      {num:"05",title:"تقييم تكويني",desc:"3 أسئلة متعددة الخيارات مع تغذية راجعة فورية ومخصصة.",tags:["Formative","Feedback"]},
      {num:"06",title:"شارة الإنجاز",desc:"تُمنح الشارة عند اجتياز الوحدة مع رسالة تحفيزية شخصية.",tags:["Badge","Motivation"]},
      {num:"07",title:"ملخص الوحدة",desc:"عرض النقاط الرئيسية مع رابط لتحميل ورقة المراجعة.",tags:["Summary","Review"]},
      {num:"08",title:"الانتقال للوحدة التالية",desc:"لوحة التقدم الكلي وزر الانتقال للوحدة التالية مع نظرة عليها.",tags:["Navigation","Progress"]},
    ],
    journeyPhases:[
      {icon:"🔍",label:"الاكتشاف",sub:"التعرف على المقرر",feeling:40,detail:"يكتشف الطالب المقرر عبر المدرسة أو المنصة. المشاعر: فضول مشوب بتردد. نقطة التحسين: تقديم مقطع تعريفي جذاب."},
      {icon:"🚀",label:"البدء",sub:"التسجيل والدخول",feeling:65,detail:"يُسجّل الطالب ويخوض تجربة الإعداد الأولي. المشاعر: حماس وترقب. نقطة التحسين: تبسيط خطوات الإعداد."},
      {icon:"📖",label:"التعلم",sub:"الوحدات والأنشطة",feeling:80,detail:"يتفاعل الطالب مع المحتوى والأنشطة والتحديات. المشاعر: انخراط وتحدٍّ صحي. نقطة التحسين: ضبط مستوى الصعوبة."},
      {icon:"🎯",label:"التقييم",sub:"الاختبارات والشارات",feeling:60,detail:"يخوض الطالب تقييمات تكوينية وختامية. المشاعر: قلق وتحفز. نقطة التحسين: تغذية راجعة فورية ومشجعة."},
      {icon:"🌟",label:"التطبيق",sub:"المشاريع والأثر",feeling:90,detail:"يطبق الطالب ما تعلمه في مشروع حقيقي. المشاعر: فخر وإنجاز. نقطة التحسين: ربط المشروع بسياق واقعي."},
    ],
    presentations:[
      {icon:"🎓",num:"01",name:"مقدمة في التصميم التعليمي",desc:"ورشة تعريفية بمبادئ التصميم التعليمي لمدربين جدد في المجال.",tags:["Workshop","ID","Intro"]},
      {icon:"🤖",num:"02",name:"الذكاء الاصطناعي في التعلم",desc:"ورشة حول توظيف أدوات الذكاء الاصطناعي في تصميم تجارب التعلم.",tags:["AI","Innovation","EdTech"]},
      {icon:"🎮",num:"03",name:"التلعيب في التعليم",desc:"استراتيجيات التلعيب وآليات تطبيقها في سياقات تعليمية متنوعة.",tags:["Gamification","Motivation"]},
      {icon:"📊",num:"04",name:"قياس أثر التعلم",desc:"نموذج كيركباتريك وكيفية تطبيقه لقياس فاعلية برامج التدريب.",tags:["Kirkpatrick","KPIs","Evaluation"]},
      {icon:"🗺️",num:"05",name:"تصميم رحلة المتعلم",desc:"إطار عملي لتصميم تجارب تعلم متكاملة تركّز على المتعلم.",tags:["LXD","Journey","UX"]},
      {icon:"⚡",num:"06",name:"التعلم المدمج الفعّال",desc:"استراتيجيات دمج التعلم الوجاهي والرقمي لأعلى مشاركة.",tags:["Blended","Strategy"]},
    ],
    prototypes:[
      {icon:"💻",name:"وحدة مكونات الحاسب",desc:"نموذج تفاعلي يشمل فيديو وتمارين ونشاط تلعيب.",tags:["Interactive","Articulate","Gamification"]},
      {icon:"🔐",name:"درس الأمن الرقمي",desc:"وحدة بأسلوب سيناريو لتعليم ممارسات الأمان الرقمي.",tags:["Scenario","eLearning"]},
      {icon:"📱",name:"تطبيق التعلم المصغر",desc:"نموذج تطبيق موبايل لوحدات تعلم مصغر مدتها 5 دقائق.",tags:["Microlearning","Mobile","UX"]},
      {icon:"🧩",name:"لعبة المطابقة التعليمية",desc:"نشاط تلعيبي يربط المفاهيم بتعريفاتها بأسلوب بطاقات تفاعلية.",tags:["Game","Matching","Assessment"]},
    ],
    training:[
      {icon:"📘",name:"دليل المدرب — برنامج أساسيات الحاسب",desc:"دليل شامل يتضمن خطة الجلسة، الأنشطة، وأدوات التقييم.",tags:["Facilitator","Guide","F2F"]},
      {icon:"📗",name:"كتيب المشارك — مهارات القرن 21",desc:"مواد المشارك لبرنامج تطوير مهارات التفكير النقدي والتعاون.",tags:["Participant","Workbook","Soft Skills"]},
      {icon:"📝",name:"ورقة عمل — تصميم أهداف تعليمية",desc:"ورقة عملية تفاعلية لتطبيق نموذج SMART في صياغة الأهداف.",tags:["Activity","SMART","Objectives"]},
      {icon:"🎯",name:"أداة تقييم أداء المتعلم",desc:"استمارة تقييم موحّدة لرصد تقدم المتعلمين وفق معايير محددة.",tags:["Assessment","Evaluation","Tools"]},
      {icon:"📋",name:"دليل التعلم المدمج",desc:"إرشادات وأفضل الممارسات لتصميم وتنفيذ بيئات التعلم المدمج.",tags:["Blended","Guide","Best Practices"]},
    ]
  },
  en:{
    sbScreens:[
      {num:"01",title:"Welcome Screen",desc:"Module entry screen featuring the unit title, objectives, and a start button with visual motivation.",tags:["Intro","Gamification"]},
      {num:"02",title:"Learning Objectives",desc:"Interactive objectives display asking learners to predict what they'll learn.",tags:["Objectives","Interactive"]},
      {num:"03",title:"Core Content",desc:"Main concept delivered through concise text paired with a visual illustration.",tags:["Content","Visual"]},
      {num:"04",title:"Applied Example",desc:"A real-world scenario where learners experience a situation and choose the best solution.",tags:["Scenario","Apply"]},
      {num:"05",title:"Formative Assessment",desc:"3 multiple-choice questions with immediate, personalized feedback.",tags:["Formative","Feedback"]},
      {num:"06",title:"Achievement Badge",desc:"Badge awarded on unit completion with a personalized motivational message.",tags:["Badge","Motivation"]},
      {num:"07",title:"Unit Summary",desc:"Key points recap with a link to download a review sheet.",tags:["Summary","Review"]},
      {num:"08",title:"Next Unit Transition",desc:"Overall progress board and next unit preview with navigation button.",tags:["Navigation","Progress"]},
    ],
    journeyPhases:[
      {icon:"🔍",label:"Discovery",sub:"Finding the course",feeling:40,detail:"Learner discovers the course through school or platform. Feelings: curiosity mixed with hesitation. Improvement: create an engaging intro video."},
      {icon:"🚀",label:"Onboarding",sub:"Registration & setup",feeling:65,detail:"Learner registers and goes through initial setup. Feelings: excitement and anticipation. Improvement: simplify setup steps."},
      {icon:"📖",label:"Learning",sub:"Units & activities",feeling:80,detail:"Learner engages with content, activities, and challenges. Feelings: engagement and healthy challenge. Improvement: calibrate difficulty levels."},
      {icon:"🎯",label:"Assessment",sub:"Tests & badges",feeling:60,detail:"Learner takes formative and summative assessments. Feelings: anxiety mixed with drive. Improvement: provide immediate, encouraging feedback."},
      {icon:"🌟",label:"Application",sub:"Projects & impact",feeling:90,detail:"Learner applies knowledge in a real project. Feelings: pride and accomplishment. Improvement: connect projects to real-world context."},
    ],
    presentations:[
      {icon:"🎓",num:"01",name:"Introduction to Instructional Design",desc:"An introductory workshop on ID principles for new trainers and educators.",tags:["Workshop","ID","Intro"]},
      {icon:"🤖",num:"02",name:"AI in Learning Design",desc:"Workshop on leveraging AI tools for designing impactful learning experiences.",tags:["AI","Innovation","EdTech"]},
      {icon:"🎮",num:"03",name:"Gamification in Education",desc:"Gamification strategies and their application in diverse learning contexts.",tags:["Gamification","Motivation"]},
      {icon:"📊",num:"04",name:"Measuring Learning Impact",desc:"Applying the Kirkpatrick model to evaluate training program effectiveness.",tags:["Kirkpatrick","KPIs","Evaluation"]},
      {icon:"🗺️",num:"05",name:"Designing the Learner Journey",desc:"A practical framework for designing learner-centered, end-to-end learning experiences.",tags:["LXD","Journey","UX"]},
      {icon:"⚡",num:"06",name:"Effective Blended Learning",desc:"Strategies for blending face-to-face and digital learning to maximize engagement.",tags:["Blended","Strategy"]},
    ],
    prototypes:[
      {icon:"💻",name:"Computer Components Module",desc:"Interactive prototype including video, exercises, and a gamification activity.",tags:["Interactive","Articulate","Gamification"]},
      {icon:"🔐",name:"Digital Safety Lesson",desc:"Scenario-based eLearning module teaching digital safety practices.",tags:["Scenario","eLearning"]},
      {icon:"📱",name:"Microlearning App",desc:"Mobile app prototype for 5-minute microlearning units.",tags:["Microlearning","Mobile","UX"]},
      {icon:"🧩",name:"Matching Game",desc:"Gamified activity prototype matching concepts to definitions using interactive cards.",tags:["Game","Matching","Assessment"]},
    ],
    training:[
      {icon:"📘",name:"Facilitator Guide — Computer Fundamentals",desc:"Comprehensive guide with session plan, activities, and assessment tools.",tags:["Facilitator","Guide","F2F"]},
      {icon:"📗",name:"Participant Workbook — 21st Century Skills",desc:"Materials for a critical thinking and collaboration development program.",tags:["Participant","Workbook","Soft Skills"]},
      {icon:"📝",name:"Activity Sheet — Writing Learning Objectives",desc:"Worksheet for applying the SMART model to writing course objectives.",tags:["Activity","SMART","Objectives"]},
      {icon:"🎯",name:"Learner Performance Assessment Tool",desc:"Standardized form for tracking learner progress against defined criteria.",tags:["Assessment","Evaluation","Tools"]},
      {icon:"📋",name:"Blended Learning Guide",desc:"Best practices for designing and delivering blended learning environments.",tags:["Blended","Guide","Best Practices"]},
    ]
  }
};

/* ── STATE ── */
let isAr=true, isDark=false, currentView='main', currentGallery=null;

/* ── EXPERIENCE TOGGLE ── */
function toggleExp(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.exp-item.open').forEach(i=>i.classList.remove('open'));
  if(!wasOpen) el.classList.add('open');
}

/* ── LANG STRINGS ── */
const STRINGS={
  ar:{
    "nav-logo":"أماني المالكي","n-about":"عن","n-exp":"الخبرة","n-skills":"المهارات","n-projects":"المشاريع","n-gallery":"المعرض","n-certs":"الشهادات",
    "badge-txt":"التعلم والتطوير",
    "hero-h1":'أصمّم حلول تعلم رقمية<br><em>ذات أثر حقيقي</em>',
    "hero-sub":"أخصائي تقنية معلومات (IT) ومصمم تجارب تعلم رقمية (LXD), أعمل على إبتكار وبناء حلول تعليمية رقمية, توظف التكنولوجيا لتضمن مخرجات ذات أثر حقيقي وقابل للقياس.",
    "scroll-ind":"↓ مرّر للأسفل","lbl-li":"لينكد إن","lbl-em":"البريد الإلكتروني","lbl-cv":"تحميل السيرة الذاتية",
    "about-h2":" مهندسة حلول تعليمية رقمية",
    "about-p1":"أؤمن أن التكنولوجيا هي المحرك الأساسي لتطوير التعليم، وأن التعليم هو الوسيلة الأسمى لتوجيه التكنولوجيا.",
    "about-p2":"كمتخصص في تقنية معلومات (IT) ومصمم تجارب تعلم رقمية (LXD)، أعمل على هندسة حلول تعليمية رقمية تدمج بين الابتكار التقني وتصميم تجربة المتعلم؛ بهدف بناء بيئات تعليمية تفاعلية متكاملة تطبق معايير الجودة، لتضمن مخرجات تعليمية ذات أثر حقيقي وقابل للقياس.",
    "rs1":"أخصائية التعلم والتطوير","rs2":"مصممة تجارب التعلم","rs3":"التقنية التعليمية","rs4":"مصممة الحلول التعليمية",
    "exp-h":"الخبرة المهنية","exp-sub":"انقر على أي تجربة لعرض المهام",
    "e1-role":"مدربة مهارات رقمية","e1-org":"وزارة التعليم","e1-date":"أغسطس 2024 – حتى الآن","e1-badge":"● حالياً",
    "e2-role":"مؤسِّسة مبادرة نقاء للتوعية الرقمية","e2-org":"Naqa — مبادرة توعية رقمية","e2-date":"يوليو 2025 – حتى الآن","e2-badge":"● حالياً",
    "e3-role":"مؤسِّسة — Laptop Amani","e3-org":"Laptop Amani، الطائف","e3-date":"سبتمبر 2017 – حتى الآن","e3-badge":"● حالياً",
    "e4-role":"مدربة حاسب آلي","e4-org":"معهد الدراسات العربية للتدريب النسائي","e4-date":"يونيو 2015 – أغسطس 2017",
    "e5-role":"مدربة حاسب آلي","e5-org":"معهد Silver Matrix العالي للتدريب","e5-date":"أغسطس 2013 – يناير 2014",
    "e1-tasks":"<li>تصميم وحدات تعلم رقمي تفاعلية مدعومة بالذكاء الاصطناعي في البرمجة وتقنية المعلومات، تحوّل المناهج التقنية إلى تجارب تعلم عالية الأثر.</li><li>دمج أدوات التعلم الإلكتروني المتقدمة ومنصات إدارة التعلم LMS لتعزيز تفاعل الطلاب وتيسير التعليم القائم على التقنية.</li><li>تطبيق التقييمات الرقمية والمشاريع العملية لرصد التقدم ودعم ممارسات التدريس القائمة على البيانات.</li>",
    "e2-tasks":"<li>أسّست وصمّمت مبادرة \"نقاء\"، وهي مبادرة رقمية تروّج للتوعية بمخاطر النفايات الإلكترونية والتخلص المسؤول من الأجهزة.</li><li>إنتاج ومشاركة محتوى توعية رقمي عبر منصات التواصل الاجتماعي لتعزيز الاستخدام المسؤول للتقنية.</li>",
    "e3-tasks":"<li>قدّمت خدمات الدعم التقني والصيانة لأكثر من 160 عميلاً، مما قلّص المشكلات التقنية بنسبة 99% وحسّن أداء الأجهزة وسهولة استخدامها.</li><li>طوّرت ونشرت أكثر من 100 قطعة محتوى رقمي حول التوعية التقنية، مما رفع تفاعل الجمهور وعزّز الكفاءة الرقمية للمستخدمين.</li><li>أنتجت أكثر من 250 أصل تعليمي متعدد الوسائط (عروض تقديمية، إنفوجرافيك، موشن جرافيك)، أسهمت في زيادة تفاعل المحتوى بنسبة 95% وتحسين فهم المواضيع التقنية المعقدة.</li>",
    "e4-tasks":"<li>تقديم تدريب شامل على مهارات الحاسب والمحو الأمية الرقمية، يشمل MS Office وصيانة الأجهزة والبرامج لتعزيز الإنتاجية في بيئة العمل.</li><li>تطوير مواد تدريب رقمية وتيسير ورش عمل عملية باستخدام أنشطة تعلم تفاعلية وأدوات وسائط متعددة.</li><li>تصميم خطط تدريبية تركّز على المتعلم ومصمَّمة وفق مستويات مهارات المشاركين لتحسين الانخراط ونتائج التعلم.</li>",
    "e5-tasks":"<li>إدارة بيانات تسجيل 500–900 متدرب شهرياً بدقة 99%، مما أسهم في رفع معدلات الإتمام من 70% إلى 90% من خلال سير عمل تسجيل مُحسَّنة وعمليات متابعة فعّالة.</li><li>تقديم تدريب شامل على مهارات الحاسب والمحو الأمية الرقمية، يشمل MS Office وصيانة الأجهزة والبرامج لتعزيز الإنتاجية في بيئة العمل.</li><li>تطوير مواد تدريب رقمية وتيسير ورش عمل عملية باستخدام أنشطة تعلم تفاعلية وأدوات وسائط متعددة.</li>",
    "skills-h":"المهارات والخبرات","skills-sub":"اختر فئة للاستكشاف",
    "tab-ld":"التعلم والتطوير","tab-id":"التصميم التعليمي","tab-tech":"التقنية","tab-pm":"المهنية",
    "sk1":"تنسيق التدريب","sk2":"برامج التعلم","sk3":"عمليات التعلم","sk4":"تطوير الموظفين","sk5":"دعم الأداء","sk6":"معايير الجودة",
    "sk7":"تصميم تجارب التعلم","sk8":"حلول التعلم الرقمي","sk9":"التلعيب","sk10":"السيناريو التعليمي","sk11":"تصميم التقييم",
    "sk12":"منصات إدارة التعلم","sk13":"إدارة المشاريع","sk14":"تطوير مؤشرات الأداء","sk15":"التواصل مع أصحاب المصلحة","sk16":"تحليل البيانات وقياس الأثر",
    "proj-h":"المشاريع المميزة","proj-sub":"دراسات حالة في التصميم التعليمي",
    "p1-cat":"تصميم تعليمي · ADDIE","p1-title":"تصميم تجربة تعلم قابلة للتوسع لمادة أساسيات الحاسب","p1-desc":"تجربة تعلم تكيفية للمرحلة المتوسطة تدمج التلعيب ونموذج كيركباتريك.",
    "p2-cat":"قريباً","p2-title":"برنامج تأهيل الموظفين الجدد","p3-cat":"قريباً","p3-title":"لوحة تحليلات التعلم",
    "gal-h":"معرض الأعمال","gal-sub":"انقر على أي بطاقة لاستعراض تفاصيلها",
    "g1":"وثائق التصميم التعليمي","gt1":"Documentation","g2":"السيناريوهات التعليمية","gt2":"Storyboards",
    "g3":"خرائط رحلة المتعلم","gt3":"UX Design","g4":"العروض التقديمية","gt4":"Presentations",
    "g5":"نماذج المحتوى التعليمي","gt5":"eLearning","g6":"المواد التدريبية","gt6":"L&D Resources",
    "cert-h":"الشهادات الاحترافية","cert-sub":"التطوير المهني والاعتمادات","cert1":"التصميم التعليمي",
    "foot-name":"متخصصة في التعلم والتطوير","foot-tag":"أصمم تجارب تعلم رقمية ذات أثر حقيقي",
    "f-li":"لينكد إن","f-em":"البريد الإلكتروني","f-cv":"تحميل السيرة الذاتية",
    "foot-copy":"© 2026 · جميع الحقوق محفوظة · بُني بشغف للتعلم",
    "mc":"✕ إغلاق","m-title":"تصميم تجربة تعلم قابلة للتوسع لمادة أساسيات الحاسب",
    "m-meta":"تصميم تعليمي · ADDIE · التلعيب · LXD",
    "mh1":"نظرة عامة","mp1":"تصميم تجربة تعلم رقمية تكيفية وقابلة للتوسع لمادة أساسيات الحاسب الآلي، موجهة لطلاب المرحلة المتوسطة.",
    "mh2":"بيان المشكلة","mp2":"يفتقر الطلاب إلى تجربة تعلم رقمية متكاملة تراعي الفروق الفردية وتحفّز على الانخراط الفعلي.",
    "mh3":"الفئة المستهدفة","mp3":"طلاب المرحلة المتوسطة (11–14 سنة) بمستويات معرفية متفاوتة في مجال التقنية.",
    "mh4":"الأهداف التعليمية","mobj":"<li>تعرّف المكونات الأساسية للحاسب الآلي وتصنيفها</li><li>شرح آلية عمل نظام التشغيل والبرامج التطبيقية</li><li>تطبيق مهارات استخدام الحاسب في سياقات يومية</li><li>تحليل مشكلة تقنية بسيطة واقتراح حلول عملية</li>",
    "mh5":"منهجية ADDIE","aa":"التحليل","ad":"التصميم","add":"التطوير","ai":"التطبيق","ae":"التقييم",
    "mh6":"استراتيجية التلعيب","mp6":"تُوظَّف آليات التلعيب عبر نظام النقاط والشارات لتحفيز الانخراط، وخرائط التقدم لتعزيز الشعور بالإنجاز.",
    "mh7":"نموذج كيركباتريك","k1":"رد الفعل","k2":"التعلم","k3":"السلوك","k4":"النتائج",
    "mh8":"مؤشرات الأداء KPIs","kpi1":"رضا المتعلمين","kpi2":"معدل اجتياز التقييم","kpi3":"نقل السلوك","kpi4":"تحسين الانخراط",
    "mh9":"النتائج والأثر","mp9":"أسهمت التجربة في تحسين ملحوظ للدافعية والانخراط، وأظهر الطلاب تقدماً قابلاً للقياس.",
    "mh10":"الدروس المستفادة","mles":"<li>أهمية تحليل الفئة المستهدفة قبل اتخاذ أي قرار تصميمي</li><li>التلعيب يرفع الدافعية لكنه يحتاج توازناً مع الأهداف التعليمية</li><li>التقييم المستمر أثناء التطوير يوفر جهداً في مرحلة التنقيح</li><li>إشراك أصحاب المصلحة مبكراً يضمن توافق التصميم مع الاحتياجات الحقيقية</li>",
    "bb1":"← رجوع","bb2":"← رجوع","bb3":"← رجوع","bb4":"← رجوع","bb5":"← رجوع","bb6":"← رجوع",
    "bc1g":"المعرض","bc2g":"المعرض","bc3g":"المعرض","bc4g":"المعرض","bc5g":"المعرض","bc6g":"المعرض",
    "bc2s":"السيناريوهات","bc3s":"خريطة الرحلة","bc4s":"العروض","bc5s":"النماذج","bc6s":"المواد التدريبية",
    "docs-h":"وثائق التصميم التعليمي","docs-p":"مجموعة من وثائق التصميم التعليمي التي توثّق مراحل التحليل والتصميم والتطوير.",
    "dt1":"نظرة عامة","dt2":"تحليل الاحتياجات","dt3":"وثيقة التصميم",
    "dlp":"المشروع","dlm":"النموذج","dld":"المدة","dlt":"الأدوات",
    "dlist-an":"<li>تحديد الفجوة بين الأداء الحالي والمستوى المستهدف</li><li>إجراء مقابلات مع المعلمين لفهم تحديات التدريس</li><li>تحليل المناهج الدراسية الحالية وتحديد مواطن القصور</li><li>رسم خريطة الفروق الفردية في مستوى التقنية</li><li>تحديد قيود البيئة التعليمية: أجهزة، اتصال، وقت</li>",
    "dlist-des":"<li>صياغة 4 أهداف تعليمية قابلة للقياس وفق نموذج SMART</li><li>تصميم هيكل المقرر: 4 وحدات × 3 دروس</li><li>اختيار استراتيجيات التلعيب: نقاط، شارات، لوحات الصدارة</li><li>تصميم مسارات التعلم التكيفي</li><li>تخطيط آليات التقييم التكويني والختامي</li>",
    "sb-h":"السيناريوهات التعليمية","sb-p":"تصور مرئي لتسلسل شاشات وحدات التعلم الإلكتروني قبل الدخول في مرحلة التطوير.",
    "jrn-h":"خريطة رحلة المتعلم","jrn-p":"تصور مراحل تجربة الطالب من لحظة الاكتشاف حتى التطبيق الفعلي.",
    "emo-lbl":"مستوى الانخراط عبر المراحل — انقر على الأعمدة",
    "pres-h":"العروض التقديمية","pres-p":"عروض ورش العمل والمؤتمرات التعليمية.",
    "proto-h":"نماذج المحتوى التعليمي","proto-p":"نماذج أولية تفاعلية لوحدات التعلم الإلكتروني.",
    "train-h":"المواد التدريبية","train-p":"أدلة المدربين، وكتيبات المشاركين، والأوراق العملية."
  },
  en:{
    "nav-logo":"Amani AL-Malki","n-about":"About","n-exp":"Experience","n-skills":"Skills","n-projects":"Projects","n-gallery":"Gallery","n-certs":"Certificates",
    "badge-txt":"Learning & Development",
    "hero-h1":'Designing Digital Learning Solutions <br><em>That Matter</em>',
    "hero-sub":'IT Specialist and Digital Learning Experience Designer (LXD), I design integrated digital learning solutions and experiences to ensure impactful and measurable learning outcomes.',
    "scroll-ind":"↓ scroll","lbl-li":"LinkedIn","lbl-em":"Email","lbl-cv":"Download CV",
    "about-h2":"Digital Learning Solutions Engineer",
    "about-p1":"I believe that technology is the ultimate driver for advancing education, and education is the highest vessel to guide technology.",
    "about-p2":"As an IT professional and Learning Experience Designer (LXD), I engineer digital learning solutions that blend technical innovation with learner-centered design; aiming to build integrated, interactive learning environments that apply quality standards to ensure impactful and measurable educational outcomes.",
    "rs1":"L&D Associate","rs2":"Learning Experience Designer","rs3":"Educational Technology","rs4":"Quality Matters",
    "exp-h":"Professional Experience","exp-sub":"Click any role to view responsibilities",
    "e1-role":"Digital Skills Instructor","e1-org":"Ministry of Education","e1-date":"Aug 2024 – Present","e1-badge":"● Current",
    "e2-role":"Founder, Naqa Digital Awareness Initiative","e2-org":"Naqa — Digital Awareness Initiative","e2-date":"Jul 2025 – Present","e2-badge":"● Current",
    "e3-role":"Founder — Laptop Amani","e3-org":"Laptop Amani, Taif, KSA","e3-date":"Sep 2017 – Present","e3-badge":"● Current",
    "e4-role":"Computer Trainer","e4-org":"Arab Studies Institute, Women's Training","e4-date":"Jun 2015 – Aug 2017",
    "e5-role":"Computer Trainer","e5-org":"Silver Matrix Higher Institute for Training","e5-date":"Aug 2013 – Jan 2014",
    "e1-tasks":"<li>Developed interactive, AI-driven digital modules in programming and IT, transforming technical curricula into high-impact learning experiences.</li><li>Integrated advanced e-learning tools and LMS platforms to enhance student engagement and facilitate technology-based instruction.</li><li>Implemented digital assessments and hands-on projects to monitor progress and support data-informed teaching practices.</li>",
    "e2-tasks":"<li>Founded and designed \"Naqa\", a digital initiative promoting awareness of electronic waste and responsible device disposal.</li><li>Produced and shared digital awareness content through social media to promote responsible technology use.</li>",
    "e3-tasks":"<li>Delivered technical support and maintenance services to 160+ clients, reducing technical issues by 99% and improving device performance and usability.</li><li>Developed and published 100+ digital content pieces on technology awareness, increasing audience engagement and improving users' digital proficiency.</li><li>Produced 250+ multimedia learning assets (presentations, infographics, motion graphics), leading to a 95% increase in content engagement and improved comprehension of complex topics.</li>",
    "e4-tasks":"<li>Facilitated comprehensive digital literacy training, covering MS Office and hardware/software troubleshooting to enhance workplace productivity.</li><li>Developed digital training materials and facilitated practical workshops using interactive learning activities and multimedia tools.</li><li>Designed learner-centered training plans tailored to participants' skill levels to improve engagement and learning outcomes.</li>",
    "e5-tasks":"<li>Managed registration data for 500–900 trainees per month with 99% accuracy, driving an increase in completion rates from 70% to 90% through optimized registration workflows and follow-up processes.</li><li>Facilitated comprehensive digital literacy training, covering MS Office and hardware/software troubleshooting to enhance workplace productivity.</li><li>Developed digital training materials and facilitated practical workshops using interactive learning activities and multimedia tools.</li>",
    "skills-h":"Skills & Expertise","skills-sub":"Click a category to explore",
    "tab-ld":"Learning & Development","tab-id":"Instructional Design","tab-tech":"Technology","tab-pm":"Professional",
    "sk1":"Training Coordination","sk2":"Learning Programs","sk3":"Learning Operations","sk4":"Employee Development","sk5":"Performance Support","sk6":"Quality Matters",
    "sk7":"Learning Experience Design","sk8":"Digital Learning Solutions","sk9":"Gamification","sk10":"Storyboarding","sk11":"Assessment Design",
    "sk12":"LMS Platforms","sk13":"Project Management","sk14":"KPI Development","sk15":"Stakeholder Communication","sk16":"Data Analysis & Impact",
    "proj-h":"Featured Projects","proj-sub":"Learning design case studies",
    "p1-cat":"Instructional Design · ADDIE","p1-title":"Scalable Learning Experience Design for Computer Fundamentals","p1-desc":"An adaptive learning experience for middle school integrating gamification and the Kirkpatrick model.",
    "p2-cat":"Coming Soon","p2-title":"Employee Onboarding Program","p3-cat":"Coming Soon","p3-title":"Learning Analytics Dashboard",
    "gal-h":"Portfolio Gallery","gal-sub":"Click any card to explore",
    "g1":"Instructional Design Documents","gt1":"Documentation","g2":"Storyboards","gt2":"Visual Design",
    "g3":"Learner Journey Maps","gt3":"UX Design","g4":"Presentations","gt4":"Slide Design",
    "g5":"Learning Content Prototypes","gt5":"eLearning","g6":"Training Materials","gt6":"L&D Resources",
    "cert-h":"Certifications","cert-sub":"Professional development & credentials","cert1":"Instructional Design",
    "foot-name":"Learning & Development Professional","foot-tag":"Designing meaningful digital learning experiences",
    "f-li":"LinkedIn","f-em":"Email","f-cv":"Download CV",
    "foot-copy":"© 2026 · All rights reserved · Built with passion for learning",
    "mc":"✕ Close","m-title":"Scalable Learning Experience Design for Computer Fundamentals",
    "m-meta":"Instructional Design · ADDIE · Gamification · LXD",
    "mh1":"Project Overview","mp1":"An adaptive, scalable digital learning experience for Computer Fundamentals, designed for middle school students. Integrates gamification and learner experience design.",
    "mh2":"Problem Statement","mp2":"Students lack a cohesive digital learning experience that accommodates individual differences and motivates genuine engagement, leading to reduced motivation and weak achievement.",
    "mh3":"Target Audience","mp3":"Middle school students (ages 11–14) with varying levels of prior technology knowledge.",
    "mh4":"Learning Objectives","mobj":"<li>Identify and classify core computer components</li><li>Explain how operating systems and applications work</li><li>Apply computer skills in real-world daily contexts</li><li>Analyze a simple technical problem and propose practical solutions</li>",
    "mh5":"ADDIE Methodology","aa":"Analysis","ad":"Design","add":"Development","ai":"Implementation","ae":"Evaluation",
    "mh6":"Gamification Strategy","mp6":"Gamification mechanics include a points-and-badges system, progress maps, adaptive challenges, and collaborative group elements.",
    "mh7":"Kirkpatrick Model","k1":"Reaction","k2":"Learning","k3":"Behavior","k4":"Results",
    "mh8":"KPIs","kpi1":"Learner Satisfaction","kpi2":"Assessment Pass Rate","kpi3":"Behavioral Transfer","kpi4":"Engagement Improvement",
    "mh9":"Results & Impact","mp9":"The experience contributed to a notable improvement in motivation and engagement. Students demonstrated measurable progress in knowledge and practical application.",
    "mh10":"Lessons Learned","mles":"<li>Audience analysis is essential before any design decision</li><li>Gamification boosts motivation but needs balance with learning objectives</li><li>Continuous evaluation during development saves revision effort</li><li>Early stakeholder involvement ensures design aligns with real needs</li>",
    "bb1":"← Back","bb2":"← Back","bb3":"← Back","bb4":"← Back","bb5":"← Back","bb6":"← Back",
    "bc1g":"Gallery","bc2g":"Gallery","bc3g":"Gallery","bc4g":"Gallery","bc5g":"Gallery","bc6g":"Gallery",
    "bc2s":"Storyboards","bc3s":"Journey Map","bc4s":"Presentations","bc5s":"Prototypes","bc6s":"Training Materials",
    "docs-h":"Instructional Design Documents","docs-p":"A collection of ID documents covering analysis, design, and development phases.",
    "dt1":"Overview","dt2":"Needs Analysis","dt3":"Design Document",
    "dlp":"Project","dlm":"Model","dld":"Duration","dlt":"Tools",
    "dlist-an":"<li>Identify the gap between current and target performance</li><li>Interview teachers to understand teaching challenges</li><li>Analyze existing curricula and identify gaps</li><li>Map individual differences in technology proficiency</li><li>Identify learning environment constraints: devices, connectivity, time</li>",
    "dlist-des":"<li>Write 4 measurable learning objectives using the SMART model</li><li>Design course structure: 4 units × 3 lessons each</li><li>Select gamification strategies: points, badges, leaderboards</li><li>Design adaptive learning paths based on learner performance</li><li>Plan formative and summative assessment mechanisms</li>",
    "sb-h":"Storyboards","sb-p":"Visual representation of eLearning unit screen sequences before development.",
    "jrn-h":"Learner Journey Map","jrn-p":"Visualizing learner stages from discovery through real-world application.",
    "emo-lbl":"Engagement level across phases — click bars to explore",
    "pres-h":"Presentations","pres-p":"Workshop and educational conference presentations.",
    "proto-h":"Learning Content Prototypes","proto-p":"Interactive early-stage prototypes for eLearning modules.",
    "train-h":"Training Materials","train-p":"Facilitator guides, participant workbooks, and practical activity sheets."
  }
};

/* ── HELPERS ── */
function L(){return isAr?'ar':'en'}
function applyStrings(){
  const s=STRINGS[L()];
  for(const k in s){
    const el=document.getElementById(k);
    if(!el)continue;
    if(['hero-h1','mobj','mles','dlist-an','dlist-des','e1-tasks','e2-tasks','e3-tasks','e4-tasks','e5-tasks'].includes(k)) el.innerHTML=s[k];
    else el.textContent=s[k];
  }
  document.documentElement.lang=isAr?'ar':'en';
  document.documentElement.dir=isAr?'rtl':'ltr';
  document.getElementById('lang-btn').textContent=isAr?'EN':'ع';
}

/* ── VIEW SYSTEM ── */
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
  currentView=id;
  window.scrollTo(0,0);
}

function goSection(id){
  showView('main');
  setTimeout(()=>{
    const el=document.getElementById(id);
    if(el)el.scrollIntoView({behavior:'smooth'});
  },50);
}

/* ── GALLERY ── */
const galMap={docs:'docs',sb:'sb',journey:'journey',pres:'pres',proto:'proto',train:'train'};
function openGallery(key){
  currentGallery=key;
  showView(galMap[key]);
  if(key==='sb') renderSb();
  if(key==='journey') renderJourney();
  if(key==='pres') renderPres();
  if(key==='proto') renderProto();
  if(key==='train') renderTrain();
}
function closeGallery(){showView('main');setTimeout(()=>{document.getElementById('gallery').scrollIntoView({behavior:'smooth'})},50);}

/* ── RENDER FUNCTIONS ── */
function tags(arr){return arr.map(t=>`<span class="stag">${t}</span>`).join('')}

function renderSb(){
  const sc=DATA[L()].sbScreens;
  const g=document.getElementById('sb-grid');
  g.innerHTML='';
  sc.forEach((s,i)=>{
    const patterns=[
      '<div class="sb-bar title-bar"></div><div class="sb-bar m"></div><div class="sb-bar s"></div>',
      '<div class="sb-bar title-bar"></div><div class="sb-bar m"></div><div class="sb-bar m"></div><div class="sb-bar s"></div>',
      '<div class="sb-bar title-bar"></div><div class="sb-bar s"></div><div class="sb-bar btn-m"></div>',
      '<div class="sb-bar title-bar"></div><div class="sb-bar m"></div><div class="sb-bar s"></div><div class="sb-bar m"></div>',
    ];
    const d=document.createElement('div');
    d.className='sb-frame';
    d.onclick=()=>{
      document.getElementById('sbd-t').textContent=DATA[L()].sbScreens[i].title;
      document.getElementById('sbd-d').textContent=DATA[L()].sbScreens[i].desc;
      document.getElementById('sbd-tags').innerHTML=tags(DATA[L()].sbScreens[i].tags);
      document.getElementById('sb-ov').classList.add('open');
    };
    d.innerHTML=`<div class="sb-screen">${patterns[i%4]}</div><div class="sb-meta"><span class="sb-num">${s.num}</span><span class="sb-ttl">${s.title}</span></div>`;
    g.appendChild(d);
  });
}

function renderJourney(){
  const ph=DATA[L()].journeyPhases;
  const pg=document.getElementById('j-phases');
  pg.innerHTML='';
  ph.forEach((p,i)=>{
    const d=document.createElement('div');
    d.className='j-ph';
    d.onclick=()=>showJDetail(i);
    d.innerHTML=`<div class="ji">${p.icon}</div><div class="jl">${p.label}</div><div class="js">${p.sub}</div>`;
    pg.appendChild(d);
  });
  const track=document.getElementById('emo-track');
  const lbls=document.getElementById('emo-blbls');
  track.innerHTML=''; lbls.innerHTML='';
  const maxH=44;
  ph.forEach((p,i)=>{
    const b=document.createElement('div');
    b.className='emo-bar';
    b.style.height=Math.round((p.feeling/100)*maxH)+'px';
    b.onclick=()=>showJDetail(i);
    track.appendChild(b);
    const l=document.createElement('span');
    l.textContent=p.icon;
    lbls.appendChild(l);
  });
  document.getElementById('emo-lbl').textContent=STRINGS[L()]['emo-lbl'];
}
function showJDetail(i){
  const p=DATA[L()].journeyPhases[i];
  document.querySelectorAll('.j-ph').forEach((el,j)=>el.classList.toggle('sel',j===i));
  document.getElementById('jd-phase').textContent=p.label;
  document.getElementById('jd-title').textContent=p.feeling+'% '+  (isAr?'مستوى الانخراط':'engagement');
  document.getElementById('jd-desc').textContent=p.detail;
  document.getElementById('jrn-detail').style.display='block';
}

function renderPres(){
  const items=DATA[L()].presentations;
  const g=document.getElementById('pres-grid');
  g.innerHTML='';
  items.forEach((p,i)=>{
    const d=document.createElement('div');
    d.className='slide-card';
    d.onclick=()=>{
      document.getElementById('presd-t').textContent=DATA[L()].presentations[i].name;
      document.getElementById('presd-d').textContent=DATA[L()].presentations[i].desc;
      document.getElementById('presd-tags').innerHTML=tags(DATA[L()].presentations[i].tags);
      document.getElementById('pres-ov').classList.add('open');
    };
    d.innerHTML=`<div class="slide-prev"><div class="sp-icon">${p.icon}</div><div class="sp-bar"></div><div class="sp-line"></div></div><div class="slide-meta"><div class="sn">${isAr?'عرض':'Deck'} ${p.num}</div><div class="st">${p.name}</div></div>`;
    g.appendChild(d);
  });
}

function renderProto(){
  const items=DATA[L()].prototypes;
  const g=document.getElementById('proto-grid');
  g.innerHTML='';
  items.forEach((p,i)=>{
    const d=document.createElement('div');
    d.className='proto-card';
    d.onclick=()=>{
      document.getElementById('protod-t').textContent=DATA[L()].prototypes[i].name;
      document.getElementById('protod-d').textContent=DATA[L()].prototypes[i].desc;
      document.getElementById('protod-tags').innerHTML=tags(DATA[L()].prototypes[i].tags);
      document.getElementById('proto-ov').classList.add('open');
    };
    d.innerHTML=`<div class="proto-screen"><div class="proto-nav"><div class="proto-dot"></div><div class="proto-dot"></div><div class="proto-dot"></div></div><div class="proto-body"><div style="font-size:1.7rem">${p.icon}</div><div style="height:7px;background:var(--border);border-radius:2px;width:65%"></div><div style="height:5px;background:var(--border);border-radius:2px;width:45%"></div></div></div><div class="proto-info"><h4>${p.name}</h4><p>${p.desc.substring(0,55)}…</p></div>`;
    g.appendChild(d);
  });
}

function renderTrain(){
  const items=DATA[L()].training;
  const g=document.getElementById('train-list');
  g.innerHTML='';
  items.forEach((t,i)=>{
    const d=document.createElement('div');
    d.className='train-item';
    d.onclick=()=>{
      document.getElementById('traind-t').textContent=DATA[L()].training[i].name;
      document.getElementById('traind-d').textContent=DATA[L()].training[i].desc;
      document.getElementById('traind-tags').innerHTML=tags(DATA[L()].training[i].tags);
      document.getElementById('train-ov').classList.add('open');
    };
    d.innerHTML=`<div class="t-ic">${t.icon}</div><div class="t-info"><h4>${t.name}</h4><p>${t.desc}</p><div class="t-tags">${tags(t.tags)}</div></div>`;
    g.appendChild(d);
  });
}

function closeDet(id,e){
  const el=document.getElementById(id);
  if(!e||e.target===el) el.classList.remove('open');
}

/* ── DOC TABS ── */
function dTab(id,btn){
  document.querySelectorAll('.d-sec').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.d-tab').forEach(b=>b.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
}

/* ── SKILL TABS ── */
function showTab(t,btn){
  document.querySelectorAll('.s-panel').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.s-tab').forEach(b=>b.classList.remove('on'));
  document.getElementById('panel-'+t).classList.add('on');
  btn.classList.add('on');
}

/* ── MODAL ── */
function openModal(){document.getElementById('proj-modal').classList.add('open')}
function closeModal(){document.getElementById('proj-modal').classList.remove('open')}
document.getElementById('proj-modal').addEventListener('click',function(e){if(e.target===this)closeModal()});

/* ── LANG / THEME ── */
function toggleLang(){
  isAr=!isAr;
  applyStrings();
  if(currentGallery) openGallery(currentGallery);
}
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'');
  document.getElementById('theme-btn').textContent=isDark?'☀':'◐';
}

/* ── SCROLL ANIMATIONS ── */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:.08});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t)t.scrollIntoView({behavior:'smooth'});
  });
});

