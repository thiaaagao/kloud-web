import { LinkBotao, ContainerBotao, PlayLogo } from "./StyledButton";

function Buttons({ url, src, name }) {
  return (
    <>
      <ContainerBotao>
        <LinkBotao href={url} target="_blank">
          <PlayLogo src={src}>
          </PlayLogo>
        </LinkBotao>
      </ContainerBotao>
    </>
  );
}

export default Buttons;
