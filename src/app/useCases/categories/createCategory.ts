// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Category' para interagir com as categorias no banco de dados.
import { Category } from '../../models/Category';

// Função assíncrona que lida com a criação de uma nova categoria.
export async function createCategory(req: Request, res: Response) {
    try {
        // Obtém os dados da categoria do corpo da solicitação.
        const { icon, name } = req.body;

        // Cria uma nova instância de categoria usando o modelo 'Category' e os dados recebidos.
        const category = await Category.create({ icon, name });

        // Retorna uma resposta com status e a categoria criada em formato JSON.
        res.status(201).json(category);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
