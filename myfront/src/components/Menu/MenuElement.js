function MenuElement({href, text}) {
  return (
    <form action={href} className='menu-element-form'>
      <input type="submit" value={text} className='menu-element-button'/>
    </form>
  )
}

export default MenuElement;