import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from '../ContactForm';
import ContactInfoItem from '../ContactInfoItem';
import SectionTitle from '../SectionTitle';
import { ContactSectionStyle } from "./ContactSectionElements"

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="(+52) 638-384-1821" />
            <ContactInfoItem icon={<MdEmail />} text="diegosandovalr.corp@gmail.com" />
            <ContactInfoItem text="Puerto Peñasco, Sonora, Mexico" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
