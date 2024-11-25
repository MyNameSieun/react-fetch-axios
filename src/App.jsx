import CatDataUseAxios from "./components/CatDataUseAxios";
import CatDataUseFetch from "./components/CatDataUseFetch";

const App = () => {
  return (
    <main>
      <h1>오픈 API를 사용해서 데이터 가져오기</h1>
      <h2>사용한 API: The Cat API</h2>
      <p>고양이 사진을 랜덤으로 보여주는 API</p>
      <hr />
      <>
        <CatDataUseFetch />
      </>
      <>
        <CatDataUseAxios />
      </>
    </main>
  );
};

export default App;
