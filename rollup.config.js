
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

// import _ from 'lodash';


export default {
    entry: 'src/main.js',
    format: 'iife',
    dest: 'dist/bundle.js',
    sourceMap: true,
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
              moduleDirectory: 'node_modules'
            }
        }),
        babel({
          exclude: 'node_modules/**'
        }),
        json(),
        uglify()
    ],
    // indicate which modules should be treated as external
    // external: ['lodash']
}
