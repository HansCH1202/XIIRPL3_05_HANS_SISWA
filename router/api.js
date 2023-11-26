// Hans Christian Hananto | XII RPL 3
const express = require("express");
const router = express.Router();

const siswaController = require("../controllers/controller");

router.get("/siswas", siswaController.index); // melihat semua data siswa

router.get("/siswa/:id", siswaController.show); // melihat siswa tertentu berdasarkan ID

router.post("/siswa", siswaController.store); // membuat data baru

router.put("/siswa/:id", siswaController.update); // memperbarui data siswa berdasarkan ID

router.delete("/siswa/:id", siswaController.delete); // menghapus data

module.exports = router;
