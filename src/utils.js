export const captureById = (id) => {
  var c = document.getElementById(id);
  var t = c.getContext("2d");
  window.open("", document.getElementById("the_canvas_element_id").toDataURL());
};
