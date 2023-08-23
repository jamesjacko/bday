import styles from "./footer.module.scss";
type FoooterProps = {
	className?: string;
};
const Footer = ({ className = "foooter" }: FoooterProps): JSX.Element => {
	return (
		<footer className={[className, styles.footer].join(" ")} data-cy="Foooter">
			<section className={styles.footer__container}>
				<address>BDay (not for bum cleaning)<br />Finnsbury Tower<br />11 Finn Avenue<br />Finnceister<br />Finnovia<br />One of those Islands off Scotland<br />IDC 7AFK</address>
				<p>BDay is a trading style of Finnurry Ltd GmbH LLC LBW HGV BRB AFK WTF<br />
					Registered in England, Wales &amp; Saint Kitts and Nevis<br />
					Company No. 123456789<br />			
				</p>
			</section>
		</footer>
	);
};

export default Footer;
