import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import { Container } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

function PageDetails() {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate("/");
  }

  const gameUrl = `${BASE_URL}wp/v2/posts/${id}?_embed`;

  useEffect(() => {
    async function getGame() {
      try {
        const response = await axios.get(gameUrl);
        setGame(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getGame();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }
  if (error) {
    return <Container>{error}</Container>;
  }
  const title = game.title.rendered;
  const img = game._embedded["wp:featuredmedia"][0].source_url;
  const date = moment(game.date).format("Do MMM YYYY");
  const content = game.content.rendered;

  return (
    <Container className="mt-5 game-content">
      <div className="game-details">
        <div className="img-wrapper">
          <div className="game-img" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
        <div className="">
          <h1>{title}</h1>
          <h4>Written: {date}</h4>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}

export default PageDetails;
