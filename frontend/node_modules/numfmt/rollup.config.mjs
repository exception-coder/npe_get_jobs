/* globals process */
import fs from 'fs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const isProd = process.env.NODE_ENV === 'production';

export default {
  input: pkg.module,
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [ '@babel/preset-env' ]
    })
  ],
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: 'inline',
    plugins: [ isProd && terser() ]
  }
};
