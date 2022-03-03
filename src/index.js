import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import { profilesData } from './profilesData';
import Profiles from './Profiles';

const ProfileList = () => {

  const [ profiles, setProfile ] = useState(profilesData)

  const removeProfiles = (event) => {
    const name = event.target.getAttribute("name")
    const removedNames = profiles.filter(profile => profile.name !== name)
    setProfile(removedNames)
  }

  return (
    <section className="profile-list">
      <h1 className="header-text">5 Birthday Profiles</h1>

      {profilesData.map((profileData) => {
        return(
          <section>
            <Profiles
              key={profileData.id}
              profileData = {profileData}
            >
            </Profiles>
          </section>
        )
      })}

      <button type="button" onClick={() => removeProfiles()}>Clear Profiles</button>
    </section>
  )
}

ReactDOM.render(<ProfileList />, document.getElementById("root"))