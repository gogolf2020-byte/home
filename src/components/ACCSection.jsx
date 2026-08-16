import { Link } from 'react-router-dom'
import { usePreferences } from '../context/Preferences'

export default function ACCSection() {
  const { language } = usePreferences()

  return (
    <section id="acc-treatment" className="scroll-mt-20 bg-white py-16 md:py-20 dark:bg-slate-900 border-y border-emerald-900/10 dark:border-slate-800">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#eef4ef] p-8 md:p-12 dark:bg-slate-800/90 dark:border dark:border-slate-700 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 mb-3">
              ACC INJURY RECOVERY
            </span>
            <h2 className="text-3xl font-bold text-primary dark:text-emerald-400 md:text-4xl">
              ACC Injury Recovery
            </h2>
            <p className="mt-2 text-lg font-semibold text-accent dark:text-emerald-300">
              Treatment with an ACC-Registered Acupuncturist
            </p>
          </div>

          {/* Core Copy */}
          <p className="mx-auto max-w-3xl text-center text-base leading-8 text-slate-700 md:text-lg dark:text-slate-200 mb-8">
            Recovering from an accident, sports injury, work injury or another ACC-covered injury? Wellness Spring provides personalised acupuncture and Chinese medicine treatment to support recovery, reduce injury-related symptoms, restore movement and function, and help you return to everyday activity.
          </p>

          {/* Sub-card: Already Have an ACC Claim */}
          <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 dark:border dark:border-slate-800">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-primary dark:bg-emerald-950 dark:text-emerald-300">
                ✓
              </span>
              <div>
                <h3 className="text-lg font-bold text-primary dark:text-emerald-300 mb-1">
                  Already have an ACC claim?
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-6">
                  If you already have an ACC-covered claim, you can self-refer for acupuncture treatment. Simply provide your ACC claim number when booking.
                </p>
              </div>
            </div>
          </div>

          {/* Treatment may include */}
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Treatment may include:
            </p>
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300 flex flex-wrap justify-center gap-2 md:gap-4">
              <span>Acupuncture</span> · <span>Cupping</span> · <span>Gua Sha</span> · <span>Tuina</span> · <span>Individualised Recovery Support</span>
            </p>
          </div>

          {/* ACC Funding Note */}
          <div className="mb-8 rounded-xl bg-emerald-50/80 p-4 text-center text-xs font-medium text-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:border dark:border-slate-800">
            <span className="font-bold text-primary dark:text-emerald-400">ACC Funding:</span> ACC contributes towards eligible acupuncture treatment for covered injuries. A co-payment may apply.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/acc-treatment#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-secondary transition-all"
            >
              Book ACC Treatment
            </Link>
            <Link
              to="/acc-treatment"
              className="rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
            >
              Learn About ACC Treatment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
