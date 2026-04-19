import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replacements
  content = content.replace(/brand-orange/g, 'brand-primary');
  content = content.replace(/brand-amber/g, 'brand-primary-light');
  
  if (file.endsWith('DashboardMockup.tsx')) {
    content = content.replace(/bg-\[#FFF9E6\]/g, 'bg-brand-primary-light/10'); // light green bg
    content = content.replace(/text-amber-500/g, 'text-brand-primary'); // icon text
    content = content.replace(/hover:bg-amber-100/g, 'hover:bg-brand-primary/20');
    content = content.replace(/#E85D04/g, '#059669'); // dark green for avatar
  }

  // Update index.css
  if (file.endsWith('index.css')) {
    if (!content.includes('--color-brand-primary-light')) {
      content = content.replace(
        '--color-brand-primary: #10B981;',
        '--color-brand-primary: #10B981;\n  --color-brand-primary-light: #34D399;'
      );
    }
  }

  // Fix Features.tsx explicit text-brand-orange issue if mixed
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replacements completed.');
