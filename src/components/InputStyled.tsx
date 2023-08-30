import { styled } from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #313131;
  outline: none;
  background: transparent;
  border-radius: 0;
  color: #313131;
  margin-top: 20px;
  font-size: 1.6rem;

  &::placeholder {
    color: #313131; /* Substitua pela cor desejada */
  }
`;

export default InputStyled;
