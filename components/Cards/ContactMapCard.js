import styles from "@/styles/contactus.module.css";

const ContactMapCard = () => {
  return (
    <div className="mb-lg-0 mb-0">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <iframe
            className={styles.contact_map_iframe}
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15855.402377752765!2d3.3467128110073703!3d6.540543845236132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8%20%2C%20Okunade%20street%20Charity%20bus%20stop%2C%20Oshodi%20Lagos%20State!5e0!3m2!1sen!2sng!4v1690273396238!5m2!1sen!2sng"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMapCard;
