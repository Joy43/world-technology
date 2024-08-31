import { useState } from "react";
import Swal from "sweetalert2";

const Contactus = () => {
  const [formData, setfromdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setfromdata({ ...formData, [name]: value });
  };
  // -----------handle submit------------

  const handleSubmit = async () => {
    try {
      // Send form data to backend
      const response = await fetch(
        "https://portfollio-server-seven.vercel.app/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Form submitted successfully, reset form fields
        setfromdata({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
        const Toast = Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "summited in successfully your message",
          footer: " plese check your mail .Deatils here your email",
        });
      } else {
        // Handle error

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error submitting form",
          footer: " do I have this issue?",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Again Click send Email Buton");
    }
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
        <div className="bg-white max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-6 h-full">
            <div className="bg-blue-900 p-10 col-span-2">
              <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Let's Contact
              </h2>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Location Address
                <span className="font-normal text-xs text-blue-300 block">
                  Mirpur-2 Dhaka,Bangladesh
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Phone Number
                <span className="font-normal text-xs text-blue-300 block">
                  +880179244541
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Email Address
                <span className="font-normal text-xs text-blue-300 block">
                  ssjoy43@gmail.com
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Web Address
                <span className="font-normal text-lg text-blue-300 block">
                  <a href=" https://portfollio-react.vercel.app/">
                    Visited Now
                  </a>
                </span>
              </p>
            </div>
            <div className="bg-blue-50 p-14 col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Entrer en contact
              </h2>
              {/* ----------------from data */}
              <div className="grid gap-6 mb-6 grid-cols-2">
                {/* first name */}
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white text-black rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                {/* -------phone---------- */}
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white text-black rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    placeholder="Phone number"
                    name="phone"
                    value={FormData.phone}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>
              </div>
              <form>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  {/* --------email address-------- */}
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white text-black rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Votre nom"
                      placeholder="Email Adresse"
                      value={FormData.email}
                      onChange={handleInputChange}
                      type="text"
                      name="email"
                    />
                  </div>
                  {/* -------subject--------- */}
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white text-black rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Votre nom"
                      placeholder="Suject"
                      value={FormData.subject}
                      onChange={handleInputChange}
                      type="text"
                      name="subject"
                    />
                  </div>
                </div>
                {/* ---------text area----------- */}
                <div className="mb-6">
                  <textarea
                    className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                    placeholder="please message here"
                    id
                    rows={8}
                    defaultValue={""}
                    value={FormData.message}
                    onChange={handleInputChange}
                    type="text"
                    name="message"
                  />
                </div>
                {/* ----------submit button------- */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
