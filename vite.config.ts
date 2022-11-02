import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const pkg = require('./package.json');
// cjs 외부 모듈을 es6로 변환하여 사용할 수 있게해줌
import commonjs from '@rollup/plugin-commonjs';
// 노드 모듈에서 다른 확장자를 읽어 올 수 있게해줌 우리같은경우 TS를 사용하니까 js 모듈을 사용하려고하면 필요함 근데 우리가 쓰는건 대부분 ts지 않나 싶음
import resolve from '@rollup/plugin-node-resolve';
// .json 파일을 esmodule로 변환해서 사용할 수 있게 해줍니다.
import json from '@rollup/plugin-json';
// https://vitejs.dev/config/

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'solgo-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // external: 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
      external: [...Object.keys(pkg.peerDependencies)],
      plugins: [
        commonjs({ include: 'node_modules/**' }),
        resolve({ extensions }),
        json(),
      ],
    },
  },
});
