import styled from "styled-components";
import vinilHeader from "../img/vinil-kloud.webp";

export const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 55em;
`;

export const Carder = styled.div`
  display: grid;

  background: linear-gradient(#0d0d0d 40%, #ffffff 40%);
  border-radius: 10px;
`;

export const Title = styled.h3`
  color: white;
  text-align: center;
`;

export const VinilHeader = styled.img.attrs({
  //Passando como attrs
  src: `${vinilHeader}`,
})`
  margin: 0 auto;
  width: 200px;
  padding-top: 20px;
`;
