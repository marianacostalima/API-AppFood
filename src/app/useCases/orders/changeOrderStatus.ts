// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' para interagir com os pedidos no banco de dados.
import { Order } from '../../models/Order';

// Função assíncrona que lida com a alteração do status de um pedido.
export async function changeOrderStatus(req: Request, res: Response) {
    try {
        // Obtém o parâmetro 'orderId' da URL da solicitação.
        const { orderId } = req.params;

        // Obtém o novo status do pedido do corpo da solicitação (req.body).
        const { status } = req.body;

        // Verifica se o novo status está entre as opções permitidas ('WAITING', 'IN_PRODUCTION', 'DONE').
        if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json({
                error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
            });
        }

        // Usa o método 'findByIdAndUpdate' do modelo 'Order' para encontrar o pedido pelo ID e atualizar seu status.
        await Order.findByIdAndUpdate(orderId, { status });

        // Retorna uma resposta com status 204 (No Content) para indicar que o status do pedido foi alterado com sucesso.
        res.sendStatus(204);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
