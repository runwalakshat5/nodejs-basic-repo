console.clear()
const express = require("express")
const app = express()


app.get("/", (req, res) =>{
    res.send('Welcome to Node API')
})

app.get("/student", (req, res) =>{
    res.send('Welcome to Student API')
})

app.get("/user", (req, res) => {
    res.send("Welcome to User API")
})

app.get("/users", (req, res) => {
    const userData = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
            }
    ]
    res.json(userData)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})