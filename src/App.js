import logo from './well-well-well.png';

import './App.css';
import { useState, useEffect } from 'react';
import realtime from "./firebase.js";
import { ref, onValue } from 'firebase/database';

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(function() {
    const databaseRef = ref(realtime);

    onValue(databaseRef, function(snapshot) {
      const prompts = snapshot.val();

      console.log(prompts);

    })
  })
  return (
    <div className='App'>
      <div class='title'>
        <img alt='' src={logo} />
        <p>Mindful moments</p>
      </div>
      <div class='container'>
        <p>Take a few moments for yourself & journal on your reflections</p>

        <div class='prompt'>
          Where would you like to take your next vacation?
        </div>
      </div>
      <div class='settings-wrapper'>
        <div class='settings'>
          <h4>Quick Settings</h4>
        </div>
        <div class='toggle'>
          <p>Mindfulness notifications</p>
          <button>Open Settings Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
