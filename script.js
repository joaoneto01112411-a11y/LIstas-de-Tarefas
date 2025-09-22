const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const from = $("#form");
const input = $("#tarefa");
const erro = $("#erro");
const lista = $("#lista");
const tpl = $("#tplltem");
const btnLimparConclidas = $("#btnLimparConcluidas");

const countTotal = $("#countTotal");
const countDone = $("#countDone");

const filtros = $$(".btn-filtro");
let filtroAtual = "todas";

//(Opcional) Persistência
const persistToggle = 4("#persist");
const LS_KEY = "todo_basico_v1";

function getTarefas(){
    return $$("#lista .item").map(li =>({
        texto: li.querySelector(".texto").textContent,
        Done: li.classList.contains("conclida")
        }));
}
function setErro(msg) {erro.textContent = msg ||"";}

function atualizarContadores() {
    const
}