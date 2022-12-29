import {getFunctionGetAll} from '../../services/BackApi'
import {useDispatch} from 'react-redux'
import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
// import {getAllAction} from '../../store/ContentReducer'
const backURL = 'http://127.0.0.1:8000/contentlist/'

function AccountInfo() {
  const dispatch = useDispatch()
  // const onClickFunction = () => (
    // fetch(backURL + 'get_all/')
    // .then(res => res.json())
    // .then(res => dispatch(getAllAction(res)))
    // )
  const {username, accessToken, logoutUser} = useContext(AuthContext)
  // console.log(username)
  return (
    <div>
    {(accessToken) ? 
    <div id='user-info-container'>
      {/* <img id='user-info-image' src='/images/user_image.jpg' alt='user'/> */}
      <p id='user-info-username'>{username}</p>
      <button onClick={logoutUser} id='user-info-logout-button'>Log out</button>
    </div>
    :
    <form action="/login_page/">
      <input type="submit" value="Log in" id='user-info-logout-button' />
    </form>}
    {/* // <button onClick="location.href='/login_page/'" id='user-info-logout-button'>Log in</button>} */}
    </div>
  );
}

export default AccountInfo;