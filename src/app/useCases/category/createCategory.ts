import { Request, Response } from 'express';
import {Category} from '../../models/Category';

import { ICategory } from './ICategory';

export const CreateCategory  =  async (req: Request, res: Response) => {
    try {
        const { name, icon } = req.body;

        const newCategory: ICategory = await Category
            .create({
                name,
                icon
            });

        return res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).send(`Error on create a category: ${error}`);
    }

};
