import Pembayaran from "../models/Pembayaran.js"
import Anggota from "../models/Anggota.js"

export const getPembayaran = async (req, res) => {
    try {
        const response = await Pembayaran.find()
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const getPembayaranByBulanTahun = async (req, res) => {
    try {
        const response = await Pembayaran.find({
            "bulan": req.params.bulan,
            "tahun": req.params.tahun,
        })
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const createPembayaran = async (req, res) => {
    try {
        const pembayaran = await Pembayaran.find(
            {bulan: req.body.bulan,
            tahun: req.body.tahun}
            )

        if (pembayaran.length === 0) {
            const allAnggota = await Anggota.find()
            allAnggota.forEach(async (anggota) => {
                anggota.lama_nunggak = anggota.lama_nunggak + 1
                if (anggota.lama_nunggak === 4) {
                    anggota.status = 'TIDAK AKTIF'
                }
                anggota.save()
    
                await new Pembayaran({
                    nik: anggota.nik,
                    nama: anggota.nama,
                    bulan: req.body.bulan,
                    tahun: req.body.tahun,
                    status: 'TIDAK BAYAR'
                }).save()
            });
            res.status(201).json({ msg: "Pembayaran Created" })
        } else {
            res.status(201).json({ msg: "Pembayaran Not Created" })
        }

    } catch (e) {
        console.log(e.message)
    }
}

export const updatePembayaran = async (req, res) => {
    try {
        req.body.nikBayar.forEach(async (nik) => {
            const anggota = await Anggota.findOne({nik: nik})
            anggota.lama_nunggak = anggota.lama_nunggak - 1
            if (anggota.lama_nunggak === 3) {
                anggota.status = 'AKTIF'
            }
            anggota.save()

            await Pembayaran.updateOne(
                {
                nik: nik,
                bulan: req.body.bulan,
                tahun: req.body.tahun,
            }, {status: 'BAYAR'}
            )
        })

        req.body.nikBayar.forEach(async (nik) => {
            const anggota = await Anggota.findOne({nik: nik})
            anggota.lama_nunggak = anggota.lama_nunggak + 1
            if (anggota.lama_nunggak === 4) {
                anggota.status = 'TIDAK AKTIF'
            }
            anggota.save()

            await Pembayaran.updateOne(
                {
                nik: nik,
                bulan: req.body.bulan,
                tahun: req.body.tahun,
            }, {status: 'TIDAK BAYAR'}
            )
        })
        res.status(201).json({ msg: "Pembayaran Updated" })
    } catch (e) {
        console.log(e.message)
    }
}