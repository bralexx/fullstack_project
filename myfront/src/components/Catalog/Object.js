const max_description_length = 1000
const all_skills = {
    'python_required':'Python', 
    'excel_required':'Excel', 
    'r_lang_required':'R', 
    'spark_required':'Spark'}

export function Object({vacancy}) {
  // console.log(vacancy)
    let required_skills = []
  for (let skill_key in all_skills) {
    if (vacancy[skill_key]) {
      required_skills.push(all_skills[skill_key])
    }
  }
  let description = ''
  if (vacancy.job_description.length > max_description_length) {
    description = vacancy.job_description.substring(0, max_description_length)
  } else {
    description = vacancy.job_description
  }
  
  return (
    <div className='object-container'>
      <p className='object-title'>{vacancy.job_title}</p>
      <p className='object-text-feature'>Rating: <span style={{'color':'hsl(' + ((vacancy.rating - 1) / 4 * 80 + 20) + ', 100%, 30%)'}}>{vacancy.rating}</span></p>
      <p className='object-text-feature'>Estimated Salary: {vacancy.estimated_salary}</p>
      <p className='object-text-feature'>Required skills: {required_skills.join(', ')}</p>
      <p className='object-description'>{description}...</p>
    </div>
  )
}