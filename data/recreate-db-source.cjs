const fs = require('fs');

fs.copyFile('./games-data.json', './db.json', (err) => {
    if (err) throw err;
});