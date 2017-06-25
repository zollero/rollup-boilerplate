
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    format: 'iife',
    dest: 'dist/bundle.js',
    sourceMap: 'inline',
    plugins: [
        // babel(),
        uglify()
    ]
}
