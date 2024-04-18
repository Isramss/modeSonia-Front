import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllCaftan from "../components/Articles/AllCaftan";
import FormArticleAdmin from "../components/Articles/FormArticleAdmin";
import HeroCaftans from "../components/HeroCaftans";

function Caftan() {
  const [caftans, setCaftans] = useState([]);
  const { userId } = useParams();
  const toast = useToast();

  useEffect(() => {
    const displayArticle = async () => {
      try {
        const response = await axios.get("http://localhost:4567/articles/");
        setCaftans(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    displayArticle();
  }, []);

  const reloadArticle = (newArticle) => {
    setCaftans(newArticle);
  };

  const deleteArticle = async (caftanId) => {
    try {
      // token auth
      const token = JSON.parse(sessionStorage.getItem("token"));

      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const articleToDelete = caftans.find((caftan) => caftan._id === caftanId);
      await axios.delete(
        `http://localhost:4567/articles/delete/${caftanId}`,
        config
      );
      setCaftans(caftans.filter((caftan) => caftan._id !== caftanId));
      toast({
        title: `Suppresion de ${articleToDelete.title_Produit} réussie ! 👍`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("L'article n'a pas été supprimé:", error);
    }
  };

  const updateArticle = async (articleToUpdate) => {
    try {
      // token auth
      const token = JSON.parse(sessionStorage.getItem("token"));

      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `http://localhost:4567/articles/update/${articleToUpdate._id}`,

        articleToUpdate,
        config
      );

      if (response.status === 200) {
        // Ici la liste se met à jour
        setCaftans(
          caftans.map((caftan) =>
            caftan._id === articleToUpdate._id ? articleToUpdate : caftan
          )
        );
        toast({
          title: "Article mis à jour avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        //mise a jour echoué (relou)
        toast({
          title: "Erreur lors de la mise à jour de l'article",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("L'article n'a pas été modifié:", error);
      // erreur mise à joue
      toast({
        title: "Erreur lors de la mise à jour de l'article",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <HeroCaftans />
      <FormArticleAdmin reloadArticle={reloadArticle} />
      <AllCaftan
        userId={userId}
        caftans={caftans}
        deleteArticle={deleteArticle}
        updateArticle={updateArticle}
      />
    </div>
  );
}

export default Caftan;
