import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['lamsalcn.ts'],
    bundle: true,
    outfile: 'lamsalcn.js',
    format: 'esm',
    platform: 'node',
    banner: {
        js: `
    import { createRequire } from 'module';
    const require = createRequire(import.meta.url);
  `
    }
});
