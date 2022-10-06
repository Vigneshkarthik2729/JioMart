 import styles2 from './login.module.css';
 import {useState} from 'react';
import img2 from './Images/jio.jpeg';
import { useNavigate } from 'react-router-dom';

function Login({ login, error }) {

    const navigate = useNavigate()

  const [userdata, setData] = useState({ name: "", email: "", password: "" })

  const submitHandler = (s) => {
      s.preventDefault();
      login(userdata);
  }

  const nameHandler = (s) => {
      setData({ ...userdata, name: s.target.value })
  }

  const mailHandler = (s) => {
      setData({ ...userdata, email: s.target.value });
  }

  const passwordHandler = (s) => {
      setData({ ...userdata, password: s.target.value });
  }




  return (
      <div>
        <div className={styles2.head}>
          <h2 className={styles2.title}>JioMart<br></br>Login</h2>
        </div>
        
          <form className={styles2.login} onSubmit={submitHandler}>
              
              {(error != "") ? (<div className={styles2.error}>{error}</div>) : ""}
              <div className={styles2.data}>
                  <label htmlfor='name'>Name :</label>
                  <input type='text' className={styles2.inputbox} id='name' onChange={nameHandler} value={userdata.name}
                      placeholder='Enter your Name'></input>
              </div>
              <div className={styles2.data}>
                  <label htmlfor='mailid'>Mail Id :</label>
                  <input type='email' className={styles2.inputbox} id='mailid' onChange={mailHandler} value={userdata.email}
                      placeholder='Enter your Mail Id'></input>
              </div>
              <div className={styles2.data}>
                  <label htmlfor='pwd'>Password:</label>
                  <input type='password' className={styles2.inputbox} id='pwd' onChange={passwordHandler} value={userdata.password}
                      placeholder='Enter your Password'></input>
              </div><br></br><br></br>
              <button type='submit' className={styles2.submit} onClick={()=>{
                           navigate("/product")
                            }}>Login</button>
          </form>
      </div>
  );

}
export default Login;
