import styled from "styled-components";

export const ContainerBotao = styled.div`
  display: flex;

  margin: 0 auto;
  border-radius: 15px;

  text-align: center;
  justify-content: space-around;
  align-items: center;
`;

export const LinkBotao = styled.a`
  border: 3px solid #a60303;
  display: flex;

  text-decoration: none;
  min-width: 200px;

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
