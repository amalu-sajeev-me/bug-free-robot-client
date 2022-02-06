import styled from 'styled-components';

export const Form = styled.form`
    
    
`;
export const Input = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px;
    width: 60%;
`;
export const Label = styled.label`
    font-size: 16px
    font-weight: bolder;
`;
export const SubmitButton = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: bolder;
    overflow: hidden;
    position: relative;
    left: 25px;
    width: 25%;
    border: none;
    border-radius: 5px;
    padding: 3px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: rgba(218, 76, 33, 0.692);
    &:hover{
        background: rgba(133, 9, 9, 0.8);
        box-shadow: rgb(0, 0, 0) 3px 5px 6px;
    }
`;
