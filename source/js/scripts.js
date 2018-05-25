
// Get aggregate height of NodeList elements
let elemsHeight = (nodes) => { let h = 0; for (let el of nodes) {h += el.offsetHeight}; return h; };

// Set height of .section__inner--left
parentEl(select('.p__left')).style.height = select('.p__left').offsetHeight + "px";
// Set height of .section__inner--right
parentEl(select('.p__right')).style.height = elemsHeight(selectAll('.p__right')) + "px";