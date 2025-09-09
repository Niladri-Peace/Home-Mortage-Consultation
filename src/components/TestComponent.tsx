import React from 'react';

const TestComponent = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">B</span>
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Better.com Clone</div>
        <p className="text-gray-500">Tailwind CSS is working!</p>
      </div>
    </div>
  );
};

export default TestComponent;
