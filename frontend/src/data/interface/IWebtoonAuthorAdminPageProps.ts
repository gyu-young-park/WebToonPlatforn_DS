import {RouteComponentProps} from 'react-router'

interface MatchParams {
    email: string;
    name: string;
}

export interface IWebtoonAuthorAdminPageProps extends RouteComponentProps<MatchParams>{}