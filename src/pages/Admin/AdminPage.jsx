import React from "react";
import CreateUser from "../../components/Admin/CreateUser";
import { useState } from "react";
import { useEffect } from "react";
import UserList from "../../components/Admin/UserList";
import axios from "axios";
import "../../App.css";
import { useToast } from "@chakra-ui/react";

function AdminPage() {
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = userData ? userData.userData.isAdmin : false;
  const toast = useToast();

  // token auth
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log("token");

  if (!token) {
    throw new Error("Token not found");
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const listUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/`,
          config
        );
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

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/auth/delete/${userId}`,
        config
      );
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

  const reloadUsers = (newUsers) => {
    setUsers(newUsers);
    // window.location.reload();
  };

  const updateUsers = async (userToUpdate) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/edit/${userToUpdate._id}`,
        userToUpdate,
        config
      );
      if (res.status === 200) {
        // Ici la liste se met à jour
        setUsers((user) =>
          user._id === userToUpdate._id ? userToUpdate : user
        );

        toast({
          title: "Utilisateur mis à jour avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        //mise a jour echoué (relou)
        toast({
          title: "Erreur lors de la mise à jour de l'utilisateur",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("L'user n'a pas été modifié:", error);
    }
  };

  return (
    <>
      {isAdmin ? (
        <div className="box_user">
          <CreateUser reloadUsers={reloadUsers} />
          <UserList
            users={users}
            deleteUsers={deleteUsers}
            updateUsers={updateUsers}
          />
        </div>
      ) : null}
    </>
  );
}

export default AdminPage;
