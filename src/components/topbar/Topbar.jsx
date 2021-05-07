import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
   return (
      <div className="topbarContainer">
         <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: 'none' }}>
               <span className="logo">Hosaesocial</span>
            </Link>
         </div>
         <div className="topbarCenter">
            <div className="searchbar">
               <Search />
               <input
                  placeholder="Search for friend, post or video"
                  className="searchInput"
               />
            </div>
         </div>
         <div className="topbarRight">
            <div className="topbarLinks">
               <span className="topbarLink">Homepage</span>
               <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
               <div className="topbarIconItem">
                  <Person />
                  <div className="span topbarIconBadge">1</div>
               </div>
               <div className="topbarIconItem">
                  <Chat />
                  <div className="span topbarIconBadge">2</div>
               </div>
               <div className="topbarIconItem">
                  <Notifications />
                  <div className="span topbarIconBadge">1</div>
               </div>
            </div>
            <div>
               <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
            </div>
         </div>
      </div>
   );
}
