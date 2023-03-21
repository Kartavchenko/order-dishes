export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = true;
  }
  if (!values.preparation_time) {
    errors.preparation_time = true;
  }
  if (!values.type) {
    errors.type = true;
  }
  if (!values.diameter) {
    errors.diameter = true;
  }
  if (!values.no_of_slices) {
    errors.no_of_slices = true;
  }
  if (!values.spiciness_scale) {
    errors.spiciness_scale = true;
  }
  if (!values.slices_of_bread) {
    errors.slices_of_bread = true;
  }
  return errors;
};