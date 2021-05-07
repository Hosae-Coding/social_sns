import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
   const HomeRightbar = () => {
      return (
         <>
            <div className="birthdayContainer">
               <img className="birthdayImg" src="assets/gift.png" alt="" />
               <span className="birthdayText">
                  <b>daen</b> and <b>2 other</b> fres birthday today
               </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="" />
            <h4 className="rightbarTitle">online friends</h4>
            <ul className="rightbarFriendList">
               {Users.map((u) => (
                  <Online key={u.id} user={u} />
               ))}
            </ul>
         </>
      );
   };

   const ProfileRightbar = () => {
      const PF = process.env.REACT_APP_PUBLIC_FORDER;
      return (
         <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">Toronto</span>
               </div>
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfoValue">Korea</span>
               </div>
               <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">Single</span>
               </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/1.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/2.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/3.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/4.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/5.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
               <div className="rightbarFollowing">
                  <img
                     src={`${PF}person/6.jpg"`}
                     alt=""
                     className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">John Carter</span>
               </div>
            </div>
         </>
      );
   };
   return (
      <div className="rightbar">
         <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
         </div>
      </div>
   );
}
