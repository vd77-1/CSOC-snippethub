// import React from 'react';
// import Sidebar from "./components/Sidebar";
// import styles from "./app.module.css";
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//     <div className={styles.appcontainer}>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Sidebar/>
//       <main className= {styles.maincontent}>
//         <h2>Welcome</h2>
//         <p>This is where your snippet will appear</p>
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddSnippetModal from './components/addsnippetmodal';

type Snippet = {
  title: string;
  content: string;
  category: string;
};

const App = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddSnippet = (snippet: Snippet) => {
    setSnippets([...snippets, snippet]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <Sidebar />
      
      <main style={{ flex: 1, background: '#fef3c7', padding: '20px', overflowY: 'auto' }}>
        <h2>Welcome to SnippetHub</h2>
        <button onClick={() => setShowModal(true)} style={{ marginBottom: '10px' }}>
          Add Snippet
        </button>

        {snippets.map((s, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{s.title}</h3>
            <p><strong>Category:</strong> {s.category}</p>
            <p>{s.content}</p>
          </div>
        ))}
      </main>

      {showModal && (
        <AddSnippetModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddSnippet}
        />
      )}
    </div>
  );
};

export default App;

