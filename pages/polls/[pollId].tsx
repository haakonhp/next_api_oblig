import React from 'react';
import { useRouter } from 'next/router';

const Poll: React.FC = () => {
    const router = useRouter();
    const { pollId } = router.query;

    return (
        <div>
            <h1>Poll ID: {pollId}</h1>
            {/* Render spørsmål og svaralternativer */}
        </div>
    );
};

export default Poll;
