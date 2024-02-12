import PostCreateForm from '@/components/post-create-form';
import PostList from '@/components/post-list';
import { db } from '@/db';
import { fetchPostsByTopic } from '@/db/queries/post';

interface TopicShowPropss {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const topics = await db.topic.findMany();

	return topics.map((topic) => ({
		slug: topic.slug,
	}));
}

const Topic = ({ params: { slug } }: TopicShowPropss) => {
	return (
		<div className='grid grid-cols-4 gap-4 p-4'>
			<div className='col-span-3'>
				<h1 className='text-2xl font-bold mb-2'>{slug.replaceAll('%20', ' ')}</h1>
				<PostList fetchData={() => fetchPostsByTopic(slug)} />
			</div>
			<div>
				<PostCreateForm slug={slug} />
			</div>
		</div>
	);
};

export default Topic;
