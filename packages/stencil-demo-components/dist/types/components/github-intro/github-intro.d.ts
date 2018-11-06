export interface GithubData {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    html_url: string;
    bio: string;
}
/**
 * This component accepts a github userid and then displays a brief summary of their details
 * including their avatar img.
 */
export declare class GithubIntro {
    /**
     * The github userid for the user that you would like to display
     */
    userid: string;
    userData: GithubData;
    fetchGithubData(userid: any): void;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
