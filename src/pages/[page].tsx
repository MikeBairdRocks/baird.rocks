/*
import {getAllPages, getPageBySlug} from "../common/page/PageRepository";
import {IPage} from "../common/page/IPage";
import React from "react";
import Container from "../components/containers/Container";
import ReactMarkdown from "react-markdown";
import {Page} from "../components/containers";
import {NextPage} from "next";

type PageProps = {
  page: IPage
};

const DynamicPage: NextPage<PageProps> = ({ page }) => {
  return (
    <Page title={page.title} splashSecondary={page.subtitle} splash={{label: page.title, image: page.image, minHeight: "40vh", opacity: "opacity-50"}}>
      <article className="pb-20 bg-gray-300 dark:bg-gray-900">
        <Container>
          <ReactMarkdown skipHtml={false} children={page.content} />
        </Container>
      </article>
    </Page>
  );
};

type Params = {
  params: {
    page: string
  }
};

export const getStaticProps = async ({params}: Params) => {
  const page = getPageBySlug(params.page);
  return {
    props: {
      page
    }
  };
};

export const getStaticPaths = async () => {
  const pages = getAllPages();
  return {
    paths: pages?.map((p) => {
      return {
        params: {
          page: `${p.slug}`
        },
      };
    }),
    fallback: false
  };
};

export default DynamicPage;*/
