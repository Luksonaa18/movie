import { useContext, useState } from "react";
import { AuthContext } from "../../provider/auth-provider";
import "./Login.css";
import logo from "../../assets/Movie.png"

const LogIn = () => {
  const { updateFn } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const validEmail = "badri123@gmail.com";
    const validPassword = "abdi123";

    if (email !== validEmail || password !== validPassword) {
      setError("Invalid email or password.");
      return;
    }

  
    setError("");
    updateFn(true); 
  };

  return (
    <>
    <div className="all">
    <div className="image">
    <img src={logo} alt="" />
    </div>
      <form onSubmit={handleSubmit}>
        <div className="log-in">
          <h1>Login</h1>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In to your account</button>
        <div className="signup">
          <span>Don't have an account?</span>
          <p>Sign up</p>
        </div>
      </form>

      {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default LogIn;
