import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const CreateOrder = async (req: Request, res: Response) => {
    try {
        const { table, status, products, createdAt } = req.body;

        const newOrder = await Order
            .create({
                table,
                status,
                products,
                createdAt
            });
        return res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).send(`Error on create a order: ${error}`);

    }
};
