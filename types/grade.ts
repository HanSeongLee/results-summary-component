export type Grade = {
    name: string;
    description: string;
};
export const Grades: Record<Score, Grade> = {
    90: {
        name: 'Excellent',
        description: 'Your performance exceeds 80% of the people conducting the test here!',
    },
    70: {
        name: 'Great',
        description: 'Your performance exceeds 65% of the people conducting the test here!',
    },
    60: {
        name: 'Good',
        description: 'Your performance exceeds 50% of the people conducting the test here!',
    },
    50: {
        name: 'Pass',
        description: 'Your performance exceeds the minimum requirement to pass this test.',
    },
    0: {
        name: 'Fail',
        description: 'Unfortunately, your performance did not meet the minimum requirement to pass this test.',
    },
};

export const getGrade = (score: Score): Grade => {
    let previous: Score = 0;
    for (const min in Grades) {
        if (score < Number(min)) {
            return Grades[previous];
        }
        previous = Number(min);
    }
    return Grades[previous];
};
