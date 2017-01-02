import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Cuttlesoft - React Challenge" subtitle="This is the home page." />
    <CardActions>
      <FlatButton>
        <Link to="/signup">Sign Up</Link>
    </FlatButton>
    </CardActions>
  </Card>

);

export default HomePage;
