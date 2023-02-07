import styled from "styled-components";
import vinilHeader from "../img/vinil-kloud.webp";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 400px;
  height: 700px;
`;

export const Carder = styled.div`
  
  
  background: linear-gradient(#0d0d0d 40%, #ffffff 40%);
  border-radius: 2px;
  transition: 100ms;
  :hover{
    border-radius: 10px;
    
  }

`;

export const VinilHeader = styled.img.attrs({
  //Passando como attrs
  src: `${vinilHeader}`,
})`
  margin: 0 auto;
  width: 50%;
`;
