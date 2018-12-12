import React from 'react';
import SpecificCatEntry from './specificCatEntry.jsx';
import styled from 'styled-components';
//onMouseOut={props.toggle}
const CatEntStyled = styled.div`
  padding-bottom: 1em;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
  zindex: 999;
  &:hover {
    font-weight: bold;
  }
`;
var CategoryEntry = props => {
  return (
    <CatEntStyled
      onMouseOver={e => {
        props.displayBox(props.name);
      }}
    >
      {props.name}
    </CatEntStyled>
  );
};
export default CategoryEntry;
