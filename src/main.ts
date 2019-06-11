import { Plugin, Compiler } from 'webpack';
import { exists, deleteDir, copyDir } from './fs';
import { UPLOAD_FULL_PATH } from './constants';
import { push } from './git';
import { sleep } from './sleep';

interface IAutoPushWebpackPluginOptions {
  /** 
   * @description 仅支持ssh方式进行上传
   */
  repo: string;
  /**
   * @description 指定分支默认 `dist`
   */
  branch?: string;
  /**
   * @description 指定暂停时间 单位 毫秒
   * @default 2000
   */
  sleep?: number;
}

class AutoPushWebpackPlugin implements Plugin {
  constructor(private option: IAutoPushWebpackPluginOptions) {}
  apply(compiler: Compiler) {
    compiler.hooks.done.tapPromise('AutoPushWebpackPlugin' , async () => {
      const dealy = typeof this.option.sleep !== 'undefined' ? this.option.sleep : 2000;
      await sleep(dealy);
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