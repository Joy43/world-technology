

import useHome from "../../../Hooks/usehome";
import Homeiphonecard from "./HomeIphonecaard/Homeiphonecard";


const Homeiphone = () => {
  const [products]=useHome()
  const laptopProducts = products.filter(item => item.category === "laptops");

  return (
 
   <div>
       <div className="w-full flex mt-2 mb-3 flex-row flex-wrap bg-gray-600 p-10 py-20 justify-center" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center center', backgroundImage: "url('https://i.ibb.co/Wp1P4wz/serwin365-0c-G-y-QAd-YIM-unsplash.jpg')" }}>
      <div className="w-full text-center">
        <div className="text-3xl text-center text-white antialiased">get  Teach  product</div>
        <div className="text-xl text-center text-white antialiased">The greatest Find out the world ranking Technology product around world</div>
      </div>
      </div>
    <div className="grid md:grid-cols-3 gap-5">
      
      {laptopProducts.map((item) => (
      <Homeiphonecard key={item.id} product={item} />
    ))}
    </div>
   </div>
    
  );
};

export default Homeiphone;
