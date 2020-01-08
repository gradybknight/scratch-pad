import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	paddingVertical: {
		paddingTop: '5px',
		paddingBottom: '5px',
	},
});

export const AboutSite = () => {
	const classes = useStyles();
	return (
		<Paper style={{ padding: '10px', minHeight: '80vh' }}>
			<Paper
				style={{
					padding: '3%',
					marginRight: '20%',
					marginLeft: '20%',
					minHeight: '100%',
				}}
				elevation={5}
			>
				<Typography
					className={classes.paddingVertical}
					variant="h3"
					color="textPrimary"
					component="p"
				>
					Why minimal styling?
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					The primary reason is that I wanted to use this site to play with
					moving all app state to redux (UI and data model). This isn't the
					dominant pattern in React development but I believe it has a number of
					advantages. It also mirrors some of the Elm architecture (which I find
					to be a very rational approach to UIs).
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					The secondary reason is that I write styles for a large portion of my
					day job. While this is a portfolio site, it was meant to be something
					fun for me to build. To that end, I didn't import a commercial css
					theme, run a wordpress site, or 'borrow' anothers portfolio template.
					This is simply Material UI with a few inline styles thrown in for good
					measure.
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					This app will own a slice of redux state from the portfolio site. This
					will allow it to be extracted to a standalone app.
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					Finally, this will give me an app to use to experiment with{' '}
					<a href="https://reasonml.github.io/">Reason</a>
				</Typography>
			</Paper>
		</Paper>
	);
};
