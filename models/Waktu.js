import mongoose from 'mongoose'

const Waktu = mongoose.model('waktu', {
    bulan: {
        type: String,
        required: true,
    },
    tahun: {
        type: Number,
        required: true
    },
});

export default Waktu