import styled from "styled-components";

export const ContainerBotao = styled.div`
  display: flex;

  width: 300px;
  margin: 0 auto;
  border-radius: 15px;

  text-align: center;
  justify-content: space-around;
  align-items: center;
`;

export const LinkBotao = styled.a`
  border: 3px solid #a60303;
  display: flex;

  jusfity-content: center;
  align-itens: center;
  jusfity-itens: center;

  text-decoration: none;
  width: 700px;

  border-radius: 10px;
  background: white;
  :visited {
    color: black;
  }
  :hover {
    color: #a60303;
  }
  :focus {
    color: #a60303;
  }
`;

export const TituloLogo = styled.p`
  display: inline-block;
  font-size: 18px;
  padding-left: 100px;
`;

/* IMPORTANDO IMG UTILIZANDO ATTRS  */
export const PlayLogo = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "streaming-logo",
}))`
  display: block;
  width: 40%;
  margin: 0 auto;
`;
