import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ClassFilter from './ClassFilter'
import {makeGetContentRequest, getFilterList} from '../../services/BackApi'
import {search_str} from '../TopBar/SearchForm'

// let filter_list_json = []
// export let filter_form_state = {}

function create_filter(filter_info) {
  if (filter_info.type === 'MULTIPLE_CHOICE' || filter_info.type === 'SINGLE_CHOICE') {
    return (
      <ClassFilter key={filter_info.src_name} filter_info={filter_info}/>
    )
  }
}

export function get_filter_form_state(filter_list_json) {
  let result = {'search':search_str}
  for (let filter of filter_list_json) {
    if (filter.type === 'SINGLE_CHOICE') {
      for (let option_info of filter.options) {
        if (document.getElementById(filter.src_name + '_' + option_info.src_name).checked) {
          result[filter.src_name] = option_info.src_name
        }
      }
      continue
    }
    result[filter.src_name] = []
    for (let option_info of filter.options) {
      if (document.getElementById(filter.src_name + '_' + option_info.src_name).checked) {
        result[filter.src_name].push(option_info.src_name)
      }
    }
  }
  return result
}

function FilterList() {
  useEffect(() => {getFilterList(dispatch)}, [])
    // for (let filter of filter_list_json) {
    //   if (filter.type === 'class_single') {
    //     filter_form_state[filter.name] = filter.classes[0]
    //     continue
    //   }
    //   filter_form_state[filter.name] = {}
    //   for (let class_name of filter['classes']) {
    //     filter_form_state[filter.name + '-' + class_name] = false
    //   }
    // }
  let filter_list_json = useSelector(state => state.filter_list.filters)
  console.log('filter list:')
  console.log(filter_list_json)
  console.log('filter list end')
  // filter_list_json = filter_list_json_from_redux
  const dispatch = useDispatch()
    return (
    <div id='filter-list-container'>
      <div id='filter-list-title-container'> 
        <p id='filter-list-title'>Filter list</p>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        makeGetContentRequest(dispatch, get_filter_form_state(filter_list_json))
        }} className='filter-list'>
        {filter_list_json.map(create_filter)}
        <input id='filter-list-submit-button' type="submit" value="Apply filters"></input>
      </form>
    </div>
  );
}

export default FilterList