import logo from './well-well-well.png';

import './App.css';
import { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import realtime from "./firebase.js";
import { ref, onValue } from 'firebase/database';

function App() {
  const [prompts, setPrompts] = useState();

  useEffect(function() {
    const databaseRef = ref(realtime);

    onValue(databaseRef, function(snapshot) {
      const prompts = snapshot.val();

      const endOfDay = prompts["eod"]
      const gen = prompts["general"]
      const mid = prompts["midday"]
      const morn = prompts["morning"]

      // console.log(Object.values(endOfDay).forEach(value => console.log(value)

      let randomNum1 = Math.floor(Math.random() * Object.values(endOfDay).length)
      let randomNum2 = Math.floor(Math.random() * Object.values(gen).length)
      let randomNum3 = Math.floor(Math.random() * Object.values(mid).length)
      let randomNum4 = Math.floor(Math.random() * Object.values(morn).length)

      const eodPrompts = (Object.values(endOfDay))
      const genPrompts = (Object.values(gen))
      const midPrompts = (Object.values(mid))
      const mornPrompts = (Object.values(morn))

      let randomEOD = eodPrompts[randomNum1]
      let randomGen = genPrompts[randomNum2]
      let randomMid = midPrompts[randomNum3]
      let randomMorn = mornPrompts[randomNum4]

      var currentTime = new Date().toLocaleTimeString();

      var time = new Date();
      time.setHours(12,0,0,0);
      var midTime = time.toLocaleTimeString()

      time.setHours(18,0,0,0);
      var eodTime = time.toLocaleTimeString()

      time.setHours(6,0,0,0);
      var mornTime = time.toLocaleTimeString()

      time.setHours(24,0,0,0);
      var rangeTime = time.toLocaleTimeString()

      if (mornTime < currentTime  && currentTime < midTime) {
            setPrompts(randomMorn)
      } else if (eodTime > currentTime  && currentTime > midTime) {
        setPrompts(randomMid)
      } else if (eodTime < currentTime  && currentTime < rangeTime) {
        setPrompts(randomEOD)
      } else {
        setPrompts(randomGen)
      }

      console.log(randomEOD);
    })
  })

  return (
    <div className='App'>
      <div className='title'>
        <img alt='' src={logo} />
        <p>Mindful moments</p>
      </div>
      <div className='container'>
        <p>Take a few moments for yourself & journal on your reflections</p>

        <div className='prompt'>
          {prompts}
        </div>
      </div>
      <div className='settings-wrapper'>
        <div className='settings'>
          <h4>Quick Settings</h4>
        </div>
        <div className='toggle'>
          <p>Mindfulness notifications</p>
      <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}

export default App;