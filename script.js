
const PRODUCTS = [
    {
        id: 1,
        name: 'Motor Honda 160cc',
        description: 'Impressão 3D inspirada no motor Honda 160cc, com design detalhado e visual realista. Ideal para apaixonados por motos, oficinas, decoração temática ou como peça colecionável.',
        price: 65.90,
        productionTime: '2-3 dias',
        image: "/image/motorhonda160.jpg",
        colors: ['Cinza', 'Preto', 'Branco'],
        categories: ['Decoração', 'Iluminação'],
        specifications: {
            material: 'ABS de alta qualidade',
            dimensions: '12 x 9 x 9,5 cm',
            weight: '150g',
        },
    },
    {
        id: 2,
        name: 'Decoração de Parede BMW  ',
        description: 'Perfeita para quartos, escritórios ou salas, unindo paixão automotiva e design moderno na decoração.',
        price: 20.90,
        productionTime: '1-2 dias',
        image: "/image/decoracaoparedebmw.jpg",
        colors: ['Azul', 'Preto', 'Cinza','Branco', 'Vermelho','verde'],
        categories: ['Decoração'],
        specifications: {
            material: 'PLA premium',
            dimensions: '8 x 12 cm',
            weight: '30g',
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
        categories: ['Acessórios'],
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
        categories: ['Organização'],
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
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
        colors: ['Branco', 'Cinza', 'Preto'],
        categories: ['Iluminação'],
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
        categories: ['Decoração'],
        specifications: {
            material: 'PLA com pintura',
            dimensions: '12 x 12 x 25 cm',
            weight: '120g',
        },
    },
];

let selectedCategory = null;

function init() {
    renderProducts();
    renderCategories();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();

    const filtered = PRODUCTS.filter(product => {
        const matchesCategory = !selectedCategory || product.categories.includes(selectedCategory);
        const matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noProducts.style.display = 'block';
        document.querySelector('.results-count').textContent = '0 produtos encontrados';
        return;
    }

    noProducts.style.display = 'none';
    document.querySelector('.results-count').textContent = `${filtered.length} produto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openModal(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                ${product.categories.length > 0 ? `
                    <div class="product-colors">
                        <div class="colors-label">📁 ${product.categories.length} categoria${product.categories.length !== 1 ? 's' : ''}</div>
                        <div class="colors-list">
                            ${product.categories.map(cat => `<span class="color-tag">${cat}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-specs">
                    <span>⏱️ ${product.productionTime}</span>
                </div>
                ${product.colors.length > 0 ? `
                    <div class="product-colors">
                        <div class="colors-label">🎨 ${product.colors.length} cor${product.colors.length !== 1 ? 'es' : ''}</div>
                        <div class="colors-list">
                            ${product.colors.map(color => `<span class="color-tag">${color}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                <div class="product-price">
                    <span class="price-label">Preço</span>
                    <span class="price-value">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCategories() {
    const allCategories = [];
    PRODUCTS.forEach(p => {
        p.categories.forEach(cat => {
            if (!allCategories.includes(cat)) {
                allCategories.push(cat);
            }
        });
    });

    const container = document.getElementById('categoryButtons');
    const footer = document.getElementById('footerCategories');

    container.innerHTML = `
        <button class="category-btn active" onclick="selectCategory(null)">Todos (${PRODUCTS.length})</button>
        ${allCategories.map(cat => {
            const count = PRODUCTS.filter(p => p.categories.includes(cat)).length;
            return `<button class="category-btn" onclick="selectCategory('${cat}')">${cat} (${count})</button>`;
        }).join('')}
    `;

    footer.innerHTML = allCategories.map(cat => `
        <li><a href="#" onclick="selectCategory('${cat}'); return false;">${cat}</a></li>
    `).join('');
}

function selectCategory(category) {
    selectedCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    renderProducts();
}

function filterProducts() {
    renderProducts();
}

function resetFilters() {
    selectedCategory = null;
    document.getElementById('searchBox').value = '';
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.category-btn').classList.add('active');
    renderProducts();
}

function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalTime').textContent = product.productionTime;
    document.getElementById('modalPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;

    // Colors
    const colorsSection = document.getElementById('colorsSection');
    if (product.colors.length > 0) {
        colorsSection.style.display = 'block';
        document.getElementById('modalColors').innerHTML = product.colors
            .map(color => `<div class="modal-color">${color}</div>`)
            .join('');
    } else {
        colorsSection.style.display = 'none';
    }

    // Categories
    const categoriesSection = document.getElementById('categoriesSection');
    if (product.categories.length > 0) {
        categoriesSection.style.display = 'block';
        document.getElementById('modalCategories').innerHTML = product.categories
            .map(cat => `<div class="modal-color">${cat}</div>`)
            .join('');
    } else {
        categoriesSection.style.display = 'none';
    }

    // Specifications
    const specsSection = document.getElementById('specsSection');
    if (product.specifications) {
        specsSection.style.display = 'block';
        const specsTable = document.getElementById('specsTable');
        specsTable.innerHTML = Object.entries(product.specifications)
            .map(([key, value]) => {
                const labels = {
                    material: 'Material',
                    dimensions: 'Dimensões',
                    weight: 'Peso'
                };
                return `<tr><td>${labels[key] || key}</td><td>${value}</td></tr>`;
            })
            .join('');
    } else {
        specsSection.style.display = 'none';
    }

    document.getElementById('productModal').classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Fechar modal ao clicar fora
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Inicializar
init();
