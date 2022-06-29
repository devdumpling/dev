import { Layout } from '../../components';
import { SerializedMdxPost } from '../../types';
import { getMdxPosts } from '../../utils';

interface PostPageProps {
  posts: SerializedMdxPost[];
}

const PostsPage = (props: PostPageProps) => {
  const { posts } = props;
  console.log(posts);

  return (
    <Layout>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.id}>
            <a href={`/posts/${post?.frontmatter?.slug}`}>
              {post?.frontmatter?.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getMdxPosts('src/posts');

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
