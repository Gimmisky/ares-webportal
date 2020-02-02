import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  didInsertElement: function() {
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
  
  onUpdate: function() {
    return { psyche: this.get('char.custom.psyche') };
  }

  onUpdate: function() {
    return { gift: this.get('char.custom.gift') };
  }
  
});
