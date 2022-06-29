export type SerializedMdxPost = {
  frontmatter: PostFrontmatter;
  content: string;
};
export interface PostFrontmatter {
  id?: number;
  slug?: string;
  author?: string;  
  title?: string;
  createdAt?: string;
}
