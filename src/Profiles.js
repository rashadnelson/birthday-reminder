import React from 'react'

const data = [
    { id: 1, img: require("./assets/bertie-yates.jpg"), name: 'Bertie Yates', age: "29 years" },
    { id: 2, img: require("./assets/hester-hogan.jpg"), name: 'Hester Hogan', age: "32 years" },
    { id: 3, img: require("./assets/larry-little.jpg"), name: 'Larry Little', age: "36 years" },
    { id: 4, img: require("./assets/sean-walsh.jpg"), name: 'Sean Walsh', age: "34 years" },
    { id: 5, img: require("./assets/lola-gardner.jpg"), name: 'Lola Gardner', age: "29 years" },
];

const ProfileList = () => {
    return(
        <section>
            {data.map((newProfile) => {
            const {img, name, age} = newProfile;
            return(
                <Profiles> newProfile = {newProfile}</Profiles>
            )
        })}  
        </section>
    )
    
}
    
const Profiles = (props) => {
    console.log(props)
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

export default Profiles