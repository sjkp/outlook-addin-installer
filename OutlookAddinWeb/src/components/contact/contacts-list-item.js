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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
// import {
//     Persona,
//     PersonaInitialsColor,
// } from 'office-ui-fabric-react/lib/Persona';
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var personaStyle = {
    marginBottom: "5px"
};
var ContactsList = (function (_super) {
    __extends(ContactsList, _super);
    function ContactsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactsList.prototype.render = function () {
        var contact = this.props.contact;
        var fullName = contact.firstName + " " + contact.lastName;
        var previewProps = {
            getOverflowDocumentCountText: function (overflowCount) { return overflowCount > 0 ? "+" + overflowCount + " more" : ""; },
            previewImages: contact.items.map(function (i) {
                return {
                    name: i.title,
                    url: i.link,
                    width: 144,
                    iconSrc: "./images/email.png"
                };
            })
        };
        //   [
        //     {
        //       name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        //       url: 'http://bing.com',
        //       previewImageSrc: 'dist/document-preview.png',
        //       iconSrc: 'dist/icon-ppt.png',
        //       width: 144
        //     }
        //   ],
        var cardTitle = contact.items.length > 0 ? contact.items[0].title : "Click to see more details";
        var documentStyle = {
            marginBottom: "15px"
        };
        return (React.createElement("div", { style: documentStyle },
            React.createElement(DocumentCard_1.DocumentCard, { type: DocumentCard_1.DocumentCardType.compact, onClickHref: '/?single=1', accentColor: '#ce4b1f' },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                React.createElement("div", { className: 'ms-DocumentCard-details' },
                    React.createElement(DocumentCard_1.DocumentCardTitle, { title: cardTitle, shouldTruncate: true }),
                    React.createElement(DocumentCard_1.DocumentCardActivity, { activity: contact.jobTitle, people: [
                            { name: fullName, profileImageSrc: 'images/person.png' }
                        ] })))));
    };
    return ContactsList;
}(React.Component));
exports["default"] = ContactsList;
/*<Persona
                    secondaryText={contact.jobTitle}
                    primaryText={fullName}
                    style={personaStyle}
                />*/ 
