/* eslint-disable no-console */
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');

const component = require('./templates/component');
const container = require('./templates/container');
const layout = require('./templates/layout');
const view = require('./templates/view');
const storeObject = require('./templates/storeObject');
const fileReplaceLine = require('./fileReplaceLine');

// Configs
const config = {
  outDir: path.resolve(__dirname, '../src/'),
  rootReducer: path.resolve(__dirname, '../src/store/rootReducer.ts'),
  consoleColor: {
    success: '\x1b[32m%s\x1b[0m',
    error: '\x1b[31m%s\x1b[0m',
    title: '\x1b[4m%s\x1b[0m',
  },
};
const templateType = {
  component: 'components',
  layout: 'layouts',
  container: 'containers',
  view: 'views',
  storeObject: 'store',
};

// State
let TYPE = '';

// Functions
const PromptType = async () => {
  await prompts(
    {
      type: 'select',
      name: 'type',
      message: 'Choose type',
      choices: [
        {
          title: 'Component',
          description: 'Simple UI component',
          value: templateType.component,
        },
        {
          title: 'Layout',
          description: 'Layout UI component',
          value: templateType.layout,
        },
        {
          title: 'Container',
          description: 'State component',
          value: templateType.container,
        },
        {
          title: 'View',
          description: 'View component',
          value: templateType.view,
        },
        {
          title: 'Store Module',
          description: 'Redux store module',
          value: templateType.storeObject,
        },
      ],
      initial: 0,
    },
    {
      onCancel: () => {
        console.log(config.consoleColor.error, `Abort generate`);
        process.exit(1);
      },
    }
  ).then(value => {
    TYPE = value.type;
    PromptName();
  });
};

const PromptName = async () => {
  await prompts(
    {
      type: 'text',
      name: 'name',
      message: `Enter ${TYPE.replace(/s$/, '')} name:`,
      // validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
    },
    {
      onCancel: () => {
        console.log(config.consoleColor.error, `Abort generate`);
        process.exit(1);
      },
    }
  ).then(value => {
    checkIfComponentExists(value.name, TYPE).then(exists => {
      if (exists) {
        console.log(config.consoleColor.error, `${value.name} exists`);
        PromptName();
      } else {
        if (TYPE === templateType.component) {
          generateComponent(value.name);
        }
        if (TYPE === templateType.container) {
          generateContainer(value.name);
        }
        if (TYPE === templateType.layout) {
          generateLayout(value.name);
        }
        if (TYPE === templateType.view) {
          generateView(value.name);
        }
        if (TYPE === templateType.storeObject) {
          generateStoreObject(value.name);
        }
      }
    });
  });
};

const checkIfComponentExists = async (name, subdir) => {
  return fs.existsSync(`${config.outDir}/${subdir}/${name}`);
};

const generateComponent = name => {
  const dirPath = `${config.outDir}/${templateType.component}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${templateType.component}/${name}:`
  );
  fs.mkdirSync(dirPath);

  fs.writeFileSync(`${filePath}.tsx`, component.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.tsx`);

  fs.writeFileSync(`${filePath}.spec.tsx`, component.spec(name));
  console.log(config.consoleColor.success, `+ ${name}.spec.tsx`);

  fs.writeFileSync(`${filePath}.story.tsx`, component.story(name));
  console.log(config.consoleColor.success, `+ ${name}.story.tsx`);

  fs.writeFileSync(`${filePath}.scss`, component.scss(name));
  console.log(config.consoleColor.success, `+ ${name}.scss`);

  fs.writeFileSync(`${dirPath}/index.ts`, component.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateContainer = name => {
  const dirPath = `${config.outDir}/${templateType.container}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${templateType.container}/${name}:`
  );
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(`${filePath}.container.tsx`, container.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.container.tsx`);

  fs.writeFileSync(`${filePath}.spec.tsx`, container.spec(name));
  console.log(config.consoleColor.success, `+ ${name}.spec.tsx`);

  fs.writeFileSync(`${dirPath}/index.ts`, container.index(`${name}.container`));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateLayout = name => {
  const dirPath = `${config.outDir}/${templateType.layout}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(config.consoleColor.title, `src/${templateType.layout}/${name}:`);
  fs.mkdirSync(dirPath);

  fs.writeFileSync(`${filePath}.layout.tsx`, layout.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.layout.tsx`);

  fs.writeFileSync(`${filePath}.layout.scss`, layout.scss(name));
  console.log(config.consoleColor.success, `+ ${name}.layout.scss`);

  fs.writeFileSync(`${dirPath}/index.ts`, layout.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateView = name => {
  const dirPath = `${config.outDir}/${templateType.view}/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(config.consoleColor.title, `src/${templateType.view}/${name}:`);
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(`${filePath}.view.tsx`, view.tsx(name));
  console.log(config.consoleColor.success, `+ ${name}.view.tsx`);

  fs.writeFileSync(`${dirPath}/index.ts`, view.index(name));
  console.log(config.consoleColor.success, `+ index.ts`);
};

const generateStoreObject = name => {
  const dirPath = `${config.outDir}/${templateType.storeObject}/modules/${name}`;
  const filePath = `${dirPath}/${name}`;

  console.log(
    config.consoleColor.title,
    `src/${templateType.storeObject}/modules/${name}:`
  );
  fs.mkdirSync(dirPath, { recursive: true });

  fs.writeFileSync(`${filePath}.state.ts`, storeObject.state(name));
  console.log(config.consoleColor.success, `+ ${name}.state.ts`);

  fs.writeFileSync(`${filePath}.actionTypes.ts`, storeObject.actionTypes(name));
  console.log(config.consoleColor.success, `+ ${name}.actionTypes.ts`);

  fs.writeFileSync(`${filePath}.actions.ts`, storeObject.actions(name));
  console.log(config.consoleColor.success, `+ ${name}.actions.ts`);

  fs.writeFileSync(`${filePath}.reducer.ts`, storeObject.reducer(name));
  console.log(config.consoleColor.success, `+ ${name}.reducer.ts`);

  // fs.writeFileSync(`${filePath}.sagas.ts`, storeObject.sagas(name));
  // console.log(config.consoleColor.success, `+ ${name}.sagas.ts`);

  // Append new line to rootReducer
  fileReplaceLine(config.rootReducer, [
    {
      from: '// Reducer import',
      to: `import { ${name}Reducer } from './modules/${name}/${name}.reducer';
// Reducer import`,
    },
    {
      from: '// Reducer declare',
      to: `${name}: ${name}Reducer,
  // Reducer declare`,
    },
  ]);
};

// Init script
PromptType();
