const path = require('path');

module.exports = {
    target: 'node',
    entry: './jss-nextjs-server/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'distwebpack'),
    },
};