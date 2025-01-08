import * as esbuild from "esbuild";
import { PurgeCSS } from "purgecss";
import { writeFile } from "fs/promises";

const purgecsss = {
  name: "purgecss-plugin",
  setup(build) {
    console.log('build ==>', build);
    build.onEnd(async () => {
      console.log('oooo')
      const files = await new PurgeCSS().purge({
        content: ["minify/index.html", "minify/main.js"],
        css: ["minify/style.css"],
        output: "dist",
      });
      await Promise.all([
        ...files.map(async ({ css, file }) => {
          await writeFile(file, css);
        }),
      ]);
      console.log("build ended port 8000");
    });
  },
};

await esbuild.context({
  entryPoints: ["minify/main.js", "minify/style.css"],
  outdir: "minify/dist",
  plugins: [purgecsss],
});

