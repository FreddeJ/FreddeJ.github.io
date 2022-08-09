export interface RedditPost {
    thumbnail: any,
    created: number,
    num_comments: number,
    author: string,
    title: string,
    score: number,
    selftext: string
}

export interface RedditGet {
    data: {
        after: string,
        before: string,
        children: [{
            data: RedditPost
        }]
    }
}