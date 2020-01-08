import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	paddingVertical: {
		paddingTop: '5px',
		paddingBottom: '5px',
	},
});

export const ScratchPad = () => {
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
					Scratch Pad
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					This will eventually hold a simplified note taking app
				</Typography>
				<Typography
					className={classes.paddingVertical}
					variant="body2"
					color="textSecondary"
					component="p"
				>
					Key features will be to:
					<ul style={{ margin: '0px' }}>
						<li>
							Act as a simple frontend to take notes and persist to a backend
						</li>
						<li>Allow for drag and drop reordering of notes</li>
					</ul>
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
