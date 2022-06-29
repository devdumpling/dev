export type SerializedMdxPost = {
  frontmatter: PostFrontmatter;
  content: string;
};
export interface PostFrontmatter {
  id?: number;
  slug?: string;  
  title?: string;
  subtitle?: string;
  description?: string;
  categories?: string[];
  keywords?: string[];
  date?: string;
}
