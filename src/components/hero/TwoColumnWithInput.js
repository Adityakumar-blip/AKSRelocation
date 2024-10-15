/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/heroimage.jpg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:items-center py-20 md:py-24`;
const LeftColumn = tw.div`relative w-full lg:w-3/5 flex flex-col items-center justify-center text-center max-w-lg mx-auto lg:max-w-none h-[350px] lg:text-center mt-[20px]`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 lg:w-2/5 flex-1 flex flex-col justify-center items-center `;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center rounded-sm`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

const PrimaryAction = tw.button`w-80  right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        {/* <TwoColumn> */}
        <LeftColumn>
          <Heading>
            Full Sustainable Cargo <span tw="text-primary-500">Solutions</span>
          </Heading>
          <Paragraph>
            Let us handle your move with care and ease. Sit back and relax while
            our expert packers and movers take care of everything.
          </Paragraph>
          {/* <Actions>
            <input type="text" placeholder="Your E-mail Address" />
            <button>Get Started</button>
          </Actions> */}
          <PrimaryAction>
            <Link to="/contact-us">Get Quote</Link>
          </PrimaryAction>
        </LeftColumn>
        {/* <RightColumn> */}
        <div tw="w-full h-full">
          <img
            tw="rounded-[40px] mt-[40px]"
            src={DesignIllustration}
            alt="Design Illustration"
          />
        </div>
        <CustomersLogoStrip>
          <p>Our TRUSTED Customers</p>
          <img
            src={CustomersLogoStripImage}
            tw="h-[15px] w-[10px]"
            alt="Our Customers"
          />
        </CustomersLogoStrip>
        {/* </RightColumn> */}
        {/* </TwoColumn> */}
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
