import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/worker-top (1).jpg";
import macHeroScreenshotImageSrc from "images/worker-top (2).jpg";
import prototypeIllustrationImageSrc from "images/worker-top (3).jpg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <>
      <AnimationRevealPage>
        <Hero roundedHeaderButton={true} />
        <Features
          subheading={<Subheading>Features</Subheading>}
          heading={
            <>
              We have Amazing <HighlightedText>Service.</HighlightedText>
            </>
          }
        />
        <MainFeature
          subheading={<Subheading>Quality Work</Subheading>}
          imageSrc={heroScreenshotImageSrc}
          imageBorder={true}
          imageDecoratorBlob={true}
        />
        <FeatureWithSteps
          subheading={<Subheading>STEPS</Subheading>}
          heading={
            <>
              Easy to <HighlightedText>Get Started.</HighlightedText>
            </>
          }
          textOnLeft={false}
          imageSrc={macHeroScreenshotImageSrc}
          imageDecoratorBlob={true}
          decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
        <MainFeature2
          subheading={<Subheading>VALUES</Subheading>}
          heading={
            <>
              We Always Abide by Our{" "}
              <HighlightedText>Principles.</HighlightedText>
            </>
          }
          imageSrc={prototypeIllustrationImageSrc}
          showDecoratorBlob={false}
          features={[
            {
              Icon: MoneyIcon,
              title: "Affordable",
              description:
                "We promise to offer you the best rate we can - at par with the industry standard.",
              iconContainerCss: tw`bg-green-300 text-green-800`,
            },
            {
              Icon: BriefcaseIcon,
              title: "Professionalism",
              description:
                "We assure you that our templates are designed and created by professional designers.",
              iconContainerCss: tw`bg-red-300 text-red-800`,
            },
          ]}
        />
        {/* <Pricing
          subheading={<Subheading>Pricing</Subheading>}
          heading={
            <>
              Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
            </>
          }
          plans={[
            {
              name: "Personal",
              price: "$17.99",
              duration: "Monthly",
              mainFeature: "For Individuals",
              features: [
                "30 Templates",
                "7 Landing Pages",
                "12 Internal Pages",
                "Basic Assistance",
              ],
            },
            {
              name: "Business",
              price: "$37.99",
              duration: "Monthly",
              mainFeature: "For Small Businesses",
              features: [
                "60 Templates",
                "15 Landing Pages",
                "22 Internal Pages",
                "Priority Assistance",
              ],
              featured: true,
            },
            {
              name: "Enterprise",
              price: "$57.99",
              duration: "Monthly",
              mainFeature: "For Large Companies",
              features: [
                "90 Templates",
                "27 Landing Pages",
                "37 Internal Pages",
                "Personal Assistance",
              ],
            },
          ]}
        /> */}
        <Testimonial
          subheading={<Subheading>Testimonials</Subheading>}
          heading={
            <>
              Our Clients <HighlightedText>Love Us.</HighlightedText>
            </>
          }
          testimonials={[
            {
              stars: 5,
              profileImageSrc:
                "https://media.licdn.com/dms/image/v2/C4E03AQE3vi7DQtZegQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641490872220?e=1740614400&v=beta&t=g7H2gy_2-7gc2MftWEUf-Y-52ApyRT24la1QSr17atc",
              heading: "Excellent Service and Professional Team!",
              quote:
                "I recently moved to a new house, and the Aks packers and movers team made the process seamless. They handled all my belongings with care, packed everything securely, and ensured on-time delivery. Their professionalism and attention to detail were impressive. I highly recommend their services!",
              customerName: "Aditya Kumar",
              customerTitle: "Home Shifting",
            },
            {
              stars: 4,
              profileImageSrc:
                "https://media.licdn.com/dms/image/v2/D5603AQETLcu1HPrYzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714560833222?e=1740614400&v=beta&t=iJEyfULF77byciLtTbIdG9DCRFGPxXrFk8atX3w2SeU",
              heading: "Affordable and Reliable Packers",
              quote:
                "I was initially worried about finding a good moving service within my budget, but this company exceeded my expectations. Their rates were reasonable, and the service quality was outstanding. They took great care of my Scooty during the move from Ghaziabad to Vadodara. Highly trustworthy!",
              customerName: "Tannu Singh",
              customerTitle: "Two Wheeler Shifting",
            },
          ]}
        />
        <FAQ
          subheading={<Subheading>FAQS</Subheading>}
          heading={
            <>
              You have <HighlightedText>Questions ?</HighlightedText>
            </>
          }
          faqs={[
            {
              question: "Are all the templates easily customizable ?",
              answer:
                "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              question:
                "How long do you usually support an standalone template for ?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              question: "What kind of payment methods do you accept ?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              question:
                "Is there a subscribption service to get the latest templates ?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              question: "Are the templates compatible with the React ?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              question: "Do you really support Internet Explorer 11 ?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          ]}
        />
        <GetStarted />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
