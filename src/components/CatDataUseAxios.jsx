import axios from "axios";
import { useEffect, useState } from "react";

const CAT_API_KEY =
  "live_jcgp5vcW2PZ2Pcgf9jZ2OwKOL8VfBRVTOXBNxENvNI0rXlkfSJfwDPcOLuvS10Mh";

const CatDataUseAxios = () => {
  const [catImages, setCatImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        // 1. axios.get()으로 api 호출
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${CAT_API_KEY}`
        );
        // 2. 응답 데이터는 response.data로 바로 접근 가능 (json 변환 필요 x)
        setCatImages(response.data);
      } catch (error) {
        // 3. axios는 http 오류를 자동으로 처리하기 때문에 try-catch로 처리하면 충분
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCatData();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }
  return (
    <article>
      <h1>CatDataUseAxios</h1>
      {catImages?.map((catImage) => (
        <ul key={catImage.id}>
          <li>image id: {catImage.id}</li>
          <li>
            <img src={catImage.url} alt="고양이사진" width={300} />
          </li>
        </ul>
      ))}
    </article>
  );
};

export default CatDataUseAxios;
