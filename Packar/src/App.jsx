import { useCatFact } from './hooks/useCatFact'

export default function App () {
  const { fact, refreshRandomFact } = useCatFact()

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Refresh</button>
      {fact && <img src={fact} alt='image-cat' />}
    </main>
  )
}
