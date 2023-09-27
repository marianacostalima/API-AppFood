// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Category' para interagir com as categorias no banco de dados.
import { Category } from '../../models/Category';

// Função assíncrona que lida com a obtenção da lista de categorias.
export async function listCategories(req: Request, res: Response) {
    try {
        // Obtém a lista de categorias do banco de dados usando o método 'find'.
        const categories = await Category.find();

        // Retorna a lista de categorias em formato JSON como resposta.
        res.json(categories);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
