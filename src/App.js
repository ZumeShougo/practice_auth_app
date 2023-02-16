import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/authContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;