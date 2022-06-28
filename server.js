const dotenv=require('dotenv')
const app=require('./app')
const mongoose=require('mongoose');


dotenv.config({ path: './config.env'})

const DB=process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then( () =>console.log('DB connection successful!'));

const port=3000
app.listen(3000, () => {
    console.log(`Server running at port ${port}`);
})