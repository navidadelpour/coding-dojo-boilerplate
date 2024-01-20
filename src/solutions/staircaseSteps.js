function staircaseSteps({ steps, paces }) {
  const results = [];

  function getSteps({ remainingSteps, partialResult }) {
    if (remainingSteps === 0) {
      results.push(partialResult);
      return;
    }

    for (let paceIndex = 0; paceIndex < paces.length; paceIndex++) {
      const paceValue = paces[paceIndex];
      const remainingStepsAfterPacePassed = remainingSteps - paceValue;

      if (remainingStepsAfterPacePassed >= 0) {
        getSteps({
          remainingSteps: remainingStepsAfterPacePassed,
          partialResult: [...partialResult, paceValue],
        });
      }
    }
  }

  getSteps({ remainingSteps: steps, partialResult: [] });

  return results;
}

module.exports = staircaseSteps;
