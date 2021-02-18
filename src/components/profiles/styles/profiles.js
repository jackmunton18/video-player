import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;

`;
export const Title = styled.h1`
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
`;
export const Picture = styled.img`
    max-width: 150px;
    width: 100%;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`;
export const Name = styled.p`
    width: 100%;
    text-align: center;

`;
export const Item = styled.li`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-right: 30px;



    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
    &:hover > ${Picture} {
        border: 3px solid white;
    }
    &:last-of-type {
        margin-right: 0;
    }

`;