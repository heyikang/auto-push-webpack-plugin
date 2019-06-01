"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cross_spawn_1 = tslib_1.__importDefault(require("cross-spawn"));
const constants_1 = require("./constants");
/**
 *  @param repo 仓库地址
 *  @param branch 指定分支
 */
exports.push = (repo, branch) => {
    cross_spawn_1.default.sync('git', ['init'], {
        cwd: constants_1.UPLOAD_FULL_PATH,
        stdio: 'inherit'
    });
    cross_spawn_1.default.sync('git', ['add', '-A'], {
        cwd: constants_1.UPLOAD_FULL_PATH,
        stdio: 'inherit'
    });
    cross_spawn_1.default.sync('git', ['commit', '-m', `"${new Date().toLocaleString()}"`], {
        cwd: constants_1.UPLOAD_FULL_PATH,
        stdio: 'inherit'
    });
    cross_spawn_1.default.sync('git', ['push', repo, `HEAD:${branch}`, '--force'], {
        cwd: constants_1.UPLOAD_FULL_PATH,
        stdio: 'inherit'
    });
};
