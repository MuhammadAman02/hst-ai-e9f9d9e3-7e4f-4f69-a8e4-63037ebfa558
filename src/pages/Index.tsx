import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-black transform hover:scale-110 transition-transform duration-300 ease-in-out" style={{
        textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
        transform: 'perspective(500px) rotateX(10deg)',
      }}>
        Hello, World!
      </h1>
    </div>
  );
};

export default Index;