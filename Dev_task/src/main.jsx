import React from 'react'
import ReactDOM from 'react-dom/client'
import Sleeve from './Sleeve.jsx'
import Theme from './Theme.jsx'
import Customization from './customization.jsx';
import Scrollable from './scrollable.jsx';
import './index.css'
import ImageRow from './imagerow.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <div className="h-screen bg-black text-white">
      <Sleeve />
      <Theme />
      <Customization />
      <ImageRow />
      <Scrollable />
    </div>
    </React.StrictMode>
)
