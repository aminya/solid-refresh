import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: [{
      file: 'dist/solid-refresh.js',
      format: 'cjs'
    }, {
      file: 'dist/solid-refresh.mjs',
      format: 'es'
    }],
    external: ['solid-js'],
    plugins: [
      nodeResolve(),
      typescript(),
    ]
  },
  {
    input: 'src/babel.ts',
    output: [{
      file: './babel.js',
      format: 'cjs',
    }],
    external: ['@babel/core', '@babel/types', '@babel/helper-module-imports', '@babel/generator', 'crypto'],
    plugins: [
      nodeResolve(),
      typescript(),
    ]
  }
];