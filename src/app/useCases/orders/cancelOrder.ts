// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' para interagir com os pedidos no banco de dados.
import { Order } from '../../models/Order';

// Função assíncrona que lida com o cancelamento de um pedido.
export async function cancelOrder(req: Request, res: Response) {
    try {
        // Obtém o parâmetro 'orderId' da URL da solicitação.
        const { orderId } = req.params;

        // Usa o método 'findByIdAndDelete' do modelo 'Order' para encontrar e excluir o pedido com o ID especificado.
        await Order.findByIdAndDelete(orderId);

        // Retorna uma resposta com status 204 (No Content) para indicar que o pedido foi cancelado com sucesso.
        res.sendStatus(204);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
