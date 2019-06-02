import { Author } from './author';
import { Category } from './category';

export class Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: Author;
  category: Category;
}
