import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onDismiss}>Dismiss</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
