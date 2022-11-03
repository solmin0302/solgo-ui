import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const pkg = require('./package.json');
// 노드 모듈에서 다른 확장자를 읽어 올 수 있게해줌 우리같은경우 TS를 사용하니까 js 모듈을 사용하려고하면 필요함 근데 우리가 쓰는건 대부분 ts지 않나 싶음
import resolve from '@rollup/plugin-node-resolve';
// .json 파일을 esmodule로 변환해서 사용할 수 있게 해줍니다.
import json from '@rollup/plugin-json';
// 번들 파일에 declaration 파일을 만들어줌 없으면 타입이 안만들어짐.
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'solgo-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // external: 라이브러리에 포함하지 않을 디펜던시를 명시해주세요 여기다 styled-compoenets를 넣어주었더니 사용처에서 styled-components 를 깔지 않으면 사용이 불가했음
      external: [...Object.keys(pkg.peerDependencies)],
      plugins: [resolve({ extensions }), json()],
    },
  },
});
