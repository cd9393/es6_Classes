// const PubSub = require('../helpers/pub_sub.js');
import PubSub from "../helpers/pub_sub.js";
 class InstrumentFamilies{

  constructor(data){
    this.data = data;
  }

  bindEvents(){

    console.log("Working");
    PubSub.publish('InstrumentFamilies:data-ready', this.data);

    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      console.log(selectedIndex);
      this.publishFamilyDetail(selectedIndex);
    });
  }

  publishFamilyDetail(selectedIndex){
    const selectedFamily = this.data[selectedIndex];
    console.log(selectedFamily);
    PubSub.publish('InstrumentFamilyView:selected-family-ready', selectedFamily)
  };

}

export default InstrumentFamilies;

// const InstrumentFamilies = function (data) {
//   this.data = data;
// };
//
// InstrumentFamilies.prototype.bindEvents = function () {
//   PubSub.publish('InstrumentFamilies:data-ready', this.data);
//
//   PubSub.subscribe('SelectView:change', (evt) => {
//     const selectedIndex = evt.detail;
//     this.publishFamilyDetail(selectedIndex);
//   });
// };
//
// InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
//   const selectedFamily = this.data[selectedIndex];
//   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
// };

// module.exports = InstrumentFamilies;
