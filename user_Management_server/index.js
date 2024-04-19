const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json()) 
const users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bobjohnson@example.com"
    },
    {
      "id": 4,
      "name": "Samantha Williams",
      "email": "samanthawilliams@example.com"
    },
    {
      "id": 5,
      "name": "Michael Brown",
      "email": "michaelbrown@example.com"
    },
    {
      "id": 6,
      "name": "Emily Davis",
      "email": "emilydavis@example.com"
    },
    {
      "id": 7,
      "name": "David Wilson",
      "email": "davidwilson@example.com"
    },
    {
      "id": 8,
      "name": "Sarah Anderson",
      "email": "sarahanderson@example.com"
    },
    {
      "id": 9,
      "name": "Christopher Taylor",
      "email": "christophertaylor@example.com"
    },
    {
      "id": 10,
      "name": "Jessica Thomas",
      "email": "jessicathomas@example.com"
    }
  ]

app.get('/', (req, res) => {
  res.send('User management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
  console.log(`Post api hitting`);
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser)
  res.send(newUser)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})