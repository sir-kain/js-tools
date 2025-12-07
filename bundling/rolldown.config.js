import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'bundling/src/main.js',
  output: {
    dir: 'bundling/dist',
  },
});
