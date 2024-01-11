import React from "react";
import FirstSection from "./sections/first_section/FirstSection";
import SecondSection from "./sections/second_section/SecondSection";
import ThirdSection from "./sections/third_section/ThirdSection";
import FourthSection from "./sections/fourth_section/FourthSection";
import FifthSection from "./sections/fifth_section/FifthSection";

const LandingPage = () => {
    return (
        <div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </div>
    );
};

export default LandingPage;
