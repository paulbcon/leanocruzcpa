import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.cards {
    display: flex;
    justify-content: center;
    align-content: space-between;
    flex-wrap:wrap;
  }
  
  .card {
    background: #fff;
    width: 24em;
    border-radius: 0.6em;
    margin: 1em;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    transition: all ease 200ms;
  }
  
  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
  
  .card img {
    width: 100%;
    object-fit: cover;
  }
  
  .card h2 {
    color: #222;
    margin-top: -0.2em;
    line-height: 1.4;
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    transition: all ease-in 100ms;
  }
  
  .card p {
    color: #777;
  }
  
  .card h5 {
    color: #bbb;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 0.04em;
    margin: 1.4em 0 0 0;
    text-transform: uppercase;
  }
  
  .card-body {
    padding: 1.2em;
  }
  
`