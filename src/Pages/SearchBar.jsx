import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  const [input, setInput] = useState("");
  return (
    <FormStyle>
      <div>
        <BiSearchAlt2 className="icon" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: "100%";
    position: "relative";
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  input {
    width: 85%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    font-size: 1.2rem;
    outline: none;
    padding: 1rem 3rem;
  }
  .icon {
    font-size: 2.4rem;
    color: white;
  }
`;

export default SearchBar;
