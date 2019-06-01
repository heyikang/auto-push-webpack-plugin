import { Plugin, Compiler } from 'webpack';
import { exists, deleteDir, copyDir } from './fs';
import { UPLOAD_FULL_PATH } from './constants';
import { push } from './git';

interface IAutoPushWebpackPluginOptions {
  /** 
   * @description 仅支持ssh方式进行上传
   */
  repo: string;
  /**
   * @description 指定分支默认 `dist`
   */
  branch?: string;
}

class AutoPushWebpackPlugin extends Plugin {
  constructor(private option: IAutoPushWebpackPluginOptions) {
    super();
  }
  apply(compiler: Compiler) {
    compiler.hooks.done.tapPromise('AutoPushWebpackPlugin' , async () => {
      const outputPaht = compiler.outputPath;
      if (await exists(UPLOAD_FULL_PATH)) {
        await deleteDir(UPLOAD_FULL_PATH);
      }
      await copyDir(outputPaht, UPLOAD_FULL_PATH);
      push(this.option.repo, this.option.branch || 'dist');
    })
  }
}

export = AutoPushWebpackPlugin;