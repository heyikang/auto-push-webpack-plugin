"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const util_1 = require("util");
const path_1 = tslib_1.__importDefault(require("path"));
exports.rmdir = util_1.promisify(fs_1.default.rmdir);
exports.unlink = util_1.promisify(fs_1.default.unlink);
exports.readdir = util_1.promisify(fs_1.default.readdir);
exports.exists = util_1.promisify(fs_1.default.exists);
exports.state = util_1.promisify(fs_1.default.stat);
exports.mkdir = util_1.promisify(fs_1.default.mkdir);
exports.createReadStream = fs_1.default.createReadStream;
exports.createWriteStream = fs_1.default.createWriteStream;
/**
 * @param p 删除文件夹路径
 * @description 递归删除文件夹下面的文件
 */
exports.deleteDir = (p) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (!(yield exports.exists(p))) {
        throw new Error(`p => "${p}" not exists!`);
    }
    ;
    const stateDesc = yield exports.state(p);
    if (stateDesc.isFile()) {
        throw new Error(`"${p}" is file not dir`);
    }
    ;
    const items = yield exports.readdir(p);
    for (const key in items) {
        const joinPath = path_1.default.join(p, items[key]);
        const joinPathState = yield exports.state(joinPath);
        if (joinPathState.isDirectory()) {
            yield exports.deleteDir(joinPath);
        }
        else {
            yield exports.unlink(joinPath);
        }
    }
    yield exports.rmdir(p);
});
/**
 * @param source 需要被复制路径
 * @param target 需要复制到的路径
 * @description 递归复制文件
 */
exports.copyDir = (source, target) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (!(yield exports.exists(source))) {
        throw new Error(`p => "${source}" not exists!`);
    }
    ;
    const sourceStateDesc = yield exports.state(source);
    if (sourceStateDesc.isFile()) {
        throw new Error(`"${source}" is file not dir`);
    }
    ;
    if (yield exports.exists(target)) {
        throw new Error(`"${target}" dir is exists`);
    }
    yield exports.mkdir(target, { recursive: true });
    const items = yield exports.readdir(source);
    for (const key in items) {
        const sourceJoinPath = path_1.default.join(source, items[key]);
        const sourceJoinPathState = yield exports.state(sourceJoinPath);
        const targetJoinPath = path_1.default.join(target, items[key]);
        if (sourceJoinPathState.isDirectory()) {
            yield exports.copyDir(sourceJoinPath, targetJoinPath);
        }
        else {
            exports.createReadStream(sourceJoinPath, { autoClose: true }).pipe(exports.createWriteStream(targetJoinPath, { autoClose: true }));
        }
    }
});
