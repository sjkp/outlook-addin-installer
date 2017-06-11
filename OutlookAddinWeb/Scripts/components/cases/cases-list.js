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
var case_item_1 = require("./case-item");
var CasesList = (function (_super) {
    __extends(CasesList, _super);
    function CasesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CasesList.prototype.render = function () {
        var cases = this.props.cases;
        var caseItems = cases.map(function (c) { return React.createElement(case_item_1.default, { key: c.caseNumber, case: c }); });
        return (React.createElement("div", { className: "cases" },
            React.createElement("h4", null, "Cases"),
            caseItems));
    };
    return CasesList;
}(React.Component));
exports.default = CasesList;
