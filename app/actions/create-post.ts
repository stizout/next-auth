'use server';
import { auth } from '@/auth';
import { z } from 'zod';
import { db } from '@/db';
import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import paths from '@/paths';
import { redirect } from 'next/navigation';
interface CreateTopicFormState {
	errors: {
		title?: string[];
		content?: string[];
		_form?: string[];
	};
}

const createPostSchema = z.object({
	title: z.string().min(3),
	content: z.string().min(10),
});

export async function createPost(slug: string, formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
	const title = formData.get('title');
	const content = formData.get('content');
	const result = createPostSchema.safeParse({ title, content });
	const session = await auth();
	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors,
		};
	}
	if (!session || !session.user) {
		return {
			errors: {
				_form: ['You must be logged in'],
			},
		};
	}

	let post: Post;
	try {
		const topic = await db.topic.findFirst({ where: { slug } });
		if (!topic) {
			return {
				errors: {
					_form: ['Topic not found'],
				},
			};
		}
		post = await db.post.create({ data: { title: result.data.title, content: result.data.content, userId: session.user.id, topicId: topic.id } });
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.log(e);
			return {
				errors: {
					_form: [e.message],
				},
			};
		} else {
			return {
				errors: {
					_form: ['Something went wrong'],
				},
			};
		}
	}
	revalidatePath(paths.topicShow(slug));
	redirect(paths.postShow(slug, post.id));
}
