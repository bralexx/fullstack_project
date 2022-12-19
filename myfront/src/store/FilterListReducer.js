const init_filter_state = {filters:[]}

export function FilterListReducer(state = init_filter_state, action) {
  switch (action.type) {
    case 'GET_VACANCY_FILTERS':
      return {...state, filters:action.new_filters}
  }
  return state
}

export function getFilterListAction(new_filter_list) {
  return {type:'GET_VACANCY_FILTERS', new_filters:new_filter_list}
}