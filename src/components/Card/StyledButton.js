import styled from "styled-components";

export const ContainerBotao = styled.div`
    display: flex;

    width: 300px;
    margin: 0 auto;
    border-radius: 15px;
    
    text-align: center;
    justify-content: center;
    align-items: center;

`;

export const LinkBotao = styled.a`
    border: 1px solid #ff00ff;
    display: inline-flex;

    padding: 10px 10px 0;
    justify-content: left;
    align-content: left;

    text-decoration: none;
    width: 300px;
    
    border-radius: 10px;
    background: transparent;
    :visited {
        color: black;
    }
    :hover{
        color: #a60303;
    }
    :focus{
        color: #a60303;
    }
`;

export const TituloLogo = styled.p`
    font-size: 14px;
    display: block;
    height: auto;
    padding-left: 5px;
    text-decoration: none;
`;



/* IMPORTANDO IMG UTILIZANDO ATTRS  */
export const PlayLogo = styled.img.attrs(({src}) => ({
    src: src,
    alt: "streaming-logo"
}))`
    border: 1px solid #ff00ff;
    display: flex;
    width: 35px;
`;

