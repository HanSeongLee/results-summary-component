import type { NextPage } from 'next';
import styles from './style.module.scss';
import Container from 'components/Container';
import ResultSummaryContainer from 'containers/ResultSummaryContainer';

const Home: NextPage = () => {
    return (
        <>
            <header>
                <h1 className={styles.hidden}>
                    Results Summary Component
                </h1>
            </header>
            <main className={styles.main}>
                <Container className={styles.container}>
                    <ResultSummaryContainer />
                </Container>
            </main>
        </>
    );
}

export default Home
