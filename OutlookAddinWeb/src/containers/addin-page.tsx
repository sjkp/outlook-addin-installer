import * as React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { 
    BrandBar, 
    CommandBar, 
    ContactDetails, 
    ContactsList, 
    ContactModel, 
    Company as CompanyModel, 
    CompanyDetails, 
    ContactEvent, 
    CaseModel, 
    CasesList,
    ContactConversations,
    ContactEvents
} from "../components";

const contacts: ContactModel[] = [
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
    // {
    //     firstName: "Signe",
    //     lastName: "Vitt",
    //     jobTitle: "Key Account Manager",
    //     phone: "75 95 88 74",
    //     email: "svi@delegate.dk",
    //     items: [
    //         new ContactEvent("Will you join our next event?", "https://www.delegate.dk/"),
    //         new ContactEvent("RE: Will you join our next event?", "https://www.delegate.dk/")
    //     ]
    // }
]

const company: CompanyModel = {
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
}

const singleContact = [
    contacts[0]
]

if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

function getParameterByName(name): string {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/// cases
let theCompany = getParameterByName('single') ? Object.assign({}, company, { contacts: singleContact }) : company;

export default class AddinPage extends React.Component<{}, {}> {
    render() {
        const childrenStyle: React.CSSProperties = {
            padding: "15px 15px 75px 15px"
        }

        return (
            <Fabric>
                <CommandBar />
                <div style={childrenStyle}>
                    <h1>{company.name}</h1>
                    {
                        theCompany.contacts.length == 1 ?
                            <div>
                                <ContactConversations contact={theCompany.contacts[0]} />
                                <ContactEvents contact={theCompany.contacts[0]} />
                                <ContactDetails contact={theCompany.contacts[0]} />
                            </div>
                            :
                            <ContactsList contacts={theCompany.contacts} />
                    }
                    <CasesList cases={theCompany.cases} />
                    <CompanyDetails company={theCompany} />
                </div>
                <BrandBar />
            </Fabric>
        )
    }
}