import styled from "styled-components";

export const ContainerBotao = styled.div`
    display: flex;

    border: 3px solid #a60303;
    width: 300px;

    border-radius: 15px;
    
    text-align: center;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
`;

export const LinkBotao = styled.a`
    border: 1px solid #ff00ff;
    display: inline-flex;

    justify-content: left;
    align-content: left;

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


/* IMPORTANDO IMG UTILIZANDO ATTRS  */
export const PlayLogo = styled.img.attrs(({src}) => ({
    src: src,
    alt: "streaming-logo"
}))`
    border: 1px solid #ff00ff;
    display: flex;
    width: 35px;
`;

