import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const DIST = 'dist'
const BUNDLE = 'bundle'

const PRODUCTION = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${DIST}/${BUNDLE}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${DIST}/${BUNDLE}.esm.js`,
      format: 'esm'
    },
    {
      name: 'Spinners',
      file: `${DIST}/${BUNDLE}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    PRODUCTION && terser()
  ]
}
