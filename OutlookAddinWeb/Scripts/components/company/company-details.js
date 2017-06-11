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
var CompanyDetails = (function (_super) {
    __extends(CompanyDetails, _super);
    function CompanyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanyDetails.prototype.render = function () {
        var company = this.props.company;
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Company details"),
            React.createElement("div", null,
                React.createElement("span", null, "Name"),
                company.name),
            React.createElement("div", null,
                React.createElement("span", null, "Address"),
                company.address),
            React.createElement("div", null,
                React.createElement("span", null, "Phone"),
                company.phone),
            React.createElement("div", null,
                React.createElement("span", null, "CVR"),
                company.vatNumber)));
    };
    return CompanyDetails;
}(React.Component));
exports.default = CompanyDetails;
