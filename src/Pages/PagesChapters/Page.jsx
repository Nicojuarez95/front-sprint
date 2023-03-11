import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Page() {
  const [chapter, setChapter] = useState(null);
  const { id, page } = useParams();
  const navigate = useNavigate();
  const pageNumber = parseFloat(page);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/chapters/${id}`)
      .then((response) => setChapter(response.data.Chapter))
      .catch((error) => console.error(error));
  }, [id]);

  const goNext = () => {
    if (pageNumber === chapter.pages.length) {
      navigate(`/chapters/${id}/${1}`);
    } else {
      navigate(`/chapters/${id}/${pageNumber + 1}`);
    }
  };

  const goBack = () => {
    if (pageNumber === 1) {
      navigate(`/chapters/${id}/${chapter.pages.length}`);
    } else {
      navigate(`/chapters/${id}/${pageNumber - 1}`);
    }
  };

  return (
    <div className="chapterOne">
      <h3 className="nombreCap">Nombre del Capitulo </h3>
      <button onClick={goBack}>Back</button>
      <div className="imgMover">
      {chapter ? (
        <img src={chapter.pages[pageNumber - 1]} alt="chapter page" />
      ) : (
        "no existe el capitulo"
      )}
      </div>
      <button onClick={goNext}>Next</button>
    </div>
  );
}
