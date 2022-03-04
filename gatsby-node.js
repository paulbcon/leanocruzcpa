// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
    {
      allGraphCmsNewsletter {
        edges {
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
          node {
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    // Create blog posts pages.
    const posts = result.data.allGraphCmsNewsletter.edges;
   
    posts.forEach((post, index) => {
     
      const previous = post.previous;
      const next = post.next;
      createPage({
        path: `/newsletter/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next
        }
      });
    });
  });
};
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};