import '../LoginPage.css';
import { useState } from 'react';

interface LoginPageProps {
    onLogin: (username: string, password: string) => void;
}
export function LoginPage({ onLogin }: LoginPageProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!username.trim() || !password.trim()) {
            setError('Please enter your Username and Password');
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            if (username === 'admin' && password === 'fleet123') {
                onLogin(username, password);
            } else {
                setError('Invalid Username or Password');
            }
        }, 800)
    }

    return (
        <div className='login-page'>
            <div className='login-card'>
                <div className='login-logo'>:rocket</div>
                <div className='login-logo-title'> Fleet Telematics</div>
                <div className='login-logo-subtitle'>BRD Simulation Platform</div>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-field'>
                        <label className='login-label' htmlFor='username'>Username</label>
                        <input
                            id="username"
                            type="text"
                            className='login-input'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            autoComplete="username"
                        />
                    </div>
                    <div className='login-field'>
                        <label className='loginlabel' htmlFor='password'>Password</label>
                        <input
                            id='password'
                            type="password"
                            className='login-input'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete='password'
                        />
                    </div>
                    {error && <div className='login-error'>{error}</div>}

                    <button
                        type="submit"
                        className="login-btn"
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>

    );
}