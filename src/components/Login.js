import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value);
  };
  return (
    <div>
      <h1>ログイン画面</h1>
      <form onSubmit={handleSubmit}>
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