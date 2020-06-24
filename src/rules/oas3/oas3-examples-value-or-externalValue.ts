import { Oas3Rule } from '../../visitors';

export const ExampleValueOrExternalValue: Oas3Rule = () => {
  return {
    Example(example, { report, location }) {
      if (example.value && example.externalValue) {
        report({
          message: 'Example object can have either "value" or "externalValue" fields.',
          location: location.child(['value']).key(),
        });
      }
    },
  };
};
