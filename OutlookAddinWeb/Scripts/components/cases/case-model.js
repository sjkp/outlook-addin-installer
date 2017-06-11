"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CaseModel = (function () {
    function CaseModel(title, caseNumber, date, description, items) {
        this.title = title;
        this.caseNumber = caseNumber;
        this.date = date;
        this.description = description;
        this.items = items;
    }
    return CaseModel;
}());
exports.default = CaseModel;
