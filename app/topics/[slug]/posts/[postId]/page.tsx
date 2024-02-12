import Link from 'next/link';
import PostShow from '@/components/post-show';
import CommentList from '@/components/comment-list';
import CommentCreateForm from '@/components/comment-create-form';
import paths from '@/paths';
import { fetchComments } from '@/db/queries/comments';

interface PostShowPageProps {
	params: {
		slug: string;
		postId: string;
	};
}

export default async function PostShowPage({ params }: PostShowPageProps) {
	const { slug, postId } = params;
	const comments = await fetchComments(postId);
	return (
		<div className='space-y-3'>
			<Link
				className='underline decoration-solid'
				href={paths.topicShow(slug)}
			>
				{'< '}Back to {slug}
			</Link>
			<PostShow postId={postId} />
			<CommentCreateForm
				postId={postId}
				startOpen
			/>
			<CommentList fetchComments={() => fetchComments(postId)} />
		</div>
	);
}
