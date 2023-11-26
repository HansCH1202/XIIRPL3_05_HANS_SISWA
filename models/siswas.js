// Hans Christian Hananto | XII RPL 3
const mongoose = require("mongoose");

const siswaSchema = new mongoose.Schema({
  namaLengkap: {
    type: "string",
    required: [true, "Silahkan isi nama kamu"],
  },
  kelas: {
    type: "string",
    required: [true, "Silahkan isi kelas kamu"],
  },
  absen: {
    type: "number",
    required: [true, "Silahkan isi absen kamu"],
  },
  nis: {
    type: "string",
    required: [true, "Silahkan isi nis kamu"],
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Silahkan isi email kamu",
    ],
  },
});

module.exports = mongoose.model("Siswa", siswaSchema);
