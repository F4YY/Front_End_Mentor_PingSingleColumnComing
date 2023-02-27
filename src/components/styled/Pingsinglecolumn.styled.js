import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Styledpingsinglecol = styled(Vstack)`
    width:645px;
    height: 900px;
    padding: 85px 5px 35px;
    @media screen and (max-width:600px){
        width: auto;
    }
`
export const Logo = styled.img`
    width: 87px;
    height: 27px;
    margin: 0 auto;
    @media screen and (max-width:600px) {
        width: 77px;
        height: 23px;
    }
`
//Styled for form & input box:
export const Styledform = styled.form`
    display: flex;
    flex-direction: row;
    height:auto;
    margin: 40px auto 0;
    @media screen and (max-width:600px){
        flex-direction: column;
        width: auto;
        justify-content: center;
        margin: 40px 20px 0;
    }
`
export const InputboxEmail = styled.input.attrs({
    id:'email',
    name:'email',
    type:'email',
    placeholder:'Your email address...',
})`
    width: 385px;
    height: 51px;
    font-size:.8em;
    padding-left:30px;
    border-radius: 30px;
    border: 1px solid var(--Pale-Blue);
    margin:0 15px 0 0;
    ::placeholder{
        color:var(--Pale-Blue);
    }
    @media screen and (max-width:600px){
        width: auto;
        height: 40px;
        margin: 0;
    }
`
export const ButtonNotify = styled.button.attrs({
    type: 'submit'
})`
    width: 200px;
    height: 55px;
    font-size: .85em;
    font-weight: var(--semibold);
    color:#fff;
    background-color: var(--Blue);
    border-radius: 30px;
    border-style: none;
    cursor:pointer;
    box-shadow: 0 5px 10px 0 var(--Pale-Blue);
    :hover{
        opacity: .7;
    }
    :active{
        color:var(--Blue);
        background-color: #fff;
        border: 1px solid var(--Blue);
    }
    @media screen and (max-width:600px){
        width: auto;
        height:45px;
        margin: 15px 0;
    }
`
export const Heroimage = styled.img`
    width: 647px;
    height: 385px;
    margin: 85px auto 0;
    @media screen and (max-width:600px){
        width: 95%;
        margin: 40px 10px;
    }
`
export const Socialiconsection = styled(Hstack)`
    margin:70px auto 0;
`
export const Socialicon = styled(FontAwesomeIcon)`
    border-radius: 50%;
    color:var(--Blue);
    padding: 6px;
    margin:2px;
    font-size: 18px;
    &:hover{
        color:#fff;
        background-color: var(--Blue);
        cursor: pointer;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 10px auto 5px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 5px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`