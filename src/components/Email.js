import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/mailbox.jpg'
import { NetlifyForm, Honeypot } from "react-netlify-forms"
import { Button } from 'react-bootstrap'

const Email = () => {
    
    return (
        <>
            <EmailContainer>
                <EmailContent>
                    <h1>For inquiries</h1>
                    <p>Please leave your email and message here:</p>
                    <NetlifyForm
                        name='contact'
                        action='/thank-you'
                        honeypotName='bot-field'
                        onSuccess={(response, context) => {
                            console.log('Successfully sent form data to Netlify Server')
                            context.formRef.current.reset()
                        }}
                    >
                        {({ handleChange, success, error }) => (
                            <>
                                <Honeypot />
                                {success && (
                                    <p>Thanks for contacting us!</p>
                                )}

                                {error && (
                                    <p>
                                        Sorry, we could not reach servers. Please contact (818) 378-8245 to learn more about our services. Thank you.
                                    </p>
                                )}
                                <FormWrap>
                                    <label htmlFor="yourname">Your Name:</label>
                                    <input type="text" placeholder='Your Name' id="yourname" name="yourname" onChange={handleChange} aria-required="true" />
                                    <label htmlFor='email'>Email:</label>
                                    <input type="email" placeholder="Enter your email" id="email" name="email" onChange={handleChange} aria-required="true" />
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" name="message" rows={5} cols={5} onChange={handleChange} aria-required="true" ></textarea>

                                    <ButtonWrap>
                                        <Button variant="primary" type="submit">Submit</Button>{' '};
                                        <Button variant="warning" type="reset">Reset</Button>
                                    </ButtonWrap>
                                </FormWrap>
                            </>
                        )}

                    </NetlifyForm>
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
const ButtonWrap = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

