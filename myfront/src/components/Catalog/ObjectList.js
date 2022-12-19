import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {makeGetContentRequest} from '../../services/BackApi'
import {Object} from './Object'

function createObject(vacancy) {
  return <Object vacancy={vacancy}></Object>
}

function ObjectList() {
  const dispatch = useDispatch()
  useEffect(() => {
    makeGetContentRequest(dispatch, {})
  }, [])
  const data = useSelector(state => state.content.content)
  // console.log('content from back: {')
  // console.log(data)
  // console.log('}')
  return (
    <div className='object-list'>
      {data.map(createObject)}
    </div>
  );
}

export default ObjectList;