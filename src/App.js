import { useState } from "react";
import Daata from "./Data"
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./Components/GlobalStyle";
import Main from "./Components/MainComponent/Main";

function App() {
// reff
  const [searchState, setSearchState] = useState(Daata);
  const [cats, setCats] = useState(Daata);
  const [Data, setMainData] = useState(Daata);






  return (
    <div className="App">
       <GlobalStyle />
      <Nav  searchState = {searchState} setSearchState = {setSearchState}  />
      <Main searchState = {searchState} setSearchState = {setSearchState}  cats = {cats}  setCats = {setCats}  Data = {Data} />



    </div>
  );
}

export default App;
