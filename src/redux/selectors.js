import { createSelector } from 'reselect'

const dishesSelector = state => state.dishes.dishes

export const allDishesSelector = createSelector(
  dishesSelector,
  (dishes) => dishes
)
