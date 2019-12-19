import * as types from './../constants/ActionTypes';

export const resetSelectedTier = () => ({
  type: types.RESET_SELECTED_TIER,
});

export const changeSelectedPTier = (tierIndex) => ({
  type: types.CHANGE_SELECTED_TIER,
  tierIndex
});