import { useParams } from "react-router";

const Details = () => {
  const { id, test } = useParams();

  return (<>
    <h1>Details</h1>
    <a href="/about">About</a>
    <h2>Junia</h2>
    <h3>{id}</h3>
    <h3>{test}</h3>
  </>
  )
}

export default Details;