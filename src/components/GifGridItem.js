import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ url, title, id }) => {
  return (
    <section className="card">
      <img src={url} alt={title}></img>
      <h4>{title}</h4>
    </section>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
