"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};
