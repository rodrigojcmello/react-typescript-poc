import { Post, PostsAction } from './postsTypes';

export const posts = (state: Post[] = [], action: PostsAction): Post[] => {
  switch (action.type) {
    case 'DEFINIR_POSTS':
      return action.posts;

    default:
      return state;
  }
};
