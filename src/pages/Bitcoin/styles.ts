import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 2rem;
        width: 120px;
        height: 120px;
    }

    h1 {
        color: var(-orange);
        margin-top: 3.6rem;

        strong {
            color: var(--orange);
            font-weight: 600;
        }
    }

    h3 {
        text-align: center;
        color: var(--black-title);
        font-weight: 600;
        margin-top: 2.6rem;

        strong {
            color: var(--orange);
            font-weight: 600;
        }
    }

    p {
        color: var(--orange);
        font-size: 3rem;
        font-weight: 600;
        margin-top: 1.6rem;
    }
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    
    width: min(50%, 350px);
    text-align: center;

    a {
        background: var(--orange);
        padding: 1rem;
        text-decoration: none;
        width: 100%;
        border: 1px solid var(--black-title);
        border-radius: 8px;

        color: var(--black-title);
        font-weight: 500;

        & + a {
            margin-top: 1.6rem;
        }
    }

`;
export const Footer = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        margin-bottom: 1rem;
        color: var(--black-title);
    }

    .links-social-medias {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        a {
            margin-left: 1rem;
        
        img {
            width: 35px;
        }
    
    }
    
`;