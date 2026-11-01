export const site = {
  name: 'ICON GRAPHICS – Creative, Media & Digital Solutions',
  description:
    'Founder-led creative, media and digital solutions for businesses, brands and individuals in Nigeria and around the world. Design. Create. Produce. Connect.',
}
export const catalogueUrl: string | null = null
export const whatsapp = (
  message = 'Hello ICON GRAPHICS, I would like to discuss a project.',
) => `https://wa.me/2348086714454?text=${encodeURIComponent(message)}`
export const socials = [
  ['Instagram', 'https://instagram.com/icongraphicshub'],
  ['TikTok', 'https://tiktok.com/@icongraphicshub'],
  ['X', 'https://x.com/icongraphicshub'],
  ['YouTube', 'https://youtube.com/@icongraphicshub'],
]
const titles = [
  'Branding & Graphic Design',
  'Photography & Photo Editing',
  'Video Production & Editing',
  'Website Design & Development',
  'Social Media Management & Content Creation',
  'Digital Marketing',
  'Writing & Copywriting',
  'Business Documentation',
  'Audio Production',
]
const descriptions = [
  'Logo design, brand identity systems, flyers, brochures, business cards, packaging and marketing designs.',
  'Portrait, product, event and commercial photography, plus professional retouching and photo enhancement.',
  'Promotional videos, business adverts, music videos, event videos, editing and post-production.',
  'Business websites, landing pages, responsive web design, updates and website maintenance.',
  'Social media graphics, captions, content calendars, short-form videos and account management.',
  'Digital campaign planning, online advertising, audience engagement and promotional strategies.',
  'Website copy, marketing copy, newsletters, proofreading, editing and professional business writing.',
  'Business proposals, company profiles, presentations, reports, CVs and LinkedIn profile content.',
  'Voiceovers, jingles, audio editing and creative audio production for brands and projects.',
]
export const services = titles.map((title, i) => ({
  title,
  description: descriptions[i],
  id: [
    'branding',
    'photography',
    'video',
    'web',
    'social',
    'marketing',
    'writing',
    'documentation',
    'audio',
  ][i],
  icon: ['◈', '◎', '▷', '⌘', '↗', '↗', '✎', '▤', '≋'][i],
}))
export type Project = {
  id: string
  title: string
  category: string
  description: string
  image?: string
  captions?: string
  video?: string
  audio?: string
  objectives?: string
  direction?: string
  execution?: string
  deliverables?: string[]
  label?: string
  concept: boolean
  art: string
}
// Add real work here; place media in public/portfolio and reference /portfolio/filename.
export const projects: Project[] = services.map((s, i) => ({
  id: s.id + '-concept',
  title: [
    'The shape of a brand',
    'Light, form & perspective',
    'A story in motion',
    'A considered digital presence',
    'Made for your feed',
    'Ideas that find their audience',
    'Words with purpose',
    'A clearer business story',
    'The sound of a brand',
  ][i],
  category: s.id,
  description: `A concept placeholder for ${s.title.toLowerCase()}. This demonstration illustrates the portfolio format and is not completed client work. Real project media and details will be added here.`,
  objectives: `Concept preview: explore how ${s.title.toLowerCase()} can communicate a clear idea. This is not a commissioned client brief.`,
  direction:
    'An illustrative exploration of composition, hierarchy and purposeful communication. The visual is a format demonstration, not a finished client solution.',
  execution:
    'Created as code-native concept artwork to demonstrate how future portfolio projects can be presented. Real production details and approved media are still to be supplied.',
  label: 'Concept Project / Portfolio Demonstration',
  concept: true,
  art: [
    'brand',
    'photo',
    'motion',
    'website',
    'social',
    'campaign',
    'writing',
    'document',
    'sound',
  ][i],
}))
export const testimonials: { name: string; quote: string; role?: string }[] = []
export const process = [
  'Initial enquiry',
  'Understanding project requirements',
  'Discussion and quotation',
  'Project confirmation and agreement',
  'Initial payment and project scheduling',
  'Creative development and execution',
  'Review and agreed revisions',
  'Final payment and delivery',
]
export const processDescriptions = [
  'Share your idea through the enquiry form, email or WhatsApp. Rapheal is your direct point of contact.',
  'Discuss the audience, objectives, references, required deliverables and preferred deadline. Clarify what success means for your project.',
  'Receive a quotation based on the agreed scope. Discuss costs, payment arrangements and practical requirements before committing.',
  'Confirm the scope, responsibilities, usage rights and approval process in a project agreement.',
  'Agree any initial payment and scheduling requirements before creative work starts. Amounts and dates are specific to the project.',
  'Rapheal oversees the creative direction, project coordination and development of the agreed deliverables.',
  'Review the work and provide consolidated feedback. Revision scope and any changes to requirements are agreed together.',
  'Complete any agreed final payment and receive the approved deliverables through the agreed delivery method. No standard payment percentage or turnaround is assumed.',
]
// Edit individual approved prices here; retain null until confirmed by the owner.
export const packagePrices: Record<string, string | null> = {
  branding: null,
  photography: null,
  video: null,
  web: null,
  social: null,
  marketing: null,
  writing: null,
  documentation: null,
  audio: null,
}
// Owner-editable quotation packages. A null price means no fixed price is published.
export const packages = services.map((service) => ({
  serviceId: service.id,
  title: service.title,
  description: service.description,
  price: packagePrices[service.id],
  note: 'A tailored scope, with deliverables, schedule and payment terms agreed before work begins.',
}))
export const faqs = [
  [
    'What services does ICON GRAPHICS offer?',
    'Our nine services cover branding, photography, video, websites, social media, digital marketing, writing, business documentation and audio production. Explore our Services page for the full scope.',
  ],
  [
    'How do I request a quotation?',
    'Use the Request a Quote form or message us on WhatsApp with the service you need and a description of your project. Pricing is discussed after we understand the requirements.',
  ],
  [
    'Do you work with international clients?',
    'Yes. Enquiries are welcome from Nigeria and international clients. We can discuss requirements remotely and agree on a practical way to work together.',
  ],
  [
    'How can I submit project requirements?',
    'Start with the enquiry form, email or WhatsApp. Include your goals, deliverables, existing materials and any preferred deadline. We can discuss how best to share additional files.',
  ],
  [
    'How do I discuss my project?',
    'Contact Rapheal directly through WhatsApp or email to clarify your needs and discuss next steps.',
  ],
  [
    'Are revisions available?',
    'Review and agreed revisions are part of the project journey. Scope and revision arrangements are discussed and agreed for your specific project.',
  ],
  [
    'How do I receive completed work?',
    'Delivery formats and methods are agreed according to your project. Tell us about any file or platform requirements during the initial discussion.',
  ],
  [
    'Can I request more than one service?',
    'Yes. Choose a primary service and select any additional services in the enquiry form. Describe what you need so the scope can be discussed together.',
  ],
  [
    'How do I contact ICON GRAPHICS?',
    'Email hello@icongraphics.com.ng or WhatsApp +2348086714454. You can also use the Contact page enquiry form.',
  ],
]

faqs.push(
  [
    'Who can request services?',
    'Businesses, brands, individuals and organisations are welcome to enquire, in Nigeria and internationally.',
  ],
  [
    'How does the project process work?',
    'We discuss your requirements, agree a quotation and scope, confirm payment and scheduling arrangements, develop the work, review it together and arrange final delivery. See How We Work for the full journey.',
  ],
  [
    'What payment arrangements are available?',
    'Currency, payment method, any initial payment and final payment requirements are discussed and agreed for your project. Contact Rapheal before making any payment.',
  ],
  [
    'What happens if project requirements change?',
    'Discuss changes with Rapheal before additional work begins. Any effect on the scope, quotation or schedule needs to be agreed together.',
  ],
  [
    'How do I provide references?',
    'Include public reference links in your enquiry or attach one PDF or image up to 5 MB. For larger files, discuss a suitable sharing method through email or WhatsApp. Only share materials you have permission to use.',
  ],
)
