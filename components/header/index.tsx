import React, {useEffect,useState} from "react";
import {BsFillChatFill} from 'react-icons/bs';
import {AiFillEye,AiOutlineSearch} from 'react-icons/ai';



import {
  Container,
  ContainerContent,
  HeaderComponent,
  HeaderContainer,
  HeaderContent,
  HeaderLinks,
  HeaderLogo,
  HeaderTitle,

} from './styles'

import logoImg from '../../assets/images/origami.png';
import userImg from '../../assets/images/user.png';





const Header:React.FC = () => {


  

  



  return (
    <>
    <Container>
    <ContainerContent>
      <HeaderContainer>
        <HeaderComponent>

          <HeaderLogo><img src={logoImg.src}></img></HeaderLogo>
          <HeaderTitle>
          <span>Cerebriz</span>
          </HeaderTitle>

          <HeaderLinks>
            <span>Home</span>
            <span>Profile </span>
            <span>Cursos</span>
            
            
          </HeaderLinks>
         
          <HeaderContent>
            <div className="HeaderIcons">
           <AiOutlineSearch size={25} color={"#FFF"}/>
           
           </div>
            </HeaderContent>
          
        </HeaderComponent>
        </HeaderContainer>
        </ContainerContent>
        </Container>
        </>
        
        )

        }

        export default Header;