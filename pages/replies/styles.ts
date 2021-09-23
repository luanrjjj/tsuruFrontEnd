import styled from 'styled-components';


export const Header = styled.header `  
  height:60px;
  background-color:rgb(46, 68, 105);
  
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
  float:right;
  margin-top:15px;
  
  

span {
  text-decoration: none;
  margin-right:10px;
  color:#FFF;
  font-size: 23px;
  
  
  
  


& + a { 
  margin-left:10px;
}
}
`

export const ThreadCreateSection = styled.div ` 
    margin-top:3rem;
    width:800px;
    padding-bottom:2em;
    left:20%;
    margin-bottom:20px;

    
    border-width:5px;
    border-style:solid;
    border-color:#e2e8f0;

    margin-left:0.25rem;
    margin-right:0.25rem;
    display:inline-block;
    position:relative;
    

h1 {
  justify-content:center;
  display:flex;
}


`
export const FormSection = styled.div `
max-width:1050px;
min-width:600px;
align-items:center;
justify-content: center;
display:flex;
box-sizing:border-box;


`

export const Form = styled.div `
display:block;
`