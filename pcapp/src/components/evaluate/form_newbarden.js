import React from 'react';
import { Field, reduxForm, Form  } from 'redux-form';
import { connect } from 'react-redux';


class PageForm extends React.Component {
  render() {
    const { handleSubmit,onClickSubmit } = this.props;
    return (
      <Form
          onSubmit={handleSubmit(onClickSubmit)}
          >
            <div>
							这里是barden评估表单这里是barden评估表单这里是barden评估表单这里是barden评估表单这里是barden评估表单这里是barden评估表单
						</div>
						<div>
							<button>递交评估</button>
						</div>
          </Form>);
        }
    }


    PageForm = reduxForm({
        form: 'NewbardenForm'
    })(PageForm);

    export default PageForm;