export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: 'Trees' | 'Layers' | 'Grid' | 'Shield' | 'Sparkles' | 'Home';
  description: string;
  features: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Award' | 'Eye' | 'MessageSquare' | 'Wrench';
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: 'Landscaping' | 'Brickwork' | 'Paving' | 'Outdoor Areas';
  suburbContext: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  suburb: string;
  projectType: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'Gold Mine Landscaping',
  shortName: 'Gold Mine',
  tagline: 'Professional Landscaping, Paving & Bricklaying',
  phone: '+61 414 297 786',
  phoneClean: '+61414297786',
  phoneLocal: '0414 297 786',
  whatsappUrl: 'https://wa.me/61414297786',
  location: 'Werribee & Melbourne Western Suburbs',
  serviceAreaState: 'Victoria, Australia',
  abnBadge: 'Licensed & Fully Insured Trade Practices',
  operatingHours: 'Mon - Sat: 7:00 AM - 5:30 PM',
  primarySuburbs: [
    'Werribee',
    'Point Cook',
    'Hoppers Crossing',
    'Tarneit',
    'Truganina',
    'Wyndham Vale',
    'Williams Landing',
    'Altona',
    'Manor Lakes'
  ]
};

export const TRUST_METRICS = [
  { label: 'Years Trade Experience', value: '15+' },
  { label: 'Western Suburbs Projects', value: '250+' },
  { label: 'Average Client Rating', value: '5.0 ★' },
  { label: 'On-Site Quotes', value: '100% Free' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Liam Thorpe',
    suburb: 'Point Cook, VIC',
    projectType: 'Outdoor Paving & Turf Installation',
    rating: 5,
    review: 'Gold Mine Landscaping transformed our messy backyard into a clean, modern entertaining area. The stone paving alignment is razor sharp, and the new turf has settled in perfectly. Arrived on time each morning and kept the site spotless.',
    date: 'February 2026',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Sarah & David Mitchell',
    suburb: 'Werribee, VIC',
    projectType: 'Front Brick Boundary Wall & Pillars',
    rating: 5,
    review: 'Found Gold Mine Landscaping through a neighbour recommendation. Their bricklaying quality is exceptional. The front fence and pillars match our new home facade to perfection. Clear quote with zero hidden surprises.',
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Jason Kovacs',
    suburb: 'Tarneit, VIC',
    projectType: 'Tiered Retaining Wall & Yard Leveling',
    rating: 5,
    review: 'Our block had a frustrating slope that was virtually unusable. The team built a rock-solid tiered retaining wall with proper ag-pipe drainage, leveled the soil, and established instant lawn. Can finally let the kids play safely.',
    date: 'November 2025',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Rebecca Pham',
    suburb: 'Hoppers Crossing, VIC',
    projectType: 'Complete Alfresco Paving & Garden Beds',
    rating: 5,
    review: 'Extremely professional tradesmen. From the initial WhatsApp chat and on-site measure to the final cleanup, the communication was clear and upfront. Great craftsmanship on the outdoor pavers and raised garden beds.',
    date: 'October 2025',
    verified: true
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'landscaping',
    title: 'Landscaping & Turf',
    category: 'Garden & Lawn',
    iconName: 'Trees',
    description: 'Complete outdoor landscaping to create vibrant, low-maintenance outdoor spaces suited to Melbourne conditions and your family lifestyle.',
    features: ['Premium natural & synthetic turf', 'Garden bed cultivation & edging', 'Soil preparation, laser leveling & mulch', 'Drought-tolerant plant selection']
  },
  {
    id: 'bricklaying',
    title: 'Bricklaying & Masonry',
    category: 'Structural Masonry',
    iconName: 'Layers',
    description: 'Solid, reliable brickwork for residential properties, from architectural front boundary fences to structural piers and decorative walls.',
    features: ['Front fences & structural pillars', 'Garden brick retaining & borders', 'Architectural feature walls', 'Masonry repairs & alterations']
  },
  {
    id: 'paving',
    title: 'Paving & Walkways',
    category: 'Hardscaping',
    iconName: 'Grid',
    description: 'Hard-wearing, precision-laid paving solutions designed to improve access, side paths, and outdoor entertaining living zones.',
    features: ['Patio & courtyard stone paving', 'Side access walkways & perimeter paths', 'Outdoor alfresco living bases', 'Compacted crushed-rock sub-bases']
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    category: 'Earthwork & Terracing',
    iconName: 'Shield',
    description: 'Engineered timber and concrete sleeper retaining wall construction designed to retain soil, level sloped blocks, and maximize yard utility.',
    features: ['Heavy-duty timber sleeper walls', 'Concrete sleeper retaining systems', 'Integrated ag-pipe subsurface drainage', 'Tiered garden block terracing']
  },
  {
    id: 'garden-construction',
    title: 'Garden Construction',
    category: 'Outdoor Architecture',
    iconName: 'Sparkles',
    description: 'Structural garden elements crafted to organize your outdoor layout, improve daily usability, and enhance property street appeal.',
    features: ['Raised garden planter boxes', 'Outdoor steps & entrance landings', 'Steel & timber garden edging', 'Decorative gravel & pebble river stones']
  },
  {
    id: 'outdoor-improvements',
    title: 'Outdoor Transformations',
    category: 'Full Yard Makeovers',
    iconName: 'Home',
    description: 'Complete backyard renovations and front facade upgrades that refresh tired properties and prepare homes for outdoor enjoyment.',
    features: ['Complete new-build yard completions', 'Front facade modernisations', 'Thorough site excavation & clearing', 'Functional outdoor zoning']
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'workmanship',
    title: 'Trade-Certified Workmanship',
    description: 'Built to Australian building codes using quality materials, proper ground excavation, and proven tradesman practices that endure Melbourne seasons.',
    iconName: 'Award'
  },
  {
    id: 'detail',
    title: 'Attention to Precision',
    description: 'From dead-straight mortar lines and laser-level paver cuts to clean garden borders and flush finishes, every detail is treated with pride.',
    iconName: 'Eye'
  },
  {
    id: 'communication',
    title: 'Direct Trade Communication',
    description: 'Speak directly with the tradesman executing the work. Transparent itemised scopes, punctual arrival, and fast WhatsApp communication.',
    iconName: 'MessageSquare'
  },
  {
    id: 'tailored',
    title: 'Tailored Western Melbourne Solutions',
    description: 'Knowledge of local basalt clay soils, drainage challenges, council requirements, and block dimensions across Werribee and western suburbs.',
    iconName: 'Wrench'
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'pave-patio-1',
    title: 'Contemporary Patio Paving & Garden Border',
    category: 'Paving',
    suburbContext: 'Point Cook Residence',
    imageUrl: 'https://images.unsplash.com/photo-1584467727192-32a10bebb3d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision-laid stone paving creating an seamless flow from the alfresco sliding doors out into the entertaining space.',
    highlights: ['Compacted crushed-rock sub-base', 'Even joint alignment & polymeric sand', 'Clean perimeter concrete haunching']
  },
  {
    id: 'brick-fence-1',
    title: 'Front Boundary Brickwork & Pier Construction',
    category: 'Brickwork',
    suburbContext: 'Werribee Frontage',
    imageUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80',
    description: 'Solid front boundary brickwork featuring uniform piers, brick capping, and durable mortar matching contemporary house facades.',
    highlights: ['Reinforced concrete footings', 'Plumb and level brick courses', 'Damp-proof membrane installation']
  },
  {
    id: 'retaining-wall-1',
    title: 'Tiered Retaining Wall & Yard Leveling',
    category: 'Outdoor Areas',
    suburbContext: 'Tarneit Residential Block',
    imageUrl: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
    description: 'Heavy-duty retaining wall construction terracing a sloping backyard, generating flat, safe lawn space for the whole family.',
    highlights: ['Sub-surface slotted ag-pipe drainage', 'Galvanised steel H-beam uprights', 'Washed aggregate backfill compaction']
  },
  {
    id: 'landscape-turf-1',
    title: 'Complete Lawn & Garden Bed Transformation',
    category: 'Landscaping',
    suburbContext: 'Hoppers Crossing Family Home',
    imageUrl: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
    description: 'Complete soil cultivation, laser leveling, drought-hardy Sir Walter buffalo turf installation, and mulched garden borders.',
    highlights: ['Deep soil rotary-hoeing & sandy loam mix', 'Crisp steel garden edging division', 'Organic dark pine mulch coverage']
  },
  {
    id: 'outdoor-living-1',
    title: 'Alfresco Dining & Outdoor Living Courtyard',
    category: 'Outdoor Areas',
    suburbContext: 'Williams Landing Home',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'An integrated outdoor entertaining zone combining slip-resistant paved flooring, perimeter planter beds, and subtle ambient layout.',
    highlights: ['Slip-rated architectural pavers', 'Integrated rainwater drainage fall', 'Low-maintenance architectural planting']
  },
  {
    id: 'brick-feature-2',
    title: 'Decorative Brickwork & Garden Enclosure',
    category: 'Brickwork',
    suburbContext: 'Truganina Backyard',
    imageUrl: 'https://images.unsplash.com/photo-1584463699039-446733230a1c?auto=format&fit=crop&w=1200&q=80',
    description: 'Decorative masonry garden walls offering privacy, architectural character, and long-term durability for family courtyards.',
    highlights: ['Selected Australian clay profile bricks', 'Consistent joint raking', 'Weatherproof sealing application']
  },
  {
    id: 'pave-walkway-2',
    title: 'Side Access Pathway & Utility Paving',
    category: 'Paving',
    suburbContext: 'Altona Residence',
    imageUrl: 'https://images.unsplash.com/photo-1595828871316-b16602070f3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean side pathway paving providing safe, all-weather foot access between front driveway and rear garden utility zones.',
    highlights: ['Graded surface water runoff', 'Interlocking bond pattern', 'Weed-resistant joint sand']
  },
  {
    id: 'garden-raised-beds',
    title: 'Custom Raised Planter & Vegetable Beds',
    category: 'Landscaping',
    suburbContext: 'Wyndham Vale Garden',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    description: 'Sturdy raised garden beds providing optimal root depth and comfortable height for home gardening and kitchen herbs.',
    highlights: ['Treated pine structural framing', 'Enriched organic planting soil blend', 'Drip-line irrigation compatibility']
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What landscaping and outdoor trade services do you offer?',
    answer: 'Gold Mine Landscaping provides complete residential outdoor services across Melbourne’s western suburbs, including lawn establishment (natural turf and synthetic grass), soil preparation and laser leveling, garden bed creation, structural bricklaying (front boundary walls, piers, and repairs), stone and concrete paving (patios and paths), and timber or concrete sleeper retaining walls.'
  },
  {
    question: 'How do I request a free quote for my property?',
    answer: 'You can request a free on-site quote anytime by calling 0414 297 786, messaging us directly on WhatsApp (+61 414 297 786), or filling out our online quote form on this page. We arrange a convenient time to inspect your site, discuss your goals, and provide an honest, itemised quote.'
  },
  {
    question: 'Do you build structural retaining walls and brick fences?',
    answer: 'Yes. Bricklaying and structural retaining walls are core specialties of Gold Mine Landscaping. We build reinforced concrete footings, plumb brick piers, garden boundary fences, and engineered retaining walls with integrated subsurface ag-pipe drainage to prevent water accumulation.'
  },
  {
    question: 'What suburbs across Melbourne do you service?',
    answer: 'We are locally based in Melbourne’s western corridor, regularly servicing Werribee, Point Cook, Hoppers Crossing, Tarneit, Truganina, Wyndham Vale, Williams Landing, Altona, Manor Lakes, and surrounding western suburbs.'
  },
  {
    question: 'How long does a typical landscaping or paving project take?',
    answer: 'Project timeframes vary by scope: a side pathway or turf installation typically takes 2 to 4 days, while complete front and backyard landscaping or structural brick walls can take 1 to 2 weeks. During your consultation, we provide an accurate, guaranteed project timeline.'
  }
];
