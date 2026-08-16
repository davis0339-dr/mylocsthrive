import { createFileRoute } from '@tanstack/react-router'
import { LegalPage, legalHead } from '../components/LegalPage'

export const Route = createFileRoute('/disclaimer')({ head: () => legalHead('Educational and Medical Disclaimer', 'The professional boundaries and educational purpose of My Locs Thrive.', 'disclaimer'), component: DisclaimerPage })
function DisclaimerPage() { return <LegalPage title="Educational & Medical Disclaimer" intro="My Locs Thrive is designed to improve questions and understanding, not to diagnose, prescribe or replace personalised care." sections={[
  { heading: 'Dr Lisa’s role', content: <p>Dr Lisa is presented here as a medical doctor, loc wearer, communicator and founder. She is not presented as a dermatologist, trichologist, professional loctician or your personal medical adviser.</p> },
  { heading: 'General education only', content: <p>Content about locs, hair care, lifestyle, scalp awareness and wellbeing is general education. It cannot account for your history, examination findings, products, installation method or individual risks.</p> },
  { heading: 'When to seek a loctician', content: <p>A qualified loctician is an appropriate source for method selection, installation, parting, unraveling, product build-up, retwisting, interlocking and maintenance technique.</p> },
  { heading: 'When to seek a clinician', content: <p>Persistent or worsening scalp symptoms, pain, sores, pus, marked swelling, a spreading rash, sudden or patchy hair loss, or possible medication and health-related changes should be discussed with an appropriate clinician. Urgent or severe symptoms require timely local medical care.</p> },
  { heading: 'No guarantees', content: <p>Hair and loc journeys vary. My Locs Thrive does not guarantee a particular appearance, rate of locking, hair-growth result, symptom outcome or personal experience.</p> },
  { heading: 'Sources and corrections', content: <p>Health-related resources aim to use credible, traceable sources and show review dates. Evidence and guidance can change. If you identify an error or unclear boundary, please use the <a href="/contact">contact page</a>.</p> },
]} /> }
