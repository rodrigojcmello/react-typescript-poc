export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface DefinirPostsAction {
    type: 'DEFINIR_POSTS';
    posts: Post[];
}

export type DefinirPosts = (posts: Post[]) => DefinirPostsAction;

export type PostsAction = DefinirPostsAction;
