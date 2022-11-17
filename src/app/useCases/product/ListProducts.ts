import { Request, Response } from 'express';
import {Product} from '../../models/Product';
import { IProduct } from './IProduct';

export const ListProducts  =  async (req: Request, res: Response) => {
    try {
        const products: IProduct[] = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).send(`Error listing products: ${error}`);
    }
};
