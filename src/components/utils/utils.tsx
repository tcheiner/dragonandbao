import {getCollection} from "astro:content";

export async function getStaticPaths(folderName, ) {
    const postEntries = await getCollection(folderName);
    return postEntries.map((entry) => ({
        params: {slug: entry.slug},
        props: {entry},
    }));
}