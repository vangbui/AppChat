import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine 
        height = "100vh"
        projectID="a671df67-0f49-4a2b-a043-fc94783244b7"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;