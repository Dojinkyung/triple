# ✨트리플 사전과제✨

## 📸 화면

![detail](https://user-images.githubusercontent.com/63532503/175938133-5638e680-56df-41b4-9878-74fcdd9818c6.gif)

# 🔧 기술 스텍과 선택 이유

- Typescript: 타입 안정성을 통해 에러나 버그를 줄일 수 있기 때문에 선택하였습니다.

- React: 과제에 주어진 요구사항 입니다.

- Module css, scss: Module css를 함께 이용하여 클래스명 중복을 방지할 수 있어 중복 현상을 피합니다. scss는 자유도가 높고, 유지보수가 편합니다. css in css는 재랜더링을 하지 않습니다. countup함수는 랜더링이 자주 일어나기 때문에 css in css가 적합하다고 생각했습니다.

# 📌 실행 방법

```
git clone https://github.com/Dojinkyung/wanted_personal_project.git`

```

```
npm insatll && npm start

```

## 📦 폴더 구조

```sh

📦src
 ┣ 📂component # 컴포넌트들을 모아둔 파일
 ┃ ┣ 📂award # 수상내역
 ┃ ┣ 📂contentLogo # 트리플 로고
 ┃ ┗ 📂metrics # 글자 영역
 ┣ 📂hooks #useCount와 useInterval 훅을 모아둔 파일
 ┣ 📂images # 이미지 파일
 ┣ 📂styles # 색상, 애니메이션등 저장 파일
 ┗ 📜App.tsx # 전체 레이아웃

```

# 📸애니메이션

## 1. 영역별 등장 애니메이션

keyframe 이용 opacity와 translateY를 이용하여 투명도와 올라가는 애니메이션을 넣어주고, animation-delay를 이용하여 등장 시간에 차이를 주었습니다.

## 2. 숫자가 올라가는 애니메이션

숫자가 올라가는 애니메이션은 [React-countup](https://github.com/glennreyes/react-countup) 라이브러리 대신 hooks에 useCountUp을 직접 만들어 사용하였습니다. useCountUp에는 setInterval대신 useInterval을 사용해 주었습니다.
초반 1400ms 에는 10ms마다 14번 숫자를 증가시켜 주었습니다. 그 후 마지막 숫자 6개는 100ms마다 1씩 숫자를 증가시켜 주어 증가 속도가 느려지는 효과를 구현하였습니다.

[useInterval](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) 사용 이유: setInterval은 함수 실행시간을 delay시간에 포함시켜 delay시간을 보장하지 못하므로 타이머가 제대로 작동하지 않을 수 있다고 합니다. useInterval은 react의 라이프 사이클에 맞는 interval입니다.
