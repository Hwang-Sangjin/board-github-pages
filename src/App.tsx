import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  const routeLogin = () => [
    navigate("/login")
  ]

  return (
    <RecoilRoot>
      <CharacterCounter />
      <Button variant="contained" onClick={routeLogin}>Hello world</Button>
    </RecoilRoot>
  );
}

export default App