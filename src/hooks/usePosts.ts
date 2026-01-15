import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/posts";
import type { PostsResponse } from "../types";

export function usePosts(page:number=1){
    return useQuery<PostsResponse>(
        {
            queryKey:['posts',page],
            queryFn:()=>fetchPost(page)
        }
    );
}