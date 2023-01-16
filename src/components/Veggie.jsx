import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Veggie = () => {
  const [veggie, setveggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setveggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=8e0a632c38f140a48ee61f5892712ed1&number=20&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setveggie(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipes) => {
            return (
              <SplideSlide key={recipes.id}>
                <Card key={recipes.id}>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
  border-radius: 2rem;
`;
const Card = styled.div`
  min-height: 50vh;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 40vh;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 1000;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    width: 500px;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
  }
`;
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
