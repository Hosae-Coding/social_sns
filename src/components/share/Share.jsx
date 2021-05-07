import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

export default function Share() {
   return (
      <div className="share">
         <div className="shareWrapper">
            <div className="shareTop">
               <img
                  className="shareProfileImg"
                  src="/assets/person/1.jpg"
                  alt=""
               />
               <input
                  placeholder="What's in your mind"
                  className="shareInput"
               />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
               <div className="shareOptions">
                  <div className="shareOption">
                     <PermMedia htmlColor="darkred" className="shareIcon" />
                     <span className="shareOptionText">video or photo</span>
                  </div>
                  <div className="shareOption">
                     <Label htmlColor="red" className="shareIcon" />
                     <span className="shareOptionText">tag</span>
                  </div>
                  <div className="shareOption">
                     <Room htmlColor="tomato" className="shareIcon" />
                     <span className="shareOptionText">laction</span>
                  </div>
                  <div className="shareOption">
                     <EmojiEmotions htmlColor="orange" className="shareIcon" />
                     <span className="shareOptionText">feeling</span>
                  </div>
               </div>
               <button className="shareButton">Share</button>
            </div>
         </div>
      </div>
   );
}
