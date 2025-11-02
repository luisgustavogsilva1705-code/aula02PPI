
import express from "express";

const host ="0.0.0.0";
const porta = 3000;
var lista_usuario= [];
const server = express();

server.get("/teste", (requisicao, resposta)=>{
    resposta.send(`
          <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Cadastro do Cliente</title>
            </head>
            <body>
                <h1 style="text-align: center; text-decoration: underline; font-family: Georgia, 'Times New Roman', Times, serif; ">Cadastro de Usuário</h1>
                <div style="display: flex;justify-content: center; font-size: 23px; padding: 7%; border: 30%; " >
                    <form method="POST" action="/teste"  >
                            <label for="nome">Nome:</label>
                            <br>
                            <input type="text" id="nome" name="nome" size="30" >
                            <br>
                            <label for="email">Email:</label>
                            <br>
                            <input type="text" id="email" name="email" size="30" >
                            <br>
                            <label for="cid">Cidade</label>
                            <br>
                            <input type="text" id="cid" name="cidade" size="30" >
                            <br>
                            <label for="estado">Estado:</label>
                            <br>
                            <input type="text" id="estado" name="estado" size="30" >
                            <br>
                            <br>

                            <button type="submit">Enviar</button>
                    </form>
                </div>
                
            </body>
        </html>
        `);
});

server.post('/teste', (requisicao, resposta) =>{
    console.log("Cadastro de usuário realizado com sucesso!!");
    lista_usuario.push();

});



server.listen(3000, () => {
    console.log("Servidor rodando na porta 5000");
});
// server.listen(porta, host, ()=>{
//     console.log(`Servidor rodando em http://${host}:${porta}`)
// });
