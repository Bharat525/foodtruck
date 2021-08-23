import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const Aside = ({ Data, cats, setCats }) => {
  const dropDownFun = (e) => {
    console.log(e.target.value);
    if (e.target.value === "All") {
      return setCats(Data);
    } else {
      let filterData = Data.filter((f) => {
        return f.foodType === e.target.value;

        console.log(f);
      });
      setCats(filterData);
    }
  };

  return (
    <StyledAside className="aside">
      <div className="dropDown-container">
        <h2>Resturants &  Hotels around you</h2>

        <FormControl className="main">
          <NativeSelect onChange={dropDownFun}>
            <option value={"All"}>All</option>
            <option value={"Chinese food"}>Chinese food</option>
            <option value={"Sandwiches"}>Sandwiches</option>
            <option value={"Cheese Burger"}>Cheese Burger</option>
            <option value={"Cake"}>Cake</option>
            <option value={"Chaat"}>Chaat</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div className="food-truks">
        {Data?.map((dta, i) => (
          <PlaceDetails dta={dta} />
        ))}
      </div>
    </StyledAside>
  );
};

const StyledAside = styled.div`

  height: 80vh;
  overflow: scroll;
  div {
    h2 {
      font-size: 1.1rem;
      margin-bottom:1rem;
      color:grey;
    }

    .dropDown {
      width: 100%;

      NativeSelect{
        width: 100%;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FF5533;
    border-radius: 20px;
    border: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default Aside;
