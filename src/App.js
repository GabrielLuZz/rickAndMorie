import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results);
        setInfo(response.info);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const previousPage = () => {
    if (info.prev !== null) {
      setCurrentPage(info.prev);
    }
  };

  const nextPage = () => {
    if (info.next !== null) {
      setCurrentPage(info.next);
    }
  };

  return (
    <>
      <Characters characterList={characterList} />

      {info?.prev && (
        <BsFillArrowLeftCircleFill
          onClick={previousPage}
          className="arrowLeft"
        />
      )}

      {info?.next && (
        <BsFillArrowRightCircleFill onClick={nextPage} className="arrowRight" />
      )}
    </>
  );
}

export default App;
