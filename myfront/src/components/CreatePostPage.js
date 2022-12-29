import {createPost} from '../services/BackApi'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function get_fields_values() {
  let json = {}
  json['job_title'] = document.getElementById('create-post-job-title').value
  json['job_description'] = document.getElementById('create-post-job-description').value
  return json
}
export function CreatePost() {
  const {accessToken} = useContext(AuthContext)
  return (
    <div className='create-post-container'>
      {accessToken ?
      <form onSubmit={e => {
          e.preventDefault()
          createPost(get_fields_values(), accessToken)
        }} className='create-post-form'>
        <p id='login-title'><b>Create Post</b></p>
        <label ><b>Job Title</b></label>
        <input id='create-post-job-title' className='login-text-input' type='text' name='username' placeholder=''/>
        <label ><b>Job Description</b></label>
        <input id='create-post-job-description' className='login-text-input' type='text' name='password' placeholder=''/>
        <input id='login-submit-button' type='submit' value='Post'/>
      </form>
      :
      <p>Authorization is required</p>}
    </div>
  );
}