import styled from 'styled-components';

module.exports = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  p {
    font-size: 12pt;
  }
  h1 {
    flex-grow: 2;
    text-align: center;
  }
  .whole-body {
    margin: auto;
    width: 980px;
    font-family: helvetica;
  }
  .shipping-info{
    flex-grow: 2;
    font-size: 10pt;
  }
  .bottomBar {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .NavDrops {
    position: absolute;
    width: 980px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
  }
  .blackbar {
    display: flex;
    justify-content: center;
    background-color: black;
    padding: 4px 2px 4px 2px;
    color: white;
    font-family: Helvetica;
    font-size: 12pt;
  }
  .blackBarText {
    color: white;
    font-family: Helvetica,
    font-size: 122pt;
  }
  .navs-text {
    flex-grow: 1.2;
    padding-left: 2em;
  }
  .titleRow {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .row{
    display: flex;
  }
  .column{
    display: flex;
    flex-direction: column;
  }
  .downArrow {
    align-self: center;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
  .upArrow {
    align-self: center;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
  }
  .signup {
    display: block;
    position: relative,
    margin-right: 8px;
    width: 180px;
    padding: 8px 20px 8px 20px;
  }
  .spreadFlex {
    display: flex;
    justify-content: space-between;
  }
  .searchForm {
    display: block;
    font-family: helvetica;
    font-size: 14px;
    width: 200px;
    height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    color: #000;
    background-color: #fff;
    border-width: 1px;
    border-radius: 4px;
    border-color: #ccc;
  }
  .specificCatEntry {
    display: flex;
    justify-content: space-between;
    padding: 1px 50px 1px 50px;
    background-color: white;
    width: 600px;
    z-index: 99999;
  }
  #searchDrop {
    position: absolute;
    display: block;
    background-color: white;
    padding: 8px 16px 8px 16px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    line-height: 3;
    margin-right: 8px;
    width: 195px;
    z-index: 999;
  }
`;
