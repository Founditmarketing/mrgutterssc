const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const srcFiles = walkSync('./src');

srcFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace class combinations on buttons and button-like links
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)shadow-[^\s"]+\s*/g, '$1');
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)shadow-[^\s"]+\s*/g, '$1');
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)shadow-[^\s"]+\s*/g, '$1'); // in case of multiple shadow classes
  
  // also clean up shadow keyword directly
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)shadow\s*/g, '$1');
  
  // replace hover:translate-y-[-2px] with btn-effect
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)hover:translate-y-\[-2px\]\s*/g, '$1btn-effect ');
  
  // clean up any left over hover-lift
  content = content.replace(/(<(?:button|a|Link)[^>]*className="[^"]*?)hover-lift\s*/g, '$1btn-effect ');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Modified:', file);
  }
});
