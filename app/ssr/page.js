import { cookies } from "next/headers"

async function getPosts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export default async function ssrPage() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')
  const posts = await getPosts()
  return (
    <div className="contents">
      <h2>Server Side Rendering {new Date().toLocaleTimeString()}</h2>
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