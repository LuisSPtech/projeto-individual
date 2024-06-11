var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/analisarQuiz", function (req, res) {
    usuarioController.analisarQuiz(req, res);
});
router.post("/dadosQuiz", function (req, res) {
    usuarioController.dadosQuiz(req, res);
});
router.get("/graficoQuiz", function (req, res) {
    usuarioController.graficoQuiz(req, res);
});

router.post("/verificarAula", function (req, res) {
    usuarioController.verificarAula(req, res);
});
router.post("/dadosAula", function (req, res) {
    usuarioController.dadosAula(req, res);
});
router.get("/graficoAula", function (req, res) {
    usuarioController.graficoAula(req, res);
});




module.exports = router;
