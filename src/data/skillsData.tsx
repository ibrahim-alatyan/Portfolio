import type { ComponentType } from 'react';
import {
  SiPython, SiR, SiJavascript, SiHtml5, SiCss, SiPhp,
  SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiHuggingface,
  SiStreamlit, SiJupyter, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import {
  Database, Palette, Code2, Mic, Brain, Layers, MessageSquare, Eye,
  Wand2, Link2, Radar, CheckCircle2, BarChart3, LineChart, Table2,
  Gauge, Workflow, ScanText, FileCode2,
} from 'lucide-react';

export interface SkillItem {
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  description: { en: string; ar: string };
}

export interface SkillCategory {
  key: string;
  title: { en: string; ar: string };
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'languages',
    title: { en: 'Languages', ar: 'لغات البرمجة' },
    items: [
      { name: 'Python', icon: SiPython, description: { en: 'Core language for every ML pipeline, dashboard, and automation script I ship.', ar: 'اللغة الأساسية لكل خط تعلم آلي ولوحة بيانات وسكربت أتمتة أبنيه.' } },
      { name: 'SQL', icon: Database, description: { en: 'Querying and shaping data for dashboards, HR analytics, and ETL pipelines.', ar: 'استعلام وتهيئة البيانات للوحات التحكم وتحليلات الموارد البشرية وخطوط ETL.' } },
      { name: 'R', icon: SiR, description: { en: 'Statistical analysis and exploratory data work during coursework.', ar: 'تحليل إحصائي واستكشاف بيانات خلال المقررات الجامعية.' } },
      { name: 'Java', icon: FaJava, description: { en: 'Object-oriented programming fundamentals from university coursework.', ar: 'أساسيات البرمجة الكائنية من المقررات الجامعية.' } },
      { name: 'JavaScript', icon: SiJavascript, description: { en: 'Front-end logic for lightweight internal tools and dashboards.', ar: 'منطق واجهات أمامية لأدوات ولوحات داخلية خفيفة.' } },
      { name: 'HTML', icon: SiHtml5, description: { en: 'Structuring web interfaces for internal tools and this portfolio.', ar: 'بناء هيكلة واجهات الويب لأدوات داخلية ولهذا الموقع.' } },
      { name: 'CSS', icon: SiCss, description: { en: "Styling responsive interfaces, including this site's dark/light themes.", ar: 'تنسيق واجهات متجاوبة، بما فيها الوضعين الداكن والفاتح لهذا الموقع.' } },
      { name: 'PHP', icon: SiPhp, description: { en: 'Server-side scripting from early web development coursework.', ar: 'برمجة من جهة الخادم من مقررات تطوير الويب المبكرة.' } },
    ],
  },
  {
    key: 'ai-ml',
    title: { en: 'AI / ML', ar: 'الذكاء الاصطناعي والتعلم الآلي' },
    items: [
      { name: 'Machine Learning', icon: Brain, description: { en: 'Classification and regression models — from loan eligibility to candidate scoring.', ar: 'نماذج تصنيف وانحدار — من الأهلية للقروض إلى تقييم المرشحين.' } },
      { name: 'Deep Learning', icon: Layers, description: { en: 'Neural network training for computer vision and NLP tasks.', ar: 'تدريب شبكات عصبية لمهام الرؤية الحاسوبية ومعالجة اللغة.' } },
      { name: 'NLP', icon: MessageSquare, description: { en: 'Sentiment analysis, RAG pipelines, and transformer-based skill extraction.', ar: 'تحليل مشاعر، خطوط RAG، واستخراج مهارات بنماذج المحوّلات.' } },
      { name: 'Computer Vision', icon: Eye, description: { en: 'Image preprocessing and CV model training for a KACST research initiative.', ar: 'معالجة صور أولية وتدريب نماذج رؤية حاسوبية لمبادرة بحثية بـKACST.' } },
      { name: 'Prompt Engineering', icon: Wand2, description: { en: 'Designing reliable prompts for document processing and chatbot systems.', ar: 'تصميم أوامر (prompts) موثوقة لأنظمة معالجة المستندات والمحادثة.' } },
      { name: 'LLM Integration', icon: Link2, description: { en: 'Wiring LLMs into production systems — document processing, MoM automation, chatbots.', ar: 'دمج نماذج اللغة الكبيرة بأنظمة إنتاجية — معالجة مستندات، أتمتة محاضر، روبوتات محادثة.' } },
      { name: 'RAG', icon: Radar, description: { en: 'Retrieval-augmented pipelines for grounded, source-based chatbot answers.', ar: 'خطوط RAG لإجابات روبوت محادثة مبنية على مصادر موثوقة.' } },
      { name: 'Model Evaluation', icon: CheckCircle2, description: { en: 'Validating model accuracy, F1, and business impact before deployment.', ar: 'التحقق من دقة النموذج وF1 وأثره على الأعمال قبل النشر.' } },
    ],
  },
  {
    key: 'frameworks',
    title: { en: 'Frameworks & Libraries', ar: 'أطر العمل والمكتبات' },
    items: [
      { name: 'PyTorch', icon: SiPytorch, description: { en: 'Training and fine-tuning computer vision models for research work.', ar: 'تدريب وضبط نماذج رؤية حاسوبية لأعمال بحثية.' } },
      { name: 'Scikit-learn', icon: SiScikitlearn, description: { en: 'Classical ML pipelines — classification, feature selection, evaluation.', ar: 'خطوط تعلم آلي كلاسيكية — تصنيف واختيار خصائص وتقييم.' } },
      { name: 'Pandas', icon: SiPandas, description: { en: 'Cleaning and transforming raw datasets — from job listings to HR data.', ar: 'تنظيف وتحويل بيانات خام — من إعلانات وظائف إلى بيانات موارد بشرية.' } },
      { name: 'NumPy', icon: SiNumpy, description: { en: 'Numerical computation underpinning most of my data pipelines.', ar: 'حسابات رقمية تقوم عليها أغلب خطوط معالجة بياناتي.' } },
      { name: 'Matplotlib', icon: BarChart3, description: { en: 'Exploratory visualizations during analysis and reporting.', ar: 'تصورات استكشافية أثناء التحليل وإعداد التقارير.' } },
      { name: 'Seaborn', icon: LineChart, description: { en: 'Statistical charting for deeper exploratory data analysis.', ar: 'رسوم بيانية إحصائية لتحليل استكشافي أعمق للبيانات.' } },
      { name: 'Hugging Face', icon: SiHuggingface, description: { en: 'Pretrained transformer models for NLP and skill extraction.', ar: 'نماذج محوّلات مدرّبة مسبقًا لمعالجة اللغة واستخراج المهارات.' } },
    ],
  },
  {
    key: 'apps-tools',
    title: { en: 'AI Apps & Tools', ar: 'تطبيقات وأدوات' },
    items: [
      { name: 'Streamlit', icon: SiStreamlit, description: { en: 'Rapid AI app prototyping — task managers, internal tools.', ar: 'نماذج تطبيقات ذكاء اصطناعي سريعة — أدوات إدارة مهام وأدوات داخلية.' } },
      { name: 'Whisper', icon: Mic, description: { en: 'Speech-to-text for the automated Minutes-of-Meeting pipeline.', ar: 'تحويل الصوت إلى نص لخط أتمتة محاضر الاجتماعات.' } },
      { name: 'Jupyter', icon: SiJupyter, description: { en: 'Iterative experimentation and analysis notebooks.', ar: 'دفاتر للتجريب التكراري والتحليل.' } },
      { name: 'Git', icon: SiGit, description: { en: 'Version control across every project in this portfolio.', ar: 'التحكم بالإصدارات عبر كل مشروع بهذا البورتفليو.' } },
      { name: 'GitHub', icon: SiGithub, description: { en: 'Hosting, collaborating on, and shipping my projects.', ar: 'استضافة مشاريعي والتعاون عليها ونشرها.' } },
      { name: 'VS Code', icon: Code2, description: { en: 'Daily development environment for everything I build.', ar: 'بيئة التطوير اليومية لكل شي أبنيه.' } },
    ],
  },
  {
    key: 'bi',
    title: { en: 'BI & Analytics', ar: 'ذكاء الأعمال والتحليلات' },
    items: [
      { name: 'Power BI', icon: Gauge, description: { en: 'Executive KPI dashboards and labor-market analysis for stakeholders.', ar: 'لوحات مؤشرات أداء تنفيذية وتحليل سوق عمل لأصحاب القرار.' } },
      { name: 'Tableau', icon: Table2, description: { en: 'Exploratory dashboards for business data storytelling.', ar: 'لوحات استكشافية لسرد قصص البيانات للأعمال.' } },
      { name: 'Advanced Excel', icon: FileCode2, description: { en: "Quick analysis and reporting when a full pipeline isn't needed.", ar: 'تحليل وتقارير سريعة عندما لا يحتاج الأمر خط معالجة كامل.' } },
      { name: 'KPI Reporting', icon: BarChart3, description: { en: 'Translating raw metrics into decisions leadership can act on.', ar: 'تحويل المؤشرات الخام إلى قرارات يقدر عليها صناع القرار.' } },
    ],
  },
  {
    key: 'data-eng',
    title: { en: 'Data Engineering', ar: 'هندسة البيانات' },
    items: [
      { name: 'ETL Pipelines', icon: Workflow, description: { en: 'Extracting, cleaning, and loading data for dashboards and models.', ar: 'استخراج وتنظيف وتحميل البيانات للوحات التحكم والنماذج.' } },
      { name: 'OCR & Document Processing', icon: ScanText, description: { en: 'Automated document extraction system cutting manual effort ~70%.', ar: 'نظام استخراج مستندات آلي قلّل الجهد اليدوي بنحو 70%.' } },
      { name: 'Data Preprocessing', icon: Palette, description: { en: 'Preparing raw, messy data for reliable model training.', ar: 'تجهيز بيانات خام وغير منظمة لتدريب نماذج موثوق.' } },
    ],
  },
];
