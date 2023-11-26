// Hans Christian Hananto | XII RPL 3

const Siswa = require("../models/siswas");

module.exports = {
  // Menampilkan semua data siswa
  index: async (req, res) => {
    try {
      const siswas = await Siswa.find();
      if (siswas.length > 0) {
        res.status(200).json({
          status: true,
          data: siswas,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data masih kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ succes: false, error: error.message });
    }
  },

  // Menampilkan data siswa berdasarkan ID
  show: async (req, res) => {
    try {
      const siswas = await Siswa.findOne({ nis: req.params.id });
      res.json({
        status: true,
        data: siswas,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  // Menambahkan data siswa
  store: async (req, res) => {
    try {
      const siswas = await Siswa.create(req.body);
      res.status(200).json({
        status: true,
        data: siswas,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  // Memperbarui data siswa berdasarkan ID
  update: async (req, res) => {
    try {
      const siswas = await Siswa.findOneAndUpdate(
        { nis: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.json({
        status: true,
        data: siswas,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  // Menghapus data siswa berdasarkan ID
  delete: async (req, res) => {
    try {
      const deletedSiswa = await Siswa.findOneAndDelete({ nis: req.params.id });
      if (!deletedSiswa) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
};
