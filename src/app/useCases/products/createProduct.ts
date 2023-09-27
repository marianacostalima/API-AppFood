// Importa os tipos 'Request' e 'Response' do Express para lidar com solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' para interagir com os produtos no banco de dados.
import { Product } from '../../models/Product';

// Função assíncrona que lida com a criação de um novo produto.
export async function createProduct(req: Request, res: Response) {
    try {
        // Obtém o caminho da imagem do produto a partir do arquivo enviado na solicitação (req.file).
        const imagePath = req.file?.filename;

        // Obtém os demais dados do produto do corpo da solicitação (req.body).
        const { name, description, price, category, ingredients } = req.body;

        // Cria uma nova instância de produto usando o modelo 'Product' e os dados recebidos.
        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price), // Converte o preço para um número.
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [], // Converte os ingredientes de uma string JSON para um array, se fornecidos.
        });

        // Retorna uma resposta com status 201 (Created) e o produto criado em formato JSON.
        res.status(201).json(product);
    } catch (error) {
        // Em caso de erro, registra o erro no console e envia uma resposta com status 500 (Internal Server Error).
        console.log(error);
        res.sendStatus(500);
    }
}
