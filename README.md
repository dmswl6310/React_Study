### 첫 프로젝트 - Todo 리스트 만들기!!

  1. 텍스트 적어서 + 버튼 클릭시 목록에 추가
  2. -버튼만 클릭시 목록에서 삭제
  3. 체크박스 포함 이름 클릭시 스타일 변화 주기

  추가 작업(선택)
  
  선택된 작업에 대해 위 / 아래 버튼을 통해 목록의 순서 조정하기
  Styled-Component 적용해보기
  
  
  
 ### 두번째 프로젝트 - 틱택토 만들기!!(미정)
 
 
 - 틱택토 게임의 기본 알고리즘
 
  ![틱택토 기본 알고리즘](https://user-images.githubusercontent.com/45475492/136339444-f0d3d82d-407a-4893-9f93-ecb037cb7ea5.png)

  틱택토 게임은 리액트 자습서(https://ko.reactjs.org/tutorial/tutorial.html)의 예제이다!!
  
  (정답이 나와있으니 최대한 안보고 해보자)
  
  
  
  - 틱택토 화면
  
  ![image](https://user-images.githubusercontent.com/45475492/136340656-9973a448-ec52-42ed-9d8b-f4ab2527a5dc.png)
  
  
  
 - 구현하기
 
 1. 틱택토를 할 수 있게 해주고,
 2. 게임에서 승리했을 때를 알려주며, 
 3. 게임이 진행됨에 따라 게임 기록을 저장하고, (심화)
 4. 플레이어가 게임 기록을 확인하고 게임판의 이전 버전을 볼 수 있도록 허용합니다. (심화)
  
 
 - 리덕스 사용하기
 
(리덕스 영상 추천-8분컷)https://www.youtube.com/watch?v=QZcYz2NrDIs


=> 틱택토게임은 리덕스 없이 구현가능하나, 리덕스를 연습할겸 state 한개 이상을 리덕스로 써보자!


 - 시간이 남는분은 아래 심화 추가 구현을 해보세요.

 1. 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
 2. 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
 3. 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
 4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
 5. 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
 6. 승자가 없는 경우 무승부라는 메시지를 표시해주세요.
 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
