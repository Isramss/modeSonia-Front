import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileEdit from "../components/users/ProfileEdit";

function Profil() {
  const [users, setUsers] = useState(null);
  const toast = useToast();
  const { userId } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:4567/auth/${userId}`);
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, [userId]);

  const updateUsers = async (userId, updatedUserData) => {
    try {
      const res = await axios.put(
        `http://localhost:4567/auth/edit/${userId}`,
        updatedUserData
      );

      if (res.status === 200) {
        // Ici la liste se met à jour
        // setUsers((user) => (user._id === userId._id ? userId : user));

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

  return <ProfileEdit users={users} updateUsers={updateUsers} />;
}

export default Profil;
