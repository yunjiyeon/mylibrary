import styles from './App.module.css'; // 'styles' 는 이름 아무거나 넣어도 됨
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className='App'>
      <div className={styles.titleBox}>
        <img src="https://thumbs.dreamstime.com/b/vector-pixel-art-computer-isolated-cartoon-162928409.jpg" alt="" />
        <h1>My Library</h1>
      </div>

      <Container>
        <Row>
          <Col>
            <BooksForm />
          </Col>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
