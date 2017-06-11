import * as React from "react";
import ContactModel from "./contact-model";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
// import {
//     Persona,
//     PersonaInitialsColor,
// } from 'office-ui-fabric-react/lib/Persona';

import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';

interface Props {
    contact: ContactModel
}

const personaStyle: React.CSSProperties = {
    marginBottom: "5px"
}

export default class ContactsList extends React.Component<Props, {}> {
    render() {
        const { contact } = this.props;
        let fullName = `${contact.firstName} ${contact.lastName}`;

        let previewProps: IDocumentCardPreviewProps = {
            getOverflowDocumentCountText: (overflowCount: number) => overflowCount > 0 ? `+${overflowCount} more` : "",
            previewImages: contact.items.map(i => {
                return {
                    name: i.title,
                    url: i.link,
                    width: 144,
                    iconSrc: "./images/email.png"
                }
            })
        };

        //   [
        //     {
        //       name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        //       url: 'http://bing.com',
        //       previewImageSrc: 'dist/document-preview.png',
        //       iconSrc: 'dist/icon-ppt.png',
        //       width: 144
        //     }
        //   ],

        let cardTitle = contact.items.length > 0 ? contact.items[0].title : "Click to see more details";
        const documentStyle: React.CSSProperties = {
            marginBottom: "15px"
        }

        return (
            <div style={documentStyle}>
                <DocumentCard type={DocumentCardType.compact} onClickHref={'/?single=1'} accentColor='#ce4b1f'>
                    <DocumentCardPreview { ...previewProps } />
                    <div className='ms-DocumentCard-details'>
                        <DocumentCardTitle
                            title={cardTitle}
                            shouldTruncate={true} />
                        <DocumentCardActivity
                            activity={contact.jobTitle}
                            people={
                                [
                                    { name: fullName, profileImageSrc: 'images/person.png' }
                                ]
                            }
                            />
                    </div>
                </DocumentCard>
            </div>
        )
    }
}

/*<Persona
                    secondaryText={contact.jobTitle}
                    primaryText={fullName}
                    style={personaStyle}
                />*/