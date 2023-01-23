import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from 'routes/index'

let app = express()
let port = process.env.PORT || 4250

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/', routes)

database.on('connected', () => {
    console.clear()
    console.log("Connection to MongoDB: Successful")
    application.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})