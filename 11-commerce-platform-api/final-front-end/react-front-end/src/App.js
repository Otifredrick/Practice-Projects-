import { useState } from 'react';

const rootUrl = 'http://localhost:5000';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Use a practice account created through the API.');
  const [loading, setLoading] = useState(false);

  const apiRequest = async (path, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(`${rootUrl}${path}`, {
        credentials: 'include',
        ...options,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.msg || 'The request was not accepted.');
      return data;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      const data = await apiRequest('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      setPassword('');
      setMessage(`Session ready${data.user?.name ? ` for ${data.user.name}` : ''}.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const checkSession = async () => {
    try {
      await apiRequest('/api/v1');
      setMessage('The authenticated API request succeeded.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const logout = async () => {
    try {
      await apiRequest('/api/v1/auth/logout');
      setMessage('I signed out of the practice session.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className='shell'>
      <section className='intro'>
        <span className='eyebrow'>Commerce API practice client</span>
        <h1>I test secure sessions without losing the thread.</h1>
        <p>I use this small React console to exercise cookie-based login, a protected request, and logout against my commerce API.</p>
        <div className='feature-list'><span>HTTP-only cookies</span><span>Role-aware API</span><span>Session checks</span></div>
      </section>
      <section className='auth-card'>
        <div className='card-heading'><span>Developer console</span><h2>Start a session</h2></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email address</label>
          <input id='email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='developer@example.com' autoComplete='email' />
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='My practice password' autoComplete='current-password' />
          <button className='primary' disabled={loading}>{loading ? 'Contacting API…' : 'Sign in to API'}</button>
        </form>
        <p className='status' aria-live='polite'><span></span>{message}</p>
        <div className='actions'><button onClick={checkSession} disabled={loading}>Check session</button><button onClick={logout} disabled={loading}>Sign out</button></div>
      </section>
    </main>
  );
}

export default App;
