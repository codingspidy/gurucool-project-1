import footerList from "../data/footerList";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F8]">
      <ul className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-wrap gap-8 text-sm">
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
    </footer>
  );
};

export default Footer;
