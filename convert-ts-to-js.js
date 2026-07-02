const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const base = process.cwd();
const ignore = new Set(['node_modules', '.next']);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (ignore.has(entry.name)) continue;
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name);
    if (ext !== '.ts' && ext !== '.tsx') continue;
    if (entry.name.endsWith('.d.ts')) continue;

    const source = fs.readFileSync(full, 'utf8');
    const isTSX = ext === '.tsx';
    const transpiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        jsx: isTSX ? ts.JsxEmit.Preserve : ts.JsxEmit.None,
        allowJs: true,
        esModuleInterop: true,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      },
      fileName: full,
    });

    const outFile = full.slice(0, -ext.length) + (isTSX ? '.jsx' : '.js');
    fs.writeFileSync(outFile, transpiled.outputText, 'utf8');
    fs.unlinkSync(full);
    console.log('Converted', full, '->', outFile);
  }
}

walk(base);
