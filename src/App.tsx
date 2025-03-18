import React from 'react';
import FlowEditor from './components/FlowEditor';
import { FlowProvider } from './context/FlowContext';

function App() {
  return (
    <FlowProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Flow Management System
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <FlowEditor />
          </div>
        </main>
      </div>
    </FlowProvider>
  );
}

export default App;