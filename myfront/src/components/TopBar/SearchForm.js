import {useDispatch, useSelector} from 'react-redux'
import {makeGetContentRequest} from '../../services/BackApi'
import {get_filter_form_state} from '../Catalog/FilterList'

export let search_str = ''

function SearchForm() {
  const filter_data = useSelector(state => state.filter_list.filters)
  const dispatch = useDispatch()
  return (
    <form onChange={e => {
        e.preventDefault()
        search_str = e.target.value
        makeGetContentRequest(dispatch, get_filter_form_state(filter_data))
      }}
      className='search-form'>
      <input id='search-input-field' className='search-input' type="search" placeholder="Something"/> 
    </form>
  );
}

export default SearchForm;