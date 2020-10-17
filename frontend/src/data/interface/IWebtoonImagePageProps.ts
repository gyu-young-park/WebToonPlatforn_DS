import {RouteComponentProps} from 'react-router'

interface MatchParams {
    index: string;
    title: string;
}

export interface IWebtoonImagePageProps extends RouteComponentProps<MatchParams>{}