import {getFunctionGetAll} from '../../services/BackApi'
import {useDispatch} from 'react-redux'
// import {getAllAction} from '../../store/ContentReducer'
const backURL = 'http://127.0.0.1:8000/contentlist/'

function AccountInfo() {
  const dispatch = useDispatch()
  // const onClickFunction = () => (
    // fetch(backURL + 'get_all/')
    // .then(res => res.json())
    // .then(res => dispatch(getAllAction(res)))
    // )
  return (
    <div id='user-info-container'>
      <img id='user-info-image' src='/images/user_image.jpg' alt='user'/>
      <p id='user-info-username'>username</p>
      <button onClick={getFunctionGetAll(dispatch)} id='user-info-logout-button'>Log out</button>
    </div>
  );
}

export default AccountInfo;