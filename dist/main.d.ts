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
    /**
     * @description 指定暂停时间 单位 毫秒
     * @default 2000
     */
    sleep?: number;
}
declare class AutoPushWebpackPlugin implements Plugin {
    private option;
    constructor(option: IAutoPushWebpackPluginOptions);
    apply(compiler: Compiler): void;
}
export = AutoPushWebpackPlugin;
//# sourceMappingURL=main.d.ts.map