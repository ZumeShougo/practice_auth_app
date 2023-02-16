import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      switch(error.code){
        case 'auth/invalid-email':
          setError('正しいメールアドレス形式で入力してください。');
          break;
        case 'auth/weak-password':
          setError('パスワードは６文字以上を設定してください');
          break;
        case 'auth/email-already-in-use':
          setError('そのメールアドレスはすでに使用されています。');
          break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。')
          break;
      }
    });
  }
  return(
    <div>
      <h1>ユーザー登録 </h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor='email'>メールアドレス</label>
          <input id='email' name='email' type='email' placeholder='メールアドレス'></input>
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input id='password' name='password' type='password' placeholder='パスワード'></input>
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>

  );
};

export default SignUp;