document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('products-container');
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card product-card';
        
        card.innerHTML = `
            <img src="${product.LinkImagem}" class="card-img-top" alt="${product.NomeProduto}">
            <div class="card-body">
                <h5 class="card-title">${product.NomeProduto}</h5>
            </div>
        `;
        
        card.onclick = () => window.open(product.LinkProduto, '_blank');
        col.appendChild(card);
        container.appendChild(col);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    
    // Função para atualizar a exibição dos produtos
    function updateDisplay() {
        const searchTerm = searchBar.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const name = product.querySelector('.card-title').textContent.toLowerCase();
            if(name.includes(searchTerm)) {
                product.style.display = ''; // ou "block" ou "flex", dependendo do seu layout
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Event listener para a barra de pesquisa
    searchBar.addEventListener('input', updateDisplay);

    // Adiciona funcionalidade ao botão de limpeza
    document.getElementById('clear-search').addEventListener('click', function() {
        searchBar.value = ''; // Limpa a barra de pesquisa
        updateDisplay(); // Atualiza a exibição para mostrar todos os produtos novamente
    });
    
});

