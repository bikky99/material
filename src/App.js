import {
  Box,
  Typography,
  Button,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container} >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone this is a photo album and I'm trying to make this
              line long to see what it looks like on the screen
            </Typography>
            <div className={classes.button} >
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Card className={classes.card} >
                <CardMedia>
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='Image Title'
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography gutterButtom variant='h5'>
                    Heading
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="small">
                    Action
                    </Button>
                  <Button size="small" color="secondary">
                    Action
                    </Button>
                    </CardActions>
              </Card>
            </Grid>
            ))}
            </Grid> 
        </Container>
      </main>
      <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="caption" align="center" gutterBottom>
                footer is here for some purpose.
              </Typography>
      </footer>
    </>
  );
}

export default App;
