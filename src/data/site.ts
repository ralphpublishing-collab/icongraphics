// Central business content. Keep every detail factual and owner-approved.
export const SITE_URL = 'https://icongraphics.com.ng'

export const brand = {
  name: 'ICON GRAPHICS',
  descriptor: 'Creative, Media & Digital Solutions',
  tagline: 'Design. Create. Produce. Connect.',
  email: 'hello@icongraphics.com.ng',
  phone: '+2348086714454',
  phoneDisplay: '+234 808 671 4454',
  founder: 'Rapheal Adebayo',
  founderRole: 'Founder & Creative Director',
}

export const site = {
  name: `${brand.name} | ${brand.descriptor}`,
  description:
    'Founder-led creative, media and digital solutions for businesses, brands and individuals in Nigeria and around the world. Design. Create. Produce. Connect.',
}

export const whatsapp = (
  message = 'Hello ICON GRAPHICS, I would like to discuss a project.',
) => `https://wa.me/2348086714454?text=${encodeURIComponent(message)}`

export const socialProfiles = [
  {
    name: 'Instagram',
    handle: '@icongraphicshub',
    url: 'https://instagram.com/icongraphicshub',
  },
  {
    name: 'TikTok',
    handle: '@icongraphicshub',
    url: 'https://tiktok.com/@icongraphicshub',
  },
  { name: 'X', handle: '@icongraphicshub', url: 'https://x.com/icongraphicshub' },
  {
    name: 'YouTube',
    handle: '@icongraphicshub',
    url: 'https://youtube.com/@icongraphicshub',
  },
]

// Tuple form used by layout components.
export const socials = socialProfiles.map((s) => [s.name, s.url])
export const catalogueUrl: string | null = null

export type Service = {
  id: string
  slug: string
  title: string
  short: string
  intro: string
  offerings: string[]
  useful: string[]
  prepare: string[]
  accent: string
  art: string
  description?: string
  icon?: string
}

// The nine official services. Titles and short descriptions are the approved wording.
export const services: Service[] = [
  {
    id: 'branding',
    slug: 'branding-graphic-design',
    title: 'Branding & Graphic Design',
    short:
      'Logo design, brand identity systems, flyers, brochures, business cards, packaging and marketing designs.',
    intro:
      'A recognisable brand helps people remember who you are and what you stand for. We develop identities and design materials that present your business consistently, from the first logo sketch to the printed brochure.',
    offerings: [
      'Logo design',
      'Brand identity systems',
      'Flyers',
      'Brochures',
      'Business cards',
      'Packaging',
      'Marketing designs',
    ],
    useful: [
      'Launching a new business or product',
      'Refreshing an identity that no longer fits',
      'Creating consistent print and digital materials',
    ],
    prepare: [
      'Your business name and what you offer',
      'Who your audience is and where they will see the design',
      'Any existing logo, colours or brand materials',
      'Examples of design styles you like, and why',
    ],
    accent: '#ff8a2a',
    art: 'brand',
  },
  {
    id: 'photography',
    slug: 'photography-photo-editing',
    title: 'Photography & Photo Editing',
    short:
      'Portrait, product, event and commercial photography, plus professional retouching and photo enhancement.',
    intro:
      'Strong photographs give people a clear, honest view of your people, products and moments. We plan and capture images for practical use, then refine them through careful retouching and enhancement.',
    offerings: [
      'Portrait photography',
      'Product photography',
      'Event photography',
      'Commercial photography',
      'Professional retouching',
      'Photo enhancement',
    ],
    useful: [
      'Professional portraits for profiles and press',
      'Product images for online stores and catalogues',
      'Covering events and business occasions',
    ],
    prepare: [
      'What or who will be photographed',
      'Where the images will be used',
      'Preferred location, date and any access requirements',
      'Reference images showing the mood you want',
    ],
    accent: '#ffd23f',
    art: 'photo',
  },
  {
    id: 'video',
    slug: 'video-production-editing',
    title: 'Video Production & Editing',
    short:
      'Promotional videos, business adverts, music videos, event videos, editing and post-production.',
    intro:
      'Video brings movement, voice and emotion to your message. We help shape the story, capture or assemble the footage, and finish it through editing and post-production suited to where it will be watched.',
    offerings: [
      'Promotional videos',
      'Business adverts',
      'Music videos',
      'Event videos',
      'Video editing',
      'Post-production',
    ],
    useful: [
      'Introducing a product, service or launch',
      'Advertising across social and digital channels',
      'Editing footage you have already recorded',
    ],
    prepare: [
      'The message and the action you want viewers to take',
      'Where the video will be published and its preferred length',
      'Footage, music or scripts you already have',
      'Reference videos and what you like about them',
    ],
    accent: '#ff3d8b',
    art: 'motion',
  },
  {
    id: 'web',
    slug: 'website-design-development',
    title: 'Website Design & Development',
    short:
      'Business websites, landing pages, responsive web design, updates and website maintenance.',
    intro:
      'Your website is often the first place people check before they get in touch. We design and build responsive websites and landing pages that explain your offer clearly and make the next step easy.',
    offerings: [
      'Business websites',
      'Landing pages',
      'Responsive web design',
      'Website updates',
      'Website maintenance',
    ],
    useful: [
      'Creating a first website for your business',
      'Launching a focused page for a campaign or product',
      'Updating or maintaining an existing site',
    ],
    prepare: [
      'What visitors should be able to do on the site',
      'Your pages, services and contact details',
      'Brand assets, photographs and written content',
      'Domain and hosting details, without sharing passwords',
    ],
    accent: '#8b5cf6',
    art: 'website',
  },
  {
    id: 'social',
    slug: 'social-media-management',
    title: 'Social Media Management & Content Creation',
    short:
      'Social media graphics, captions, content calendars, short-form videos and account management.',
    intro:
      'Consistent, considered content helps your audience recognise and trust you over time. We create graphics, captions and short-form videos, plan content calendars and can help manage your accounts.',
    offerings: [
      'Social media graphics',
      'Captions',
      'Content calendars',
      'Short-form videos',
      'Account management',
    ],
    useful: [
      'Keeping a regular, recognisable presence',
      'Planning content around launches or seasons',
      'Producing posts and short videos to a consistent style',
    ],
    prepare: [
      'The platforms you use and your account handles',
      'Your audience and the tone you want to use',
      'Upcoming dates, products or announcements',
      'Brand assets and any existing content guidelines',
    ],
    accent: '#3b82f6',
    art: 'social',
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short:
      'Digital campaign planning, online advertising, audience engagement and promotional strategies.',
    intro:
      'Good marketing starts with a clear goal and a realistic plan. We help you plan campaigns, approach online advertising and shape promotional strategies that suit your audience and resources.',
    offerings: [
      'Digital campaign planning',
      'Online advertising',
      'Audience engagement',
      'Promotional strategies',
    ],
    useful: [
      'Promoting a launch, event or offer',
      'Reaching a defined audience online',
      'Turning scattered activity into a structured plan',
    ],
    prepare: [
      'The goal of the campaign and how you will measure it',
      'Your audience and where they spend time online',
      'Your intended budget range and timing',
      'Previous campaigns and what you learned from them',
    ],
    accent: '#22c3ee',
    art: 'campaign',
  },
  {
    id: 'writing',
    slug: 'writing-copywriting',
    title: 'Writing & Copywriting',
    short:
      'Website copy, marketing copy, newsletters, proofreading, editing and professional business writing.',
    intro:
      'Clear words help people understand what you offer and why it matters. We write, edit and proofread copy for websites, marketing and business communication in a voice that suits your brand.',
    offerings: [
      'Website copy',
      'Marketing copy',
      'Newsletters',
      'Proofreading',
      'Editing',
      'Professional business writing',
    ],
    useful: [
      'Writing or rewriting website pages',
      'Preparing marketing messages and newsletters',
      'Polishing documents before they are shared',
    ],
    prepare: [
      'What the writing is for and who will read it',
      'Key facts, services and messages to include',
      'Existing drafts or materials to work from',
      'Examples of a tone of voice you like',
    ],
    accent: '#34d399',
    art: 'writing',
  },
  {
    id: 'documentation',
    slug: 'business-documentation',
    title: 'Business Documentation',
    short:
      'Business proposals, company profiles, presentations, reports, CVs and LinkedIn profile content.',
    intro:
      'Well-structured documents help you present your business and experience with confidence. We prepare proposals, profiles, presentations, reports, CVs and LinkedIn content that are clear and professionally presented.',
    offerings: [
      'Business proposals',
      'Company profiles',
      'Presentations',
      'Reports',
      'CVs',
      'LinkedIn profile content',
    ],
    useful: [
      'Presenting your business to partners or clients',
      'Preparing a pitch, proposal or report',
      'Updating a CV or professional profile',
    ],
    prepare: [
      'The purpose of the document and who will receive it',
      'Accurate information, figures and achievements to include',
      'Your logo and brand materials, if applicable',
      'Any required format, template or submission deadline',
    ],
    accent: '#a3e635',
    art: 'document',
  },
  {
    id: 'audio',
    slug: 'audio-production',
    title: 'Audio Production',
    short:
      'Voiceovers, jingles, audio editing and creative audio production for brands and projects.',
    intro:
      'Sound shapes how people feel about a brand, often before they see anything. We produce voiceovers, jingles and edited audio that give your projects a clear and memorable voice.',
    offerings: [
      'Voiceovers',
      'Jingles',
      'Audio editing',
      'Creative audio production',
    ],
    useful: [
      'Adding a voice to adverts, videos or presentations',
      'Creating a memorable jingle or sound for a brand',
      'Cleaning up and editing recorded audio',
    ],
    prepare: [
      'Where the audio will be used and its intended length',
      'Scripts, lyrics or key messages',
      'The mood, pace and voice style you want',
      'Existing recordings or reference tracks',
    ],
    accent: '#f472b6',
    art: 'sound',
  },
]

const icons = ['◈', '◎', '▷', '⌘', '↗', '↗', '✎', '▤', '≋']
services.forEach((s, i) => {
  s.description = s.short
  s.icon = icons[i]
})

export const serviceById = (id: string) => services.find((s) => s.id === id)
export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug)

export type Project = {
  id: string
  title: string
  // Fictional brand name for concept work; client name only with permission.
  brand: string
  category: string
  summary: string
  brief: string
  direction: string
  execution: string
  presentation: string
  deliverables: string[]
  palette: string[]
  typeface: string
  // Optional real media, placed in public/portfolio/ and referenced as /portfolio/file.
  image?: string
  gallery?: { src: string; alt: string }[]
  video?: string
  captions?: string
  audio?: string
  concept: boolean
  art: string
  description?: string
  objectives?: string
  label?: string
}

// The nine current entries are self-initiated concept projects for fictional brands.
// None is client work. Add genuine projects with concept: false and real media.
export const projects: Project[] = [
  {
    id: 'branding-concept',
    title: 'Form & Feel identity',
    brand: 'Form & Feel, a fictional lifestyle studio',
    category: 'branding',
    summary:
      'A concept identity exploring how a calm, confident wordmark and restrained colour can carry a lifestyle brand across print.',
    brief:
      'Imagine a small lifestyle studio that sells considered homeware. It needs an identity that feels warm and modern, works at business-card size and stays recognisable on packaging.',
    direction:
      'A compact lowercase monogram paired with a bold uppercase statement. Generous margins and a single warm accent let the materials feel premium without decoration.',
    execution:
      'The concept explores a primary wordmark, a monogram for small spaces, and two business card layouts that test hierarchy between the statement and the mark.',
    presentation:
      'Shown as layered stationery on a dark surface, with the palette and type specimen presented alongside to show how the system would extend.',
    deliverables: [
      'Wordmark and monogram concept',
      'Business card layouts',
      'Colour palette',
      'Typography pairing',
    ],
    palette: ['#f4efe6', '#1b1b1f', '#ff8a2a', '#c9b8a3'],
    typeface: 'Manrope',
    concept: true,
    art: 'brand',
  },
  {
    id: 'photography-concept',
    title: 'Still Life light study',
    brand: 'Terra Hour, a fictional ceramics label',
    category: 'photography',
    summary:
      'A concept art direction for product photography, using a single warm light source to give simple ceramics a sculptural presence.',
    brief:
      'Picture a ceramics label preparing images for an online shop. The photographs need to show form and texture honestly while feeling distinctive enough for a launch.',
    direction:
      'Low, directional light, a solid backdrop and one strong circular shape behind the product. Composition is kept minimal so the object is always the subject.',
    execution:
      'Developed as a styled composition study that tests framing, light direction and background colour before any photography takes place.',
    presentation:
      'Presented as a hero frame with the lighting palette and caption typography, showing how the series would sit together on a product page.',
    deliverables: [
      'Lighting and composition study',
      'Background colour direction',
      'Caption and label styling',
    ],
    palette: ['#2a1f17', '#ffd23f', '#d98b4a', '#f2e6d8'],
    typeface: 'DM Sans',
    concept: true,
    art: 'photo',
  },
  {
    id: 'video-concept',
    title: 'Make Moves launch film',
    brand: 'Make Moves, a fictional sportswear label',
    category: 'video',
    summary:
      'A concept for a short launch film built around rhythm, bold type and quick, purposeful cuts for social platforms.',
    brief:
      'Consider a new sportswear label announcing its first collection. It needs a short promotional video that feels energetic and works in vertical and horizontal formats.',
    direction:
      'Kinetic typography interrupts the footage on the beat. A high-contrast grade with magenta highlights connects the film to the label’s identity.',
    execution:
      'Explored as a title-card system and storyboard frames showing how type, pacing and the play cue would work across a 30-second edit.',
    presentation:
      'Shown as a key frame from the opening sequence, with the grade palette and title typography as supporting boards.',
    deliverables: [
      'Title card system',
      'Opening key frame',
      'Colour grade direction',
    ],
    palette: ['#0d0d12', '#ff3d8b', '#ffffff', '#6d28d9'],
    typeface: 'Manrope',
    concept: true,
    art: 'motion',
  },
  {
    id: 'web-concept',
    title: 'Good Spaces website',
    brand: 'Good Spaces, a fictional interior design studio',
    category: 'web',
    summary:
      'A concept website direction for an interior studio, prioritising calm layouts, clear navigation and a simple route to enquiries.',
    brief:
      'Imagine an interior studio that wins work through recommendations. Its website should show its approach quickly and help visitors book a consultation from any device.',
    direction:
      'An editorial homepage with a single strong headline, an arch motif drawn from architecture and one clear call to action above the fold.',
    execution:
      'The concept tests a homepage hero, navigation and call-to-action hierarchy in a responsive browser frame.',
    presentation:
      'Presented in a browser window with the interface palette and heading typography shown separately for reference.',
    deliverables: [
      'Homepage hero concept',
      'Navigation and call-to-action hierarchy',
      'Interface palette',
    ],
    palette: ['#f3ece2', '#2b2a33', '#8b5cf6', '#c4a484'],
    typeface: 'Manrope',
    concept: true,
    art: 'website',
  },
  {
    id: 'social-concept',
    title: 'Brightside Café launch content',
    brand: 'Brightside Café, a fictional neighbourhood café',
    category: 'social',
    summary:
      'A concept content system for a café opening, built from friendly typography and a repeatable post template.',
    brief:
      'Picture a café opening in a busy neighbourhood. It needs launch posts that feel welcoming and can be produced consistently in the weeks after opening.',
    direction:
      'Short, conversational headlines on a confident blue field. A fixed grid keeps every post recognisable while the message changes.',
    execution:
      'Explored as a launch announcement post and template rules for headline length, colour and logo placement.',
    presentation:
      'Shown as a single feed post with the palette and type specimen illustrating how the template would be reused.',
    deliverables: [
      'Launch post concept',
      'Reusable post template',
      'Caption tone examples',
    ],
    palette: ['#0f1b3d', '#3b82f6', '#fff7e8', '#ffd23f'],
    typeface: 'Manrope',
    concept: true,
    art: 'social',
  },
  {
    id: 'marketing-concept',
    title: 'Think Bigger campaign',
    brand: 'Ascend Academy, a fictional online learning platform',
    category: 'marketing',
    summary:
      'A concept campaign idea for an enrolment drive, organised around a single memorable line and a consistent visual signal.',
    brief:
      'Imagine an online academy promoting a new enrolment period. The campaign needs one idea strong enough to work across adverts, email and social posts.',
    direction:
      'A short imperative line, set large, with a cyan signal colour that marks every campaign touchpoint.',
    execution:
      'The concept develops the campaign line, a key visual and a simple plan for how the message would adapt to each channel.',
    presentation:
      'Presented as the campaign key visual alongside its palette and headline typography.',
    deliverables: [
      'Campaign line and key visual',
      'Channel adaptation outline',
      'Campaign palette',
    ],
    palette: ['#06141c', '#22c3ee', '#ffffff', '#1e3a8a'],
    typeface: 'Manrope',
    concept: true,
    art: 'campaign',
  },
  {
    id: 'writing-concept',
    title: 'Words That Work copy direction',
    brand: 'Northline Advisory, a fictional consultancy',
    category: 'writing',
    summary:
      'A concept tone of voice for a consultancy website, replacing jargon with plain, confident sentences.',
    brief:
      'Consider a consultancy whose website explains its services in technical language. It needs copy that sounds expert but is easy for any visitor to understand.',
    direction:
      'Plain English, short paragraphs and headlines that state a benefit. Every page answers what is offered, who it is for and what to do next.',
    execution:
      'Explored as a homepage headline, supporting statement and a short set of voice principles with before and after examples.',
    presentation:
      'Shown as an editorial layout of the headline, with the palette and type specimen setting the reading experience.',
    deliverables: [
      'Homepage headline and introduction',
      'Tone of voice principles',
      'Before and after examples',
    ],
    palette: ['#08140f', '#34d399', '#f5f5f0', '#14532d'],
    typeface: 'DM Sans',
    concept: true,
    art: 'writing',
  },
  {
    id: 'documentation-concept',
    title: 'Meridian company profile',
    brand: 'Meridian Freight, a fictional logistics company',
    category: 'documentation',
    summary:
      'A concept structure and cover design for a company profile that presents services and credentials in a clear order.',
    brief:
      'Imagine a logistics company preparing to approach larger partners. It needs a company profile that is easy to scan and looks credible in print and PDF.',
    direction:
      'A confident cover statement, a strict grid and a clear sequence: who we are, what we do, how we work and how to get in touch.',
    execution:
      'The concept develops a cover, a page structure and typographic styles for headings, body text and key facts.',
    presentation:
      'Presented as the profile cover with the document palette and type specimen.',
    deliverables: [
      'Profile cover concept',
      'Page structure outline',
      'Document typography styles',
    ],
    palette: ['#0f1406', '#a3e635', '#f4f4f0', '#3f3f46'],
    typeface: 'DM Sans',
    concept: true,
    art: 'document',
  },
  {
    id: 'audio-concept',
    title: 'Sound On sonic identity',
    brand: 'Sound On, a fictional podcast',
    category: 'audio',
    summary:
      'A concept for a short sonic identity and voiceover style, giving a podcast an introduction listeners recognise.',
    brief:
      'Picture a new interview podcast. It needs a short intro sound and voiceover style that work at the start of every episode and in promotional clips.',
    direction:
      'A warm, rising motif of a few notes, followed by a calm, conversational voiceover. Visual waveforms carry the identity into social media.',
    execution:
      'Explored as a waveform visual and an outline for the sonic motif, voice direction and episode intro structure.',
    presentation:
      'Shown as a waveform key visual with the palette and type used for episode artwork.',
    deliverables: [
      'Sonic motif outline',
      'Voiceover direction',
      'Waveform visual',
    ],
    palette: ['#14060f', '#f472b6', '#fde68a', '#7c3aed'],
    typeface: 'Manrope',
    concept: true,
    art: 'sound',
  },
]

projects.forEach((p) => {
  p.description = p.summary
  p.objectives = p.brief
  if (p.concept) p.label = 'CONCEPT PROJECT'
})

export const projectById = (id: string) => projects.find((p) => p.id === id)

// Add only genuine, authorised feedback. Nothing renders as a review until this has entries.
export type Testimonial = {
  name: string
  quote: string
  role?: string
  service?: string
}
export const testimonials: Testimonial[] = []

export const processStages = [
  {
    title: 'Initial enquiry',
    text: 'Send an enquiry through the website form, email or WhatsApp. Tell us what you need, who it is for and any preferred timing.',
  },
  {
    title: 'Understanding your requirements',
    text: 'Rapheal reviews your enquiry and may ask questions about your audience, objectives, references and deliverables so the scope is clear.',
  },
  {
    title: 'Project discussion and quotation',
    text: 'We discuss the details with you and prepare a quotation based on the agreed scope. Ask questions before you commit; nothing starts automatically.',
  },
  {
    title: 'Approval and commencement',
    text: 'Once you accept the quotation and the agreed project terms, including any payment arrangement, the project is scheduled and work begins.',
  },
  {
    title: 'Creative development',
    text: 'Rapheal leads the creative direction and develops the agreed deliverables, keeping you informed through your preferred contact channel.',
  },
  {
    title: 'Review and revisions',
    text: 'You review the work and share consolidated feedback. Revisions follow the arrangement agreed for your project.',
  },
  {
    title: 'Final delivery',
    text: 'Approved work is prepared in the agreed formats and delivered through the agreed method.',
  },
  {
    title: 'Handover',
    text: 'We confirm you have everything that was agreed and answer any questions about using your files. Further support can be discussed separately.',
  },
]

export const process = processStages.map((s) => s.title)
export const processDescriptions = processStages.map((s) => s.text)

// Edit individual approved prices here; keep null until the owner confirms a price.
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

export const packages = services.map((service) => ({
  serviceId: service.id,
  slug: service.slug,
  title: service.title,
  description: service.short,
  offerings: service.offerings,
  price: packagePrices[service.id],
  note: 'A tailored scope, with deliverables, schedule and payment terms agreed before work begins.',
}))

export type FaqGroup = { topic: string; items: [string, string][] }

// Answers describe confirmed practice only. Specific terms are agreed per project.
export const faqGroups: FaqGroup[] = [
  {
    topic: 'Services',
    items: [
      [
        'What services does ICON GRAPHICS offer?',
        'Nine services: Branding & Graphic Design, Photography & Photo Editing, Video Production & Editing, Website Design & Development, Social Media Management & Content Creation, Digital Marketing, Writing & Copywriting, Business Documentation, and Audio Production. Each has its own page under Services.',
      ],
      [
        'Can I request more than one service?',
        'Yes. Choose a main service in the enquiry form and tick any additional services. Describe what you need so the full scope can be discussed together.',
      ],
      [
        'Who can request services?',
        'Businesses, brands, organisations and individuals, in Nigeria and internationally.',
      ],
    ],
  },
  {
    topic: 'Enquiries & communication',
    items: [
      [
        'How do I start an enquiry?',
        'Use the Request a Quote form, email hello@icongraphics.com.ng or send a WhatsApp message to +2348086714454. Include the service you need and a short description of your project.',
      ],
      [
        'Who will I be speaking with?',
        'ICON GRAPHICS is founder-led. Rapheal Adebayo, Founder & Creative Director, is your direct point of contact.',
      ],
      [
        'How will you contact me?',
        'We reply using the contact method you choose in the enquiry form, either WhatsApp or email. Project communication continues through the channel agreed with you.',
      ],
      [
        'Do you work with international clients?',
        'Yes. Requirements can be discussed remotely, and we agree a practical way to communicate and share files.',
      ],
    ],
  },
  {
    topic: 'Pricing & payments',
    items: [
      [
        'How much does a project cost?',
        'Every project is quoted individually. The quotation depends on the scope, deliverables, complexity and timing. There are no fixed public prices at the moment.',
      ],
      [
        'Can I receive a quotation in NGN or USD?',
        'Yes. Quotations can be discussed in Nigerian Naira (NGN) or US Dollars (USD). Choose your preferred currency in the enquiry form.',
      ],
      [
        'What payment arrangements are available?',
        'Payment method, timing and any initial payment are discussed and agreed with your quotation. Please do not make any payment until the scope and terms have been confirmed with Rapheal.',
      ],
    ],
  },
  {
    topic: 'Starting a project',
    items: [
      [
        'When does a project begin?',
        'A project begins after you have accepted the quotation and the agreed terms. Sending an enquiry does not book or commit you to anything.',
      ],
      [
        'What should I prepare?',
        'Your goals, audience, the deliverables you need, any existing brand materials and reference examples. Each service page lists what is most useful to share.',
      ],
      [
        'How do I share references or files?',
        'Add public links in the enquiry form or attach one PDF, JPEG, PNG or WebP file up to 5 MB. Larger files can be shared by link once we are in touch. Only share materials you have permission to use.',
      ],
    ],
  },
  {
    topic: 'Revisions & delivery',
    items: [
      [
        'Are revisions included?',
        'A review stage is part of every project. The revision arrangement for your project is agreed with your quotation, so you know what is included before work begins.',
      ],
      [
        'What if my requirements change?',
        'Tell Rapheal as early as possible. Any change to the scope, quotation or schedule is agreed with you before the additional work goes ahead.',
      ],
      [
        'How will I receive my completed work?',
        'Final files are delivered in the formats and by the method agreed for your project. Mention any file, platform or print requirements early.',
      ],
      [
        'How long will my project take?',
        'Timing depends on the scope and how quickly materials and feedback are available. A schedule is agreed with your quotation, and a preferred deadline in your enquiry helps us plan.',
      ],
    ],
  },
]

export const faqs = faqGroups.flatMap((g) => g.items)
