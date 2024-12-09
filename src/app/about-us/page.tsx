"use client";
import CompanyStory from "@/components/company-story";
import TeamSlider from "@/components/team";
import ValueProposition from "@/components/value";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen mt-28 ">
      {/* Hero Section */}

      {/* Company Story Section */}
      <CompanyStory />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Team Slider */}
    </div>
  );
};

export default AboutPage;
