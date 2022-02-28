import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';

const firstProfile = {
  id: 1,
  img: require("./assets/bertie-yates.jpg"),
  name: 'Bertie Yates',
  age: "29 years"
}

const secondProfile = {
  id: 2,
  img: require("./assets/hester-hogan.jpg"),
  name: 'Hester Hogan',
  age: "32 years"
}

const thirdProfile = {
  id: 3,
  img: require("./assets/larry-little.jpg"),
  name: 'Larry Little',
  age: "36 years"
}

const fourthProfile = {
  id: 4,
  img: require("./assets/sean-walsh.jpg"),
  name: 'Sean Walsh',
  age: "34 years"
}

const fifthProfile = {
  id: 5,
  img: require("./assets/lola-gardner.jpg"),
  name: 'Lola Gardner',
  age: "29 years"
}


const ProfileList = () => {
  return (
    <section className="profile-list">
      <h1 className="header-text">5 Birthday Profiles</h1>
      <Profiles
        img={firstProfile.img}
        name={firstProfile.name}
        age={firstProfile.age}
      />
      <Profiles
        img={secondProfile.img}
        name={secondProfile.name}
        age={secondProfile.age}
      />
      <Profiles
        img={thirdProfile.img}
        name={thirdProfile.name}
        age={thirdProfile.age}
      />
      <Profiles
        img={fourthProfile.img}
        name={fourthProfile.name}
        age={fourthProfile.age}
      />
      <Profiles
        img={fifthProfile.img}
        name={fifthProfile.name}
        age={fifthProfile.age}
      />
    </section>
  )
}

const Profiles = (props) => {
  const { img, name, age } = props
  return (
    <section>
      <section className="profile">
        <div className="circular-landscape">
          <img src={img} alt="" />
        </div>

        <div className="profile-info">
          <h3 className="name-text">{name}</h3>
          <h3 className="age-text">{age}</h3>
        </div>
      </section>
    </section>
  )

}

ReactDOM.render(<ProfileList />, document.getElementById("root"))