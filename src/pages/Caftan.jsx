import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllCaftan from "../components/Articles/AllCaftan";
import FormArticleAdmin from "../components/Articles/FormArticleAdmin";
import HeroCaftans from "../components/HeroCaftans";

function Caftan() {
  const [caftans, setCaftans] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const displayArticle = async () => {
      try {
        const response = await axios.get("http://localhost:4567/articles/");
        setCaftans(response.data);
        console.log(response.data);
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
      const articleToDelete = caftans.find((caftan) => caftan._id === caftanId);
      await axios.delete(`http://localhost:4567/articles/delete/${caftanId}`);
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
      const response = await axios.put(
        `http://localhost:4567/articles/update/${articleToUpdate._id}`,

        articleToUpdate
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
    <div
    // className="Caftans"
    >
      <HeroCaftans />
      <FormArticleAdmin reloadArticle={reloadArticle} />
      <AllCaftan
        caftans={caftans}
        deleteArticle={deleteArticle}
        updateArticle={updateArticle}
      />
    </div>
  );
}

export default Caftan;
