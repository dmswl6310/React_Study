import TicTacToe from "./TicTacToe/TicTacToe";
import TodoList from "./Todo_List/TodoList";

function App() {
  return (
    <div>
      {/* <h1>React Study TODO List </h1>
      <li> 텍스트 적어서 + 버튼 클릭시 목록에 추가</li>
      <li> - 버튼만 클릭시 목록에서 삭제</li>
      <li> 체크박스 포함 이름 클릭시 스타일 변화 주기</li>
      <h3> 추가 작업</h3>
      <li> 선택된 작업에 대해 위 / 아래 버튼을 통해 목록의 순서 조정하기 </li> */}
      {/* <TodoList /> */}

      {/* 틱택토를 할 수 있게 해주고,
      게임에서 승리했을 때를 알려주며,
      게임이 진행됨에 따라 게임 기록을 저장하고, (심화)
      플레이어가 게임 기록을 확인하고 게임판의 이전 버전을 볼 수 있도록 허용합니다. (심화) */}
      <TicTacToe />
    </div>
  );
}

export default App;
