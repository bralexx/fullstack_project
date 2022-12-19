import {combineReducers, createStore} from 'redux'
import {MenuStateReducer} from './MenuStateReducer'
import {ContentReducer} from './ContentReducer'
import {FilterListReducer} from './FilterListReducer'


const rootReducer = combineReducers({
  menu_state: MenuStateReducer,
  content: ContentReducer,
  filter_list: FilterListReducer,
})

export const store = createStore(rootReducer)