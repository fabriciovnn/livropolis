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
          border: none;
          border-radius: 3px;
          background-color: #026873;
          color: white;

          &:hover {
            background-color: #04bf8a;
            transition: 0.3s;
            box-shadow: 2px 5px 5px 0px gray;
            font-weight: bold;
            cursor: pointer;
          }
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
          font-weight: bold;

          &:hover {
            background-color: #373737;
            transition: 0.3s;
            box-shadow: 0 0 5px black;
            cursor: pointer;
          }
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
          font-weight: bold;

          &:hover {
            background-color: #00e42a;
            transition: 0.3s;
            box-shadow: 0 0 5px black;
            cursor: pointer;
          }
        `;

      case "excluir":
        return css`
          width: 50px;
          height: 25px;
          margin-left: 5px;
          background-color: #990000;
          border: none;
          border-radius: 3px;
          color: white;
          font-size: 1rem;
          font-weight: bold;

          &:hover {
            background-color: #fd3545;
            transition: 0.3s;
            box-shadow: 0 0 5px black;
            cursor: pointer;
          }
        `;

      default:
    }
  }}
`;

export default ButtonStyled;
