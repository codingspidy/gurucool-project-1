import footerList from "../data/footerList";
import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F8]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 ">
        <ul className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-7 gap-x-8 gap-y-14 text-sm">
          <ul key={0} className="flex flex-col space-y-2">
            {footerList[0].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={1} className="flex flex-col space-y-2">
            {footerList[1].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={2} className="flex flex-col space-y-2">
            {footerList[2].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={3} className="flex flex-col space-y-2">
            {footerList[3].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={4} className="flex flex-col space-y-2">
            {footerList[4].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={5} className="flex flex-col space-y-2">
            {footerList[5].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
          <ul key={6} className="flex flex-col space-y-2">
            {footerList[6].map((link) => (
              <FooterLink key={link.id} linkName={link.linkName} />
            ))}
          </ul>
        </ul>
        <div className="hidden xl:flex items-center justify-between mt-14">
          <div className="-ml-3">
            <Image src="/logo-lg.png" width={116} height={34} />
          </div>
          <p className="text-sm">2022 Gurucool XYZ PVT LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
