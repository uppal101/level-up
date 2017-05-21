export const addRequirement = function addRequirement() {
  this.setState((prevState, props) => {
    if (prevState.numberOfRequestInputs <= 4) {
      return { numberOfRequestInputs: prevState.numberOfRequestInputs + 1 };
    }
    return { maxRequestInputs: true };
  });
};

export const renderRequirementInputs = function renderRequirementInputs(numOfInputs) {
  const requirementInputComponents = [];
  for (let i = 1; i <= numOfInputs; i++) {
    requirementInputComponents.push((
      <Form.Group>
        <Form.Field width={16}>
          <Field
            name="`requirements_${i}`"
            component={renderField}
            type="text"
            label="Requirement"
            placeholder="Requirement"
          />
        </Form.Field>
      </Form.Group>
  ));
  }
  return requirementInputComponents;
};
