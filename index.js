const { readdir, readFile } = require('fs').promises;
const { dirname } = require('path');

const d = dirname(require.main.filename);

readdir(d)
.then(filenames => {
    filenames.forEach(filename => {
        readFile(filename)
        .then(text => console.log(String(text)))
    });
});
