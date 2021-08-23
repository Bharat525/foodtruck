import styled from "styled-components";

const PlaceDetails = ({ dta }) => {
  console.log(dta);
  return (
    <StyledPlace className="place-details">
      <div className="card">
        <ul>
          <li>{dta.foodType}</li>
          <li>{dta.location}</li>
          <li> Close </li>
        </ul>

        <img src={dta.imageUrl} alt="food image" />
      </div>
    </StyledPlace>
  );
};

const StyledPlace = styled.div`
padding-top:1rem;
  background-color: rgb(226, 226, 226);
  height: 100%;

  ul {
    li {
 

      list-style: none;
    }
  }

  .card {
    background-color:white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    
  display:flex;
  justify-content:space-between ;
  align-items:center;
    img {
    }
  }
`;

export default PlaceDetails;
