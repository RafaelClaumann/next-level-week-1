import { Request, Response } from 'express'
import connection from '../database/connection'

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    }

    const trx = await connection.transaction()
    try {
      const insertedIds = await trx('points').insert(point)
      const point_id = insertedIds[0]
      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id
        }
      })
      await trx('point_item').insert(pointItems)
      await trx.commit()
      return response.json({ id: point_id, ...point })
    } catch (error) {
      await trx.rollback()
      return response.json(error)
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const point = await connection('points').where('id', id).first()

    if (!point) {
      return response.status(400).json({ message: 'point not found' })
    }

    const items = await connection('items')
      .join('point_item', 'items.id', '=', 'point_item.item_id')
      .where('point_item.point_id', '=', id)
      .select('items.title')

    return response.json({ point, items })
  }

  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query
    const parsedItems = String(items).split(',').map(item => Number(item.trim()))

    const points = await connection.raw(`
      SELECT DISTINCT *
      FROM points p
      JOIN point_item pi ON p.id = pi.point_id
      WHERE p.city = '${city}' AND p.uf = '${uf}' AND pi.item_id in (${parsedItems})`
    )
    
    return response.json(points)
  }
}

export default PointsController
