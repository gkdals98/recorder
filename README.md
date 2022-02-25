# 비디오, 오디오 캡쳐 페이지 제작

npm 라이브러리의 도움 없이 브라우저 제공 기능만으로 비디오, 오디오를 캡쳐해 서버로 전송하는 페이지를 제작한다. 추가로 가끔씩 Blob 파일이 Blob이라는 String으로만 전송되는 문제 또한 해결할 수 있다면 좋다.

## 전재조건

+ 외부 라이브러리의 도움을 받아선 안된다.
+ 비디오 레코딩 페이지는 해상도의 조절이 가능해야한다. (선택사항)
+ 서버에 전송하는 파일은 Blob 규격이여야한다.

## 기능 정의

+ 녹음 및 녹화를 지원하는 recording page
+ 녹음, 녹화에 따라 각기 다른 화면이 출력된다.
+ 녹음, 녹화에 따라 세팅창은 각기 다른 설정값을 보여준다.
+ 녹음, 녹화가 끝나면 녹음, 녹화 화면은 브라우저 기본 제공 플레이어로 전환된다.
+ 녹음, 녹화 중에는 정지(완료)만 할 수 있다.
+ 서버로 결과물을 전송할 수 있는 전송 버튼이 있다.
+ 녹음, 녹화가 완료된 상태에서 다시 녹음, 녹화를 시도하면 기존 데이터를 삭제하고 새로 녹음, 녹화를 시도한다.
+ 옵션에서 세팅가능한 값은 아래와 같다.
  + 비디오 - audioBitsPerSecond, videoBitsPerSecond, mimetype, bitsPerSecond
  + 오디오 -

+ 코덱 mkv

## 이슈사항

+ Chrome에서 녹화했을 경우, 녹화된 파일을 다운로드하거나 서버로 전송할 시 포멧은 Matroska로, 코덱 ID는 V_MPEG4/ISO/AVC로 생성된다. 이는 추후에는 몰라도 아직은 범용성이 낮은 코덱으로 avc1(advanced video codec 1)로 인코딩해주어야 윈도우 영화 및 TV 앱, 익스플로러 등에서도 재생이 된다. 따라서 크롬으로 녹화를 한 경우, 산출물의 인코딩 시점, 방법 등을 생각해야한다.
+ MediaInfo라는 툴을 설치하면 파일을 우클릭해 MediaInfo를 선택한 뒤 보기 > HTML 을 선택하여 코덱 정보를 확인할 수 있다.
+ 동영상을 서버에 전송하는 중, 일부 프레임이 드랍되는 경우가 발생한다. 이 경우 파일이 손상되어 재생 자체가 불가능해지는데 이 문제에 여러 각도에서 접근해볼 필요가 있다.

## 자료 조사

+ 가장 기본적인 정보들 - <https://www.html5rocks.com/ko/tutorials/getusermedia/intro/>
+ Recording 송출에 대한 SSL의 필요 여부.
+ windows.audiocontext - <https://www.html5rocks.com/en/tutorials/webaudio/intro/>
+ 거울효과주기 예제 겸 잘 동작하는 코드 - <https://forgiveall.tistory.com/501>
+ 잘 동작하는 녹화 코드 - <https://gist.github.com/prof3ssorSt3v3/48621be79794a8a3adeed7971786d4d8>
+ MediaRecorder의 API - <https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder>
+ 더 다양한 예제 - <https://www.webrtc-experiment.com/RecordRTC/simple-demos/>
+ matrosica 인코딩 - <https://velog.io/@abc5259/Youtube-Clone-Coding-12.-FFMPEG.WASM>
