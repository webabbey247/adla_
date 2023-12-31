import {
  MainLayout,
  CustomBannerCard,
  ContactMapCard,
  ContactUsFormCard,
} from "@/components";

export const metadata = {
  title: "Contact Us",
  description: "Generated by create next app",
};

const ContactUsPage = () => {
  return (
    <MainLayout>
      <section className="w-100 h-100 position-relative">
        <CustomBannerCard
          title="Contact Us"
          description=" We would love to collaborate with your organization. Please share some information about yourself and we will immediately get in touch with you."
        />
        <ContactUsFormCard />
        <ContactMapCard />
      </section>
    </MainLayout>
  );
};

export default ContactUsPage;
