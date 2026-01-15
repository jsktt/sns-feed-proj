import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreatePostInput } from "../../types";
import { createPost } from "../posts";

export function useCreatePost() {
    const queryClient = useQueryClient();

    // 데이터 생성/수정/삭제 작업
    return useMutation({
        // 실제 API 호출 함수
        mutationFn: (input: CreatePostInput) =>
            createPost(input.content, input.image), // send POST request

        onSuccess: () => {
            // 포스트 목록 캐시 무효화 -> 자동 리패칭
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        }
    });
}