import Header from "./Header"
import MainArea from "./MainArea"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header></Header>
      <MainArea></MainArea>
      <Footer></Footer>
      <h1>React Study TODO List </h1>
      <li> 텍스트 적어서 + 버튼 클릭시 목록에 추가</li>
      <li> - 버튼만 클릭시 목록에서 삭제</li>
      <li> 체크박스 포함 이름 클릭시 스타일 변화 주기</li>

      
      해더 앱 이름
      메인 
        텍스트 필드 | + 버튼
        목록 표기
        내용 | - 버튼 ( 클릭시 선택된 내용 스타일 변화 )
      풋터 - 제작자, 날짜 
     

      <h3> 추가 작업</h3>
      <li> 선택된 작업에 대해 위 / 아래 버튼을 통해 목록의 순서 조정하기 </li>
    </div>
  );
}

export default App;
