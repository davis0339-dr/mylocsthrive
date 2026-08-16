import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CircleHelp, Compass, Download, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { EmailForm } from '../components/NetlifyForm'
import { PageShell } from '../components/SiteChrome'
import { articles, siteUrl } from '../content'

export const Route = createFileRoute('/self-check')({
  head: () => ({
    meta: [
      { title: 'Loc Readiness Self Check | My Locs Thrive' },
      { name: 'description', content: 'A private five-question reflection to help you consider whether locs fit your life right now.' },
      { property: 'og:title', content: 'Loc Readiness Self Check | My Locs Thrive' },
      { property: 'og:description', content: 'Reflect on your readiness for locs without pressure or judgement.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}/self-check` },
    ],
    links: [{ rel: 'canonical', href: `${siteUrl}/self-check` }],
  }),
  component: SelfCheckPage,
})

const quizQuestions = [
  'I understand that locs change over time and may not look polished at every stage.',
  'I have considered the likely cost, time and maintenance approach that fits my life.',
  'I am willing to research establishment methods and ask a loctician specific questions.',
  'I know that scalp symptoms and hair loss may need a clinician rather than online advice.',
  'I can give myself patience without expecting a perfect or identical journey.',
]

const quizResults = {
  ready: { title: 'Ready to explore', text: 'You appear ready to begin researching methods, costs and qualified locticians. Keep asking questions and compare advice before committing.', resources: [articles[0], articles[1]] },
  considering: { title: 'Still considering', text: 'You may benefit from learning more about commitment, maintenance and realistic expectations. There is no deadline for deciding.', resources: [articles[0], articles[2]] },
  foundation: { title: 'Build your foundation', text: 'Take more time to understand scalp needs, lifestyle requirements, cost and professional support before deciding.', resources: [articles[1], articles[2]] },
}

function SelfCheckPage() {
  const [answers, setAnswers] = useState<Array<boolean | null>>(Array(quizQuestions.length).fill(null))
  const answered = answers.filter((answer) => answer !== null).length
  const yesCount = answers.filter((answer) => answer === true).length
  const complete = answered === quizQuestions.length
  const result = yesCount >= 4 ? quizResults.ready : yesCount >= 2 ? quizResults.considering : quizResults.foundation

  function updateAnswer(index: number, value: boolean) {
    setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? value : answer))
  }

  return (
    <PageShell>
      <header className="page-hero self-check-hero"><div className="shell narrow-shell"><p className="eyebrow"><span />A private reflection</p><h1>Could locs fit your life <em>right now?</em></h1><p>Five questions to help you notice what you understand and what you may still want to explore.</p></div></header>
      <section className="section self-check-section">
        <div className="shell self-check-grid">
          <div className="self-check-intro"><p className="eyebrow light"><span />Take your time</p><h2>There is no perfect score.</h2><p>This is not a test or professional assessment. It is a short reflection designed to support clearer questions and realistic expectations.</p><div className="privacy-chip"><ShieldCheck aria-hidden="true" /> Your answers stay in your browser and are not submitted or stored.</div></div>
          <div className="check-card">
            <div className="check-progress"><span>{answered} of {quizQuestions.length} reflected on</span><div><i style={{ width: `${(answered / quizQuestions.length) * 100}%` }} /></div></div>
            <ol className="question-list">{quizQuestions.map((question, index) => <li key={question}><span className="question-number">{index + 1}</span><p>{question}</p><div className="choice-group" role="group" aria-label={`Response to statement ${index + 1}`}><button type="button" className={answers[index] === true ? 'selected' : ''} aria-pressed={answers[index] === true} onClick={() => updateAnswer(index, true)}>Yes</button><button type="button" className={answers[index] === false ? 'selected' : ''} aria-pressed={answers[index] === false} onClick={() => updateAnswer(index, false)}>Not yet</button></div></li>)}</ol>
            <div className={`check-result${complete ? ' complete' : ''}`} aria-live="polite">
              {!complete ? <><CircleHelp aria-hidden="true" /><div><h3>{answered ? 'Keep reflecting' : 'Begin when you are ready'}</h3><p>Choose “yes” or “not yet” for each statement. There is no wrong result.</p></div></> : <><Compass aria-hidden="true" /><div><p className="result-label">Your reflection</p><h3>{result.title}</h3><p>{result.text}</p><div className="result-links">{result.resources.map((resource) => <a key={resource.slug} href={`/resources/${resource.slug}`}>{resource.title} <ArrowRight aria-hidden="true" /></a>)}<a href="/#starter-guide">Get the free starter pack <Download aria-hidden="true" /></a></div><details className="result-signup"><summary>Send these next steps to my email</summary><EmailForm formName="locs-thrive-guide" buttonLabel="Get the free starter pack" successTitle="You’re on the list." successMessage="Your guide and checklist are ready below." source={`self-check-${result.title.toLowerCase().replaceAll(' ', '-')}`} compact download /></details></div></>}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
