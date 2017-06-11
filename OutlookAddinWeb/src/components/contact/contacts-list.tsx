import * as React from "react";
import ContactModel from "./contact-model";
import ContactListItem from "./contacts-list-item";

interface Props {
    contacts: ContactModel[]
}

export default class ContactsList extends React.Component<Props, {}> {
    render() {
        const { contacts } = this.props;
        const items = contacts ?
            contacts.map((c, i) => <ContactListItem contact={c} key={i} />) :
            null;

        return (
            <div>
                <h4>Contacts</h4>
                {items}
            </div>
        )
    }
}