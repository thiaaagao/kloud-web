import {
  LinkBotao,
  ContainerBotao,
  PlayLogo,
  TituloLogo,
} from "./StyledButton";

function Buttons({ url, src, name }) {
  return (

      <LinkBotao href={url} target="_blank">
      
        <PlayLogo src={src}></PlayLogo>
      
        <TituloLogo>{name}</TituloLogo>
      
      </LinkBotao>

  );
}

export default Buttons;
