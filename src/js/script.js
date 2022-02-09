const ul = document.querySelector('.containerListaProdutos ul')
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
        li.addEventListener('click', addPreco)

    })
}
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        
        return produto.secao === 'Hortifruti'
    });
    montarListaProdutos(listaHortifruti)
}
function montarListaGeral(){
    montarListaProdutos(produtos)
}

function filtrarPorNome(){
    const nomePesquisado = document.querySelector('.campoBuscaPorNome')
    let texto = nomePesquisado.value
    texto = texto.toLowerCase()
    const filtroNome = produtos.filter((produto)=>{

        return produto.nome.toLowerCase() === texto
    })
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

const atualizarPreco = document.querySelector('#precoTotal')
let total = 0
function addPreco (event){
    
    let itemSelecionado = event.target.parentElement
    if (itemSelecionado.tagName === 'LI'){
        total += Number(itemSelecionado.children[2].innerText)
        atualizarPreco.innerText = total.toFixed(2)
    }

}