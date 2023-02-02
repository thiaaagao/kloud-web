import { Container, Carder, VinilHeader } from "./StyledCard";
import Buttons from "./Buttons";
import LogoDeezer from "../img/deezer-icon.svg"; /* IMPORTANDO A LOGO UTILIZANDO O SRC DO STYLECARD.JS */
import LogoYoutube from "../img/youtube-icon.svg";
import LogoSpotify from "../img/spotify-icon.svg";
import LogoApple from "../img/applemusic-icon.svg";


function Card() {
  return (
    <>
      <Container>
        <Carder>
          <VinilHeader></VinilHeader>
          <Buttons name="Play" url="https://www.google.com/" src={LogoSpotify}></Buttons>
          <Buttons  url="https://www.google.com/" src={LogoYoutube}></Buttons>
          <Buttons  url="https://www.google.com/" src={LogoApple}></Buttons>
          <Buttons  url="https://www.google.com/" src={LogoDeezer}></Buttons>
        </Carder>
      </Container>
    </>
  );
}

export default Card;
