import styled from 'styled-components';

const FormDivInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border-radius: 8px;
  width: 23rem;
  border: solid 1px rgb(160, 160, 160);
  overflow: hidden;
  padding: 8px;
  font: inherit;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1.5px;
  border-color: #4b57ff;
  background-color: #4b57ff;
  font-size: 1rem;
  color: #ffffff;
  &:hover,
  &:active {
    background-color: #212de0;
    border-color: #212de0;
  }
  cursor: pointer;
  transition: 0.25s all;
`;

export { FormDivInner, Input, Button };
