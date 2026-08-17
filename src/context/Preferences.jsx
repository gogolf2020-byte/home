import { createContext, useContext, useEffect, useState } from 'react'

const PreferencesContext = createContext(null)

const copy = {
  // Navigation & Header
  'Home': ['首页', 'Startseite'],
  'About': ['关于我们', 'Über uns'],
  'Services': ['服务项目', 'Leistungen'],
  'Acc Treatment': ['ACC 损伤理疗', 'ACC-Behandlung'],
  'ACC Treatment': ['ACC 损伤理疗', 'ACC-Behandlung'],
  'AI Assessment': ['AI 健康评估', 'KI-Gesundheitsanalyse'],
  'Practitioner': ['医师介绍', 'Behandlerin'],
  'Testimonials': ['客户评价', 'Erfahrungsberichte'],
  'Faq': ['常见问题', 'FAQ'],
  'FAQ': ['常见问题', 'FAQ'],
  'Contact': ['联系我们', 'Kontakt'],

  // ACC Section & Page
  'ACC INJURY RECOVERY': ['ACC 损伤康复理疗', 'ACC-VERLETZUNGSGENESUNG'],
  'ACC Injury Recovery': ['ACC 损伤康复与针灸理疗', 'ACC-Verletzungsgenesung'],
  'Treatment with an ACC-Registered Acupuncturist': ['由 ACC 注册针灸医师全程提供诊疗', 'Behandlung durch eine ACC-registrierte Akupunkteurin'],
  'Recovering from an accident, sports injury, work injury or another ACC-covered injury? Wellness Spring provides personalised acupuncture and Chinese medicine treatment to support recovery, reduce injury-related symptoms, restore movement and function, and help you return to everyday activity.': [
    '因意外事故、运动损伤、工伤或其他符合 ACC 赔付条件的损伤需要康复？Wellness Spring 提供个性化针灸与中医疗法，帮助减轻损伤相关症状、恢复肢体运动功能，支持您早日重返正常生活。',
    'Erholen Sie sich von einem Unfall, einer Sport- oder Arbeitsverletzung? Wellness Spring bietet individuelle Akupunktur- und TCM-Behandlungen zur Linderung von Symptomen und Wiederherstellung der Funktion.'
  ],
  'Already have an ACC claim?': ['已经拥有 ACC 理赔案号？', 'Haben Sie bereits eine ACC-Schadennummer?'],
  'If you already have an ACC-covered claim, you can self-refer for acupuncture treatment. Simply provide your ACC claim number when booking.': [
    '如果您已拥有符合条件的 ACC 理赔案号，无需医生转诊，可直接自主预约针灸治疗。预约时只需提供您的 ACC 案号即可。',
    'Wenn Sie bereits einen anerkannten ACC-Schaden haben, können Sie sich direkt für eine Akupunkturbehandlung anmelden. Geben Sie einfach Ihre ACC-Schadennummer bei der Buchung an.'
  ],
  'Treatment may include:': ['治疗方案可包含：', 'Die Behandlung kann umfassen:'],
  'Acupuncture · Cupping · Gua Sha · Tuina · Individualised Recovery Support': [
    '针灸 · 拔罐 · 刮痧 · 推拿 · 个性化康复支持',
    'Akupunktur · Schröpfen · Gua Sha · Tuina · Individuelle Genesungsbegleitung'
  ],
  'ACC Funding:': ['ACC 资助说明：', 'ACC-Kostendeckung:'],
  'ACC contributes towards eligible acupuncture treatment for covered injuries. A co-payment may apply.': [
    'ACC 为符合条件的损伤针灸治疗提供费用资助。根据具体诊疗与项目，可能产生部分自费差额 (Co-payment)。',
    'ACC übernimmt einen Teil der Kosten für berechtigte Akupunkturbehandlungen. Es kann ein Eigenanteil anfallen.'
  ],
  'Book ACC Treatment': ['预约 ACC 理疗', 'ACC-Behandlung buchen'],
  'Learn About ACC Treatment': ['了解 ACC 理疗详情', 'Mehr über ACC-Behandlung erfahren'],
  'Learn More About ACC Treatment': ['了解 ACC 理疗详情', 'Mehr über ACC-Behandlung erfahren'],
  'Personalised Acupuncture & Chinese Medicine Treatment for ACC-Covered Injuries': [
    '针对 ACC 涵盖损伤的个性化针灸与中医疗法',
    'Individuelle Akupunktur & TCM-Behandlung für ACC-Verletzungen'
  ],
  'Injury can affect more than the painful area — it can change movement, sleep, confidence and everyday activity. Wellness Spring provides individualised acupuncture and Chinese medicine care to support recovery from ACC-covered injuries and help you return to function safely and confidently.': [
    '身体损伤影响的不止是疼痛部位，还会改变行动能力、睡眠质量、自信心与日常活动。Wellness Spring 提供个性化针灸与中医护理，支持 ACC 损伤康复，助您安全自信地恢复体能。',
    'Verletzungen betreffen oft mehr als nur die schmerzende Stelle. Wellness Spring bietet individuelle Akupunktur- und TCM-Pflege zur sicheren Wiederherstellung Ihrer Funktion.'
  ],
  '✓ ACC-Registered Acupuncturist': ['✓ ACC 注册针灸医师', '✓ ACC-registrierte Akupunkteurin'],
  '✓ Individualised Injury Recovery Plans': ['✓ 个性化损伤康复方案', '✓ Individuelle Genesungspläne'],
  '✓ Acupuncture + Chinese Medicine Support': ['✓ 针灸与中医药综合支持', '✓ Akupunktur + TCM-Unterstützung'],
  'Who Can Benefit from ACC Acupuncture?': ['哪些人群适合接受 ACC 针灸治疗？', 'Wer profitiert von ACC-Akupunktur?'],
  'ACC-funded acupuncture is intended for people recovering from an injury covered by ACC who require treatment to help restore movement and function.': [
    'ACC 资助的针灸治疗旨在帮助处于 ACC 理赔覆盖期内的损伤康复者，通过专业理疗改善运动功能与身体机能。',
    'ACC-geförderte Akupunktur richtet sich an Personen, die sich von einer ACC-gedeckten Verletzung erholen und Unterstützung bei der Wiederherstellung der Beweglichkeit benötigen.'
  ],
  'Sports Injuries': ['运动损伤', 'Sportverletzungen'],
  'Sprains, strains and injury-related muscle or joint symptoms.': ['扭伤、拉伤以及与损伤相关的肌肉或关节不适症状。', 'Verstauchungen, Zerrungen und verletzungsbedingte Muskel- oder Gelenkbeschwerden.'],
  'Work-Related Injuries': ['工作职业损伤', 'Arbeitsunfälle & Berufsverletzungen'],
  'Injuries affecting comfort, movement or ability to work.': ['影响日常舒适度、身体活动能力或工作能力的伤痛。', 'Verletzungen, die Komfort, Beweglichkeit oder Arbeitsfähigkeit beeinträchtigen.'],
  'Accident Injuries': ['日常意外事故损伤', 'Unfallverletzungen'],
  'Recovery following falls, impacts and other covered accidents.': ['跌倒、碰撞及其他符合条件意外后的康复调理。', 'Genesung nach Stürzen, Stoßverletzungen und anderen anerkannten Unfällen.'],
  'Neck & Back Injuries': ['颈部与背部损伤', 'Nacken- & Rückenverletzungen'],
  'Where symptoms are related to an accepted injury claim.': ['相关症状属于已获批 ACC 意外理赔范围的情况。', 'Wenn die Symptome mit einem anerkannten Verletzungsanspruch zusammenhängen.'],
  'Shoulder & Limb Injuries': ['肩部与四肢关节损伤', 'Schulter- & Gliedmaßenverletzungen'],
  'Supporting movement and function during recovery.': ['在康复过程中支持四肢灵活运动与身体机能恢复。', 'Unterstützung von Bewegungsfähigkeit und Funktion während der Genesung.'],
  'Post-Injury Recovery': ['伤后综合恢复调理', 'Nachsorge & Rekonvaleszenz'],
  'Helping manage symptoms and support return to everyday activity.': ['协助管理伤后不适，全力支持恢复正常生活活动。', 'Hilfe bei der Symptomkontrolle und Unterstützung bei der Rückkehr in den Alltag.'],
  'How ACC Treatment Works': ['ACC 针灸理疗流程说明', 'So funktioniert die ACC-Behandlung'],
  'Have an ACC Claim': ['1. 准备理赔案号', '1. ACC-Schadennummer bereithalten'],
  'If your injury already has an ACC-covered claim, have your claim number ready when booking.': ['如果您已获得 ACC 批准的理赔案号，请在预约时准备好该案号。', 'Wenn Sie bereits einen anerkannten ACC-Schaden haben, halten Sie Ihre Schadennummer bereit.'],
  'Book Directly': ['2. 自主直接预约', '2. Direkt buchen'],
  'Clients with a covered ACC claim can self-refer for acupuncture treatment.': ['拥有合规 ACC 案号的客户可无需转诊信，直接自主预约针灸理疗。', 'Kunden mit einem anerkannten ACC-Schaden können sich direkt anmelden.'],
  'Initial Assessment': ['3. 首次全面评估', '3. Erstuntersuchung'],
  'Your first visit includes an assessment of your injury-related symptoms, movement, recovery progress and treatment needs.': [
    '您的首次就诊将包括对损伤相关症状、关节活动度、康复进展与治疗需求的全面评估。',
    'Ihr erster Besuch umfasst eine Untersuchung Ihrer Symptome, Beweglichkeit und Ihres Behandlungsbedarfs.'
  ],
  'Personalised Treatment': ['4. 定制个性化理疗', '4. Personalisierte Behandlung'],
  'A treatment plan is tailored to your injury, symptoms, function and recovery goals, with progress reviewed throughout care.': [
    '治疗方案将根据您的具体损伤、症状、运动功能与康复目标量身定制，并在调理期间持续追踪评估。',
    'Ein Behandlungsplan wird individuell auf Ihre Verletzung, Symptome und Ziele abgestimmt.'
  ],
  'Book Your ACC Appointment': ['立即预约您的 ACC 针灸治疗', 'Ihren ACC-Termin buchen'],
  'Already Have an ACC Claim?': ['已经拥有 ACC 理赔案号？', 'Haben Sie bereits eine ACC-Schadennummer?'],
  "Don't Have an ACC Claim Yet?": ['尚未申请 ACC 理赔案号？', 'Noch keine ACC-Schadennummer?'],
  'If you have not yet lodged an ACC claim, you may need to see an appropriate healthcare provider who can assess your injury and arrange the claim before ACC-funded acupuncture can begin. Contact us if you are unsure what information you need.': [
    '如果您尚未提交 ACC 理赔申请，可能需要先咨询全科医生 (GP) 或相关医疗提供方进行伤情评估并协助呈报案号。若不确定所需材料，欢迎随时联系我们咨询。',
    'Wenn Sie noch keinen ACC-Schaden gemeldet haben, wenden Sie sich bitte an einen Arzt oder Gesundheitsdienstleister, um den Anspruch vor Beginn der Behandlung anzumelden.'
  ],
  'Great — provide your ACC claim number when you book. Clients with a covered claim can self-refer for acupuncture treatment.': [
    '很好！预约时请直接填入您的 ACC 理赔案号。拥有获批案号的患者可直接自主预约针灸。',
    'Super – geben Sie einfach Ihre ACC-Schadennummer bei der Buchung an. Kunden mit anerkanntem Schaden können sich direkt anmelden.'
  ],
  'More Than Acupuncture': ['不止于针灸：中医整体康复方法', 'Mehr als Akupunktur'],
  'A Chinese Medicine Approach to Injury Recovery': ['融合传统中医的伤痛康复理念', 'Ein TCM-Ansatz zur Genesung'],
  'At Wellness Spring, injury recovery is approached as more than symptom relief alone. Treatment considers pain, movement, muscle tension, function, recovery patterns and the individual’s overall presentation.': [
    '在 Wellness Spring，损伤康复绝非仅局限于缓解痛感。治疗方案会综合考虑疼痛程度、肌肉紧张、关节活动、体质类型与整体恢复模式。',
    'Bei Wellness Spring geht Genesung über reine Schmerzlinderung hinaus. Die Behandlung berücksichtigt Beweglichkeit, Muskelspannung und Ihre Gesamtsituation.'
  ],
  'Fine disposable needles are used according to the individual injury presentation and treatment goals.': [
    '根据个体损伤表现与康复目标，使用一次性无菌细针实施精准针灸。',
    'Feine Einwegnadeln werden je nach Verletzungsbild und Behandlungsziel eingesetzt.'
  ],
  'May be incorporated where clinically appropriate as part of injury-related care.': [
    '在临床需要且适宜的情况下，可作为损伤相关护理的辅治疗法。',
    'Kann bei klinischer Eignung als Teil der Verletzungspflege integriert werden.'
  ],
  'May be used as an additional Chinese medicine technique when appropriate.': [
    '在合适时作为辅助中医疗法使用，活血化瘀，舒缓紧绷。',
    'Kann bei Bedarf als ergänzende TCM-Technik angewendet werden.'
  ],
  'Tuina': ['推拿理筋', 'Tuina'],
  'Chinese therapeutic manual techniques may be incorporated where suitable to support recovery.': [
    '在适宜时可融入中医手法与推拿理筋，辅助伤后肌肉与关节恢复。',
    'Traditionelle chinesische Manuelle Therapie kann zur Unterstützung der Genesung genutzt werden.'
  ],
  'ACC Funding & Treatment': ['ACC 资助与收费说明', 'ACC-Kostendeckung & Behandlung'],
  'ACC contributes towards the cost of eligible acupuncture treatment for injuries covered by ACC. Depending on the clinic fee and treatment provided, a co-payment may apply.': [
    'ACC 为符合条件的损伤针灸提供费用补贴。根据诊所项目收费与具体治疗，可能产生部分自费差额 (Co-payment)。',
    'ACC übernimmt einen Teil der Kosten für berechtigte Akupunkturbehandlungen. Je nach Behandlungsaufwand kann ein Eigenanteil anfallen.'
  ],
  'Non-injury treatment and treatments not funded by ACC are charged separately.': [
    '非损伤类的保健调理以及未纳入 ACC 资助范围的项目需单独计费。',
    'Behandlungen, die nicht verletzungsbedingt sind oder nicht von der ACC übernommen werden, werden separat berechnet.'
  ],
  'How Many ACC Acupuncture Treatments Are Funded?': ['ACC 资助的针灸治疗次数与期限限制', 'Wie viele ACC-Akupunkturbehandlungen werden übernommen?'],
  'ACC-funded acupuncture currently provides a maximum of 12 treatments within 12 weeks from the first acupuncture treatment. The first treatment needs to begin within one year of the accident. Eligibility continues while treatment remains related to the covered injury and ACC requirements are met.': [
    '目前 ACC 资助的针灸理疗在首次治疗后的 12 周内最多可提供 12 次资助诊疗。首次针灸需在事故发生后的 1 年内开启。在治疗与已批准的损伤保持相关并符合 ACC 要求期间，资助资格持续有效。',
    'Die ACC-geförderte Akupunktur bietet derzeit maximal 12 Behandlungen innerhalb von 12 Wochen ab der ersten Behandlung. Die Erstbehandlung muss innerhalb eines Jahres nach dem Unfall beginnen.'
  ],
  'If you are unsure whether your claim is eligible, contact us before booking and we can help you understand what information to bring.': [
    '如果您不确定自己的案号是否仍具备资助资格，请在预约前联系我们，我们将协助您确认就诊所需材料。',
    'Wenn Sie unsicher sind, ob Ihr Anspruch berechtigt ist, kontaktieren Sie uns vor der Buchung.'
  ],
  'Why Choose Wellness Spring for ACC Injury Recovery?': ['为什么选择 Wellness Spring 进行 ACC 伤痛康复？', 'Warum Wellness Spring für Ihre ACC-Genesung wählen?'],
  'Professional treatment by an ACC-registered acupuncture provider.': ['由资质齐全的 ACC 注册针灸师提供专业、标准的理疗服务。', 'Professionelle Behandlung durch eine ACC-registrierte Akupunkteurin.'],
  'Care is tailored to your injury, symptoms, function and recovery goals.': ['诊疗护理完全围绕您的伤情、症状、躯体功能与康复目标量身定制。', 'Die Betreuung wird individuell auf Ihre Verletzung und Ihre Genesungsziele abgestimmt.'],
  'Where appropriate, treatment may incorporate acupuncture with selected Chinese medicine techniques.': ['在适宜情况下，治疗可将针灸与精选中医辅治疗法（拔罐、刮痧、推拿）有机结合。', 'Bei Eignung kombiniert die Behandlung Akupunktur mit ausgewählten TCM-Methoden.'],
  'The focus is not only symptom management, but restoring movement, function and confidence.': ['我们的核心不仅是缓解症状，更在于帮助您重建运动功能与生活信心。', 'Der Fokus liegt nicht nur auf Symptomkontrolle, sondern auf der Wiederherstellung von Beweglichkeit und Selbstvertrauen.'],
  'Clear Communication': ['清晰透明的沟通', 'Klare Kommunikation'],
  'Treatment plans and progress are explained clearly throughout the recovery process.': ['在整个康复过程中，治疗方案与恢复进展均会向您清晰解答沟通。', 'Behandlungspläne und Fortschritte werden过程中清晰解答沟通。', 'Behandlungspläne und Fortschritte werden während des gesamten Prozesses klar erklärt.'],
  'ACC Frequently Asked Questions': ['ACC 针灸理疗常见问题解答', 'Häufig gestellte Fragen zu ACC'],
  'Ready to Start Your ACC Recovery?': ['准备好开启您的 ACC 伤痛康复之旅了吗？', 'Bereit für Ihre ACC-Genesung?'],
  'If you already have an ACC claim, book an appointment and provide your claim number. If you are unsure whether your injury may be eligible, contact Wellness Spring and we can explain what information you need before your appointment.': [
    '如果您已拥有 ACC 理赔案号，欢迎直接预约并附上案号。若您不确定损伤是否具备资质，欢迎联系 Wellness Spring，我们将为您指引所需信息。',
    'Wenn Sie bereits einen ACC-Schaden haben, buchen Sie einen Termin. Wenn Sie unsicher sind, kontaktieren Sie uns bitte.'
  ],
  'Contact Wellness Spring': ['联系 Wellness Spring 咨询', 'Wellness Spring kontaktieren'],

  // Hero
  'WELLNESS SPRING · AUCKLAND': ['WELLNESS SPRING · 奥克兰', 'WELLNESS SPRING · AUCKLAND'],
  'AI-Integrated Acupuncture & Holistic Health': ['AI 融合针灸与整体健康', 'KI-integrierte Akupunktur & ganzheitliche Gesundheit'],
  'Combining traditional Chinese medicine, acupuncture and AI-assisted health assessment to support personalised care, recovery and long-term wellbeing.': [
    '融合中医、针灸与 AI 辅助健康评估，为个性化护理、康复与长期健康提供支持。',
    'Wir verbinden traditionelle chinesische Medizin, Akupunktur und KI-gestützte Gesundheitsanalyse für individuelle Betreuung, Genesung und langfristiges Wohlbefinden.'
  ],
  'Book an Appointment': ['预约咨询', 'Termin vereinbaren'],
  'Learn More': ['了解更多', 'Mehr erfahren'],

  // About & Our Services
  'About Wellness Spring': ['关于 Wellness Spring', 'Über Wellness Spring'],
  'At Wellness Spring, we combine evidence-informed Chinese medicine, acupuncture, traditional therapies, Chinese medicine psychology, and AI-assisted health assessment to provide personalised care for recovery and long-term wellbeing.': [
    '在 Wellness Spring，我们结合循证中医、针灸、传统疗法、中医心理学及 AI 辅助健康评估，为康复与长期健康提供个性化护理。',
    'Bei Wellness Spring verbinden wir evidenzinformierte chinesische Medizin, Akupunktur, traditionelle Therapien, chinesische Medizinpsychologie und KI-gestützte Gesundheitsanalyse für individuelle Betreuung.'
  ],
  "Treatment may include acupuncture, moxibustion, cupping, gua sha, traditional bloodletting techniques, fire needle therapy, and other approaches selected according to each patient's individual needs.": [
    '治疗可包括针灸、艾灸、拔罐、刮痧、传统放血疗法、火针及其他按个人需要选择的方式。',
    'Die Behandlung kann Akupunktur, Moxibustion, Schröpfen, Gua Sha, traditionelle Aderlassmethoden und Feuer-Nadel-Therapie umfassen – individuell abgestimmt.'
  ],
  'We place particular emphasis on regulating the mind and spirit, supporting emotional balance, and integrating therapeutic music where appropriate. Technology is used to enhance — not replace — the practitioner–patient relationship.': [
    '我们尤其重视身心调节和情绪平衡，并在合适时融入治疗音乐。科技用于增强，而非取代，医患关系。',
    'Wir legen besonderen Wert auf die Regulation von Geist und Seele, emotionale Balance und therapeutische Musik. Technologie ergänzt, ersetzt jedoch nicht die Beziehung zwischen Behandlerin und Patientin bzw. Patient.'
  ],
  'Our Services': ['我们的服务', 'Unsere Leistungen'],
  'Integrating traditional wisdom with modern innovation to support your health and wellbeing.': [
    '融合传统智慧与现代创新，全方位守护您的健康与福祉。',
    'Verbindung traditioneller Weisheit mit moderner Innovation zur Unterstützung Ihrer Gesundheit.'
  ],
  'Acupuncture': ['针灸', 'Akupunktur'],
  'Restore balance and support natural healing.': ['恢复平衡，促进自然疗愈。', 'Stellt das Gleichgewicht wieder her und unterstützt die natürliche Heilung.'],
  'Cupping': ['拔罐', 'Schröpfen'],
  'Encourage circulation and ease muscle tension.': ['促进血液循环，缓解肌肉紧张。', 'Fördert die Durchblutung und löst Muskelverspannungen.'],
  'Traditional Bloodletting Techniques': ['传统放血疗法', 'Traditionelle Aderlassmethoden'],
  'Traditional methods to restore harmony.': ['传统疗法，恢复调和。', 'Traditionelle Methoden zur Wiederherstellung der Harmonie.'],
  'Chinese Medicine Psychology': ['中医心理学', 'Chinesische Medizinpsychologie'],
  'Support emotional balance and mind–body wellbeing.': ['调节情绪平衡，促进身心健康。', 'Unterstützt emotionale Balance und geistig-körperliches Wohlbefinden.'],
  'Moxibustion': ['艾灸', 'Moxibustion'],
  'Warm the meridians and support vital energy.': ['温通经络，补益阳气。', 'Wärmt die Meridiane und stärkt die Lebensenergie.'],
  'Gua Sha': ['刮痧', 'Gua Sha'],
  'Promote circulation and relieve tension.': ['活血化瘀，舒缓紧绷。', 'Fördert die Zirkulation und lindert Spannungen.'],
  'Fire Needle Therapy': ['火针疗法', 'Feuer-Nadel-Therapie'],
  'Use warmth to stimulate healing and relieve pain.': ['以温热刺激疗愈，祛痛止痛。', 'Nutzt Wärme zur Heilung und Schmerzlinderung.'],
  'Therapeutic Music': ['治疗音乐', 'Therapeutische Musik'],
  'Calm the mind and support recovery.': ['宁心安神，辅助康复。', 'Beruhigt den Geist und unterstützt die Genesung.'],
  'AI-Assisted Health Assessment': ['AI 辅助健康评估', 'KI-gestützte Gesundheitsanalyse'],
  'Personalised insights supported by AI technology.': ['AI 科技辅助，提供个性化见解。', 'Personalisierte Einblicke durch KI-Technologie.'],
  'Aesthetics & Anti-Aging': ['医美抗衰', 'Ästhetik & Anti-Aging'],
  'Skin Rejuvenation, Anti-Wrinkle, Brightening & Medical Care': ['皮肤年轻化、抗皱紧致、美白亮肤与专业医美护理', 'Hautverjüngung, Faltenbehandlung, Aufhellung & Medizinische Pflege'],

  // AI Health Assessment Section
  'AI Health Assessment': ['AI 健康评估', 'KI-Gesundheitsanalyse'],
  'Smart Health Analysis': ['智能健康分析', 'Intelligente Gesundheitsanalyse'],
  'Our AI-assisted health assessment helps identify patterns across symptoms, lifestyle, and overall wellbeing to support a more personalised Chinese medicine treatment plan.': [
    'AI 辅助健康评估可识别症状、生活方式与整体健康之间的关联，为更个性化的中医治疗方案提供支持。',
    'Unsere KI-gestützte Analyse erkennt Zusammenhänge zwischen Symptomen, Lebensstil und Wohlbefinden und unterstützt einen individuellen Behandlungsplan.'
  ],
  'It is used as a clinical support tool alongside practitioner assessment — not as a replacement for professional judgement or medical diagnosis.': [
    '它仅作为医师评估的临床辅助工具，不能替代专业判断或医学诊断。',
    'Sie dient als klinisches Unterstützungswerkzeug und ersetzt weder professionelle Beurteilung noch eine medizinische Diagnose.'
  ],
  'Pattern Recognition': ['模式识别', 'Mustererkennung'],
  'Identifies interconnected patterns in your health profile': ['识别您健康档案中的关联模式', 'Erkennt vernetzte Muster in Ihrem Gesundheitsprofil'],
  'Personalized Plan': ['个性化方案', 'Individueller Plan'],
  'Creates customized treatment recommendations': ['制定个性化治疗建议', 'Erstellt individuelle Behandlungsempfehlungen'],
  'Continuous Support': ['持续支持', 'Kontinuierliche Begleitung'],
  'Monitors progress and adapts treatment as needed': ['追踪进展并按需调整方案', 'Begleitet Fortschritte und passt die Behandlung bei Bedarf an'],

  // Practitioner
  'Meet Our Practitioners': ['医师团队', 'Unser Ärzteteam'],
  'Meet the Practitioner': ['医师介绍', 'Unser Ärzteteam'],
  'Founder of Wellness Spring': ['Wellness Spring 诊所创始人', 'Gründerin von Wellness Spring'],
  'Founder & Lead Practitioner': ['诊所创始人 · 首席诊疗师', 'Gründerin & Leitende Behandlerin'],
  'Medical Specialists': ['专家医师', 'Fachärzte & Spezialisten'],
  'Helene Li YU': ['Helene Li YU', 'Helene Li YU'],
  'Helene brings extensive expertise and compassion to her practice, with a holistic approach to care, integrating acupuncture, traditional Chinese medicine therapies, mind–body regulation, and AI-assisted health assessment.': [
    'Helene 以丰富的专业经验与关怀服务每位来访者，采用融合针灸、中医疗法、身心调节和 AI 辅助健康评估的整体护理方法。',
    'Helene verbindet umfassende Erfahrung und Einfühlungsvermögen mit einem ganzheitlichen Ansatz aus Akupunktur, traditioneller chinesischer Medizin, Körper-Geist-Regulation und KI-gestützter Gesundheitsanalyse.'
  ],
  'Her focus is on personalised treatment, emotional balance, and supporting long-term wellbeing through thoughtful, individualised care.': [
    '她专注于个性化治疗、情绪平衡，并以细致的个人化护理支持长期健康。',
    'Ihr Fokus liegt auf individueller Behandlung, emotionaler Balance und langfristigem Wohlbefinden durch aufmerksame, persönliche Betreuung.'
  ],
  'Dr. Damen QIAN (Ph.D.)': ['前 达 门', 'Dr. med. Damen QIAN'],
  'Ph.D. in Ethnomedicine | Traditional Mongolian Acupuncture & Five Therapies': [
    '医学博士 ｜ 民族医学（蒙医传统针灸与五疗方向）',
    'Dr. med. Ethnomedizin | Traditionelle Mongolische Akupunktur & Fünf Therapien'
  ],
  'Beijing University of Chinese Medicine': ['北京中医药大学', 'Peking-Universität für Chinesische Medizin'],
  'Inner Mongolia Medical University': ['内蒙古医科大学', 'Medizinische Universität der Inneren Mongolei'],
  'Inner Mongolia International Mongolian Hospital': ['内蒙古国际蒙医医院', 'Internationales Mongolische Medizin-Krankenhaus der Inneren Mongolei'],
  'Prof. Wulan (National Qihuang Scholar & Heritage Successor)': [
    '导师：国家岐黄学者、国家非遗传承人 乌兰教授',
    'Doktormutter: Prof. Wulan (Nationaler Qihuang-Gelehrter & Erbe des immateriellen Kulturerbes)'
  ],
  'Specialties': ['临床专长', 'Schwerpunkte'],
  'Clinical Specialties & Focus': ['临床专长与精技', 'Klinische Schwerpunkte'],
  'Education & Research': ['教育与科研经历', 'Ausbildung & Forschung'],
  'Contact Practitioner': ['联系医师', 'Behandler kontaktieren'],
  'Catherine Wang': ['Catherine Wang', 'Catherine Wang'],
  'New Zealand Registered Acupuncturist · ACC Provider': [
    '新西兰注册针灸师 · ACC 认证医师',
    'Neuseeländisch registrierte Akupunkteurin · ACC-Anbieterin'
  ],
  'New Zealand College of Chinese Medicine': ['新西兰中医学院', 'Neuseeland-College für Chinesische Medizin'],
  'Zhengzhou University': ['郑州大学', 'Zhengzhou-Universität'],
  'Traditional Chinese Medicine & Acupuncture': ['中医与针灸', 'Traditionelle Chinesische Medizin & Akupunktur'],
  'Mind-Body Regulation': ['身心调节', 'Körper-Geist-Regulation'],
  'Emotional Balance & Wellness': ['情绪平衡与健康', 'Emotionale Balance & Wohlbefinden'],

  // Testimonials
  'Retired AUT Sports Science Senior Lecturer & Programme Leader': ['AUT 体育科学前高级讲师及项目负责人', 'Ehemaliger AUT Sportwissenschafts-Dozent & Programmleiter'],
  'Business Professional': ['企业专业人士', 'Business-Expertin'],
  'Athlete': ['运动员', 'Sportler'],

  // FAQ
  'Common Questions': ['常见问题', 'Häufig gestellte Fragen'],
  'Find answers to frequently asked questions about acupuncture, treatment, and how we work with you to support your wellness journey.': [
    '了解关于针灸、治疗方案以及我们如何全方位支持您健康旅程的常见解答。',
    'Hier finden Sie Antworten auf häufig gestellte Fragen zu Akupunktur, Behandlung und unserem Betreuungskonzept.'
  ],
  'What does acupuncture treat?': ['针灸可以治疗哪些病症？', 'Was behandelt Akupunktur?'],
  "Acupuncture uses fine, sterile needles to support the body's natural healing processes and address pain, stress, sleep, and wellbeing. It can be effective for a wide range of conditions including musculoskeletal pain, tension headaches, anxiety, insomnia, digestive issues, and recovery from injury.": [
    '针灸使用细巧的无菌针具促进人体自愈，改善疼痛、压力、睡眠与整体状态。对于肌骨疼痛、紧张性头痛、焦虑、失眠、消化不良及伤后康复等均有积极疗效。',
    'Akupunktur nutzt feine, sterile Nadeln zur Unterstützung der natürlichen Selbstheilung bei Schmerzen, Stress, Schlafstörungen und allgemeinem Wohlbefinden.'
  ],
  'Is acupuncture ACC registered?': ['针灸属于 ACC 注册保障范围吗？', 'Ist Akupunktur ACC-registriert?'],
  'Yes. Wellness Spring provides ACC-registered acupuncture for eligible injuries. If you have experienced an accident or work-related injury, you may be covered. Please bring your ACC claim details to your appointment.': [
    '是的。Wellness Spring 为合规损伤提供 ACC 注册针灸服务。如果您不幸遭遇意外或工伤，可能享有费用报销。就诊时请携带您的 ACC 理赔信息。',
    'Ja. Wellness Spring bietet ACC-registrierte Akupunktur für berechtigte Verletzungen an. Bitte bringen Sie Ihre ACC-Daten zum Termin mit.'
  ],
  'How is my treatment personalised?': ['我的治疗方案是如何实施个性化的？', 'Wie wird meine Behandlung individualisiert?'],
  'Your practitioner reviews your health history, symptoms, goals, and AI assessment results before creating a personalised care plan. Treatment is tailored to your individual needs, ensuring the most effective approach for your recovery.': [
    '医师会全面评估您的病史、症状、目标以及 AI 健康评估结果，为您量身打造护理方案，确保最适合您康复的有效途径。',
    'Ihre Behandlerin analysiert Ihre Krankengeschichte, Symptome und KI-Ergebnisse, um einen maßgeschneiderten Behandlungsplan zu erstellen.'
  ],
  'How should I prepare?': ['就诊前需要做哪些准备？', 'Wie sollte ich mich vorbereiten?'],
  'Wear comfortable clothing and arrive hydrated. Please share relevant medical information, medications, and current concerns during consultation. Avoid heavy meals 2–3 hours before your appointment, and allow time to rest afterward for optimal benefits.': [
    '请穿着宽松舒适的衣服并保持充足水分。咨询时请告知用药与健康状况。建议诊前 2-3 小时避免暴饮暴食，诊后留有充裕休息时间。',
    'Tragen Sie bequeme Kleidung und trinken Sie ausreichend. Bitte informieren Sie uns über Vorerkrankungen und Medikamente.'
  ],
  'How long is an appointment?': ['一次诊疗需要多长时间？', 'Wie lange dauert ein Termin?'],
  'Appointment length varies by service. Most initial consultations allow time for assessment, treatment, questions, and personalised care planning. Typically 60–90 minutes. Follow-up sessions may be shorter (30–45 minutes) depending on your treatment plan.': [
    '时长视具体项目而定。首次咨询与诊疗通常需要 60-90 分钟，包含评估、治疗与方案讨论。后续复诊约 30-45 分钟。',
    'Die Dauer variiert. Die Erstkonsultation dauert meist 60–90 Minuten. Folgebehandlungen dauern in der Regel 30–45 Minuten.'
  ],
  "What if I'm nervous about needles?": ['如果我对针具感到紧张害怕怎么办？', 'Was, wenn ich Angst vor Nadeln habe?'],
  'Many people feel anxious about acupuncture needles. They are extremely fine and usually cause minimal sensation. Our practitioners are experienced in helping nervous clients feel comfortable. We can discuss your concerns and may start with gentler techniques or cupping, gua sha, or moxibustion as alternatives.': [
    '许多初学者都会对针具心存顾虑。我们的针具极其细微，几乎没有明显感觉。医师经验丰富，擅长帮您放松，也可优先采用艾灸、拔罐或刮痧等温和替代方案。',
    'Unsere Nadeln sind extrem fein und kaum spürbar. Wir nehmen uns Zeit für Sie und können alternativ mit Moxibustion, Schröpfen oder Gua Sha beginnen.'
  ],
  'Can I combine acupuncture with other treatments?': ['针灸可以与其他治疗方式结合进行吗？', 'Kann ich Akupunktur mit anderen Behandlungen kombinieren?'],
  "Yes. Acupuncture works well alongside conventional medicine and other complementary therapies. Please inform your practitioner about any other treatments you're receiving so we can create a coordinated care plan.": [
    '可以。针灸与现代医学及其他补充疗法相辅相成。请告知您的医师正在接受的治疗，以便我们制定协调一致的方案。',
    'Ja. Akupunktur lässt sich gut mit der Schulmedizin kombinieren. Bitte informieren Sie uns über laufende Behandlungen.'
  ],
  'How many sessions will I need?': ['我通常需要进行多少次诊疗？', 'Wie viele Sitzungen benötige ich?'],
  "The number of sessions depends on your condition, how long you've had it, and your body's response to treatment. Some acute injuries improve quickly (3–6 sessions), while chronic conditions may require longer courses. We'll discuss realistic expectations and create a personalised plan together.": [
    '诊疗次数取决于病症类型、发病时长及身体反应。急性损伤通常 3-6 次即可见效，慢性调理则需更长疗程。我们将为您设定合理的期望并共同制定计划。',
    'Die Anzahl hängt von Ihrem Zustand ab. Akute Beschwerden verbessern sich oft in 3–6 Sitzungen, chronische Erkrankungen benötigen mehr Zeit.'
  ],
  'Are there any side effects?': ['针灸会有副作用吗？', 'Gibt es Nebenwirkungen?'],
  'Acupuncture is generally very safe. Minor side effects may include slight soreness, mild bruising, or brief dizziness. These are temporary and usually resolve quickly. Serious side effects are rare when performed by qualified practitioners.': [
    '针灸整体非常安全。少数轻微反应包括局部酸胀、微小青紫或短暂晕针感，通常很快消退。由资深执业医师操作极少发生严重副作用。',
    'Akupunktur ist sehr sicher. Leichte Reaktionen wie geringer Muskelkater oder kleine Blaue Flecke sind vorübergehend.'
  ],
  'Do you offer online consultations?': ['提供线上咨询服务吗？', 'Werden Online-Konsultationen angeboten?'],
  'Initial consultations and treatments require an in-person visit to ensure proper assessment and care. However, we may offer follow-up guidance and support via phone or video depending on your needs. Please contact us to discuss options.': [
    '首次评估与治疗必须亲临诊所进行，以保证精准诊断。复诊引导与健康随访可通过电话或视频提供，欢迎与我们联系咨询。',
    'Die Erstbehandlung erfordert einen persönlichen Besuch. Folgeberatungen können je nach Bedarf telefonisch oder per Video stattfinden.'
  ],
  "Didn't find your answer?": ['没有找到您关心的解答？', 'Haben Sie keine Antwort gefunden?'],
  'Get in Touch': ['在线联系我们', 'Kontakt aufnehmen'],

  // Contact
  'Ready to take the next step in your health journey? Contact Wellness Spring to discuss your needs and book an appointment.': [
    '准备好为您的健康开启新篇章了吗？欢迎联系 Wellness Spring 探讨您的健康需求并预约诊疗。',
    'Bereit für den nächsten Schritt zu Ihrer Gesundheit? Kontaktieren Sie Wellness Spring für ein persönliches Beratungsgespräch.'
  ],
  'Contact Information': ['联系方式', 'Kontaktinformationen'],
  'Appointments': ['预约电话', 'Terminvereinbarung'],
  'General Enquiries': ['综合咨询', 'Allgemeine Anfragen'],
  'Email': ['电子邮件', 'E-Mail'],
  'Send a Message': ['发送留言', 'Nachricht senden'],
  'By Email': ['通过邮箱', 'Per E-Mail'],
  'By Txt (SMS)': ['通过短信 (SMS)', 'Per SMS'],
  'Your Name': ['您的姓名', 'Ihr Name'],
  'Your Email': ['您的邮箱', 'Ihre E-Mail'],
  'Your Mobile Phone (for Txt/SMS)': ['您的手机号 (接收短信)', 'Ihre Handynummer (für SMS)'],
  'Your Message': ['您的留言内容', 'Ihre Nachricht'],
  'Send Message': ['发送留言', 'Nachricht senden'],
  'Scan to connect via WeChat': ['扫码添加微信', 'Für WeChat scannen'],
  'Languages: English · Mandarin · Cantonese': ['服务语言：英语 · 普通话 · 粤语', 'Sprachen: Englisch · Mandarin · Kantonesisch'],

  // Footer
  'Future Smart Health': ['未来智慧健康', 'Zukunft der smarten Gesundheit'],
  'Acupuncture • Chinese Medicine • AI-Assisted Health Assessment': [
    '针灸 • 中医 • AI 辅助健康评估',
    'Akupunktur • Chinesische Medizin • KI-Gesundheitsanalyse'
  ],
  'Quick Links': ['快捷链接', 'Quick-Links'],
  'Follow Us': ['关注我们', 'Folgen Sie uns'],
  'All rights reserved.': ['保留所有权利。', 'Alle Rechte vorbehalten.'],
  'Future Smart Health - Combining Tradition with Innovation': [
    '未来智慧健康 — 传承传统，融合创新',
    'Zukunft der smarten Gesundheit — Tradition trifft Innovation'
  ]
}

function normalize(text) {
  if (!text) return ''
  return text
    .replace(/[’']/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
}

function LocalizedCopy({ language }) {
  useEffect(() => {
    const reverseMap = new Map()
    
    Object.entries(copy).forEach(([englishKey, translationValues]) => {
      const normalizedKey = normalize(englishKey)
      reverseMap.set(normalizedKey, englishKey)
      translationValues.forEach((val) => {
        if (val) reverseMap.set(normalize(val), englishKey)
      })
    })

    const langIndex = language === 'zh' ? 0 : language === 'de' ? 1 : -1

    // Walk all text nodes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)

    nodes.forEach((node) => {
      const raw = node.nodeValue
      const trimmed = raw.trim()
      if (!trimmed) return
      
      const normalized = normalize(trimmed)
      const englishKey = reverseMap.get(normalized)

      if (englishKey) {
        const replacement = langIndex >= 0 ? copy[englishKey]?.[langIndex] : englishKey
        if (replacement && replacement !== trimmed) {
          const leading = raw.match(/^\s*/)?.[0] ?? ''
          const trailing = raw.match(/\s*$/)?.[0] ?? ''
          node.nodeValue = `${leading}${replacement}${trailing}`
        }
      }
    })

    // Walk input/textarea placeholders
    document.querySelectorAll('[placeholder]').forEach((el) => {
      const normalized = normalize(el.placeholder)
      const englishKey = reverseMap.get(normalized)
      if (englishKey) {
        const replacement = langIndex >= 0 ? copy[englishKey]?.[langIndex] : englishKey
        if (replacement) el.placeholder = replacement
      }
    })
  }, [language])

  return null
}

export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language === 'de' ? 'de' : 'en'
  }, [language, theme])

  return (
    <PreferencesContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
      <LocalizedCopy language={language} />
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  return useContext(PreferencesContext)
}

