const {BasketDevice, Device} = require('../models/models')

const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
        // const {device_id} = req.body
        // const {user_id}=req.body
        console.log(req.body)
        const basket = await BasketDevice.create({
            user_id: req.body['user_id'],
            device_id: req.body['device_id']
        })
        
        return res.json(basket)
    }

    async getOne(req, res) {
        const {id} = req.body
        const device = await Device.findOne(
            {
                where: {id: id},
            },
        )
        return res.json(device)
    }

    async getAll(req, res) {
        try {
          const baskets = await BasketDevice.findAll({ user_id: 1 })
          res.status(200).json(baskets)
        } catch (err) {
          res.status(500).json(err)
        }
    }

    async delete(req, res) {
        // { "id": <номер id который ты нажимаешь для удаления>}
        try {
            await BasketDevice.deleteOne({id: id})
            res.status(204)
        } catch (err) {
            res.status(500).json(err)
        }
    }
   

}

module.exports = new BasketController()