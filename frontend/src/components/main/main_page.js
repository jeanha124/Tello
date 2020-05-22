import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../nav/navbar';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [email, setEmail] = useState('');

  return (
    <MainBody>
      <NavBar />
      <TopDiv>
        <Text>Tello lets you work more collaboratively and get more done.</Text>
        <Text2>Tello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</Text2>
        <Double>
          <Email 
            type="email"
            value={email}
            onChange={(e) => setEmail(e)}
            placeholder="Email"
          />
          <Link to={'/signup'}><Button>Sign Up - It's Free!</Button></Link>
        </Double>
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="trello board image" />
      </TopDiv>
      <div>
        <h1>Work with any team</h1>
        <h3>Whether it's for work, a side project or even the next family vacation, Tello helps your team stay organized.</h3>
        <img src="../../../public/tello-img2.png" />
      </div>
      <div>
        <h1>Information at a glance</h1>
        <h3>Dive into the details by adding comments, attachments, due dates, and more directly to Tello cards. Collaborate on projects from beginning to end.</h3>
      </div>
      <div>
        <h1>Start Planning Today</h1>
        <h3>Sign up and become one of the millions of people around the world using Trello to get more done.</h3>
        <Link to={'/signup'}><Button>Get Started - It's Free!</Button></Link>
      </div>
      <footer>
        Copyright &copy; 2020 Tello
      </footer>
    </MainBody>
  );
};

export default MainPage;

const MainBody = styled.div`
  box-sizing: border-box; 
`

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  background: linear-gradient(135deg, #0079bf, #5067c5);
  height: 800px;
  width: 100%;
  color: white;
`

const Text = styled.h1`
  margin: 0 auto;
  line-height: 50px;
  width: 600px;
  font-size: 45px;
`
const Text2 = styled.h3`
  margin: 0 auto;
  line-height: 30px;
  width: 600px;
  font-size: 25px;
`
const Button = styled.button`
  background-color: #61bd4f;
  border-radius: 4px;
  height: 55px;
  width: 280px;
  color: white;
  font-size: 25px;
`
const Email = styled.input`
  width: 300px;
  border-radius: 4px;
  font-size: 20px;
`

const Double = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  width: 600px;
  margin: 0 auto;
`