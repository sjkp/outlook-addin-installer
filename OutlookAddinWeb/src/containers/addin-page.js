import * as React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { BrandBar, CommandBar, ContactDetails, ContactsList, CompanyDetails, ContactEvent, CaseModel, CasesList, ContactConversations, ContactEvents } from "../components";
const contacts = [
    {
        firstName: "Morten",
        lastName: "Pedersen",
        jobTitle: "CEO",
        phone: "12 78 65 65",
        email: "mtp@delegate.dk",
        items: [
            new ContactEvent("FW: RE: Need documents for signing", "https://www.delegate.dk/"),
            new ContactEvent("Legal advice", "https://www.delegate.dk/"),
            new ContactEvent("RE: Legal advice", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/"),
            new ContactEvent("Something more", "https://www.delegate.dk/")
        ]
    },
    {
        firstName: "Jannik",
        lastName: "Rasmussen",
        jobTitle: "Managing Specialist",
        phone: "41 72 32 06",
        email: "jra@delegate.dk",
        items: [
            new ContactEvent("RE: Upcoming event", "https://www.delegate.dk/"),
            new ContactEvent("Access to systems", "https://www.delegate.dk/"),
            new ContactEvent("Need legal advice on blue print", "https://www.delegate.dk/"),
            new ContactEvent("FW: Legal advice regarding #11030", "https://www.delegate.dk/")
        ]
    },
];
const company = {
    name: "Delegate A/S",
    address: "Hummeltoftevej 49, 2830 Virum",
    phone: "45 82 82 82",
    vatNumber: "29772843",
    contacts: contacts,
    cases: [
        new CaseModel("Persondata: CPR oplysninger i CV'er", "214409", new Date(), "Undersøg om CPR oplysninger er opbevaret korrekt, og inden for lovens rammer.", [
            {
                title: "Rapport vedr. CPR numre",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            }
        ]),
        new CaseModel("Opening New Zealand office", "213346", new Date(new Date().setMonth(1)), "Delegate is opening new office in New Zealand.", [
            {
                title: "RE: New Zealand office",
                link: ""
            },
            {
                title: "RE: New Zealand office",
                link: ""
            },
            {
                title: "New Zealand office",
                link: ""
            }
        ])
    ]
};
const singleContact = [
    contacts[0]
];
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/// cases
let theCompany = getParameterByName('single') ? Object.assign({}, company, { contacts: singleContact }) : company;
export default class AddinPage extends React.Component {
    render() {
        const childrenStyle = {
            padding: "15px 15px 75px 15px"
        };
        return (React.createElement(Fabric, null,
            React.createElement(CommandBar, null),
            React.createElement("div", { style: childrenStyle },
                React.createElement("h1", null, company.name),
                theCompany.contacts.length == 1 ?
                    React.createElement("div", null,
                        React.createElement(ContactConversations, { contact: theCompany.contacts[0] }),
                        React.createElement(ContactEvents, { contact: theCompany.contacts[0] }),
                        React.createElement(ContactDetails, { contact: theCompany.contacts[0] }))
                    :
                        React.createElement(ContactsList, { contacts: theCompany.contacts }),
                React.createElement(CasesList, { cases: theCompany.cases }),
                React.createElement(CompanyDetails, { company: theCompany })),
            React.createElement(BrandBar, null)));
    }
}
