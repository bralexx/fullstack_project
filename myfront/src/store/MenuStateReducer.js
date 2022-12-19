const defaultState = {menu_state: 0};

export const MenuStateReducer = (state=defaultState, action) => {
  if (action.type === 'CMS') {
    return {...state, menu_state:(state.menu_state + 1) % 2};
  } else {
    return state;
  }
}

// export default MenuStateReducer;
export const CMSAction = {type:'CMS'}