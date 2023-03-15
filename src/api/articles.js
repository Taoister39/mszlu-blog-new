import request from "@/request";
/**
 * @template T
 * @typedef {Object} Result
 * @property {boolean} success
 * @property {number} code
 * @property {string} msg
 * @property {T} data
 */
/**
 * @typedef {Object} ArticleList
 * @property {number} id
 * @property {string} title
 * @property {string} summary
 * @property {number} commentCounts
 * @property {number} viewCounts
 * @property {number} weight
 * @property {string} createDate
 * @property {Author} author
 * @property {object} body
 * @property {object} category
 * @property {Tags[]} tags
 */
/**
 * @typedef {Object} Author
 * @property {string} nickname
 * @property {string} avatar
 * @property {string} id
 */
/**
 * @typedef {Object} Tags
 * @property {string} id
 * @property {string} tagName
 * @property {string} avatar
 */

/**
 * @typedef Page
 * @property {number} pageNumber
 * @property {number} pageSize
 * @property {string} name
 * @property {string} sort
 */

/**
 * @typedef Query
 * @property {number} year
 * @property {number} moth
 * @property {number} tagId
 * @property {number} categoryId
 */

export const getArticlesApi =
  /**
   *
   * @param {Query} query
   * @param {Page} page
   * @returns {Promise<import("axios").AxiosResponse<Result<ArticleList[]>>>}
   */

  (query, page) =>
    request.post("/articles", {
      page: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.moth,
      tagId: query.tagId,
      categoryId: query.categoryId,
    });

export const getHotArticlesApi =
  /**
   * @returns {Promise<import("axios").AxiosResponse<Result<ArticleList[]>>>}
   */
  () => request.post("articles/hot");
