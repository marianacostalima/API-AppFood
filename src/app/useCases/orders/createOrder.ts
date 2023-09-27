// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' para interagir com os pedidos no banco de dados.
import { Order } from '../../models/Order';

// Função assíncrona que lida com a criação de um novo pedido.
export async function createOrder(req: Request, res: Response) {
    try {
        // Obtém os dados do pedido do corpo da solicitação (req.body).
        const { table, products } = req.body;

        // Cria uma nova instância de pedido usando o modelo 'Order' e os dados recebidos.
        const order = await Order.create({ table, products });

        // Retorna uma resposta com status 201 (Created) e o pedido criado em formato JSON.
        res.status(201).json(order);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
