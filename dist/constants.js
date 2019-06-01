"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const process_1 = require("process");
exports.UPLOAD_FULL_PATH = path_1.default.resolve(process_1.cwd(), '.auto_push_dir');
