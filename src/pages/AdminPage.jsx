import "../App.css";
import React from "react";
import CreateUser from "../components/CreateUser";
import { useState } from "react";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import UserList from "../components/UserList";
import axios from "axios";

function AdminPage() {
  const [Users, setUsers] = useState([]);
  //   const { usersId } = useParams();

  useEffect(() => {
    const listUser = async () => {
      try {
        const res = await axios.get("http://localhost:4567/auth/");
        console.log(res.data);
        // console.log(res.data.map((users) => usersId));
        setUsers(res.data);
      } catch (error) {
        console.error(error, "Error lors du fetch d'users");
      }
    };
    listUser();
  }, []);

  const updateUsers = (newUsers) => {
    setUsers(newUsers);
    window.location.reload();
  };
  return (
    <>
      <div className="box_user">
        <CreateUser updateUsers={updateUsers} />
        <UserList Users={Users} />
      </div>
    </>
  );
}

export default AdminPage;
