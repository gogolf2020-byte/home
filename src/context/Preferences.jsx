import { createContext, useContext, useEffect, useState } from 'react'

const PreferencesContext = createContext(null)

const copy = {
  'Home': ['首页', 'Startseite'], 'About': ['关于我们', 'Über uns'], 'Services': ['服务项目', 'Leistungen'],
  'AI Assessment': ['AI 健康评估', 'KI-Gesundheitsanalyse'], 'Practitioner': ['医师介绍', 'Behandlerin'],
  'Testimonials': ['客户评价', 'Erfahrungsberichte'], 'Contact': ['联系我们', 'Kontakt'],
  'WELLNESS SPRING · AUCKLAND': ['WELLNESS SPRING · 奥克兰', 'WELLNESS SPRING · AUCKLAND'],
  'AI-Integrated Acupuncture & Holistic Health': ['AI 融合针灸与整体健康', 'KI-integrierte Akupunktur & ganzheitliche Gesundheit'],
  'Combining traditional Chinese medicine, acupuncture and AI-assisted health assessment to support personalised care, recovery and long-term wellbeing.': ['融合中医、针灸与 AI 辅助健康评估，为个性化护理、康复与长期健康提供支持。', 'Wir verbinden traditionelle chinesische Medizin, Akupunktur und KI-gestützte Gesundheitsanalyse für individuelle Betreuung, Genesung und langfristiges Wohlbefinden.'],
  'Book an Appointment': ['预约咨询', 'Termin vereinbaren'], 'Learn More': ['了解更多', 'Mehr erfahren'],
  'About Wellness Spring': ['关于 Wellness Spring', 'Über Wellness Spring'],
  'At Wellness Spring, we combine evidence-informed Chinese medicine, acupuncture, traditional therapies, Chinese medicine psychology, and AI-assisted health assessment to provide personalised care for recovery and long-term wellbeing.': ['在 Wellness Spring，我们结合循证中医、针灸、传统疗法、中医心理学及 AI 辅助健康评估，为康复与长期健康提供个性化护理。', 'Bei Wellness Spring verbinden wir evidenzinformierte chinesische Medizin, Akupunktur, traditionelle Therapien, chinesische Medizinpsychologie und KI-gestützte Gesundheitsanalyse für individuelle Betreuung.'],
  "Treatment may include acupuncture, moxibustion, cupping, gua sha, traditional bloodletting techniques, fire needle therapy, and other approaches selected according to each patient's individual needs.": ['治疗可包括针灸、艾灸、拔罐、刮痧、传统放血疗法、火针及其他按个人需要选择的方式。', 'Die Behandlung kann Akupunktur, Moxibustion, Schröpfen, Gua Sha, traditionelle Aderlassmethoden und Feuer-Nadel-Therapie umfassen – individuell abgestimmt.'],
  'We place particular emphasis on regulating the mind and spirit, supporting emotional balance, and integrating therapeutic music where appropriate. Technology is used to enhance — not replace — the practitioner–patient relationship.': ['我们尤其重视身心调节和情绪平衡，并在合适时融入治疗音乐。科技用于增强，而非取代，医患关系。', 'Wir legen besonderen Wert auf die Regulation von Geist und Seele, emotionale Balance und therapeutische Musik. Technologie ergänzt, ersetzt jedoch nicht die Beziehung zwischen Behandlerin und Patientin bzw. Patient.'],
  'Our Services': ['我们的服务', 'Unsere Leistungen'], 'Acupuncture': ['针灸', 'Akupunktur'], 'Moxibustion': ['艾灸', 'Moxibustion'], 'Cupping': ['拔罐', 'Schröpfen'], 'Gua Sha': ['刮痧', 'Gua Sha'], 'Traditional Bloodletting Techniques': ['传统放血疗法', 'Traditionelle Aderlassmethoden'], 'Fire Needle Therapy': ['火针疗法', 'Feuer-Nadel-Therapie'], 'Chinese Medicine Psychology': ['中医心理学', 'Chinesische Medizinpsychologie'], 'Therapeutic Music': ['治疗音乐', 'Therapeutische Musik'], 'AI-Assisted Health Assessment': ['AI 辅助健康评估', 'KI-gestützte Gesundheitsanalyse'],
  'AI Health Assessment': ['AI 健康评估', 'KI-Gesundheitsanalyse'], 'Smart Health Analysis': ['智能健康分析', 'Intelligente Gesundheitsanalyse'],
  'Our AI-assisted health assessment helps identify patterns across symptoms, lifestyle, and overall wellbeing to support a more personalised Chinese medicine treatment plan.': ['AI 辅助健康评估可识别症状、生活方式与整体健康之间的关联，为更个性化的中医治疗方案提供支持。', 'Unsere KI-gestützte Analyse erkennt Zusammenhänge zwischen Symptomen, Lebensstil und Wohlbefinden und unterstützt einen individuellen Behandlungsplan.'],
  'It is used as a clinical support tool alongside practitioner assessment — not as a replacement for professional judgement or medical diagnosis.': ['它仅作为医师评估的临床辅助工具，不能替代专业判断或医学诊断。', 'Sie dient als klinisches Unterstützungswerkzeug und ersetzt weder professionelle Beurteilung noch eine medizinische Diagnose.'],
  'Pattern Recognition': ['模式识别', 'Mustererkennung'], 'Personalized Plan': ['个性化方案', 'Individueller Plan'], 'Continuous Support': ['持续支持', 'Kontinuierliche Begleitung'],
  'Identifies interconnected patterns in your health profile': ['识别您健康档案中的关联模式', 'Erkennt vernetzte Muster in Ihrem Gesundheitsprofil'], 'Creates customized treatment recommendations': ['制定个性化治疗建议', 'Erstellt individuelle Behandlungsempfehlungen'], 'Monitors progress and adapts treatment as needed': ['追踪进展并按需调整方案', 'Begleitet Fortschritte und passt die Behandlung bei Bedarf an'],
  'Meet the Practitioner': ['认识医师', 'Ihre Behandlerin kennenlernen'], 'Helene Li YU': ['Helene Li YU', 'Helene Li YU'], 'Specialties': ['专业领域', 'Schwerpunkte'], 'Traditional Chinese Medicine & Acupuncture': ['中医与针灸', 'Traditionelle chinesische Medizin & Akupunktur'], 'Mind-Body Regulation': ['身心调节', 'Körper-Geist-Regulation'], 'Emotional Balance & Wellness': ['情绪平衡与健康', 'Emotionale Balance & Wohlbefinden'],
  'Helene brings extensive expertise and compassion to her practice, with a holistic approach to care, integrating acupuncture, traditional Chinese medicine therapies, mind–body regulation, and AI-assisted health assessment.': ['Helene 以丰富的专业经验与关怀服务每位来访者，采用融合针灸、中医疗法、身心调节和 AI 辅助健康评估的整体护理方法。', 'Helene verbindet umfassende Erfahrung und Einfühlungsvermögen mit einem ganzheitlichen Ansatz aus Akupunktur, traditioneller chinesischer Medizin, Körper-Geist-Regulation und KI-gestützter Gesundheitsanalyse.'],
  'Her focus is on personalised treatment, emotional balance, and supporting long-term wellbeing through thoughtful, individualised care.': ['她专注于个性化治疗、情绪平衡，并以细致的个人化护理支持长期健康。', 'Ihr Fokus liegt auf individueller Behandlung, emotionaler Balance und langfristigem Wohlbefinden durch aufmerksame, persönliche Betreuung.'],
  'Contact Information': ['联系方式', 'Kontaktinformationen'], 'Send a Message': ['发送留言', 'Nachricht senden'], 'Your Name': ['您的姓名', 'Ihr Name'], 'Your Email': ['您的邮箱', 'Ihre E-Mail-Adresse'], 'Your Message': ['您的留言', 'Ihre Nachricht'], 'Send Message': ['发送留言', 'Nachricht senden'], 'Scan to connect via WeChat': ['扫码添加微信', 'Für WeChat scannen'], 'Languages: English · Mandarin · Cantonese': ['语言：英语 · 普通话 · 粤语', 'Sprachen: Englisch · Mandarin · Kantonesisch'],
}

function LocalizedCopy({ language }) {
  useEffect(() => {
    const reverse = new Map()
    Object.entries(copy).forEach(([english, values]) => values.forEach((value) => reverse.set(value.replace(/\s+/g, ' '), english)))
    const index = language === 'zh' ? 0 : language === 'de' ? 1 : -1
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach((node) => {
      const raw = node.nodeValue
      const trimmed = raw.trim()
      const normalized = trimmed.replace(/\s+/g, ' ')
      const english = reverse.get(normalized) || normalized
      const replacement = index >= 0 ? copy[english]?.[index] : english
      if (replacement && replacement !== normalized) {
        const leading = raw.match(/^\s*/)?.[0] ?? ''
        const trailing = raw.match(/\s*$/)?.[0] ?? ''
        node.nodeValue = `${leading}${replacement}${trailing}`
      }
    })
    document.querySelectorAll('[placeholder]').forEach((element) => {
      const original = reverse.get(element.placeholder) || element.placeholder
      element.placeholder = index >= 0 ? copy[original]?.[index] || original : original
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
