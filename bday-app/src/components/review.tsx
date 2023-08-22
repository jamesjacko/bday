import styles from "./review.module.scss";
type ReviewProps = {
	author: string;
	rating: 0 | 1 | 2 | 3 | 4 | 5;
	content: string;
};
const Review = ({ author, rating, content }: ReviewProps): JSX.Element => {
	return (
		<div className={[styles.review].join(" ")} data-cy="Review">
			<p className={styles.review__author}>{author}</p>
			<span className={[styles.review__rating, styles[`rating_${rating}`]].join(" ")} />
			<p className={styles.review__content}>{content}</p>
		</div>
	);
};

export default Review;
