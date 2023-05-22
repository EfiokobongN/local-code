import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import Layout from './Layout';
import LoginControl from './LoginControl';
import MainContent from './MainContent';
import NewCounter from './NewCounter';
import NewUserInfo from './NewUserInfo';
import NumberList from './NumberList';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
import UserList from './UserList';
//import Welcome from './Welcome';
//import Message from './Message';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page-header">
          <NavLink to="/home" exact={true} activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/product" activeClassName="active">
            Product
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="page-content">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/product:id">
              <ProductPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
function App() {
  const numbers = [24, 56, 87, 90, 11, 67, 'test'];
  const numbers2 = [29, 56, 84, 90, 11, 67, 'test'];
  const todos = [
    { id: '1', name: 'faith', isDone: false },
    { id: '2', name: 'nelson', isDone: true },
  ];
  return (
    <Layout>
        <MainContent />
      </Layout>
    <div>

      <UserForm />
      <NumberList numbers={numbers} />
      <NumberList numbers={numbers2} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}-{todo.isDone ? 'Done' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

import Clock from './Clock';
import Toggle from './ToggleButton';
function App() {
  return (
    <div>
      <Welcome name="Paul" />
      <Message message="I love react app" />
    </div>
  );
  //js6
  function formatName(userName) {
    return (
      <div>
      <UserInfo />*/
/*<NewUserInfo />
      <Counter />
      <NewCounter />
        <Welcome name="Paul" />
        <Message message="I love react app" />
      </div>
    );
    return userName.toUpperCase();
  }
  function getGreeting(userName) {
    if (userName) {
      return <h1>hello {formatName(userName)}</h1>;
    } else {
      return <h1>may i know your name</h1>;
    }
  }
  const name = 'Faith Egbuniwe';
  const userImage = '/logo192.png';
  const image = <img className="sample-class" src={userImage} alt="logo" />;
  const element = (
    <div>
      <h1>hello {name}</h1>
      <p>Good to see you again</p>
      {image}
    </div>
  );
  return element;
}
}

import './App.css';
//import Welcome from './Welcome';
//import Message from './Message';
import Clock from './Clock';
import Toggle from './ToggleButton';

function App() {
  return (
    <div>
     <LoginControl hasNewMessage={true} credit={100} hasWarning={true} />
    <Greeting isLoggedIn />
      <Toggle />
      <Clock />
    </div>
  );
}
*/
