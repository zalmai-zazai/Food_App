const FoodReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          foodId: action.payload.foodId,
          foodTitle: action.payload.foodTitle,
          foodImage: action.payload.foodImage,
          foodPrice: action.payload.foodPrice,
        },
      ];
    case 'REMOVE_ITEM':
      return state.filter((food) => food.foodId !== action.payload);
    default:
      return state;
  }
};
export default FoodReducer;
