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
exports.__esModule = true;
var React = require("react");
var contacts_list_item_1 = require("./contacts-list-item");
var ContactsList = (function (_super) {
    __extends(ContactsList, _super);
    function ContactsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactsList.prototype.render = function () {
        var contacts = this.props.contacts;
        var items = contacts ?
            contacts.map(function (c, i) { return React.createElement(contacts_list_item_1["default"], { contact: c, key: i }); }) :
            null;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Contacts"),
            items));
    };
    return ContactsList;
}(React.Component));
exports["default"] = ContactsList;
