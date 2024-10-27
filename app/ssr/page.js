export default async function ssr() {
  const res = await fetch('https://fakestoreapi.com/products/1')
  const data = await res.json()

  return (
    <div className="contents">
      <h2>Server Side Rendering</h2>
      <p>{ data.title }</p>
    </div>
  )
}