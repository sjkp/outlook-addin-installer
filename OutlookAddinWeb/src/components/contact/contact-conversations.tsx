import * as React from "react";
import ContactModel from "./contact-model";
import ContactListItem from "./contacts-list-item";

interface Props {
    contact: ContactModel
}

export default class ContactConversations extends React.Component<Props, {}> {
    render() {
        const { contact } = this.props;
        const items = contact.items.slice(0, 3).map((c, i) => {
            return (
                <div key={i}>
                    <span>E-mail</span>{c.title}
                </div>
            )
        });

        return (
            <div className="details-sheet">
                <h4>Conversations</h4>
                {items}
            </div>
        )
    }
}