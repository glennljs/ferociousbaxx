import './App.css';
import Main from './components/Main.js';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container textAlign="center" style={{ padding: 50 }}>
      <Main />
    </Container>
  );
}

export default App;
