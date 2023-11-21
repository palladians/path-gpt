import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "./dist",
  format: "cjs" as any,
  sourcemap: true,
  clean: true,
  bundle: true,
  noExternal: ["fs-extra", "globby"],
  platform: "node",
});
