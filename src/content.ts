export const siteUrl = 'https://mylocsthrive.netlify.app'

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
  {
    slug: 'questions-for-your-first-loc-consultation',
    title: 'Questions for Your First Loc Consultation',
    description: 'A practical list to help you understand the method, maintenance, cost and support before you begin.',
    category: 'Starting locs',
    published: 'August 16, 2026',
    publishedIso: '2026-08-16',
    reviewed: 'August 16, 2026',
    reviewedIso: '2026-08-16',
    readingTime: '5 min read',
  },
  {
    slug: 'starter-loc-glossary',
    title: 'A Gentle Starter Loc Glossary',
    description: 'Plain-language explanations of common terms you may hear when researching or beginning locs.',
    category: 'Starter-loc care',
    published: 'August 16, 2026',
    publishedIso: '2026-08-16',
    reviewed: 'August 16, 2026',
    reviewedIso: '2026-08-16',
    readingTime: '6 min read',
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
  'questions-for-your-first-loc-consultation': {
    intro: 'A consultation should help you understand the decision in front of you. It is an opportunity to ask how a proposed method fits your goals, routine and expectations before any installation begins.',
    sections: [
      { heading: 'Begin with your goals', paragraphs: ['Explain what you hope locs will make simpler and what you want to preserve about the way you express yourself. Share whether you prefer a neat parting pattern, more flexibility, lower manipulation or the possibility of self-maintenance later. Clear goals help make the conversation specific to you.'] },
      { heading: 'Ask about the recommended method', points: ['Which establishment method are you recommending?', 'Why may this method suit my goals and hair?', 'How could the parting pattern and section size affect the future appearance of my locs?', 'What early changes should I expect?', 'What should I do if a starter loc loosens?'] },
      { heading: 'Understand maintenance and cost', points: ['How is this method maintained?', 'How often do you usually reassess or maintain starter locs?', 'What will each appointment cost?', 'Which products, tools or home-care steps are genuinely necessary?', 'Could I learn to maintain some or all of my locs myself later?'] },
      { heading: 'Discuss your real routine', paragraphs: ['Mention exercise, swimming, headwear, travel, work requirements and any styling preferences that may affect your routine. Ask for instructions you can realistically follow rather than a plan built around an ideal week.'] },
      { heading: 'Know the professional boundaries', paragraphs: ['A loctician can guide installation, maintenance and styling. Persistent scalp symptoms, sudden or patchy hair loss, sores, significant pain or other health concerns need an appropriate clinician. A responsible consultation should make that distinction clear.'] },
      { heading: 'Take your time before deciding', paragraphs: ['You do not have to begin during the consultation. Write down the recommendation, cost and maintenance plan. Give yourself space to compare what you heard with your goals and ask follow-up questions before committing.'] },
    ],
  },
  'starter-loc-glossary': {
    intro: 'Loc conversations can feel confusing when several terms appear at once. This glossary offers simple starting definitions. Techniques and terminology can vary between professionals, so ask your loctician what a term means in the context of your own plan.',
    sections: [
      { heading: 'Starter locs', paragraphs: ['Starter locs are locs in their early establishment stage. They are still changing and may look softer, frizzier or less uniform than mature locs. Their appearance depends on the starting method, texture, routine and time.'] },
      { heading: 'Common establishment methods', points: ['Comb coils use a comb or fingers to form small coils from sections of hair.', 'Two-strand twists begin with two portions of hair twisted around each other.', 'Braids or plaits use a braided structure as the starting foundation.', 'Interlocking draws the end of a loc through the root in a repeated pattern.', 'Instant loc techniques use tools and manipulation to create a more immediately formed structure.', 'Freeform and semi-freeform approaches allow more natural matting with different levels of sectioning or separation.'] },
      { heading: 'Parting and section size', paragraphs: ['Parting describes how the scalp is divided into sections before installation. Section size can influence the approximate size and number of future locs, although hair density, texture and development also matter. Ask to see and approve the plan before installation.'] },
      { heading: 'Retwisting and interlocking', paragraphs: ['Retwisting and interlocking are different maintenance approaches. Retwisting reorganises new growth through twisting and setting. Interlocking maintains the root by passing the loc through the base in a pattern. The appropriate schedule and technique depend on the method and individual needs.'] },
      { heading: 'Budding and maturation', paragraphs: ['Budding is a term often used for swelling or firmer areas that develop as hair begins to bind. Maturation describes the longer process through which locs become more established. Locs across one head may not develop at exactly the same pace.'] },
      { heading: 'Build-up and lint', paragraphs: ['Build-up refers to residue that remains within or on the hair. Lint refers to small fibres that can become caught in locs. Product choice, cleansing, rinsing, drying and protection from avoidable fibres all deserve practical discussion with a qualified loctician.'] },
      { heading: 'Use the glossary as a starting point', paragraphs: ['A familiar word is not the same as an individual recommendation. Use these definitions to ask clearer questions, then request method-specific guidance from the professional supporting your journey.'] },
    ],
  },
}
