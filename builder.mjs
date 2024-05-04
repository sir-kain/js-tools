import * as esbuild from 'esbuild'

const ctx = await esbuild.context({
  entryPoints: ['src/main.js', 'src/style.css'],
  minify: true,
  // sourcemap: true,
  outdir: 'dist',
})

await ctx.watch()