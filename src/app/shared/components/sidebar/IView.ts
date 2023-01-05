export interface ViewInterface {
    icon: string;
    name: string;
    views: Array<viewChild>;
}

export interface viewChild {
    icon: string;
    name: string;
    href: string;
    keywords: Array<string>;
}