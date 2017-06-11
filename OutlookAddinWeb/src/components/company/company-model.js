"use strict";
exports.__esModule = true;
var CompanyModel = (function () {
    function CompanyModel(name, address, phone, vatNumber, contacts, cases) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.vatNumber = vatNumber;
        this.contacts = contacts;
        this.cases = cases;
    }
    return CompanyModel;
}());
exports["default"] = CompanyModel;
