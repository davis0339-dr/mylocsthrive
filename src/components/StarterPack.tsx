import { Check } from 'lucide-react'
import { EmailForm } from './NetlifyForm'

const guideContents = [
  'Lisa’s 9-page Gentle Starter Guide to Locs',
  'A practical pre-starting locs checklist',
  'A clear post one-month progress checklist',
  'Prompts to help you begin calmly and ask better questions',
]

export function StarterPack({ source = 'homepage-guide' }: { source?: string }) {
  return (
    <section className="section guide-section" id="starter-guide">
      <div className="shell guide-grid">
        <div className="guide-preview" aria-label="The Gentle Starter Guide and Gentle Starter Locs Checklist">
          <figure className="pack-cover pack-cover-guide">
            <img src="/images/gentle-guide-cover.webp" width="760" height="1074" alt="Cover of Lisa’s Gentle Starter Guide to Locs" loading="lazy" />
            <figcaption>9-page guide</figcaption>
          </figure>
          <figure className="pack-cover pack-cover-checklist">
            <img src="/images/gentle-checklist-cover.webp" width="760" height="1075" alt="Cover of Lisa’s Gentle Starter Locs Checklist" loading="lazy" />
            <figcaption>3-page checklist</figcaption>
          </figure>
        </div>
        <div className="guide-copy">
          <p className="eyebrow light"><span />Two free resources</p>
          <h2>The Gentle Starter Pack</h2>
          <p className="large-copy">Lisa’s branded guide and practical checklists give you a calm place to learn, prepare and notice your progress.</p>
          <ul className="guide-list">
            {guideContents.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
          </ul>
          <p className="guide-promise">Enter your email once and receive both resources immediately.</p>
          <EmailForm formName="locs-thrive-guide" buttonLabel="Get the free starter pack" successTitle="You’re on the list." successMessage="Thank you. Your guide and checklist are ready below." source={source} download />
          <p className="form-fineprint">Visitors of all ages are welcome to read. Email signup is for adults aged 18 and over. Younger readers can explore with a parent or guardian. By joining, you also receive occasional Notes From the Journey and may unsubscribe at any time. Both resources are educational and do not diagnose scalp or hair conditions.</p>
        </div>
      </div>
    </section>
  )
}
