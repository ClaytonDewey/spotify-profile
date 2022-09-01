import styled from "styled-components/macro";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 350px;

  input {
    border: 0;
    border-radius: 500px;
    color: #000;
    height: 40px;
    padding: 6px 48px;
    text-overflow: ellipsis;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 0.8125rem;
    font-weight: 400;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
export default StyledSearchBar;
