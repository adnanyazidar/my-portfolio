const fs = require('fs');
const files = [
  'src/app/case-studies/roomcraft/page.tsx',
  'src/app/case-studies/freshtoria/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Normalize spacing
    content = content.replace(/\bmb-(20|24|32|48)\b/g, 'mb-12');
    content = content.replace(/\bmt-(20|24|32|48)\b/g, 'mt-12');
    content = content.replace(/\bgap-(16|20|24|32)\b/g, 'gap-8');
    content = content.replace(/\bpy-(20|24|32|48)\b/g, 'py-12');
    content = content.replace(/\bpt-(32|48)\b/g, 'pt-16');
    content = content.replace(/\bpb-(24|32|48)\b/g, 'pb-16');
    
    // Normalize font sizes
    content = content.replace(/\btext-\[2rem\]\b/g, 'text-3xl');
    content = content.replace(/\btext-\[0\.75rem\]\b/g, 'text-xs');
    content = content.replace(/\btext-\[0\.65rem\]\b/g, 'text-xs');
    content = content.replace(/\btext-\[10px\]\b/g, 'text-xs');
    
    // Regex string for tracking arrays since JSON formats it weirdly
    content = content.replace(/tracking-\[.*?\]/g, 'tracking-widest');
    content = content.replace(/\btracking-tighter\b/g, 'tracking-normal');
    content = content.replace(/\btracking-tight\b/g, 'tracking-normal');
    
    // Normalize line height
    content = content.replace(/leading-\[.*?\]/g, 'leading-relaxed');
    content = content.replace(/\bleading-none\b/g, 'leading-tight');
    
    fs.writeFileSync(file, content);
    console.log('Processed', file);
  } else {
    console.log('File not found', file);
  }
});
