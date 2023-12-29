import './Share.css';
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';

export default function Share() {
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="sharePP" src="https://www.svgrepo.com/show/9649/avatar.svg" alt="Share" />
                <input placeholder="What's in your Damm Mind ?" className="shareInput" />
            </div>
            <hr className="shareHR"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='lightseagreen' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='mediumseagreen' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='#FF0858' className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
