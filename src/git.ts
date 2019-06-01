import spawn from 'cross-spawn';
import { UPLOAD_FULL_PATH } from './constants';

/**
 *  @param repo 仓库地址
 *  @param branch 指定分支
 */
export const push = (repo: string, branch: string) => {
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
  spawn.sync('git', ['push', repo, `HEAD:${branch}`, '--force'], {
    cwd: UPLOAD_FULL_PATH,
    stdio: 'inherit'
  });
}



