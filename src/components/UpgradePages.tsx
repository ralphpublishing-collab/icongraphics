import { useState } from 'react'
import { Layout, PageHero, WA, Art } from './MarketingPage'
import { packages, type Project } from '../data/site'
import {
  insights,
  insightTopics,
  insightDate,
  type Insight,
} from '../data/insights'

export function Pricing() {
  return (
    <Layout>
      <PageHero
        label="PRICING & PACKAGES"
        title="The right scope. A considered quotation."
        description="Every project starts with what you need. Explore our service packages, then discuss a tailored quotation directly with Rapheal."
      />
      <section className="section light">
        <div className="wrap">
          <div className="pricing-intro">
            <span className="eyebrow">BUILT AROUND YOUR BRIEF</span>
            <h2>Clarity before commitment.</h2>
            <p>
              Final quotations depend on scope, deliverables, complexity and
              project requirements. These are service groupings, not fixed
              bundles. Prices, payment arrangements, scheduling and revisions
              are agreed for each project.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((p, i) => (
              <article className="package" key={p.serviceId}>
                <span className="package-number">
                  {String(i + 1).padStart(2, '0')} / SERVICE PACKAGE
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="package-price">
                  {p.price || 'Contact for a Quote'}
                </div>
                <p>{p.note}</p>
                <a href={'/services#' + p.serviceId} className="text-link">
                  Explore scope & examples ↗
                </a>
                <WA
                  className="button dark"
                  message={`Hello ICON GRAPHICS, I would like a quotation for ${p.title}.`}
                >
                  Discuss your package
                </WA>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
function editorialArt(article: Insight): Project {
  return {
    id: article.slug,
    title: article.title,
    category: '',
    description: article.summary,
    art: article.art,
    concept: true,
  }
}
export function Insights() {
  const [category, setCategory] = useState('All')
  const visible = insights.filter(
    (a) => category === 'All' || a.category === category,
  )
  return (
    <Layout>
      <PageHero
        label="INSIGHTS / KNOWLEDGE CENTRE"
        title="Good questions. Clearer creative decisions."
        description="Practical editorial guides for planning your next brand, media or digital project. Start with the purpose, then work through the details."
      />
      <section className="section light">
        <div className="wrap">
          <div className="filter-bar" aria-label="Article categories">
            {['All', ...insightTopics].map((topic) => (
              <button
                key={topic}
                className={category === topic ? 'active' : ''}
                aria-pressed={category === topic}
                onClick={() => setCategory(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="insight-grid">
            {visible.map((a) => (
              <article className="insight-card" key={a.slug}>
                <a href={'/insights/' + a.slug} aria-label={a.title}>
                  <Art project={editorialArt(a)} />
                </a>
                <div className="insight-meta">
                  <span>{a.category}</span>
                  <time dateTime={a.published}>{insightDate(a.published)}</time>
                  <span>{a.readingMinutes} min read</span>
                </div>
                <h2>
                  <a href={'/insights/' + a.slug}>{a.title}</a>
                </h2>
                <p>{a.summary}</p>
                <a className="text-link" href={'/insights/' + a.slug}>
                  Read the guide ↗
                </a>
              </article>
            ))}
          </div>
          {!visible.length && (
            <div className="editorial-empty">
              <h2>More perspectives to come.</h2>
              <p>
                Guides on {category.toLowerCase()} will appear here as they are
                published. Explore our services or ask Rapheal about your
                project in the meantime.
              </p>
              <a href="/services" className="button dark">
                Explore services ↗
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
export function InsightDetail({ article }: { article: Insight }) {
  return (
    <Layout>
      <PageHero
        label={article.category.toUpperCase() + ' / EDITORIAL GUIDE'}
        title={article.title}
        description={article.summary}
      />
      <article className="legal wrap editorial-article">
        <p>
          <time dateTime={article.published}>
            {insightDate(article.published)}
          </time>{' '}
          · {article.readingMinutes} min read · ICON GRAPHICS website guide
        </p>
        <Art project={editorialArt(article)} />
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <WA className="button yellow">Discuss your project</WA>
        <a className="text-link" href="/insights">
          ← All insights
        </a>
      </article>
    </Layout>
  )
}
export function BusinessPolicy({ delivery = false }: { delivery?: boolean }) {
  const sections = delivery
    ? [
        [
          'Agreeing the delivery',
          'The quotation and project agreement should identify deliverables, file formats, delivery method, approvals and the intended schedule. A preferred deadline in an enquiry is a request, not a confirmed delivery date.',
        ],
        [
          'Materials, feedback and approvals',
          'Discuss when client materials and feedback are needed and who can approve the work. If requirements or dependencies change, confirm any effect on the schedule and quotation with Rapheal.',
        ],
        [
          'Reviews and final handover',
          'Revision scope, final payment arrangements and handover requirements are agreed per project. Confirm the destination for digital files and any platform access requirements using an appropriate secure channel. Never submit account passwords through the enquiry form.',
        ],
        [
          'Usage rights and working files',
          'Ownership, licensing, third-party assets, source files and portfolio display permission must be addressed in the project agreement. Do not assume that working files or unrestricted usage rights are automatically included.',
        ],
        [
          'After delivery',
          'Any ongoing support, maintenance or file retention arrangements need to be agreed separately. No standard retention period or ongoing support entitlement is promised here.',
        ],
      ]
    : [
        [
          'Before confirming a project',
          'Enquiries do not confirm bookings. Discuss the scope, price, payment arrangements and cancellation terms with Rapheal before accepting a quotation or making a payment.',
        ],
        [
          'Requesting a cancellation',
          'Contact hello@icongraphics.com.ng or the official WhatsApp number as soon as possible. Include the project name and explain what you would like to cancel or change. Avoid sharing payment credentials.',
        ],
        [
          'Refunds and work already undertaken',
          'Any refund assessment depends on the project agreement, payments received, work undertaken, third-party commitments and applicable obligations. This page does not establish a blanket refund entitlement or a non-refundable payment rule.',
        ],
        [
          'Changes and postponements',
          'Discuss pauses, new requirements or rescheduling directly with Rapheal. Any revised scope, costs and schedule must be agreed before additional work proceeds.',
        ],
      ]
  return (
    <Layout>
      <PageHero
        label="PROJECT POLICIES"
        title={
          delivery ? 'Project Delivery Policy' : 'Refund & Cancellation Policy'
        }
        description="Clear conversations and project-specific agreements guide how we work together."
      />
      <article className="legal wrap">
        <p>
          Updated 1 November 2026 · Project-specific terms require agreement.
        </p>
        {sections.map(([title, copy]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </section>
        ))}
        <div className="review-note">
          <h3>Owner confirmation required</h3>
          <p>
            {delivery
              ? 'Standard delivery, approval, support and retention arrangements have not been supplied.'
              : 'Standard cancellation charges, refund eligibility, processing periods and payment terms have not been supplied.'}{' '}
            Confirm the applicable terms in your written project agreement.
            These pages do not replace that agreement or applicable legal
            rights.
          </p>
        </div>
        <a className="text-link" href="/contact">
          Contact Rapheal ↗
        </a>
      </article>
    </Layout>
  )
}
