"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsup = void 0;
exports.tsup = {
    target: "esnext",
    clean: true,
    dts: false,
    entry: ["src/index.ts"],
    keepNames: true,
    minify: true,
    sourcemap: true,
};
