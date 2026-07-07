import styles from "./Title.module.css";

type Props = {
    title: string
}

const Title = ({title} : Props) => {
    return (
        <h1 className={styles.title}>{title}</h1>
    );
}
export default Title;