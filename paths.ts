const paths = {
	home() {
		return '/';
	},
	topicShow(slug: string) {
		return `/topics/${slug}`;
	},
	postCreate(slug: string) {
		return `/topics/${slug}/posts/new`;
	},
	postShow(slug: string, postId: string) {
		console.log('Redirect', slug, postId);
		return `/topics/${slug}/posts/${postId}`;
	},
};

export default paths;
