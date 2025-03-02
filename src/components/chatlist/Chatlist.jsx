import{Link} from "react-router-dom";
import './chatlist.css';

const Chatlist = () => {
  return (
    <div className="chatlist">
        <span className='title'>DASHBOARD</span>
        <Link to ="/dashboard">Create a new chat</Link> 
        <Link to ="/">Explore AI PSYCHIARTIST</Link>
        <Link to="/">Contact</Link> 
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        <Link to="/">My chat list</Link>
        </div>
        <hr/>
        <div className="upgrade">
            <img src="/logo.png" alt=""/>
            <div className="texts">
                <span>Upgrade to AI PSYCHIARTIST pro </span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default Chatlist
