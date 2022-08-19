import styled from "styled-components"

export const StyledContainer = styled.div`
 min-height:100vh;
 background:#fff;
 color:#fff;
`
export const StyledHeading = styled.div`
   font-size: clamp(1.2rem, 5vw, 3rem);
   text-align:center;
   margin-top:1rem;
   margin-bottom:2rem;
   color:#008644;
   text-shadow: 0px 2px 2px #222;
   font-weight:bolder;
`

export const StyledContent = styled.div`
  width:100%;
  padding: 0 20px;
  color:#000;

  p {
    text-align: justify;
  }
`

export const StyledAnnouncement = styled.div`
  font-size: clamp(1rem, 2vw, 1rem);
  text-align:center;
  margin-top:1rem;
  margin-bottom:2rem;
  background-color:#000;
  color:#FFF; 
  text-shadow: 0px 2px 2px #D34B08;
  font-weight:bolder;
`




