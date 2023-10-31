import { FaSearch } from "react-icons/fa";
import "../Form/Form.css"

export default function Form({value, onChange}) {
  return (
    <div className="FormContainer">
      <form className="form">
        <FaSearch className="searchIcon" />
        <input type="text" placeholder="Search Movie" className="searchMovie" value={value} onChange={onChange}/>
      </form>
    </div>
  );
}
