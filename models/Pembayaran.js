import mongoose from 'mongoose'

const Pembayaran = mongoose.model('daftar pembayaran', {
    nik: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    bulan: {
        type: String,
        required: true
    },
    tahun: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

export default Pembayaran