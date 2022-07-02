import Waktu from '../models/Waktu.js'

export const getWaktu = async(req, res) => {
    try {
        const response = await Waktu.find()
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const getLastWaktu = async(req, res) => {
    try {
        const response = await Waktu.find()
        res.status(200).json(response[response.length - 1])
    } catch (e) {
        console.log(e.message)
    }
}

export const createWaktu = async(req, res) => {
    try {
        const response = await Waktu.findOne(
            {
                bulan: req.body.bulan,
                tahun: req.body.tahun
            })
        if (response === null) {
            await new Waktu({
                bulan: req.body.bulan,
                tahun: req.body.tahun
            }).save()
            res.status(201).json({msg: "Waktu Created"})
        } else {
            res.status(201).json({msg: "Waktu Not Created"})
        }
    } catch (e) {
        console.log(e.message)
    }
}