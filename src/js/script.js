const ul = document.querySelector('.containerListaProdutos ul')

const atualizarPreco = document.querySelector('#precoTotal')

const somarValores = (array) =>{
    showResults = array.reduce((acc, atual)=>{
        return Number(acc) + Number(atual)
    }, 0)
        return showResults
}



function montarListaProdutos(listaProdutos) {
    ul.innerHTML = ''
    listaProdutos.forEach((produto) => {
       
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        p.innerText = produto.preco
        span.innerText = produto.secao
        

        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        ul.appendChild(li)
        valores.push(p.innerText)    
        somarValores(valores)
        atualizarPreco.innerText = showResults

    })
}
let valores = []
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    });
    valores = []
    montarListaProdutos(listaHortifruti)
    


}

function montarListaGeral(){
    valores = []

    montarListaProdutos(produtos)
}

function filtrarPorNome(){
    const nomePesquisado = document.querySelector('.campoBuscaPorNome')
    let texto = nomePesquisado.value
    texto = texto.toLowerCase()
    const filtroNome = produtos.filter((produto)=>{

        return produto.nome.toLowerCase() === texto
    })
    valores = []
    montarListaProdutos(filtroNome)

}
const nomePesquisado = document.querySelector('.campoBuscaNome')

montarListaProdutos(produtos)
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
const botaoPesquisar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)
botaoMostrarTodos.addEventListener('click', montarListaGeral)
botaoPesquisar.addEventListener('click', filtrarPorNome)









