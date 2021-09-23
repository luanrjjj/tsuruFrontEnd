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


export const Header = styled.header `  
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

export const ContentSection = styled.div `
  display: flex;
  flex-direction:row;
  margin-top: 30px;
  
  position: relative;
  margin-left:auto;
  margin-right:auto;
  max-width:1050px;

`


export const FiltersSection = styled.div `
display:flex;
max-width:1050px;
display:flex;
margin-bottom:2rem;
justify-content:space-between;
padding-left:2.5rem;


div {
  display:flex;
  justify-content:space-between;
  width:400px;
  margin-top:0.8rem;

  a {
    color:#A0AEC0;
  }

}


button {
    border-radius: 16px;
    border-style: solid;
    border-width: 1px;
    box-shadow:rgba(50,138,241);


    font-size: 1rem;
    font-weight: 500;
    height:40px;


    width: 150px;
    background-color:rgba(50,138,241);
    color:rgba(255,255,255);
    padding-bottom: 0.83rem;
   
    padding-top: .5rem;
    cursor:pointer;

    &:hover {
      background-color:${shade(0.2,rgba(50,138,241,0.75))}
    }
  }
  a {

    &+a {
      margin-left:30px;
    }
  }

`
;



export const ThreadsSection = styled.div `


  width:100%;
  
 
`
export const Threads = styled.div ` 
max-width:1050px;
`
export const Thread = styled.div `  
  height: 100px;
  flex-direction: row;
  margin-bottom: 0.75rem;
  width:100%;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  background-color: rgb(252,252,252);

  border-style: solid;
  border-width: 1px;
  
  cursor: pointer;
  display:flex;

  &:hover {
    background-color:${shade(0.05,"#FCFCFC")};
  }
  
  li {
    list-style-type: none;
  }

 .userImg {
  margin-right:1.25rem;
   display:block;
   align-self: flex-start;
   

   div {
     display:flex;
     align-items:center;
     
   }
 }
  img {
  width:50px;
   height:50px;
  }

  
  `
  export const TitleThread = styled.div `
    display:flex;
    align-items: flex-start;
    margin-top:-0.25rem;
    height:50px;

    h1 {
      padding-right:1.5rem;
      font-size:16px;
      width: 600px;
      font-weight:800;
    }

    div {
      align-items:center;
      position:relative;
      flex-direction: row-reverse;
      display:flex;
      margin-left:auto;
      text-align:center;
      height:20px;
      margin-top:5px;
      
      .RepliesCount {
        margin-left:0.5rem;
        p {
          margin-left:0.1rem;
        }
        svg {
          width:20px;
        }


      .VisualizationsCount {
        margin-left:0.5rem;
        p {
          margin-left:0.1rem;
        }
        svg {
          width:20px;
        }
        
      }
      
    }
    a {
      color:#F56857;
      outline:none;
      font-size:0.66rem;
      text-align:center;
      width:6rem;
      display:block;
      border: 2.5px solid;
      border-color:#F56857;
      border-radius:10px;
      max-width: 100%;
      margin-right:1.5rem;
      margin-left:0.5rem;
      font-weight:800;
      
  
      
    }
    }

  `
  export const ThreadDetails = styled.div `
    display:flex;

    .Category,.Solved {
      margin-left:10px;
       
      outline:none;
      font-size:0.66rem;
      text-align:center;
      width:6rem;
      display:block;
      border: 2.5px solid;
     
      border-radius:10px;
      max-width: 100%;
      margin-right:1.5rem;
      margin-left:0.5rem;
      font-weight:800;
      height:20px;
    }

    .Solved {
      color:#68D391;
      border-color:#68D391;
    }

    .Category {
      color:#553C9A;
      border-color:#553C9A;
    }



  `
