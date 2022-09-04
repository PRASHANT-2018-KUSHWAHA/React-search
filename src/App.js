import './App.css';
import SearchScrollBox from './search-scroll-box';
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  let searchTExtHendel = (event) =>{
    setSearchText(event.target.value);
    console.log(searchText);
  }
  return (
    <div className="App">
      <header className="App-header">
        <input className="search-box" placeholder='Search user by name, address, items, pincode' onChange={searchTExtHendel}/>
         <SearchScrollBox input={searchText} ></SearchScrollBox>
      </header>
    </div>
  );
}

export default App;
