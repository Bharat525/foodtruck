import { TextField } from "@material-ui/core";
import styled from "styled-components";

const Nav = ({ searchState, setSearchState }) => {


  function tittleCase(str){
    str = str.toLowerCase().split("");
    for(var i = 0 ; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }

    return str.join("")

  }

  const SearchFun = (e)=>{
    console.log(e.target.value)

    let lCase = tittleCase(e.target.value)
    let array = [];
    searchState.forEach((a) =>{
      if (a.name.indexOf(lCase) !== -1) array.push(a);


    })




  }



  return (
    <Navbar className="navigation">
      <div className="parent">
        <div className="logo">
          <h2>FoodTruck</h2>
        </div>


        <div className="search-container">
          <TextField  onChange = {SearchFun}   label="Search" placeholder="What are you looking for" />
        </div>
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
color:white;
  background-color: #FF5533;
  height: 10vh;


  .parent {
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:auto;
    display: flex;
    height: 8vh;
    .search-container{
      
      label, placeholder{
        color:white
     
      }

     
    }


  }
`;

export default Nav;
