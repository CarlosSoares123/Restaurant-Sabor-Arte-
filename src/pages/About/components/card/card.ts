import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  height: 100%;

  background-color: #fff;
`
export const Container = styled.div`
  width: 100%;
  

  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
`

export const Figure = styled.figure`
  width: 100%;
  height: 250px;
  padding-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
`

export const Text = styled.div`
  

  p{
    text-align: justify;
  }
  p:nth-child(1){
    font-weight: bold;
    padding-bottom: 15px;
  }
`