import Image from "next/image";
import avatar from "../public/avatar.png";

type Props = {
  title: string;
};

export default function Navbar({ title }: Props) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center">
        <p className="font-semibold mr-2 invisible sm:visible">
          Jones Ferdinand
        </p>
        <button type="button">
          <div className="rounded-full overflow-hidden outline outline-2 outline-[#DFE0EB] border-2 border-transparent">
            <Image src={avatar} alt="Jones Ferdinand" />
          </div>
        </button>
      </div>
    </div>
  );
}
