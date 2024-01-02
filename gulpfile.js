import gulp from 'gulp';
import ts from 'gulp-typescript';
import fs from 'fs';
import camelCase from 'camelcase';

const tsProject = ts.createProject('tsconfig.json');
const dir = "expressions"
const dataRecord = []
gulp.task('generate-imports', (done) => {
  const files = fs.readdirSync(`./src/${dir}`);
  const dynamicImports = files
    .filter(file => file.endsWith('.ts') && file !== 'index.ts'&& !/.*\.spec\.ts$/.test(file))
    .map(file => {
      // const handler = camelCase(file, { pascalCase: true });
      const moduleName = file.replace('.ts', '');
      dataRecord.push(moduleName);
      return `import ${moduleName} from './${dir}/${moduleName}';`
    })
  let templateStr = `export default function Interpret(node: AnyNode, environment: Environment): any {\n`;
  let ifStatements = ''
  dataRecord.forEach((exprString)=>{
     ifStatements += `    if(node.type === '${exprString}'){\n        return ${exprString}(node, environment);\n    }\n`
  })
  templateStr+= ifStatements+'\n}'
  const indexPath = './src/index.ts';

  // 读取现有的 index.ts 内容
  let existingContent = '';
  if (fs.existsSync(indexPath)) {
    existingContent = fs.readFileSync(indexPath, 'utf8');
  }

  // 提取手工添加的 imports
  const manualImports = existingContent.match(/import .* from .*/g) || [];
  const uniqueManualImports = Array.from(new Set([...manualImports,...dynamicImports])).join('\n');

  // 生成新的内容，包括手工添加的 imports 和动态生成的 imports
  const newContent = `${uniqueManualImports}\n\n\n${templateStr}`;

  // 写入文件
  fs.writeFileSync(indexPath, newContent);

  console.log('Imports updated in index.ts');
  done();
});

gulp.task('compile-ts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());

  return tsResult.js
    .pipe(gulp.dest('dist'));
});

// 默认任务，依次执行 generate-imports 和 compile-ts 任务
gulp.task('default', gulp.series('generate-imports', 'compile-ts'));
