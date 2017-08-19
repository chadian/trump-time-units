import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  entry: 'src/main.js',
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' }
  ],
  plugins: [ babel({ exclude: 'node_modules/**' }), commonjs(), resolve() ]
};
