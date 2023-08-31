import { isFuture } from "date-fns";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ButtonStyled from "../components/ButtonStyled";
import InfosStyled from "../components/InfosStyled";
import InputStyled from "../components/InputStyled";
import LiStyled from "../components/LiStyled";
import ModalStyled from "../components/ModalStyled";
import TextAreaStyled from "../components/TextAreaStyled";
import WrapperForm from "../components/WrapperForm";
import FlexContainerStyled from "../shared/FlexContainerStyled";

interface LivrosType {
  titulo: string;
  autor: string;
  ano: string;
  genero: string;
  descricao: string;
  id: string;
}

function Formulario() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    autor: "",
    ano: "",
    genero: "",
    descricao: "",
  });

  const [livros, setLivros] = useState<LivrosType[]>([]);

  function enviarDados() {
    if (!formulario.titulo) {
      alert("é necessário enviar um título");
      return;
    }

    if (!formulario.autor) {
      alert("é necessário enviar um autor");
      return;
    }

    if (!formulario.genero) {
      alert("é necessário enviar um gênero");
      return;
    }

    if (!formulario.descricao) {
      alert("é necessário enviar uma descrição");
      return;
    }

    const data = new Date(formulario.ano);
    const dataFutura = isFuture(data);

    if (dataFutura) {
      alert("É necessário que não seja uma data futura");
      return;
    }

    setLivros([
      ...livros,
      {
        titulo: formulario.titulo,
        ano: formulario.ano,
        genero: formulario.genero,
        descricao: formulario.descricao,
        autor: formulario.autor,
        id: uuidv4(),
      },
    ]);

    alert("Livro enviado com sucesso");
    setFormulario({
      titulo: "",
      autor: "",
      ano: "",
      genero: "",
      descricao: "",
    });
  }

  function mudaEstado(
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
  }

  return (
    <FlexContainerStyled>
      <ModalStyled ativo modo="atualizar">
        <ul>
          <LiStyled>Titulo</LiStyled>
          <LiStyled>Autor</LiStyled>
          <LiStyled>Ano</LiStyled>
          <LiStyled>Genero</LiStyled>
          <LiStyled>Descrição</LiStyled>
          <LiStyled>Id</LiStyled>
        </ul>
      </ModalStyled>

      <WrapperForm>
        <h1>Livrópolis</h1>
        <span>Cadastre seu livro aqui!</span>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            enviarDados();
          }}
        >
          <InputStyled
            value={formulario.titulo}
            onChange={mudaEstado}
            type="text"
            name="titulo"
            placeholder="Título"
          />
          <InputStyled
            value={formulario.autor}
            onChange={mudaEstado}
            type="text"
            name="autor"
            placeholder="Autor"
          />
          <InputStyled
            value={formulario.ano}
            onChange={mudaEstado}
            type="date"
            name="ano"
            placeholder="Ano de Publicação"
          />
          <InputStyled
            value={formulario.genero}
            onChange={mudaEstado}
            type="text"
            name="genero"
            placeholder="Gênero"
          />
          <TextAreaStyled
            name="descricao"
            placeholder="Descrição"
            onChange={mudaEstado}
            value={formulario.descricao}
          ></TextAreaStyled>
          <ButtonStyled modo="cadastrar" type="submit">
            Cadastrar
          </ButtonStyled>
        </form>
      </WrapperForm>

      <WrapperForm>
        <ul>
          {livros.map((item, index) => (
            <LiStyled>
              <InfosStyled>
                <strong>Título: </strong>
                {item.titulo} | <strong>Autor: </strong> {item.autor}
              </InfosStyled>
              <div>
                <ButtonStyled
                  modo="ver mais"
                  onClick={() => {
                    alert(
                      `Título: ${item.titulo}\nAutor: ${item.autor}\nDescrição: ${item.descricao} \nAno: ${item.ano} \nGênero: ${item.genero}\nId: ${item.id}`
                    );
                  }}
                >
                  ver mais
                </ButtonStyled>
                <ButtonStyled
                  modo="atualizar"
                  onClick={() => {
                    console.log(`Atualizar livro de índice ${index}`);

                    const novoNome = prompt("Informe o novo título:");
                    const novoAutor = prompt("Informe o novo autor:");

                    const aux = [...livros];
                    aux[index] = {
                      ...aux[index],
                      titulo: novoNome || aux[index].titulo,
                      autor: novoAutor || aux[index].autor,
                    };

                    setLivros(aux);
                  }}
                >
                  Atualizar
                </ButtonStyled>
                <ButtonStyled
                  modo="excluir"
                  onClick={() => {
                    const confirma = confirm(
                      "Tem certeza que seja excluir o livro?"
                    );

                    if (confirma) {
                      const aux = [...livros];
                      aux.splice(index, 1);
                      setLivros(aux);
                    }
                  }}
                >
                  excluir
                </ButtonStyled>
              </div>
            </LiStyled>
          ))}
        </ul>
      </WrapperForm>
    </FlexContainerStyled>
  );
}

export default Formulario;
