// Importa os módulos necessários
import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
export const router = Router(); // Cria uma instância do Router do Express para gerenciar as rotas locais dos arquivos depois de inicializar o servidor

//configuração do multer
// Configuração do Multer para manipulação de uploads de arquivos.
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
			//nome do arquivo igual a data atual + o nome do arquivo
		},
	})

});
// Rotas da aplicação:
//List categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);

//Create products com upload de imagem
router.post('/products', upload.single('image'), createProduct);

//Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

//List orders
router.get('/orders', listOrders);

//Create orders
router.post('/orders', createOrder);

//Change orders status/ patch e nao put por ser uma alteração parcial
router.patch('/orders/:orderId', changeOrderStatus);

//Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
