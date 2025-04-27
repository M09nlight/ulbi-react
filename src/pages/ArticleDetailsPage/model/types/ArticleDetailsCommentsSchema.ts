import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  //нормализация - относиться к данным в стекйте как к данным в бд (имеем внешние ключи, которые ссылаются на основные объекты )
  isLoading?: boolean;
  error?: string;
}
