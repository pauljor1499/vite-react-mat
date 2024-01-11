import React from "react";
import Header from "./section_header/SectionHeader.jsx";
import Section1 from "./section_1/Section_1.jsx";
import Section2 from "./section_2/Section_2.jsx";
import Section3 from "./section_3/Section_3.jsx";
import Section4 from "./section_4/Section_4.jsx";

const AboutPage = () => {
    return (
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
};

export default AboutPage;
