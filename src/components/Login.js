import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Messages Chat App</h2>

                <div className="login-btn google">
                    <GoogleOutlined className="google-icon" />Sign In with Google
                </div>
                <div className="login-btn facebook">
                    <FacebookOutlined className="facebook-icon" />Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login;