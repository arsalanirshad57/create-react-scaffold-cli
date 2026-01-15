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
      type: 'toggle',
      name: 'installDeps',
      message: 'Do you want to install dependencies now?',
      initial: true,
      active: 'yes',
      inactive: 'no',
    },
  ]);

  const { projectName, installDeps } = responses;

  if (!projectName) {
    console.log('❌ Project creation cancelled');
    process.exit(1);
  }

  await createProject(projectName, { installDeps });
}

init();
