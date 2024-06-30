const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Login');

  console.log('connected successfully');
  
}

module.exports = main;