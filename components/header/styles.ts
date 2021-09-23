import styled from 'styled-components';
import { rgba, shade } from 'polished';

export const Container = styled.div`
margin-left:auto;
margin-right:auto;
padding-bottom:2em;

  `
 
export const ContainerContent = styled.div `
/*
margin-left: auto;
margin-right: auto;
min-width:600px;
max-width:1050px;
*/

`
export const HeaderContainer = styled.header `  
 max-width:100%;
 background-color:rgb(46, 68, 105);
`


export const HeaderComponent = styled.header `  
  height:60px;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  justify-content:space-between;
  max-width:1050px;
  min-width:600px;
  
`;


export const HeaderLogo = styled.div`

  align-items: center;
  width:30px;
  position:absolute;

  >img{
    height: 36px;
    margin-top:10px;
    margin-left:10px;
  }
  
`
export const HeaderContent = styled.div `
  
  margin-top:17px;
  margin-right:20px;

.HeaderIcons {
  
}
  

span {
  text-decoration: none;
  margin-right:10px;
  color:black;
  font-size: 23px;
  
  
  
  


& + a { 
  margin-left:10px;
}
}
`

export const HeaderTitle = styled.div `
    display:flex;
    margin-left:50px;
    margin-top:10px;
    color:#FFF;
    font-weight:700;
    font-size:25px;


`
export const HeaderLinks = styled.div `
margin-top:15px;
margin:auto;

  
  

  span {
    text-decoration: none;
    margin-right:10px;
    color:#FFF;
    font-size: 16px;
    
    
    
    
  
  
  & + a { 
    margin-left:10px;
  }
  }
`