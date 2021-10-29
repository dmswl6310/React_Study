// import { MainContainer } from "./components/MainContainer";
// import TicTacToe from "./components/TicTacToeComponents/TicTacToe/TicTacToe";
import { Launcher } from "./components/LauncherComponents/Launcher";
import { HashRouter, Route } from 'react-router-dom';
import { Workspace } from "./components/LauncherComponents/Workspace";

function App() {
  return (
    <HashRouter>
      <div>
        {/* <h1>React Study TODO List </h1>
        <li> 텍스트 적어서 + 버튼 클릭시 목록에 추가</li>
        <li> - 버튼만 클릭시 목록에서 삭제</li>
        <li> 체크박스 포함 이름 클릭시 스타일 변화 주기</li>

        <h3> 추가 작업</h3>
        <li> 선택된 작업에 대해 위 / 아래 버튼을 통해 목록의 순서 조정하기 </li>

        <hr/>
        <MainContainer/> */}
        {/* <TicTacToe/> */}
        <Route exact path="/" component={Launcher}/>
        <Route path="/main" component={Workspace}/>
        {/* <Launcher/> */}
      </div>
    </HashRouter>
  );
}

export default App;
