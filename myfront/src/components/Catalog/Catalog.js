import FilterList from './FilterList'
import ObjectList from './ObjectList'
import './style.css'

function Catalog() {
  return (
    <div className='catalog-div'>
      <FilterList/>
      <div className='object-list-div'><ObjectList/></div>
    </div>
  );
}

export default Catalog