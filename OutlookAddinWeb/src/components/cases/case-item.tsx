import * as React from "react";
import CaseModel from "./case-model";
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

interface Props {
    case: CaseModel
}

export default class CasesItem extends React.Component<Props, {}> {
    render() {
        const item = this.props.case;

        let previewProps: IDocumentCardPreviewProps = {
            getOverflowDocumentCountText: (overflowCount: number) => overflowCount > 0 ? `+${overflowCount} more` : "",
            previewImages: item.items.map(i => {
                return {
                    name: i.title,
                    url: i.link,
                    imageFit: ImageFit.cover,
                    width: 400,
                    height: 196,
                    previewImageSrc: 'dist/document-preview.png',
                    iconSrc: "./images/email.png"
                }
            })
        };

        let cardTitle = item.items.length > 0 ? item.items[0].title : "Click to see more details";
        const documentStyle: React.CSSProperties = {
            marginBottom: "15px"
        }

        let getDate = (date: Date): string => {
            return `${date.getDate()}/${date.getMonth()} - ${date.getFullYear()}`;
        }

        const pStyle = {
            margin: "0 20px"
        }

        return (
            <div style={documentStyle}>
                <DocumentCard onClickHref={'https://www.delegate.dk'} accentColor='#ce4b1f'>
                    <DocumentCardPreview { ...previewProps } />
                    <DocumentCardLocation location={item.caseNumber} locationHref='http://www.delegate.com' ariaLabel='Casenumber' />
                    <DocumentCardTitle title={item.title} />
                    <p style={pStyle}>{item.description}</p>
                    <DocumentCardActivity
                        activity={getDate(item.date)}
                        people={
                            [
                                { name: 'Anders Andersen', profileImageSrc: 'images/anders.jpg' },
                                { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
                                { name: 'Greta Lundberg', profileImageSrc: 'images/persona-female.png' }
                            ]
                        }
                        />
                    <DocumentCardActions
                        actions={
                            [
                                {
                                    icon: 'Share',
                                    onClick: (ev: any) => {
                                        console.log('You clicked the share action.');
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                    },
                                    ariaLabel: 'share action'
                                },
                                {
                                    icon: 'EditMirrored',
                                    onClick: (ev: any) => {
                                        console.log('You clicked the pin action.');
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                    },
                                    ariaLabel: 'pin action'
                                },
                                {
                                    icon: 'TemporaryUser',
                                    onClick: (ev: any) => {
                                        console.log('You clicked the ringer action.');
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                    },
                                    ariaLabel: 'ringer action'
                                },
                            ]
                        }
                        views={432}
                        />
                </DocumentCard>
            </div>
        )
    }
}