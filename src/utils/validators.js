function validateEmpty(formData, errors) {
   Object.entries(formData).map(([key, value]) => {
      if (!String(value).replaceAll(" ", "")) {
         errors[key] = "لطفا این فیلد را پر کنید";
      }
   });
};

function registerFormValidator(formData) {
   const errors = {};
   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

   if (formData.name.length < 3) {
      errors.name = "نام باید حداقل 3 حرف باشد";
   }

   if (!emailRegex.test(formData.email)) {
      errors.email = "ایمیل معتبر نمی باشد";
   }

   if (!passwordRegex.test(formData.password)) {
      errors.password = "رمز باید باید حداقل دارای 8 حرف، 1 حرف بزرگ، 1 حرف کوچک، 1 عدد باشد";
   }

   validateEmpty(formData, errors);

   return errors;
};

function completeFormValidator(formData) {
   const errors = {}
   const phoneRegex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g

   if(!phoneRegex.test(formData.phone)) {
      errors.phone = "یک شماره موبایل معتبر وارد کنید"
   }

   if(formData.postCode.length < 5) {
      errors.postCode = "یک کد پستی معتبر وارد کنید"
   }

   validateEmpty(formData, errors)

   return errors
}

function loginFormValidator(formdata) {
   const errors = {}
   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

   if(!emailRegex.test(formdata.email)) {
      errors.email = "لطفا یک ایمیل معتبر وارد کنید"
   }

   validateEmpty(formdata, errors)

   return errors
}

function profileFormValidator(formData) {
   const { tasks, ...dataToValidate } = formData
   const errors = {}
   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   const phoneRegex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g

   if(!emailRegex.test(dataToValidate.email)) {
      errors.email = "لطفا یک ایمیل معتبر وارد کنید"
   }

   if(!phoneRegex.test(dataToValidate.phone)) {
      errors.phone = "یک شماره موبایل معتبر وارد کنید"
   }

   if(dataToValidate.postCode.length < 5) {
      errors.postCode = "یک کد پستی معتبر وارد کنید"
   }

   if (dataToValidate.name.length < 3) {
      errors.name = "نام باید حداقل 3 حرف باشد";
   }

   validateEmpty(dataToValidate, errors)

   return errors
}

function taskFormValidator(formData) {
   const errors = {}
   
   if(!formData.title.replaceAll(" ", "")){
      errors.title = "لطفا این فیلد را پر کنید"
   }

   return errors
}

export { 
   registerFormValidator, 
   completeFormValidator, 
   loginFormValidator, 
   profileFormValidator,
   taskFormValidator
};
