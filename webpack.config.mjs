import path from "node:path";
import { fileURLToPath } from "node:url";

export default {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  entry: "./src/main.ts",
  output: {
    filename: "main.js",
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
  },
  experiments: {
    outputModule: true, // ECMAScript モジュールとして出力することでランタイムを削減
  },
  optimization: {
    minimize: false,
  },
};
