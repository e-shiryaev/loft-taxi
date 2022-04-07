import React from 'react';
import Combobox from "./Combobox";
import {Button} from "@mui/material";
import './css/Map.css';
import {connect} from "react-redux";
import {loadAddressList, loadCard, loadRoute} from "./actions";
import {getAddressList, getCardInfo, getErrorRoute} from "./reducers";
import {Field, Form} from "react-final-form";

class MapForm extends React.Component {
  state = {error: ''}

  componentDidMount() {
    if (!this.props.cardInfo.cardNumber) {
      this.props.loadCard();
    }

    this.props.loadAddressList();
  }

  submit = (values) => {
    const comboToValue = values.comboTo;
    const comboFromValue = values.comboFrom;
    const {addresses} = this.props;

    if (comboToValue === undefined || comboFromValue === undefined) {
      this.setState({error: 'Необходимо выбрать адреса'});
      return;
    }

    this.setState({error: ''});

    this.props.loadRoute(addresses[comboFromValue], addresses[comboToValue]);
  }

  render() {
    return (
      <div className="form map">

        <Form
          onSubmit={this.submit}
          validate={values => {}}
          render={({ handleSubmit, form, submitting, pristine, values }) => {

            return (
              <form onSubmit={handleSubmit}>
                <Field name="comboFrom">
                  {({ input }) => (
                    <Combobox
                      label="Откуда"
                      input={input}
                      excludeIndex={values.comboTo}
                    />
                  )}
                </Field>

                <Field name="comboTo">
                  {({ input }) => (
                    <Combobox
                      label="Куда"
                      input={input}
                      excludeIndex={values.comboFrom}
                    />
                  )}
                </Field>

                <div style={{color: "red"}}>{this.state.error || this.props.errorRoute}</div>

                <Button
                  variant="contained"
                  onClick={form.submit}
                  disabled={submitting}
                  fullWidth
                >Заказать</Button>

              </form>
            )
          }}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cardInfo: getCardInfo(state),
    addresses: getAddressList(state),
    errorRoute: getErrorRoute(state)
  }),
  {loadCard, loadAddressList, loadRoute}
)(MapForm);
