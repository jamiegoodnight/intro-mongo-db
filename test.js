const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

const student = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    favFoods: [{ type: String }],
    info: {
      school: {
        type: String
      },
      shoeSize: {
        type: Number
      }
    }
  },
  { timestamps: true }
);

const Student = mongoose.model("student", student);

connect()
  .then(async connection => {
    const student = await Student.create({ firstName: "Brandon" });
    const found = await Student.find({ firstName: "Brand" });
    const foundById = await Student.findById("someid");
    const updated = await Student.findByIdAndUpdate("saas", {
      update: "Stuff here"
    });
    console.log(student);
    console.log(found);
  })
  .catch(err => {
    console.error(err);
  });
