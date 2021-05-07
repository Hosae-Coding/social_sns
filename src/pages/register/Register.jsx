import './register.css';
export default function register() {
   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">HosaeSocial</h3>
               <span className="loginDesc">Enjoy with US!</span>
            </div>
            <div className="loginRight">
               <div className="loginBox">
                  <input placeholder="Username" className="loginInput" />
                  <input placeholder="Email" className="loginInput" />
                  <input placeholder="Password" classNamge="loginInput" />
                  <input placeholder="Password again" className="loginInput" />
                  <button className="loginButton">Sigh up</button>

                  <button className="loginRegisterButton">
                     Log into Accont
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
