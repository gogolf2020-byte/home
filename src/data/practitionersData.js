import qianPhoto from '../assets/doctors/1_qian.png'
import wangPhoto from '../assets/doctors/2_wang.png'
import helenePhoto from '../assets/22.jpg'

export const practitionersData = [
  {
    id: 'dr-damen-qian',
    slug: 'dr-damen-qian',
    name: {
      zh: '前 达 门',
      en: 'Dr. Damen QIAN (Ph.D.)',
      de: 'Dr. med. Damen QIAN'
    },
    shortTitle: {
      zh: '医学博士 · 民族医学（蒙医方向）',
      en: 'Ph.D. in Ethnomedicine & Mongolian Acupuncture',
      de: 'Dr. med. Ethnomedizin & Mongolische Akupunktur'
    },
    title: {
      zh: '医学博士 ｜ 民族医学（蒙医传统针灸与五疗方向）',
      en: 'Ph.D. in Ethnomedicine | Traditional Mongolian Acupuncture & Five Therapies',
      de: 'Dr. med. Ethnomedizin | Traditionelle Mongolische Akupunktur & Fünf Therapien'
    },
    mentor: {
      zh: '导师：国家岐黄学者、国家非遗传承人 乌兰教授',
      en: 'Mentor: Prof. Wulan (National Qihuang Scholar & Heritage Successor)',
      de: 'Doktormutter: Prof. Wulan (Nationaler Qihuang-Gelehrter & Erbe des Kulturerbes)'
    },
    photo: qianPhoto,
    hometown: {
      zh: '籍贯：内蒙古自治区赤峰市',
      en: 'Hometown: Chifeng, Inner Mongolia',
      de: 'Herkunft: Chifeng, Innere Mongolei'
    },
    tags: {
      zh: ['北京中医药大学博士', '岐黄学者门生', '蒙医传统针灸', '抑郁机制研究'],
      en: ['Ph.D. BUCM', 'Mentored by Qihuang Scholar', 'Mongolian Acupuncture', 'Neuropsychiatric Research'],
      de: ['Dr. med. BUCM', 'Schüler von Qihuang-Gelehrte', 'Mongolische Akupunktur', 'Neuropsychiatrische Forschung']
    },
    shortDesc: {
      zh: '毕业于北京中医药大学，深耕蒙医传统针刺、火针、放血及神经抑郁调理机制，擅长脊柱病变与顽固性痛症。',
      en: 'Ph.D. from BUCM specializing in Mongolian acupuncture, fire needle, bloodletting, and neurological depression mechanisms.',
      de: 'Promoviert an der BUCM, Spezialist für mongolische Akupunktur, Feuernadel, Aderlass und Wirbelsäulenerkrankungen.'
    },
    bioParagraphs: {
      zh: [
        '前达门，医学博士，毕业于北京中医药大学民族医学专业（蒙医五疗方向），师从国家岐黄学者、国家级非物质文化遗产传承人乌兰教授。先后在内蒙古医科大学获得蒙医学学士及民族医学（蒙医整骨方向）硕士学位，并在内蒙古国际蒙医医院完成临床规范化培训。',
        '博士期间围绕“蒙医震脑术干预抑郁症机制”开展系统深入研究，建立 CUMS 动物模型，重点攻克 5-HT 介导 cAMP-PKA-CREB-BDNF 信号通路及 PIEZO 机械刺激靶点机制。发表多篇学术论文，并积极参与民族医学科研与学术期刊编译。',
        '临床擅长将蒙医传统针刺、火针、温针、放血疗法等技艺与蒙药辨证施治有机结合，针对脑卒中后遗症、颈椎病、腰椎间盘突出症、肩周炎、急慢性腰扭挫伤及失眠、抑郁、焦虑、消化系统疾病提供个性化调理方案。'
      ],
      en: [
        'Dr. Damen Qian holds a Ph.D. in Ethnomedicine from Beijing University of Chinese Medicine (BUCM), specializing in Traditional Mongolian Acupuncture and Five Therapies under the guidance of Prof. Wulan, a National Qihuang Scholar and National Representative Successor of Intangible Cultural Heritage. He earned his Master\'s degree in Ethnomedicine (Mongolian Osteopathy) and Bachelor\'s degree in Mongolian Medicine from Inner Mongolia Medical University (IMMU), and completed standardized clinical residency training at Inner Mongolia International Mongolian Hospital.',
        'In doctoral research, Dr. Qian systematically investigated the neurobiological mechanisms of Mongolian Mind-Shaking Therapy (震脑术) on depression using Chronic Unpredictable Mild Stress (CUMS) models, elucidating 5-HT-mediated cAMP-PKA-CREB-BDNF signaling pathways and PIEZO mechanosensitive ion channels. He has published multiple academic papers and actively engaged in national ethnomedicine research projects.',
        'In clinical practice, Dr. Qian excels in traditional Mongolian acupuncture (including fire needle, warm needle, and bloodletting therapies) combined with syndrome-differentiated Mongolian herbal medicine, providing specialized care for stroke recovery, spinal/joint disorders, chronic pain, insomnia, anxiety, and digestive health.'
      ],
      de: [
        'Dr. med. Damen Qian promovierte in Ethnomedizin an der Peking-Universität für Chinesische Medizin (BUCM) mit dem Schwerpunkt Traditionelle Mongolische Akupunktur und Fünf Therapien unter der Anleitung von Prof. Wulan (Nationaler Qihuang-Gelehrter & Nationaler Repräsentativer Erbe des immateriellen Kulturerbes). Sein Studium absolvierte er an der Medizinischen Universität der Inneren Mongolei (IMMU) und schloss die klinische Facharztausbildung am Internationalen Mongolischen Medizin-Krankenhaus der Inneren Mongolei ab.',
        'In seiner Promotion erforschte Dr. Qian die neurobiologischen Wirkmechanismen der Mongolischen Hirnschüttel-Therapie (Mind-Shaking Therapy) bei Depressionen (cAMP-PKA-CREB-BDNF-Signalweg und PIEZO-Mechanosensorik). Er veröffentlichte Fachaufsätze und engagiert sich in ethnomedizinischen Forschungsprojekten.',
        'Klinisch verbindet Dr. Qian traditionelle mongolische Akupunktur (inkl. Feuernadel-, Wärmenadel- und Aderlasstherapie) mit gezielter Kräuterheilkunde. Seine Schwerpunkte liegen in der Nachsorge nach Schlaganfall, Behandlung von Wirbelsäulen- und Gelenkerkrankungen, Schmerztherapie sowie Regulierung von Schlaf- und Angststörungen.'
      ]
    },
    educationList: {
      zh: [
        { period: '2023.09—2026.06', degree: '医学博士 · 民族医学专业（蒙医五疗方向）', school: '北京中医药大学' },
        { period: '2019.09—2022.07', degree: '硕士 · 民族医学专业（蒙医整骨方向）', school: '内蒙古医科大学' },
        { period: '2019.09—2022.07', degree: '医师规范化培训 · 临床规培', school: '内蒙古国际蒙医医院' },
        { period: '2014.09—2019.07', degree: '本科 · 蒙医学专业', school: '内蒙古医科大学' }
      ],
      en: [
        { period: '2023.09 – 2026.06', degree: 'Ph.D. in Ethnomedicine (Mongolian Five Therapies)', school: 'Beijing University of Chinese Medicine (BUCM)' },
        { period: '2019.09 – 2022.07', degree: 'M.S. in Ethnomedicine (Mongolian Osteopathy)', school: 'Inner Mongolia Medical University (IMMU)' },
        { period: '2019.09 – 2022.07', degree: 'Standardized Clinical Residency Training', school: 'Inner Mongolia International Mongolian Hospital' },
        { period: '2014.09 – 2019.07', degree: 'B.S. in Mongolian Medicine', school: 'Inner Mongolia Medical University (IMMU)' }
      ],
      de: [
        { period: '2023.09 – 2026.06', degree: 'Dr. med. Ethnomedizin (Mongolische Fünf Therapien)', school: 'Peking-Universität für Chinesische Medizin (BUCM)' },
        { period: '2019.09 – 2022.07', degree: 'Master Ethnomedizin (Mongolische Osteopathie)', school: 'Medizinische Universität der Inneren Mongolei (IMMU)' },
        { period: '2019.09 – 2022.07', degree: 'Klinische Facharztausbildung', school: 'Internationales Mongolische Medizin-Krankenhaus' },
        { period: '2014.09 – 2019.07', degree: 'Bachelor Mongolische Medizin', school: 'Medizinische Universität der Inneren Mongolei (IMMU)' }
      ]
    },
    researchPoints: {
      zh: [
        '聚焦“蒙医震脑术干预抑郁症机制”，成功建立慢性不可预见性温和应激（CUMS）动物模型。',
        '深入分析行为学指标与脑内神经递质检测，揭示 5-HT 介导 cAMP-PKA-CREB-BDNF 信号通路的关键调控机制。',
        '探索 PIEZO 机械敏感离子通道受体在传统蒙医震脑术机械刺激中的分子生物学响应机制。',
        '积极参与国家级及省部级民族医学科研项目、蒙医药古籍文献整理及核心期刊编译工作。'
      ],
      en: [
        'Systematic investigation into the neurobiological mechanisms of Mongolian Mind-Shaking Therapy for depression using CUMS models.',
        'Behavioral evaluation & neurotransmitter analysis revealing 5-HT mediated cAMP-PKA-CREB-BDNF signaling pathways.',
        'Elucidation of PIEZO mechanosensitive ion channel responses to Mongolian therapeutic mechanical stimulation.',
        'Active contribution to ethnomedicine research grants, ancient manuscript curation, and peer-reviewed journal reviews.'
      ],
      de: [
        'Systematische Erforschung der Wirkmechanismen der Mongolischen Hirnschüttel-Therapie bei Depressionen im CUMS-Tiermodell.',
        'Verhaltens- und Neurotransmittersanalysen zur Aufklärung des 5-HT-vermittelten cAMP-PKA-CREB-BDNF-Signalwegs.',
        'Erforschung der PIEZO-Mechanosensorik als molekularer Mechanismus der therapeutischen Stimulation.',
        'Mitarbeit an ethnomedizinischen Forschungsprojekten, Erfassung historischer Manuskripte und Fachzeitschriften.'
      ]
    },
    specialtiesTitle: {
      zh: 'Specialties 临床专长',
      en: 'Specialties',
      de: 'Schwerpunkte'
    },
    specialties: {
      zh: [
        '蒙医传统针灸技术（蒙医针刺、火针、温针、放血疗法等）',
        '脑卒中后遗症、中枢及外周神经损伤恢复',
        '颈椎病、腰椎间盘突出症、肩周炎等脊柱关节病变',
        '急慢性腰扭伤及各类顽固性疼痛管理',
        '蒙药辨证施治与体质调理（失眠、抑郁、焦虑、消化系统及亚健康状态）'
      ],
      en: [
        'Traditional Mongolian Acupuncture (Acupuncture, Fire Needle, Warm Needle, Bloodletting)',
        'Stroke Sequelae & Neurological Recovery',
        'Cervical Spondylosis, Lumbar Disc Herniation & Frozen Shoulder',
        'Acute/Chronic Lumbar Sprains & Musculoskeletal Pain',
        'Syndrome-Differentiated Mongolian Herbal Conditioning (Insomnia, Depression, Anxiety & Digestive Care)'
      ],
      de: [
        'Traditionelle Mongolische Akupunktur (Klassisch, Feuernadel, Wärmenadel, Aderlass)',
        'Schlaganfall-Nachsorge & Neurologische Rehabilitation',
        'Zervikalsyndrom, Bandscheibenvorfall & Schultersteife',
        'Akute/Chronische Lendenwirbelzerrung & Schmerztherapie',
        'Differenzierte Mongolische Kräuterheilkunde (Schlafstörungen, Depressionen, Angstzustände & Magen-Darm)'
      ]
    },
    contactEmail: '18514550228@163.com'
  },
  {
    id: 'catherine-wang',
    slug: 'catherine-wang',
    name: {
      zh: 'Catherine Wang',
      en: 'Catherine Wang',
      de: 'Catherine Wang'
    },
    shortTitle: {
      zh: '新西兰注册针灸师 · ACC 认证医师 · 历史学博士',
      en: 'NZ Registered Acupuncturist · ACC Provider · Ph.D.',
      de: 'NZ Registrierte Akupunkteurin · ACC-Anbieterin · Ph.D.'
    },
    title: {
      zh: '新西兰注册针灸师 ｜ ACC 理赔认证医师 ｜ BHSc (针灸) · 历史学博士',
      en: 'New Zealand Registered Acupuncturist | ACC Provider | BHSc (Acupuncture) · Ph.D.',
      de: 'Neuseeländisch registrierte Akupunkteurin | ACC-Anbieterin | BHSc (Akupunktur) · Ph.D.'
    },
    mentor: {
      zh: 'He Yang Wellness 和养 创始人 ｜ “和其岁月 · 养其气血”',
      en: 'Founder of He Yang Wellness · "Harmony with Nature · Nourish Body & Mind"',
      de: 'Gründerin von He Yang Wellness · "Harmonie mit der Natur · Pflege von Körper & Geist"'
    },
    photo: wangPhoto,
    hometown: {
      zh: '新西兰注册针灸师 · 和养 Wellness 创始人',
      en: 'NZ Registered Acupuncturist · Founder He Yang Wellness',
      de: 'NZ Registrierte Akupunkteurin · Gründerin He Yang Wellness'
    },
    tags: {
      zh: ['新西兰注册针灸师', 'ACC 认证医师', '和养创始人', '健康科学学士', '郑州大学博士'],
      en: ['NZ Registered Acupuncturist', 'ACC Provider', 'Founder He Yang Wellness', 'BHSc Acupuncture', 'Ph.D. Zhengzhou University'],
      de: ['NZ-Registriert', 'ACC-Anbieterin', 'Gründerin He Yang Wellness', 'BHSc Akupunktur', 'Ph.D. Zhengzhou Universität']
    },
    shortDesc: {
      zh: '和养 Wellness 创始人，毕业于新西兰中医学院及郑州大学，专注痛症管理、女性全生命周期健康与睡眠舒缓。',
      en: 'Founder of He Yang Wellness, NZCCM & Zhengzhou University graduate, focusing on pain management, women\'s health, and sleep.',
      de: 'Gründerin von He Yang Wellness, Absolventin der NZCCM und Zhengzhou-Universität, spezialisiert auf Schmerztherapie und Frauengesundheit.'
    },
    bioParagraphs: {
      zh: [
        'Catherine Wang 为新西兰注册针灸师及 ACC 认证理疗医师，同时亦是“和养 (He Yang Wellness)”品牌的创始人。她于 2026 年 4 月毕业于新西兰中医学院（New Zealand College of Chinese Medicine），获健康科学（针灸专业）学士学位，此前于中国郑州大学获得中国古代史博士学位。',
        '凭借针灸专业背景与深厚的中华传统文化底蕴，Catherine 主张“和其岁月，养其气血”的整体调护理念。她认为真正健康的本质不仅在于无病无痛，更在于身心、自然与日常生活之间的调和与平衡。临床中尤其关注痛症管理、女性健康调理、压力舒缓、睡眠改善及综合亚健康调理。'
      ],
      en: [
        'Catherine Wang is a New Zealand registered acupuncturist and ACC provider, and the founder of He Yang Wellness. She graduated with a Bachelor of Health Science (Acupuncture) from the New Zealand College of Chinese Medicine in April 2026 and holds a Ph.D. in Ancient Chinese History from Zhengzhou University, China.',
        'With a background spanning clinical acupuncture and traditional Chinese culture, Catherine takes a holistic and individualized approach to care. Guided by the philosophy "Harmony with Nature · Nourish Body & Mind", she believes good health is a dynamic state of balance in body, mind and everyday life. Her clinical interests center on pain management, women’s wellness, stress reduction, sleep regulation, and general wellbeing.'
      ],
      de: [
        'Catherine Wang ist eine in Neuseeland registrierte Akupunkteurin, ACC-Behandlerin und Gründerin von He Yang Wellness. Sie schloss ihr Studium der Gesundheitswissenschaften (Akupunktur) am New Zealand College of Chinese Medicine im April 2026 ab und promovierte an der Zhengzhou-Universität in China in Alter Chinesischer Geschichte.',
        'Mit ihrer Expertise in Akupunktur und traditioneller chinesischer Kultur verfolgt Catherine einen ganzheitlichen und individuellen Behandlungsansatz. Frei nach dem Motto „Harmonie mit der Natur · Pflege von Körper & Geist“ versteht sie Gesundheit als Einklang von Körper, Geist und Alltag. Ihre Schwerpunkte liegen in der Schmerztherapie, Frauengesundheit, Stressabbau und Schlafverbesserung.'
      ]
    },
    educationList: {
      zh: [
        { period: '2026.04 毕业', degree: '健康科学学士（针灸专业）BHSc (Acupuncture)', school: '新西兰中医学院 (NZCCM)' },
        { period: '博士学位', degree: '中国古代史博士 Ph.D. in Ancient Chinese History', school: '郑州大学 (Zhengzhou University)' },
        { period: '执业认证', degree: '新西兰注册针灸师 & ACC 理赔认证医师', school: 'Acupuncture NZ / ACC Provider' }
      ],
      en: [
        { period: 'Graduated Apr 2026', degree: 'Bachelor of Health Science (Acupuncture)', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Doctoral Degree', degree: 'Ph.D. in Ancient Chinese History', school: 'Zhengzhou University, China' },
        { period: 'Accreditation', degree: 'NZ Registered Acupuncturist & ACC Provider', school: 'Acupuncture NZ / ACC Provider' }
      ],
      de: [
        { period: 'Abschluss Apr 2026', degree: 'Bachelor of Health Science (Akupunktur)', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Doktorgrad', degree: 'Ph.D. in Alter Chinesischer Geschichte', school: 'Zhengzhou-Universität, China' },
        { period: 'Zulassung', degree: 'NZ Registrierte Akupunkteurin & ACC-Anbieterin', school: 'Acupuncture NZ / ACC Provider' }
      ]
    },
    researchPoints: {
      zh: [
        '创立“和养 Wellness (He Yang Wellness)”，倡导“和其岁月 · 养其气血”的天人合一调养之道。',
        '融合针灸临床诊疗与中华传统哲学底蕴，针对求诊者身心状态提供定制化整体调护。',
        '专注于痛症管理、女性全生命周期健康调理、压力舒缓与睡眠质量提升。',
        '支持 ACC 理赔诊疗，致力于为社区提供高质量、具人文关怀的健康管理方案。'
      ],
      en: [
        'Founder of He Yang Wellness: "Harmony with Nature · Nourish Body & Mind".',
        'Combines clinical acupuncture expertise with traditional Chinese cultural heritage.',
        'Specialized focus on pain management, women\'s wellness, stress relief, and sleep improvement.',
        'Registered ACC provider dedicated to individualized, compassionate holistic care.'
      ],
      de: [
        'Gründerin von He Yang Wellness: „Harmonie mit der Natur · Pflege von Körper & Geist“.',
        'Verbindung von klinischer Akupunktur und traditioneller chinesischer Kulturphilosophie.',
        'Spezialisierung auf Schmerztherapie, Frauengesundheit, Stressabbau und Schlafverbesserung.',
        'ACC-registrierte Behandlerin für individuelle und nachhaltige Patientenfürsorge.'
      ]
    },
    specialtiesTitle: {
      zh: 'Specialties 临床专长',
      en: 'Specialties',
      de: 'Schwerpunkte'
    },
    specialties: {
      zh: [
        'Pain Management 痛症管理与肌骨损伤康复',
        'Women’s Wellness 女性健康调理与气血调和',
        'Stress & Sleep 压力舒缓、焦虑缓解与睡眠改善',
        'General Wellbeing 身心平衡与亚健康整体调理',
        'ACC Provider Services ACC 损伤注册针灸治疗服务'
      ],
      en: [
        'Pain Management & Musculoskeletal Recovery',
        'Women’s Wellness & Hormonal/Blood Nourishment',
        'Stress Reduction, Anxiety & Sleep Regulation',
        'Holistic Health & General Wellbeing',
        'ACC Provider Acupuncture & Injury Recovery'
      ],
      de: [
        'Schmerztherapie & Rehabilitation von Verletzungen',
        'Frauengesundheit & Vitalitätsförderung',
        'Stressabbau, Angstbewältigung & Schlafregulierung',
        'Ganzheitliche Gesundheit & Prävention',
        'ACC-Registrierte Akupunktur-Behandlung'
      ]
    },
    contactEmail: 'info@heyangwellness.co.nz'
  },
  {
    id: 'helene-li-yu',
    slug: 'helene-li-yu',
    name: {
      zh: 'Helene Li YU',
      en: 'Helene Li YU',
      de: 'Helene Li YU'
    },
    shortTitle: {
      zh: '高级针灸诊疗师 · ACC 注册医师',
      en: 'Senior Practitioner · ACC Registered Acupuncturist',
      de: 'Senior-Behandlerin · ACC-Registrierte Akupunkteurin'
    },
    title: {
      zh: '高级针灸诊疗师 ｜ 中医整体调理专家',
      en: 'Senior Practitioner | Holistic TCM & Acupuncture',
      de: 'Senior-Behandlerin | Ganzheitliche Akupunktur & TCM'
    },
    mentor: {
      zh: 'ACC 注册针灸医师 ｜ 资深循证中医专家',
      en: 'ACC-Registered Acupuncturist | Evidence-Informed TCM Specialist',
      de: 'ACC-Registrierte Akupunkteurin | Ganzheitliche TCM-Spezialistin'
    },
    photo: helenePhoto,
    hometown: {
      zh: '奥克兰 Wellness Spring 资深医师',
      en: 'Senior Practitioner at Wellness Spring',
      de: 'Senior-Behandlerin bei Wellness Spring'
    },
    tags: {
      zh: ['ACC 注册医师', 'AI 智能评估', '心身调节', '整体康复'],
      en: ['ACC Registered', 'AI Assessment', 'Mind-Body Regulation', 'Holistic Recovery'],
      de: ['ACC-Registriert', 'KI-Gesundheitsanalyse', 'Körper-Geist-Regulation', 'Ganzheitlich']
    },
    shortDesc: {
      zh: 'Wellness Spring 资深医师，融合传统针灸、身心调节与 AI 智能健康评估，为患者提供全方位个性化护理。',
      en: 'Senior practitioner at Wellness Spring, integrating acupuncture, mind-body regulation, and AI health assessment.',
      de: 'Senior-Behandlerin bei Wellness Spring, verbindet Akupunktur, Körper-Geist-Regulation und KI-Gesundheitsanalyse.'
    },
    bioParagraphs: {
      zh: [
        'Helene 以丰富的专业经验与深切关怀服务每位来访者，采用融合传统针灸、中医疗法、身心调节和 AI 辅助健康评估的整体护理方法。',
        '她专注于个性化治疗、情绪平衡与心理疏导，全方位支持患者的长期健康与身心调和。'
      ],
      en: [
        'Helene brings extensive expertise and compassion to her practice, with a holistic approach to care, integrating acupuncture, traditional Chinese medicine therapies, mind–body regulation, and AI-assisted health assessment.',
        'Her focus is on personalised treatment, emotional balance, and supporting long-term wellbeing through thoughtful, individualised care.'
      ],
      de: [
        'Helene verbindet umfassende Erfahrung und Einfühlungsvermögen mit einem ganzheitlichen Ansatz aus Akupunktur, traditioneller chinesischer Medizin, Körper-Geist-Regulation und KI-gestützter Gesundheitsanalyse.',
        'Ihr Fokus liegt auf individueller Behandlung, emotionaler Balance und langfristigem Wohlbefinden durch aufmerksame, persönliche Betreuung.'
      ]
    },
    educationList: {
      zh: [
        { period: 'ACC 注册资格', degree: 'ACC 注册针灸理疗医师', school: '新西兰针灸执业理事会' },
        { period: '专业经验', degree: '循证中医、针灸与身心调控资深专家', school: 'Wellness Spring Clinic' }
      ],
      en: [
        { period: 'ACC Practitioner', degree: 'ACC Registered Acupuncturist', school: 'Acupuncture New Zealand' },
        { period: 'Expertise', degree: 'Senior TCM & Mind-Body Regulation Specialist', school: 'Wellness Spring Clinic' }
      ],
      de: [
        { period: 'ACC-Qualifikation', degree: 'ACC-Registrierte Akupunkteurin', school: 'Acupuncture New Zealand' },
        { period: 'Expertise', degree: 'Spezialistin für TCM & Körper-Geist-Regulation', school: 'Wellness Spring Clinic' }
      ]
    },
    researchPoints: {
      zh: [
        '主导融合 AI 智能健康评估与传统脉象/体质辨证的个性化护理路径。',
        '深入探讨中医心理学与治疗音乐在身心情绪调理中的协同减压效果。'
      ],
      en: [
        'Integrated AI-assisted health pattern recognition with traditional TCM diagnostic care.',
        'Researched therapeutic music and mind-body regulation for emotional & nervous system support.'
      ],
      de: [
        'Integration von KI-Gesundheitsanalysen mit traditioneller TCM-Diagnostik.',
        'Forschung zu therapeutischer Musik und Mind-Body-Regulation bei Stress und Angst.'
      ]
    },
    specialtiesTitle: {
      zh: 'Specialties 临床专长',
      en: 'Specialties',
      de: 'Schwerpunkte'
    },
    specialties: {
      zh: [
        'Traditional Chinese Medicine & Acupuncture 中医与针灸',
        'Mind-Body Regulation 身心调节与经络调理',
        'Emotional Balance & Wellness 情绪平衡与心理辅导',
        'AI-Assisted Health Assessment AI 辅助健康评估'
      ],
      en: [
        'Traditional Chinese Medicine & Acupuncture',
        'Mind-Body Regulation',
        'Emotional Balance & Wellness',
        'AI-Assisted Health Assessment'
      ],
      de: [
        'Traditionelle Chinesische Medizin & Akupunktur',
        'Körper-Geist-Regulation',
        'Emotionale Balance & Wohlbefinden',
        'KI-gestützte Gesundheitsanalyse'
      ]
    },
    contactEmail: 'info@wellnessspring.co.nz'
  }
]
