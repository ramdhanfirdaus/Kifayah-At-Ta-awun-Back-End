import mongoose from 'mongoose'

const Pendaftaran = mongoose.model('daftar pendaftaran', {
    nomor_anggota: {
        type: Number,
        required: true,
        unique: true
    },
    nama_pemohon: {
        type: String,
        required: true
    },
    jumlah_anggota: {
        type: Number,
        required: true
    },
    waktu_pendaftaran: {
        type: Date,
        required: true
    },
});

export default Pendaftaran