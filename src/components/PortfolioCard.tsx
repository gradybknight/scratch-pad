import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import headshot from '../images/small_headshot_png.png';
import { ReactComponent as TS } from '../images/TS.svg';
import { ReactComponent as ReactSvg } from '../images/react.svg';
import { ReactComponent as Redux } from '../images/redux.svg';
import { ReactComponent as Mui } from '../images/mui.svg';

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	},
	media: {
		height: 240,
	},
	flexRow: {
		display: 'flex',
		width: '100%',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
});

const clickAway = () => {
	window.open('http://www.google.com');
};

export default function PortfolioCard() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={headshot}
					title="Portfolio Site"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Portfolio Site
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						This site is as much an excuse to play with state patterns as much
						as it is a portfolio site.
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Redux Toolkit is used to maintain all state while each component is
						left functional and stateless.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<div className={classes.flexRow}>
					<Button size="small" color="primary" onClick={clickAway}>
						View on Github
					</Button>
					<div>
						<TS style={{ width: '20', height: '20' }} />
						<ReactSvg style={{ width: '20', height: '20' }} />
						<Redux style={{ width: '20', height: '20' }} />
						<Mui style={{ width: '20', height: '20' }} />
					</div>
				</div>
			</CardActions>
		</Card>
	);
}
