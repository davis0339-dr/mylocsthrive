export const siteUrl = 'https://lisamylocsthrive.netlify.app'

export const resourceCategories = [
  'Starting locs',
  'Starter-loc care',
  'Cleansing and scalp care',
  'Maintenance and retwisting',
  'Confidence and lifestyle',
  'Professional support',
]

export const articles = [
  {
    slug: 'should-i-start-locs',
    title: 'Should I Start Locs?',
    description: 'The practical, emotional and lifestyle questions to consider before deciding.',
    category: 'Starting locs',
    published: 'August 4, 2026',
    publishedIso: '2026-08-04',
    reviewed: 'August 4, 2026',
    reviewedIso: '2026-08-04',
    readingTime: '6 min read',
  },
  {
    slug: 'your-first-30-days',
    title: 'Your First 30 Days',
    description: 'What may change, what to expect and how to avoid unnecessary panic.',
    category: 'Starter-loc care',
    published: 'August 4, 2026',
    publishedIso: '2026-08-04',
    reviewed: 'August 4, 2026',
    reviewedIso: '2026-08-04',
    readingTime: '7 min read',
  },
  {
    slug: 'is-this-normal',
    title: 'Is This Normal?',
    description: 'A plain-language guide to common changes and situations that require professional attention.',
    category: 'Professional support',
    published: 'August 4, 2026',
    publishedIso: '2026-08-04',
    reviewed: 'August 4, 2026',
    reviewedIso: '2026-08-04',
    readingTime: '8 min read',
  },
] as const

export const articleBodies: Record<string, { intro: string; sections: Array<{ heading: string; paragraphs?: string[]; points?: string[] }>; furtherReading?: Array<{ label: string; href: string }> }> = {
  'should-i-start-locs': {
    intro: 'Locs can be beautiful, practical and deeply personal. They are also a long-term hair-care choice. A grounded decision begins with your real life, not an idealised after-picture.',
    sections: [
      { heading: 'Begin with your reason', paragraphs: ['Ask what you hope locs will change. Less daily manipulation, a stronger connection to your natural hair, creative expression and a simpler routine are all understandable reasons. Locs may reduce some forms of styling, but they do not remove the need for cleansing, observation, maintenance or patience.'] },
      { heading: 'Consider your relationship with change', paragraphs: ['Starter locs evolve. Parting may become less visible, texture may look less uniform and length may appear to change as hair contracts and begins to lock. If you need your hair to look exactly the same each week, the early stages may feel challenging.'] },
      { heading: 'Plan for practical care', points: ['Learn the likely cost and frequency of professional maintenance before starting.', 'Ask how your preferred method fits your hair, activity level and styling preferences.', 'Consider how often you exercise, swim or wear protective work equipment.', 'Decide whether you want to self-maintain, work with a loctician or use a combination.', 'Make space in your budget for routine care and occasional professional support.'] },
      { heading: 'Choose a consultation, not a sales pitch', paragraphs: ['A useful consultation should make room for questions. Ask what method is being recommended, why it may suit your goals, how the sections will be sized, what maintenance involves and what happens if you change your mind. A qualified loctician can advise on installation and maintenance. A clinician is the appropriate person for persistent scalp symptoms, sudden hair loss or concerns about disease.'] },
      { heading: 'There is no perfect readiness', paragraphs: ['You do not need to know everything before you begin. You do need enough information to give meaningful consent to the process, realistic expectations and a plan for where to seek help.'] },
    ],
  },
  'your-first-30-days': {
    intro: 'The first month is usually less about making starter locs look finished and more about allowing a new structure and routine to settle. Your loctician’s instructions should take priority because methods differ.',
    sections: [
      { heading: 'Expect movement, softness and change', paragraphs: ['Starter locs are not mature locs. Depending on the method and your hair, they may soften, swell, contract, frizz or become less visually uniform. Some change is part of the process; not every loose hair means the installation has failed.'] },
      { heading: 'Keep the routine simple', points: ['Follow method-specific cleansing guidance from the professional who started your locs.', 'Avoid repeatedly twisting or handling the roots to make them look newly maintained.', 'Use products sparingly and ask why a product is needed before adding it.', 'Protect your locs from avoidable lint and friction while sleeping.', 'Take a few dated photographs so you can observe change without checking constantly.'] },
      { heading: 'Cleansing is not one-size-fits-all', paragraphs: ['Sweat, scalp comfort, product use, activity level and the establishment method all matter. Avoid universal rules that tell every person to wait the same number of weeks. Ask your loctician for a clear plan and seek clinical advice when scalp symptoms are persistent, painful or worsening.'] },
      { heading: 'Resist emergency maintenance', paragraphs: ['Frequent tightening can create unnecessary tension. If something looks different, pause before trying to repair it. Photograph the area, note any discomfort and ask the professional who installed your locs what is expected for that method.'] },
      { heading: 'Call the right person', points: ['Contact your loctician for questions about unraveling, parting, maintenance timing or method-specific styling.', 'Contact an appropriate clinician for pain, sores, pus, marked swelling, a rapidly spreading rash, sudden or patchy hair loss, or symptoms that persist despite routine care.'] },
    ],
  },
  'is-this-normal': {
    intro: 'Online reassurance has limits. This guide helps separate common journey questions from signs that deserve individual attention. It cannot diagnose a scalp or hair condition.',
    sections: [
      { heading: 'Changes that can be part of the journey', points: ['Frizz and loose hairs as starter locs settle.', 'Temporary changes in apparent length as hair contracts.', 'Locs developing at different rates across the head.', 'A less polished appearance between maintenance appointments.', 'Questions about whether a starter loc has loosened or needs method-specific repair.'] },
      { heading: 'Questions for a loctician', paragraphs: ['A loctician is best placed to assess installation, parting, unraveling, retwisting or interlocking schedules, product build-up and maintenance technique. Ask what they observe, what they recommend and what would make them refer you to a clinician.'] },
      { heading: 'Signs to discuss with a clinician', points: ['Sudden, unexplained or patchy hair loss.', 'Persistent itching, scaling or inflammation that is worsening or affecting daily life.', 'Pain, open sores, pus, marked swelling or signs of infection.', 'A scalp rash that is spreading or not improving.', 'Concern that a medication, health condition or nutritional problem may be affecting your hair.'] },
      { heading: 'Tension deserves attention', paragraphs: ['A style should not require you to tolerate significant pain. Ongoing pulling and repeated tension can be harmful to hair. If a style feels excessively tight, ask for it to be adjusted. Seek clinical advice for persistent tenderness, bumps, thinning or hair loss.'] },
      { heading: 'Document, do not diagnose', paragraphs: ['Take clear photographs, note when symptoms began and list recent products or styling changes. This information can make a professional conversation more useful without encouraging self-diagnosis.'] },
    ],
    furtherReading: [
      { label: 'American Academy of Dermatology: Hair loss resource centre', href: 'https://www.aad.org/public/diseases/hair-loss' },
      { label: 'American Academy of Dermatology: Seborrheic dermatitis overview', href: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview' },
      { label: 'NHS: Hair loss', href: 'https://www.nhs.uk/conditions/hair-loss/' },
    ],
  },
}
