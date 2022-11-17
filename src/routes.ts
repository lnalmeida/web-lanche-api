import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'node:path';

import { CreateCategory } from './app/useCases/category/createCategory';
import { ListCategories } from './app/useCases/category/ListCategories';
import { CreateProduct } from './app/useCases/product/createProduct';
import { ListProducts } from './app/useCases/product/ListProducts';
import { ListProductsByCategory } from './app/useCases/category/ListProductsByCategory';
import { ListOrders } from './app/useCases/orders/ListOrders';
import { CreateOrder } from './app/useCases/orders/CreateOrder';
import { ChangeOrderStatus } from './app/useCases/orders/ChangeOrderStatus';
import { CancelOrder } from './app/useCases/orders/CancelOrder';
export const router = Router();

const uploadOptions = {
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
};

const upload = multer(uploadOptions);

//list categories
router.get('/categories', ListCategories);

//create category
router.post('/categories', CreateCategory);

//list products
router.get('/products', ListProducts);

//create product


router.post('/products', upload.single('image'),  CreateProduct);

//get products by category
router.get('/categories/:categoryId/products', ListProductsByCategory);

//list orders
router.get('/orders', ListOrders);

//create order
router.post('/orders', CreateOrder);

//change order status
router.patch('/orders/:orderId', ChangeOrderStatus);

//delete/cancel order
router.delete('/orders/:orderId', CancelOrder);

