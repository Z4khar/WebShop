require('dotenv').config() // для считывания .env
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models') //    импорт моделей
const cors = require('cors') 
const fileUpload = require('express-fileupload')
const router = require('./routes/index') // импорт роутера
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000 

const app = express() // объект запуска приложения 
app.use(cors()) // отправка запросов с браузера 
app.use(express.json()) // для парсинга json формата 
app.use(express.static(path.resolve(__dirname, 'static'))) // указываем серверу на статику
app.use(fileUpload({}))
app.use('/api', router) // вызов роутера 

// Обработка ошибок, последний Middleware
app.use(errorHandler)

// подключение к БД
const start = async () => {
    try {
        await sequelize.authenticate() // функция подключения
        await sequelize.sync() // сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // прослушивание порта
    } catch (e) {
        console.log(e)
    }
}


start()
