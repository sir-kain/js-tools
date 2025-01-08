import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["minify/main.js", "minify/style.css"],
  minify: true,
  sourcemap: false,
  outdir: "minify/dist",
});

await ctx.serve({
  servedir: "minify",
});

await ctx.watch();
