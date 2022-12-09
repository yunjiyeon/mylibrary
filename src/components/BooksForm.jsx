import React from 'react'
import { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styles from './BooksForm.module.css';


const BooksForm = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const dispatch = useDispatch();
  
  // const getName = () => {
  //   setName(e.target.value);
  //   // consol.log(name);
  // }

  const addContact = (e) => {
    e.preventDefault(); //리로드 되는 것을 막아줌 (submit의 기본 속성)
    dispatch({ // 던져줄 액션을 dispatch를 이용해 만들어 줌
      type : 'ADD_BOOKS', payload:{name, writer} // 키와 밸류가 같을 때는 키값만 써줘도 됨
    });
    setName("");
		setWriter("");
  }
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label className={styles.title}>제목</Form.Label>
          <Form.Control type="text" placeholder="책 이름을 입력해 주세요" onChange={(e)=>setName(e.target.value)}
          value={name} className={styles.textBox}
          //onChange={getName} - 함수 따로만들지 않고 바로 적용
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className={styles.title}>저자명</Form.Label>
          <Form.Control type="text" placeholder="저자명을 입력해 주세요" onChange={(e)=>setWriter(e.target.value)} value={writer} className={styles.textBox}/>
        </Form.Group>
        <Button variant="warning" type="submit">
          추가
        </Button>
      </Form>

    </div>
  )
}

export default BooksForm