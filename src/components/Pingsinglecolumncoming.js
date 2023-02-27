import React from 'react';
import { Container } from './styled/Container.styled';
import {
  Logo,
  Styledpingsinglecol,
  Styledform,
  InputboxEmail,
  ButtonNotify,
  Heroimage,
  Vstack,
  Socialiconsection,
  Socialicon,
  Attribution,
  AttributionA
 } from './styled/Pingsinglecolumn.styled';
 import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import logo from './images/logo.svg';
import heroimage from './images/illustration-dashboard.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const socials = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/fays.dalgona",
  }
];

export const Pingsinglecolumncoming = () => {
  const formik = useFormik({
    initialValues:{
      email:''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please provide a valid email address').required('Email cannot be empty')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values,null,2))
    }
  })
  return (
    <Container>
      <Styledpingsinglecol>
        <Logo src={logo} alt='logo' />
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <h2>
          Subscribe and get notified
        </h2>
        <Styledform onSubmit={formik.handleSubmit}>
          <Vstack>
            <InputboxEmail
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={formik.errors.email && formik.touched.email && {
                color: 'var(--Light-Red)',
                borderColor: 'var(--Light-Red)',
                borderWidth: '2px',
              }}
            />
            {formik.touched.email && formik.errors.email ?
            (<h4><em>{formik.errors.email}</em></h4>) : null}
          </Vstack>
          <ButtonNotify>
            Notify Me
          </ButtonNotify>
        </Styledform>
        <Heroimage src={heroimage} alt='heroimage'/>
        <Socialiconsection>
          {socials.map(({icon,url})=>
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Socialicon icon={icon} key={url}/>
            </a>
          )}
        </Socialiconsection>
        <h3>
          &copy; Copyright Ping. All rights reserved.
        </h3>
      </Styledpingsinglecol>
      <footer>
        <Attribution>
              <AttributionA>
                  <p>Challenge by<a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1/" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Intro Sign Up Form.</a></p>
              </AttributionA>
              <AttributionA>
                  <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
              </AttributionA>
          </Attribution>
      </footer>
    </Container>
  )
}
