import { useEffect, useState } from "react";

// 1 . useEffect (callback)  / gọi callback mỗi khi re-render
// 2 . useEffect (callback,[])
// chỉ gọi callback 1 lần sau khi component mounted
// 3 . useEffect (callback,[deps])
//- callback se duoc goi lai moi khi dependency  thay doi
// -----
// 1 Callback luôn được gọi sau khi component ,mounted
// 2 cleanr up function luôn được gọi trước  khi component unmounted
const Content = () => {
  const tabs = ["posts", "comments", "albums", "users"];
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup functions
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
};

export default Content;
