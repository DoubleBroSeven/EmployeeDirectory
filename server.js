const express = require("express");
const employees = require("./employees");
app = express();

const PORT=3000

app.get("/", (req, res) => {
  res.send('Hello Employees')
})

app.get("/employees", (req, res)=>{
  res.json(employees)
})

app.get("/employees/random", (req, res) => {
  const  i = Math.floor(Math.random() * employees.length);
  if (i < 0 || i >= employees.length) {
    console.log(`employee not found`)
  } else {
    res.json(employees[i]);
    
  }
})

app.get("/employees/:id", (req, res) => {
  let { id } = req.params
  if (id < 0 || id >= employees.length) {
    console.log('Employee Not Found')
  } else {
    res.json(employees[id])
  }
})

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})