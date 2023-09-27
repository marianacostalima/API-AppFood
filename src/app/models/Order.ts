//criar um modelo de dados.
import {model, Schema } from 'mongoose';
// Define o modelo de dados 'Order'
export const Order = model('Order', new Schema({
	// Campo 'table' para representar a mesa associada ao pedido.
	table: {
		type: String,     // O tipo do campo string.
        required: true    // É obrigatório ter um valor para esse campo.
	},
	// Campo 'status' para representar o status do pedido.
	status: {
		type: String,    // O tipo do campo string.
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',   // Define o valor padrão como 'WAITING'
	},
	// Campo 'createdAt' para representar a data de criação do pedido.
	creatdAt: {
		type: Date,       // O tipo do campo data.
        default: Date.now // Define o valor padrão como a data atual.
	},
	// Campo 'products' para representar os produtos associados ao pedido.
	products: {
		required: true,   // É obrigatório ter um valor para esse campo.
		type:[{
			product: {
				type: Schema.Types.ObjectId, // O tipo do campo é um ObjectId referenciando o modelo 'Product'.
                required: true,              // É obrigatório ter um valor para esse campo.
                ref: 'Product'               // Referência ao modelo 'Product'.
			},
			quantity: {
				type: Number,   // O tipo do campo é número.
                default: 1      // Define o valor padrão como 1.
			},
		}],
	},
}));
