
export default function Login() {
   
  return (
    <>
          <body>
            <div >
              <div >
                <h2 >Login Form</h2>
                <form>
                  <div >
                    <label >Email: </label>
                   
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  </div>
                  <div >
                    <label  >Password: </label>
                    <input type="password"  id="exampleInputPassword1"></input>
                  </div>
                  <p ><a href="forget-password.html">Forgot password?</a></p>
                  <div >
                    <button  type="submit">Login</button>
                  </div>
                </form>
                <div >
                  <p >Don't have an account? <a href="signup.html"
                    >Sign
                    Up</a></p>
                </div>
              </div>
            </div>
          </body>
    </>
  );
}