import React, { useState } from 'react';

const MainPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <div>
        <h1>Tello lets you work more collaboratively and get more done.</h1>
        <h3>Tello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</h3>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e)}
          placeholder="Email"
        />
        <input 
          type="submit" 
          value="Sign Up - It's Free!"
        />
        <img alt="trello board image" />
      </div>
      <div>
        <h1>Work with any team</h1>
        <h3>Whether it's for work, a side project or even the next family vacation, Tello helps your team stay organized.</h3>
      </div>
      <div>
        <h1>Information at a glance</h1>
        <h3>Dive into the details by adding comments, attachments, due dates, and more directly to Tello cards. Collaborate on projects from beginning to end.</h3>
      </div>
      <div>
        <h1>Start Planning Today</h1>
        <h3>Sign up and become one of the millions of people around the world using Trello to get more done.</h3>
        <input type="submit" value="Get Started - It's Free!" />
      </div>
      <footer>
        Copyright &copy; 2020 Tello
      </footer>
    </div>
  );
};

export default MainPage;