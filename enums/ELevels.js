let ELevels = [];

const retrievePreviousLevel = (currentCeilingLevel) => ELevels.find((level) => level.level === (currentCeilingLevel - 1));

const previousCeiling = (currentCeilingLevel) => {
    if (currentCeilingLevel === 1) return 0;

    const previousLevel = retrievePreviousLevel(currentCeilingLevel);

    return parseInt(previousLevel.highCeiling + 1);
};

const calculateNextCeilings = (currentCeilingLevel) => {
    if (currentCeilingLevel === 1) return 50;

    const previousLevel = retrievePreviousLevel(currentCeilingLevel);

    return parseInt(previousLevel.highCeiling * 1.5);
};


for (let i = 1; i <= 40; i += 1) {
    ELevels = [...ELevels,
        {
            level: i,
            lowCeiling: previousCeiling(i),
            highCeiling: calculateNextCeilings(i),
        },
    ];
}

module.exports = ELevels;
