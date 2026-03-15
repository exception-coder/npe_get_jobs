// Types

export function parsedCategoryText(category, categoryText) {
  return typeof categoryText === 'function' ? categoryText(category) : typeof categoryText === 'string' && typeof category === 'object' && category ? category[categoryText] : typeof category === 'string' ? category : '';
}
export function getParsedCategories(categories, categoryText) {
  if (typeof categories === 'string') return categories.split(/\s*,\s/);
  if (Array.isArray(categories)) {
    return categories.map(category => {
      if (typeof category === 'string') return category;
      const categoryName = typeof category.categoryName === 'string' ? category.categoryName : parsedCategoryText(category, categoryText);
      return {
        ...category,
        categoryName
      };
    });
  }
  return [];
}
//# sourceMappingURL=parser.js.map