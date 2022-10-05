const FooterLink = ({ href, linkName }) => {
  return (
    <li className="first:font-medium">
      <a className="cursor-pointer" href={href}>{linkName}</a>
    </li>
  );
};

export default FooterLink;
