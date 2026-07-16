import { useState } from 'react'
import { Icon } from './icons'

const stats = [
  { num: '38,000+', lbl: 'Trips shared' },
  { num: '210,000+', lbl: 'Travelers' },
  { num: '4,000+', lbl: 'Destinations' },
  { num: '4.9', lbl: 'Average rating' },
]

const capabilities = [
  { icon: 'photo', label: 'Travel Feed' },
  { icon: 'users', label: 'Buddy Matching' },
  { icon: 'sparkle', label: 'AI Trip Planning' },
  { icon: 'globe', label: 'Destination Communities' },
]

const capShowcase = [
  { cls: 'tall', pic: 'morocco', lab: 'Marrakech · 3 days · $150', title: 'Travel Feed', tags: ['Photos', 'Itineraries', 'Hidden gems', 'Reviews'] },
  { cls: '', pic: 'g1', lab: '', title: 'AI Trip Planning', tags: ['7 days', 'Under $800', 'Auto-budget'] },
  { cls: '', pic: 'g3', lab: '', title: 'Buddy Matching', tags: ['Compatibility', 'Verified'] },
]

const coreFeatures = [
  { n: '01', lg: true, icon: 'photo', title: 'A feed built for travel, not likes',
    body: 'Post photos and videos, publish itineraries, drop hidden gems, review hotels and restaurants, and tag every location.',
    tags: ['Photos & video', 'Itineraries', 'Reviews', 'Location tags'], feed: true },
  { n: '02', icon: 'chat', title: 'Ask the community',
    body: 'Real answers from people who have actually been there — Reddit and Quora, for travelers.',
    tags: ['Q&A', 'Local tips'] },
  { n: '03', icon: 'sparkle', title: 'AI travel assistant',
    body: 'Ask for a plan, get a full itinerary with budget, hotels and activities.',
    tags: ['LLM-powered'] },
  { n: '04', icon: 'globe', title: 'A community per destination',
    body: 'Morocco, Japan, digital nomads, solo female travelers, backpackers — find your tribe and discuss.',
    tags: ['Join', 'Discuss'] },
  { n: '05', icon: 'map', title: 'Saved itineraries',
    body: 'Publish complete day-by-day trips others can save and reuse.',
    tags: ['Publish', 'Reuse'] },
  { n: '06', icon: 'star', title: 'Reviews you can trust',
    body: 'Rate hotels, restaurants and attractions from real trips — not paid placements.',
    tags: ['Hotels', 'Food', 'Attractions'] },
]

const compatibility = [
  { name: 'Ahmed', pct: 89, meta: 'Hiking · Food · Medium budget' },
  { name: 'Lena', pct: 76, meta: 'Nightlife · Museums · EN, DE' },
  { name: 'Kaito', pct: 64, meta: 'Backpacking · Street food · Low budget' },
]

const differentiators = [
  { icon: 'target', title: 'Travel Compatibility Score', feat: true,
    body: 'Match on interests, budget, travel style, age and languages — so you meet people you actually want to travel with.',
    chip: { name: 'Ahmed', pct: '89% compatible' } },
  { icon: 'receipt', title: 'Expense sharing',
    body: 'Shared expenses, split bills and budget tracking for people traveling together — Splitwise, built in.' },
  { icon: 'shield', title: 'Safety verification',
    body: 'Identity and passport verification, reviews from past travel partners, and a trust score. Critical for adoption.' },
  { icon: 'pin', title: 'Local experts',
    body: 'Locals earn by creating guides, offering experiences and answering questions — a marketplace in the making.' },
]

const monetization = [
  { title: 'Free', price: 'Free', sub: 'forever',
    bullets: ['Travel feed & communities', 'Ask the community', 'Save & reuse itineraries'], cta: 'Get started' },
  { title: 'Premium', price: '$8', sub: '/month', featured: true,
    bullets: ['Unlimited AI trip planning', 'Advanced traveler matching', 'Premium destination insights', 'Priority safety verification'], cta: 'Go Premium' },
  { title: 'Partners', price: 'Revenue', sub: 'share',
    bullets: ['Booking, Skyscanner & Airbnb commissions', 'Sponsored tours & experiences', 'Local business promotion'], cta: 'Partner with us' },
]

const testimonials = [
  { name: 'Rakesh Goyal', role: 'solo traveler, ', co: 'Bangalore', seed: 'a1',
    text: 'Matched with two people for Sri Lanka and it just worked — same budget, same pace. The compatibility score is scary accurate.' },
  { name: 'Ng Yi Ying', role: 'nomad in ', co: 'Lisbon', seed: 'a5',
    text: 'The AI planned a 6-day Morocco trip under budget and every recommendation held up. I barely edited it.' },
  { name: 'Sofia Marconi', role: 'backpacker, ', co: 'Milan', seed: 'a9',
    text: 'The Japan community answered my visa question in an hour. Better than three hours of Googling.' },
  { name: 'Tomas Nowak', role: 'weekend hiker, ', co: 'Kraków', seed: 'a12',
    text: 'Split every expense with my group in the app. No awkward "who owes what" at the airport this time.' },
  { name: 'Amara Okafor', role: 'solo female traveler, ', co: 'Lagos', seed: 'a3',
    text: 'Passport verification and partner reviews made meeting a stranger to travel with feel actually safe.' },
  { name: 'Diego Herrera', role: 'food traveler, ', co: 'Mexico City', seed: 'a7',
    text: 'Booked a local guide through Madeira in Oaxaca. Ate at places I would never have found on my own.' },
]

const contact = {
  address: 'Rua da Madeira 12, Funchal, Portugal',
  phone: '+351 291 000 000',
  email: 'hello@madeira.travel',
}

const socialLinks = [
  { name: 'instagram', label: 'Instagram', href: '#' },
  { name: 'x', label: 'X', href: '#' },
  { name: 'youtube', label: 'YouTube', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
]

const footerCols = [
  { title: 'Product', links: [
    { label: 'Travel feed', href: '#capabilities' },
    { label: 'Buddy matching', href: '#match' },
    { label: 'AI assistant', href: '#features' },
    { label: 'Communities', href: '#community' },
  ] },
  { title: 'Company', links: [
    { label: 'About', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Safety', href: '#' },
    { label: 'Local experts', href: '#' },
  ] },
  { title: 'Legal', links: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ] },
]

export default function App() {
  const [cap, setCap] = useState(0)
  const [asked, setAsked] = useState(false)

  return (
    <>
      {/* NAV */}
      <header className="on-image">
        <nav>
          <a className="brand" href="#">madeira<span className="dot">.</span></a>
          <div className="navlinks">
            <a href="#capabilities">Features</a>
            <a href="#match">Matching</a>
            <a href="#pricing">Pricing</a>
            <a href="#community">Community</a>
          </div>
          <a className="btn glass" href="#pricing">Get the app</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="badges">
            <span className="chip"><span className="star"><Icon name="star" size={15} /></span> <span className="g">4.9</span> loved by travelers</span>
            <span className="chip"><Icon name="plane" size={15} /> 210k+ travelers</span>
          </div>
          <h1>Travel is better<br/><span className="grey">with the right people.</span></h1>
          <p className="sub">Share trips, ask the community, match with compatible buddies, and let AI plan the whole journey — in one app.</p>
          <div className="cta-row">
            <a className="btn primary" href="#pricing">Get started free</a>
            <a className="btn glass" href="#match">Find a travel buddy</a>
          </div>
          <div className="trust">Verified travelers · Local-first communities · Free to start</div>
        </div>
      </section>

      {/* STATS */}
      <div className="wrap">
        <div className="stats">
          {stats.map(s => (
            <div className="stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CAPABILITY SELECTOR + SHOWCASE */}
      <section className="pad wrap" id="capabilities">
        <div className="cap">
          <div className="cap-head">
            <div className="eyebrow">One app</div>
            <h2>Every <span className="grey">travel</span> capability</h2>
            <p>Feed, community, matching and AI planning — every part of a trip in one place, no tab-hopping.</p>
            <div className="cap-card">
              <div className="cap-list">
                {capabilities.map((c, i) => (
                  <button key={c.label} className={'cap-tab' + (i === cap ? ' active' : '')} onClick={() => setCap(i)}>
                    <span className="tabicon"><Icon name={c.icon} size={19} /></span> {c.label}
                  </button>
                ))}
              </div>
              <div className="cap-img" />
              <a className="btn dark" href="#pricing">Get started</a>
            </div>
          </div>
          <div className="capshow">
            {capShowcase.map(c => (
              <article className={'showcard ' + c.cls} key={c.title}>
                <div className={'showpic ' + c.pic}>{c.lab && <span className="lab">{c.lab}</span>}</div>
                <h4>{c.title}</h4>
                <div className="tags">{c.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES BENTO */}
      <section className="pad wrap" id="features">
        <div className="center">
          <div className="eyebrow">Core features · MVP</div>
          <h2 className="sec-h">Everything a trip needs, <span className="grey">in one place</span></h2>
        </div>
        <div className="fgrid">
          {coreFeatures.map(f => (
            <article className={'fcard' + (f.lg ? ' lg' : '')} key={f.n}>
              <span className="fnum">{f.n}</span>
              <span className="ficon"><Icon name={f.icon} size={22} /></span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              {f.feed && (
                <div className="feedmock">
                  {[['Recipe Box', 'Marrakech · 3 days · $150', '412', '/morocco.png'],
                    ['Kaito M.', 'Kyoto temple route · saved', '288', '/BG.png'],
                    ['Lena R.', 'Best tapas in Sevilla', '173', '/morocco.png']].map(p => (
                    <div className="post" key={p[0]}>
                      <span className="thumb" style={{ backgroundImage: `url(${p[3]})` }} />
                      <div><div className="pt">{p[0]}</div><div className="ps">{p[1]}</div></div>
                      <span className="plike"><Icon name="heart" size={13} /> {p[2]}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="tags">{f.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* MATCHING */}
      <section className="pad wrap" id="match">
        <div className="panel">
          <div className="match">
            <div>
              <div className="eyebrow">Travel Buddy Matching</div>
              <h2 className="sec-h">Meet travelers who <span className="grey">fit your trip</span></h2>
              <p className="lead">Compatibility scored on interests, budget, travel style, age and languages — the most valuable thing the app does.</p>
              <ul className="filters">
                <li>Age range</li><li>Gender preference</li><li>Language</li><li>Interests</li><li>Budget</li>
              </ul>
            </div>
            <div className="match-list">
              {compatibility.map(p => (
                <div className="traveler" key={p.name}>
                  <div className="avatar">{p.name[0]}</div>
                  <div className="tmeta"><strong>{p.name}</strong><span>{p.meta}</span></div>
                  <div className="score">
                    <div className="bar"><i style={{ width: p.pct + '%' }} /></div>
                    <b>{p.pct}% compatible</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section className="pad wrap">
        <div className="ai-card">
          <div className="eyebrow">AI Travel Assistant</div>
          <h2 className="sec-h">Ask. Get a full plan back.</h2>
          <div className="chat">
            <div className="bubble user">Plan me a 7-day trip to Morocco under $800</div>
            {asked && (
              <div className="bubble bot">
                <strong>7 days in Morocco · ~$780</strong>
                <div className="line"><span className="a">1–2</span> Marrakech — souks + riad · $180</div>
                <div className="line"><span className="a">3</span> Atlas Mountains day hike · $60</div>
                <div className="line"><span className="a">4–5</span> Chefchaouen, the blue city · $210</div>
                <div className="line"><span className="a">6–7</span> Fes — medina + food tour · $190</div>
                <div className="muted">Hotels, activities and a day-by-day budget included.</div>
              </div>
            )}
          </div>
          {!asked
            ? <button className="btn primary" onClick={() => setAsked(true)}>Generate itinerary</button>
            : <button className="btn glass" onClick={() => setAsked(false)}>Ask again</button>}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="pad wrap" id="community">
        <div className="center">
          <div className="eyebrow">What sets Madeira apart</div>
          <h2 className="sec-h">Trust, money and locals — <span className="grey">built in</span></h2>
        </div>
        <div className="dgrid">
          {differentiators.map(d => (
            <div className={'dcard' + (d.feat ? ' feat' : '')} key={d.title}>
              <span className="dicon"><Icon name={d.icon} size={22} /></span>
              <h4>{d.title}</h4>
              <p>{d.body}</p>
              {d.chip && <span className="dchip">{d.chip.name} · <b>{d.chip.pct}</b></span>}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pad wrap" id="pricing">
        <div className="center">
          <div className="eyebrow">Pricing</div>
          <h2 className="sec-h">Free to travel. <span className="grey">Premium to go further.</span></h2>
        </div>
        <div className="pgrid">
          {monetization.map(p => (
            <div className={'pcard' + (p.featured ? ' feat' : '')} key={p.title}>
              {p.featured && <span className="badge">Most popular</span>}
              <h4>{p.title}</h4>
              <div className="price">{p.price}<small> {p.sub}</small></div>
              <ul className="plist">{p.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              <a className={'btn ' + (p.featured ? 'primary' : 'ghost')} href="#">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* GREEN CTA BAND */}
      <section className="cta-band">
        <h2>Plan your next trip with people who get it</h2>
        <a className="btn glass" href="#pricing">Get started free</a>
      </section>

      {/* TESTIMONIALS */}
      <section className="pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="panel pull">
            <div className="center">
              <div className="badges">
                <span className="chip"><span className="star"><Icon name="star" size={15} /></span> 4.9 average rating</span>
                <span className="chip"><Icon name="check" size={15} /> 12,400+ reviews</span>
              </div>
              <h2 className="sec-h">Trusted by <span className="grey">210,000+ travelers</span></h2>
            </div>
            <div className="masonry">
              {testimonials.map(t => (
                <div className="tcard" key={t.name}>
                  <div className="who">
                    <span className="av" style={{ backgroundImage: `url(https://i.pravatar.cc/96?u=${t.seed})` }} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}<b>{t.co}</b></span>
                    </div>
                  </div>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <div className="getintouch">
              <h4>Get in touch</h4>
              <div className="addr"><Icon name="pin" size={16} /> {contact.address}</div>
              <div className="contact">
                <div className="c">
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a><br />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="socials">
                  {socialLinks.map(s => (
                    <a key={s.name} href={s.href} aria-label={s.label}><Icon name={s.name} size={18} /></a>
                  ))}
                </div>
              </div>
            </div>
            <div className="foot-cols">
              {footerCols.map(col => (
                <div key={col.title}>
                  <h5>{col.title}</h5>
                  {col.links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bigword">madeira</div>
        <div className="copyrow">
          <span>© {new Date().getFullYear()} Madeira · Travel together</span>
          <span>Made for travelers, everywhere</span>
        </div>
      </footer>
    </>
  )
}
