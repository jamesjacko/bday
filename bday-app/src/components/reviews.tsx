import Review from "./review";
import styles from "./reviews.module.scss";

const Reviews = (): JSX.Element => {
	return (
		<>
			<h3 className={styles.reviewsTitle}>Reviews</h3>
			<div className={[styles.reviews].join(" ")} data-cy="Reviews">
				<Review
					author="An Anonymous Carrot"
					rating={5}
					content="From my veggie perspective, Xbox Series S is a true marvel! The visuals are vibrant, loading is quick as sprouting, and its compact design is as sleek as a cucumber. The controller feels just right in my leafy hands. Online play connects veggies globally, making me a joyful virtual gamer. This console bridges the veggie and digital worlds seamlessly. Xbox Series S has turned this carrot into a gaming enthusiast, earning a crunchy five-star rating! 🥕🎮"
				/>
				<Review
					author="The Front Passenger Tyre"
					rating={5}
					content="From my rubber view, Xbox Series S excels! Graphics pop like fresh paint, speed revs like a getaway car. Compact design hugs like tread on asphalt. Controller grip handles like a pro. Online play unites like cars on the open road. This console cruises between worlds seamlessly. Xbox Series S, a tire's gaming dream, earns a solid five-star rating! 🚗🎮"
				/>
				<Review
					author="A Disappointed Lama"
					rating={2}
					content="Ugh, where do I start? This Xbox Series S thing is a total disappointment. Graphics? More like blurry mess. Loading speed? Slower than a snail on tranquilizers. And that compact design? It's like trying to fit a camel through a keyhole. The controller? Feels as uncomfortable as a cactus. Online play? A herd of chaos. This console makes me spit with frustration. Xbox Series S, you've earned my two hooves down. Don't waste your time, folks. 🦙👎"
				/>
			</div>
		</>
	);
};

export default Reviews;
