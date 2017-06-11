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
var ContactConversations = (function (_super) {
    __extends(ContactConversations, _super);
    function ContactConversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactConversations.prototype.render = function () {
        var contact = this.props.contact;
        var items = contact.items.slice(0, 3).map(function (c, i) {
            return (React.createElement("div", { key: i },
                React.createElement("span", null, "E-mail"),
                c.title));
        });
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Conversations"),
            items));
    };
    return ContactConversations;
}(React.Component));
exports["default"] = ContactConversations;
