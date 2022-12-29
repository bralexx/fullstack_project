import MenuElement from './MenuElement'
import './style.css'
import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'

const pages = [
  {href:'/', text:'Main object list'},
  {href:'/login_page/', text:'Login page'}
]

function Menu() {
  const {accessToken} = useContext(AuthContext)
  if (accessToken) {
    pages.push({href:'/create_post/', text:'Create post'})
  }
  return (
    <div className='menu-div'>
      {pages.map(page_info => <MenuElement key={page_info.text} href={page_info.href} text={page_info.text}/>)}
    </div>
  );
}

export default Menu;