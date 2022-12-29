import './style.css'
import './container_styles.css'
import TopBar from './TopBar/TopBar'
import Menu from './Menu/Menu'

import {useSelector} from 'react-redux'
import Content from './Content'

import {AuthProvider} from '../context/AuthContext'

function App() {
  const menu_state = useSelector(state => state.menu_state.menu_state)
  return (
    <AuthProvider>
      <div id='app-container'>
        <TopBar/>
        {menu_state === 1 ? 
          <div>
            <Menu/>
            <Content/> 
          </div>:
          <Content/>}
      </div>
    </AuthProvider>
  );
}

export default App;
