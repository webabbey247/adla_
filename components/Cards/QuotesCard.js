import styles from "@/styles/about.module.css";
const QuotesCard = () => {
  return (
    <div className={styles.vision_mission_text_container}>
    <figure>
      <blockquote className="blockquote">
        <h4>
         &quot;We offer customized solutions to fulfill your sourcing
          requirements and make global trade smoother with our vast
          experience and network. &quot;
        </h4>
      </blockquote>
      <figcaption className="blockquote-footer text-lg-center">
        Someone famous in {""}
        <cite title="Source Title">Source Title</cite>
      </figcaption>
    </figure>
  </div>
  );
};

export default QuotesCard;
