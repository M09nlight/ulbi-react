import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  //work with nodes of ast
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier('@/' + value);
    }
  });
});

project.save();
//start with ts-node .\scripts\refactoring\updateImports.ts
