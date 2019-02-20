const { readdir, readFile } = require('fs');
const { dirname } = require('path');

const d = dirname(require.main.filename);

readdir(d, (err, filenames) => {
    if (err) { console.log('bad'); process.exit(1) };
    filenames.forEach(filename => {
        readFile(filename, (err2, r2) => {
            console.log(String(r2));
        })
    }); // массив r доступен здесь, а не снаружи
});
