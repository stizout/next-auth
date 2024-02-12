import Link from 'next/link';
import PostShow from '@/components/post-show';
import CommentList from '@/components/comment-list';
import CommentCreateForm from '@/components/comment-create-form';
import paths from '@/paths';
import { fetchComments } from '@/db/queries/comments';
import { db } from '@/db';

interface PostShowPageProps {
	params: {
		slug: string;
		postId: string;
	};
}

export async function generateStaticParams() {
	const topics = await db.topic.findMany({
		include: {
			posts: {
				select: {
					id: true,
				},
			},
		},
	});

	return topics.map((topic) => ({
		slug: topic.slug,
	}));
}

export default async function PostShowPage({ params }: PostShowPageProps) {
	const { slug, postId } = params;
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
