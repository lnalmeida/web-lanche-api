import { Request, Response } from 'express';
import {Order} from '../../models/Order';

export const CancelOrder  =  async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        await Order.findByIdAndDelete(orderId);

        return res.status(204);
    } catch (error) {
        res.status(500).send(`Error listing Orders: ${error}`);
    }
};
