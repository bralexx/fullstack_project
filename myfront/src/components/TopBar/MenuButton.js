import {useDispatch} from 'react-redux'
import {CMSAction} from '../../store/MenuStateReducer'

function MenuButton() {
  let dispatch = useDispatch()
  let open_close_menu = () => dispatch(CMSAction);
  return (
    <button id='top-bar-menu-button' onClick={e => {
      // e.preventDefault()
      open_close_menu()
    }}>&equiv;</button>
  )
}

export default MenuButton