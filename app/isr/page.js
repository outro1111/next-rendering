import { cookies } from "next/headers"

async function getPosts() {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 70 } })
  return res.json()
}

export default async function isrPage() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  const posts = await getPosts()
  return (
    <div className="contents">
      <h2>Incremental Static Regeneration {new Date().toLocaleTimeString()}</h2>
      <p>{ theme }</p>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}