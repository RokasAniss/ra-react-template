/* eslint-disable no-console */
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');

const component = require('./templates/component');
const container = require('./templates/container');
const layout = require('./templates/layout');
const view = require('./templates/view');

// Configs
const config = {
  outDir: path.resolve(__dirname, '../src/'),
  consoleColor: {
    success: '\x1b[32m%s\x1b[0m',
    error: '\x1b[31m%s\x1b[0m',
    title: '\x1b[4m%s\x1b[0m',
  },
};
const componentType = {
  component: 'components',
  layout: 'layouts',
  container: 'containers',
  view: 'views',
};

// State
let TYPE = '';

// Functions
const PromptType = async () => {
  await prompts({
    type: 'select',
    name: 'type',
    message: 'Choose type',
    choices: [
      {
        title: 'Component',
        description: 'Simple UI component',
        value: componentType.component,
      },
      {
        title: 'Layout',
        description: 'Layout UI component',
        value: componentType.layout,
      },
      {
        title: 'Container',
        description: 'State component',
        value: componentType.container,
      },
      {
        title: 'View',
        description: 'View component',
        value: componentType.view,
      },
    ],
    initial: 0,
  }).then(value => {
    TYPE = value.type;
    PromptName();
  });
};

const PromptName = async () => {
  await prompts({
    type: 'text',
    name: 'name',
    message: `Enter ${TYPE.slice(0, -1)} name:`,
    // validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
  }).then(value => {
    checkIfComponentExists(value.name, TYPE).then(exists => {
      if (exists) {
        console.log(config.consoleColor.error, `${value.name} exists`);
        PromptName();
      } else {
        if (TYPE === componentType.component) {
          generateComponent(value.name);
        }
        if (TYPE === componentType.container) {
          generateContainer(value.name);
        }
        if (TYPE === componentType.layout) {
          generateLayout(value.name);
        }
        if (TYPE === componentType.view) {
          generateView(value.name);
        }
      }
    });
  });
};

const checkIfComponentExists = async (name, subdir) => {
  return fs.existsSync(`${config.outDir}/${subdir}/${name}`);
};

const generateComponent = name => {
  const dirPath = `${config.outDir}/${componentType.component}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${componentType.component}/${name}:`
  );
  fs.mkdirSync(dirPath);

  fs.writeFileSync(`${filePath}.tsx`, component.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.tsx`);

  fs.writeFileSync(`${filePath}.scss`, component.scss(name));
  console.log(config.consoleColor.success, `+ ${name}.scss`);

  fs.writeFileSync(`${dirPath}/index.ts`, component.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateContainer = name => {
  const dirPath = `${config.outDir}/${componentType.container}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${componentType.container}/${name}:`
  );
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(`${filePath}.container.tsx`, container.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.container.tsx`);

  fs.writeFileSync(`${dirPath}/index.ts`, container.index(`${name}.container`));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateLayout = name => {
  const dirPath = `${config.outDir}/${componentType.layout}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${componentType.layout}/${name}:`
  );
  fs.mkdirSync(dirPath);

  fs.writeFileSync(`${filePath}.layout.tsx`, layout.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.layout.tsx`);

  fs.writeFileSync(`${filePath}.layout.scss`, layout.scss(name));
  console.log(config.consoleColor.success, `+ ${name}.layout.scss`);

  fs.writeFileSync(`${dirPath}/index.ts`, layout.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateView = name => {
  const dirPath = `${config.outDir}/${componentType.view}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${componentType.view}/${name}:`
  );
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(`${filePath}.view.tsx`, view.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.view.tsx`);

  fs.writeFileSync(`${dirPath}/index.ts`, view.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

// Init script
PromptType();
