async function ssgData() {
  const res = await fetch('https://fakestoreapi.com/products/2')
  return res.json()
}

export default async function ssg() {
  const data = await ssgData()
  return (
    <div className="contents">
      <h2>Static Site Generation</h2>
      <p>{ data.title }</p>
    </div>
  )
}