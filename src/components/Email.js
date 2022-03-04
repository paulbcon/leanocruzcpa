import React,{useState,createRef} from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/mailbox.jpg'
import ReCAPTCHA from 'react-google-recaptcha'
import { navigate } from 'gatsby'


const Email = () => {
  const [state, setState] = useState({})
  const recaptchaRef = createRef()
  const [buttonDisabled, setButtonDisabled]  = useState(true)
  
  const handleChange = e => {
      setState({...state, [e.target.name]: e.target.value})
  }

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      const recaptchaValue = recaptchaRef.current.getValue()

      fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
            'form-name': form.getAttribute('name'),
            'g-recaptcha-response': recaptchaValue,
            ...state,
            }),
      })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  return (
    <>
     <EmailContainer>
         <EmailContent>
             <h1>For inquiries</h1>
             <p>Please leave your email and message here:</p>
             <form name="contact"
                   method="POST" 
                   data-netlify="true"
                   netlify-honeypot="bot-field"
                   data-netlify-recaptcha="true"
                   action="/thank-you"
                   onSubmit={handleSubmit}
             >
             <noscript>
                <p>This form won’t work with Javascript disabled</p>
            </noscript>    

                 <input type="hidden" name="bot-field" />      
                 <input type="hidden" name="form-name" value="contact" />      
                 <FormWrap>
                     <label htmlFor="yourname">Your Name:</label>
                     <input type="text" placeholder='Your Name' id="yourname" name="yourname" onChange={handleChange} required />
                     <label htmlFor='email'>Email:</label>
                     <input type="email" placeholder="Enter your email" id="email" name="email" onChange={handleChange} required />
                     <label htmlFor="message">Message:</label>
                     <textarea id="message" name="message" rows={5} cols={5} onChange={handleChange} required ></textarea>
                     <ReCAPTCHA 
                         ref={recaptchaRef}
                         sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                         size="normal"
                         id="recaptcha-google"
                         onChange={() => setButtonDisabled(false)}
                         />
                     <ButtonWrap>
                        <Button round="true" type="submit" disabled={buttonDisabled}>Submit</Button>          
                     </ButtonWrap>
                </FormWrap>
             </form>
         </EmailContent>
     </EmailContainer>
    </>
  )
}

export default Email

const EmailContainer = styled.div`
 background:linear-gradient(
     180deg,
     rgba(0,0,0,0.5) 0%,
     rgba(0,0,0,0.5) 35%,
     rgba(0,0,0,0.1) 100%
 ),    
 url(${EmailBg}) no-repeat center;
 background-size: cover;
 height:600px;
 width:100%;
 padding: 5rem calc((100vw - 1300px) /2);
 color:#fff;
 display:flex;
 justify-content: center;
 align-items: center;
 `

const EmailContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  h1 {
      text-align:center;
      margin-bottom: 1rem;
      font-size: clamp(1rem,5vw,3rem);
      padding:0 1rem;
  }

  p {
      text-align:center;
      font-size:clamp(1rem,2.5vw, 1.5rem);
      padding: 0 1rem;
      margin-bottom: 2rem;
  }

  form {
      z-index:10;
  }
`

const FormWrap = styled.div`
 input{
     padding: 1rem 1.5rem;
     outline:none;
     height: 48px;
     border-radius: 50px;
     border:none;
     margin-right: 1rem;
     margin-bottom: 1rem;
     width:100%;
     margin-right:0;
 }

 textarea {
    padding: 1rem 1.5rem;
    border:none;
    width:100%;
    height:100px;
    margin-bottom:1rem;
 }

 @media screen and (max-width:768px) {
     display:flex;
     flex-direction: column;
     padding: 0 1rem;

     input {
         margin-bottom: 1rem;
         width:100%;
         margin-right:0;
     }
 }
`
const ButtonWrap=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
const Button=styled.button`
background: ${({primary}) => (primary ? '#F26A2E': '#077BF1')};
 white-space:nowrap;
 padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
 color:#fff;
 font-size: ${({ big }) => (big ? '20px' : '16px')};
 outline:none;
 border:none;
 min-width:100px;
 text-decoration:none;
 transition:0.3s !important;
 border-radius: ${({round}) => (round ? '50px': 'none')};

 &:hover {
     background: ${({primary}) => (primary ? '#077BF1' : '#F26A2E')};
     transform: translateY(-2px);
 }
`