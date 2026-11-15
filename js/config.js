// ==================================================
// CONFIGURAÇÕES DA LOJA — IMPRESSÃO 3DAVID
// ==================================================

const CONFIG = {
  // Seus contatos
  instagramUrl: "https://www.instagram.com/impressao3david/",
  whatsappNumber: "5561981873740", // DDI + DDD + número, só números
  
  // Loja
  storeName: "Impressão 3David",
  currency: "BRL",
  currencySymbol: "R$"
};

// ==================================================
// SEUS PRODUTOS
// image: coloque suas fotos em assets/products/
// price: 0 = será exibido "Sob consulta"
// available: true = aparece na loja
// ==================================================

const STORE_PRODUCTS = [
  {
    id: 1,
    name: "Funko Personalizado",
    description: "Boneco no estilo Funko feito especialmente para você! Represente pessoas reais, profissões, casais, famílias ou qualquer pessoa especial. Basta enviar uma foto e nos contar os detalhes — nós transformamos em uma peça única em 3D.",
    price: 0,
    category: "Personalizados",
    image: "assets/products/funko-personalizado.jpg",
    variants: [],
    available: true,
    priceText: "Sob consulta",
    productionInfo: "Produzido sob encomenda"
  },
  {
    id: 2,
    name: "Figuras — Pokémon",
    description: "Figuras inspiradas no universo Pokémon, feitas em impressão 3D de alta qualidade. Perfeitas para colecionar ou presentear. Cada peça é produzida com cuidado nos detalhes.",
    price: 0,
    category: "Geek & Anime",
    image: "assets/products/pokemon-figure.jpg",
    variants: [],
    available: true,
    priceText: "Sob consulta",
    productionInfo: "Produzido sob encomenda"
  },
  {
    id: 3,
    name: "Figuras — Animes",
    description: "Figuras art inspiradas em seus animes favoritos! Peças decorativas e colecionáveis com muito detalhe e qualidade de impressão.",
    price: 0,
    category: "Geek & Anime",
    image: "assets/products/anime-figure.jpg",
    variants: [],
    available: true,
    priceText: "Sob consulta",
    productionInfo: "Produzido sob encomenda"
  },
  {
    id: 4,
    name: "Super-Heróis — DC e Marvel",
    description: "Figuras inspiradas nos heróis que você ama! Peças exclusivas feitas em impressão 3D. Confecção sob encomenda com atenção aos detalhes.",
    price: 0,
    category: "Geek & Anime",
    image: "assets/products/super-herois.jpg",
    variants: [],
    available: true,
    priceText: "Sob consulta",
    productionInfo: "Produzido sob encomenda"
  }
];
