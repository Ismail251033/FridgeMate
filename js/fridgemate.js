/**
 * FridgeMate - Recipe Database
 * Contains all recipe data and matching logic
 */

const RECIPES_DB = [
  {
    id: 1,
    name: "Classic Omelette",
    emoji: "🍳",
    time: 5,
    difficulty: "easy",
    budget: true,
    ingredients: ["eggs", "butter", "salt", "pepper"],
    optional: ["cheese", "onion", "tomato", "herbs"],
    tags: ["breakfast", "quick", "protein"],
    description: "Fluffy, golden omelette with your choice of fillings."
  },
  {
    id: 2,
    name: "Avocado Toast",
    emoji: "🥑",
    time: 7,
    difficulty: "easy",
    budget: false,
    ingredients: ["bread", "avocado", "salt", "lemon"],
    optional: ["eggs", "chili flakes", "tomato"],
    tags: ["breakfast", "quick", "healthy"],
    description: "Creamy avocado on toasted bread with a squeeze of lemon."
  },
  {
    id: 3,
    name: "Garlic Pasta",
    emoji: "🍝",
    time: 15,
    difficulty: "easy",
    budget: true,
    ingredients: ["pasta", "garlic", "olive oil", "salt"],
    optional: ["parmesan", "parsley", "chili flakes", "butter"],
    tags: ["dinner", "quick", "budget"],
    description: "Simple aglio e olio — pasta tossed in garlic-infused olive oil."
  },
  {
    id: 4,
    name: "Fried Rice",
    emoji: "🍚",
    time: 10,
    difficulty: "easy",
    budget: true,
    ingredients: ["rice", "eggs", "soy sauce", "garlic"],
    optional: ["onion", "carrot", "peas", "sesame oil"],
    tags: ["dinner", "quick", "budget", "asian"],
    description: "Quick wok-fried rice with eggs and savory soy sauce."
  },
  {
    id: 5,
    name: "Tomato Soup",
    emoji: "🍅",
    time: 20,
    difficulty: "easy",
    budget: true,
    ingredients: ["tomato", "onion", "garlic", "olive oil"],
    optional: ["cream", "basil", "bread", "salt", "pepper"],
    tags: ["lunch", "dinner", "budget", "vegetarian"],
    description: "Velvety blended tomato soup, perfect with crusty bread."
  },
  {
    id: 6,
    name: "Banana Smoothie",
    emoji: "🍌",
    time: 3,
    difficulty: "easy",
    budget: true,
    ingredients: ["banana", "milk"],
    optional: ["honey", "yogurt", "oats", "peanut butter"],
    tags: ["breakfast", "quick", "healthy", "budget"],
    description: "Thick and creamy banana smoothie, ready in minutes."
  },
  {
    id: 7,
    name: "Greek Salad",
    emoji: "🥗",
    time: 8,
    difficulty: "easy",
    budget: false,
    ingredients: ["tomato", "cucumber", "feta", "olive oil"],
    optional: ["olives", "onion", "oregano", "lemon"],
    tags: ["lunch", "quick", "healthy", "vegetarian"],
    description: "Fresh Mediterranean salad with feta and crispy vegetables."
  },
  {
    id: 8,
    name: "Scrambled Eggs",
    emoji: "🍳",
    time: 5,
    difficulty: "easy",
    budget: true,
    ingredients: ["eggs", "butter", "salt"],
    optional: ["milk", "cheese", "chives", "pepper"],
    tags: ["breakfast", "quick", "protein", "budget"],
    description: "Soft, creamy scrambled eggs — the perfect quick meal."
  },
  {
    id: 9,
    name: "Peanut Butter Toast",
    emoji: "🥜",
    time: 3,
    difficulty: "easy",
    budget: true,
    ingredients: ["bread", "peanut butter"],
    optional: ["banana", "honey", "jam"],
    tags: ["breakfast", "quick", "budget"],
    description: "Classic comfort snack ready in under 3 minutes."
  },
  {
    id: 10,
    name: "Vegetable Stir-Fry",
    emoji: "🥦",
    time: 12,
    difficulty: "easy",
    budget: true,
    ingredients: ["carrot", "garlic", "soy sauce", "olive oil"],
    optional: ["broccoli", "onion", "bell pepper", "sesame oil", "ginger"],
    tags: ["dinner", "healthy", "budget", "vegetarian"],
    description: "Colorful vegetables stir-fried in savory garlic soy sauce."
  },
  {
    id: 11,
    name: "Caprese Salad",
    emoji: "🫙",
    time: 5,
    difficulty: "easy",
    budget: false,
    ingredients: ["tomato", "mozzarella", "basil", "olive oil"],
    optional: ["balsamic vinegar", "salt", "pepper"],
    tags: ["lunch", "quick", "vegetarian", "healthy"],
    description: "Elegant Italian salad of tomato, mozzarella, and fresh basil."
  },
  {
    id: 12,
    name: "Chicken Quesadilla",
    emoji: "🌮",
    time: 10,
    difficulty: "easy",
    budget: false,
    ingredients: ["tortilla", "chicken", "cheese"],
    optional: ["onion", "bell pepper", "salsa", "sour cream", "avocado"],
    tags: ["lunch", "dinner", "quick", "protein"],
    description: "Crispy tortilla stuffed with melted cheese and seasoned chicken."
  },
  {
    id: 13,
    name: "Lemon Yogurt Parfait",
    emoji: "🍋",
    time: 4,
    difficulty: "easy",
    budget: true,
    ingredients: ["yogurt", "honey", "lemon"],
    optional: ["granola", "berries", "nuts", "mint"],
    tags: ["breakfast", "quick", "healthy", "budget"],
    description: "Layered yogurt with honey and a bright lemon zing."
  },
  {
    id: 14,
    name: "Tuna Salad Sandwich",
    emoji: "🥪",
    time: 8,
    difficulty: "easy",
    budget: true,
    ingredients: ["tuna", "bread", "mayonnaise"],
    optional: ["onion", "celery", "lemon", "salt", "pepper", "lettuce"],
    tags: ["lunch", "quick", "budget", "protein"],
    description: "Creamy tuna salad piled high on fresh bread."
  },
  {
    id: 15,
    name: "Pancakes",
    emoji: "🥞",
    time: 15,
    difficulty: "medium",
    budget: true,
    ingredients: ["flour", "eggs", "milk", "butter"],
    optional: ["sugar", "vanilla", "baking powder", "maple syrup", "berries"],
    tags: ["breakfast", "budget"],
    description: "Fluffy golden pancakes to start your morning right."
  },
  {
    id: 16,
    name: "Lentil Soup",
    emoji: "🫘",
    time: 25,
    difficulty: "medium",
    budget: true,
    ingredients: ["lentils", "onion", "garlic", "tomato"],
    optional: ["carrot", "cumin", "paprika", "olive oil", "lemon"],
    tags: ["dinner", "budget", "vegetarian", "healthy"],
    description: "Hearty lentil soup spiced with cumin and finished with lemon."
  },
  {
    id: 17,
    name: "Egg Fried Noodles",
    emoji: "🍜",
    time: 10,
    difficulty: "easy",
    budget: true,
    ingredients: ["noodles", "eggs", "soy sauce", "garlic"],
    optional: ["onion", "green onion", "sesame oil", "chili"],
    tags: ["dinner", "quick", "budget", "asian"],
    description: "Silky noodles tossed with egg and savory soy in minutes."
  },
  {
    id: 18,
    name: "Baked Potato",
    emoji: "🥔",
    time: 8,
    difficulty: "easy",
    budget: true,
    ingredients: ["potato", "olive oil", "salt"],
    optional: ["butter", "sour cream", "cheese", "chives", "bacon"],
    tags: ["dinner", "budget", "vegetarian"],
    description: "Crispy-skinned baked potato with endless topping options."
  },
  {
    id: 19,
    name: "Cucumber Tzatziki",
    emoji: "🥒",
    time: 6,
    difficulty: "easy",
    budget: true,
    ingredients: ["cucumber", "yogurt", "garlic", "olive oil"],
    optional: ["dill", "lemon", "mint", "salt"],
    tags: ["snack", "quick", "healthy", "budget", "vegetarian"],
    description: "Cool Greek yogurt dip with fresh cucumber and garlic."
  },
  {
    id: 20,
    name: "Berry Oatmeal",
    emoji: "🫐",
    time: 8,
    difficulty: "easy",
    budget: true,
    ingredients: ["oats", "milk", "berries"],
    optional: ["honey", "banana", "cinnamon", "nuts"],
    tags: ["breakfast", "healthy", "budget"],
    description: "Warm creamy oatmeal topped with fresh or frozen berries."
  }
];

/**
 * Match recipes based on available ingredients
 * @param {string[]} userIngredients - List of ingredients user has
 * @param {Object} options - Filtering options
 * @returns {Object[]} Matched and scored recipes
 */
function matchRecipes(userIngredients, options = {}) {
  if (!userIngredients || userIngredients.length === 0) return [];

  const normalized = userIngredients.map(i => i.toLowerCase().trim());

  const scored = RECIPES_DB.map(recipe => {
    const required = recipe.ingredients.map(i => i.toLowerCase());
    const optional = (recipe.optional || []).map(i => i.toLowerCase());

    let matchedRequired = 0;
    let matchedOptional = 0;
    const missingRequired = [];

    required.forEach(ing => {
      const match = normalized.some(u =>
        u.includes(ing) || ing.includes(u)
      );
      if (match) matchedRequired++;
      else missingRequired.push(ing);
    });

    optional.forEach(ing => {
      const match = normalized.some(u =>
        u.includes(ing) || ing.includes(u)
      );
      if (match) matchedOptional++;
    });

    const requiredRatio = matchedRequired / required.length;
    const score = requiredRatio * 100 + matchedOptional * 5;

    return {
      ...recipe,
      score,
      matchedRequired,
      totalRequired: required.length,
      missingRequired,
      matchedOptional,
      canMake: missingRequired.length === 0,
      almostCanMake: missingRequired.length <= 2 && requiredRatio >= 0.5
    };
  });

  let results = scored.filter(r => r.score > 30 || r.almostCanMake || r.canMake);

  // Apply filters
  if (options.quickMode) {
    results = results.filter(r => r.time <= 10);
  }
  if (options.budgetMode) {
    results = results.filter(r => r.budget === true);
  }
  if (options.hungryNow) {
    results = results.filter(r => r.time <= 10);
  }

  // Sort: can make first, then by score
  results.sort((a, b) => {
    if (a.canMake && !b.canMake) return -1;
    if (!a.canMake && b.canMake) return 1;
    return b.score - a.score;
  });

  return results.slice(0, 12);
}

/**
 * Get ingredient suggestions based on what user has
 * @param {string[]} ingredients
 * @returns {string[]}
 */
function getSuggestions(ingredients) {
  const normalized = ingredients.map(i => i.toLowerCase());
  const pairings = {
    eggs: ["butter", "cheese", "onion"],
    pasta: ["garlic", "parmesan", "tomato"],
    rice: ["soy sauce", "garlic", "eggs"],
    bread: ["butter", "avocado", "peanut butter"],
    chicken: ["garlic", "lemon", "olive oil"],
    tomato: ["basil", "garlic", "mozzarella"],
    banana: ["honey", "peanut butter", "milk"],
    potato: ["butter", "cheese", "sour cream"],
    garlic: ["olive oil", "lemon", "herbs"],
    oats: ["milk", "honey", "berries"]
  };

  const suggestions = new Set();
  normalized.forEach(ing => {
    if (pairings[ing]) {
      pairings[ing].forEach(s => {
        if (!normalized.includes(s)) suggestions.add(s);
      });
    }
  });

  return Array.from(suggestions).slice(0, 5);
}
/**
 * FridgeMate - Storage Module
 * Handles all localStorage persistence
 */

const Storage = {
  KEYS: {
    INGREDIENTS: 'fm_ingredients',
    PREFERENCES: 'fm_preferences',
    HISTORY: 'fm_usage_history',
    SAVED_RECIPES: 'fm_saved_recipes'
  },

  /** Get ingredients list */
  getIngredients() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.INGREDIENTS)) || [];
    } catch { return []; }
  },

  /** Save ingredients list */
  saveIngredients(ingredients) {
    localStorage.setItem(this.KEYS.INGREDIENTS, JSON.stringify(ingredients));
  },

  /** Add a single ingredient */
  addIngredient(ingredient) {
    const list = this.getIngredients();
    const normalized = ingredient.trim().toLowerCase();
    if (!list.includes(normalized) && normalized.length > 0) {
      list.push(normalized);
      this.saveIngredients(list);
      this.trackUsage(normalized);
      return true;
    }
    return false;
  },

  /** Remove an ingredient */
  removeIngredient(ingredient) {
    const list = this.getIngredients().filter(i => i !== ingredient);
    this.saveIngredients(list);
  },

  /** Track ingredient usage for smart suggestions */
  trackUsage(ingredient) {
    try {
      const history = JSON.parse(localStorage.getItem(this.KEYS.HISTORY)) || {};
      history[ingredient] = (history[ingredient] || 0) + 1;
      localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
    } catch {}
  },

  /** Get frequently used ingredients */
  getFrequentIngredients(limit = 5) {
    try {
      const history = JSON.parse(localStorage.getItem(this.KEYS.HISTORY)) || {};
      return Object.entries(history)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([ingredient]) => ingredient);
    } catch { return []; }
  },

  /** Get preferences */
  getPreferences() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.PREFERENCES)) || {
        quickMode: false,
        budgetMode: false
      };
    } catch { return { quickMode: false, budgetMode: false }; }
  },

  /** Save preferences */
  savePreferences(prefs) {
    localStorage.setItem(this.KEYS.PREFERENCES, JSON.stringify(prefs));
  },

  /** Get saved recipes */
  getSavedRecipes() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SAVED_RECIPES)) || [];
    } catch { return []; }
  },

  /** Toggle save/unsave a recipe */
  toggleSavedRecipe(recipeId) {
    const saved = this.getSavedRecipes();
    const idx = saved.indexOf(recipeId);
    if (idx === -1) {
      saved.push(recipeId);
    } else {
      saved.splice(idx, 1);
    }
    localStorage.setItem(this.KEYS.SAVED_RECIPES, JSON.stringify(saved));
    return idx === -1; // returns true if now saved
  },

  /** Check if a recipe is saved */
  isRecipeSaved(recipeId) {
    return this.getSavedRecipes().includes(recipeId);
  }
};
/**
 * FridgeMate - UI Module
 * Handles all DOM rendering and UI interactions
 */

const UI = {
  /** Render ingredient chips */
  renderIngredients(ingredients) {
    const container = document.getElementById('ingredients-list');
    const emptyState = document.getElementById('ingredients-empty');
    const counter = document.getElementById('ingredient-count');

    if (!ingredients || ingredients.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (counter) counter.textContent = '0 items';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (counter) counter.textContent = `${ingredients.length} item${ingredients.length !== 1 ? 's' : ''}`;

    container.innerHTML = ingredients.map((ing, idx) => `
      <div class="chip" style="animation-delay: ${idx * 0.04}s" data-ingredient="${ing}">
        <span class="chip-icon">${getIngredientEmoji(ing)}</span>
        <span class="chip-label">${capitalizeFirst(ing)}</span>
        <button class="chip-remove" onclick="App.removeIngredient('${ing}')" aria-label="Remove ${ing}">×</button>
      </div>
    `).join('');
  },

  /** Render recipe cards */
  renderRecipes(recipes, container) {
    const el = container || document.getElementById('recipes-grid');
    const emptyState = document.getElementById('recipes-empty');
    const recipesSection = document.getElementById('recipes-section');

    if (!recipes || recipes.length === 0) {
      el.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (recipesSection) recipesSection.style.display = 'block';

    el.innerHTML = recipes.map((recipe, idx) => {
      const isSaved = Storage.isRecipeSaved(recipe.id);
      const missingCount = recipe.missingRequired ? recipe.missingRequired.length : 0;
      const canMake = recipe.canMake;
      const almost = recipe.almostCanMake && !canMake;

      return `
        <div class="recipe-card ${canMake ? 'can-make' : ''} ${almost ? 'almost-make' : ''}"
             style="animation-delay: ${idx * 0.06}s"
             onclick="UI.showRecipeModal(${recipe.id})">
          <div class="recipe-card-header">
            <span class="recipe-emoji">${recipe.emoji}</span>
            <div class="recipe-badges">
              ${canMake ? '<span class="badge badge-green">✓ Ready</span>' : ''}
              ${almost ? `<span class="badge badge-amber">~${missingCount} missing</span>` : ''}
              ${recipe.budget ? '<span class="badge badge-blue">💰 Budget</span>' : ''}
            </div>
            <button class="save-btn ${isSaved ? 'saved' : ''}"
                    onclick="event.stopPropagation(); App.toggleSave(${recipe.id}, this)"
                    aria-label="${isSaved ? 'Unsave' : 'Save'} recipe">
              ${isSaved ? '♥' : '♡'}
            </button>
          </div>
          <h3 class="recipe-name">${recipe.name}</h3>
          <p class="recipe-desc">${recipe.description}</p>
          <div class="recipe-meta">
            <span class="meta-item">⏱ ${recipe.time} min</span>
            <span class="meta-item diff-${recipe.difficulty}">${recipe.difficulty}</span>
          </div>
          <div class="recipe-match-bar">
            <div class="match-fill" style="width: ${Math.min(100, recipe.score)}%"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  /** Show recipe detail modal */
  showRecipeModal(recipeId) {
    const recipe = RECIPES_DB.find(r => r.id === recipeId);
    if (!recipe) return;

    const isSaved = Storage.isRecipeSaved(recipeId);
    const modal = document.getElementById('recipe-modal');
    const content = document.getElementById('modal-content');

    const ingredients = Storage.getIngredients();
    const normalized = ingredients.map(i => i.toLowerCase());

    const ingredientsList = recipe.ingredients.map(ing => {
      const have = normalized.some(u => u.includes(ing) || ing.includes(u));
      return `<li class="${have ? 'have' : 'missing'}">
        <span>${have ? '✓' : '✗'}</span> ${capitalizeFirst(ing)}
      </li>`;
    }).join('');

    const optionalList = recipe.optional && recipe.optional.length > 0
      ? `<div class="optional-section">
          <h4>Optional</h4>
          <ul class="ingredients-list optional">
            ${recipe.optional.map(ing => {
              const have = normalized.some(u => u.includes(ing) || ing.includes(u));
              return `<li class="${have ? 'have' : ''}"><span>${have ? '✓' : '+'}</span> ${capitalizeFirst(ing)}</li>`;
            }).join('')}
          </ul>
        </div>` : '';

    content.innerHTML = `
      <div class="modal-hero">
        <span class="modal-emoji">${recipe.emoji}</span>
        <div class="modal-title-area">
          <h2>${recipe.name}</h2>
          <p>${recipe.description}</p>
        </div>
        <button class="save-btn modal-save ${isSaved ? 'saved' : ''}"
                onclick="App.toggleSave(${recipe.id}, this)">${isSaved ? '♥' : '♡'}</button>
      </div>
      <div class="modal-stats">
        <div class="stat"><span class="stat-val">⏱ ${recipe.time}</span><span class="stat-label">minutes</span></div>
        <div class="stat"><span class="stat-val diff-${recipe.difficulty}">${recipe.difficulty}</span><span class="stat-label">difficulty</span></div>
        ${recipe.budget ? '<div class="stat"><span class="stat-val">💰</span><span class="stat-label">budget</span></div>' : ''}
      </div>
      <div class="modal-ingredients">
        <h4>Ingredients</h4>
        <ul class="ingredients-list">${ingredientsList}</ul>
        ${optionalList}
      </div>
      ${recipe.missingRequired && recipe.missingRequired.length > 0 ? `
      <div class="missing-tip">
        <span class="tip-icon">💡</span>
        <div>
          <strong>Missing:</strong> ${recipe.missingRequired.map(capitalizeFirst).join(', ')}
          <br><small>You might substitute with what you have, or grab these quickly.</small>
        </div>
      </div>` : ''}
      <div class="modal-tags">
        ${recipe.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  /** Close modal */
  closeModal() {
    document.getElementById('recipe-modal').classList.remove('open');
    document.body.style.overflow = '';
  },

  /** Show a toast notification */
  toast(message, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  },

  /** Show smart suggestions banner */
  showSmartSuggestion(message) {
    const banner = document.getElementById('smart-banner');
    const text = document.getElementById('smart-banner-text');
    if (banner && text) {
      text.textContent = message;
      banner.style.display = 'flex';
      setTimeout(() => banner.classList.add('visible'), 50);
    }
  },

  /** Show/hide loading state */
  setLoading(isLoading) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
      if (isLoading) {
        overlay.style.display = 'flex';
        requestAnimationFrame(() => overlay.classList.add('visible'));
      } else {
        overlay.classList.remove('visible');
        setTimeout(() => { overlay.style.display = 'none'; }, 300);
      }
    }
  }
};

/** Helper: capitalize first letter */
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Helper: get emoji for common ingredients */
function getIngredientEmoji(ingredient) {
  const emojiMap = {
    eggs: '🥚', egg: '🥚',
    butter: '🧈',
    milk: '🥛',
    cheese: '🧀',
    bread: '🍞',
    tomato: '🍅',
    garlic: '🧄',
    onion: '🧅',
    potato: '🥔',
    carrot: '🥕',
    chicken: '🍗',
    pasta: '🍝',
    rice: '🍚',
    banana: '🍌',
    avocado: '🥑',
    lemon: '🍋',
    flour: '🌾',
    olive: '🫒',
    oil: '🫙',
    salt: '🧂',
    pepper: '🌶️',
    honey: '🍯',
    yogurt: '🥛',
    berries: '🫐',
    oats: '🌾',
    tuna: '🐟',
    noodles: '🍜',
    tortilla: '🫓',
    mozzarella: '🧀',
    feta: '🧀',
    basil: '🌿',
    cucumber: '🥒',
    lentils: '🫘',
    peanut: '🥜'
  };
  const key = Object.keys(emojiMap).find(k => ingredient.includes(k));
  return emojiMap[key] || '🥄';
}
/**
 * FridgeMate - Main Application
 * Orchestrates all features and user interactions
 */

const App = {
  isMobile: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768,
  scanActive: false,
  currentStream: null,

  /** Initialize the app */
  init() {
    this.loadIngredients();
    this.loadPreferences();
    this.setupEventListeners();
    this.setupCameraButton();
    this.showSmartSuggestions();
    this.setupInstallPrompt();
    this.registerServiceWorker();

    // Auto-search if ingredients exist
    const ingredients = Storage.getIngredients();
    if (ingredients.length > 0) {
      setTimeout(() => this.findRecipes(), 200);
    }
  },

  /** Load and render saved ingredients */
  loadIngredients() {
    const ingredients = Storage.getIngredients();
    UI.renderIngredients(ingredients);
  },

  /** Load user preferences */
  loadPreferences() {
    const prefs = Storage.getPreferences();
    const quickBtn = document.getElementById('quick-mode-btn');
    const budgetBtn = document.getElementById('budget-mode-btn');

    if (quickBtn && prefs.quickMode) quickBtn.classList.add('active');
    if (budgetBtn && prefs.budgetMode) budgetBtn.classList.add('active');
  },

  /** Setup all event listeners */
  setupEventListeners() {
    // Ingredient input
    const input = document.getElementById('ingredient-input');
    const addBtn = document.getElementById('add-btn');

    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        this.addIngredient();
      }
    });

    input?.addEventListener('input', (e) => {
      this.showAutocomplete(e.target.value);
    });

    input?.addEventListener('blur', () => {
      setTimeout(() => this.hideAutocomplete(), 150);
    });

    addBtn?.addEventListener('click', () => this.addIngredient());

    // Find recipes button
    document.getElementById('find-recipes-btn')
      ?.addEventListener('click', () => this.findRecipes());

    // Quick mode toggle
    document.getElementById('quick-mode-btn')
      ?.addEventListener('click', (e) => this.toggleMode(e.target.closest('button'), 'quickMode'));

    // Budget mode toggle
    document.getElementById('budget-mode-btn')
      ?.addEventListener('click', (e) => this.toggleMode(e.target.closest('button'), 'budgetMode'));

    // I'm Hungry Now button
    document.getElementById('hungry-btn')
      ?.addEventListener('click', () => this.hungryNowMode());

    // Modal close
    document.getElementById('modal-close')
      ?.addEventListener('click', () => UI.closeModal());

    document.getElementById('recipe-modal')
      ?.addEventListener('click', (e) => {
        if (e.target.id === 'recipe-modal') UI.closeModal();
      });

    // Keyboard close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') UI.closeModal();
    });

    // Smart banner dismiss
    document.getElementById('smart-banner-close')
      ?.addEventListener('click', () => {
        const banner = document.getElementById('smart-banner');
        banner?.classList.remove('visible');
        setTimeout(() => { if (banner) banner.style.display = 'none'; }, 400);
      });

    // Clear all ingredients
    document.getElementById('clear-all-btn')
      ?.addEventListener('click', () => this.clearAll());
  },

  /** Setup camera button (mobile only) */
  setupCameraButton() {
    const cameraBtn = document.getElementById('camera-btn');
    const cameraSection = document.getElementById('camera-section');

    if (!this.isMobile) {
      if (cameraBtn) cameraBtn.style.display = 'none';
      if (cameraSection) cameraSection.style.display = 'none';
      return;
    }

    cameraBtn?.addEventListener('click', () => this.toggleCamera());
    document.getElementById('capture-btn')
      ?.addEventListener('click', () => this.captureAndDetect());
    document.getElementById('cancel-scan-btn')
      ?.addEventListener('click', () => this.stopCamera());
  },

  /** Add ingredient from input */
  addIngredient() {
    const input = document.getElementById('ingredient-input');
    const value = input.value.trim();
    if (!value) return;

    // Handle comma-separated entries
    const items = value.split(',').map(s => s.trim()).filter(Boolean);
    let added = 0;

    items.forEach(item => {
      if (Storage.addIngredient(item)) added++;
    });

    input.value = '';
    this.hideAutocomplete();
    this.loadIngredients();

    if (added > 0) {
      UI.toast(`Added ${added > 1 ? added + ' ingredients' : items[0]}! 🥄`);
      this.findRecipes();
    } else {
      UI.toast('Already in your list!', 'warning');
    }
  },

  /** Remove ingredient */
  removeIngredient(ingredient) {
    Storage.removeIngredient(ingredient);
    this.loadIngredients();
    const ingredients = Storage.getIngredients();
    if (ingredients.length > 0) this.findRecipes();
    else {
      document.getElementById('recipes-grid').innerHTML = '';
      const emptyState = document.getElementById('recipes-empty');
      if (emptyState) emptyState.style.display = 'flex';
    }
  },

  /** Clear all ingredients */
  clearAll() {
    if (Storage.getIngredients().length === 0) return;
    Storage.saveIngredients([]);
    this.loadIngredients();
    document.getElementById('recipes-grid').innerHTML = '';
    const emptyState = document.getElementById('recipes-empty');
    if (emptyState) emptyState.style.display = 'flex';
    UI.toast('List cleared 🗑️');
  },

  /** Toggle filter mode (quick/budget) */
  toggleMode(btn, prefKey) {
    const prefs = Storage.getPreferences();
    prefs[prefKey] = !prefs[prefKey];
    Storage.savePreferences(prefs);
    btn.classList.toggle('active', prefs[prefKey]);
    this.findRecipes();
  },

  /** Find and display matching recipes */
  findRecipes() {
    const ingredients = Storage.getIngredients();
    if (ingredients.length === 0) return;

    const prefs = Storage.getPreferences();
    UI.setLoading(true);

    // Small artificial delay to show loading state
    setTimeout(() => {
      const recipes = matchRecipes(ingredients, prefs);
      UI.renderRecipes(recipes);
      UI.setLoading(false);

      const count = recipes.filter(r => r.canMake).length;
      if (count > 0) {
        document.getElementById('recipes-count').textContent =
          `${count} recipe${count !== 1 ? 's' : ''} ready to cook`;
      } else {
        document.getElementById('recipes-count').textContent =
          `${recipes.length} suggestion${recipes.length !== 1 ? 's' : ''}`;
      }
    }, 400);
  },

  /** Hungry Now mode — show ultra-fast recipes */
  hungryNowMode() {
    const ingredients = Storage.getIngredients();
    if (ingredients.length === 0) {
      UI.toast('Add some ingredients first! 🥦', 'warning');
      return;
    }

    UI.setLoading(true);
    setTimeout(() => {
      const recipes = matchRecipes(ingredients, { hungryNow: true });
      UI.renderRecipes(recipes);
      UI.setLoading(false);
      UI.toast('⚡ Under 10 minutes!', 'success');

      document.getElementById('recipes-count').textContent =
        `${recipes.length} lightning-fast recipe${recipes.length !== 1 ? 's' : ''}`;

      // Scroll to recipes
      document.getElementById('recipes-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  },

  /** Toggle saved recipe */
  toggleSave(recipeId, btn) {
    const isSaved = Storage.toggleSavedRecipe(recipeId);
    btn.textContent = isSaved ? '♥' : '♡';
    btn.classList.toggle('saved', isSaved);
    UI.toast(isSaved ? 'Recipe saved! ♥' : 'Recipe removed', isSaved ? 'success' : 'info');
  },

  /** Show smart suggestions based on history */
  showSmartSuggestions() {
    const frequent = Storage.getFrequentIngredients(1);
    const ingredients = Storage.getIngredients();

    if (frequent.length > 0 && ingredients.length > 0) {
      const ing = frequent[0];
      if (ingredients.includes(ing)) {
        const recipes = matchRecipes([ing]);
        if (recipes.length > 0) {
          UI.showSmartSuggestion(
            `You often use ${capitalizeFirst(ing)} → try "${recipes[0].name}" 🍴`
          );
        }
      }
    }
  },

  /** Show ingredient autocomplete */
  showAutocomplete(query) {
    const dropdown = document.getElementById('autocomplete');
    if (!dropdown || query.length < 2) {
      this.hideAutocomplete();
      return;
    }

    const allIngredients = [
      'eggs', 'butter', 'milk', 'cheese', 'bread', 'tomato', 'garlic',
      'onion', 'potato', 'carrot', 'chicken', 'pasta', 'rice', 'banana',
      'avocado', 'lemon', 'flour', 'olive oil', 'salt', 'pepper', 'honey',
      'yogurt', 'berries', 'oats', 'tuna', 'noodles', 'tortilla', 'mozzarella',
      'feta', 'basil', 'cucumber', 'lentils', 'peanut butter', 'cream',
      'soy sauce', 'ginger', 'parmesan', 'mayonnaise', 'vinegar', 'sugar'
    ];

    const existing = Storage.getIngredients();
    const matches = allIngredients.filter(i =>
      i.startsWith(query.toLowerCase()) && !existing.includes(i)
    ).slice(0, 5);

    if (matches.length === 0) {
      this.hideAutocomplete();
      return;
    }

    dropdown.innerHTML = matches.map(m => `
      <div class="autocomplete-item" onclick="App.selectAutocomplete('${m}')">
        ${getIngredientEmoji(m)} ${capitalizeFirst(m)}
      </div>
    `).join('');
    dropdown.style.display = 'block';
  },

  selectAutocomplete(value) {
    document.getElementById('ingredient-input').value = value;
    this.hideAutocomplete();
    this.addIngredient();
  },

  hideAutocomplete() {
    const dropdown = document.getElementById('autocomplete');
    if (dropdown) dropdown.style.display = 'none';
  },

  /** Camera: toggle camera view */
  async toggleCamera() {
    if (this.scanActive) {
      this.stopCamera();
    } else {
      await this.startCamera();
    }
  },

  /** Start camera stream */
  async startCamera() {
    const section = document.getElementById('camera-section');
    const video = document.getElementById('camera-feed');

    try {
      this.currentStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      video.srcObject = this.currentStream;
      section.style.display = 'block';
      requestAnimationFrame(() => section.classList.add('open'));
      this.scanActive = true;
      document.getElementById('camera-btn').textContent = '✕ Close';
    } catch (err) {
      UI.toast('Camera not available 📷', 'warning');
    }
  },

  /** Stop camera */
  stopCamera() {
    if (this.currentStream) {
      this.currentStream.getTracks().forEach(t => t.stop());
      this.currentStream = null;
    }
    const section = document.getElementById('camera-section');
    section?.classList.remove('open');
    setTimeout(() => { if (section) section.style.display = 'none'; }, 400);
    this.scanActive = false;
    const btn = document.getElementById('camera-btn');
    if (btn) btn.textContent = '📷 Scan';
  },

  /** Simulate ingredient detection from camera */
  captureAndDetect() {
    const captureBtn = document.getElementById('capture-btn');
    captureBtn.textContent = 'Scanning...';
    captureBtn.disabled = true;

    // Simulated detection with common ingredients
    const detectable = [
      ['tomato', 'onion', 'garlic'],
      ['eggs', 'butter', 'cheese'],
      ['carrot', 'potato', 'onion'],
      ['banana', 'milk', 'honey'],
      ['pasta', 'olive oil', 'garlic']
    ];
    const detected = detectable[Math.floor(Math.random() * detectable.length)];

    setTimeout(() => {
      detected.forEach(ing => Storage.addIngredient(ing));
      this.loadIngredients();
      this.findRecipes();
      this.stopCamera();
      UI.toast(`Detected: ${detected.map(capitalizeFirst).join(', ')} 🎯`, 'success');
      captureBtn.textContent = '📸 Capture';
      captureBtn.disabled = false;
    }, 1500);
  },

  /** PWA install prompt */
  setupInstallPrompt() {
    let deferredPrompt;
    const installBanner = document.getElementById('install-banner');
    const installBtn = document.getElementById('install-btn');
    const installDismiss = document.getElementById('install-dismiss');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (installBanner) {
        installBanner.style.display = 'flex';
        requestAnimationFrame(() => installBanner.classList.add('visible'));
      }
    });

    installBtn?.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        UI.toast('FridgeMate installed! 🎉', 'success');
      }
      deferredPrompt = null;
      installBanner.classList.remove('visible');
      setTimeout(() => { installBanner.style.display = 'none'; }, 400);
    });

    installDismiss?.addEventListener('click', () => {
      installBanner?.classList.remove('visible');
      setTimeout(() => { if (installBanner) installBanner.style.display = 'none'; }, 400);
    });
  },

  /** Register service worker */
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/pwa/service-worker.js')
        .catch(() => {
          // SW registration may fail in local dev — that's fine
        });
    }
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());