import './closeFriend.css';

export default function CloseFriend({ user }) {
   const PF = process.env.REACT_APP_PUBLIC_FORDER;
   return (
      <li className="sidevarFriend">
         <img
            className="sidebarFriendImg"
            src={PF + user.profilePicture}
            alt=""
         />
         <span className="sidevarFriendName">{user.username}</span>
      </li>
   );
}
