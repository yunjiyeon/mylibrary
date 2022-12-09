// 서치 적용 
import React,  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BooksItem from './BooksItem';
import SearchBox from './SearchBox';

const BooksList = () => {
  const { booksList, keyword} = useSelector((state) => state);
  // search 할 때 쓰이는 keyword값도 받아옴
  const [filteredList, setFilteredList] = useState([]);


  useEffect(()=>{
    if(keyword !== ''){ // 키워드가 입력이 됐다 (키워드가 비어있지 않을 때!)
      let book = booksList.filter((item)=>item.name.includes(keyword));
      setFilteredList(book);
    } else { // 키워드 입력값이 없을 때
      setFilteredList(booksList);
    }
  },[keyword, booksList]); // 키워드 넣을 때 마다 다시 인식
  return (
    <div>
      <SearchBox />
      <div>
        권수 : {filteredList.length} 권
        { filteredList.map((item)=>(
          <BooksItem item={item}/>
          // 서치 적용후 필터링 된 리스트
        ))}
      </div>
    </div>
  )
}

export default BooksList