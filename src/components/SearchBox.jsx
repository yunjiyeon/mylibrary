import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const [keyword, setKeyword] = useState(); // 키워드값(입력값)을 인식하게
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();  // f5 (새로고침) 효과 없애줌
    dispatch({type:'SEARCH_BY_NAME', payload:{keyword}})
  }
  return (
    <form action="" className={styles.form} onSubmit={searchByName}>
      <Row>
        <Col xs>
          <Form.Control type="text" placeholder="책 이름을 입력해 주세요" onChange={(e)=>setKeyword(e.target.value)} className={styles.textBox}/>
        </Col>
        <Col xs="auto">
        <Button variant="warning" type="submit">
          찾기
        </Button>
        </Col>
      </Row>
    </form>
  )
}

export default SearchBox