'use client';
import { useFormState } from 'react-dom';
import * as actions from '@/app/actions';
import { Textarea, Input } from '@nextui-org/react';
import FormButton from '@/components/form-button';

interface PostCreateFormProps {
	slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
	const [formState, action] = useFormState(actions.createPost.bind(null, slug), { errors: {} });

	return (
		<form action={action}>
			<div className='flex flex-col gap-4 p-4 w-80'>
				<h2 className='text-lg'>Create a Post</h2>
				<Input
					name='title'
					label='title'
					labelPlacement='outside'
					placeholder='Title of post'
					isInvalid={!!formState.errors.title}
					errorMessage={formState.errors.title?.join(', ')}
				/>
				<Textarea
					name='content'
					placeholder='Write your post'
					isInvalid={!!formState.errors.content}
					errorMessage={formState.errors.content?.join(', ')}
				/>
				<div className='p-2 text-red-300 min-h-[40px]'>{formState.errors._form?.join('') || ''}</div>
				<FormButton>Save</FormButton>
			</div>
		</form>
	);
}
