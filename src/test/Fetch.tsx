"use client";

import { useEffect, useState } from "react";

type posts = {
  id: string;
  title: string;
  body?: string;
};

const FetchingData = () => {
  const [fetchData, setFetchData] = useState<posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch]=useState<string>("")
  const [filteredPosts, setFilteredPosts] = useState<posts[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const fetchpostes = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        setError("Error");
      }
      const date = await res.json();
      setFetchData(date);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchpostes();
  }, []);

  useEffect(() => {
    const lowerCasedSearchTerm = search.toLowerCase();
    const filtered =  fetchData.filter(date=>date?.title.toLowerCase().includes(search.toLowerCase()))
    setFilteredPosts(filtered);
  }, [search, fetchData]);

//   const filteredData = fetchData.filter(date=>date?.title.toLowerCase().includes(search.toLowerCase()))
useEffect(() => {
     const sorted=[...filteredPosts].sort((a,b)=>{
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
     })
    setFilteredPosts(sorted);
  }, [sortOrder]);


  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div>
      <h1>Fetching Data</h1>
            {/* Sort Buttons */}
            <div className="flex gap-4">
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-4 py-2 border rounded ${sortOrder === "asc" ? "bg-gray-200" : ""}`}
        >
          Sort A-Z
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className={`px-4 py-2 border rounded ${sortOrder === "desc" ? "bg-gray-200" : ""}`}
        >
          Sort Z-A
        </button>
      </div>

      <input type="text" placeholder="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      <div>
        {filteredPosts?.map((data) => (
          <div
             key={data.id}
          >
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FetchingData;
