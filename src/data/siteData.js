export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' }
];

export const aboutHighlights = [
  {
    icon: 'fas fa-mobile-screen-button',
    title: 'Responsive First',
    text: 'Layouts built to feel natural on phones, tablets, and desktop screens.'
  },
  {
    icon: 'fas fa-code',
    title: 'Clean Code',
    text: 'Organized HTML, CSS, and JavaScript that is easy to adjust later.'
  },
  {
    icon: 'fab fa-wordpress',
    title: 'WordPress Ready',
    text: 'Flexible pages and content areas made for real project updates.'
  }
];

export const aboutStats = [
  { id: 'projects', value: 17, label: 'Projects' },
  { id: 'years', value: 3, label: 'Years' },
  { id: 'responsive', value: 100, label: 'Responsive' }
];

export const skills = [
  {
    title: 'HTML5',
    category: 'frontend',
    icon: 'fab fa-html5',
    description: 'Semantic structure and accessible page foundations.',
    level: 95
  },
  {
    title: 'CSS3',
    category: 'frontend',
    icon: 'fab fa-css3-alt',
    description: 'Responsive layouts, animations, and polished UI systems.',
    level: 92
  },
  {
    title: 'JavaScript',
    category: 'frontend',
    icon: 'fab fa-js',
    description: 'Interactive components, validation, and dynamic content.',
    level: 88
  },
  {
    title: 'React',
    category: 'frontend',
    icon: 'fab fa-react',
    description: 'Reusable UI, stateful screens, and component architecture.',
    level: 84
  },
  {
    title: 'WordPress',
    category: 'wordpress',
    icon: 'fab fa-wordpress',
    description: 'Custom themes, page builders, and content-managed sites.',
    level: 90
  },
  {
    title: 'WooCommerce',
    category: 'wordpress',
    icon: 'fas fa-cart-shopping',
    description: 'Product pages, checkout flows, and store customizations.',
    level: 82
  },
  {
    title: 'Git',
    category: 'tools',
    icon: 'fab fa-git-alt',
    description: 'Version control, clean changes, and collaborative workflow.',
    level: 86
  },
  {
    title: 'Performance',
    category: 'tools',
    icon: 'fas fa-gauge-high',
    description: 'Fast loading, optimized assets, and smooth interactions.',
    level: 80
  }
];

export const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'tools', label: 'Tools' }
];

const htmlProjectsRepo = 'https://github.com/yasir50233/15-days-15-projects-using-html-css-and-javaScript/tree/main';
const htmlProjectsRaw = 'https://raw.githubusercontent.com/yasir50233/15-days-15-projects-using-html-css-and-javaScript/main';

function encodeProjectPath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

function projectSource(path) {
  return `${htmlProjectsRepo}/${encodeProjectPath(path)}`;
}

function projectAsset(path) {
  return `${htmlProjectsRaw}/${encodeProjectPath(path)}`;
}

export const projects = [
  {
    title: 'Expanding Cards',
    description: 'Interactive image cards that expand smoothly on selection.',
    image: projectAsset('1_Expands Cards/Pic/1.jpg'),
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('1_Expands Cards'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('1_Expands Cards')
  },
  {
    title: 'Rotating Navigation',
    description: 'A creative rotating page layout with animated navigation controls.',
    image: projectAsset('2_Rotating Navigation/pic/peacock-8693634_1280.jpg'),
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('2_Rotating Navigation'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('2_Rotating Navigation')
  },
  {
    title: 'Progress Steps',
    description: 'Step-by-step progress UI with previous and next interactions.',
    icon: 'fas fa-list-check',
    accent: 'mint',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('3_Progress Steps'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('3_Progress Steps')
  },
  {
    title: 'Analog & Digital Clock',
    description: 'Clock interface showing live analog and digital time together.',
    icon: 'far fa-clock',
    accent: 'amber',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('4_Analog Clock & Digital_Clock'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('4_Analog Clock & Digital_Clock')
  },
  {
    title: 'Hidden Search',
    description: 'Compact search component that opens with a smooth input animation.',
    icon: 'fas fa-magnifying-glass',
    accent: 'sky',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('5_Hidden Search'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('5_Hidden Search')
  },
  {
    title: 'Blurry Loading',
    description: 'A loading screen that reveals the page while the blur fades away.',
    image: projectAsset('6_Blury_Loading/Image/candle-1042087_1280.jpg'),
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('6_Blury_Loading'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('6_Blury_Loading')
  },
  {
    title: 'Split Landing Page',
    description: 'A two-panel product landing page with animated hover expansion.',
    image: projectAsset('7_Split Landing Page/images/PlayStation.jpg'),
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('7_Split Landing Page'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('7_Split Landing Page')
  },
  {
    title: 'Input Form Wave',
    description: 'Login form labels animated with a wave-style focus effect.',
    icon: 'fas fa-keyboard',
    accent: 'rose',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('8_Input Form Wave Animation'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('8_Input Form Wave Animation')
  },
  {
    title: 'Sound Board',
    description: 'Audio buttons that play different sound clips from the browser.',
    icon: 'fas fa-volume-high',
    accent: 'violet',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Audio'],
    liveUrl: projectSource('9_Sound Board using Audio Tag in HTML5'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('9_Sound Board using Audio Tag in HTML5')
  },
  {
    title: 'FAQ Collapsible Tabs',
    description: 'Expandable FAQ cards for showing and hiding answers cleanly.',
    icon: 'far fa-circle-question',
    accent: 'lime',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('10_FAQ collapsible tab'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('10_FAQ collapsible tab')
  },
  {
    title: 'Animated Navigation',
    description: 'Navigation menu that transitions between compact and open states.',
    icon: 'fas fa-bars-staggered',
    accent: 'teal',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('11_Animated Navigation'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('11_Animated Navigation')
  },
  {
    title: 'Social Increment Counter',
    description: 'Animated counters for social media stats and dashboard metrics.',
    icon: 'fas fa-chart-line',
    accent: 'orange',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('12_Social Increment Counter'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('12_Social Increment Counter')
  },
  {
    title: 'Login & Signup Pages',
    description: 'Linked authentication screens with focused layout and form styling.',
    icon: 'fas fa-right-to-bracket',
    accent: 'indigo',
    technologies: ['HTML', 'CSS'],
    liveUrl: projectSource('13_LogIn & SinUp Pages'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('13_LogIn & SinUp Pages')
  },
  {
    title: 'Color Generator',
    description: 'Random color generator for quickly creating fresh color values.',
    icon: 'fas fa-palette',
    accent: 'fuchsia',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: projectSource('14_Color_Generator'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('14_Color_Generator')
  },
  {
    title: 'Copy To Clipboard',
    description: 'Clipboard utility that copies generated text with one click.',
    icon: 'far fa-copy',
    accent: 'slate',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Clipboard API'],
    liveUrl: projectSource('15_Copy-To-ClipBord'),
    liveLabel: 'View Source',
    liveIcon: 'fab fa-github',
    githubUrl: projectSource('15_Copy-To-ClipBord')
  },
  {
    title: 'WordPress Store Project',
    description: 'Reserved slot for a WooCommerce or business website case study.',
    icon: 'fab fa-wordpress',
    accent: 'wordpress',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    status: 'Coming Soon'
  },
  {
    title: 'WordPress Blog Project',
    description: 'Reserved slot for a custom WordPress blog or content website.',
    icon: 'fab fa-wordpress',
    accent: 'wordpress',
    technologies: ['WordPress', 'Gutenberg', 'PHP'],
    status: 'Coming Soon'
  }
];
