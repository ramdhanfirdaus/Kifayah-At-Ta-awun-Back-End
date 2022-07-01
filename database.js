import mongoose from 'mongoose'

const CONNECTION_URL = 'mongodb://ramdhan29:ramdhan29@cluster0-shard-00-00.ykiy5.mongodb.net:27017,cluster0-shard-00-01.ykiy5.mongodb.net:27017,cluster0-shard-00-02.ykiy5.mongodb.net:27017/?ssl=true&replicaSet=atlas-7n4kh0-shard-0&authSource=admin&retryWrites=true&w=majority'

module.exports = () => {
    mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Connected to Mongodb.....`)))
    .catch((error) => console.log(error.message))
}