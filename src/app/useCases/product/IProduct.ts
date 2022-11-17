import {Schema} from 'mongoose';

export interface IProduct {
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: string[];
    category: Schema.Types.ObjectId;
}
