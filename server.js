const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use((express.static("frontend")))

app.listen(PORT, function (){
    console.log("server is running at http://localhost:" + PORT)
})