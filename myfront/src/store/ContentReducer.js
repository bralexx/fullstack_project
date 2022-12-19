const default_state = {content: [{title:'default content title', description:'default content text'}]}

export function ContentReducer(state = default_state, action) {
  switch (action.type) {
    case 'GET_ALL':
      return {...state, content:action.new_data}

  }
  return state
}

export function getContentAction(new_data) {
  return {type:'GET_ALL', new_data:new_data}
}