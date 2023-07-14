import Logo from "../ui/logo";

const Footer = () => {
  
  return (
    <>
      <div className="grid grid-cols-1 border-t-2 border-black mt-4 mx-4 md:grid-cols-5">
        <div className="w-[300px] mt-10  md:col-span-2">
          <Logo/>
          <p className="mt-5 text-gray-500">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          {/* icons twitter fb linked in */}
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-lg">Company</h1>
          <ul className="mt-5">
            <li className="mt-5">About</li>
            <li className="mt-5">Terms of Use</li>
            <li className="mt-5">Privacy Policy</li>
            <li className="mt-5">How it works</li>
            <li className="mt-5">Contact Us</li>
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-lg">Support</h1>
          <ul>
            <li className="mt-5">Support Center</li>
            <li className="mt-5">24h Service</li>
            <li className="mt-5">Quick Chat</li>
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-lg">Contact</h1>
          <ul>
            <li className="mt-5">Whatsapp</li>
            <li className="mt-5">Support 24h</li>
          </ul>
        </div>
      </div>
      <div className=" mx-6 grid grid-cols-1 md:grid-cols-3 mb-4 mt-6 border-t-2 border-black/70">
        <div className="mt-5">
          <p className="text-gray-500 font-semibold">
            Copyright 2023 Dine Market
          </p>
        </div>
        <div className="mt-5">
          <p className="font-bold">
            <span className="text-gray-500 font-semibold">Design By:</span>{" "}
            Weird Design Studio
          </p>
        </div>
        <div className="mt-5">
          <p className="font-bold">
            <span className="text-gray-500 font-semibold">Code by:</span>{" "}
            RiazMehmood on Github
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
