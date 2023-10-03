import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import AddUser from "./components/AddUser";

 

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: Users[] = response.data;
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1>Users</h1>
        <AddUser />
      </div>
      <Table users={users} />
    </main>
  );
}

export default App;

