import { useForm } from "react-hook-form";
import { useCreatePost } from "../../hooks/useCreatePost";
import styles from './PostForm.module.css'

interface PostFormData {
    content: string;
    image: string;
}

function PostForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<PostFormData>();
    const createPostMutation = useCreatePost();

    // action function
    const onSubmit = (data: PostFormData) => {
        createPostMutation.mutate(data, {
            onSuccess: () => {
                reset();
            }
        });
    };


    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <textarea
                    {...register('content', {
                        required: '내용을 입력하세요',
                    })}
                    placeholder="무슨 생각 중이니?"
                    className={styles.textarea}
                    rows={3}
                />

                <input
                    {...register('image')}
                    type="text"
                    placeholder="이미지 URL (선택)"
                    className={styles.imageInput}
                />

                {errors.content && (
                    <p className={styles.error}>{errors.content.message}</p>
                )}

                <div className={styles.actions}>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={createPostMutation.isPending}
                    >
                        {createPostMutation.isPending ? '게시 중...' : "게시"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm