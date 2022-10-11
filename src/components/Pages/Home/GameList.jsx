import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function GameList({ title, img, id, date }) {
  return (
    <>
      <NavLink className="p-0 shadow card-container" to={`/detail/${id}`}>
        <Card className="text-white card-wrapper">
          <Card.Img src={img} alt={`Cover image of ${title}`} className="card-image" />
          <Card.ImgOverlay className="img-zoom bottom-0">
            <Card.Title className="card-text">{title}</Card.Title>
            <Card.Text className="card-text ">{date}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </NavLink>
    </>
  );
}

export default GameList;
GameList.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
};
