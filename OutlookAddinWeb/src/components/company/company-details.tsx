import * as React from "react";
import Company from "./company-model";

interface Props {
    company: Company
}

export default class CompanyDetails extends React.Component<Props, {}> {
    render() {
        const { company } = this.props;

        return (
            <div className="details-sheet">
                <h4>Company details</h4>
                <div>
                    <span>Name</span>
                    {company.name}
                </div>
                <div>
                    <span>Address</span>
                    {company.address}
                </div>
                <div>
                    <span>Phone</span>
                    {company.phone}
                </div>
                <div>
                    <span>CVR</span>
                    {company.vatNumber}
                </div>
            </div>
        )
    }
}