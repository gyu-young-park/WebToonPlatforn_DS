import {RouteComponentProps} from 'react-router'

interface MatchParams {
    id: string;
    name: string;
}

export interface IWebtoonSpecificProps extends RouteComponentProps<MatchParams>{}