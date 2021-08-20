class Validations {
  validatePostForm(formInput: any) {
    let result = {
      errName: false,
      errPrice: false,
      errCategory: false,
      errNewPercentage: false,
      errDescription: false,
      errStreet: false,
      errCity: false,
      errDistrict: false,
      errWard: false,
      errImages: false
    };

    if (!formInput.name) result = { ...result, errName: true };
    if (isNaN(formInput.price) || formInput.price <= 0)
      result = { ...result, errPrice: true };
    if (!formInput.category) result = { ...result, errCategory: true };
    if (
      !formInput.newPercentage ||
      formInput.newPercentage <= 0 ||
      formInput.newPercentage > 100
    )
      result = { ...result, errNewPercentage: true };
    if (!formInput.description) result = { ...result, errDescription: true };
    if (!formInput.street) result = { ...result, errStreet: true };
    if (!formInput.city) result = { ...result, errCity: true };
    if (!formInput.district) result = { ...result, errDistrict: true };
    if (!formInput.ward) result = { ...result, errWard: true };
    if (!formInput.images.length) result = { ...result, errImages: true };
    return result;
  }
  validateEditForm(formInput: any) {
    let result = {
      errName: false,
      errPrice: false,
      errCategory: false,
      errNewPercentage: false,
      errDescription: false,
      errStreet: false,
      errCity: false,
      errDistrict: false,
      errWard: false,
      errState: false,
      errImages: false
    };

    if (!formInput.name) result = { ...result, errName: true };
    if (isNaN(formInput.price) || formInput.price <= 0)
      result = { ...result, errPrice: true };
    if (!formInput.category) result = { ...result, errCategory: true };
    if (
      !formInput.newPercentage ||
      formInput.newPercentage <= 0 ||
      formInput.newPercentage > 100
    )
      result = { ...result, errNewPercentage: true };
    if (!formInput.description) result = { ...result, errDescription: true };
    if (!formInput.street) result = { ...result, errStreet: true };
    if (!formInput.city) result = { ...result, errCity: true };
    if (!formInput.district) result = { ...result, errDistrict: true };
    if (!formInput.ward) result = { ...result, errWard: true };
    if (!formInput.state) result = { ...result, errState: true };
    if (!formInput.images.length) result = { ...result, errImages: true };
    return result;
  }
  validateCheckoutForm(formInput: any) {
    let result = {
      errName: false,
      errPhone: false,
      errEmail: false,
      errStreet: false,
      errCity: false,
      errDistrict: false,
      errWard: false
    };
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!formInput.name) result = { ...result, errName: true };
    if (!formInput.phone) result = { ...result, errPhone: true };
    if (!formInput.email)
      result = { ...result, errEmail: !emailPattern.test(formInput.email) };
    if (!formInput.street) result = { ...result, errStreet: true };
    if (!formInput.city) result = { ...result, errCity: true };
    if (!formInput.district) result = { ...result, errDistrict: true };
    if (!formInput.ward) result = { ...result, errWard: true };
    return result;
  }
}

export default Validations;
