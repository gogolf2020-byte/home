import MobileCareSection from './MobileCareSection'
import Contact from './Contact'

export default function MobileCarePage() {
  return (
    <div className="min-h-screen bg-[#f0f4f9] dark:bg-slate-950 transition-colors">
      <MobileCareSection />
      <Contact />
    </div>
  )
}
