
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
                        <p>Mouse Current position (X,Y) : ({x}, {y})</p>
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
        <div style={{ height: '1000vh' }} onMouseMove={handleMouseMove}>
            {children(position)}
        </div>
    );
};

export default App

;

// import React from "react";
// import ReactDOM from "react-dom/client";
//
// const App = () => {
//     // Creating a Virtual DOM element
//     // const vdomElement = React.createElement(
//     //     "div",
//     //     { className: "container" },
//     //     React.createElement("h1", null, "Hello Virtual DOM!"),
//     //     React.createElement("p", null, "Open the console to see the Virtual DOM.")
//     // );
//
//     // Logging Virtual DOM to console
//     // console.log("Virtual DOM Structure:", vdomElement);
//
//     return (
//         <div>
//             <h12>React Virtual DOM Example</h12>
//             <p2>Check the console to see the Virtual DOM structure.</p2>
//         </div>
//     );
// };
//
// export default App;