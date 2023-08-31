import { styled } from "styled-components";

interface ModalStyledType {
  ativo?: boolean;
  modo: 'atualizar' | 'ver mais';
}

const ModalStyled = styled.div<ModalStyledType>`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #04bf8a;
  position: absolute;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 50px 25px;
  display: ${(props) => props.ativo ? 'block' : 'none'}
`;

export default ModalStyled;