addEventListener("DOMContentLoaded", ()=>{
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = "Produtos a venda"
const main = document.querySelector('HTML')
main.appendChild(titulo);
const produtos = document.createElement('section');
main.appendChild(produtos);
const celular = document.createElement('div');
celular.innerHTML = `
<h2>Iphone 13</h2>
<img src="https://www.dslr-zone.com/wp-content/uploads/2021/10/1-2.jpeg" style="width: 300px ;"/>
<p>Iphone 13 (128 GB) - Branco</p>
<p>R$ 5200,00 </p>
`;
produtos.appendChild(celular);
main.appendChild(produtos);
});
