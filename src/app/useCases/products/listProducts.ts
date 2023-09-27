// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' para interagir com os produtos no banco de dados.
import { Product } from '../../models/Product';

// Função assíncrona que lida com a obtenção da lista de produtos.
export async function listProducts(req: Request, res: Response) {
    try {
        // Obtém a lista de produtos do banco de dados usando o método 'find'.
        const products = await Product.find();

        // Retorna a lista de produtos em formato JSON como resposta.
        res.json(products);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
