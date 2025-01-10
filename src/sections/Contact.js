import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// ContactCard component
const ContactCard = ({ icon: Icon, title, link }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4">
      <Icon size={60} className="text-blue-600" />
      <h3 className="text-xl font-semibold text-gray-800 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {title}
        </a>
      </h3>
    </div>
  );
};

// Contact component
const Contact = () => {
  const contacts = [
    { icon: FaGithub, title: 'GitHub', link: 'https://github.com/kiran-pande-30' },
    { icon: FaLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/kiran-pande-896134226/' },
    { icon: MdEmail, title: 'Email', link: 'mailto:kpande026@gmail.com' },
  ];

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
