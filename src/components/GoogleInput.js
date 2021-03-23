import styled from "styled-components";

export const GoogleInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  height: 25px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 65vw;
  max-width: 560px;
  margin: 0 auto;
  margin-top: 20px;

  &:hover {
    -webkit-box-shadow: 0px 2px 4px 3px rgba(232, 232, 232, 0.7);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }

  & > .search__inputIcon {
    color: #9aa0a6;
  }

  & > input {
    flex: 1;
    padding: 10px 10px;
    font-size: medium;
    border: none;
  }

  & > input:focus {
    outline-width: 0;
  }
`;
