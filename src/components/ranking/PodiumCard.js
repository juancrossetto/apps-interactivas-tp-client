import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: '20%',
    paddingTop: '7px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',//'#50c5ed'
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: '20px',
  },
  media: {
    height: 140,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },  
  large: {
    width: '30%',//theme.spacing(7),
    height: '81%',//theme.spacing(7),
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
    display: 'block !important'
  },
}));


const PodiumCard = ({position, student}) => {
    const classes = useStyles();

    if(!student)
      student = { name: '', level: '', subject: '', avatar: ''};

    const { name, level, subject, avatar } = student;
    return ( 
        <Card className={classes.root}>
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="h2"  className="font-weight-bold text-capitalize lead">
                  { name }
                </Typography>
                <Avatar alt="No Data" src={avatar} width="100%"  className={classes.large} />  
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    { position }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                    { name } a obtenido la { position } en  { subject } nivel {level}
                </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions> */}
        </Card>
     );
}
 


export default PodiumCard;