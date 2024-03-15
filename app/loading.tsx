import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Image src="spiner.svg" alt="loading" width={50} height={50} />
    </div>
  );
};

export default Loader;
