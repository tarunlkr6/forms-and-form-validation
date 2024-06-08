import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Form} />
        <Route path="/success" component={Success} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;