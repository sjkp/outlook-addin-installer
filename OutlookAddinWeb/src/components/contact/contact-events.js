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
var ContactEvents = (function (_super) {
    __extends(ContactEvents, _super);
    function ContactEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactEvents.prototype.render = function () {
        var items = [
            { title: "Seminar om overimplementering af EU-ret" },
            { title: "\"Godmorgen, SKAT\": Præjudicielle forelæggelser i skattesager" },
            { title: "Roger L. Martin - Understanding Big Data" },
            { title: "Peter Fisk - The 10X leader" }
        ].map(function (c, i) {
            return (React.createElement("div", { key: i }, c.title));
        });
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Events"),
            items));
    };
    return ContactEvents;
}(React.Component));
exports["default"] = ContactEvents;
