import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

export const rmdir = promisify(fs.rmdir);

export const unlink = promisify(fs.unlink);

export const readdir = promisify(fs.readdir);

export const exists = promisify(fs.exists);

export const state = promisify(fs.stat);

export const mkdir = promisify(fs.mkdir);

export const createReadStream = fs.createReadStream;

export const createWriteStream = fs.createWriteStream;

/**
 * @param p 删除文件夹路径
 * @description 递归删除文件夹下面的文件
 */

export const deleteDir = async (p: string) => {
  if (!await exists(p)) {
    throw new Error(`p => "${p}" not exists!`);
  };
  const stateDesc = await state(p);
  if (stateDesc.isFile()) {
    throw new Error(`"${p}" is file not dir`);
  };
  const items = await readdir(p);
  for (const key in items) {
    const joinPath = path.join(p, items[key]);
    const joinPathState = await state(joinPath);
    if (joinPathState.isDirectory()) {
      await deleteDir(joinPath);
    } else {
      await unlink(joinPath);
    }
  }
  await rmdir(p);
}

/**
 * @param source 需要被复制路径
 * @param target 需要复制到的路径
 * @description 递归复制文件
 */
export const copyDir = async (source: string, target: string) => {
  if (!await exists(source)) {
    throw new Error(`p => "${source}" not exists!`);
  };
  const sourceStateDesc = await state(source);
  if (sourceStateDesc.isFile()) {
    throw new Error(`"${source}" is file not dir`);
  };
  if (await exists(target)) {
    throw new Error(`"${target}" dir is exists`);
  }
  await mkdir(target, {recursive: true});
  const items = await readdir(source);
  for (const key in items) {
    const sourceJoinPath = path.join(source, items[key]);
    const sourceJoinPathState = await state(sourceJoinPath);
    const targetJoinPath = path.join(target, items[key]);
    if (sourceJoinPathState.isDirectory()) {
      await copyDir(sourceJoinPath, targetJoinPath);
    } else {
      createReadStream(sourceJoinPath, { autoClose: true }).pipe(createWriteStream(targetJoinPath, { autoClose: true }));
    }
  }
}







