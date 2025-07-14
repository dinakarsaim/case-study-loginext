import { useState, useEffect } from "react";
import Card from "./components/cards";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/deleteModal";

const App = () => {
  const [data, setData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{fetchData()}, []);

  async function fetchData () {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    console.log(json);
    setData(json);
    setLoading(false);
  }

  function updateInfo (editedUser) {
    setData((prevData) =>
      prevData.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setEditUser(null);
  };

  function deleteInfo (delUser) {
    setData(prev => prev.filter(user => user.id !== delUser.id));
    setDeleteUser(null);
  }

  return (
    <div className="main">
      {loading ? (
        <div className="loader-wrapper">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      ) : (
        <>
          <h1>Case Study</h1>
          <div className="container">
            {data.map((user) => (
              <Card key={user.id} userData={user} editFunc={() => setEditUser(user)} deleteFunc={() => setDeleteUser(user)}
              />
            ))}
          </div>
        </>
      )}

      {editUser && (
        <EditModal user={editUser} onClose={()=>{setEditUser(null)}} onSave={updateInfo}></EditModal>
      )}

      {deleteUser && (
        <DeleteModal user={deleteUser} onCancel={() => setDeleteUser(null)} onConfirm={() => deleteInfo(deleteUser)}
        />
      )}
    </div>
  )
};

export default App;