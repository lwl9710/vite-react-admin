import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 解析路径为绝对路径
function resolvePath(dirname: string): string {
  return resolve(process.cwd(), dirname);
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    resolve: {
      alias: {
        "@": resolvePath("src"),
        "@utils": resolvePath("src/utils"),
        "@views": resolvePath("src/views"),
        "@assets": resolvePath("src/assets")
      }
    },
    server: {
      open: false,
      host: "0.0.0.0",
      proxy: {
        "/dev-api": {
          ws: true,
          changeOrigin: true,
          target: "https://www.baidu.com",
          rewrite: path => path.replace("/dev-api", "")
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@assets/styles/mixin.scss\";"
        }
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "js/[name].[hash].bundle.js",
          chunkFileNames: ({ moduleIds }) => {
            const chunkFileName = moduleIds[moduleIds.length - 1];
            if(!chunkFileName.includes("/node_modules/") && /(index)\.[^.]+$/i.test(chunkFileName)) {
              const chhunkFilePaths = chunkFileName.split("/");
              let name = chhunkFilePaths[chhunkFilePaths.length - 2];
              name = name[0].toLowerCase() + name.substring(1).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
              return `js/${name}.[hash].chunk.js`;
            } else {
              return "js/[name].[hash].chunk.js";
            }
          },
          assetFileNames({ name }) {
            if(/\.(jpe?g|png|gif|webp)$/i.test(name)) {
              return "imgs/[name].[hash].[ext]";
            }
            if(/\.svg$/i.test(name)) {
              return "svg/[name].[hash].[ext]";
            }
            if(/\.(woff|woff2|eot|ttf|otf)$/i.test(name)) {
              return "fonts/[name].[hash].[ext]";
            }
            if(/\.css$/i.test(name)) {
              return "css/[hash].[ext]";
            }
            return "assets/[name].[hash].[ext]";
          },
          manualChunks: (filePath) => {
            if(/[\\/]node_modules[\\/]/i.test(filePath)) {
              if(/[\\/]node_modules[\\/](antd|@ant-design|@?rc-[^\\/]+?)[\\/]/i.test(filePath)) {
                return "antd";
              }
              if(/[\\/]node_modules[\\/]zustand[\\/]/i.test(filePath)) {
                return "zustand";
              }
              if(/[\\/]node_modules[\\/]react[\\/]/i.test(filePath)) {
                return "react";
              }
              if(/[\\/]node_modules[\\/]react-dom[\\/]/i.test(filePath)) {
                return "react-dom";
              }
              if(/[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/i.test(filePath)) {
                return "react-router";
              }
              /* 其他依赖处理 */
              return "vendor";
            }
          }
        }
      }
    }
  }
})