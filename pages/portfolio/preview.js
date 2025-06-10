import styles from "./preview.module.scss";

export default function Preview(props) {
  const { project, onClick } = props;

  return <div className={styles.preview}>
      <img src={project.previewImage} onClick={onClick} />
      <p onClick={props.onClick}>{project.name}</p>
    </div>
}
