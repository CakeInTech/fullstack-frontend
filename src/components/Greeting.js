import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // import the PropTypes module
import { Container, Row, Col } from 'react-bootstrap';
import { fetchRandomGreeting } from '../action/action';
import './Greeting.css'; // import the custom CSS file

const Greeting = ({ message, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <Container fluid className="greeting-container h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs="auto" className="specialty">
          <h1 className="greeting-message text-center">{message}</h1>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
