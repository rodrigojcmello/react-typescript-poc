import { DefinirPosts, DefinirPostsAction, Post } from './postsTypes';

export const definirPosts: DefinirPosts = (posts: Post[]): DefinirPostsAction => ({
  type: 'DEFINIR_POSTS',
  posts
});
