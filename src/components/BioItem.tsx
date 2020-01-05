import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IBioItem } from '../constants/bioItems';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
	})
);

interface Props {
	title: string;
	paragraphs: string[];
}

export const BioItem = (item: IBioItem) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ExpansionPanel square>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>{item.title}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					{item.paragraphs.map(paragraph => (
						<Typography>{paragraph}</Typography>
					))}
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};
