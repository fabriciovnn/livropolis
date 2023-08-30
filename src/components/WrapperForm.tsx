import styled from "styled-components";

const WrapperForm = styled.div`
  min-width: 420px;
  max-width: 500px;
  height: 500px;
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 10px 30px 0px black;

  padding: 0 20px;
  border-radius: 10px;

  h1 {
    text-align: center;
    font-size: 4.8rem;
    margin-top: 30px;
    background: linear-gradient(to bottom, #04bf8a, #026873);
    -webkit-background-clip: text; /* para navegadores baseados em WebKit, como o Chrome e o Safari */
    color: transparent;
  }

  span {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 10px;
    color: #026873;
    border: 2px solid #026873;
    width: 40%;
    border-radius: 50px;
    padding: 5px;
    align-self: center;
    margin-top: 10px;
  }
`;

export default WrapperForm;
