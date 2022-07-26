const fs = require('fs')
const express = require('express')
const app = express();
const http = require('http')

const PORT = 5000;

app.get('/', (req, res) => {
    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    var filename = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
    var file = (`${filename}${".txt"}`);

    fs.writeFile(`./file/${file}`,time, (err)=> {
        if (err) { console.log(err) }
        else{
        console.log('file created')
        res.send(time)
        }
    })
})

app.get('/', (req, res) => {
    fs.readFile(`./file/${file}`, (err, data)=> {
        if (err) { console.log(err) }
        else {
            res.writeHead(200, { "content-Type": 'text/html' })
            res.end(data)
        }

    })
})


app.listen(PORT, () => console.log(`port is up in:${PORT}`))