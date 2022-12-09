import styles from './App.module.css'; // 'styles' 는 이름 아무거나 넣어도 됨
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className='App'>
      <div className={styles.titleBox}>
        <img src="https://o.remove.bg/downloads/37201817-e464-40ca-a645-50187a16e087/11111111111111-removebg-preview.png" alt="" />
        <h1 className={styles.title}>My Library</h1>
      </div>

      <Container>
        <Row>
          <Col sm="6">
            <BooksForm />
          </Col>
          <Col sm="6">
            <BooksList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
