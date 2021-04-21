import Header from '../../components/Header/header';

import {
  useParams
} from "react-router-dom";

export default function Home() {
  let { makeParam, modelParam, trimParam, yearParam } = useParams();
  return (
    <>
      <Header />
      <div>
        <h3>Create your fitment component here!</h3>
        <p>{makeParam}</p>
        <p>{modelParam}</p>
        <p>{trimParam}</p>
        <p>{yearParam}</p>
      </div>
      
    </>
  )
}