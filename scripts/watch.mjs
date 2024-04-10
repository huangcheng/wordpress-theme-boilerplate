import { dirname } from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import chokidar from 'chokidar';
import { minimatch } from 'minimatch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, '..');

const config = JSON.parse(
  readFileSync(resolve(__dirname, '..', '.watchrc'), 'utf-8'),
);

const watcher = chokidar.watch(resolve(__dirname, '..', 'src'), {});

process.chdir(root);

watcher.on('change', (path) => {
  const extension = path.split('.').pop();

  Object.keys(config).forEach((pattern) => {
    if (minimatch(path, pattern, { matchBase: true })) {
      const commands = config[pattern];

      commands.forEach((command) => {
        execSync(command, { stdio: 'inherit' });
      });
    }
  });
});
