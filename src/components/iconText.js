import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const IconsText = ({
    Icon,
    size = 1,
    color  = '#000',
    className = '',
    onClick,
}) => (
     <Row className={`d-flex align-items-center ${className}`} onClick={onClick}>
    <Col xs={size} className='d-flex justify-content-center'>
      <FontAwesomeIcon icon={'icon'} size={`${size}x`} color={color} />
    </Col>
   
  </Row>
);
export default IconsText;