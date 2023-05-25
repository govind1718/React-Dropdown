import React, {  useState } from "react";
import './App.css';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  >
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        District
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Dropdown text="Vellore">
            <ChildDropdown text="Katpadi" />
            <ChildDropdown text="Anaicut" />
            <ChildDropdown text="Gudiyattam" />
            <ChildDropdown text="Arani" />
          </Dropdown>
          <Dropdown text="Villupuram">
            <ChildDropdown text="Gingee" />
            <ChildDropdown text="Kallakkurichi" />
            <ChildDropdown text="Nettapakkam" />
            <ChildDropdown text="Panruti" />
          </Dropdown> 
          <Dropdown text="Salem" >
          <ChildDropdown text="Mettur" />
            <ChildDropdown text="Valapady" />
            <ChildDropdown text="Edapadi" />
            <ChildDropdown text="Omalur" />
            </Dropdown> 
            <Dropdown text="Coimbatore" >
           <ChildDropdown text="Sulur" />
            <ChildDropdown text="Ukkadam" />
            <ChildDropdown text="Rs Puram" />
            <ChildDropdown text="RaceCourse" />
            </Dropdown> 
        </div>
      )}
    </div>
  );
};
const Dropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChildDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <button className="dropdown-item-toggle" onClick={toggleChildDropdown}>
        {text}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const ChildDropdown = ({ text }) => {
  return (
    <div className="sub-dropdown-item " >
      {text}
    </div>
  );
};

export default App;