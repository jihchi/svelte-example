import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/main.js',
  dest: 'dist/main.js',
  format: 'es',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    nodeResolve(),
    commonjs(),
    eslint({
      include: [
        './src/**/*.js',
      ],
    }),
    babel({
      include: ['./src/**/*.js'],
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.html',
    }),
  ],
};
