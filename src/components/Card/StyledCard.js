import styled from "styled-components";
import vinilHeader from "../img/vinil-kloud.webp";

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  box-sizing: border-box;
  width: 350px;
  height: 550px;
`;

export const Carder = styled.div`
  
  display: grid;  
  background: linear-gradient(#0d0d0d 40%, #ffffff 40%);
  border-radius: 5px;

  margin-top: 25px;
  padding-bottom: 15px;
  padding-top: 50px;
`;


export const VinilHeader = styled.img.attrs({
  //Passando como attrs
  src: `${vinilHeader}`,
})`
  margin: 0 auto;
  width: 200px;
`;
