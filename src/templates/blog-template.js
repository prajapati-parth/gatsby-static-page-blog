import React from "react";
import {graphql} from 'gatsby';

const BlogTemplate = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter: { title, date } , html } = markdownRemark;

    return (
      <div>
        Title: {title}<br/>
        Date: {date}<br/>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    ); 
}

export default BlogTemplate;

export const pageQuery = graphql`
  query StaticPage($url: String!) {
    markdownRemark(frontmatter: { path: { eq: $url } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;