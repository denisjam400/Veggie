import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=8e0a632c38f140a48ee61f5892712ed1&cuisine=${name}`
    );
    const recipe = await data.json();
    setCuisine(recipe.results);
    console.log(recipe.results);
  };

  useEffect(() => {
    getCuisine(params.name);
    console.log(params.name);
  }, [params.name]);

  const Grid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 70px;
  `;
  const Card = styled.div`
    img {
      width: 100%;
      height: 90vh;
      border-radius: 2rem;
    }
    a {
      text-decoration: none;
    }
    h4 {
      text-align: center;
      padding: 1rem;
    }
  `;

  return (
    <Grid>
      {cuisine.map((item) => (
        <Card>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </Card>
      ))}
    </Grid>
  );
};

export default Cuisine;
