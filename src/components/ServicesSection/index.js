import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import { CgIfDesign } from 'react-icons/cg';
import { GoBrowser } from 'react-icons/go';
import SectionTitle from '../SectionTitle';
import ServicesSectionItem from '../ServicesSectionItems';
import { ServicesItemsStyles } from './ServicesSectionElements';

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<CgIfDesign />}
            title="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<GoBrowser />}
            title="Web Application Dev"
            desc="I create high performance web applications to generate an optimal user experience."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Desktop application Dev"
            desc="I develop desktop applications seeking to create solutions that facilitate the daily work of companies and individuals. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
