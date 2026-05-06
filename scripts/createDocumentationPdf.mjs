import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const outputPath = resolve('docs', 'Yasir-Khan-Portfolio-Documentation.pdf');
const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 54;
const contentWidth = pageWidth - margin * 2;

const documentItems = [
  { type: 'title', text: 'Yasir Khan Portfolio Website Documentation' },
  { type: 'subtitle', text: 'Simple guide for the React portfolio project' },
  { type: 'meta', text: 'Created for: Yasir Khan' },
  { type: 'meta', text: 'Project type: React + Vite personal portfolio website' },

  { type: 'heading', text: '1. What This Project Is' },
  {
    type: 'body',
    text: 'This project is a personal portfolio website for Yasir Khan. It shows his work, skills, contact information, and developer profile in a clean web page.'
  },
  {
    type: 'body',
    text: 'The website is built with React. Vite is used to run the site while working and to create the final build for hosting.'
  },

  { type: 'heading', text: '2. Main Features' },
  { type: 'bullet', text: 'Hero section with the main title and social links.' },
  { type: 'bullet', text: 'About section with a short intro, highlights, and animated numbers.' },
  { type: 'bullet', text: 'Skills section with filters and progress bars.' },
  { type: 'bullet', text: 'Portfolio section with project cards.' },
  { type: 'bullet', text: 'Contact section with email, LinkedIn, GitHub, and a form.' },
  { type: 'bullet', text: 'Dark and bright mode toggle.' },
  { type: 'bullet', text: 'Responsive design for mobile and desktop screens.' },

  { type: 'heading', text: '3. How To Run The Project' },
  { type: 'body', text: 'Open a terminal inside the project folder.' },
  { type: 'code', text: 'npm install' },
  { type: 'body', text: 'Use this command if packages are missing or if node_modules is not available.' },
  { type: 'code', text: 'npm run dev' },
  { type: 'body', text: 'This starts the local website server.' },
  { type: 'body', text: 'Open this link in the browser:' },
  { type: 'code', text: 'http://127.0.0.1:5173/' },
  { type: 'code', text: 'npm run build' },
  { type: 'body', text: 'This checks the project and creates the final production files in the dist folder.' },

  { type: 'heading', text: '4. Important Files' },
  { type: 'bullet', text: 'index.html: The browser page shell. It has the title, favicon, font links, and React root.' },
  { type: 'bullet', text: 'styles.css: All design styles, responsive layout, and dark mode colors.' },
  { type: 'bullet', text: 'src/main.jsx: Starts the React app.' },
  { type: 'bullet', text: 'src/App.jsx: Joins all page sections together and handles theme/navigation state.' },
  { type: 'bullet', text: 'public/logo.png: The logo image used in the navbar and browser tab.' },

  { type: 'heading', text: '5. Component Files' },
  { type: 'bullet', text: 'Navbar.jsx: Logo, menu links, mobile menu, and dark/bright mode button.' },
  { type: 'bullet', text: 'Hero.jsx: Main first section with title, short text, buttons, and social icons.' },
  { type: 'bullet', text: 'About.jsx: About text, image, highlights, and animated counters.' },
  { type: 'bullet', text: 'Skills.jsx: Skill filters, skill cards, and progress bars.' },
  { type: 'bullet', text: 'Portfolio.jsx: Project cards and contact button.' },
  { type: 'bullet', text: 'Contact.jsx: Contact details and contact form validation.' },
  { type: 'bullet', text: 'Footer.jsx: Copyright text at the bottom.' },

  { type: 'heading', text: '6. Data And Helper Files' },
  { type: 'bullet', text: 'src/data/siteData.js: Main data for nav links, skills, projects, and about items.' },
  { type: 'bullet', text: 'src/utils/scroll.js: Smooth scroll helper.' },
  { type: 'bullet', text: 'src/utils/contactValidation.js: Contact form values and validation rules.' },

  { type: 'heading', text: '7. How To Edit Common Things' },
  { type: 'bullet', text: 'Change the logo by replacing public/logo.png.' },
  { type: 'bullet', text: 'Change the browser title in index.html.' },
  { type: 'bullet', text: 'Change the hero text in src/components/Hero.jsx.' },
  { type: 'bullet', text: 'Change about text in src/components/About.jsx.' },
  { type: 'bullet', text: 'Change skills and projects in src/data/siteData.js.' },
  { type: 'bullet', text: 'Change contact email and social links in Hero.jsx and Contact.jsx.' },
  { type: 'bullet', text: 'Change colors, spacing, and dark mode in styles.css.' },

  { type: 'heading', text: '8. Contact Information Used' },
  { type: 'bullet', text: 'Email: yasirkhan9850233@gmail.com' },
  { type: 'bullet', text: 'LinkedIn: https://www.linkedin.com/in/yasir-khan-it' },
  { type: 'bullet', text: 'GitHub: https://github.com/yasir50233' },

  { type: 'heading', text: '9. Important Note About The Form' },
  {
    type: 'body',
    text: 'The contact form checks if fields are filled and if the email looks correct. Right now it does not send real email. To send real messages, connect it to a backend, EmailJS, Formspree, Netlify Forms, or another form service.'
  },

  { type: 'heading', text: '10. Deployment' },
  { type: 'body', text: 'Run this command before uploading the site:' },
  { type: 'code', text: 'npm run build' },
  { type: 'body', text: 'After this, upload the dist folder to your hosting service.' },

  { type: 'heading', text: '11. Simple Troubleshooting' },
  { type: 'bullet', text: 'If the page is blank, run npm install and then npm run dev again.' },
  { type: 'bullet', text: 'If the logo does not show, check that public/logo.png exists.' },
  { type: 'bullet', text: 'If changes do not show, refresh the browser.' },
  { type: 'bullet', text: 'If a build fails, read the terminal error and check the file name it mentions.' }
];

function escapePdfText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(text, fontSize, maxWidth) {
  const averageCharWidth = fontSize * 0.52;
  const maxChars = Math.max(20, Math.floor(maxWidth / averageCharWidth));
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;

    if (testLine.length > maxChars && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function getItemStyle(type) {
  const styles = {
    title: { fontSize: 22, lineHeight: 28, before: 0, after: 12, color: '0.03 0.18 0.42' },
    subtitle: { fontSize: 14, lineHeight: 20, before: 0, after: 8, color: '0.15 0.39 0.72' },
    meta: { fontSize: 10, lineHeight: 15, before: 0, after: 3, color: '0.30 0.35 0.42' },
    heading: { fontSize: 15, lineHeight: 21, before: 14, after: 6, color: '0.03 0.18 0.42' },
    body: { fontSize: 11, lineHeight: 16, before: 0, after: 6, color: '0.12 0.16 0.22' },
    bullet: { fontSize: 11, lineHeight: 16, before: 0, after: 4, color: '0.12 0.16 0.22' },
    code: { fontSize: 10, lineHeight: 16, before: 2, after: 6, color: '0.05 0.34 0.45' }
  };

  return styles[type] ?? styles.body;
}

function itemToLines(item) {
  const style = getItemStyle(item.type);
  const prefix = item.type === 'bullet' ? '- ' : '';
  const indent = item.type === 'code' ? 14 : 0;
  const wrapped = wrapText(`${prefix}${item.text}`, style.fontSize, contentWidth - indent);

  return wrapped.map((line, index) => ({
    ...style,
    text: line,
    indent,
    before: index === 0 ? style.before : 0,
    after: index === wrapped.length - 1 ? style.after : 0
  }));
}

function buildPages(items) {
  const pages = [[]];
  let y = pageHeight - margin;

  for (const item of items) {
    const lines = itemToLines(item);

    for (const line of lines) {
      const neededHeight = line.before + line.lineHeight + line.after;

      if (y - neededHeight < margin) {
        pages.push([]);
        y = pageHeight - margin;
      }

      y -= line.before;
      pages.at(-1).push({ ...line, x: margin + line.indent, y });
      y -= line.lineHeight + line.after;
    }
  }

  return pages;
}

function createTextCommand(line) {
  return [
    'BT',
    `${line.color} rg`,
    `/F1 ${line.fontSize} Tf`,
    `1 0 0 1 ${line.x.toFixed(2)} ${line.y.toFixed(2)} Tm`,
    `(${escapePdfText(line.text)}) Tj`,
    'ET'
  ].join('\n');
}

function createPdf(pages) {
  const objects = [];

  function addObject(content) {
    objects.push(content);
    return objects.length;
  }

  addObject('<< /Type /Catalog /Pages 2 0 R >>');
  addObject('');
  const fontRef = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  const pageRefs = [];

  for (const page of pages) {
    const content = page.map(createTextCommand).join('\n');
    const contentRef = addObject(`<< /Length ${Buffer.byteLength(content, 'utf8')} >>\nstream\n${content}\nendstream`);
    const pageRef = addObject(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRef} 0 R >> >> /Contents ${contentRef} 0 R >>`
    );
    pageRefs.push(pageRef);
  }

  objects[1] = `<< /Type /Pages /Kids [${pageRefs.map(ref => `${ref} 0 R`).join(' ')}] /Count ${pageRefs.length} >>`;

  const chunks = ['%PDF-1.4\n'];
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(chunks.join(''), 'utf8'));
    chunks.push(`${index + 1} 0 obj\n${object}\nendobj\n`);
  });

  const xrefOffset = Buffer.byteLength(chunks.join(''), 'utf8');
  chunks.push(`xref\n0 ${objects.length + 1}\n`);
  chunks.push('0000000000 65535 f \n');

  for (let index = 1; index <= objects.length; index += 1) {
    chunks.push(`${String(offsets[index]).padStart(10, '0')} 00000 n \n`);
  }

  chunks.push(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);

  return Buffer.from(chunks.join(''), 'utf8');
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, createPdf(buildPages(documentItems)));

console.log(`Created ${outputPath}`);
