import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllCaftan from "../components/AllCaftan";
import FormArticleAdmin from "../components/FormArticleAdmin";

function Caftan() {
  const [caftans, setCaftans] = useState([]);
  const caftanId = useParams();
  const toast = useToast();

  useEffect(() => {
    const displayArticle = async (req, res) => {
      try {
        const response = await axios.get("http://localhost:4567/articles/");
        console.log(response.data);
        console.log(response.data.map((caftan) => caftanId));
        setCaftans(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    displayArticle();
  }, []);

  const updateArticle = (newArticle) => {
    setCaftans(newArticle);
    // window.location.reload();
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

  return (
    <div>
      <FormArticleAdmin updateArticle={updateArticle} />
      <AllCaftan caftans={caftans} deleteArticle={deleteArticle} />
    </div>
  );
}

export default Caftan;
