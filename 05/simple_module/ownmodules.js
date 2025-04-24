exports.mydateTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
};

exports.mySchool = () => {
  return "Dhurakit Pundit University";
};
