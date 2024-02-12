import TopicCreateForm from '@/components/topic-create-form';
import TopicsList from '@/components/topic-list';
import { Divider } from '@nextui-org/react';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='w-full lg:w-3/5 mx-auto grid grid-cols-4 gap-4 p-4'>
			<div className='col-span-1 xl:col-span-3'>
				<h1 className='text-xl m-2'>Top Posts</h1>
			</div>
			<div className='col-span-3 xl:col-span-1 border shadow py-3 px-2'>
				<TopicCreateForm />
				<Divider className='my-2' />
				<h3 className='text-large'>Topic</h3>
				<div className='flex flex-row flex-wrap gap-2'>
					<TopicsList />
				</div>
			</div>
			<Image
				src='/nextjs-github-pages/vercel.svg'
				alt='Vercel Logo'
				width={100}
				height={24}
				priority
			/>
		</div>
	);
}
