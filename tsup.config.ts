import { Options } from "tsup"

export const tsup: Options = {
  target: "esnext",
  clean: true,
  dts: false,
  entry: ["src/index.ts"],
  keepNames: true,
  minify: true,
  sourcemap: true,
};