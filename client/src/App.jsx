// src/App.jsx
import React, { useState } from 'react';
import Login from './components/Login';
import Protected from './components/Protected';

const App = () => {
    const [token, setToken] = useState(null);

    return (
        <div>
            {!token ? (
                <Login onLogin={setToken} />
            ) : (
                <Protected token={token} />
            )}
        </div>
    );
};

export default App;
