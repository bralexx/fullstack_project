import MenuElement from './MenuElement'

const pages = [
  {href:'/', text:'Main object list'},
  {href:'/login_page/', text:'Login page'},
  {href:'/create_post/', text:'Create post'},
]

function Menu() {
  return (
    <div className='menu-div'>
      {pages.map(page_info => <MenuElement href={page_info.href} text={page_info.text}/>)}
    </div>
  );
}

export default Menu;