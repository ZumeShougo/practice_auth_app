import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";


const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        switch(error.code){
          case 'auth/invalid-email':
            setError('正しいメールアドレス形式で入力してください。');
            break;
          case 'auth/user-not-found':
            setError('メールアドレスかパスワードに誤りがあります。');
            break;
          case 'auth/wrong-password':
            setError('メールアドレスかパスワードに誤りがあります。');
            break;
          default:
            setError('メールアドレスかパスワードに誤りがあります。')
            break;
        }
      });
  };
  return (
    <div>
      <h1>ログイン画面</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="メールアドレス" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" placeholder="パスワード" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザー登録は<Link to={'/signup'}>こちらから</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;