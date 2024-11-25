import { useEffect, useState } from "react";

const CAT_API_KEY =
  "live_jcgp5vcW2PZ2Pcgf9jZ2OwKOL8VfBRVTOXBNxENvNI0rXlkfSJfwDPcOLuvS10Mh";

const CatDataUseFetch = () => {
  const [catImages, setCatImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        // 1. fetch()로 api 호출
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=2&api_key=${CAT_API_KEY}`
        );

        // 2. 응답 데이터를 json으로 변환
        const data = await response.json();

        // 3. fetch는 HTTP 오류시에는 예외 발생시키지 않으므로 추가로 response.ok를 확인해줘야함.
        if (response.ok) {
          setCatImages(data);
        } else {
          alert("오류 발생!");
        }
      } catch (error) {
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
      <h1>CatDataUseFetch</h1>
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

export default CatDataUseFetch;
