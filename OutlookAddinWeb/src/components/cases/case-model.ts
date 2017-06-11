import { ContactEvent } from "../";

export default class CaseModel {
    constructor(
        public title: string,
        public caseNumber: string,
        public date: Date,
        public description: string,
        public items: ContactEvent[]
    ) {}
}