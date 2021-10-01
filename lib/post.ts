import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const getAllPostData = fileNames.map((val) => {
        const postId = val.replace(/\.md$/, "");

        const fullPostPath = path.join(postsDirectory, val);
        const rawPostdata = fs.readFileSync(fullPostPath, 'utf-8');

        const postMetaData = matter(rawPostdata);

        return {
            id: postId,
            ...postMetaData.data,
        }

    });

    return getAllPostData;
};

export const getAllPostIds = () =>{
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((val) => {
        const postId = val.replace(/\.md$/, "");
        return {
            params: {
                id: postId
            }
        }
    });
}


export const getPostById = async (id:string) => {
    const postFileName = path.join(postsDirectory, `${id}.md`);
    const postData = fs.readFileSync(postFileName, 'utf-8');

    const postMetaData = matter(postData);

    const postHtml = await remark().use(html).process(postMetaData.content);

    const convertedHtml = postHtml.toString();

    return {
        id,
        html: convertedHtml,
        ...postMetaData.data
    }
}

