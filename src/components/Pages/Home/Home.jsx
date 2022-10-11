import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { Container } from "react-bootstrap";
import GameList from "./GameList";
import Heading from "../../layout/Heading";
import moment from "moment";

function Home() {
  const apiUrl = BASE_URL + "wp/v2/posts?_embed&per_page=100";
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [apiUrl]);

  if (loading) {
    return <Container>Loading...</Container>;
  }
  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <Heading title="Strategy Games" />
      <div className="games">
        {games.map((game) => {
          const date = moment(game.date).format("Do MMM YYYY");
          return <GameList title={game.title.rendered} img={game._embedded["wp:featuredmedia"][0].source_url} id={game.id} key={game.id} date={date} />;
        })}
      </div>
    </Container>
  );
}

export default Home;
