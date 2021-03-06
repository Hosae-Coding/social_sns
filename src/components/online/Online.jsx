import './online.css';

export default function Online({ user }) {
   const PF = process.env.REACT_APP_PUBLIC_FORDER;
   return (
      <li className="rightbarFriend">
         <div className="rightbarProfileImgContainer">
            <img
               className="rightbarProfileImg"
               src={PF + user.profilePicture}
               alt=""
            />
            <span className="rightbarOnline"></span>
         </div>
         <spna className="rightbarUsername">{user.username}</spna>
      </li>
   );
}
