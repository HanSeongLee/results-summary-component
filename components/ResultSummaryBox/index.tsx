import React, { CSSProperties } from 'react';
import styles from './style.module.scss';
import Button from 'components/Button';
import { Grade } from 'types/grade';
import CountUp from 'react-countup';

interface IProps {
    totalScore: Score;
    grade: Grade;
    scoreItems: ScoreItem[];
    onContinue: () => void;
}

const ResultSummaryBox: React.FC<IProps> = ({ totalScore, grade, scoreItems, onContinue }) => {
    return (
        <article className={styles.resultSummary}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Your Result
                </h2>
                <div className={styles.scoreBox}>
                    <span className={styles.score}>
                        <CountUp end={totalScore} />
                    </span>
                    <div className={styles.maxScore}>
                        of 100
                    </div>
                </div>
                <span className={styles.gradeName}>
                    {grade.name}
                </span>
                <p className={styles.description}>
                    {grade.description}
                </p>
            </header>
            <section className={styles.body}>
                <h2 className={styles.title}>
                    Summary
                </h2>

                <ul className={styles.scoreList}>
                    {scoreItems.map(({ icon, color, name, score }, index) => (
                        <li className={styles.scoreItem}
                            style={{
                                '--color': color,
                            } as CSSProperties}
                        >
                            <span>
                                <img className={styles.icon}
                                     src={icon}
                                     alt={''}
                                />
                                <span className={styles.name}>
                                    {name}
                                </span>
                            </span>
                            <span>
                                <span className={styles.score}>
                                    {score}
                                </span>&nbsp;
                                <span className={styles.maxScore}>
                                    / 100
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>

                <div className={styles.buttonContainer}>
                    <Button variant={'primary'}
                            onClick={onContinue}
                    >
                        Continue
                    </Button>
                </div>
            </section>
        </article>
    );
};

export default ResultSummaryBox;
