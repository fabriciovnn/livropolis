import { styled } from "styled-components";

const TextAreaStyled = styled.textarea`
  margin-top: 20px;
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  border: 2px solid #313131;
  height: 90px;
  resize: none;
  background: transparent;
  font-size: 1.6rem;

  &::placeholder {
    color: #313131; /* Substitua pela cor desejada */
  }
`;

export default TextAreaStyled;
