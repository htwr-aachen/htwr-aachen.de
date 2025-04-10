// MOCKS
import type { GrayMatterFile } from "gray-matter";

import { parseFrontmatter } from "./article-metadata";
import type { ArticleMeta } from "./articles";

jest.mock("fs/promises");

const correctData = {
  title: "test",
  fullTitle: "fullTest",
  date: "01.01.2024",
  tags: ["test1", "test2"],
  order: "2",
  author: "testAuthor",
  description: "testDescription",
};

const correctDataExpected: ArticleMeta = {
  slug: ["testFile"],
  url: "/testURL/testFile",
  meta: {
    title: correctData.title,
    fullTitle: correctData.fullTitle,
    date: correctData.date,
    tags: correctData.tags,
    order: 2,
    authors: [correctData.author],
    description: correctData.description,
    images: [],
  },
};

describe("parseFrontmatter", () => {
  it("parse correct configured", () => {
    const grayMatter: GrayMatterFile<string> = {
      data: correctData,
      content: "",
      stringify: (_) => "",
      matter: "",
      language: "",
      orig: "",
    };

    const actual = parseFrontmatter(
      grayMatter,
      "/basePath",
      "testFile.mdx",
      {
        articlesURL: "/testURL",
        articlesPath: "/basePath",
      },
      new Date(),
    );

    expect(actual).toStrictEqual(correctDataExpected);
  });
});

/* describe("getArticlesMetadata", () => {
  beforeEach(() => {
    vol.reset();
  });

  it("parse correct configured", async () => {
    const file = matter.stringify({ content: "test123" }, correctData);

    await mkdir("/basePath");
    await writeFile("/basePath/testFile.mdx", file);

    const actual = await getArticlesMetadata({
      articlesPath: "/basePath",
      articlesURL: "/testURL",
    });

    expect(actual).toStrictEqual([correctDataExpected]);
  });
}); */
