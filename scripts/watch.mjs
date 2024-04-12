import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

import chokidar from 'chokidar';
import { minimatch } from 'minimatch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');

const config = JSON.parse(
  readFileSync(path.resolve(__dirname, '..', '.watchrc'), 'utf8'),
);

const watcher = chokidar.watch(path.resolve(__dirname, '..', 'src'), {});

process.chdir(root);

watcher.on('change', (path) => {
  const keys = Object.keys(config);

  for (const pattern of keys) {
    if (minimatch(path, pattern, { matchBase: true })) {
      const commands = config[pattern];

      for (const command of commands) {
        try {
          execSync(command, { stdio: 'inherit' });
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
});
