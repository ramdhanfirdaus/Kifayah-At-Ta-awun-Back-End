import mongoose from 'mongoose'

const Anggota = mongoose.model('anggota', {
    nomor_anggota: {
        type: Number,
        required: true,
    },
    nik: {
        type: String,
        required: true,
        unique: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis_kelamin: {
        type: String,
        required: true
    },
    golongan_darah: {
        type: String,
        required: true
    },
    tempat_lahir: {
        type: String,
        required: true
    },
    tanggal_lahir: {
        type: Date,
        required: true
    },
    pekerjaan: {
        type: String
    },
    alamat: {
        type: String,
        required: true
    },
    lama_nunggak: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    foto_ktp: {
        type: Object,
        required: true
    },
    foto_profile: {
        type: Object,
        required: true
    }
});

export default Anggota