const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
// const port = 4000;
// const hostname = "127.0.0.1:27017";

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const studentSchema = new mongoose.Schema({
  name: String,
  sapid: Number,
  marks: Number,
});

const student = new mongoose.model("student", studentSchema);
//CREATION

// student
//   .create({ name: "Harsh", sapid: 99, marks: 69 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "Nutan", sapid: 50, marks: 22 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));
// student
//   .create({ name: "pooja", sapid: 70, marks: 30 })
//   .then(() => console.log("student created"))
//   .catch((err) => console.log(err));

//UPDATION    //if multiple name then updateOne=updateMany

// student
//   .updateOne({ name: "pooja" }, { sapid: 56 })
//   .then(() => console.log("updated"))
//   .catch((err) => console.log(err));

//FIND     //andheri find
// more than one find= find()

// student
//   .findOne({ name: "Harsh" })
//   .then((found_item) => console.log(found_item))
//   .catch((err) => console.log(err));

//DELETION          //deleteMany

// student
//   .deleteOne({ name: "Harsh" })
//   .then(() => console.log("deleted"))
//   .catch((err) => console.log(err));

//---------------Q1

app.get("/student", async function (req, res) {
  const data = await student.find({ marks: { $gte: 30, $lte: 70 } });
  console.log(data);
  res.send("<h1></h1>" + data);
});

app.listen(4000, function (err) {
  if (err) console.log(err);
  else console.log("listening");
});

// app.listen(port, hostname, (err) => {
//   if (err) console.log(err);
//   else console.log(`Server running at http://${hostname}:${port}/student`);
// });

//Q) FINDING
// student
//   .find({ marks: { $lte: 30 } })
//   .then((found_item) => console.log(found_item))
//   .catch((err) => console.log(err));

// student
//   .find() //finding all items
//   .then((found_items) => console.log(found_items))
//   .catch((err) => console.log(err));

// student
//   .findOne() //finding all items
//   .then((found_items) => console.log(found_items))
//   .catch((err) => console.log(err));
