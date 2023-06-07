import React from 'react'
import ProfileCard from './ProfileCard'
import 'bulma/css/bulma.css';
import Alexa from './images-react-02-chapter/alexa.png';
import Cortana from './images-react-02-chapter/cortana.png'
import Siri from './images-react-02-chapter/siri.png'

const App = () => {
  return (
    <div >
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-4">         
        <ProfileCard assistant="siri" handle="@siri99" image={Siri} />
                    </div>
                    <div className="column is-4">
        <ProfileCard assistant="alexa" handle="@alexa3" image={Alexa} />
                    </div>
                    <div className="column is-4">
        <ProfileCard assistant="cortana" handle="@cortana69" image={Cortana} />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App