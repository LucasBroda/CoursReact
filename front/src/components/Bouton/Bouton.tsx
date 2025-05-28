import { useEffect, useState } from 'react'


function Bouton() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('VALEUR COMPTEUR')
    console.log(count)
    console.log('-------------------')
  }, [count])

  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur: {count}
    </button>
  )
}
export default Bouton