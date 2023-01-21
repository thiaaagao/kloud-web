import styled from "styled-components";
import vinilHeader from "../img/vinil-kloud.webp";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const Carder = styled.div`
  display: flex;

  justify-content: center;
  border-radius: 10px;

  width: 350px;
  height: 40em;

  background: linear-gradient(#0d0d0d 40%, #ffffff 40%);
`;
export const Title = styled.h3`
  color: white;
  text-align: center;
`;

export const VinilHeader = styled.img.attrs({
  //Passando como attrs
  src: `${vinilHeader}`,
})`
  padding-top: 25px;
  width: 250px;
  justify-content: center;
`;
