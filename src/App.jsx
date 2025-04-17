import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VueComponent from './components/VueComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="flex justify-center items-center gap-6 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-16 animate-spin-slow" alt="React logo" />
          </a>
        </header>
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">React + Vue + Tailwind</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* React Component */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold text-green-600">React Component</h2>
            <p className="my-2">Count: {count}</p>
            <button 
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => setCount((count) => count + 1)}
            >
              Increment
            </button>
          </div>
          
          {/* Vue Component */}
          <VueComponent />
        </div>
        
        <footer className="text-center text-gray-600 mt-12">
          <p>
            Edit <code className="bg-gray-100 p-1 rounded">src/App.jsx</code> to test React changes
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
