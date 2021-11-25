import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <Main>
        <Img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
              alt="Clever Programmer Logo"></Img>
        <Text>Clever Programmer</Text>
      </Main>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  width: 100wh;
  height: 70px;
  background-color: rgb(28, 28, 36);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Main = styled.div`
  width: 100%;
  max-width: 900px;
  height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
`
const Img = styled.img`
  height: 50px;
  object-fit: cover;
`
const Text = styled.div`
  color: white;
  font-weight: 900;
  margin-left: 10px
`
