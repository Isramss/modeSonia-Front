import React from "react";
import CreateUser from "../components/CreateUser";
import { useState } from "react";
import { useEffect } from "react";
import UserList from "../components/UserList";
import axios from "axios";
import "../App.css";
import { useToast } from "@chakra-ui/react";

function AdminPage() {
  const [users, setUsers] = useState([]);
  const userDataAd = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = userDataAd ? userDataAd.user.isAdmin : false;
  const toast = useToast();
  //   const { usersId } = useParams();

  useEffect(() => {
    const listUser = async () => {
      try {
        const res = await axios.get("http://localhost:4567/auth/");
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.error(error, "Error lors du fetch d'users");
      }
    };
    listUser();
  }, []);

  const deleteUsers = async (userId) => {
    try {
      const userToDelete = users.find((user) => user._id === userId);
      // pour afficher le fullname en visant l'user

      await axios.delete(`http://localhost:4567/auth/delete/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      //la ligne de setUsers => permet de mettre a jour les utilisateurs supprimer avec leurs id

      toast({
        title: `Suppresion de ${userToDelete.fullname} réussie ! 👍`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("L'utilisateur n'a pas été supprimé:", error);
    }
  };

  const updateUsers = (newUsers) => {
    setUsers(newUsers);
    // window.location.reload();
  };
  return (
    <>
      {isAdmin ? (
        <div className="box_user">
          <CreateUser updateUsers={updateUsers} />
          <UserList users={users} deleteUsers={deleteUsers} />
        </div>
      ) : null}
    </>
  );
}

export default AdminPage;
