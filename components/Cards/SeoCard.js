import { Fragment } from "react";

const SeoCard = ({ title, description }) => {
  return (
    <Fragment>
      <title>{title} | Adla Global Business</title>
      <meta name="description" content={description} />
    </Fragment>
  );
};

export default SeoCard;
