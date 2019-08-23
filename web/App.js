import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Clicker from '../shared/components/Clicker/Clicker';
import { login } from '../shared/redux/actions/authActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login('blah', 'blah2'));
  }, []);

  return (
    <div>
      <Header></Header>
      <Clicker></Clicker>
    </div>
  );
};

export default App;