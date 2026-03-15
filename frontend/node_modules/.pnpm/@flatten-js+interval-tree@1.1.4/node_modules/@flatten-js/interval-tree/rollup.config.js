export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/main.cjs',
            format: 'cjs',
            exports: 'named'
        },
        {
            file: 'dist/main.mjs',
            format: 'esm',
            exports: 'named'
        },
        {
            file: 'dist/main.umd.js',
            format: 'umd',
            exports: 'named',
            name: '@flatten-js/interval-tree'
        }
    ]
};
