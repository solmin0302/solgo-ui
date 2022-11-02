var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// package.json
var package_exports = {};
__export(package_exports, {
  default: () => package_default,
  dependencies: () => dependencies,
  devDependencies: () => devDependencies,
  exports: () => exports,
  files: () => files,
  main: () => main,
  module: () => module,
  name: () => name,
  peerDependencies: () => peerDependencies,
  private: () => private2,
  scripts: () => scripts,
  type: () => type,
  typings: () => typings,
  version: () => version
});
var name, private2, version, type, main, module, typings, exports, files, scripts, dependencies, peerDependencies, devDependencies, package_default;
var init_package = __esm({
  "package.json"() {
    name = "solgo-ui";
    private2 = false;
    version = "0.0.1";
    type = "module";
    main = "./dist/index.umd.js";
    module = "./dist/index.es.js";
    typings = "./dist/index.d.ts";
    exports = {
      ".": {
        import: "./dist/index.es.js",
        require: "./dist/index.umd.js"
      }
    };
    files = [
      "/dist"
    ];
    scripts = {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
      storybook: "start-storybook -p 6006",
      "build-storybook": "build-storybook"
    };
    dependencies = {};
    peerDependencies = {
      react: ">= 16.8.0",
      "react-dom": ">= 16.8.0",
      "styled-components": ">= 5.3.3"
    };
    devDependencies = {
      "@babel/core": "^7.19.6",
      "@rollup/plugin-commonjs": "^23.0.2",
      "@rollup/plugin-json": "^5.0.1",
      "@rollup/plugin-node-resolve": "^15.0.1",
      "@storybook/addon-actions": "^6.5.13",
      "@storybook/addon-essentials": "^6.5.13",
      "@storybook/addon-interactions": "^6.5.13",
      "@storybook/addon-links": "^6.5.13",
      "@storybook/builder-vite": "^0.2.5",
      "@storybook/react": "^6.5.13",
      "@storybook/testing-library": "^0.0.13",
      "@types/node": "^18.11.9",
      "@types/react": "^18.0.22",
      "@types/react-dom": "^18.0.7",
      "@types/styled-components": "^5.1.26",
      "@vitejs/plugin-react": "^2.2.0",
      "babel-loader": "^8.2.5",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      storybook: "^6.5.13",
      "styled-components": "^5.3.6",
      typescript: "^4.6.4",
      vite: "^3.2.0",
      "vite-plugin-dts": "^1.6.6"
    };
    package_default = {
      name,
      private: private2,
      version,
      type,
      main,
      module,
      typings,
      exports,
      files,
      scripts,
      dependencies,
      peerDependencies,
      devDependencies
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/vite/dist/node/index.js";
import react from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import commonjs from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import resolve from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import json from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/@rollup/plugin-json/dist/es/index.js";
import dts from "file:///Users/seosolmin/Documents/2022/solgo-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var pkg = (init_package(), __toCommonJS(package_exports));
var extensions = [".js", ".jsx", ".ts", ".tsx"];
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib/"]
    })
  ],
  build: {
    lib: {
      entry: path.resolve("src", "index.ts"),
      name: "solgo-ui",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      plugins: [
        commonjs({ include: "node_modules/**" }),
        resolve({ extensions }),
        json()
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2Vvc29sbWluL0RvY3VtZW50cy8yMDIyL3NvbGdvLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2Vvc29sbWluL0RvY3VtZW50cy8yMDIyL3NvbGdvLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zZW9zb2xtaW4vRG9jdW1lbnRzLzIwMjIvc29sZ28tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmNvbnN0IHBrZyA9IHJlcXVpcmUoJy4vcGFja2FnZS5qc29uJyk7XG4vLyBjanMgXHVDNjc4XHVCRDgwIFx1QkFBOFx1QjRDOFx1Qzc0NCBlczZcdUI4NUMgXHVCQ0MwXHVENjU4XHVENTU4XHVDNUVDIFx1QzBBQ1x1QzZBOVx1RDU2MCBcdUMyMTggXHVDNzg4XHVBQzhDXHVENTc0XHVDOTBDXG5pbXBvcnQgY29tbW9uanMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnO1xuLy8gXHVCMTc4XHVCNERDIFx1QkFBOFx1QjRDOFx1QzVEMFx1QzExQyBcdUIyRTRcdUI5NzggXHVENjU1XHVDN0E1XHVDNzkwXHVCOTdDIFx1Qzc3RFx1QzVCNCBcdUM2MkMgXHVDMjE4IFx1Qzc4OFx1QUM4Q1x1RDU3NFx1QzkwQyBcdUM2QjBcdUI5QUNcdUFDMTlcdUM3NDBcdUFDQkRcdUM2QjAgVFNcdUI5N0MgXHVDMEFDXHVDNkE5XHVENTU4XHVCMkM4XHVBRTRDIGpzIFx1QkFBOFx1QjRDOFx1Qzc0NCBcdUMwQUNcdUM2QTlcdUQ1NThcdUI4MjRcdUFDRTBcdUQ1NThcdUJBNzQgXHVENTQ0XHVDNjk0XHVENTY4IFx1QURGQ1x1QjM3MCBcdUM2QjBcdUI5QUNcdUFDMDAgXHVDNEYwXHVCMjk0XHVBQzc0IFx1QjMwMFx1QkQ4MFx1QkQ4NCB0c1x1QzlDMCBcdUM1NEFcdUIwOTggXHVDMkY2XHVDNzRDXG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnO1xuLy8gLmpzb24gXHVEMzBDXHVDNzdDXHVDNzQ0IGVzbW9kdWxlXHVCODVDIFx1QkNDMFx1RDY1OFx1RDU3NFx1QzExQyBcdUMwQUNcdUM2QTlcdUQ1NjAgXHVDMjE4IFx1Qzc4OFx1QUM4QyBcdUQ1NzRcdUM5MERcdUIyQzhcdUIyRTQuXG5pbXBvcnQganNvbiBmcm9tICdAcm9sbHVwL3BsdWdpbi1qc29uJztcblxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxuY29uc3QgZXh0ZW5zaW9ucyA9IFsnLmpzJywgJy5qc3gnLCAnLnRzJywgJy50c3gnXTtcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ2xpYi8nXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoJ3NyYycsICdpbmRleC50cycpLFxuICAgICAgbmFtZTogJ3NvbGdvLXVpJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBleHRlcm5hbDogXHVCNzdDXHVDNzc0XHVCRTBDXHVCN0VDXHVCOUFDXHVDNUQwIFx1RDNFQ1x1RDU2OFx1RDU1OFx1QzlDMCBcdUM1NEFcdUM3NDQgXHVCNTE0XHVEMzlDXHVCMzU4XHVDMkRDXHVCOTdDIFx1QkE4NVx1QzJEQ1x1RDU3NFx1QzhGQ1x1QzEzOFx1QzY5NFxuICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyldLFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjb21tb25qcyh7IGluY2x1ZGU6ICdub2RlX21vZHVsZXMvKionIH0pLFxuICAgICAgICByZXNvbHZlKHsgZXh0ZW5zaW9ucyB9KSxcbiAgICAgICAganNvbigpLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwUyxTQUFTLG9CQUFvQjtBQUN2VSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBR2pCLE9BQU8sY0FBYztBQUVyQixPQUFPLGFBQWE7QUFFcEIsT0FBTyxVQUFVO0FBRWpCLE9BQU8sU0FBUztBQVJoQixJQUFNLE1BQU07QUFXWixJQUFNLGFBQWEsQ0FBQyxPQUFPLFFBQVEsT0FBTyxNQUFNO0FBQ2hELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxNQUFNO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ3JDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUViLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBSyxJQUFJLGdCQUFnQixDQUFDO0FBQUEsTUFDL0MsU0FBUztBQUFBLFFBQ1AsU0FBUyxFQUFFLFNBQVMsa0JBQWtCLENBQUM7QUFBQSxRQUN2QyxRQUFRLEVBQUUsV0FBVyxDQUFDO0FBQUEsUUFDdEIsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
