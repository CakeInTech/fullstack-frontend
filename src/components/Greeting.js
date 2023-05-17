import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../action/action';
import { Container, Row, Col } from 'react-bootstrap';
import './Greeting.css'; // import the custom CSS file

const Greeting = ({ message, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <Container fluid className="greeting-container h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs="auto" className='specialty'>
          <h1 className="greeting-message text-center">{message}</h1>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
