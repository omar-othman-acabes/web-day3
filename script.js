let submit = document.getElementById("submit");
document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

let patterns = {
  letters_and_spaces: /^[a-zA-Z\s]+$/,
  letters_only: /^[a-zA-Z]+$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  digits_only: /^-?\d+(\.\d+)?$/,
  url: /^https?:\/\/[^\s/$.?#].[^\s]*$/,
  facebook_url: /^https:\/\/(www\.)?facebook\.com\/.*/,
  twitter_handle: /^@[a-zA-Z0-9_]{1,15}$/,
  linkedin_handle:
    /^(https:\/\/www\.linkedin\.com\/in\/)?[a-zA-Z0-9-_.]{3,}(\/)?$/,
  anything: /.*/,
  non_empty: /^(?!\s*$).+/,
};

let inputs = {
  prefex: {
    id: "prefex",
    pattern: patterns.letters_and_spaces,
  },
  fname: {
    id: "fname",
    pattern: patterns.letters_only,
  },
  lname: {
    id: "lname",
    pattern: patterns.letters_only,
  },
  perpro: {
    id: "pref-pro",
    pattern: patterns.letters_only,
  },
  email: {
    id: "email",
    pattern: patterns.email,
  },
  workphone: {
    id: "workphone",
    pattern: patterns.digits_only,
  },
  cellphone: {
    id: "cellphone",
    pattern: patterns.digits_only,
  },
  job_title: {
    id: "job-title",
    pattern: patterns.letters_and_spaces,
  },
  company: {
    id: "com",
    pattern: patterns.letters_and_spaces,
  },
  address: {
    id: "address",
    pattern: patterns.letters_and_spaces,
  },
  website: {
    id: "website",
    pattern: patterns.url,
  },
  fbpage: {
    id: "fb-page",
    pattern: patterns.facebook_url,
  },
  twitter_handle: {
    id: "twitter-handle",
    pattern: patterns.twitter_handle,
  },
  linkedin_handle: {
    id: "linkedin-handle",
    pattern: patterns.linkedin_handle,
  },
  add_guests: {
    id: "add-guests",
    pattern: patterns.anything,
  },
  com_desc: {
    id: "desc",
    pattern: patterns.non_empty,
  },
};

function validate(key) {
  let pattern = inputs[key].pattern;
  let id = inputs[key]["id"];
  let element = document.getElementById(id);
  let value = element.value;
  let valid = pattern.test(value);

  if (valid) {
    element.style.backgroundColor = "#eaf5eb";
  } else {
    element.style.backgroundColor = "#f5eaea";
  }
}

submit.addEventListener("click", (e) => {
  for (const property in inputs) {
    validate(property);
  }
});
