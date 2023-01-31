import { LinkBotao, BotaoPlay, ContainerBotao } from "./StyledButton";

function Buttons({ name, url }) {
  return (
    <>
      <LinkBotao href={url} target="_blank">
        {name}
      </LinkBotao>
    </>
  );
}

export default Buttons;
