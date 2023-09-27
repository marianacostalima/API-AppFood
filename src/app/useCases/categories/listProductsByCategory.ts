// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' para interagir com os produtos no banco de dados.
import { Product } from '../../models/Product';

// Função assíncrona que lida com a obtenção da lista de produtos de uma categoria.
export async function listProductsByCategory(req: Request, res: Response) {
    try {
        // Obtém o parâmetro 'categoryId' da URL da solicitação.
        const { categoryId } = req.params;

        // Usa o método 'find' para obter os produtos cujo campo 'category' corresponde ao 'categoryId' fornecido.
        const products = await Product.find().where('category').equals(categoryId);

        // Retorna a lista de produtos em formato JSON como resposta.
        res.json(products);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
