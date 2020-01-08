import styled from "styled-components"

const Canvas = styled.div`
  text-align: center;
  border-radius: 2.5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* margin: 1em 0; */

  /* 
  h3 {
    margin: 1em 0;
  } */

  .title-div {
    width: 95vw;
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0;
  }

  .bottom-div {
    width: 80vw;
  }
`
export default Canvas
