import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './BooksItem.module.css';

const BooksItem = ({item}) => {
  return (
    <div className={styles.box}>
      <Row>
        <Col xs="auto">
          <img src="https://img.freepik.com/premium-vector/vector-illustration-of-cute-pixel-art-icon-geek-lightning-element-in-the-style-of-90s-game_522613-644.jpg?w=2000" alt="" />
          </Col>
        <Col xs className={styles.text}>
          <h5>{item.name}</h5>
          <p>{item.writer}</p>
        </Col>
      </Row>
    </div>
  )
}

export default BooksItem