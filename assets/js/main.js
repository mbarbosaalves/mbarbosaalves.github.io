// Toggle paper abstracts: each .paper__abs-btn shows/hides the matching
// #<data-abs-target> panel.
document.querySelectorAll('.paper__abs-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var id = btn.getAttribute('data-abs-target');
    if (!id) return;
    var panel = document.getElementById(id);
    if (!panel) return;
    var willShow = panel.hidden;
    panel.hidden = !willShow;
    btn.setAttribute('aria-expanded', String(willShow));
  });
});
