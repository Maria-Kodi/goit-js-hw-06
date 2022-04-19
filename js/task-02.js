const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredient;
    return item;
  });
}
const elements = makeIngredientsList(ingredients);
ingredientsList.append(...elements);
