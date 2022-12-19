import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Catalog from './Catalog/Catalog'
import LoginPage from './LoginPage'
import {CreatePost} from './CreatePostPage'

function Content() {
  return (
    <div className='content-container'>
    <Router>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/login_page/' element={<LoginPage/>}/>
        <Route path='/create_post/' element={<CreatePost/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default Content;