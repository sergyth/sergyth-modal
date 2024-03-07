import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss"; // Importez rollup-plugin-postcss

const config = {
  input: "./src/index.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    terser(),
    postcss({
      // Ajoutez postcss à votre configuration de plugins
      extensions: [".css"], // Spécifiez les extensions de fichiers à traiter
    }),
  ],
};

export default config;
