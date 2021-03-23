import styled from "styled-components";

export const GoogleButton = styled.button`
  margin: 4px;
  padding: 7px 15px;
  background-color: #f8f8f8;
  border: 1px solid white;
  color: #3c4043;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    border: 1px solid #dadce0;
  }

  &:focus {
    outline: 0;
    border: 1px solid #59bfff;
  }
`;
