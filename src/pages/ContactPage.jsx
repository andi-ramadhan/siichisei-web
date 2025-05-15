import { useEffect, useState } from "react";

const ContactPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      time: new Date(),
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(true);

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      alert('Message sent!')
    } else {
      alert('Error sending message.');
    }
  };

  useEffect(() => {
    if (status) {
      window.alert(status);
    }
  }, [status]);

  return(
    <main className="w-full h-full font-inter">
      <div className="flex justify-center items-center px-20 pb-20 gap-2 fixed h-full w-full">
        <div className="container h-[80dvh] gap-2 rounded-xl bg-linear-to-br from-brick-200 via-pink-200 to-sky-200 flex justify-between items-center px-40">

          <div className="flex flex-col gap-6">
            <h2 className="text-6xl text-word-blue font-playwrite">Contact Us</h2>
            <p className="text-gray-blue w-[50dvh] leading-relaxed text-md">We accept any question or feedback from you! You also can directly message us on our social media.</p>
          </div>
          
          <div className="flex flex-col gap-2 w-1/2">
            <form className="space-y-6 py-4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-3 rounded-md bg-gray-100/50 border-2 border-gray-blue/20 text-[#2a3e47] focus:outline-none focus:ring-2 focus:ring-word-orange"
                required
              />
              <input 
                type="email" 
                id="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-3 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/20 focus:outline-none focus:ring-2 focus:ring-word-orange"
                required
              />
              <textarea 
                id="message"
                placeholder="Your messages"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-2 py-1 rounded-md text-[#2a3e47] bg-gray-100/50 border-2 border-gray-blue/20 focus:outline-none focus:ring-2 focus:ring-word-orange"
                required
              />
              <button
                type="submit"
                className={`submit-btn cursor-pointer bg-word-blue/70 text-white rounded-2xl shadow-xl px-6 py-2
                  hover:bg-word-blue transition-all duration-200 ease-in-out
                  ${isClicked ? 'scale-95' : ''}`}
                disabled={isClicked}
              >
                {isClicked ? "Sending...": "Send Message"}
              </button>
            </form>
          </div>
          
        </div>

      </div>
    </main>
  )
}

export default ContactPage;