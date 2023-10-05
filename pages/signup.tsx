import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Logikk for brukerregistrering
    };

    return (
        <form onSubmit={handleSignUp}>
            <label htmlFor="email">E-post: </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Registrer deg</button>
        </form>
    );
};

export default SignUp;
