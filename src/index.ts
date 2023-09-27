import path from 'node:path';   //manipulação de caminhos de arquivos
import express from 'express';  //criar um servidor web 
import mongoose from 'mongoose';  //se conectar ao MongoDB

import { router } from './router';

//configura o servidor express e faz a conexao com o banco de dados

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express(); // Cria uma instância do servidor Express.
		const port = 3000;   // Define a porta em que o servidor irá escutar.

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));  // Define uma rota '/uploads' para servir arquivos estáticos a partir de um diretório.
		app.use(express.json()); //o servidor Express compreenda solicitações com formato JSON
		app.use(router); //gerenciar as rotas da aplicação
		
		//teclado de emotion tecla win+.
		//inicia o servidor na porta especificada e as rotas
		app.listen(port, () => {
			//servidor inicializado
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	// Trata erros caso falhe.
	.catch(() => console.log('Erro ao conectar no mongoDb'));
