const logCreated = {
  created() {
    window.gtag_event && window.gtag_event(location.pathname);
  }
};
export {
  logCreated as l
};
