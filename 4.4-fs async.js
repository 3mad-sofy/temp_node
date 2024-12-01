const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} \n${second}`,
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('File written successfully!');
            }
        );
    });
});
