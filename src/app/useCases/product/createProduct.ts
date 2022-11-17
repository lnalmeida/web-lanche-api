import { Request, Response } from 'express';
import {Product} from '../../models/Product';

export const CreateProduct = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            price,
            ingredients,
            category
        } = req.body;

        const imagePath = req.file?.filename;

        const newProduct = await Product
            .create({
                name,
                description,
                imagePath,
                price: Number(price),
                ingredients: ingredients ? JSON.parse(ingredients) : [],
                category
            });
        return res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send(`Error on create a product: ${error}`);

    }
};
