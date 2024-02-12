import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
	const topics = await db.topic.findMany();
	return topics.map((topic) => (
		<div key={topic.id}>
			<Link href={paths.topicShow(topic.slug)}>
				<Chip
					color='warning'
					variant='shadow'
				>
					{topic.slug}
				</Chip>
			</Link>
		</div>
	));
}
