import Anggota from '../models/Anggota.js'

export const getAnggota = async(req, res) => {
    try {
        const response = await Anggota.find()
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const getAnggotaByNik = async(req, res) => {
    try {
        const response = await Anggota.findOne({"nik": req.params.nik})
        res.status(200).json(response)
    } catch (e) {
        console.log(e.message)
    }
}

export const createAnggota = async(req, res) => {
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        await new Anggota({
            nomor_anggota: req.body.nomor_anggota,
            nik: req.body.nik,
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            golongan_darah: req.body.golongan_darah,
            tempat_lahir: req.body.tempat_lahir,
            tanggal_lahir: req.body.tanggal_lahir,
            pekerjaan: req.body.pekerjaan,
            alamat: req.body.alamat,
            lama_nunggak: 0,
            status: 'AKTIF',
            foto_profile: filesArray[0],
            foto_ktp: filesArray[1]
        }).save()
        res.status(201).json({msg: "User Created"})
    } catch (e) {
        console.log(e.message)
    }
}

export const updateAnggota = async(req, res) => {
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        await Anggota.updateOne(
            {nik: req.params.nik}, 
            {
                jenis_kelamin: req.body.jenis_kelamin,
                golongan_darah: req.body.golongan_darah,
                tempat_lahir: req.body.tempat_lahir,
                tanggal_lahir: req.body.tanggal_lahir,
                pekerjaan: req.body.pekerjaan,
                alamat: req.body.alamat,
                foto_profile: filesArray[0],
                foto_ktp: filesArray[1]
            })
        res.status(201).json({msg: "User Updated"})
    } catch (e) {
        console.log(e.message)
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
}