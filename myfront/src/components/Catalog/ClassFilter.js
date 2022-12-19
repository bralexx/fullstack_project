function options_parser(filter_src_name, filter_type, option_info) {
  return (
    <div key={filter_src_name + option_info.src_name + '_filter_option'} className='filter-element-option-container'>
      <input 
        // onClick={() => onClickHandler(filter_src_name, filter_type, class_name)}
        key={filter_type + option_info.src_name} type={filter_type === 'MULTIPLE_CHOICE'? 'checkbox' : 'radio'} 
        id={filter_src_name + '_' + option_info.src_name} 
        name={filter_src_name} 
        value={1}></input>
      <label className='filter-element-option-title'>{option_info.public_name}</label>
    </div>
  )
}
// function onClickHandler(filter_src_name, filter_type, class_name) {
//   if (filter_type === 'class_mul') {
//     filter_form_state[filter_src_name + '-' + class_name] = filter_form_state[filter_src_name + '-' + class_name] != true; 
//   } else {
//     filter_form_state[filter_src_name] = class_name
//   }
//   // cb = document.getElementById
//   // console.log(cb)
// }

function ClassFilter({filter_info}) {
  console.log(filter_info)
  let wrapper = option_info => options_parser(filter_info.src_name, filter_info.type, option_info)
  return (
    <fieldset id={filter_info.src_name + '_fieldset'} className='filter-element-container'>
      <p className='filter-element-title'>{filter_info.public_name}</p>
        {filter_info.options.map(wrapper)}
    </fieldset>
  );
}

export default ClassFilter;