import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


const styles = {
  card: {
    width: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  'input': {
    '&::placeholder': {
      textAlign: 'center',
    }
  }
};

class SimpleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          email:null
        }
      }

      render(){
  const { classes } = this.props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Witnessed by
        </Typography>
        <div className="col-md-12 d-flex justify-content-center">
        <TextField
               className="col-md-6"
               style={{ alignSelf: 'center',textAlign:'center' }}
               placeholder="Witness Email"
               InputProps={{ classes: {input: this.props.classes['input']} }} />
                </div>

<br></br>
<Divider />
<br></br>

                 <Typography className={classes.title} color="textSecondary" gutterBottom>
          Signed by
        </Typography>
        <div className="col-md-12 d-flex justify-content-center">
        <TextField
               className="col-md-6"
               style={{ alignSelf: 'center',textAlign:'center' }}
               placeholder="Your Email"
               InputProps={{ classes: {input: this.props.classes['input']} }} />
                </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
