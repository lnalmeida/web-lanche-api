import { Schema } from 'mongoose';

type  OrderProduct =  {
    product: Schema.Types.ObjectId;
    quantity: number;
}

export interface IOrder {
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    createdAt: Date;
    products: OrderProduct[];
}
