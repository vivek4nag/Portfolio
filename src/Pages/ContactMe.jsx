import { Input } from "../components/ui/input";
import Header from "../components/Header";
import { Label } from "@radix-ui/react-label";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [errorMsg, setErrorMsg] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current?.elements["user_name"].value.trim();
    const email = form.current?.elements["user_email"].value.trim();
    const msg = form.current?.elements["message"].value.trim();

    if (!firstName || !email || !msg) {
      // alert("please Enter valid Name & Email ID")
      setErrorMsg(true)
      return;
    }
    else {
      setErrorMsg(false)
      emailjs
        .sendForm("service_vkb8wb8", "template_48shtut", form.current, {
          publicKey: "yPrzmbUUD5qd8_c8D",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            console.log("bhej diya");
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };


  return (
    <section
      id="contact"
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <Header title="LET'S CONNECT!" />
        <div className="flex px-10 py-2 max-w-[850px]">
          <p className=" text-gray-400 text-sm md:text-lg">
            I’d love to hear from you! Whether it’s just a quick hello or
            something more, don’t hesitate to drop me a message. I’ll get back
            to you as soon as I can!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-4">
        <form ref={form} onSubmit={sendEmail}>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Label className="text-gray-400 ml-1 text-lg">First Name</Label>
              <Input type="text" className="h-12 w-72" name="user_name" />
              {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">Name must be aleast 4 characters</p>}
            </div>
            <div>
              <Label className="text-gray-400 ml-1 text-lg">Last Name</Label>
              <Input className="h-12 w-72" />
              {errorMsg && <p className="text-yellow-500 ml-1 text-xs md:text-sm">Optional, can be left blank</p>}

            </div>
          </div>
          <div className="py-6">
            <Label className="text-gray-400 ml-1 text-lg">Email</Label>
            <Input type="email" className="h-12 w-full" name="user_email" />
            {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">enter a valid email ID</p>}

          </div>
          <div>
            <Label className="text-gray-400 ml-1 text-xl">
              Your Valuable Message 😊
            </Label>
            <Input type="textarea" className="h-40" name="message" />
            {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">please enter a message</p>}

          </div>

          <div className=" py-6">
            <button
              className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              type="submit"
              value="Send"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Send Message &rarr;
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;