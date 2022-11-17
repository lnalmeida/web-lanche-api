import { Request, Response } from 'express';
import {Order} from '../../models/Order';

export const ChangeOrderStatus  =  async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const validStatus = ['WAITING', 'IN_PRODUCTION', 'DONE'];

        if(validStatus.includes(status)) {
            await Order.findByIdAndUpdate(orderId, {status});
            return res.status(204);
        }

        return res.status(400).send('Status must be WAITING, IN_PRODUCTION or DONE');

    } catch (error) {
        res.status(500).send(`Error listing Orders: ${error}`);
    }
};
