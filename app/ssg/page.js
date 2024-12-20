async function getPosts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export default async function ssgPage() {
  const posts = await getPosts()
  return (
    <div className="contents">
      <h2>Static Site Generation {new Date().toLocaleTimeString()}</h2>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}