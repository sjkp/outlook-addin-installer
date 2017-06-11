import * as React from "react";
import ContactModel from "./contact-model";

interface Props {
    contact: ContactModel
}

export default class ContactDetails extends React.Component<Props, {}> {
    render() {
        const { contact } = this.props;

        return (
            <div className="details-sheet">
                <h4>Contact details</h4>
                <div>
                    <span>Name</span>
                    {contact.firstName} {contact.lastName}
                </div>
                <div>
                    <span>Title</span>
                    {contact.jobTitle}
                </div>
                <div>
                    <span>Phone</span>
                    {contact.phone}
                </div>
                <div>
                    <span>E-mail</span>
                    {contact.email}
                </div>
            </div>
        )
    }
}