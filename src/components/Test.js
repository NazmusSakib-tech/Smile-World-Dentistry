import React from 'react';
import useServices from '../hooks/useServices';

const Test = () => {
    const testService = useServices();
    console.log(testService);
    return (
        <div>
            <h3>testing</h3>
        </div>
    );
};

export default Test;