import { Plugin, Compiler } from 'webpack';
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
declare class AutoPushWebpackPlugin implements Plugin {
    private option;
    constructor(option: IAutoPushWebpackPluginOptions);
    apply(compiler: Compiler): void;
}
export = AutoPushWebpackPlugin;
//# sourceMappingURL=main.d.ts.map