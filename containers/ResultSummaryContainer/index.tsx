import React, { useMemo } from 'react';
import { getGrade, Grade } from 'types/grade';
import ResultSummaryBox from 'components/ResultSummaryBox';

const ResultSummaryContainer: React.FC = () => {
    const scoreItems: ScoreItem[] = [
        {
            icon: '/icons/icon-reaction.svg',
            color: 'var(--red-color)',
            name: 'Reaction',
            score: 80,
        },
        {
            icon: '/icons/icon-memory.svg',
            color: 'var(--yellow-color)',
            name: 'Memory',
            score: 92,
        },
        {
            icon: '/icons/icon-verbal.svg',
            color: 'var(--green-color)',
            name: 'Verbal',
            score: 61,
        },
        {
            icon: '/icons/icon-visual.svg',
            color: 'var(--blue-color)',
            name: 'Visual',
            score: 73,
        },
    ];
    const totalScore = useMemo(() => {
        return Math.floor(scoreItems.reduce((previous, current) => {
            return previous + current.score;
        }, 0) / scoreItems.length);
    }, [scoreItems]);
    const grade: Grade = getGrade(totalScore);

    const onContinue = () => {
        alert('You clicked the button.');
    };

    return (
        <div>
            <ResultSummaryBox totalScore={totalScore}
                              grade={grade}
                              scoreItems={scoreItems}
                              onContinue={onContinue}
            />
        </div>
    );
};

export default ResultSummaryContainer;
