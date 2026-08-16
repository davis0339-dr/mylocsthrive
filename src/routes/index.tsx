import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  CircleHelp,
  Compass,
  Download,
  HeartHandshake,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { EmailForm } from '../components/NetlifyForm'
import { PageShell, StructuredData } from '../components/SiteChrome'
import { articles, resourceCategories, siteUrl } from '../content'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'My Locs Thrive | Grow Healthy Locs and Enjoy the Process' },
      { name: 'description', content: 'Clear, caring guidance for women and girls who want thriving locs without confusion, pressure or perfectionism.' },
      { property: 'og:title', content: 'My Locs Thrive | Grow Healthy Locs and Enjoy the Process' },
      { property: 'og:description', content: 'Clear, caring guidance for growing healthy locs and enjoying the process.' },
      { property: 'og:image', content: `${siteUrl}/images/lisa-hero.jpg` },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: siteUrl }],
  }),
  component: HomePage,
})

const journeyStages = [
  { number: '01', title: 'Questioning', text: 'Surely there is a way to enjoy my natural hair consistently?' },
  { number: '02', title: 'Releasing', text: 'I stopped treating my hair texture and volume like a problem.' },
  { number: '03', title: 'Beginning', text: 'I chose locs before I felt fully ready.' },
  { number: '04', title: 'Learning', text: 'Every stage came with learning and asked for patience.' },
  { number: '05', title: 'Thriving', text: 'Now I’ve reached a stage where I can share my journey.' },
]

const principles = [
  { icon: SearchCheck, title: 'Experience stays labelled', text: 'I say clearly when something is my own experience rather than established health information.' },
  { icon: BookOpen, title: 'Facts get checked', text: 'Health related educational content is checked against credible and traceable sources.' },
  { icon: ShieldCheck, title: 'Professionals matter', text: 'Styling may need a qualified loctician. Persistent scalp or hair loss concerns may need a clinician.' },
  { icon: HeartHandshake, title: 'Transparency comes first', text: 'Sponsored content, affiliate relationships, corrections and collaborations will always be disclosed.' },
]

const guideContents = [
  'Questions to ask before starting',
  'An overview of common establishment methods',
  'What to discuss during a loctician consultation',
  'A first-month care checklist',
  'Common myths and unrealistic expectations',
  'Situations that may require professional advice',
  'Space to record personal goals and questions',
]

const quizQuestions = [
  'I understand that locs change over time and may not look polished at every stage.',
  'I have considered the likely cost, time and maintenance approach that fits my life.',
  'I am willing to research establishment methods and ask a loctician specific questions.',
  'I know that scalp symptoms and hair loss may need a clinician rather than online advice.',
  'I can give myself patience without expecting a perfect or identical journey.',
]

const quizResults = {
  ready: {
    title: 'Ready to explore',
    text: 'You appear ready to begin researching methods, costs and qualified locticians. Keep asking questions and compare advice before committing.',
    resources: [articles[0], articles[1]],
  },
  considering: {
    title: 'Still considering',
    text: 'You may benefit from learning more about commitment, maintenance and realistic expectations. There is no deadline for deciding.',
    resources: [articles[0], articles[2]],
  },
  foundation: {
    title: 'Build your foundation',
    text: 'Take more time to understand scalp needs, lifestyle requirements, cost and professional support before deciding.',
    resources: [articles[1], articles[2]],
  },
}

function HomePage() {
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
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'My Locs Thrive', url: siteUrl, logo: `${siteUrl}/favicon.svg` },
          { '@type': 'Person', '@id': `${siteUrl}/#lisa`, name: 'Dr Lisa', description: 'Medical doctor, loc wearer and founder of My Locs Thrive.', image: `${siteUrl}/images/lisa-hero.jpg`, worksFor: { '@id': `${siteUrl}/#organization` } },
          { '@type': 'ProfilePage', name: 'Meet Dr Lisa', url: `${siteUrl}/#lisa-story`, mainEntity: { '@id': `${siteUrl}/#lisa` } },
          { '@type': 'WebSite', name: 'My Locs Thrive', url: siteUrl, publisher: { '@id': `${siteUrl}/#organization` } },
        ],
      }} />

      <section className="hero" id="start">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />A gentler way to begin and grow</p>
            <h1>Grow healthy locs. <em>Enjoy the process.</em></h1>
            <p className="hero-lead">Clear, caring guidance for women and girls who want thriving locs without the confusion, pressure or perfectionism.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#starter-guide">Get the Gentle Starter Guide <ArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href="/resources">Explore beginner resources</a>
            </div>
            <p className="brand-line">Honest guidance. <span>No shame. Real life care.</span></p>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src="/images/lisa-hero.jpg" width="860" height="1075" alt="Dr Lisa smiling, with her long locs clearly visible" fetchPriority="high" />
            </div>
            <div className="portrait-caption"><span>Dr Lisa</span>Medical doctor and loc wearer, learning and sharing out loud.</div>
          </div>
        </div>
        <div className="shell trust-strip" aria-label="Our approach">
          {['Honest guidance', 'Healthy foundations', 'No shame or perfectionism'].map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}
        </div>
        <a className="scroll-cue" href="#lisa-story" aria-label="Continue to Lisa’s story"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="section about-section" id="lisa-story">
        <div className="shell about-grid">
          <div className="about-portrait">
            <img src="/images/lisa-evening.png" width="439" height="577" alt="Dr Lisa smiling in a black evening dress with her locs worn loose" loading="lazy" />
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span />Meet Dr Lisa</p>
            <h2>I’m Dr Lisa, and I’m <em>learning right beside you.</em></h2>
            <p className="large-copy">I started my loc journey after years of feeling that caring for my natural hair asked for too much time, tension and frequent changes.</p>
            <p>Medicine has taught me to value evidence, listen carefully and explain things plainly. Locs taught me process, patience, self-trust and the beauty of simplicity.</p>
            <p className="about-quote">“You do not need perfect hair knowledge. You need a healthy foundation, curiosity, patience and the will to begin.”</p>
            <aside className="boundary-note">My Locs Thrive provides general hair care, lifestyle and wellbeing education. It does not replace personal advice from a clinician or qualified loctician.</aside>
          </div>
        </div>

        <div className="shell journey-block">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span />The honest version</p><h2>From questioning to thriving.</h2></div>
            <p>My locs did not begin as a trend. They began as a question: could caring for my natural hair feel simpler, kinder and more sustainable?</p>
          </div>
          <ol className="journey-timeline">
            {journeyStages.map((stage) => (
              <li key={stage.number}>
                <span className="journey-number">{stage.number}.</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section principles-section">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow"><span />How I share what I learn</p>
            <h2>Carefully considered. <em>Clearly explained.</em></h2>
          </div>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article className="principle-card" key={title}>
                <span className="principle-number">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section guide-section" id="starter-guide">
        <div className="shell guide-grid">
          <div className="guide-preview" aria-hidden="true">
            <div className="guide-sheet guide-sheet-back" />
            <div className="guide-sheet guide-sheet-front">
              <span>My Locs Thrive</span>
              <div className="guide-mark"><Sparkles /></div>
              <h3>The Gentle<br />Starter Guide</h3>
              <p>A calm place to begin.</p>
              <small>Prepared by Dr Lisa</small>
            </div>
          </div>
          <div className="guide-copy">
            <p className="eyebrow light"><span />The free starter guide</p>
            <h2>The Gentle Starter Guide</h2>
            <p className="large-copy">A calm, practical starting point for understanding locs, asking better questions and beginning with confidence.</p>
            <ul className="guide-list">
              {guideContents.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="guide-promise">Enter your email and receive the Gentle Starter Guide immediately.</p>
            <EmailForm
              formName="locs-thrive-guide"
              buttonLabel="Get the Gentle Starter Guide"
              successTitle="You’re on the list."
              successMessage="Thank you. You can open the guide straight away using the link below."
              source="homepage-guide"
              download
            />
            <p className="form-fineprint">Visitors of all ages are welcome to read. Email signup is for adults aged 18 and over. Younger readers can explore with a parent or guardian. By joining, you also receive occasional Notes From the Journey and may unsubscribe at any time. The guide is educational and does not diagnose scalp or hair conditions.</p>
          </div>
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span />Resource hub</p><h2>Start with what you need <em>today.</em></h2></div>
            <p>Practical reading that separates personal experience, professional hair-care questions and concerns that deserve clinical attention.</p>
          </div>
          <div className="article-grid">
            {articles.slice(0, 3).map((article, index) => (
              <article className={`article-card article-card-${index + 1}`} key={article.slug}>
                <span className="article-index">0{index + 1}</span>
                <p className="card-category">{article.category}</p>
                <h3><a href={`/resources/${article.slug}`}>{article.title}</a></h3>
                <p>{article.description}</p>
                <div className="article-meta"><span>By Dr Lisa</span><span>{article.readingTime}</span></div>
                <a className="text-link" href={`/resources/${article.slug}`}>Read the article <ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <div className="category-list" aria-label="Resource categories">
            {resourceCategories.map((category) => <span key={category}>{category}</span>)}
          </div>
          <a className="button button-secondary resource-button" href="/resources">Visit the resource hub <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section self-check-section" id="self-check">
        <div className="shell self-check-grid">
          <div className="self-check-intro">
            <p className="eyebrow light"><span />A private reflection</p>
            <h2>Could locs fit your life <em>right now?</em></h2>
            <p>This is not a test or professional assessment. It is a short reflection designed to help you identify what you already understand and what you may still need to explore.</p>
            <div className="privacy-chip"><ShieldCheck aria-hidden="true" /> Your answers stay in your browser and are not submitted or stored.</div>
          </div>
          <div className="check-card">
            <div className="check-progress"><span>{answered} of {quizQuestions.length} reflected on</span><div><i style={{ width: `${(answered / quizQuestions.length) * 100}%` }} /></div></div>
            <ol className="question-list">
              {quizQuestions.map((question, index) => (
                <li key={question}>
                  <span className="question-number">{index + 1}</span>
                  <p>{question}</p>
                  <div className="choice-group" role="group" aria-label={`Response to statement ${index + 1}`}>
                    <button type="button" className={answers[index] === true ? 'selected' : ''} aria-pressed={answers[index] === true} onClick={() => updateAnswer(index, true)}>Yes</button>
                    <button type="button" className={answers[index] === false ? 'selected' : ''} aria-pressed={answers[index] === false} onClick={() => updateAnswer(index, false)}>Not yet</button>
                  </div>
                </li>
              ))}
            </ol>
            <div className={`check-result${complete ? ' complete' : ''}`} aria-live="polite">
              {!complete ? (
                <><CircleHelp aria-hidden="true" /><div><h3>{answered ? 'Keep reflecting' : 'Begin when you are ready'}</h3><p>Choose “yes” or “not yet” for each statement. There is no wrong result.</p></div></>
              ) : (
                <>
                  <Compass aria-hidden="true" />
                  <div>
                    <p className="result-label">Your reflection</p>
                    <h3>{result.title}</h3>
                    <p>{result.text}</p>
                    <div className="result-links">
                      {result.resources.map((resource) => <a key={resource.slug} href={`/resources/${resource.slug}`}>{resource.title} <ArrowRight aria-hidden="true" /></a>)}
                      <a href="#starter-guide">Get the Gentle Starter Guide <Download aria-hidden="true" /></a>
                    </div>
                    <details className="result-signup">
                      <summary>Send these next steps to my email</summary>
                      <EmailForm formName="locs-thrive-guide" buttonLabel="Get the Gentle Starter Guide" successTitle="You’re on the list." successMessage="Open the Gentle Starter Guide below and continue at your own pace." source={`self-check-${result.title.toLowerCase().replaceAll(' ', '-')}`} compact download />
                    </details>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section community-section" id="community">
        <div className="shell community-grid">
          <div className="community-copy">
            <p className="eyebrow"><span />Community, with care</p>
            <p className="coming-label">Coming Later</p>
            <h2>Live Learning Circles</h2>
            <p className="large-copy">Small, carefully facilitated sessions where women can ask honest questions, discuss real experiences and learn from appropriately qualified contributors.</p>
            <p>These sessions are a future programme and are not currently open. Join the notification list to hear when the format, contributors and dates are confirmed.</p>
          </div>
          <div className="community-card">
            <HeartHandshake aria-hidden="true" />
            <h3>Be first to know</h3>
            <p>No booking pressure. Just one clear email when sessions open.</p>
            <EmailForm formName="locs-thrive-circles" buttonLabel="Notify me when sessions open" successTitle="You’re on the notification list." successMessage="We’ll email you only when the Learning Circles are ready to open." source="homepage-learning-circles" compact />
          </div>
        </div>
      </section>

    </PageShell>
  )
}
