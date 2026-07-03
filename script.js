// THEME TOGGLE
const html = document.documentElement
const toggle = document.getElementById('theme-toggle')
const saved = localStorage.getItem('theme') || 'dark'
html.setAttribute('data-theme', saved)

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  html.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
})

const projects = [
  { title: 'Айдентика NOVA', category: 'Брендинг', colors: ['var(--accent)', 'var(--accent2)'] },
  { title: 'Плакат «Форма»', category: 'Плакат', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'UI для галереи', category: 'UX/UI', colors: ['var(--accent2)', 'var(--accent3)'] },
  { title: 'Упаковка LINO', category: 'Упаковка', colors: ['var(--accent)', '#fff'] },
  { title: 'Шрифт KSA', category: 'Типографика', colors: ['var(--accent2)', 'var(--accent)'] },
  { title: 'Брошюра V/A', category: 'Вёрстка', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Мерч DESNA', category: 'Мерчандайз', colors: ['#fff', 'var(--accent)'] },
  { title: 'Иллюстрация «Ритм»', category: 'Иллюстрация', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Сайт студии', category: 'UX/UI', colors: ['var(--accent)', 'var(--accent3)'] },
  { title: 'Выставка «Сдвиг»', category: 'Экспозиция', colors: ['var(--accent2)', '#fff'] },
  { title: 'Айдентика ZERO', category: 'Брендинг', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'Книга «Цвет»', category: 'Издание', colors: ['var(--accent)', 'var(--accent2)'] }
]

function generateAbstractSVG(index, colors) {
  const shapes = [
    `<circle r="35%" cx="50%" cy="50%" fill="none" stroke="${colors[0]}" stroke-width="1" opacity=".3"/>`,
    `<rect width="30%" height="30%" x="60%" y="10%" fill="none" stroke="${colors[1]}" stroke-width="1" opacity=".25" transform="rotate(${index * 7},${100 + index * 3},${10 + index * 2})"/>`,
    `<circle r="15%" cx="25%" cy="75%" fill="${colors[0]}" opacity=".1"/>`,
    `<polygon points="${8 + index},${60 + index * 2} ${25 + index * 2},${80 + index} ${5},${85}" fill="none" stroke="${colors[1]}" stroke-width="1" opacity=".2"/>`,
    `<line x1="0" y1="50%" x2="100%" y2="50%" stroke="${colors[0]}" stroke-width="1" opacity=".08" stroke-dasharray="${4 + index},${6 + index}"/>`,
    `<rect width="${12 + index * 3}%" height="${12 + index * 3}%" x="${20 + index * 2}%" y="${20 + index * 4}%" fill="${colors[0]}" opacity=".04" transform="rotate(${index * 15},${20 + index * 2 + (12 + index * 3) / 2}%,${20 + index * 4 + (12 + index * 3) / 2}%)"/>`,
    `<circle r="${8 + index * 0.5}%" cx="${70 + (index % 3) * 5}%" cy="${30 + (index % 2) * 10}%" fill="${colors[1]}" opacity=".06"/>`
  ]

  const selected = []
  for (let i = 0; i < 4; i++) {
    selected.push(shapes[(index + i * 2) % shapes.length])
  }

  const svg = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${selected.join('')}</svg>`
  return encodeURIComponent(svg)
}

function buildWorks() {
  const grid = document.getElementById('works-grid')
  projects.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = `work-card wc-${i + 1}`
    card.style.setProperty('--card-index', i)

    const svgData = generateAbstractSVG(i, p.colors)
    const visualHTML = `<div class="wv" style="background-image:url('data:image/svg+xml,${svgData}');background-size:cover;background-position:center"></div>`

    const num = String(i + 1).padStart(2, '0')
    card.innerHTML = `
      <div class="work-card__visual">${visualHTML}</div>
      <div class="work-card__inner">
        <div class="work-card__num">${num}</div>
        <div class="work-card__category">${p.category}</div>
        <div class="work-card__title">${p.title}</div>
        <div class="work-card__line"></div>
      </div>
    `
    grid.appendChild(card)
  })
}

buildWorks()

// REFERENCES
const references = [
  { designer: 'Paul Rand', role: 'Графический дизайнер', project: 'Логотип IBM', year: 1956, tags: ['Айдентика', 'Корпоративный стиль'], colors: ['#003366', '#666'] },
  { designer: 'Saul Bass', role: 'Дизайнер / режиссёр', project: 'Постер «Vertigo»', year: 1958, tags: ['Плакат', 'Кинография'], colors: ['#2D1B0E', '#B85C3A'] },
  { designer: 'Massimo Vignelli', role: 'Дизайнер', project: 'Схема метро Нью-Йорка', year: 1972, tags: ['Инфографика', 'Минимализм'], colors: ['#1A5276', '#85C1E9'] },
  { designer: 'Paula Scher', role: 'Партнёр Pentagram', project: 'Логотип Citibank', year: 1998, tags: ['Айдентика', 'Типографика'], colors: ['#1A5276', '#E74C3C'] },
  { designer: 'Stefan Sagmeister', role: 'Дизайнер', project: 'Постер AIGA', year: 1999, tags: ['Типографика', 'Эксперимент'], colors: ['#4A0E0E', '#C0392B'] },
  { designer: 'Milton Glaser', role: 'Иллюстратор / дизайнер', project: 'Логотип I ♥ NY', year: 1977, tags: ['Айдентика', 'Городской брендинг'], colors: ['#E74C3C', '#2C3E50'] },
  { designer: 'David Carson', role: 'Графический дизайнер', project: 'Ray Gun Magazine', year: 1993, tags: ['Эксперимент', 'Типографика'], colors: ['#1A1A2E', '#E94560'] },
  { designer: 'Chip Kidd', role: 'Дизайнер обложек', project: 'Обложка Jurassic Park', year: 1990, tags: ['Издание', 'Книжный дизайн'], colors: ['#2C3E50', '#E67E22'] },
  { designer: 'Herb Lubalin', role: 'Типограф', project: 'Гарнитура Avant Garde', year: 1968, tags: ['Типографика', 'Шрифт'], colors: ['#2C3E50', '#3498DB'] },
  { designer: 'Jessica Walsh', role: 'Арт-директор', project: '40 Days of Dating', year: 2013, tags: ['Брендинг', 'Цифра'], colors: ['#E91E63', '#FFC107'] }
]

function generateRefVisual(index) {
  const svgs = [
    // 0 — Paul Rand: IBM stripes
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#003366"/>
      <rect x="80" y="40" width="30" height="80" rx="4" fill="#fff" opacity=".9"/>
      <rect x="80" y="140" width="30" height="80" rx="4" fill="#fff" opacity=".9"/>
      <rect x="80" y="240" width="30" height="80" rx="4" fill="#fff" opacity=".9"/>
      <rect x="185" y="80" width="30" height="200" rx="4" fill="#fff" opacity=".8"/>
      <rect x="290" y="40" width="30" height="80" rx="4" fill="#fff" opacity=".9"/>
      <rect x="290" y="140" width="30" height="160" rx="4" fill="#fff" opacity=".9"/>
      <text x="55" y="370" font-family="serif" font-size="14" fill="#fff" opacity=".3" letter-spacing="4">I-B-M</text>
    </svg>`,

    // 1 — Saul Bass: Vertigo spiral
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#2D1B0E"/>
      <path d="M200 200 Q210 180 230 180 Q250 180 250 200 Q250 220 230 230 Q200 245 180 230 Q160 215 160 190 Q160 165 185 155 Q210 145 235 160 Q260 175 265 205 Q270 235 245 250 Q220 265 190 255 Q160 245 150 215 Q140 185 165 170 Q190 155 220 165"
        fill="none" stroke="#B85C3A" stroke-width="4" stroke-linecap="round"/>
      <text x="200" y="360" font-family="sans-serif" font-size="10" fill="#B85C3A" opacity=".5" text-anchor="middle" letter-spacing="6">VERTIGO</text>
    </svg>`,

    // 2 — Massimo Vignelli: NYC subway map
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <line x1="40" y1="100" x2="360" y2="100" stroke="#E74C3C" stroke-width="5" stroke-linecap="round"/>
      <line x1="100" y1="40" x2="100" y2="360" stroke="#3498DB" stroke-width="5" stroke-linecap="round"/>
      <line x1="40" y1="250" x2="360" y2="250" stroke="#2ECC71" stroke-width="5" stroke-linecap="round"/>
      <line x1="280" y1="40" x2="280" y2="360" stroke="#F39C12" stroke-width="5" stroke-linecap="round"/>
      <line x1="40" y1="170" x2="300" y2="170" stroke="#9B59B6" stroke-width="5" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="280" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="100" cy="250" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="280" cy="250" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="100" cy="170" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="280" cy="170" r="8" fill="#fff" stroke="#333" stroke-width="2"/>
      <circle cx="200" cy="100" r="5" fill="#333"/>
      <text x="200" y="380" font-family="sans-serif" font-size="9" fill="#666" text-anchor="middle" letter-spacing="3">NYC SUBWAY</text>
    </svg>`,

    // 3 — Paula Scher: Citibank arc
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <path d="M80 300 Q200 100 320 300" fill="none" stroke="#E74C3C" stroke-width="6" stroke-linecap="round"/>
      <rect x="185" y="310" width="30" height="30" rx="4" fill="#1A5276"/>
      <text x="200" y="370" font-family="sans-serif" font-size="20" fill="#1A5276" text-anchor="middle" font-weight="700" letter-spacing="8">CITI</text>
    </svg>`,

    // 4 — Stefan Sagmeister: AIGA typographic poster
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <text x="200" y="160" font-family="serif" font-size="120" fill="#4A0E0E" text-anchor="middle" font-weight="900">A</text>
      <text x="140" y="280" font-family="sans-serif" font-size="40" fill="#C0392B" text-anchor="middle" font-weight="700" transform="rotate(-8,140,280)">IGA</text>
      <text x="260" y="220" font-family="serif" font-size="16" fill="#4A0E0E" text-anchor="middle" opacity=".4" transform="rotate(5,260,220)">NEW YORK</text>
      <path d="M0 330 Q100 300 200 340 Q300 370 400 330" fill="none" stroke="#4A0E0E" stroke-width="1" opacity=".2"/>
      <path d="M0 350 Q100 320 200 360 Q300 390 400 350" fill="none" stroke="#C0392B" stroke-width="1" opacity=".15"/>
    </svg>`,

    // 5 — Milton Glaser: I ♥ NY
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <text x="200" y="140" font-family="serif" font-size="100" fill="#E74C3C" text-anchor="middle" font-weight="900">I</text>
      <text x="200" y="240" font-family="serif" font-size="100" fill="#E74C3C" text-anchor="middle">♥</text>
      <text x="200" y="340" font-family="serif" font-size="60" fill="#E74C3C" text-anchor="middle" font-weight="900">NY</text>
      <rect x="130" y="355" width="140" height="3" fill="#2C3E50" opacity=".3"/>
    </svg>`,

    // 6 — David Carson: Ray Gun (chaotic typography)
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#1A1A2E"/>
      <text x="180" y="120" font-family="serif" font-size="90" fill="#E94560" text-anchor="middle" font-weight="900" transform="rotate(-12,180,120)">RA</text>
      <text x="200" y="220" font-family="sans-serif" font-size="20" fill="#fff" text-anchor="middle" opacity=".4" letter-spacing="15" transform="rotate(3,200,220)">GUN</text>
      <text x="100" y="300" font-family="sans-serif" font-size="50" fill="#E94560" opacity=".6" transform="rotate(-20,100,300)" font-weight="700">!?</text>
      <text x="280" y="180" font-family="serif" font-size="18" fill="#fff" text-anchor="middle" opacity=".3" transform="rotate(25,280,180)">DESTROY</text>
      <line x1="40" y1="340" x2="360" y2="342" stroke="#E94560" stroke-width="2" opacity=".4" stroke-dasharray="8,12,20,6"/>
      <line x1="50" y1="360" x2="350" y2="358" stroke="#fff" stroke-width="1" opacity=".2" stroke-dasharray="4,14,8,10"/>
    </svg>`,

    // 7 — Chip Kidd: Jurassic Park (T-Rex skeleton)
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <path d="M200 360 L200 280 M200 280 Q220 260 240 240 M200 280 Q180 260 160 240 M160 240 L140 200 Q135 190 145 185 M240 240 L260 200 Q265 190 255 185 M200 250 L200 200 M200 200 L180 170 M200 200 L220 170 M180 170 L165 140 Q160 130 170 125 M220 170 L235 140 Q240 130 230 125 M160 240 L140 260 M240 240 L260 260"
        fill="none" stroke="#222" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="200" cy="110" r="30" fill="none" stroke="#222" stroke-width="5"/>
      <circle cx="200" cy="110" r="8" fill="#222"/>
      <text x="200" y="390" font-family="serif" font-size="10" fill="#666" text-anchor="middle" letter-spacing="4">JURASSIC PARK</text>
    </svg>`,

    // 8 — Herb Lubalin: Avant Garde ligatures
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <circle cx="100" cy="200" r="60" fill="none" stroke="#2C3E50" stroke-width="8"/>
      <circle cx="300" cy="200" r="60" fill="none" stroke="#3498DB" stroke-width="8"/>
      <line x1="145" y1="155" x2="255" y2="155" stroke="#2C3E50" stroke-width="8" stroke-linecap="round"/>
      <line x1="145" y1="245" x2="255" y2="245" stroke="#3498DB" stroke-width="8" stroke-linecap="round"/>
      <text x="100" y="200" font-family="serif" font-size="50" fill="#2C3E50" text-anchor="middle" font-weight="700">A</text>
      <text x="300" y="200" font-family="serif" font-size="50" fill="#3498DB" text-anchor="middle" font-weight="700">V</text>
      <text x="200" y="360" font-family="sans-serif" font-size="10" fill="#666" text-anchor="middle" letter-spacing="5">AVANT GARDE</text>
    </svg>`,

    // 9 — Jessica Walsh: 40 Days of Dating
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#F5F0EB"/>
      <circle cx="200" cy="200" r="100" fill="#E91E63" opacity=".15"/>
      <rect x="140" y="150" width="50" height="50" rx="12" fill="#E91E63" opacity=".8" transform="rotate(25,165,175)"/>
      <rect x="210" y="170" width="40" height="40" rx="8" fill="#FFC107" opacity=".9" transform="rotate(-15,230,190)"/>
      <circle cx="165" cy="175" r="8" fill="#fff" opacity=".3"/>
      <circle cx="230" cy="190" r="6" fill="#fff" opacity=".3"/>
      <text x="200" y="340" font-family="sans-serif" font-size="11" fill="#E91E63" text-anchor="middle" font-weight="700" letter-spacing="3">40 DAYS OF DATING</text>
    </svg>`
  ]

  return encodeURIComponent(svgs[index] || svgs[0])
}

function buildReferences() {
  const grid = document.getElementById('references-grid')
  references.forEach((r, i) => {
    const card = document.createElement('div')
    card.className = 'ref-card'

    const svgData = generateRefVisual(i)
    const visualHTML = `<div class="wv" style="background-image:url('data:image/svg+xml,${svgData}');background-size:cover;background-position:center"></div>`

    const tagsHTML = r.tags.map(t => `<span class="ref-card__tag">${t}</span>`).join('')

    card.innerHTML = `
      <div class="ref-card__visual">${visualHTML}</div>
      <div class="ref-card__info">
        <div class="ref-card__name">${r.designer}</div>
        <div class="ref-card__role">${r.role}</div>
        <div class="ref-card__project">${r.project}</div>
        <div class="ref-card__year">${r.year}</div>
        <div class="ref-card__tags">${tagsHTML}</div>
      </div>
    `
    grid.appendChild(card)
  })
}

buildReferences()

// scroll reveal
const revealEls = document.querySelectorAll(
  '.about__content > *, .about__visual > *, .works__header, .work-card, .references__header, .ref-card, .contact__left > *, .contact__right > *'
)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

revealEls.forEach((el, i) => {
  el.classList.add('reveal')
  if (i < 12) el.classList.add(`reveal-delay-${(i % 6) + 1}`)
  observer.observe(el)
})

// smooth stagger for work cards
document.querySelectorAll('.work-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.06}s`
})
