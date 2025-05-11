import React from "react";

const companies = [
  { name: "Disney+", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Disney%2B_2024.svg/500px-Disney%2B_2024.svg.png" },
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png" },
  { name: "HubSpot", src: "https://1000logos.net/wp-content/uploads/2022/12/HubSpot-Logo-768x432.png" },
  { name: "YouTube", src: "https://images.indianexpress.com/2021/06/YouTube-logo.jpg" },
  { name: "Slack", src: "https://t3.ftcdn.net/jpg/03/98/76/08/360_F_398760837_vHn5HpwkSdupuTzZll5nKEHtjhEqVVCH.jpg" },
  { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" },
];

const CompanyLogos= () => {
  return (
    <div className="bg-white py-10 px-4 text-center">
      <h2 className="text-sm font-semibold text-gray-600 uppercase mb-6">
        Trusted by top-leading companies.
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-20">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.src}
            alt={company.name}
            className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
