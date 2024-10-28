export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div className="contents">
      <main>
        <h2>Basic Rendering {new Date().toLocaleTimeString()}</h2>
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        <ul>
        {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
        ))}
        </ul>
      </main>
    </div>
  );
}
