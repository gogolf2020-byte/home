import qianPhoto from '../assets/doctors/1_qian.png'
import wangPhoto from '../assets/doctors/2_wang.png'
import gaoPhoto from '../assets/doctors/3_gao.jpg'
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
    id: 'grace-gao',
    slug: 'grace-gao',
    name: {
      zh: 'Grace Gao',
      en: 'Grace Gao',
      de: 'Grace Gao'
    },
    shortTitle: {
      zh: '新西兰 ACC & CMC 注册针灸师 · 硕士在读',
      en: 'ACC & CMC Registered Acupuncturist · Master Candidate',
      de: 'ACC & CMC Registrierte Akupunkteurin · Master-Studium'
    },
    title: {
      zh: '新西兰 ACC & CMC 注册针灸师 ｜ 中医药学硕士在读',
      en: 'ACC & CMC Registered Acupuncturist | Master Candidate in TCM',
      de: 'ACC & CMC Registrierte Akupunkteurin | Master-Studium in TCM'
    },
    mentor: {
      zh: '新西兰中医学院 (NZCCM) 毕业 · 循证中针诊疗专家',
      en: 'Graduate of NZCCM · Evidence-Based Acupuncture & Herbal Specialist',
      de: 'NZCCM-Absolventin · Evidenzbasierte Akupunktur & Kräuterheilkunde'
    },
    photo: gaoPhoto,
    hometown: {
      zh: '新西兰 ACC & CMC 认证注册针灸师',
      en: 'NZ ACC & CMC Registered Acupuncturist',
      de: 'NZ ACC & CMC Registrierte Akupunkteurin'
    },
    tags: {
      zh: ['ACC 认证医师', 'CMC 注册医师', '新西兰中医学院', '硕士在读', '痛症与内科调理'],
      en: ['ACC Registered', 'CMC Registered', 'NZCCM Graduate', 'Master Candidate', 'Musculoskeletal Care'],
      de: ['ACC-Registriert', 'CMC-Registriert', 'NZCCM-Absolventin', 'Master-Studium', 'Schmerztherapie']
    },
    shortDesc: {
      zh: '毕业于新西兰中医学院并攻读硕士，精通针灸、推拿与中药调理，擅长肌骨痛症与内科杂病的精准诊疗。',
      en: 'A passionate Registered Acupuncturist with a solid TCM foundation, skilled in acupuncture, Tui Na, and herbal care for musculoskeletal pain and internal disorders.',
      de: 'Erfahrene Akupunkteurin mit fundierter TCM-Ausbildung, spezialisiert auf Akupunktur, Tui Na und Kräuterheilkunde bei Schmerzen und internistischen Erkrankungen.'
    },
    bioParagraphs: {
      zh: [
        'Grace Gao 为新西兰 ACC & CMC 双认证注册针灸师，具备扎实的中医药学术功底与丰富的临床诊疗经验。她毕业于新西兰中医学院（New Zealand College of Chinese Medicine），目前正在攻读中医药学硕士学位，致力于将深厚的学术理论与临床实践深度结合。',
        '在临床中，Grace 精通针灸、推拿理筋与中药调理，尤为擅长肌骨系统各类痛症及内科杂病的精准诊断与高效调护。她始终恪守循证医疗标准，以热忱而专业的态度为患者提供高质量的个性化康复服务，致力于提升求诊者的生活质量与整体健康水平。'
      ],
      en: [
        'Grace Gao is a passionate and results-driven Registered Acupuncturist with a solid academic foundation in Traditional Chinese Medicine and extensive clinical experience. She graduated from the New Zealand College of Chinese Medicine and is currently pursuing a Master’s degree in the same field, dedicated to integrating deep academic knowledge with clinical practice.',
        'Holding ACC and CMC registrations in New Zealand, Grace has expertise in utilizing acupuncture, Tui Na, and herbal medicine, particularly skilled in effectively diagnosing and treating a wide range of musculoskeletal pain conditions and internal medical disorders. She is committed to providing the highest standard of evidence-based care to improve patient health outcomes and quality of life.'
      ],
      de: [
        'Grace Gao ist eine leidenschaftliche und ergebnisorientierte registrierte Akupunkteurin mit fundiertem akademischem Wissen in Traditioneller Chinesischer Medizin und umfangreicher klinischer Erfahrung. Sie schloss ihr Studium am New Zealand College of Chinese Medicine ab und absolvierte derzeit ihr Masterstudium in demselben Fachbereich.',
        'Mit ihrer ACC- und CMC-Zulassung in Neuseeland kombiniert Grace Akupunktur, Tui Na und Kräuterheilkunde. Sie ist besonders versiert in der Diagnose und Behandlung von Muskel-Skelett-Schmerzen sowie internistischen Erkrankungen und verschreibt sich höchsten evidenzbasierten Qualitätsstandards.'
      ]
    },
    educationList: {
      zh: [
        { period: '硕士在读', degree: '中医药学硕士学位 (Master of TCM Candidate)', school: '新西兰中医学院 (NZCCM)' },
        { period: '学士毕业', degree: '中医/针灸学士学位 (Bachelor of TCM / Acupuncture)', school: '新西兰中医学院 (NZCCM)' },
        { period: '双执业认证', degree: '新西兰 ACC & CMC 注册认证针灸师', school: 'ACC & CMC New Zealand' }
      ],
      en: [
        { period: 'Currently Pursuing', degree: 'Master’s Degree in Traditional Chinese Medicine', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Graduated', degree: 'Bachelor of Health Science / Acupuncture', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Accreditation', degree: 'ACC & CMC Registered Acupuncturist', school: 'ACC & CMC New Zealand' }
      ],
      de: [
        { period: 'Laufend', degree: 'Masterstudium Traditionelle Chinesische Medizin', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Abschluss', degree: 'Bachelor of Health Science / Akupunktur', school: 'New Zealand College of Chinese Medicine (NZCCM)' },
        { period: 'Zulassung', degree: 'ACC & CMC Registrierte Akupunkteurin', school: 'ACC & CMC Neuseeland' }
      ]
    },
    researchPoints: {
      zh: [
        '融合循证医学理念与深厚中医药理论，深耕中医药学术与临床深度融合。',
        '精通针灸、推拿理筋与中药辨证施治，实现身心并调与多维调护。',
        '专精于肌骨系统急性/慢性痛症、关节功能障碍及内科疑难杂病的精准诊疗。',
        '持有新西兰 ACC & CMC 双权威注册资质，全力保障高质量高标准的患者康复成果。'
      ],
      en: [
        'Dedicated to integrating deep academic knowledge of TCM with evidence-based clinical practice.',
        'Expertise in combining acupuncture, Tui Na manual therapy, and Chinese herbal medicine.',
        'Specialized in diagnosing and treating complex musculoskeletal pain and internal disorders.',
        'Holds dual ACC & CMC registrations committed to delivering high-standard patient outcomes.'
      ],
      de: [
        'Verbindung von vertieftem akademischen Wissen der TCM mit evidenzbasierter klinischer Praxis.',
        'Expertise in Akupunktur, Tui Na manueller Therapie und chinesischer Kräuterheilkunde.',
        'Spezialisiert auf Diagnose und Behandlung von Muskel-Skelett-Schmerzen und internistischen Beschwerden.',
        'Doppelzulassung als ACC & CMC registrierte Behandlerin für beste Patientenergebnisse.'
      ]
    },
    specialtiesTitle: {
      zh: 'Specialties 临床专长',
      en: 'Specialties',
      de: 'Schwerpunkte'
    },
    specialties: {
      zh: [
        'Musculoskeletal Pain & Injury Rehabilitation 肌骨系统痛症与损伤康复',
        'Acupuncture & Tui Na Manual Therapy 针灸与推拿理筋手法',
        'Internal Medical Disorders & Herbal Care 内科杂病诊断与中药辨证调理',
        'Evidence-Based Integrative Care 循证医疗与全方位身心健康管理',
        'ACC & CMC Registered Services ACC & CMC 注册针灸理疗服务'
      ],
      en: [
        'Musculoskeletal Pain Conditions & Injury Rehabilitation',
        'Acupuncture & Tui Na Manual Therapy',
        'Internal Medical Disorders & Herbal Conditioning',
        'Evidence-Based Integrative Health Management',
        'ACC & CMC Registered Acupuncture Services'
      ],
      de: [
        'Muskel-Skelett-Schmerzen & Verletzungsrehabilitation',
        'Akupunktur & Tui Na Manuelle Therapie',
        'Internistische Erkrankungen & Kräuterheilkunde',
        'Evidenzbasierte Ganzheitliche Gesundheitsversorgung',
        'ACC & CMC Registrierte Akupunktur-Behandlungen'
      ]
    },
    contactEmail: 'info@wellnessspring.co.nz'
  },
  {
    id: 'helene-yu',
    slug: 'helene-yu',
    name: {
      zh: 'Helene YU',
      en: 'Helene YU',
      de: 'Helene YU'
    },
    shortTitle: {
      zh: 'Wellness Spring 创始人 · ACC & CMCNZ 注册中医师 · AI-中医临床整合专家',
      en: 'Founder Wellness Spring · ACC & CMCNZ Registered Acupuncturist · AI–TCM Specialist',
      de: 'Gründerin Wellness Spring · ACC & CMCNZ Registrierte Akupunkteurin · KI-TCM Spezialistin'
    },
    title: {
      zh: 'Wellness Spring 创始人 ｜ ACC & CMCNZ 注册中医师 ｜ AI-中医临床整合与跨文化医疗沟通专家',
      en: 'Founder, Wellness Spring | ACC & CMCNZ Registered Acupuncturist | AI–TCM Clinical Integration & Cross-Cultural Communication',
      de: 'Gründerin, Wellness Spring | ACC & CMCNZ Registrierte Akupunkteurin | KI-TCM Klinische Integration & Kommunikation'
    },
    mentor: {
      zh: '“以语言、文化与科技为桥梁，连接传统中医与全球健康。”',
      en: '"Bridging Traditional Chinese Medicine and global healthcare through language, culture and technology."',
      de: '"Verbindung von Traditioneller Chinesischer Medizin und globaler Gesundheit durch Sprache, Kultur und Technologie."'
    },
    photo: helenePhoto,
    hometown: {
      zh: 'Wellness Spring 创始人 · 执业中医师',
      en: 'Founder & Practitioner at Wellness Spring',
      de: 'Gründerin & Behandlerin bei Wellness Spring'
    },
    tags: {
      zh: ['Wellness Spring 创始人', 'ACC & CMCNZ 注册医师', 'AI-中医临床整合', '资深跨文化交传', '新西兰健康科学学士'],
      en: ['Founder Wellness Spring', 'ACC & CMCNZ Registered', 'AI–TCM Integration', 'Cross-Cultural Interpreter', 'BHSc Acupuncture'],
      de: ['Gründerin Wellness Spring', 'ACC & CMCNZ Registriert', 'KI-TCM Integration', 'Medizinische Dolmetscherin', 'BHSc Akupunktur']
    },
    shortDesc: {
      zh: 'Wellness Spring 创始人，融合中医临床诊疗、AI 智能健康评估、专业医疗法律交传及公共服务经验，打造执业医师主导的负责任整合医疗平台。',
      en: 'Founder of Wellness Spring, combining TCM clinical practice, AI-assisted health assessment, cross-cultural medical interpreting, and public service experience to build a responsible, practitioner-led integrative healthcare platform.',
      de: 'Gründerin von Wellness Spring, verbindet TCM-Praxis, KI-gestützte Gesundheitsanalyse, medizinische Dolmetscherausbildung und öffentliche Erfahrung.'
    },
    bioParagraphs: {
      zh: [
        'Helene Yu（俞利）为跨学科健康专业人士及新西兰 Wellness Spring 诊所创始人。她的专业背景跨越传统中医临床诊疗、专业医疗与法律交传、公共服务以及国际企业管理。她目前的核心焦点在于推动人工智能与中医师主导的“四诊”评估、结构化真实世界数据及多元文化健康应用的负责任临床整合。',
        '作为新西兰 ACC 及 CMCNZ 注册中医师、MATRIX AI 产品培训师，Helene 正在建立一套结构化的临床工作流程，将 AI 辅助健康评估与传统中医“望、闻、问、切”四诊有机融合。她利用大语言模型（LLM）对临床信息进行结构化梳理与比对，同时确保最终的医学解读与临床决策始终严格由执业医师主导复核。',
        'Helene 拥有新西兰健康科学（针灸专业）学士学位，并在奥克兰理工大学（AUT）完成了医疗法律翻译及健康管理的深造。她精通英语、国语及粤语，始终秉持“以语言、文化与科技为桥梁，连接传统中医与全球健康”的专业使命。'
      ],
      en: [
        'Helene Yu is a multidisciplinary health professional and founder of Wellness Spring in New Zealand. Her background spans Traditional Chinese Medicine (TCM) clinical practice, professional medical and legal interpreting, public-service experience, and international business management. Her current focus is the responsible clinical integration of artificial intelligence with practitioner-led TCM assessment, structured real-world data, and multicultural health applications.',
        'As an ACC and CMCNZ registered acupuncturist and MATRIX AI product trainer, Helene is developing a structured clinical workflow linking AI-assisted health assessment with traditional TCM Four Diagnostics (observation, listening/smelling, inquiry, palpation). She uses large language models (LLMs) to structure and compare clinical information while ensuring final interpretation and decision-making remain strictly under practitioner governance.',
        'Helene holds a Bachelor of Health Science (Acupuncture) in New Zealand and completed postgraduate studies in medical and legal interpreting as well as health management at Auckland University of Technology (AUT). Fluent in English, Mandarin, and Cantonese, her professional mission is "Bridging Traditional Chinese Medicine and global healthcare through language, culture and technology."'
      ],
      de: [
        'Helene Yu ist eine multidisziplinäre Gesundheitsexpertin und Gründerin von Wellness Spring in Neuseeland. Ihr Hintergrund verbindet Traditionelle Chinesische Medizin (TCM), professionelles medizinisches und juristisches Dolmetschen, öffentlichen Dienst und internationales Unternehmensmanagement. Ihr Fokus liegt auf der verantwortungsvollen klinischen Integration künstlicher Intelligenz.',
        'Als ACC- und CMCNZ-registrierte Akupunkteurin und MATRIX KI-Produkttrainerin entwickelt Helene einen strukturierten klinischen Ablauf, der KI-gestützte Analyse mit den vier klassischen Verfahren der TCM-Diagnostik verbindet. KI-generierte Daten werden aufbereitet, während die finale Entscheidung stets unter therapeuten-geführter Regie verbleibt.',
        'Helene hält einen Bachelor of Health Science (Akupunktur) in Neuseeland und schloss Aufbaustudien an der Auckland University of Technology (AUT) ab. Fließend in Englisch, Mandarin und Kantonesisch ist ihre Mission: „Verbindung von TCM und globaler Gesundheit durch Sprache, Kultur und Technologie.“'
      ]
    },
    educationList: {
      zh: [
        { period: '学士学位', degree: '健康科学学士（针灸专业）BHSc (Acupuncture)', school: 'New Zealand (新西兰)' },
        { period: '研究生深造', degree: '医疗与法律高级翻译研究生项目', school: '奥克兰理工大学 (AUT)' },
        { period: '研究生深造', degree: '健康管理与体育高尔夫教练学', school: '奥克兰理工大学 (AUT)' },
        { period: '双执业认证', degree: '新西兰 ACC 注册针灸医师 & CMCNZ 注册医师', school: 'ACC & CMCNZ New Zealand' }
      ],
      en: [
        { period: 'Bachelor Degree', degree: 'Bachelor of Health Science (Acupuncture)', school: 'New Zealand (BHSc)' },
        { period: 'Postgraduate', degree: 'Postgraduate Studies in Medical & Legal Interpreting', school: 'Auckland University of Technology (AUT)' },
        { period: 'Postgraduate', degree: 'Health Management & Sport Coaching Studies', school: 'Auckland University of Technology (AUT)' },
        { period: 'Registrations', degree: 'ACC Registered Acupuncturist & CMCNZ Registered Practitioner', school: 'ACC & CMCNZ New Zealand' }
      ],
      de: [
        { period: 'Bachelorgrad', degree: 'Bachelor of Health Science (Akupunktur)', school: 'Neuseeland (BHSc)' },
        { period: 'Aufbaustudium', degree: 'Postgraduales Studium Medizinisches & Juristisches Dolmetschen', school: 'Auckland University of Technology (AUT)' },
        { period: 'Aufbaustudium', degree: 'Gesundheitsmanagement & Sport-Coaching', school: 'Auckland University of Technology (AUT)' },
        { period: 'Zulassungen', degree: 'ACC & CMCNZ Registrierte Akupunkteurin', school: 'ACC & CMCNZ Neuseeland' }
      ]
    },
    researchPoints: {
      zh: [
        '构建结构化 AI-中医临床流程：患者接诊 → MATRIX AI 评估 → 中医四诊 → 医师复核 → 个性化调理 → 随访追溯。',
        '推进 AI 辅助健康评估在新西兰多元族群中的跨文化临床验证与模型公平性研究。',
        '开发双语编码四诊问卷及模型无关（Model-agnostic）的临床大模型提示词（Prompt）架构。',
        '具备法院、医院及政府机构数十年的英语、国语及粤语高级专业翻译与沟通经验。'
      ],
      en: [
        'Structured AI–TCM Clinical Workflow: Intake → MATRIX AI Assessment → TCM Four Diagnostics → Practitioner Review → Personalised Care → Follow-up.',
        'Multicultural clinical validation of AI-assisted TCM assessment across New Zealand’s diverse ethnic populations.',
        'Bilingual coded Four-Diagnostics clinical data structuring and model-agnostic LLM prompt architecture.',
        'Professional cross-cultural medical communication and court/hospital interpreting in English, Mandarin, and Cantonese.'
      ],
      de: [
        'Strukturierter KI-TCM Ablauf: Aufnahme → MATRIX KI Analyse → TCM 4 Diagnosen → Therapeuten-Prüfung → Pflege → Nachsorge.',
        'Multikulturelle klinische Validierung der KI-Analyse in Neuseelands vielfältiger Gesellschaft.',
        'Zweisprachig kodierte TCM-Datenstrukturierung und herstellerunabhängige LLM-Architektur.',
        'Professionelle medizinische Dolmetschpraxis in Englisch, Mandarin und Kantonesisch.'
      ]
    },
    specialtiesTitle: {
      zh: 'Specialties 临床专长',
      en: 'Specialties',
      de: 'Schwerpunkte'
    },
    specialties: {
      zh: [
        'AI–TCM Clinical Integration & Workflow Design AI-中医临床整合与工作流设计',
        'Traditional Chinese Medicine & Acupuncture 循证中医、针灸与“四诊”诊疗',
        'Cross-Cultural Medical Communication 跨文化医疗沟通与交传（国/粤/英）',
        'Multicultural Health Data & Clinical Validation 多元文化健康数据与临床验证',
        'ACC Injury Recovery & Musculoskeletal Care ACC 损伤康复与身心整体护理'
      ],
      en: [
        'AI–TCM Clinical Integration & Workflow Design',
        'Traditional Chinese Medicine & Acupuncture',
        'Cross-Cultural Medical Communication (Mandarin, Cantonese, English)',
        'Multicultural Health Data & Clinical Validation',
        'ACC Injury Recovery & Integrative Healthcare'
      ],
      de: [
        'KI-TCM Klinische Integration & Ablaufdesign',
        'Traditionelle Chinesische Medizin & Akupunktur',
        'Interkulturelle Medizinische Kommunikation (Mandarin, Kantonesisch, Englisch)',
        'Multikulturelle Gesundheitsdaten & Validierung',
        'ACC-Verletzungsrehabilitation & Ganzheitliche Pflege'
      ]
    },
    contactEmail: 'wellness.spring.sys@gmail.com'
  }
]
