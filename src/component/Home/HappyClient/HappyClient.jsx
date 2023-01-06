import React from 'react'
import './HappyClient.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmileBeam, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
const HappyClient = () => {
    const workDetails = [
        { title: 'Students Enrolled', number: 500, id: 1 },
        { title: 'Schools Connected ', number: 100, id: 2 },
        { title: 'Support Within hr', number: 12, id: 3 },
        { title: 'Scholarships Given', number: 300, id: 4 }
    ]
    return (
        <section className="ourValue">
            <div className="row container mx-auto">
                {
                    workDetails.map(({ title, number, icon, id }) => {
                        return (<div className="col-md-6 col-lg-3" key={id}>
                            <div className="ourValueDetails">
                                <span className={`valueIcon valueIcon${id}`}>
                                    {/* <FontAwesomeIcon icon={icon}/> */}
                                </span>
                                <div>
                                    <p className="ourValueTitle">{title}</p>
                                    <h4 className="ourValueNumber">
                                        <CountUp
                                            end={`${number}`}
                                            start={0}
                                            duration={9}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    )
}

export default HappyClient
