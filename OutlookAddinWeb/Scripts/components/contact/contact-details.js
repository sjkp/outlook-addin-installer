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
var ContactDetails = (function (_super) {
    __extends(ContactDetails, _super);
    function ContactDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactDetails.prototype.render = function () {
        var contact = this.props.contact;
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Contact details"),
            React.createElement("div", null,
                React.createElement("span", null, "Name"),
                contact.firstName,
                " ",
                contact.lastName),
            React.createElement("div", null,
                React.createElement("span", null, "Title"),
                contact.jobTitle),
            React.createElement("div", null,
                React.createElement("span", null, "Phone"),
                contact.phone),
            React.createElement("div", null,
                React.createElement("span", null, "E-mail"),
                contact.email)));
    };
    return ContactDetails;
}(React.Component));
exports.default = ContactDetails;
