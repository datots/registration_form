import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols=4 gap-4 mt-14">
        {posts.map(
          (post: {
            id: Key | null | undefined;
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
            body:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined;
          }) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-400 hover:scale-110"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Posts;
