/**
 * CATÁLOGO DE PRODUTOS - EDITE ESTE ARQUIVO PARA ADICIONAR SEUS PRODUTOS
 * 
 * Cada produto deve ter:
 * - id: identificador único (número)
 * - name: nome do produto
 * - description: descrição breve
 * - price: preço em reais (número)
 * - productionTime: tempo de produção (ex: "3-5 dias")
 * - image: URL da imagem (pode ser qualquer URL externa)
 * - colors: array com cores disponíveis
 * - category: categoria do produto
 * - specifications: (opcional) objeto com material, dimensions, weight
 */

const PRODUCTS = [
  {
    id: 1,
    name: 'Vaso Geométrico Moderno',
    description: 'Vaso com design geométrico minimalista, perfeito para decoração moderna.',
    price: 89.90,
    productionTime: '3-5 dias',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    colors: ['Azul Claro', 'Cinza', 'Branco'],
    category: 'Decoração',
    specifications: {
      material: 'PLA de alta qualidade',
      dimensions: '12 x 15 cm',
      weight: '150g',
    },
  },
  {
    id: 2,
    name: 'Miniatura Ninja',
    description: 'Figura de ação detalhada de ninja, ideal para colecionadores e fãs de fantasia.',
    price: 45.90,
    productionTime: '2-4 dias',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    colors: ['Azul', 'Preto', 'Cinza'],
    category: 'Miniaturas',
    specifications: {
      material: 'PLA premium',
      dimensions: '8 x 12 cm',
      weight: '80g',
    },
  },
  {
    id: 3,
    name: 'Suporte para Fone',
    description: 'Suporte elegante para fones de ouvido, com design minimalista que combina com qualquer ambiente.',
    price: 34.90,
    productionTime: '2-3 dias',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    colors: ['Branco', 'Preto', 'Cinza', 'Azul Marinho'],
    category: 'Acessórios',
    specifications: {
      material: 'PLA',
      dimensions: '10 x 8 cm',
      weight: '60g',
    },
  },
  {
    id: 4,
    name: 'Organizador de Desk',
    description: 'Organizador multifuncional para sua mesa, com compartimentos para canetas, clipes e pequenos itens.',
    price: 67.90,
    productionTime: '4-6 dias',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    colors: ['Branco', 'Cinza', 'Preto'],
    category: 'Organização',
    specifications: {
      material: 'PLA resistente',
      dimensions: '20 x 15 x 12 cm',
      weight: '250g',
    },
  },
  {
    id: 5,
    name: 'Luminária LED',
    description: 'Luminária moderna com design geométrico, compatível com LEDs de baixo consumo.',
    price: 99.90,
    productionTime: '5-7 dias',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500https://images.unsplash.com/photo-1565636192335-14c9c9d1e5d9?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1565636192335-14c9c9d1e5d9?w=500&h=500&fit=cropfit=crop',
    colors: ['Branco', 'Cinza', 'Preto'],
    category: 'Iluminação',
    specifications: {
      material: 'PLA premium com acabamento fosco',
      dimensions: '15 x 15 x 20 cm',
      weight: '180g',
    },
  },
  {
    id: 6,
    name: 'Planta Artificial',
    description: 'Decoração de planta artificial com design realista, perfeita para ambientes sem luz natural.',
    price: 54.90,
    productionTime: '3-4 dias',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    colors: ['Verde', 'Verde Escuro'],
    category: 'Decoração',
    specifications: {
      material: 'PLA com pintura',
      dimensions: '12 x 12 x 25 cm',
      weight: '120g',
    },
  },
];

// Exportar para uso no navegador
window.PRODUCTS = PRODUCTS;
