import { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import {
  Container,
  BoxForm,
  BoxInput,
  ButtonSubmit,
  ButtonResetForm,
  BoxPizzaOptions,
  BoxButtons,
  LabelText,
} from "./Form.styled";
import {
  renderFieldName,
  renderFieldTime,
  renderFieldDish,
  renderFieldPices,
  renderFieldSliceBread,
  renderFieldDiameter,
  renderFieldSpiceness,
} from "../InputsForm/InputsForm";
import { validate } from "../../validation/validation";

function DishesForm({
  handleSubmit,
  reset,
  clearFields,
  pristine,
  submitting,
}) {
  const [dishType, setDishType] = useState("");
  const [diameterPiz, setDiameterPiz] = useState("?");
  const [spicinessScale, setSpicinessScale] = useState("?");

  const handleDishType = (e) => {
    setDishType(e.target.value);
    clearFields(
      false,
      true,
      "no_of_slices",
      "spiciness_scale",
      "diameter",
      "slices_of_bread"
    );
  };

  const handleDiameter = (e) => {
    setDiameterPiz(e.target.value);
  };

  const handleSpiciness = (e) => {
    setSpicinessScale(e.target.value);
  };

  const resetForm = () => {
    reset();
    setDishType("");
    setSpicinessScale("?");
    setDiameterPiz("?");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <BoxForm>
          <BoxInput>
            <LabelText component="label" htmlFor="name">
              Name
            </LabelText>
            <Field
              id="name"
              name="name"
              component={renderFieldName}
              type="text"
              label="Enter name"
            />
          </BoxInput>
          <BoxInput>
            <LabelText component="label" htmlFor="preparation_time">
              Time preparation
            </LabelText>
            <Field
              id="preparation_time"
              name="preparation_time"
              step="2"
              component={renderFieldTime}
            />
          </BoxInput>
          <BoxInput>
            <Field
              id="dish"
              name="type"
              required
              component={renderFieldDish}
              onChange={handleDishType}
              value={dishType}
            />
          </BoxInput>
          {(dishType === "pizza" && (
            <BoxPizzaOptions>
              <BoxInput>
                <LabelText component="label" htmlFor="no_of_slices">
                  Number of pieces
                </LabelText>
                <Field
                  id="no_of_slices"
                  name="no_of_slices"
                  component={renderFieldPices}
                  type="number"
                  min={1}
                />
              </BoxInput>
              <BoxInput>
                <LabelText component="label" htmlFor="diameter">
                  Diameter: {diameterPiz}cm
                </LabelText>
                <Field
                  id="diameter"
                  name="diameter"
                  component={renderFieldDiameter}
                  required
                  onChange={handleDiameter}
                  value={diameterPiz}
                  min={20}
                  step={10}
                  max={60}
                />
              </BoxInput>
            </BoxPizzaOptions>
          )) ||
            (dishType === "soup" && (
              <BoxInput>
                <LabelText component="label" htmlFor="spiciness_scale">
                  Spiciness: {spicinessScale}
                </LabelText>
                <Field
                  id="spiciness_scale"
                  name="spiciness_scale"
                  component={renderFieldSpiceness}
                  onChange={handleSpiciness}
                  value={spicinessScale}
                  min={1}
                  max={10}
                />
              </BoxInput>
            )) ||
            (dishType === "sandwich" && (
              <BoxInput>
                <LabelText component="label" htmlFor="slices_of_bread">
                  Slices of bread
                </LabelText>
                <Field
                  id="slices_of_bread"
                  name="slices_of_bread"
                  component={renderFieldSliceBread}
                  type="number"
                  min={1}
                />
              </BoxInput>
            ))}
          <BoxButtons>
            <ButtonSubmit type="submit" variant="contained">
              sumbit
            </ButtonSubmit>
            <ButtonResetForm
              type="button"
              variant="outlined"
              disabled={pristine || submitting}
              onClick={resetForm}
            >
              reset
            </ButtonResetForm>
          </BoxButtons>
        </BoxForm>
      </form>
    </Container>
  );
}

const mapStateToProps = () => {
  return {
    initialValues: {
      id: "78787854",
    },
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "order",
    validate,
  })(DishesForm)
);
