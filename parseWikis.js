const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '/docs');
let combinedMarkdownContent = '';

// 递归地读取目录下的所有 .md 文件
function readMarkdownFiles(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile() && path.extname(file) === '.md') {
      const content = fs.readFileSync(fullPath, 'utf8');
      combinedMarkdownContent += content + '\n\n';
    } else if (stat.isDirectory()) {
      readMarkdownFiles(fullPath); // 递归读取子目录
    }
  });
}

// 开始读取文件
readMarkdownFiles(docsPath);

// 写入最终的文件
const combinedFilePath = path.join('wikis.md');
fs.writeFileSync(combinedFilePath, combinedMarkdownContent);
console.log('所有 Markdown 文件已合并到 combined.md 文件中');
