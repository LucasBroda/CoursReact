import { useParams } from "react-router";

const Details = () => {
  const { id} = useParams();

  return (<>
    <h1>Details</h1>
    <h3>{id}</h3>
  </>
  )
}

export default Details;