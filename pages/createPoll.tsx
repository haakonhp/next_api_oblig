import React, { useState } from 'react';

const CreatePoll: React.FC = () => {
    const [question, setQuestion] = useState('');
    // Antar enkel tekstsvaralternativ her
    const [answer, setAnswer] = useState('');

    const handleCreatePoll = (e: React.FormEvent) => {
        e.preventDefault();
        // Logikk for å lage en poll
    };

    return (
        <form onSubmit={handleCreatePoll}>
            <label htmlFor="question">Spørsmål: </label>
            <input
                type="text"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <label htmlFor="answer">Svar: </label>
            <input
                type="text"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit">Lag Poll</button>
        </form>
    );
};

export default CreatePoll;
