import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, legalHead } from '../components/LegalPage'

export const Route = createFileRoute('/disclosures')({ head: () => legalHead('Sponsorship and Affiliate Disclosure', 'How My Locs Thrive labels sponsorships, affiliate links, collaborations and gifted products.', 'disclosures'), component: DisclosuresPage })
function DisclosuresPage() { return <LegalPage title="Sponsorship & Affiliate Disclosure" intro="Trust depends on knowing when a commercial relationship may influence what you are reading." sections={[
  { heading: 'Current position', content: <p>My Locs Thrive does not currently present paid endorsements, affiliate product links or sponsored educational articles on this site. This page sets the standard that applies if commercial relationships are introduced.</p> },
  { heading: 'Clear labels', content: <p>Paid sponsorships, affiliate links, gifted products and hosted collaborations will be labelled clearly near the relevant content, not hidden only in a general policy.</p> },
  { heading: 'Editorial independence', content: <p>A commercial relationship will not be allowed to create unsupported health claims, fabricated results or an implied professional endorsement beyond Dr Lisa’s actual experience and qualifications.</p> },
  { heading: 'Contributor transparency', content: <p>Learning Circle contributors and article collaborators will be described using confirmed qualifications and an accurate role. A contributor’s involvement does not turn general education into personal advice.</p> },
  { heading: 'Corrections', content: <p>If a disclosure is missing or inaccurate, it will be corrected promptly and the nature of a material correction will be made clear. Questions can be sent through the <a href="/contact">contact page</a>.</p> },
]} /> }
