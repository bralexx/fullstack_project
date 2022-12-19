import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {makeGetContentRequest} from '../../services/BackApi'


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
    <ul className='object-list'>
      {data.map(obj => <li key={obj.title} className='object'>{obj.job_title}</li>)}
    </ul>
  );
}

export default ObjectList;