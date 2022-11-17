import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { IProduct } from '../product/IProduct';

export const ListProductsByCategory  =  async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find()
                                            .where('category')
                                            .equals(categoryId);
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).send(`Error listing products: ${error}`);
    }
};
