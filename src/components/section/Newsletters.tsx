import { PrimaryButton } from "../ui/PrimaryButton";

const Newsletters = () => {
  return (
    <div className="m-10 p-2 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Subscribe Our Newsletter</h1>
      <h2 className="text-center mt-4">
        Get the latest information and promo offers directly
      </h2>
      <div className="sm:flex flex-row place-items-center ">
        <div>
          <input
            type="text"
            className="mt-4 w-[300px] sm:w-[370px] md:mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3"
            placeholder="Input email address"
          />
        </div>
        <div>
          <PrimaryButton
            classNames="mt-4 "
            title={"Get Started"}
            onClick={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
