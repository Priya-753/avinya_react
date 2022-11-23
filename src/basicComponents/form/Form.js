import React  from 'react';
import { Form as RSForm } from 'reactstrap';

class IForm extends React.Component {

  render() {
    let {
      ...attributes
    } = this.props;

    const form = (
      <RSForm
        {...attributes}
      >
        {attributes.children}
      </RSForm>
    );

    return form;
  }
}

IForm.displayName = 'IForm';

export default IForm;