import Image from "next/image";
import avatar from "../public/avatar.png";
import about from "../public/about.png";

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">About</h1>
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
      <div className="grid gap-10 lg:grid-cols-2 mt-12">
        <div>
          <h2 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
          <p className="mb-4 last:mb-0">
            consectetur adipiscing elit. Nulla vel turpis turpis. Sed mauris
            mauris, aliquam sed ante ut, ullamcorper laoreet erat. Duis eu
            rutrum purus. Ut luctus bibendum tellus ut congue. Ut dolor nisi,
            maximus aliquam nulla sed, venenatis consequat arcu. Nulla hendrerit
            vehicula arcu. In consectetur, purus sed consequat posuere, orci
            nunc consequat ipsum, ut sodales urna massa at neque.
          </p>
          <p className="mb-4 last:mb-0">
            Nulla eget tellus sodales, venenatis lacus eget, lobortis libero.
            Cras scelerisque metus non mi condimentum, ac lacinia enim
            fermentum. Sed arcu tortor, hendrerit a eros ac, eleifend porta
            enim. Suspendisse molestie enim quam, a maximus massa faucibus nec.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Integer tortor odio, iaculis eget lobortis
            iaculis, tempor nec ante. Aliquam venenatis nisl at ipsum commod.
          </p>
        </div>
        <div>
          <Image src={about} alt="About" className="w-full" />
        </div>
      </div>
    </div>
  );
}
