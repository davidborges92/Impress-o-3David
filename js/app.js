// ==================================================
// IMPRESSÃO 3DAVID — Funcionalidades da Loja
// ==================================================

let carrinho = [];

// Elementos da página
const gradeProdutos = document.getElementById('gradeProdutos');
const filtroBtns = document.querySelectorAll('.filtro-btn');
const carrinhoBtn = document.getElementById('carrinhoBtn');
const modalCarrinho = document.getElementById('modalCarrinho');
const fecharModal = document.getElementById('fecharModal');
const itensCarrinho = document.getElementById('itensCarrinho');
const carrinhoVazio = document.getElementById('carrinhoVazio');
const carrinhoContador = document.getElementById('carrinhoContador');
const enviarWhatsApp = document.getElementById('enviarWhatsApp');

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos('todos');
  atualizarContadorCarrinho();
});

// Renderizar produtos
function renderizarProdutos(categoria) {
  gradeProdutos.innerHTML = '';
  
  const produtosFiltrados = STORE_PRODUCTS.filter(p => {
    if (!p.available) return false;
    return categoria === 'todos' || p.category === categoria;
  });

  if (produtosFiltrados.length === 0) {
    gradeProdutos.innerHTML = '<p class="sem-produtos">Nenhum produto encontrado nesta categoria.</p>';
    return;
  }

  produtosFiltrados.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card-produto';
    card.innerHTML = `
      <img src="${produto.image}" alt="${produto.name}" class="img-produto" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/ffffff?text=${encodeURIComponent(produto.name)}'">
      <div class="conteudo-card">
        <span class="categoria">${produto.category}</span>
        <h3>${produto.name}</h3>
        <p class="descricao">${produto.description}</p>
        <p class="info-producao">${produto.productionInfo}</p>
        <p class="preco">${produto.priceText}</p>
        <button class="btn primário adicionar-carrinho" data-id="${produto.id}">Pedir pelo WhatsApp</button>
      </div>
    `;
    gradeProdutos.appendChild(card);
  });

  // Adicionar eventos aos botões
  document.querySelectorAll('.adicionar-carrinho').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      adicionarAoCarrinho(id);
    });
  });
}

// Filtrar por categoria
filtroBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filtroBtns.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    renderizarProdutos(btn.dataset.categoria);
  });
});

// Adicionar ao carrinho
function adicionarAoCarrinho(id) {
  const produto = STORE_PRODUCTS.find(p => p.id === id);
  if (!produto) return;

  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  
  atualizarCarrinho();
  modalCarrinho.classList.add('aberto');
}

// Remover do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  atualizarCarrinho();
}

// Atualizar visualização do carrinho
function atualizarCarrinho() {
  itensCarrinho.innerHTML = '';
  
  if (carrinho.length === 0) {
    carrinhoVazio.style.display = 'block';
    enviarWhatsApp.disabled = true;
  } else {
    carrinhoVazio.style.display = 'none';
    enviarWhatsApp.disabled = false;
    
    carrinho.forEach(item => {
      const elemento = document.createElement('div');
      elemento.className = 'item-carrinho';
      elemento.innerHTML = `
        <div>
          <h4>${item.name}</h4>
          <p>Quantidade: ${item.quantidade}</p>
        </div>
        <button class="remover-item" data-id="${item.id}">✕</button>
      `;
      itensCarrinho.appendChild(elemento);
    });
  }
  
  atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  carrinhoContador.textContent = totalItens;
}

// Abrir e fechar modal
carrinhoBtn.addEventListener('click', () => {
  atualizarCarrinho();
  modalCarrinho.classList.add('aberto');
});

fecharModal.addEventListener('click', () => {
  modalCarrinho.classList.remove('aberto');
});

// Fechar clicando fora
modalCarrinho.addEventListener('click', (e) => {
  if (e.target === modalCarrinho) {
    modalCarrinho.classList.remove('aberto');
  }
});

// Eventos de remoção
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remover-item')) {
    const id = parseInt(e.target.dataset.id);
    removerDoCarrinho(id);
  }
});

// Enviar pedido pelo WhatsApp
enviarWhatsApp.addEventListener('click', () => {
  if (carrinho.length === 0) return;
  
  let mensagem = `Olá! Vi seu site e gostaria de fazer um pedido:\n\n`;
  carrinho.forEach(item => {
    mensagem += `✅ ${item.name} — Quantidade: ${item.quantidade}\n`;
  });
  mensagem += `\nPodem me ajudar com os detalhes, valores e prazo? Obrigado! 😊`;
  
    const numero = CONFIG.whatsappNumber;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  
  // Limpar carrinho após enviar
  carrinho = [];
  atualizarCarrinho();
  modalCarrinho.classList.remove('aberto');
});

// Menu mobile
const menuMobileBtn = document.querySelector('.menu-mobile-btn');
const menu = document.querySelector('.menu');

menuMobileBtn.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

// Fechar menu ao clicar em um link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
  });
});

