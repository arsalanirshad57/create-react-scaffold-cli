#!/usr/bin/env node

import prompts from 'prompts';
import { createProject } from '../scripts/createProject.js';

async function init() {
  const responses = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'What is your project name?',
      validate: (value) => (value ? true : 'Project name is required'),
    },
    {
      type: 'select',
      name: 'language',
      message: 'Choose a language:',
      choices: [
        { title: 'JavaScript', value: 'javascript' },
        { title: 'TypeScript', value: 'typescript' },
      ],
      initial: 0,
    },
    {
      type: 'toggle',
      name: 'installDeps',
      message: 'Do you want to install dependencies now?',
      initial: true,
      active: 'Yes',
      inactive: 'No',
    },
  ]);

  const { projectName, installDeps, language } = responses;

  if (!projectName) {
    console.log('❌ Project creation cancelled');
    process.exit(1);
  }

  await createProject(projectName, { installDeps, language });
}

init();
