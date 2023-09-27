// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' para interagir com os pedidos no banco de dados.
import { Order } from '../../models/Order';

// Função assíncrona que lida com a obtenção da lista de pedidos.
export async function listOrders(req: Request, res: Response) {
    try {
        // Obtém a lista de pedidos do banco de dados usando o método 'find'.
        const orders = await Order.find()
            .sort({ createdAt: 1 }) // Ordena os pedidos por data de criação ascendente.
            .populate('products.product'); // Popula os detalhes dos produtos associados aos pedidos.

        // Retorna a lista de pedidos em formato JSON como resposta.
        res.json(orders);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
