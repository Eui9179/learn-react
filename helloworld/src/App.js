import { useState } from 'react';
import './App.css';

function App() {
  // state 사용 이유: state는 변동 사항이 생기면 state를 쓰는 html도 자동으로 재렌더링 해줌
  // 변경될 일 없는 데이터는 그냥 변수에 저장하여 사용
  const [title, setTitle] = useState([
    '나는 이의찬',
    '안녕히계세요',
    '감사합니다',
  ]);

  const [like, setLike] = useState(0);

  const incLike = () => {
    setLike(like + 1);
  };

  const handleTitle = () => {
    // setTitle((prev) => {
    //   return prev.map((value, index) => {
    //     if (index === 0) {
    //       return "또 오세요";
    //     }
    //     return value;
    //   });
    // });

    const copy = [...title]; // const copy = title은 안됨(같은 주소값을 가지고 있기때문에 변경 안됨)
    copy[0] = '안뇽'; // const copy = [...title] * ... value of, 깊은 복사
    setTitle(copy);
  };

  const sortTitle = () => {
    const copy = [...title];
    setTitle(copy.sort());
  };

  return (
    <div className='App'>
      <div className='black-nav'>
        <div> Hello React </div>
      </div>

      <button className='btn' onClick={handleTitle}>
        첫번째 글 변경
      </button>

      <button className='btn' onClick={sortTitle}>
        가나다 순 정렬
      </button>

      <div className='list'>
        <h4>
          <span onClick={handleTitle}>{title[0]}</span>
          <span onClick={incLike}> 👍 </span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
