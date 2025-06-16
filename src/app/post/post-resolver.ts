import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Post, PostData } from './services/post';

export const postResolver: ResolveFn<PostData> = (route, state) => inject(Post).getPostById(route.params['id'])