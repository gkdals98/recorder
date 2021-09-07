# audiovediorecoder

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### MEMOS

## 비디오, 오디오 캡쳐 페이지 제작
라이브러리 도움 없이 비디오, 오디오를 캡쳐해 서버로 전송하는 페이지를 제작한다. 추가로 가끔씩 Blob 파일이 Blob이라는 String으로만 전송되는 문제 또한 해결할 수 있다면 좋다.

#### 전재조건
+ 외부 라이브러리의 도움을 받아선 안된다.
+ 비디오 레코딩 페이지는 해상도의 조절이 가능해야한다. (선택사항)
+ 서버에 전송하는 파일은 Blob 규격이여야한다.

#### 기능 정의
+ 녹음 및 녹화를 지원하는 recording page
+ 녹음, 녹화에 따라 각기 다른 화면이 출력된다.
+ 녹음, 녹화에 따라 세팅창은 각기 다른 설정값을 보여준다.
+ 녹음, 녹화가 끝나면 녹음, 녹화 화면은 브라우저 기본 제공 플레이어로 전환된다.
+ 녹음, 녹화 중에는 정지(완료)만 할 수 있다.
+ 서버로 결과물을 전송할 수 있는 전송 버튼이 있다.
+ 녹음, 녹화가 완료된 상태에서 다시 녹음, 녹화를 시도하면 기존 데이터를 삭제하고 새로 녹음, 녹화를 시도한다.
+ 옵션에서 세팅가능한 값은 아래와 같다.
  * 비디오 - audioBitsPerSecond, videoBitsPerSecond, mimetype, bitsPerSecond
  * 오디오 - 

#### 설계
+ core
  * 현재 페이지가 어디인지, 페이지가 넘어가는 중인지를 확인하는 store module.
  * 작업중인 파일, 녹음 및 녹화 여부, controll 가능 여부를 컨트롤하는 store module.
+ 메인 페이지
  * Video, Audio의 두 컴포넌트가 있다.
  * 
+ Setting 팝업
  * Video Page에 팝업을 출력하는 버튼이 있음.
  * 

#### 자료 조사
+ 가장 기본적인 정보들 - https://www.html5rocks.com/ko/tutorials/getusermedia/intro/ 
+ Recording 송출에 대한 SSL의 필요 여부.
+ windows.audiocontext - https://www.html5rocks.com/en/tutorials/webaudio/intro/
+ 거울효과주기 예제 겸 잘 동작하는 코드 - https://forgiveall.tistory.com/501
+ 잘 동작하는 녹화 코드 - https://gist.github.com/prof3ssorSt3v3/48621be79794a8a3adeed7971786d4d8
+ MediaRecorder의 API - https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder