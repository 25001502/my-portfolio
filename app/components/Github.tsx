import Image from "next/image";

const Github = () => {
  return (
    <Image
      alt="GitHub Contribution Graph"
      width={720}
      height={100}
      className="w-full rounded-lg w-xs"
      src="https://ghchart.rshah.org/7c3aed/ThandululoNengovhela"
      unoptimized
    />
  );
};

export default Github;
