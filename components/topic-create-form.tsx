'use client';
import { useFormState } from 'react-dom';
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import * as actions from '@/app/actions';
import FomButton from '@/components/form-button';

export default function TopicCreateForm() {
	const [formState, action] = useFormState(actions.createTopic, { errors: {} });
	return (
		<Popover placement='left'>
			<PopoverTrigger>
				<Button color='primary'>Create a Topic</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form action={action}>
					<div className='flex flex-col gap-4 p-4 w-80'>
						<h2 className='text-lg'>Create a Topic</h2>
						<Input
							name='name'
							label='name'
							labelPlacement='outside'
							placeholder='Name'
							isInvalid={!!formState.errors.name}
							errorMessage={formState.errors.name?.join(', ')}
						/>
						<Textarea
							name='description'
							label='description'
							labelPlacement='outside'
							placeholder='Describe it'
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(', ')}
						/>
						<div className='p-2 text-red-300'>{formState.errors._form || ''}</div>
						<FomButton>Save</FomButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
