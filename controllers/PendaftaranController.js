import Pendaftaran from "../models/Pendaftaran.js"

export const getPendaftaran = async(req, res) => {
    try {
        const response = await Pendaftaran.find()
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const getPendaftaranByNo = async(req, res) => {
    try {
        const response = await Pendaftaran.findOne({"nomor_anggota": req.params.no})
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const createPendaftaran = async(req, res) => {
    try {
        await new Pendaftaran({
            nomor_anggota: req.body.nomor_anggota,
            nama_pemohon: req.body.nama_pemohon,
            jumlah_anggota: req.body.jumlah_anggota,
            waktu_pendaftaran: new Date()
        }).save()
        res.status(201).json({msg: "Pendaftaran Created"})
    } catch (e) {
        console.log(e.message)
    }
}

export const updatePendaftaran = async(req, res) => {
    try {
        await Pendaftaran.updateOne(
            {nomor_anggota: req.params.no}, 
            {
                jumlah_anggota: req.body.jumlah_anggota,
            })
        res.status(201).json({msg: "Pendaftaran Updated"})
    } catch (e) {
        console.log(e.message)
    }
}