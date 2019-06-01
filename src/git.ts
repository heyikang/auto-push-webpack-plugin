import spawn from 'cross-spawn';
import { cwd } from 'process';
import { UPLOAD_DIR } from './constants';
import path from 'path';
import { copyDir, delteDir, exists } from './fs';

const UPLOAD_FULL_PATH = path.join(cwd(), UPLOAD_DIR);

const repoURL = 'git@github.com:heyikang/heyikang.github.io.git';

const branch = 'kangkang';

(async () => {
  if (await exists(UPLOAD_FULL_PATH)) {
    await delteDir(UPLOAD_FULL_PATH);
  };
  await copyDir(path.resolve(__dirname, '..', 'node_modules'), UPLOAD_FULL_PATH);
  spawn.sync('git', ['init'], {
    cwd: UPLOAD_FULL_PATH,
    stdio: 'inherit'
  });
  spawn.sync('git', ['add', '-A'], {
    cwd: UPLOAD_FULL_PATH,
    stdio: 'inherit'
  });
  spawn.sync('git', ['commit', '-m', `"${new Date().toLocaleString()}"`], {
    cwd: UPLOAD_FULL_PATH,
    stdio: 'inherit'
  });
  spawn.sync('git', ['push', repoURL, `HEAD:${branch}`, '--force'], {
    cwd: UPLOAD_FULL_PATH,
    stdio: 'inherit'
  });
})();



