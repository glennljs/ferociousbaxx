import './App.css';
import Login from './components/Login.js';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container textAlign="center" style={{ padding: 50 }}>
      <Login></Login>
    </Container>
  );
}

export default App;
