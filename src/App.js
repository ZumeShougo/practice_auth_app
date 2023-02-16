import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/authContext.js';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;