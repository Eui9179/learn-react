import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 8px;
  gap: 3px;
`;

export const DeleteButton = styled.button`
  border-radius: 8px;
  border: 1.5px;
  border-color: #e73939e1;
  background-color: #e73939e1;
  font-size: 15px;
  color: #ffffff;
  &:hover,
  &:active {
    background-color: #be2c2ce1;
    border-color: #be2c2ce1;
  }
  cursor: pointer;
  transition: 0.25s all;
`;

export const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
