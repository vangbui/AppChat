import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const authObject = {'Project-ID':"a671df67-0f49-4a2b-a043-fc94783244b7",
        'User-Name': username, 'User-Secret':password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            
        } catch (error) {
            setError('Rất tiếc, thông tin đăng nhập không chính xác.')
            
        }


    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="Username" required/>
                    <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Bắt đầu trò chuyện </span>
                        </button>

                    </div>
                    <h2 className="error">{error}</h2>

                </form>

            </div>

        </div>
    );

}

export default LoginForm;