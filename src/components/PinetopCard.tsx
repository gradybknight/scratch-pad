import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import pinetop from '../images/pinetop.jpg';
import { ReactComponent as JS } from '../images/JS.svg';
import { ReactComponent as ReactSvg } from '../images/react.svg';
import { ReactComponent as Redux } from '../images/redux.svg';
import { ReactComponent as Mui } from '../images/mui.svg';
import { ReactComponent as Node } from '../images/node.svg';
import { ReactComponent as EC2 } from '../images/ec2.svg';
import { ReactComponent as RDB } from '../images/rdb.svg';
import { ReactComponent as MySql } from '../images/mysql.svg';
import { ReactComponent as DynamoDb } from '../images/dynamo.svg';
import { ReactComponent as Phidget } from '../images/phidget.svg';

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
	window.open('http://www.pinetopdistilleryproduction.com/');
};

export default function PinetopCard() {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={pinetop}
				title="Pinetop Distillery"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Pinetop Distillery
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Complete greenfield design of a fully automated distillery
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					React frontend controlling entire operation through Node backend
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					There's simply too much to summarize for the distillery. Get in
					contact with me: I'm happy to give any details and samples of the
					product!
				</Typography>
			</CardContent>
			<CardActions>
				<div className={classes.flexRow}>
					<Button size="small" color="primary" onClick={clickAway}>
						View Site
					</Button>
					<div>
						<JS style={{ width: '20', height: '20' }} />
						<ReactSvg style={{ width: '20', height: '20' }} />
						<Redux style={{ width: '20', height: '20' }} />
						<Mui style={{ width: '20', height: '20' }} />
						<Node style={{ width: '20', height: '20' }} />
						<EC2 style={{ width: '20', height: '20' }} />
						<RDB style={{ width: '20', height: '20' }} />
						<MySql style={{ width: '20', height: '20' }} />
						<DynamoDb style={{ width: '20', height: '20' }} />
						<Phidget style={{ width: '20', height: '20' }} />
					</div>
				</div>
			</CardActions>
		</Card>
	);
}
