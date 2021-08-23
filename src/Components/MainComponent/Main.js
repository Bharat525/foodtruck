import Aside from "../Aside/Aside";
import Map from "../Map/Map";
import styled from "styled-components";

const Main = ({Data , cats,  setCat}) => {
  return (
    <StyledMain className="main-container">
      <Aside  cats ={cats}  setCat = {setCat}   Data = {Data} />
      <Map />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  width:90%;
  margin:auto;
  margin-top:1rem;
`;

export default Main;
