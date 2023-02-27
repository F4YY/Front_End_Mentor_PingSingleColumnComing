import styled from "styled-components";

export const Container = styled.div`
    --Blue: hsl(223, 87%, 63%);
    --Pale-Blue: hsl(223, 100%, 88%);
    --Light-Red: hsl(354, 100%, 66%);
    --Gray: hsl(0, 0%, 59%);
    --Very-Dark-Blue: hsl(209, 33%, 12%);
    font-size: 20px;
    font-Family: 'Libre Franklin';
    --reguler: 300;
    --semibold: 600;
    --bold: 700;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    h1{
        font-size: 2.3em;
        font-weight: var(--reguler);
        color: var(--Gray);
        margin:50px auto 0;
        @media screen and (max-width:600px){
            font-size: 1.4em;
            text-align: center;
        }
    }
    h2{
        font-size: .95em;
        font-weight: var(--reguler);
        color: var(--Very-Dark-Blue);
        margin: 20px auto 0;
        @media screen and (max-width:600px){
            font-size: .8em;
        }
    }
    h3{
        font-size: .6em;
        font-weight: var(--reguler);
        color: var(--Gray);
        margin: 20px auto;
    }
    h4{
        font-size: .7em;
        font-weight: var(--semibold);
        color: hsl(0, 100%, 74%);
        margin: 5px 0 0 32px;
        @media screen and (max-width:600px){
            margin: 5px auto 15px;
        }
    }
    span{
        font-size: 1.05em;
        font-weight: var(--bold);
        color: var(--Very-Dark-Blue);
    }
`