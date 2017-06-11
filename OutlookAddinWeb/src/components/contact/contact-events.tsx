import * as React from "react";
import ContactModel from "./contact-model";
import ContactListItem from "./contacts-list-item";

interface Props {
    contact: ContactModel
}

export default class ContactEvents extends React.Component<Props, {}> {
    render() {

        const items = [
            { title: "Seminar om overimplementering af EU-ret" }, 
            { title: "\"Godmorgen, SKAT\": Præjudicielle forelæggelser i skattesager"}, 
            { title: "Roger L. Martin - Understanding Big Data"}, 
            { title: "Peter Fisk - The 10X leader"}
            ].map((c, i) => {
            return (
                <div key={i}>
                    {c.title}
                </div>
            )
        });

        return (
            <div className="details-sheet">
                <h4>Events</h4>
                {items}
            </div>
        )
    }
}