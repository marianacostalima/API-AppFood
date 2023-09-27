//criar um modelo de dados.
import {model, Schema } from 'mongoose';
// Define o modelo de dados 'Product'
export const Product = model('Product', new Schema({
	// Campo 'name' para representar o nome do produto.
	name: {
		type: String,     // O tipo do campo é string.
        required: true    // É obrigatório ter um valor para esse campo.
	},
	// Campo 'description' para representar a descrição do produto.
	description: {
		type: String,     // O tipo do campo é uma string.
        required: true    // É obrigatório ter um valor para esse campo.
	},
	// Campo 'imagePath' para representar o caminho da imagem do produto.
	imagePath: {
		type: String,     // O tipo do campo é uma string.
        required: true    // É obrigatório ter um valor para esse campo.
	},
	// Campo 'price' para representar o preço do produto.
	price: {
		type: Number,     // O tipo do campo é um número.
        required: true    // É obrigatório ter um valor para esse campo.
	},
	// Campo 'ingredients' para representar os ingredientes do produto.
	ingredients: {
		required: true,   // É obrigatório ter um valor para esse campo.
		type:[{
			name: {
				type: String,     // O tipo do campo é string.
                required: true    // É obrigatório ter um valor para esse campo.
			},
			icon: {
				type: String,     // O tipo do campo é uma string.
                required: true    // É obrigatório ter um valor para esse campo.
			},
		}],
	},
	// Campo 'category' para representar a categoria do produto.
	category: {
		type: Schema.Types.ObjectId, // O tipo do campo é um ObjectId referenciando o modelo 'Category'.
        required: true,              // É obrigatório ter um valor para esse campo.
        ref: 'Category'              // Referência ao modelo 'Category'.
	},
}));
