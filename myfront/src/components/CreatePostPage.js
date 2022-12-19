import {createPost} from '../services/BackApi'

function get_fields_values() {
  let json = {}
  json['job_title'] = document.getElementById('create-post-job-title').value
  json['job_description'] = document.getElementById('create-post-job-description').value
  return json
}
export function CreatePost() {
  return (
    <div className='login-page-container'>
      <form onSubmit={e => {
          e.preventDefault()
          createPost(get_fields_values())
        }} className='login-page-form'>
        <text id='login-title'><bf>Create Post</bf></text>
        <label for='Username'><b>Job Title</b></label>
        <input id='create-post-job-title' className='login-text-input' type='text' name='username' placeholder=''/>
        <label for='Password'><b>Job Description</b></label>
        <input id='create-post-job-description' className='login-text-input' type='text' name='password' placeholder=''/>
        <input id='login-submit-button' type='submit' value='Post'/>
      </form>
    </div>
  );
}