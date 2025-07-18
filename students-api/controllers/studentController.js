const { ObjectId } = require("mongodb");
const { collection } = require("../db");

// ! Displaying Info
exports.getStudents = async (req, res) => {
  const students = await collection().find({}).toArray();
  res.json(students);
};

// ! Create new entry
exports.addStudent = async (req, res) => {
  const data = {
    name: "Neha",
    age: 23,
    city: "Machhe",
  };
  await collection().insertOne(data);
  res.json({ message: "🎉 Student added successfully", data });
};

// ! Updating data
exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  const updateData = {
    city: "Belgaum",
  };

  const result = await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );

  res.json({
    message: "Student updated",
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  });
};

// ! Deleting data
exports.deleteStudent = async (req, res) => {
  const id = req.params.id;

  const result = await collection().deleteOne({ _id: new ObjectId(id) });

  res.json({
    message: "Student deleted",
    deletedCount: result.deletedCount,
  });
};
