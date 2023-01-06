import React from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const PricingCard = ({data, id}) => {
    return (
        <Tab.Pane eventKey={id + 1}>
            <Row>
                {
                    data.map(({title, name, price,descrp}, index) => {
                        return (
                          <Col md={4} key={index}>
                            <Fade bottom duration={1800} distance="40px">
                              <div
                                className={`pricingCard pricingCard${id + 1}`}
                              >
                                <div className="pricingBox">
                                  <h4>{title}</h4>
                                  <p className="pricePlan">
                                    <span className={`ph${id + 1}`}>
                                      {price}/
                                    </span>
                                    year
                                  </p>
                                  <h5>{name}</h5>
                                  <p className="planDescription">{descrp}</p>
                                </div>
                                
                              </div>
                            </Fade>
                          </Col>
                        );
                    })
                }
            </Row>
        </Tab.Pane>
    );
};

export default PricingCard;