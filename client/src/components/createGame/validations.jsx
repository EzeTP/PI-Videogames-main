export const regexName = /^[a-zA-Z]+$/;

export const regexrating = /[0-5]/;

export const regexText = /^(?!.*  )(?=.*[\w-])[\w -]{1,600}$/;

export const regexUrl =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

export const validateName = (value) => {
  if (/^[a-zA-Z]+$/.test(value)) {
    return value;
  }
};

export const validateDescription = (value) => {
  if (/[0-5]/) {
    return value;
  }
};
