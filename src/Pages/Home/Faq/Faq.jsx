import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const faqData = [
    {
      id: 1,
      header: "Latest Technology Products",
      body: "Explore the latest and greatest in technology with our cutting-edge products. Whether you're a tech enthusiast or a casual user, our product lineup offers innovation and performance. Stay ahead with the most advanced technology solutions available in the market.",
    },
    {
      id: 2,
      header: "Product Options",
      body: "Choose from a diverse range of options, from high-end gadgets to budget-friendly devices. Our platform provides you with the flexibility to select the features and specifications that matter most to you. We make it easy for you to make informed decisions and enhance your tech experience.",
    },
    {
      id: 3,
      header: "Where to Buy",
      body: "Our technology products are available for purchase anytime, anywhere. You can order online through our website or use our mobile app to make secure transactions on the go. Enjoy a seamless shopping experience, ensuring you find the right tech product for your needs.",
    },
    {
      id: 4,
      header: "Returns and Exchanges",
      body: "We understand that preferences can change. Our platform offers flexible returns and exchange options. If your tech needs evolve, you can easily adjust your order or exchange it hassle-free. We're committed to providing you with a stress-free shopping experience.",
    },
    {
      id: 5,
      header: "Customer Support",
      body: "Our dedicated customer support team is here to assist you around the clock. If you have any questions, concerns, or need assistance with your tech purchase, feel free to reach out to us. We're dedicated to ensuring your tech shopping experience is smooth and enjoyable.",
    },
  ];

  const toggleItem = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-semibol font-mono mb-4 text-center">
        Frequently Asked Questions & Answer
      </h1>
      <div className="space-y-4">
        {faqData.map((faqItem) => (
          <div key={faqItem.id} className="bg-white shadow-md p-4 rounded-lg">
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleItem(faqItem.id)}
            >
              <div className="text-lg font-medium text-gray-800">
                {faqItem.header}
              </div>
              <FaAngleDown
                size={24}
                className={`transform ${
                  expandedIds.includes(faqItem.id) ? "rotate-0" : "rotate-180"
                } transition-transform`}
                style={{
                  fill: "#000000",
                  transition: "color 0.3s ease-in-out",
                }}
              />
            </div>
            <div
              className={`mt-4 text-gray-600 leading-relaxed ${
                expandedIds.includes(faqItem.id) ? "" : "hidden"
              }`}
            >
              {faqItem.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
