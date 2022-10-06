const FooterLink = ({ href, linkName }) => {
  return (
    <li className="first:font-semibold">
      <a className="cursor-pointer" href={href}>{linkName}</a>
    </li>
  );
};

export default FooterLink;
