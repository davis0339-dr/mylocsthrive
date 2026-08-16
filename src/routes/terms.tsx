import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, legalHead } from '../components/LegalPage'

export const Route = createFileRoute('/terms')({ head: () => legalHead('Terms of Use', 'Terms for using the My Locs Thrive website, resources and downloadable guide.', 'terms'), component: TermsPage })
function TermsPage() { return <LegalPage title="Terms of Use" intro="These terms support respectful, informed use of My Locs Thrive and its educational resources." sections={[
  { heading: 'Educational use', content: <p>The website and starter guide are provided for general educational and personal reflection purposes. They are not a substitute for individual assessment by a clinician or qualified loctician.</p> },
  { heading: 'No professional relationship', content: <p>Reading the site, submitting a form or receiving an email does not create a doctor-patient, clinician-patient, loctician-client or other professional advisory relationship with Dr Lisa or My Locs Thrive.</p> },
  { heading: 'Responsible decisions', content: <p>You remain responsible for deciding whether information is appropriate for your circumstances and for seeking qualified support where needed. Do not delay medical attention because of information on this site.</p> },
  { heading: 'Intellectual property', content: <p>Original site copy, visual design and downloadable resources belong to My Locs Thrive unless otherwise stated. You may download the free guide for personal, non-commercial use. You may not sell, repackage or publish it as your own.</p> },
  { heading: 'Links and availability', content: <p>External links are provided for context and further reading. My Locs Thrive does not control external websites. Resources may be corrected, updated, moved or withdrawn as the platform develops.</p> },
  { heading: 'Respectful use', content: <p>Do not misuse forms, attempt to disrupt the site, upload unlawful content or impersonate another person. Community programmes, when introduced, may have additional participation guidelines.</p> },
  { heading: 'Changes and contact', content: <p>These terms may be updated to reflect new resources or services. Material changes are shown by the updated date. Questions can be sent through the <a href="/contact">contact page</a>.</p> },
]} /> }
