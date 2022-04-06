declare module '*.scss' {
    const content: { [key: string]: any }
    export = content
}

declare module '*.gql' {
    import { DocumentNode } from 'graphql';
    
    const value: DocumentNode;
    export = value;
}