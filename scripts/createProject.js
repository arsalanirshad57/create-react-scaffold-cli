import fs from 'fs-extra';
import path from 'path';
import { execa } from 'execa';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(name, options) {
  const { installDeps } = options;

  const targetDir = path.resolve(process.cwd(), name);
  const templateDir = path.resolve(__dirname, '../templates/base');

  console.log(`📁 Creating project: ${name}`);

  await fs.copy(templateDir, targetDir);

  if (installDeps) {
    console.log('📦 Installing dependencies...');
    await execa('npm', ['install'], {
      cwd: targetDir,
      stdio: 'inherit',
    });
  } else {
    console.log('⏭ Skipped dependency installation');
    console.log(`➡ Run 'npm install' inside ${name}`);
  }

  console.log('✅ Project ready!');
}
