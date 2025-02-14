
import CounterComponent from './CounterComponent.jsx';
import React, { useState, useEffect } from 'react';
const App = () => {
    return (
        <div>
            <h1>Custom Hook</h1>
            <CounterComponent />
            <h1> Higher-Order Component (HOC)</h1>
            <MyComponentWithLoading />
            <h1>Mouse Tracker render props</h1>
            <MouseTracker>
                {({ x, y }) => (
                    <div>
                        <p>Mouse position: ({x}, {y})</p>
                    </div>
                )}
            </MouseTracker>
        </div>

    );
};


// HOC: Adds a loading state to any component
const withLoading = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => setIsLoading(false), 2000); // Simulate loading
        }, []);

        if (isLoading) return <div>Loading...</div>;

        return <WrappedComponent {...props} />;
    };
};

// A simple component
const MyComponent = () => <div>Welcome to the dashboard</div>;

// Wrap MyComponent with the HOC
const MyComponentWithLoading = withLoading(MyComponent);


const MouseTracker = ({ children }) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {children(position)}
        </div>
    );
};

export default App;