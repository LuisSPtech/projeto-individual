var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("email: " + email)
    console.log("senha: " + senha)

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String


                    console.log(resultadoAutenticar.length == 1)
                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                      
                        res.status(200).json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            cpf: resultadoAutenticar[0].cpf,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cpf = req.body.cpfServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    }
    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, cpf, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function analisarQuiz(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var pontuacao = req.body.respostasCorretasServer;
    var incorretas = req.body.respostasIncorretasServer;

    usuarioModel.analisarQuiz(pontuacao, incorretas,  idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

function dadosQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.dadosQuiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoQuiz(req, res) {
    usuarioModel.graficoQuiz(idUsuario).then(function (resultado) {
        var idUsuario = req.body.idUsuarioServer;
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function verificarAula(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var videoAssistido = req.body.videoAssistidoServer;
    var qtd_video = req.body.videoNaoAssistidoServer;

    usuarioModel.verificarAula(videoAssistido, qtd_video,  idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

}


function dadosAula(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.dadosAula(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoAula(req, res) {
    usuarioModel.graficoAula(idUsuario).then(function (resultado) {
        var idUsuario = req.body.idUsuarioServer;
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function rankingquiz(req, res) { 
    usuarioModel.rankingquiz().then(function (resultado) {
        res.json(resultado);
    }).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criar o ranking! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    autenticar,
    cadastrar,
    analisarQuiz,
    dadosQuiz,
    graficoQuiz,
    verificarAula,
    dadosAula,
    graficoAula, 
    rankingquiz 
}