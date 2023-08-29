import { css, styled } from "styled-components";

interface ButtonStyledProps {
  modo: "cadastrar" | "ver mais" | "atualizar" | "excluir";
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${(props) => {
    switch (props.modo) {
      case "cadastrar":
        return css`
          width: 100%;
          padding: 10px 15px;
          margin-top: 10px;
          background-color: #8c1f28;
          border: none;
          border-radius: 3px;
          color: white;
        `;

      case "ver mais":
        return css`
          width: 50px;
          height: 25px;
          margin-left: 5px;
          background-color: gray;
          border: none;
          border-radius: 3px;
          color: white;
          font-size: 1rem;
        `;

      case "atualizar":
        return css`
          width: 50px;
          height: 25px;
          margin-left: 5px;
          background-color: green;
          border: none;
          border-radius: 3px;
          color: white;
          font-size: 1rem;
        `;

      case "excluir":
        return css`
          width: 50px;
          height: 25px;
          margin-left: 5px;
          background-color: red;
          border: none;
          border-radius: 3px;
          color: white;
          font-size: 1rem;
        `;

      default:
    }
  }}
`;

export default ButtonStyled;
