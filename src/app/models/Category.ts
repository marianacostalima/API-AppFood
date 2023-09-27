//criar um modelo de dados.
import {model, Schema } from 'mongoose';
// Define o modelo de dados 'Category'
export const Category = model('Category', new Schema({
	// Define os campos da categoria.
	name: {
		type: String,     // O tipo do campo string.
		required: true,   // É obrigatório ter um valor para esse campo.
	},
	icon: {
		type: String,     // O tipo do campo string.
		required: true,   // É obrigatório ter um valor para esse campo.
	}
}));
