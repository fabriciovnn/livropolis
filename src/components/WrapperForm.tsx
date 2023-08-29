import styled from "styled-components";

const WrapperForm = styled.div`
  min-width: 420px;
  max-width: 500px;
  height: 500px;
  background-color: #044040;
  display: flex;
  flex-direction: column;

  padding: 0 20px;
  border-radius: 10px;

  h1 {
    text-align: center;
    font-size: 4.8rem;
    margin-top: 30px;
    color: #d92525;
  }

  span {
    text-align: center;
    font-size: 1.2rem;
    padding-top: 10px;
    color: white;
    border: 2px solid white;
    width: 30%;
    border-radius: 50px;
    padding: 5px;
    align-self: center;
    margin-top: 10px;
  }
`;

export default WrapperForm;
