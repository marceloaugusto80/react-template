import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [reactPlugin(), tsconfigPaths()],
  };
});
