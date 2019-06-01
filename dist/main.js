"use strict";
const tslib_1 = require("tslib");
const fs_1 = require("./fs");
const constants_1 = require("./constants");
const git_1 = require("./git");
class AutoPushWebpackPlugin {
    constructor(option) {
        this.option = option;
    }
    apply(compiler) {
        compiler.hooks.done.tapPromise('AutoPushWebpackPlugin', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const outputPaht = compiler.outputPath;
            if (yield fs_1.exists(constants_1.UPLOAD_FULL_PATH)) {
                yield fs_1.deleteDir(constants_1.UPLOAD_FULL_PATH);
            }
            yield fs_1.copyDir(outputPaht, constants_1.UPLOAD_FULL_PATH);
            git_1.push(this.option.repo, this.option.branch || 'dist');
        }));
    }
}
module.exports = AutoPushWebpackPlugin;
