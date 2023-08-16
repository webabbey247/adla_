import styles from "@/styles/homepage.module.css";
const HomeAboutUsCard = () => {
  return (
    <div className={styles.home_about_section}>
      <div className="container-fluid nav_padding">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={styles.home_about_section_ltr}>
              <h4>
                <span>Adla Global Business Solutions</span>, a leading procurement and
                exports specialist company.
              </h4>
              <p>
                Our goal is to deliver consistent absolute returns for our
                investors irrespective of the market environment. Rigorous
                analysis, disciplined risk management, and a relentless pursuit
                of excellence underpin Adla’s reputation as a market leader.
              </p>

              <p>
                Our enduring client relationships are built on trust, integrity,
                and high-performing investment strategies.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={styles.home_about_section_rtl}>
              <div className={styles.home_about_section_rtl_img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsCard;
