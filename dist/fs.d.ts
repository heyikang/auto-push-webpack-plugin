/// <reference types="node" />
import fs from 'fs';
export declare const rmdir: typeof fs.rmdir.__promisify__;
export declare const unlink: typeof fs.unlink.__promisify__;
export declare const readdir: typeof fs.readdir.__promisify__;
export declare const exists: typeof fs.exists.__promisify__;
export declare const state: typeof fs.stat.__promisify__;
export declare const mkdir: typeof fs.mkdir.__promisify__;
export declare const createReadStream: typeof fs.createReadStream;
export declare const createWriteStream: typeof fs.createWriteStream;
/**
 * @param p 删除文件夹路径
 * @description 递归删除文件夹下面的文件
 */
export declare const deleteDir: (p: string) => Promise<void>;
/**
 * @param source 需要被复制路径
 * @param target 需要复制到的路径
 * @description 递归复制文件
 */
export declare const copyDir: (source: string, target: string) => Promise<void>;
//# sourceMappingURL=fs.d.ts.map