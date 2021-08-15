module.exports = function sortCategoriesForInsert (inputJSON) {
  const categoryArray = JSON.parse(inputJSON)
  const properInsertionResult = []
  const parentIdTracker = []

  while (categoryArray.length) {
    for (let i = 0; i < categoryArray.length; i++) {
      const category = categoryArray.shift()

      if (category.parent_id === null) {
        // If parent_id is null, move the category to the start of result array
        properInsertionResult.unshift(category)
        parentIdTracker.push(category.id)
      } else if (parentIdTracker.includes(category.parent_id)) {
        // If parent_id exists in result array, move category to end of result array
        properInsertionResult.push(category)
        parentIdTracker.push(category.id)
      } else {
        /*
          Else parent_id not exists in result array yet,
          so move back category to original array for another iteration
        */
        categoryArray.push(category)
      }
    }
  }

  return JSON.stringify(properInsertionResult)
}