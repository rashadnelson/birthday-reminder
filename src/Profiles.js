import React from 'react'

const Profiles = (props) => {
    const { img, name, age } = props.profileData

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