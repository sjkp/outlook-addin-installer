import { ContactModel, CaseModel } from "../"

export default class CompanyModel {
    constructor(
        public name: string,
        public address: string,
        public phone: string,
        public vatNumber: string,
        public contacts: ContactModel[],
        public cases: CaseModel[]
    ){}
}