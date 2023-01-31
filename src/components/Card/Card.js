import { Container, Carder, Title, VinilHeader } from "./StyledCard";
import Buttons from "./Buttons";

function Card({ title }) {
  return (
    <>
      <Container>
        <Carder>
          <VinilHeader></VinilHeader>
          <Title>Listen KLOUD - AUTONOMY</Title>
          <Buttons
            name="Spotify"
            url={"https://open.spotify.com/artist/24Hb4GKFYquK73R8mTyInu"}></Buttons>
          <Buttons
            name="Youtube"
            url={"https://www.youtube.com/@wearekloud"}></Buttons>
          <Buttons
            name="Deezer"
            url={"https://https://www.deezer.com/br/artist/4348806"}></Buttons>
          <Buttons
            name="Apple Music"
            url={"https://music.apple.com/us/artist/kloud/1351315768"}></Buttons>
        </Carder>
      </Container>
    </>
  );
}

export default Card;
