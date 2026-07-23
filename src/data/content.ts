export type Lang = 'en' | 'ar';

export const profile = {
  name: { en: 'Ibrahim Al-Atyan', ar: 'إبراهيم بن سامي عتيان' },
  roles: {
    en: ['AI Engineer', 'Data Scientist', 'Data Analyst', 'ML Engineer', 'BI Developer'],
    ar: ['مهندس ذكاء اصطناعي', 'عالم بيانات', 'محلل بيانات', 'مهندس تعلم آلي', 'مطوّر أنظمة أعمال ذكية'],
  },
  location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
  email: 'ibrahim.alatyan@gmail.com',
  phone: '+966503157394',
  linkedin: 'https://www.linkedin.com/in/ibrahim-al-atyan-663971251/',
  github: 'https://github.com/ibrahim-alatyan',
  resume: '/resume.pdf',
  portrait: '/profile/portrait.jpg',
  summary: {
    en: 'AI & Data Science graduate with hands-on production experience building end-to-end AI systems, automated data pipelines, and analytical dashboards. Expertise in Machine Learning, NLP, Deep Learning, and Computer Vision, developed through industry co-ops at Solutions by STC and KACST. Skilled at turning complex data into strategic insight using Python, SQL, Power BI, and modern ML frameworks.',
    ar: 'خريج ذكاء اصطناعي وعلوم بيانات مع خبرة عملية فعلية في بناء أنظمة ذكاء اصطناعي متكاملة، وخطوط بيانات آلية، ولوحات تحليلية. لدي خبرة في التعلم الآلي، معالجة اللغة الطبيعية، التعلم العميق، والرؤية الحاسوبية، اكتسبتها من خلال برامج تعاون مع "حلول من إس تي سي" و"مدينة الملك عبدالعزيز للعلوم والتقنية". أجيد تحويل البيانات المعقّدة إلى رؤى استراتيجية باستخدام Python وSQL وPower BI وأطر التعلم الآلي الحديثة.',
  },
};

export const education = {
  degree: {
    en: 'B.Sc. in Applied Information Systems — Data Science Track',
    ar: 'بكالوريوس نظم المعلومات التطبيقية — مسار علوم البيانات',
  },
  school: { en: 'King Saud University', ar: 'جامعة الملك سعود' },
  detail: {
    en: 'Grade: Very Good — 9th in class',
    ar: 'التقدير: جيد جدًا — الترتيب التاسع على الدفعة',
  },
  period: '07/2020 – 01/2026',
};

export interface ExperienceItem {
  role: { en: string; ar: string };
  org: { en: string; ar: string };
  dept: { en: string; ar: string };
  period: string;
  bullets: { en: string; ar: string }[];
}

export const experience: ExperienceItem[] = [
  {
    role: { en: 'AI & Data Intern', ar: 'متدرب ذكاء اصطناعي وبيانات' },
    org: { en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
    dept: { en: 'AI, Data & Emerging Tech Department', ar: 'إدارة الذكاء الاصطناعي والبيانات والتقنيات الناشئة' },
    period: '01/2026 – 02/2026',
    bullets: [
      {
        en: 'Designed and deployed an interactive Power BI dashboard visualizing key business KPIs, enabling real-time, data-driven decisions for internal stakeholders.',
        ar: 'صمّمت ونشرت لوحة تحكم تفاعلية على Power BI لعرض مؤشرات الأداء الرئيسية، مما مكّن أصحاب القرار من اتخاذ قرارات مبنية على بيانات فورية.',
      },
    ],
  },
  {
    role: { en: 'AI & Data Co-op', ar: 'متعاون ذكاء اصطناعي وبيانات' },
    org: { en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
    dept: { en: 'AI, Data & Emerging Tech Department', ar: 'إدارة الذكاء الاصطناعي والبيانات والتقنيات الناشئة' },
    period: '08/2025 – 01/2026',
    bullets: [
      {
        en: 'Architected a production-level AI document processing system using LLMs and OCR, reducing manual extraction effort by ~70%.',
        ar: 'صمّمت نظام معالجة مستندات إنتاجي يعتمد على نماذج اللغة الكبيرة وتقنية OCR، ما قلّل جهد الاستخراج اليدوي بنسبة ~70%.',
      },
      {
        en: 'Built an end-to-end automated Minutes-of-Meeting pipeline using speech-to-text (Whisper) and LLMs, significantly cutting documentation time.',
        ar: 'بنيت خط أتمتة كامل لتفريغ محاضر الاجتماعات باستخدام تحويل الصوت إلى نص (Whisper) ونماذج اللغة الكبيرة، ما قلّص وقت التوثيق بشكل كبير.',
      },
      {
        en: 'Developed an HR Analytics Dashboard in Python and SQL with dynamic workforce segmentation for headcount and performance analysis.',
        ar: 'طوّرت لوحة تحليلات موارد بشرية بلغة Python وSQL مع تقسيم ديناميكي للقوى العاملة لتحليل الأعداد والأداء.',
      },
      {
        en: 'Created an AI customer-feedback chatbot using RAG, NLP, and sentiment analysis, converting unstructured feedback into product insights.',
        ar: 'أنشأت روبوت محادثة لتحليل ملاحظات العملاء باستخدام RAG ومعالجة اللغة الطبيعية وتحليل المشاعر، لتحويل الملاحظات غير المهيكلة إلى رؤى منتج.',
      },
    ],
  },
  {
    role: { en: 'AI Co-op', ar: 'متعاون ذكاء اصطناعي' },
    org: { en: 'King Abdulaziz City for Science and Technology (KACST)', ar: 'مدينة الملك عبدالعزيز للعلوم والتقنية' },
    dept: { en: 'Visual & Predictive Analytics Department', ar: 'إدارة التحليلات البصرية والتنبؤية' },
    period: '06/2025 – 08/2025',
    bullets: [
      {
        en: 'Executed image preprocessing workflows and trained computer vision models in PyTorch for a classified national research initiative.',
        ar: 'نفّذت خطوات معالجة أولية للصور ودرّبت نماذج رؤية حاسوبية باستخدام PyTorch ضمن مبادرة بحثية وطنية مصنّفة.',
      },
    ],
  },
];

export type ProjectCategory = 'personal' | 'ksu' | 'hackathon' | 'bootcamp' | 'stc-task' | 'kacst';

export interface Project {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  image?: string;
  confidential?: boolean;
  org?: { en: string; ar: string };
  year?: string;
  confidentialNote?: { en: string; ar: string };
}

export const projects: Project[] = [
  {
    id: 'ai-recruitment',
    year: '2025',
    title: { en: 'AI-Powered Recruitment System', ar: 'نظام توظيف مدعوم بالذكاء الاصطناعي' },
    description: {
      en: 'Full-stack AI recruitment system with automated resume parsing, semantic candidate–role matching, and ML-based scoring. Used transformer-based NLP for skill extraction, achieving strong matching accuracy across diverse job profiles. Graduation project, King Saud University.',
      ar: 'نظام توظيف متكامل يقوم بتحليل السير الذاتية تلقائيًا، ومطابقة دلالية بين المرشحين والوظائف، وتقييم عبر التعلم الآلي. استُخدمت نماذج NLP قائمة على المحوّلات لاستخراج المهارات، بدقة مطابقة عالية عبر وظائف متنوعة. مشروع التخرج، جامعة الملك سعود.',
    },
    tags: ['Python', 'NLP', 'Transformers', 'Full-Stack', 'ML Scoring'],
    category: 'ksu',
    github: 'https://github.com/Osama-Alamri/Graduation-Project',
    image: '/projects/ai-recruitment.jpg',
  },
  {
    id: 'unieventhub',
    year: '2025',
    title: { en: 'UniEventHub', ar: 'ملتقى الفعاليات الجامعية' },
    description: {
      en: 'A central platform for discovering, organizing, and registering for campus events, built during the "Al-Tahawwul" hackathon at KSU.',
      ar: 'منصة مركزية لاكتشاف وتنظيم فعاليات الحرم الجامعي والتسجيل فيها، بُنيت خلال هاكاثون "التحوّل" بجامعة الملك سعود.',
    },
    tags: ['Web Platform', 'Hackathon', 'UX'],
    category: 'hackathon',
    demo: 'https://unievent-hub.com',
    github: 'https://github.com/abdullrahman011/university-event-hub',
    image: '/projects/unieventhub.jpg',
    org: { en: 'Hackathon "Al-Tahawwul" — KSU', ar: 'هاكاثون "التحوّل" — جامعة الملك سعود' },
  },
  {
    id: 'labor-market',
    year: '2026',
    title: { en: 'Saudi Labor Market Analysis', ar: 'تحليل سوق العمل السعودي' },
    description: {
      en: 'Analyzed 1,470 job listings from Jadarat (the Saudi national job portal) with Python for cleaning and EDA, and built an interactive Power BI dashboard uncovering salary trends by region, sector, and experience level.',
      ar: 'حلّلت 1,470 إعلان وظيفي من منصة جدارات باستخدام Python للتنظيف والاستكشاف، وبنيت لوحة Power BI تفاعلية تكشف اتجاهات الرواتب حسب المنطقة والقطاع ومستوى الخبرة.',
    },
    tags: ['Python', 'EDA', 'Power BI', 'Data Analysis'],
    category: 'personal',
    github: 'https://github.com/ibrahim-alatyan/Saudi-Labor-Market-Analysis',
  },
  {
    id: 'storelytics',
    year: '2025',
    title: { en: 'Storelytics', ar: 'ستوريلتكس' },
    description: {
      en: 'A personal analytics project exploring retail sales data to surface actionable business insights through data pipelines and visualization.',
      ar: 'مشروع تحليلي شخصي يستكشف بيانات مبيعات التجزئة لاستخراج رؤى عملية عبر خطوط معالجة بيانات وتصورات بيانية.',
    },
    tags: ['Python', 'Data Pipeline', 'Visualization'],
    category: 'personal',
    github: 'https://github.com/ibrahim-alatyan/Storelytics',
  },
  {
    id: 'content-recommender',
    year: '2025',
    title: { en: 'Content Recommender', ar: 'محرّك التوصية بالمحتوى' },
    description: {
      en: 'A content-based recommendation engine that matches items to user profiles using similarity modeling — a personal exploration of recommender-system fundamentals.',
      ar: 'محرك توصية قائم على تحليل المحتوى يطابق العناصر مع اهتمامات المستخدم باستخدام نمذجة التشابه — مشروع شخصي لاستكشاف أساسيات أنظمة التوصية.',
    },
    tags: ['Python', 'Recommender Systems', 'ML'],
    category: 'personal',
    github: 'https://github.com/ibrahim-alatyan/content-recommender',
  },
  {
    id: 'rag-chatbot',
    year: '2025',
    title: { en: 'RAG Chatbot & Sentiment Analysis', ar: 'روبوت محادثة RAG وتحليل المشاعر' },
    description: {
      en: 'A customer-feedback assistant combining Retrieval-Augmented Generation with sentiment analysis to turn unstructured feedback into structured insight. Built as a task during the Solutions by STC co-op.',
      ar: 'مساعد لتحليل ملاحظات العملاء يجمع بين تقنية RAG وتحليل المشاعر لتحويل الملاحظات غير المهيكلة إلى رؤى منظمة. أُنجز كمهمة خلال فترة التعاون مع حلول من إس تي سي.',
    },
    tags: ['RAG', 'NLP', 'Sentiment Analysis', 'LLM'],
    category: 'stc-task',
    github: 'https://github.com/ibrahim-alatyan/RAG-Chatbot-and-Sentiment-Analysis',
    org: { en: 'Task — Solutions by STC', ar: 'مهمة — حلول من إس تي سي' },
  },
  {
    id: 'hr-dashboard',
    year: '2025',
    title: { en: 'HR Analytics Dashboard', ar: 'لوحة تحليلات الموارد البشرية' },
    description: {
      en: 'A workforce analytics dashboard in Python and SQL with dynamic segmentation for headcount and performance analysis. Built as a task during the Solutions by STC co-op.',
      ar: 'لوحة تحليلات للقوى العاملة بلغة Python وSQL مع تقسيم ديناميكي لتحليل الأعداد والأداء. أُنجزت كمهمة خلال فترة التعاون مع حلول من إس تي سي.',
    },
    tags: ['Python', 'SQL', 'Dashboard', 'HR Analytics'],
    category: 'stc-task',
    github: 'https://github.com/ibrahim-alatyan/HR_Analysis_DASHBOARD',
    org: { en: 'Task — Solutions by STC', ar: 'مهمة — حلول من إس تي سي' },
  },
  {
    id: 'smartlist',
    year: '2025',
    title: { en: 'SmartList', ar: 'سمارت ليست' },
    description: {
      en: 'An AI task and goal-management tool built with Streamlit and Google Gemini AI during the SDAIA bootcamp.',
      ar: 'أداة لإدارة المهام والأهداف مدعومة بالذكاء الاصطناعي، بُنيت باستخدام Streamlit وGoogle Gemini خلال معسكر سدايا التدريبي.',
    },
    tags: ['Streamlit', 'Gemini AI', 'Python'],
    category: 'bootcamp',
    github: 'https://github.com/Osama-Alamri/SmartList_project',
    org: { en: 'SDAIA Bootcamp', ar: 'معسكر سدايا التدريبي' },
  },
  {
    id: 'loan-eligibility',
    year: '2024',
    title: { en: 'Loan Eligibility Classification', ar: 'تصنيف الأهلية للقروض' },
    description: {
      en: 'Applied classification models (Logistic Regression, Decision Tree) to the Loan Prediction dataset, identifying credit history as the strongest predictive feature.',
      ar: 'طبّقت نماذج تصنيف (الانحدار اللوجستي وشجرة القرار) على بيانات التنبؤ بالقروض، وحدّدت السجل الائتماني كأقوى عامل تنبؤي.',
    },
    tags: ['Python', 'Scikit-Learn', 'Classification'],
    category: 'ksu',
    github: 'https://github.com/Osama-Alamri/Using-Data-Science-to-Classify-Loan-Eligible-Customers',
  },
];

export const confidentialProjects: Project[] = [
  {
    id: 'stc-kpi-dashboard',
    year: '2026',
    title: { en: 'Executive KPI Dashboard', ar: 'لوحة مؤشرات الأداء التنفيذية' },
    description: {
      en: 'An interactive Power BI dashboard visualizing department-level KPIs for senior leadership, enabling real-time strategic decisions.',
      ar: 'لوحة Power BI تفاعلية تعرض مؤشرات أداء القسم لكبار المدراء، لدعم القرارات الاستراتيجية اللحظية.',
    },
    tags: ['Power BI', 'KPI Reporting'],
    category: 'stc-task',
    confidential: true,
    org: { en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
    confidentialNote: {
      en: 'Screenshot for illustration only. Full dashboard is internal to Solutions by STC.',
      ar: 'الصورة للتوضيح فقط. اللوحة الكاملة داخلية لدى حلول من إس تي سي.',
    },
  },
  {
    id: 'stc-doc-ai',
    year: '2025',
    title: { en: 'AI Document Processing System', ar: 'نظام معالجة المستندات بالذكاء الاصطناعي' },
    description: {
      en: 'A production-level system combining LLMs and OCR to automate document extraction, reducing manual effort by roughly 70%.',
      ar: 'نظام إنتاجي يجمع بين نماذج اللغة الكبيرة وتقنية OCR لأتمتة استخراج بيانات المستندات، بتقليل الجهد اليدوي بنحو 70%.',
    },
    tags: ['LLM', 'OCR', 'Automation'],
    category: 'stc-task',
    confidential: true,
    org: { en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
    confidentialNote: {
      en: 'System is internal to Solutions by STC — architecture described at a high level only.',
      ar: 'النظام داخلي لدى حلول من إس تي سي — الوصف هنا عام فقط.',
    },
  },
  {
    id: 'stc-mom',
    year: '2025',
    title: { en: 'Automated Minutes-of-Meeting', ar: 'أتمتة محاضر الاجتماعات' },
    description: {
      en: 'An end-to-end pipeline using Whisper speech-to-text and LLMs to auto-generate meeting minutes, cutting documentation time significantly.',
      ar: 'خط معالجة متكامل يستخدم Whisper وتحويل الصوت إلى نص ونماذج اللغة الكبيرة لتوليد محاضر الاجتماعات تلقائيًا.',
    },
    tags: ['Whisper', 'LLM', 'Speech-to-Text'],
    category: 'stc-task',
    confidential: true,
    org: { en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
    confidentialNote: {
      en: 'Pipeline is deployed internally at Solutions by STC — not publicly available.',
      ar: 'الخط منشور داخليًا لدى حلول من إس تي سي — غير متاح للعموم.',
    },
  },
  {
    id: 'kacst-cv',
    year: '2025',
    title: { en: 'Classified Computer Vision Project', ar: 'مشروع رؤية حاسوبية مصنّف' },
    description: {
      en: 'Image preprocessing workflows and PyTorch computer-vision model training for a classified national research initiative.',
      ar: 'خطوات معالجة أولية للصور وتدريب نماذج رؤية حاسوبية بواسطة PyTorch ضمن مبادرة بحثية وطنية مصنّفة.',
    },
    tags: ['PyTorch', 'Computer Vision'],
    category: 'kacst',
    confidential: true,
    org: { en: 'KACST', ar: 'مدينة الملك عبدالعزيز للعلوم والتقنية' },
    confidentialNote: {
      en: 'Early-stage overview only. Full system and data are internal to KACST.',
      ar: 'نظرة عامة أولية فقط. النظام والبيانات كاملة داخلية لدى KACST.',
    },
  },
];

export const skillGroups = [
  {
    title: { en: 'Languages', ar: 'لغات البرمجة' },
    items: ['Python', 'SQL', 'R', 'Java', 'HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    title: { en: 'AI / ML', ar: 'الذكاء الاصطناعي والتعلم الآلي' },
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Prompt Engineering', 'Feature Engineering', 'Model Evaluation', 'ML Pipelines'],
  },
  {
    title: { en: 'Frameworks', ar: 'أطر العمل' },
    items: ['PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Hugging Face Transformers'],
  },
  {
    title: { en: 'AI Dev & Apps', ar: 'تطوير تطبيقات الذكاء الاصطناعي' },
    items: ['Streamlit', 'LLM Integration', 'API-Based AI Solutions', 'Whisper (Speech-to-Text)', 'End-to-End AI Systems'],
  },
  {
    title: { en: 'BI & Analytics', ar: 'ذكاء الأعمال والتحليلات' },
    items: ['Power BI', 'Tableau', 'Advanced Excel', 'Data Visualization', 'Dashboard Design', 'KPI Reporting'],
  },
  {
    title: { en: 'Data Engineering', ar: 'هندسة البيانات' },
    items: ['ETL Pipelines', 'SQL Data Management', 'Data Preprocessing', 'OCR & Document Processing'],
  },
  {
    title: { en: 'Tools', ar: 'أدوات' },
    items: ['Jupyter Notebook', 'Git', 'GitHub', 'VS Code'],
  },
];

export interface Certificate {
  title: { en: string; ar: string };
  issuer: { en: string; ar: string };
  date: string;
  image?: string;
  credentialId?: string;
  featured?: boolean;
}

export const certificates: Certificate[] = [
  { title: { en: 'Certified Data Management Professional (Associate)', ar: 'أخصائي إدارة بيانات معتمد (مساعد)' }, issuer: { en: 'DAMA International', ar: 'DAMA الدولية' }, date: '01/2026', image: '/certificates/CDMP_Certificate.jpg', credentialId: '18108008', featured: true },
  { title: { en: 'Building Transformer-Based NLP Applications', ar: 'بناء تطبيقات معالجة اللغة الطبيعية القائمة على المحوّلات' }, issuer: { en: 'NVIDIA', ar: 'إنفيديا' }, date: '03/2026', image: '/certificates/NLP_NVIDIA.jpg', credentialId: 'WKYURJ_PSaq7N_LWHKTxOA', featured: true },
  { title: { en: 'Data Science Professional', ar: 'أخصائي علوم البيانات' }, issuer: { en: 'IBM', ar: 'آي بي إم' }, date: '02/2025', image: '/certificates/IBM_Data_Science_Professional_Certificate.jpg', featured: true },
  { title: { en: 'AI Application Building Bootcamp in Python', ar: 'معسكر بناء تطبيقات الذكاء الاصطناعي بلغة بايثون' }, issuer: { en: 'SDAIA', ar: 'سدايا' }, date: '01/2025', image: '/certificates/Ai_application_building_bootcamp_in_python_certificate.jpg', featured: true },
  { title: { en: 'Advanced Agentic AI Systems Engineering', ar: 'هندسة أنظمة الذكاء الاصطناعي التوكيلي المتقدمة' }, issuer: { en: 'SDAIA', ar: 'سدايا' }, date: '07/2026', image: '/certificates/Agentic_AI_certificate.jpg' },
  { title: { en: 'Building NLP Applications', ar: 'بناء تطبيقات معالجة اللغة الطبيعية' }, issuer: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' }, date: '03/2026', image: '/certificates/Tuwaiq_NLP_Cetificate.jpg' },
  { title: { en: 'Advanced Internet of Things (IoT)', ar: 'إنترنت الأشياء المتقدم' }, issuer: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' }, date: '01/2026', image: '/certificates/Advanced_Internet_of_Things__IoT_.jpg' },
  { title: { en: 'Applied Data Science', ar: 'علوم البيانات التطبيقية' }, issuer: { en: 'IBM', ar: 'آي بي إم' }, date: '02/2025', image: '/certificates/Applied_Data_Science_Certificate.jpg' },
  { title: { en: 'AI Foundations for Business', ar: 'أساسيات الذكاء الاصطناعي للأعمال' }, issuer: { en: 'IBM', ar: 'آي بي إم' }, date: '03/2025', image: '/certificates/AI_Foundations_for_Business_Certificate.jpg' },
  { title: { en: 'Fundamentals of Microcontroller Programming (Arduino)', ar: 'أساسيات برمجة المتحكمات الدقيقة (أردوينو)' }, issuer: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' }, date: '07/2025', image: '/certificates/Ardunio_Tuwaiq.jpg' },
  { title: { en: 'Virtual Work Experience — Data Analytics', ar: 'تجربة عمل افتراضية — تحليل البيانات' }, issuer: { en: 'Misk Skills × STC', ar: 'مسك المهارات × إس تي سي' }, date: '03/2025', image: '/certificates/STC_MISK_DA.jpg' },
  { title: { en: 'Design Thinking in Business: Building Promising Ventures', ar: 'التفكير التصميمي في الأعمال: بناء مشاريع واعدة' }, issuer: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' }, date: '08/2025', image: '/certificates/Design_Thinking_in_Business.jpg' },
  { title: { en: 'Data Science Foundations', ar: 'أساسيات علوم البيانات' }, issuer: { en: 'IBM', ar: 'آي بي إم' }, date: '07/2024' },
  { title: { en: 'Data Fundamentals', ar: 'أساسيات البيانات' }, issuer: { en: 'IBM', ar: 'آي بي إم' }, date: '05/2024' },
  { title: { en: 'Advanced Excel', ar: 'إكسل المتقدم' }, issuer: { en: 'King Saud University', ar: 'جامعة الملك سعود' }, date: '02/2022' },
  { title: { en: 'Microsoft Excel', ar: 'مايكروسوفت إكسل' }, issuer: { en: 'King Saud University', ar: 'جامعة الملك سعود' }, date: '02/2022' },
  { title: { en: 'Introduction to Artificial Intelligence', ar: 'مقدمة في الذكاء الاصطناعي' }, issuer: { en: 'KAUST', ar: 'جامعة الملك عبدالله للعلوم والتقنية' }, date: '03/2023' },
];
