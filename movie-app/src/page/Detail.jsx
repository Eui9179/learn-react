import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json.data.movie);

    setMovieDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <h1>{movieDetail.title}</h1>}</div>;
}

export default Detail;
