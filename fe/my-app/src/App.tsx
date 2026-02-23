import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  likes: number;
  image: string;
}

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect((): void => {
    const fetchComments = async (): Promise<void> => {
      try {
        const res: Response = await fetch("http://localhost:8000/");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Comment[] = await res.json();
        setComments(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchComments();
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>{comment.text}</p>
          <p>{comment.date}</p>
          <p>{comment.likes}</p>
          <img src={comment.image} alt={comment.author} />
        </div>
      ))}
    </>
  )
}

export default App
