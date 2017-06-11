import * as React from "react";
import CaseModel from "./case-model";
import CaseItem from "./case-item";

interface Props {
    cases: CaseModel[]
}

export default class CasesList extends React.Component<Props, {}> {
    render() {
        const { cases } = this.props;

        let caseItems = cases.map(c => <CaseItem key={c.caseNumber} case={c} />);

        return (
            <div className="cases">
                <h4>Cases</h4>
                {caseItems}
            </div>
        )
    }
}