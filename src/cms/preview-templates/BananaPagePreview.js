import React from "react";
import PropTypes from "prop-types";
import { BananaPageTemplate } from "../../templates/banana-page";

const BananaPagePreview = ({ entry, widgetFor }) => (
  <BananaPageTemplate
    title={entry.getIn(["data", "title"])}
    name={entry.getIn(["data", "name"])}
    phone={entry.getIn(["data", "phone"])}
    email={entry.getIn(["data", "email"])}
    content={widgetFor("body")}
  />
);

BananaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BananaPagePreview;
