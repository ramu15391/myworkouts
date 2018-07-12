"use strict";

// doesn't like index.d.ts tho
// function responsiveFactory(name = 'tablet-or-smaller') {
//   const mixinName = '@' + name + '()'
//   return function styledForBreakpoint() {
//     const stylez = styled.apply(this, arguments)
//     return styled `
//       ${mixinName} {
//         ${stylez}
//       }
//     `
//   }
// }
// styled.tabletOrSmaller = responsiveFactory('tablet-or-smaller')
// styled.tabletOrLarger = responsiveFactory('tablet-or-larger')
// styled.phoneOrSmaller = responsiveFactory('phone-or-smaller')
// styled.phoneOrLarger = responsiveFactory('phone-or-larger')
// styled.desktopOrLarger = responsiveFactory('desktop-or-larger')
// mixin will always be a string, faster, nothing special
// styled.mixin
// // should be hoisted, needs finishing
// styled.hoist
// // should only use the first time it's rendered - if we have a list of things, we only need 1
// // it has to check to make sure at least 1 is still mounted though
// styled.once
// // these styles are local don't fux with them
// styled.local
// // put them into the head
// styled.global
// // if we have enough instances of this specific css, then we would hoist or put in global or use once, can do magix
// styled.auto / styled.todo / styled ``
// box-shadow: rem(1) rem(2) rem(2) #ccc;
// filter: alpha(opacity=100);
// 0-7, animate, toString
styled.materialShadow = function () {
  return 'box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);'; // 2
  // return 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'
}; // styled.materialShadow.withConfig = function(named) {
//   return styled.materialShadow
// }

/**
 * @api https://www.w3.org/TR/2013/WD-selectors4-20130502/#hover-pseudo
 * @see https://www.w3.org/wiki/CSS/Properties/cursor
 * @tutorial https://css-tricks.com/almanac/properties/c/cursor/
 * @example styled `&:hover { cursor: pointer; } `
 */


styled.cursorOnHover = `
  &:hover {
    cursor: pointer;
  }
`; // styled.cursorOnHover.withConfig = function(named) {
//   return styled.cursorOnHover
// }
// function once() {
//   console.warn('oncing @todo')
//   return styled.apply(this, arguments)
// }
// never hoist this

styled.local = styled; // only allow 1 usage of this, no magic, just 1 & otherwise ignore, no hoist
// styled.once = once
// styled.once.withConfig = styled.once

styled.once = styled; // always hoist this

styled.hoist = styled; // styled.global = styled
// local, but can auto hoist as needed depending on usage

styled.auto = styled; // not sure the scope of this

styled.todo = styled; // @todo - hope this works with babel-plugin...

const styledComponents = styled;
styled.withComponent = styledComponents.withComponent;
styled.keyframes = styledComponents.keyframes;
styled.css = styledComponents.css;
styled.EMPTY = styledComponents.EMPTY;
styled.global = styledComponents.global;
styled.injectGlobal = styledComponents.injectGlobal;
styled.toComponent = styled.toComponent;
styled.textarea = styledComponents['textarea'];
styled.ul = styledComponents['ul'];
styled.ol = styledComponents['ol'];
styled.li = styledComponents['li'];
styled.aside = styledComponents['aside'];
styled.figure = styledComponents['figure'];
styled.figcaption = styledComponents['figcaption'];
styled.img = styledComponents['img'];
styled.picture = styledComponents['picture'];
styled.main = styledComponents['main'];
styled.application = styledComponents['application'];
styled.article = styledComponents['article'];
styled.section = styledComponents['section'];
styled.address = styledComponents['address'];
styled.abbr = styledComponents['abbr'];
styled.acronym = styledComponents['acronym'];
styled.summary = styledComponents['summary'];
styled.nav = styledComponents['nav'];
styled.menu = styledComponents['menu'];
styled.footer = styledComponents['footer'];
styled.header = styledComponents['header'];
styled.h1 = styledComponents['h1'];
styled.h2 = styledComponents['h2'];
styled.h3 = styledComponents['h3'];
styled.h4 = styledComponents['h4'];
styled.h5 = styledComponents['h5'];
styled.h6 = styledComponents['h6'];
styled.form = styledComponents['form'];
styled.input = styledComponents['input'];
styled.label = styledComponents['label'];
styled.legend = styledComponents['legend'];
styled.fieldset = styledComponents['fieldset'];
styled.list = styledComponents['list'];
styled.button = styledComponents['button'];
styled.select = styledComponents['select'];
styled.progress = styledComponents['progress'];
styled.meter = styledComponents['meter'];
styled.link = styledComponents['link'];
styled.script = styledComponents['script'];
styled.meta = styledComponents['meta'];
styled.title = styledComponents['title'];
styled.style = styledComponents['style'];
styled.time = styledComponents['time']; // media

styled.video = styledComponents['video'];
styled.media = styledComponents['media'];
styled.audio = styledComponents['audio']; // overused & generic

styled.span = styledComponents['span'];
styled.div = styledComponents['div'];
styled.p = styledComponents['p'];
styled.a = styledComponents['a'];
styled.small = styledComponents['small']; // added

styled.dt = styledComponents['dt'];
styled.dl = styledComponents['dl'];
styled.dd = styledComponents['dd'];
styled.option = styledComponents['option'];