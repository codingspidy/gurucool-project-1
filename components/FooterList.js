import footerList from "../data/footerList";
import FooterLink from "./FooterLink";

const FooterList = () => {
    return (
        <ul>
           {footerList.map(list => {
            list.map(item => <FooterLink key={item.id} linkName={item.linkName} />)
           })}
        </ul>
    )
}

export default FooterList;