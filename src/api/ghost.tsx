import GhostContentAPI from "@tryghost/content-api";
import { GhostApiSettings } from '@config/config';


// Create API instance with site credentials
const api = new GhostContentAPI(GhostApiSettings);

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: "all"
    })
    .catch(err => {

    });
}
export async function getTagPosts() {
    return await api.posts
        .browse({
            include: 'tags',
            limit: "all"
        })
        .catch(err => {

        });
}
export async function getMostPosts() {
    return await api.posts
        .browse({
            include: 'tags,authors',
            limit: "20"
        })
        .catch(err => {

        });
}
export async function getNavPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {

        });
}
export async function getReducedPosts() {
    return await api.posts
        .browse({
            include: 'tags'
        })
        .catch(err => {

        });
}
export async function getSettings() {
    return await api.settings
        .browse({
            limit: "all"
        })
        .catch(err => {

        });
}
export async function getLatestArticles() {
  return await api.posts
    .browse({
      limit: 3
    })
    .catch(err => {

    });
}

export async function getSinglePost(postSlug) {
  return await api.posts

    .read({
      slug: postSlug,
      include: 'tags,authors',
    })
    .catch(err => {

    });
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {

    });
}

export async function getTags() {
  return await api.tags
    .browse({
      limit: "all",
      include:"posts"
    })
    .catch(err => {

    });
}

export async function search(term: string) {
  const posts = api.posts.browse({limit: 5, include: 'title', filter:`title:${term}`})

  const blah = await posts;

  console.log(blah);
  return blah;
}
