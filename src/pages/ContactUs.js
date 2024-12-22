import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Ghaziabad",
            description: (
              <>
                Our Ghaziabad office offers reliable and efficient relocation
                services. Whether you're moving within the city or beyond, we
                ensure your belongings are packed with care and delivered
                safely.
              </>
            ),
          },
          {
            title: "New Delhi",
            description: (
              <>
                Serving the capital city, our New Delhi office specializes in
                seamless moving and packing services. We cater to local,
                long-distance, and interstate moves with attention to detail and
                professionalism.
              </>
            ),
          },
          {
            title: "Patna",
            description: (
              <>
                From Patna, we provide top-notch packing and moving services
                tailored to your needs. Whether it's a residential move or an
                office relocation, our team ensures a smooth transition with
                minimal hassle.
              </>
            ),
          },
          {
            title: "Ranchi",
            description: (
              <>
                Our Ranchi office is committed to offering quality moving
                services at competitive rates. We handle your items with care,
                making sure they reach their destination safely and on time.
              </>
            ),
          },
          {
            title: "Kolkata",
            description: (
              <>
                In Kolkata, our experienced movers ensure that your relocation
                is quick and efficient. We offer comprehensive services,
                including packing, loading, and unloading, for both local and
                interstate moves.
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
