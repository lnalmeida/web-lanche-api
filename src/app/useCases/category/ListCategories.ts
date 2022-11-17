import { Request, Response } from 'express';
import {Category} from '../../models/Category';
import { ICategory } from './ICategory';

export const ListCategories  =  async (req: Request, res: Response) => {
    try {
        const categories: ICategory[] = await Category.find();
        return res.status(201).json(categories);
    } catch (error) {
        res.status(500).send(`Error listing categories: ${error}`);
    }
};
