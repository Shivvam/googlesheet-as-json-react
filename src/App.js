import React from 'react';
import './App.css';
import GTableData from './components/getGoogleSheetData';
function App() {
  return (
    <main className="App">
      <GTableData/>
      <hr/>
      <p>Simple demonstration of using "google sheet" as json input for using react.js front-end application </p>
      <p>
      The link of google sheet being used for demo is <a target="_blank" href="https://docs.google.com/spreadsheets/d/1qNPcY0ELWQpdn97dsMSFskTadNRZrBwzU8gvhYQkL94/edit?usp=sharing" >here </a>
      </p>
      <footer>
      &hearts; by Shivam Vishwakarma
      </footer>
    </main>
  );
}

export default App;
