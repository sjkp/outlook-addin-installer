"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Fabric_1 = require("office-ui-fabric-react/lib/Fabric");
var components_1 = require("../components");
var contacts = [
    {
        firstName: "Morten",
        lastName: "Pedersen",
        jobTitle: "CEO",
        phone: "12 78 65 65",
        email: "mtp@delegate.dk",
        items: [
            new components_1.ContactEvent("FW: RE: Need documents for signing", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Legal advice", "https://www.delegate.dk/"),
            new components_1.ContactEvent("RE: Legal advice", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/")
        ]
    },
    {
        firstName: "Jannik",
        lastName: "Rasmussen",
        jobTitle: "Managing Specialist",
        phone: "41 72 32 06",
        email: "jra@delegate.dk",
        items: [
            new components_1.ContactEvent("RE: Upcoming event", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Access to systems", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Need legal advice on blue print", "https://www.delegate.dk/"),
            new components_1.ContactEvent("FW: Legal advice regarding #11030", "https://www.delegate.dk/")
        ]
    },
];
var company = {
    name: "Delegate A/S",
    address: "Hummeltoftevej 49, 2830 Virum",
    phone: "45 82 82 82",
    vatNumber: "29772843",
    contacts: contacts,
    cases: [
        new components_1.CaseModel("Persondata: CPR oplysninger i CV'er", "214409", new Date(), "Undersøg om CPR oplysninger er opbevaret korrekt, og inden for lovens rammer.", [
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
        new components_1.CaseModel("Opening New Zealand office", "213346", new Date(new Date().setMonth(1)), "Delegate is opening new office in New Zealand.", [
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
var singleContact = [
    contacts[0]
];
if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
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
var theCompany = getParameterByName('single') ? Object.assign({}, company, { contacts: singleContact }) : company;
var AddinPage = (function (_super) {
    __extends(AddinPage, _super);
    function AddinPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddinPage.prototype.render = function () {
        var childrenStyle = {
            padding: "15px 15px 75px 15px"
        };
        return (React.createElement(Fabric_1.Fabric, null,
            React.createElement(components_1.CommandBar, null),
            React.createElement("div", { style: childrenStyle },
                React.createElement("h1", null, company.name),
                theCompany.contacts.length == 1 ?
                    React.createElement("div", null,
                        React.createElement(components_1.ContactConversations, { contact: theCompany.contacts[0] }),
                        React.createElement(components_1.ContactEvents, { contact: theCompany.contacts[0] }),
                        React.createElement(components_1.ContactDetails, { contact: theCompany.contacts[0] }))
                    :
                        React.createElement(components_1.ContactsList, { contacts: theCompany.contacts }),
                React.createElement(components_1.CasesList, { cases: theCompany.cases }),
                React.createElement(components_1.CompanyDetails, { company: theCompany })),
            React.createElement(components_1.BrandBar, null)));
    };
    return AddinPage;
}(React.Component));
exports.default = AddinPage;
